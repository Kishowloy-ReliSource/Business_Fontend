import React, { useState } from 'react';

function BikeRegistrationForm() {
  const [bikeName, setBikeName] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [bikeYear, setBikeYear] = useState('');
  const [bikeMileage, setBikeMileage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    fetch(process.env.REACT_APP_BASE_URL+'/v1/bikes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bikeName,bikeModel,bikeYear,bikeMileage }),
        }).then((response) => {
            if (response.ok) {
                console.log(response.json());
            } else {
            throw new Error('Invalid email or password');
            }
        })
        .catch((error) => {
            console.error(error);
        });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Bike Name:
        <input
          type="text"
          value={bikeName}
          onChange={(event) => setBikeName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Bike Model:
        <input
          type="text"
          value={bikeModel}
          onChange={(event) => setBikeModel(event.target.value)}
        />
      </label>
      <br />
      <label>
        Bike Year:
        <input
          type="text"
          value={bikeYear}
          onChange={(event) => setBikeYear(event.target.value)}
        />
      </label>
      <br />
      <label>
        Bike Mileage:
        <input
          type="text"
          value={bikeMileage}
          onChange={(event) => setBikeMileage(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Register Bike</button>
    </form>
  );
}

export default BikeRegistrationForm;
