import React, { useState } from "react";
import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/button";
import Label from "./components/label";

export default function App() {
  const [count, setCount] = useState();
  const [total, setTotal] = useState(parseInt(0));

  function handleChange(event) {
    if (event.target.value < 0) {
      alert("Enter Integer number greater than Zero !");
    } else {
      setCount(event.target.value);
    }
  }

  return (
    <div>
      <Counter name="Sum" value={total} />
      <div className="input-group mb-2">
        <input
          style={{ margin: "5px", width: "30px" }}
          className="form-control"
          id="a"
          onChange={handleChange}
          type="number"
          value={count}
          placeholder="Enter number "
        />
        <div className="input-group-append">
          <button
            type="button"
            style={{ margin: "5px" }}
            className="btn btn-primary"
            onClick={() => {
              setTotal(
                (parseInt(count) * (parseInt(count) + parseInt(1))) /
                  parseInt(2)
              );
              // setCount("");
            }}
          >
            <h3>Sum</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

const Counter = React.memo(function Counter({ name, value }) {
  console.log(`Rendering counter ${name}`);
  return (
    <div>
      <Label name={name} value={value} />
      {/* <label>
        <h1>
          {name} = {value}
        </h1>
      </label> */}
    </div>
  );
});
