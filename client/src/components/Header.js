import React from "react";

export default function Header() {
  return (
    <header className="header-wrapper-outer" id="grid-container">
      <a className="logo" href="/#">
      <i class="fa-solid fa-house fa-2x"></i>
      </a>
      <nav>
        <ul className="nav_links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/Lots">Neighbor Info</a>
          </li>
          <li>
            <a href="/Posts">Posts</a>
          </li>

        </ul>
        
      </nav>
      <a className="cta" href="#">
          <button>Contact</button>
        </a>
    </header>
  );
}
