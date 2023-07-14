import React, { useState } from "react";
import Tables from "./Tables";
import "./First.css";

function First() {
  return (
    <div class="main">
      <div className="box">
        {Tables.map((Tables) => (
          <div className="content">
            <div className="icon">
              <div
                className="pic"
                style={{ content: `url(${Tables.icon})` }}
              ></div>
            </div>
            <div className="text">
              <h3> {Tables.title} </h3>
              <h5> {Tables.text}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default First;
