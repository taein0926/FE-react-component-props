import Box from "../components/Box/Box";
import Circle from "../components/Circles/Circle";

const BoxAlign = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <div>
      <Box boxColor="red" text="A"/>
      <Box boxColor="blue" text="B"/>
      <Box boxColor="green" text="C"/>
      <Box boxColor="pink" text="D"/>
      <div
        style={{
          display: "flex",
          width: "100vw"
        }}
      >
        {circleColorArr.map((color)=>(
          <Circle key={color} circleColor={color}/>
        ))}
      </div>
    </div>
  );
};

export default BoxAlign;
