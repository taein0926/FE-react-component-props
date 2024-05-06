import "./Button.css";

const Button = (props) => {
  return (
    <button className="btn"
    style={{backgroundColor: props.color}}
    onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;