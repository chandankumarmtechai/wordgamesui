import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'

class Jumble extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            puzzles: [],
            result: '',
            word: '',
            count: 0,
            rindex: 0
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.nextHandler = this.nextHandler.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/puzzlesjumble')
        .then(response => this.setState({puzzles: response.data}))
        .catch(error => console.log(error))

    }
    clickHandler(event){
        alert('jjjj')
        this.setState({
            result: this.result + event.target.innerText,
            count: this.state.count +1
        })
    }
    nextHandler(event){
        alert('jjjj')
        this.setState({
            count: 1
        })
    }
    render(){
        const {puzzles, count} = this.state
        const wordbtn =[]
        const ansbtn =[]
        
        if(puzzles.length > 0)
        {
            for(let i=0; i < puzzles[count].pword.length; i++) {
            wordbtn.push(<Button variant="primary" size="lg">{puzzles[count].pword[i]}</Button>)
            ansbtn.push(<Button variant="primary" size="lg"> </Button>)
            }
        }
        return(
            <Card style={{ width: '68rem' }}>
            <Card.Img variant="top" src="jumble.png" />
            <Card.Body>
            <Card.Title>{puzzles.length ? puzzles[count].desc : null}</Card.Title>
            {ansbtn}
            <br/><br/><br/><br/>
            {wordbtn}
            <br/><br/>

            <Button onClick={this.clickHandler} variant="primary" size="lg">Submit</Button>
            <Button variant="primary" disabled = {true} size="lg">Hint</Button>
            <Button OnClick={this.nextHandler} variant="primary" size="lg">Skip</Button>
            <br/> <br/>
            </Card.Body>    
            </Card>
        )
        }
}

export default Jumble;
