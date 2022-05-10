import { useState, useEffect } from "react";
import { api } from "../api/api";
import Resistance from './Defend/Resistance';
import Immune from './Defend/Immune';
import Weakness from './Defend/Weakness';
import Neutral from './Defend/Neutral';
import { Card } from 'react-bootstrap';
const Defender = ({type}) =>{
    const [typeData, setTypeData] = useState({});
    useEffect(() => {
      async function getDetails() {
        await api.post("/api/getDetails", { type: type.value }).then((res) => {
          setTypeData(res.data);
        });
      }
      getDetails();
    }, [type]);

    return(
        <>
        {type &&
        <Card className='card'> 
          <Resistance resistance={typeData.resistance} />
          <Immune immune={typeData.immune} />
          <Weakness weakAgainst={typeData.weakAgainst} />
          <Neutral all={typeData}/>
          </Card>}
        </>
    )
}

export default Defender