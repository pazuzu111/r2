import React, { Component } from "react";
import { getPhotos, prevPhotos } from "./actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Photos from "./components/Photos";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.actions.getPhotos(0);
    let arr = [];
    let getFavs = localStorage.getItem("favorites");

    //check local storage for saved items
    if (getFavs === null) {
      localStorage.setItem("favorites", JSON.stringify(arr));
      getFavs = localStorage.getItem("favorites");
    }
  }

  render() {
    return (
      <div className="container">
        <Navbar />

        <div className="buttonContainer">
          <Button
            button={"prev"}
            prevPhotos={this.props.actions.prevPhotos}
            page={this.props.page}
          />
          <Button
            button={"next"}
            nextPhotos={this.props.actions.getPhotos}
            page={this.props.page}
          />
        </div>

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
