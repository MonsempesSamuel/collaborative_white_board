import React from 'react';
import Board from '../board/Board';

import './style.css';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: 0.000000000000000000000000000000000000000000000000000000000000001,
            connect: false
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        if(this.state.connect) {
            this.setState({
                size: params.target.value
            })
        }
    }

    connect(){
        this.setState({
            connect: true,
            size: 5,
        })
    }

    render() {

        return (
            <div className="container">
                <div class="tools-section">
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp; 
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>

                    <div className="brushsize-container">
                        Select Brush Size : &nbsp; 
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                        </select>
                    </div>
                    <button onClick={this.connect.bind(this)} style={{marginLeft: 2 + 'em'}} >connection</button>
                </div>


                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size} connect={this.state.connect}></Board>
                </div>
            </div>
        )
    }
}

export default Container