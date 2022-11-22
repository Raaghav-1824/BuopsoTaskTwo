import React from "react";
function Button(props) {
  // const [total, setTotal] = React.useState(parseInt(0));
  function handleClick() {
    props.setTotal(
      (parseInt(props.count) * (parseInt(props.count) + parseInt(1))) /
        parseInt(2)
    );
  }
  return (
    <button
      // total={total}
      type="button"
      style={{ margin: "5px" }}
      className="btn btn-primary"
      onClick={props.handleClick}
      // {() => {
      //   setTotal(
      //     (parseInt(props.value) * (parseInt(props.value) + parseInt(1))) /
      //       parseInt(2)
      //   );
      //   // setCount("");
      // }}
    >
      {props.label}
    </button>
  );
}

export default Button;
