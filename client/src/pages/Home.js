import React from "react";

export default function Home() {
  return (
    <div className="home">
      
      <div className="intro-container">
        <img
          className="home-img"
          src="https://images.unsplash.com/photo-1588373731788-510100bfd700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="random neighborhood"
        />
        <div className="about-us">
          <h2>Our Community</h2>
          <br/>
          <p>
            This site was built to give out community a place to communitcate
            and interact. This is our virtual bulitin board, our town hall and
            community center.
          </p>
        </div>
      </div>
      <div className="news-container">
        <h2>News and Events!</h2>
        <h3>**********COMING SOON**********</h3>
      </div>
    </div>
  );
}
