import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        title: this.props.name,
        number: this.props.year,
        width: this.props.description,
    }
    handleMinus = () => {
        this.setState((prevState) => ({
            number: prevState.number - 1,
        }));
    };

    handlePlus = () => {
        this.setState((prevState) => ({
            number: prevState.number + 1,
        }));
    };



    render() {
        const { number }= this.state;
        const { name , year, description } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <p>{year}</p>
                <b>{description}</b>
                <button onClick={this.handleMinus}>-</button>
                <span>{number}</span>
                <button OnClick={this.handlePlus}> +</button>
            </div>
        );
    }
}
