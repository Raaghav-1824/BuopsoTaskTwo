function Label(props) {
  return (
    <label>
      <h1>
        {props.name} = {props.value}
      </h1>
    </label>
  );
}

export default Label;
