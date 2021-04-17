import React from 'react';
import facebook from "./../../assets/icons/facebook.svg";
import instagram from "./../../assets/icons/instagram.svg";
import slack from "./../../assets/icons/slack.svg";
import twitter from "./../../assets/icons/twitter.svg";
import github from "./../../assets/icons/github.svg";
import "./icon.scss"

export default function Icon() {
    return (
        <div className="icons">
<a href="https://www.facebook.com/"><img src={facebook} alt=""></img></a>
<a href="https://www.instagram.com/"><img src={instagram} alt=""></img></a>
<a href="https://app.slack.com/"><img src={slack} alt=""></img></a>
<a href="https://twitter.com/"><img src={twitter} alt=""></img></a>
<a href="https://github.com/"><img src={github} alt=""></img></a>
        </div>
    )
}
