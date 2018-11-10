import React, { Component } from 'react';
import classes from "./Game.css";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import Answers from "../../components/Answers/Answers"
import Aux from "../../HOC/Aux/Aux"
import Modal from "../../components/UI/Modal/Modal"
import Result from "../../components/Result/Result"
import {connect} from "react-redux";
import * as actions from '../../store/actions/index';


class Game extends Component {
  componentWillMount(){
    this.props.apdateGame()
  }

  render() {
    return (
      <Aux>
        <Modal show={this.props.show}>
          <Result/>
        </Modal>
        <div className={classes.AppWrapper}>
          <Header />
          <Question/>
          <Answers />
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
   show:state.UIcontrol.showModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    apdateGame:()=>dispatch(actions.apdateGame())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Game);

