import React, {useState, useEffect} from 'react';
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";

function App(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [track, setTrack] = useState("beginner");
  const [filteredTracks, setFilteredTracks] = useState([]);

  const proxyUrl = "https://corsanywhere.herokuapp.com/";

  const checkResponseAndParse = (response) => {
    if(!response.ok)   throw new Error(response.status);
    return response.json();
  }

  useEffect(() => {
    if(track === "beginner") setFilteredTracks(items.filter(item => item.tracks.includes(track)));
    else if(track === "intermediate") setFilteredTracks(items.filter(item => item.tracks.includes(track)));
  }, [items, track])

  useEffect(() => {
    fetch(`${proxyUrl}https://osigla.com.ng/api/growingCoders/courses.json`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
      }
    })
    .then(checkResponseAndParse)
    .then((result) => {
      setIsLoaded(true);
      setItems(result);
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
          <Form 
            setTrack={setTrack}
          />
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
