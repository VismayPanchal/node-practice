import { useEffect,useState } from "react";
import { type,svgs } from "../const";
import Select, { components } from "react-select";
import Details from "./DetailsOfType";

const SelectType = (props) => {
  const { Option } = components;
  const [selectedOption, setSelectedOption] = useState(null);
 
  const handleChange = e => {
    setSelectedOption(e);
    props.get(e)
  }
 
  const CustomSelectOption = (props) => {
    return (
      <Option {...props}>
        <label>
          <img
            src={props.data.icon}
            style={{ width: "30px", height: "30px", float: "left" }}
          />
          {props.data.label}
        </label>
      </Option>
    );
  };

  useEffect(() => {
    for (let i = 0; i < type.length; i++) type[i].icon = svgs[i];
  }, []);
  return (
      <>
    <div style={{ width: "40%" }}>
      <Select
        options={type}
        onChange={handleChange}
        components={{
          Option: CustomSelectOption,
        }}
      />
    </div>
    </>
  );
};

export default SelectType;
