import { type, svgs } from "../../const";
import { Card } from 'react-bootstrap';
const Immune = (props) => {
  let indices = [];
      var len = Array.isArray(props.immune)? props.immune.length:0
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < type.length; j++) {
        if (type[j].value === props.immune[i]) indices.push(j);
      }
    }
  return (
    <Card className='card'>
        <h2>Immune </h2><h3>0.391X damage</h3>
      {(props.immune && indices.length) &&
        props.immune.map((immunes, i) => (
          <label key={i}>
          <label>  <img src={svgs[indices[i]]} style={{width:'40px',height:'40px',verticalAlign:'middle',margin:5}} />
          {immunes}</label>
          </label>
        ))}
    </Card>
  );
};

export default Immune;
