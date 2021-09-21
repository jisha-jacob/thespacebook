/*Images class container where the date filter and 
the extracted images reside.
The API call is also done in this component.*/


import React, { Component } from "react";
import SearchDatePicker from "../components/SearchDatePicker";
import DisplayImages from "../containers/DisplayImages";
import moment from "moment";

const API_KEY = process.env.REACT_APP_API_KEY;
class Images extends Component {
  /*State definitions*/
  state = {
    imagesData: [],
    startDate: new Date(),
    endDate: new Date(),
    isLoading: false,
  };

  //Call to method that calls the API passing the start and end dates on mount
  componentDidMount() {
    this.loadData(this.state.startDate, this.state.endDate);
  }

  //Method to change state of start date to the selected date in datepicker
  startDateChangedHandler = (start) => {
    this.setState({ startDate: start });
    this.loadData(start, this.state.endDate);
  };

  //Method to change state of end date to the selected date in datepicker
  endDateChangedHandler = (end) => {
    this.setState({ endDate: end });
    this.loadData(this.state.startDate, end);
  };

  /*Method to call API. The date is formatted to match the field format 
  required in the API call.
  isLoading state is updated.
  TODO:Bad request errors to be handled.
  TODO:Prompt user to enter Date between Jun 16, 1995 and current date. 
  (API has first entry on Jun 16 1995)
  */
  loadData = (startDate, endDate) => {
    this.setState({ isLoading: true });
    let formattedStartDate = moment(startDate).format("YYYY-MM-DD");
    let formattedEndDate = moment(endDate).format("YYYY-MM-DD");
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${formattedStartDate}&end_date=${formattedEndDate}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ imagesData: data, isLoading: false });
      })
      .catch((err) => console.log(err))
   
  };

  render() {

       return (
        <React.Fragment>
          {/* Accessibilty feature to read out number of results fetched in API call.
          https://www.freecodecamp.org/news/next-level-accessibility-freecodecamp-guide-7cbd6473eabd/
          TODO:Currently not sending appropriate message for zero results in accessibilty.
          TODO:Number of images is incorrect as the resultset includes video too which is not
          currently displayed in the App.
            */}
          <div
            aria-atomic="true"
            aria-live="polite"
            className="sr-only"
            role="status"
          >
            {" "}
            {`${this.state.imagesData.length} image${
              this.state.imagesData.length === 1 ? "" : "s"
            } found`}
          </div>
          {/*Date Picker to select start and end dates*/}
          <SearchDatePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            changeStartDate={this.startDateChangedHandler}
            changeEndDate={this.endDateChangedHandler}
          />
          {/*Component where the result set is processed*/}
          <DisplayImages imagesData={this.state.imagesData} isLoading={this.state.isLoading} />
        </React.Fragment>
      );
    }
  }
  


export default Images;
