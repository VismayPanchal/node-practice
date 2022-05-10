import React from 'react';
import { Card } from 'react-bootstrap';
const NotFound = () =>{
    return(
        <Card className='card'>
            <center>
                <h2>404 not found</h2>
            </center>
            <center>
                <p>Pokemon not found.</p>
            </center>
        </Card>
    )
}

export default NotFound