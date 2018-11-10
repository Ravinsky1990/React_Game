import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from "../../../HOC/Aux/Aux"
import Backdrop from "../BackDrop/BackDrop";


class Modal extends Component{
	render(){
		return(
			<Aux>
				<Backdrop show={this.props.show}/>
				<div 
				className={classes.Modal}
				style={{
					transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
				}}
				>
					{this.props.children}
				</div>
			</Aux>
		)
	}
}

export default Modal