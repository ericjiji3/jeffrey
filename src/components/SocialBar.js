import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery';
import {
  faYoutube,
  faFacebookF,
  faTwitter,
  faInstagram,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";


export default function SocialBar(){
  return(
    <div className = "socialContainer text-center">
      <a href = "https://www.facebook.com/jeffmacas" className = "youTube px-3">
        <FontAwesomeIcon icon={faFacebookF} size = "2x"/>
      </a>
      <a href = "https://twitter.com/jeffreysupplyco" className = "twitter px-3">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href = "https://www.instagram.com/jeffreysupplyco/" className = "instagram px-3">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  )
}
