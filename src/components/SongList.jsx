import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    // this.props === { songs: state.songs };

    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// this function is invoked every time redux state is updated.
const mapStateToProps = state => {
  return { songs: state.songs };
};

// when we pass action creators to connect function, it will automayically
// dispatch an action returned from an action creator to update the redux state.
export default connect(mapStateToProps, { selectSong })(SongList);
