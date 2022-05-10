import React from 'react'
import { Card, Image } from "react-bootstrap";
import './PokemonDetails.css'
import { simpleType,type, svgs } from "../../const";
import Resistance from '../Defend/Resistance';
import Weakness from '../Defend/Weakness';
const PokemonDetail = (props) => {
    console.log(props, 'nigga')
    const data = props.details[0]
    let indices = [];
      var len = Array.isArray(data.type)? data.type.length:0
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < type.length; j++) {
        if (type[j].value === data.type[i]) indices.push(j);
      }
    }
    return (
        <Card className='Card'>
            <table>
                <tbody>
                <tr>
                    <td></td>
                    <td>

                        <Image height={200} width={200} src={data.img} alt='' className='image' />
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>name</b>
                    </td>
                    <td>
                        {data.name}
                    </td>
                </tr>
                <tr>
                    <td><b>height</b></td>
                    <td>{data.height}</td>
                </tr>
                <tr>
                    <td><b>Number</b></td>
                    <td>{data.num}</td>
                </tr>
                <tr>
                    <td><b>Type</b></td>
                    <td>{data.type.join('/')}</td>
                        
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            
                    {(data.type && indices.length) &&
                        data.type.map((types, i) => (
                            <div key={i}>
                        <img src={svgs[indices[i]]} style={{width:'40px',height:'40px',marginLeft:i===1 && -4,verticalAlign:'middle'}} />
                        {indices.length>1 && i!==1 && (<b>&nbsp;<big>| </big></b>)}
                        </div>
                        ))}
                        </td>
                </tr>
                <tr>
                    <td> <b>Resistance</b></td>
                    <td><Resistance resistance={data.typeData[0].resistance} details={true}/></td>
                    
                </tr>
                <tr>
                    <td><b>Weak against</b></td>
                    <td>
                        <Weakness weakAgainst={data.typeData[0].weakAgainst}  details={true}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </Card>
    )
}

export default PokemonDetail