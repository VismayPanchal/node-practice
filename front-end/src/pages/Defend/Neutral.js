import { simpleType,type, svgs } from "../../const";
import { Card } from 'react-bootstrap';
const Neutral = (props) => {
  let indices = [];
      var weaklen = Array.isArray(props.all.weakAgainst)? props.all.weakAgainst.length:0
      var immunelen = Array.isArray(props.all.immune)? props.all.immune.length:0
      var reslen = Array.isArray(props.all.resistance)? props.all.resistance.length:0

    var copyArray = [...simpleType]
    for(let i=0;i<weaklen;i++){
        console.log(props.all.weakAgainst[i])
        copyArray = copyArray.filter(val => val !== props.all.weakAgainst[i])
    }
    for(let i=0;i<reslen;i++){
        copyArray = copyArray.filter(val => val !== props.all.resistance[i])
    }
    for(let i=0;i<immunelen;i++){
        copyArray = copyArray.filter(val => val !== props.all.immune[i])
    }
    for (let i = 0; i < copyArray.length; i++) {
        for (let j = 0; j < type.length; j++) {
          if (type[j].value === copyArray[i]) indices.push(j);
        }
      }
    return (
    <Card className='card'>
        <h2>Neutral DMG recieved</h2><h3>1X damage</h3>
      {(copyArray ) &&
        copyArray.map((nue, i) => (
          <p key={i}>
          <label>  <img src={svgs[indices[i]]} style={{width:'40px',height:'40px',verticalAlign:'middle',margin:5}} />
          {nue}</label>
          </p>
        ))}
    </Card>
  );
};

export default Neutral;
