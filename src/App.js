import React, { Component } from 'react';
import { getPhotos } from './actions/actions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './App.css';

class App extends Component {
  
  componentDidMount () {
    this.props.actions.getPhotos()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        hello
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { photos: state.photos, loading: state.loading };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ getPhotos }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);