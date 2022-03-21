import Map from "./Components/Map";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Search from "./Components/Search";
import { useState, useEffect } from "react";
//Main Context
import { useMainContext } from "./Context/Context";

function App() {
  const { setEventData, reRenderMarkers } = useMainContext();
  const [loading, setLoading] = useState(false);
  //Event to render
  const [renderEvent, setRenderEvent] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://api.openbrewerydb.org/breweries");
      //Extract the Array contained in the 'events' field.
      const data = await res.json();
      //Remove data that has no longitude or latitude provided and isnt located in the united states
      let breweries = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].latitude !== null && data[i].country === "United States") {
          breweries.push(data[i]);
        }
      }
      //Event data is globally accessible. But 'renderEvent' is just to render out the MAP with the markers
      setEventData(breweries);
      setRenderEvent(breweries);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    if (reRenderMarkers !== null) {
      setRenderEvent(reRenderMarkers);
    }
  }, [reRenderMarkers]);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={renderEvent} /> : <Loader />}
      {!loading && <Search />}
    </div>
  );
}

export default App;
