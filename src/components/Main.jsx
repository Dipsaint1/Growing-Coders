import React, {useState} from 'react';
import Program from "./Program";
import Pagination from './common/Pagination';
import paginate from "../utils/paginate";


function Main({error, isLoaded, filteredTracks, currentPage, setCurrentPage}) {
  const [pageSize, setPageSize] = useState(5);   // Set initial condition for pagination

  const Tracks = paginate(filteredTracks, currentPage, pageSize);
  
  const pageChangeHandler = (page) => {
    setCurrentPage(page);
  }
  
  if (error) return (<div>Error: {error.message}</div>);
  else if (!isLoaded) return (<div>Loading...</div>);
  else {
    return (
      <main className="container-fluid">
        {/* Render Tracks due to pagination */}
        {Tracks.map(item => (
          <Program
            key={item._id}
            course={item.course}
            duration = {item.duration}
            topics={item.topics}
            tracks={item.tracks}
          />
        ))}

        <Pagination
          itemsCount={filteredTracks.length}
          pageSize={pageSize}
          onPageChange={pageChangeHandler}
          currentPage={currentPage}
        />
      </main>
    ); 
  }
}

export default Main;
