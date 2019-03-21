import React, { Component } from 'react';
import { getPhotos, prevPhotos } from './actions/actions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Photos from './components/Photos'
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  
  componentDidMount () {
    this.props.actions.getPhotos(0)
    this.getFavs = JSON.parse(localStorage.getItem("favorites"))
    console.log('favs',this.getFavs)
  }

  render() {
    const prevButton = this.props.page === 1? 
                          null : 
                          <button onClick={() => this.props.actions.prevPhotos(this.props.page)}> prev </button>   
    
    const nextButton = <button onClick={() => this.props.actions.getPhotos(this.props.page)}> next </button>
    
    return(
     <div className="App">
        <header>
          <Link to={{ pathname: `/favorites`, state: { data: this.getFavs }}}>
            Favorites
          </Link>
          {prevButton}
          {nextButton}
        </header>
  
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