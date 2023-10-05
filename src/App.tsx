import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const visitorCount = localStorage.getItem("visitorCount");

    if (visitorCount) {
      count = parseInt(visitorCount);
    }

    count++;
    console.log(count);

    localStorage.setItem("visitorCount", count.toString());
    setVisitorCount(count);
  }, []);

  return (
    <div className="app">
      <div className="header">        
          <h2>My Blog</h2>
          <img src="new_image_name.jpg"></img>
      </div>

      <div className="content">
           Donald John Trump is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021. Trump graduated from the Wharton School of the University of Pennsylvania with a bachelor's degree in 1968.
      </div>
      <div>Visitor Count: {visitorCount}</div>
    </div>
  );
}

export default App;
