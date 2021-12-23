import { type, svgs } from "../const";

const Resistance = (props) => {
  let indices = [];
      var len = Array.isArray(props.resistance)? props.resistance.length:0
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < type.length; j++) {
        if (type[j].value === props.resistance[i]) indices.push(j);
      }
    }
  return (
    <div>
        <h2>Resistances</h2>
      {(props.resistance && indices.length) &&
        props.resistance.map((resistances, i) => (
          <p key={i}>
          <label>  <img src={svgs[indices[i]]} style={{width:'40px',height:'40px',verticalAlign:'middle',margin:5}} />
          {resistances}</label>
          </p>
        ))}
    </div>
  );
};

export default Resistance;
