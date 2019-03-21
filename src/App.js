import React, { Component } from 'react';
import { getPhotos, prevPhotos } from './actions/actions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Photos from './components/Photos'
import './App.css';

class App extends Component {
  
  componentDidMount () {
    this.props.actions.getPhotos(0)
  }

  render() {
    return (
      <div className="App">
{          this.props.page === 1? null : <button onClick={() => this.props.actions.prevPhotos(this.props.page)}> prev </button>
}          <button onClick={() => this.props.actions.getPhotos(this.props.page)}> next </button>
          <Photos photos={this.props.photos} loading={this.props.loading} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { photos: state.photos, loading: state.loading, page: state.page };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ getPhotos, prevPhotos }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);