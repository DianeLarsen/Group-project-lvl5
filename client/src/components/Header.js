import React from "react";
import "../CssFiles/Header.css"

export default function Header() {
  return (
    <header className="header-wrapper-outer" id="grid-container">
      
      <svg className="logo"
        // class="style-svg replaced-svg svg-replaced-6"
        width= "50px" height="50px"
        viewBox="0 0 100 100"
        // data-name="Layer 1"
        // id="Layer_1"
        // xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f2aa79"
          d="M78.55,47.06H65.46V68.24a5.22,5.22,0,0,1-5.21,5.22H47.71v4.43a6.85,6.85,0,0,0,6.85,6.86h24a6.85,6.85,0,0,0,6.84-6.86v-24A6.85,6.85,0,0,0,78.55,47.06Z"
        ></path>
        <path
          fill="#426a8f"
          d="M30.27,73.46a5.22,5.22,0,0,1-5.21-5.22V47.06H12a6.86,6.86,0,0,0-6.86,6.85v24A6.86,6.86,0,0,0,12,84.75H36a6.85,6.85,0,0,0,6.85-6.86V73.46Z"
        ></path>
        <path
          fill="#92a1bb"
          d="M78.55,4.48h-24a6.85,6.85,0,0,0-6.85,6.85V14.6a5.12,5.12,0,0,1,1.55,1.05L70,36.41a5.31,5.31,0,0,1,1,1.52,3.69,3.69,0,0,1,.47,1.8c0,.05,0,.09,0,.14a1.64,1.64,0,0,1,0,.22h0a3.59,3.59,0,0,1-.93,2.07h8a6.84,6.84,0,0,0,6.84-6.85v-24A6.85,6.85,0,0,0,78.55,4.48Z"
        ></path>
        <path
          fill="#e36725"
          d="M19,39.73a3.69,3.69,0,0,1,.57-2,5.47,5.47,0,0,1,1-1.35L41.28,15.65a5.32,5.32,0,0,1,1.53-1V11.33A6.85,6.85,0,0,0,36,4.48H12a6.86,6.86,0,0,0-6.86,6.85v24A6.85,6.85,0,0,0,12,42.16H19.9A3.62,3.62,0,0,1,19,39.73Z"
        ></path>
        <path
          fill="#e36725"
          d="M61.38,39.3a5.37,5.37,0,0,0-3.87-1.49,5.65,5.65,0,0,0-2.94.82,4.11,4.11,0,0,0-1.71,1.89,4.11,4.11,0,0,0-1.71-1.89,5.68,5.68,0,0,0-2.95-.82,5.42,5.42,0,0,0-3.88,1.49,5,5,0,0,0-1.54,3.8,6.74,6.74,0,0,0,1.58,4.32l.94,1,.62.68s6.28,6.2,6.93,6.85v0h0v0l6.94-6.85.61-.68,1-1a6.8,6.8,0,0,0,1.58-4.32A5,5,0,0,0,61.38,39.3Z"
        ></path>
       
      </svg>
 
      
      <nav>
        <ul className="nav_links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Lots">Info</a>
          </li>
          <li>
            <a href="/Posts">Posts</a>
          </li>
        </ul>
      </nav>
      {/* <a className="cta" href="#">
          <button>Contact</button>
        </a> */}
    </header>
  );
}
