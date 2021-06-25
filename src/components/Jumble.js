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
            pword: '',
            desc: '',
            count: 0,
            rindex: 0,
            active: false
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.nextHandler = this.nextHandler.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/puzzlesjumble')
        .then(response => this.setState({puzzles: response.data}, this.initpuzzle))
        .catch(error => console.log(error))
    }
    clickHandler(event){
        this.setState({
            result:  this.state.result + event.target.innerText,
            active: false
        })
        event.target.disabled = true
        console.log(this.state.result)
    }
    nextHandler(){
        this.setState({
            count: this.state.count +1,
            active: false
        }, this.initpuzzle)
    }
    initpuzzle(){
        this.setState({
            result: '',
            pword: this.state.puzzles[this.state.count].pword,
            desc: this.state.puzzles[this.state.count].desc
        })
    }

    emptystr(len)
    {
        var str = ''
        for(let i=0; i < len; i++) {
            str = str + ' '
        }
        return str
    }

    render(){
        const {puzzles, count, pword, desc, result, active} = this.state
        const wordbtn =[]
        const ansbtn =[]
        
        if(puzzles.length > 0)
        {   
            for(let i=0; i < pword.length; i++) {
            wordbtn.push(<Button onClick={this.clickHandler} disabled={active} variant="primary" size="lg">{pword[i]}</Button>)
            ansbtn.push(<Button variant="primary" size="lg">{result[i]}</Button>)
            }
        }
        return(
            <Card style={{ width: '68rem' }}>
            <Card.Img variant="top" src="jumble.png" />
            <Card.Body>
            <Card.Title>{puzzles.length ? desc : null}</Card.Title>
            {ansbtn}
            <br/><br/><br/><br/>
            {wordbtn}
            <br/><br/>

            <Button onClick={this.clickHandler} variant="primary" size="lg">Submit</Button>
            <Button variant="primary" disabled = {true} size="lg">Hint</Button>
            <Button onClick={this.nextHandler} variant="primary" size="lg">Skip</Button>
            <br/> <br/>
            </Card.Body>    
            </Card>
        )
        }
}

export default Jumble;
