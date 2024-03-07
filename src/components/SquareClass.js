/*
import React from "react";
import "./Square.css";

export default class Square extends React.Component {

	render() {
		return (
			<button className="square">
			</button>
		)
	}
}
*/
import React, { Component } from 'react'
import './Square.css'

export default class Square extends Component {
/*
	컴포넌트 내에서 state 작성할 때는 constructor 안에 써준다
	constructor(props) {
		super(props);
		this.state = {
			value: null
		}
	}
*/
	render() {
		return (
/*		<button className='square' onClick={() => {this.setState({value: 'X'})}}>*/
			<button className='square' onClick={() => this.props.onClick()}>
				{/*this.state.value: 컴포넌트 내에서 state 사용시*/}
				{this.props.value}
			</button>
		)
	}
}
