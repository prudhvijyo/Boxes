const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-text">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="box-container">
    <h1 class="heading">Boxes</h1>
    <div class="box-list">
      <Box className="small-box" text="Small" />
      <Box className="medium-box" text="Medium" />
      <Box className="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
