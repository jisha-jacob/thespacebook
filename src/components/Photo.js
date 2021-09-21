/* Component which renders images,title and date captured on to the screen.
Each image is checked for its media_type and
if it is an image it is displayed.
It is enclosed in a card and also has a Like button with it. */
import Card from "./UI/Card";
import "./Photo.css";
import Like from "./UI/Like";
import moment from "moment";

const Photo = (props) => {
  /*Date received from API isformatted to 'MM/DD/YYYY' for display to users */
  let formattedDate = moment(props.date).format("MM/DD/YYYY");
  let images = null;
  /*Check for media type */
  if (props.media_type === "image") {
    images = (
      <Card className="Photo">
        <img src={props.photo} alt={props.title} tabIndex="0" />
        <h5>{props.title}</h5>
        <h6>{formattedDate}</h6>
        <Like />
      </Card>
    );
  }

  return <div>{images}</div>;
};

export default Photo;
