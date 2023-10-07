import { useContext } from "react";
import { CitiesContext } from "../App";

function Create() {
  //Get the createCity function from the context
  const { createCity } = useContext(CitiesContext);
  //function that handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //Get the data from the for
    let formData = new FormData(e.target);
    //Create a new city object
    let newCity = {
      name: formData.get("name"),
      country: formData.get("country"),
      population: formData.get("population"),
    };
    //Call the createCity function from the context
    createCity(newCity);
    //Reset the form after submission
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add a New City</h2>
        <div className="form-input">
          <label htmlFor="name">City Name</label>
          <input name="name" placeholder="City Name" />
        </div>

        <div className="form-input">
          <label htmlFor="country">Country</label>
          <input name="country" placeholder="Country"></input>
        </div>

        <div className="form-input">
          <label htmlFor="population">Population</label>
          <input name="population" placeholder="Population"></input>
        </div>
        <button type="submit">Add City</button>
      </form>
    </>
  );
}

export default Create;
