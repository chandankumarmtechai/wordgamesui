import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
class Cards extends Component
{
    render(){
        return(
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="jumble.png" />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Button variant="primary">Let's Play</Button>
  </Card.Body>
</Card>
        )
    }
}

export default Cards;