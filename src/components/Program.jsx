import React from 'react';

const Program = ({course, duration, topics, tracks}) => {
  // Change the first letter of tracks to uppercase
  let _tracks = tracks.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
  
  // Add Comma to separate tracks
  _tracks = _tracks.map((item, index) => {
    if( _tracks.length - 1 === index) return item;
    return item + ",";
  });

  return ( 
    <div className="program-container">
      <div className="program">
        <strong>{course}</strong>
        <span className="duration">{duration} <br /><small>Duration</small></span>
      </div>
      <div className="topics-container">
        <span className="topics">{topics} <br /><small>Topics</small></span>
      </div>
      <div className="tracks-container">
        {_tracks.length === 1 ? <span className="track">{_tracks[0]} <br /><small>Topics</small></span> 
        : <span className="track">{_tracks.map(track => <span key={track}>{track} </span>)}  <br /><small>Tracks</small></span>
        }
      </div>
      <div className="program-details-container">
        <span className="program-information">View Details</span>
      </div>
    </div>
  );
}

export default Program;