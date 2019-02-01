import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {getSmurfs, deleteSmurf, addSmurf, updateSmurf} from "../actions";
import SmurfList from "./SmurfList";
import AddSmurfForm from './AddSmurfForm';
import UpdateSmurfForm from './UpdateSmurfForm';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>Check out this village of smurfs.</h2>
        <SmurfList smurfs={this.props.smurfs} deleteSmurf={this.props.deleteSmurf}/>
        <div className="forms">
          <AddSmurfForm addSmurf={this.props.addSmurf}/>
          <UpdateSmurfForm updateSmurf={this.props.updateSmurf}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: null,
  };
};

export default connect(mapStateToProps, { getSmurfs, deleteSmurf, addSmurf, updateSmurf })(App);

