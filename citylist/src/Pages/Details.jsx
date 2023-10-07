import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CitiesContext } from "../App";

function Details() {
  //useContext is used to access the context
  const { citiesList } = useContext(CitiesContext);
  //useParams is used to acess the parameters passed in the URL
  const { id } = useParams();
  //find the city with the id passed in the URL
  const city = citiesList.find((city) => city.id === parseInt(id));
  return (
    <>
      <div className="card">
        <h2>{city.name}</h2>
        <p>Country: {city.country}</p>
        <p>Population: {city.population}</p>
      </div>
    </>
  );
}

export default Details;
