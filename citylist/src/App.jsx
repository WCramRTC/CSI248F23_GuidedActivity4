import Create from "./Pages/Create";
import List from "./Pages/List";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { useState, createContext } from "react";

//Context is a global state
//It is used to pass shared data between ALL components
const CitiesContext = createContext();
function App() {
  //citiesList is a state variable that holds the list of cities
  const [citiesList, setCitiesList] = useState(cities);
  //createCity is a function that will be passed to the Create component
  //it will be used to add a new city to the citieslist
  function createCity(city) {
    city.id = citiesList.length + 1;
    setCitiesList([...citiesList, city]);
  }

  return (
    <>
      <BrowserRouter>
        <Navigation />
        {/*This is the CitiesContext.Provider componrnt.  It will wrap all the components that will use the context.  Here the citiesList and the createCity function are available to all components inside of this provider.*/}
        <CitiesContext.Provider value={{ citiesList, createCity }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities/:id" element={<Details />} />
            <Route path="/cities/create" element={<Create />} />
            <Route path="/cities" element={<List />} />
          </Routes>
        </CitiesContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
