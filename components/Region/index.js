import { useState } from "react";
import StyledRegion from "./styles";

const Region = ({ region, setRegion, dark }) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledRegion dark={dark ? true : false}>
      <div className="select" onClick={() => setOpen((prevOpen) => !prevOpen)}>
        Filter by Region
        <span>
          <i className="fas fa-chevron-down"></i>
        </span>
      </div>
      {open && (
        <div className="option" onClick={() => setOpen(false)}>
          <li
            onClick={() => {
              setRegion("");
            }}
            className={region === "" ? "active" : ""}
          >
            All
          </li>
          <li
            onClick={() => {
              setRegion("africa");
            }}
            className={region === "africa" ? "active" : ""}
          >
            Africa
          </li>
          <li
            onClick={() => {
              setRegion("americas");
            }}
            className={region === "americas" ? "active" : ""}
          >
            America
          </li>
          <li
            onClick={() => {
              setRegion("asia");
            }}
            className={region === "asia" ? "active" : ""}
          >
            Asia
          </li>
          <li
            onClick={() => {
              setRegion("europe");
            }}
            className={region === "europe" ? "active" : ""}
          >
            Europe
          </li>
          <li
            onClick={() => {
              setRegion("oceania");
            }}
            className={region === "oceania" ? "active" : ""}
          >
            Oceania
          </li>
        </div>
      )}
    </StyledRegion>
  );
};

export default Region;
