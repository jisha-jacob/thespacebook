/* Container where the results from the API call is processed.
 */
import Photo from "../components/Photo";
import Loader from "react-loader-spinner";
import "./DisplayImages.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const DisplayImages = (props) => {

  /* Function where the Array of images are accessed using map()
  and each image is passed to the Photo component */
  function showImage() {
    return props.imagesData.map((image) => {
      return (
        <Photo
          key={image.url}
          photo={image.url}
          title={image.title}
          media_type={image.media_type}
          date={image.date}
        />
      );
    });
  }
    /*Showing Loading during the API fetch using
  https://www.npmjs.com/package/react-loader-spinner
  TODO:Accessibility for Loader to be added*/

 if (props.isLoading) {
    return    <Loader type="Circles" color="#00BFFF" height={80} width={80} 
  />;
  } 
  /*Display appropriate message when no images are there in the specified date range
  or if the returned result is video.
  Example:Start Date-17 Sept 2021, End Date-17Sept 2021 has no Images.
  Currently displaying only images on the page.*/
  else if ((props.imagesData.length === 0)||((props.imagesData.length===1)&&(props.imagesData[0].media_type==="video"))) {
    return (
      <div className="DisplayImagesErr">
        Sorry, no images found.
          </div>
    );
  }
  /*Call function to display each image from result set.*/ 
  else {
    return <div className="DisplayImages">{showImage()}</div>;
  }
  }
export default DisplayImages;
