import { range } from "./utils.js";

// eslint-disable-next-line react/prop-types
function Grid({ numRows, numCols }) {
  const columnBox = range(numCols).map((cols, index) => {
    cols = (
      <div
        className="cell"
        style={{ height: "5rem", width: "6.5rem", border: "solid 2px black" }}
        key={index}
      ></div>
    );

    return cols;
  });

  const rowBox = range(numRows).map((cols, index) => {
    cols = (
      <div
        style={{ height: "5rem", width: "15rem" }}
        className="row"
        key={index}
      >
        {columnBox}
      </div>
    );

    return cols;
  });

  return <div className="grid">{rowBox}</div>;
}

export default Grid;
