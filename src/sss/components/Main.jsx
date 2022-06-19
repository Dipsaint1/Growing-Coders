import React from 'react';
import Program from "./Program";

function Main({error, isLoaded, filteredTracks}) {
  
  if (error) return (<div>Error: {error.message}</div>);
  else if (!isLoaded) return (<div>Loading...</div>);
  else {
    return (
      <main className="container-fluid">

        {/* Initially, this should have been 'items' instead of 'filteredTracks but we need to display filtered items */}
        {filteredTracks.map(item => (   // Show each program after being filtered
          <Program
            key={item._id}
            course={item.course}
            duration = {item.duration}
            topics={item.topics}
            tracks={item.tracks}
          />
        ))}

      </main>
    ); 
  }
}

export default Main;
