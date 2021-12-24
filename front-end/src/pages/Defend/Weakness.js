import { type, svgs } from "../../const";

const Weakness = (props) => {
  let indices = [];
      var len = Array.isArray(props.weakAgainst)? props.weakAgainst.length:0
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < type.length; j++) {
        if (type[j].value === props.weakAgainst[i]) indices.push(j);
      }
    }
  return (
    <div style={{float:"left",marginLeft:40}} >
        <h2>Weak agianst</h2> <h3>1.60X damage</h3>
      {(props.weakAgainst && indices.length) &&
        props.weakAgainst.map((weak, i) => (
          <p key={i}>
          <label>  <img src={svgs[indices[i]]} style={{width:'40px',height:'40px',verticalAlign:'middle',margin:5}} />
          {weak}</label>
          </p>
        ))}
    </div>
  );
};

export default Weakness;
