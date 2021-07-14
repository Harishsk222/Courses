import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './images/python.jpg'
import Java from './images/java.png'


import { useHistory } from 'react-router-dom';

import "../App.css"


function Coureses() {
  
  let history = useHistory();
  const handleClick = () => history.push('/python');
  return (
    <div>
      <table >
        <tr class="tablerow">
          <td>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image}/>
        <Card.Body>
          <Card.Title>Python Course</Card.Title>
            <Card.Text>
                Python is a general-purpose, versatile, and powerful programming language. 
            </Card.Text>
            
            <Button type="button" onClick={handleClick} variant="primary">Go MoreLearn</Button>
        </Card.Body>
    </Card>
    </td>
    
<td>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Java}/>
  <Card.Body>
    <Card.Title>Java Course</Card.Title>
    <Card.Text>
    This Full Stack Java Developer course is designed to give you an essence of front-end, and back-end Java web developer technologies.
    </Card.Text>
    <Button variant="primary" onClick={()=>{history.push("/java")}}>Go somewhere</Button>
  </Card.Body>
</Card>
</td>
</tr>
</table>





    </div>
    

    
  );
}

export default Coureses