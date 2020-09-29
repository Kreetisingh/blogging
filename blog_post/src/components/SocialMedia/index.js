import React from 'react'
import './style.css';

/**
* @author
* @function SocialMedia
**/

const SocialMedia = (props) => {
  return(
    <div style={{...props}} className="SocialMediaContainer">

        <a href="http://www.fb.com"><img src={require('../../assets/icons/fb.png')} alt="fb"></img></a>
        <a href="http://www.instagram.com"><img src={require('../../assets/icons/insta.png')} alt="insta"></img> </a>
        <a href="http://www.twitter.com/"> <img src={require('../../assets/icons/twitter.png')} alt="twitter"></img> </a>

    </div>
   )

 }

export default SocialMedia