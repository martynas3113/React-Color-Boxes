import React, { Component } from 'react';
import './colorBox.css';
import {choice} from '../helpers/choice';
class ColorBox extends Component {
    static defaultProps ={
        allColors: ['aqua','green','blue','black','yellow','pink','purple','grey','orange','brown',]
    } 
    constructor(props){
        super(props)
        this.state = { color: choice(this.props.colors)}
        this.pickColor = this.pickColor.bind(this)
    }

    pickColor(){
        let newColor = choice(this.props.colors)
        this.setState({color: newColor});
    }

    render(){
        return(
            <div className="colorBox" 
            style={{backgroundColor: choice(this.props.colors)}}
            onClick = {this.pickColor}
            ></div>
        )
    }
}

export default ColorBox;