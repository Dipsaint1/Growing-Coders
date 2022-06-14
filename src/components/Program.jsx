import React from 'react';

const Program = ({course, duration, topics, tracks}) => {
  return ( 
    <div className="program-container">
      <div className="program">
        <strong>{course}</strong>
        <span className="duration">{duration}</span>
      </div>
      <div className="topics-container">
        <span className="topics">{topics}</span>
      </div>
      <div className="tracks-container">
        {tracks.length === 1 ? <span className="track">{tracks[0]}</span> 
        : `${tracks.map((track) => {
          return (<span>{track}</span>)
        })}`
        }
        {/* <span className="track">Beginner, Intermediate</span> */}
      </div>
      <div className="program-information-container">
        <span className="program-information">View Details</span>
      </div>
    </div>
  );
}

export default Program;