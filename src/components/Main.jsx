import React from 'react';
import Program from "../components/Program";

function Main({error, isLoaded, items, filteredTracks}) {
  
  if (error) return (<div>Error: {error.message}</div>);
  else if (!isLoaded) return (<div>Loading...</div>);
  else {
    return (
      <div className="container-fluid">
        {filteredTracks.map(item => (
          <Program
            key={item._id}
            course={item.course}
            duration = {item.duration}
            topics={item.topics}
            tracks={item.tracks}
          />
        ))}
      </div>
    );
  }
}

export default Main;
