import React from "react";
import { connect } from "react-redux";

// props.song.title
// props.song.duration
const SongDetail = ({ song }) => {
  if (song === null) {
    return <div>Select a song!</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
