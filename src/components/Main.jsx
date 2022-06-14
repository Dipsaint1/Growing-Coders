import React from 'react';
import Program from "../components/Program";

function Main({error, isLoaded, items}) {
  
  if (error) return (<div>Error: {error.message}</div>);
  else if (!isLoaded) return (<div>Loading...</div>);
  else {
    return (
      <div className="container-fluid">
        {items.map(item => (
          <Program
            key={item._id}
            course={item.course}
            duration = {item.duration}
            topics={items.topics}
            tracks={item.tracks}
          />
        ))}
      </div>
    );
  }
}

export default Main;
