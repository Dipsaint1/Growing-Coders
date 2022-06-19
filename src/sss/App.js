import React, {useState, useEffect} from 'react';
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";

function App(){
  const [error, setError] = useState(null);  // Data cannot be fetched
  const [isLoaded, setIsLoaded] = useState(false); 
  const [items, setItems] = useState([]);
  const [track, setTrack] = useState("all");     // Initial track to be loaded 
  const [filteredTracks, setFilteredTracks] = useState([]);   // Create  an intial array for filtered tracks
  
  // 
  const proxyUrl = "https://corsanywhere.herokuapp.com/";

  const checkResponseAndParse = (response) => {
    if(!response.ok) throw new Error(response.status);
    return response.json();
  }

  // This function runs anything the user selects a track
  useEffect(() => {
    // If the user selects 'beginner', take all tracks that includes 'beginner' and put them in a new array
    if(track === "beginner") setFilteredTracks(items.filter(item => item.tracks.includes(track)));
    
    // If the user selects 'intermediate', take all tracks that includes 'beginner' and put them in a new array
    else if(track === "intermediate") setFilteredTracks(items.filter(item => item.tracks.includes(track)));
  
    // Return all tracks
    else setFilteredTracks(items);
  }, [items, track]);   

  useEffect(() => {
    // Add proxy url to bypass the CORS error while fetching the data
    fetch(`${proxyUrl}https://osigla.com.ng/api/growingCoders/courses.json`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
      }
    })
    .then(checkResponseAndParse)   // Returns the data in a json format
    .then((result) => {
      setIsLoaded(true);  
      setItems(result);     // place the data in the items box 
    })
    .catch((error) => {
      setIsLoaded(true);
      setError(error)
    });

  }, []);

  
  return(
    <div className="App">
      <Header/>

      <section className="programs container-fluid" id='programs'>
        <div className="container-lg">
          <Form setTrack={setTrack} />     
          <Main
            error={error}
            isLoaded={isLoaded}
            items={items}
            filteredTracks={filteredTracks}
          />
        </div>
      </section>
      
    </div>
  );
}

export default App;
