import { useState,useEffect } from 'react'
import { api } from '../api/api';
import Resistance from './Resistance';

const Details = ({type}) =>{

    const [typeData,setTypeData] =useState({})
    useEffect(()=>{
        async function getDetails (){
            await api.post('/api/getDetails',{type:type.value}).then(res=>{
                setTypeData(res.data)})
        }
       getDetails() 
    },[type])

    return(
        <>
       {typeData && <Resistance resistance={typeData.resistance} />}
        </>
    )
}

export default Details