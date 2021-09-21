/*Component that has form with start and end date input.
The dates are displayed using a date picker.
*/


import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './SearchDatePicker.css';

function SearchDatePicker(props) {
 
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  
 return (
  <React.Fragment>
    <form className="Search">
    {/* Accesibilty feautre http://simplyaccessible.com/article/react-a11y/ */}
    <label htmlFor="Enter start date for image search">Start Date:</label>
     {/* Date picker for selecting start date.
      https://www.npmjs.com/package/react-datepicker*/}
     <DatePicker
       selected={props.startDate}
       startDate={startDate}
       endDate={endDate}
       maxDate={new Date()}
       onSelect={(date)=>setStartDate(date)}
       onChange={props.changeStartDate}
       placeholderText="Enter start date"
       tabIndex='0'
       aria-describedby="Start Date">
       </DatePicker>
      <label htmlFor="Enter end date for image search">End Date:</label>
       {/* Date picker for selecting end date.
      https://www.npmjs.com/package/react-datepicker*/}
      <DatePicker
       selected={props.endDate}
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       maxDate={new Date()}
       onChange={props.changeEndDate}
       onSelect={(date)=>setEndDate(date)}
       placeholderText="Enter end date"
       tabIndex='0'
       aria-describedby="End Date"
     >
     </DatePicker>
   </form>
   </React.Fragment>

 );
}

export default SearchDatePicker;