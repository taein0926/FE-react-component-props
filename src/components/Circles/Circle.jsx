import "./Circle.css";

const Circle = (props) => {
    return (
        <div
        className="circle"
        style={{
            backgroundColor: props.circleColor || "black",
        }}
        >
        </div>
    );
    };

export default Circle;