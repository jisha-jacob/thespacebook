/*Like button to like or dislike the image displayed.
https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react */

import React, { Component } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Like.css';
class Like extends Component {
state = { liked: false };

// Function to toggle the state variable liked
toggle = () => {
	let localLiked = this.state.liked;
	localLiked = !localLiked;
	this.setState({ liked: localLiked });
};
render() {
	return (
		/*Enclosed in button to make the icon accesible with aria-label */
		<button tabIndex='0' onClick={this.toggle}
		title="Like or Dislike"  
		aria-label={this.state.liked?"Liked":"Unliked"}
		 >
		{/*Color of icon is based on liked. Blue means liked and default black is not liked.*/}
		<FontAwesomeIcon icon={faThumbsUp} 
		style={this.state.liked?{color:"blue" }:null }
		/>
		</button>
	);
}
}

export default Like;
