import React from 'react';

const Program = ({course, duration, topics, tracks}) => {

  return ( 
    <div className="program-container">
      <div className="program">
        <strong className="course">{course}</strong>
        <span className="duration">{duration} <br /><small>Duration</small></span>
      </div>
      <div className="topics-container">
        <span className="topics">{topics} <br /><small>Topics</small></span>
      </div>
      <div className="tracks-container">
        
        {/* some programs contain more than 1 track, we have to consider programs with more than 1 task by mapping */}
        {/* if(tracks.length === 1){
          return <span className="track">{tracks[0]} <br /><small>Topics</small></span>    // The only item with an index of 0
        } else{
            map the programs based on track index by wrapping each program in a span tag 
        } */}
        {tracks.length === 1 ? <span className="track">{tracks[0]} <br /><small>Topics</small></span> 
        : <span className="track">{tracks.map(track => <span key={track}> { track } </span>)} <br /><small>Tracks</small></span>
        }
      </div>
      <div className="program-details-container">
        <span className="program-details">View Details</span>
      </div>
    </div>
  );
}

export default Program;