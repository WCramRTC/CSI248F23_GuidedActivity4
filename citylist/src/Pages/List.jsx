import { useContext } from "react";
import { CitiesContext } from "../App";
import { Link } from "react-router-dom";

function List() {
  //Get the list from Context
  const { citiesList } = useContext(CitiesContext);
  return (
    <>
      <h2>Cities List</h2>
      {/*map through the list and create a link for each city to the details page*/}
      {citiesList.map((city) => {
        return (
          <div>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </div>
        );
      })}
    </>
  );
}

export default List;
