import { type, svgs } from "../../const";
import { Card } from 'react-bootstrap';
const Resistance = (props) => {
  let indices = [];
      var len = Array.isArray(props.resistance)? props.resistance.length:0
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < type.length; j++) {
        if (type[j].value === props.resistance[i]) indices.push(j);
      }
    }
  return (
<Card>

<div style={{float:"left",marginLeft:40}} >
       {props.details!==true && (<> <h2>Resistances</h2><h3>0.625X damage</h3></>)}
      {(props.resistance && indices.length) &&
        props.resistance.map((resistances, i) => (
          <p key={i}>
          <label>  <img src={svgs[indices[i]]} style={{width:'40px',height:'40px',verticalAlign:'middle',margin:5}} />
          {resistances}</label>
          {props.details!==true && <br/>}
          </p>
        ))}
        </div>
    </Card>
  );
};

export default Resistance;
