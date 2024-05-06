import useState from 'react';
import Button from "../components/Button/Button";

const SelectButtons = () => {
  const [selected, setSelected] = useState("default");

  const handleClick = (id) => {
    setSelected(id);
  }

  return (
    <div className="selectBtns">
      <Button buttonText="Primary"
      color={selected === "Primary" ? "pink" : "blue"}
      onClick={() => handleClick("Primary")}></Button>
      <Button buttonText="Secondary"
      color={selected === "Primary" ? "pink" : "blue"}
      onClick={() => handleClick("Secondary")}></Button>
      <Button buttonText="Default"
      color={selected === "Primary" ? "pink" : "blue"}
      onClick={() => handleClick("Default")}></Button>
    </div>
  );
};

export default SelectButtons;
