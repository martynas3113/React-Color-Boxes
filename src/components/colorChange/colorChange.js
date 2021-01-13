import React, { Component } from 'react'
import ColorBox from '../colorBox/colorBox';
import './colorChange.css';

class ColorChange extends Component {
    static defaultProps = {
        num: 36,
        allColors:['aqua','green','blue','black','yellow','pink','purple','grey','orange','brown',]
    };
    

    render(){
        const boxes = Array.from({length: this.props.num}).map(()=>(
            <ColorBox colors={this.props.allColors} />
        ));
        return(
            <div>
            <div className="colors-wrap">{boxes}</div>
            
            </div>
        );   
    };
};

export default ColorChange;