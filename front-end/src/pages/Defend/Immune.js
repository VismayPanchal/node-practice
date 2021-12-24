import { type, svgs } from "../../const";

const Immune = (props) => {
  let indices = [];
      var len = Array.isArray(props.immune)? props.immune.length:0
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < type.length; j++) {
        if (type[j].value === props.immune[i]) indices.push(j);
      }
    }
  return (
    <div style={{float:"left",marginLeft:40}}>
        <h2>Immune </h2><h3>0.391X damage</h3>
      {(props.immune && indices.length) &&
        props.immune.map((immunes, i) => (
          <p key={i}>
          <label>  <img src={svgs[indices[i]]} style={{width:'40px',height:'40px',verticalAlign:'middle',margin:5}} />
          {immunes}</label>
          </p>
        ))}
    </div>
  );
};

export default Immune;
