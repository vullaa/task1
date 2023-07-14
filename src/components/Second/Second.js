import React from "react";
import "./Second.css";
import Cards from "./Cards";
import Patches from "./Patches";

function Second() {
  return (
    <div className="app">
      {Cards.map((patch) => (
        <div className="card">
          <div className="version">{patch.version}</div>
          <div className="part1">
            <div className="type">{patch.type}</div>
            <div className="person">
              <div
                className="icon1"
                style={{ content: `url(${patch.icon})` }}
              ></div>
              <div className="name">{patch.name}</div>
            </div>
          </div>
          <div className="descriptions">
            <div className="description">{patch.description}</div>
          </div>
          {/* <div className="button">{patch.button}</div> - If there is different buttons, but in this case the one below should do */}
          <button className="button"> Download </button>
        </div>
      ))}
    </div>
  );
}

export default Second;
