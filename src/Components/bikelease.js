
import React, { useState, useEffect, useRef } from 'react';
import BikeData from './bikedetails';

function BikeLease(){
    const [brandData, setBrandData] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [lesseeName, setLesseeName] = useState('');
  const [lesseeAddress, setLesseeAddress] = useState('');
  const [lesseePhone, setLesseePhone] = useState('');
  const [lesseeMonthlyIncome, setLesseeMonthlyIncome] = useState('');
  const [lesseeDOB, setLesseeDOB] = useState('');
  const [coLesseeName, setCoLesseeName] = useState('');
  const [coLesseeAddress, setCoLesseeAddress] = useState('');
  const [coLesseePhone, setCoLesseePhone] = useState('');
  const [coLesseeMonthlyIncome, setCoLesseeMonthlyIncome] = useState('');
  const [coLesseeDOB, setCoLesseeDOB] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const selectedBike= useRef(-1);
  var bike=null;


  const handleOptionChange = (event) => {
    selectedBike.current=event.target.value;
    bike=selectedBike.current;
    setSelectedBrand(event.target.value);
   // selectedvalue=event.target.value;
    console.log(bike);
};
  

        const handleSubmit = (event) => {
            if(selectedBike==null || selectedBike.current<0)
            {
              alert("Select a Bike");
            }
            else{
              bike= selectedBike.current;
              console.log(bike);
              event.preventDefault();
              fetch('http://localhost:3000/api/v1/lessees', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ lesseeName,lesseeAddress,lesseePhone,lesseeMonthlyIncome,lesseeDOB,coLesseeName,coLesseeAddress,coLesseePhone,coLesseeMonthlyIncome,coLesseeDOB,downPayment,bike }),
                  }).then((response) => {
                      if (response.ok) {
                          console.log(response.json());
                          alert("Application Submitted");
                      } else {
                      throw new Error('Invalid email or password');
                      }
                  })
                  .catch((error) => {
                      console.error(error);
                  });
            }
            
        };

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/bikes') 
          .then((response) => response.json())
          .then((data) => setBrandData(data))
          .catch((error) => console.error(error));
      }, []);
      	
      console.log(brandData);


    return(
        <div>
            
        <form onSubmit={handleSubmit}>
            
                <select  value={selectedBike.current} onChange={handleOptionChange}>
                    <option value={-1}> Select a Bike</option>
                   {brandData.map((brand,index)=>(
                        <option value={brand.id}>{brand.brand} {brand.model} {brand.year} {brand.mileage}</option>
                    )
                    )}
                    
                </select>
            
      <h2>Lessee Information</h2>
      <label>
        Name:
        <input type="text" value={lesseeName} onChange={(e) => setLesseeName(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={lesseeAddress} onChange={(e) => setLesseeAddress(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" value={lesseePhone} onChange={(e) => setLesseePhone(e.target.value)} />
      </label>
      <label>
        Monthly Income:
        <input type="text" value={lesseeMonthlyIncome} onChange={(e) => setLesseeMonthlyIncome(e.target.value)} />
      </label>
      <label>
        Date of Birth:
        <input type="date" value={lesseeDOB} onChange={(e) => setLesseeDOB(e.target.value)} />
      </label>

      <h2>Co-Lessee Information</h2>
      <label>
        Name:
        <input type="text" value={coLesseeName} onChange={(e) => setCoLesseeName(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={coLesseeAddress} onChange={(e) => setCoLesseeAddress(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" value={coLesseePhone} onChange={(e) => setCoLesseePhone(e.target.value)} />
      </label>
      <label>
        Monthly Income:
        <input type="text" value={coLesseeMonthlyIncome} onChange={(e) => setCoLesseeMonthlyIncome(e.target.value)} />
      </label>
      <label>
        Date of Birth:
        <input type="date" value={coLesseeDOB} onChange={(e) => setCoLesseeDOB(e.target.value)} />
      </label>

      <h2>Other Information</h2>
      <label>
        Down Payment:
        <input type="text" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
      </label>

      <button type="submit">Submit</button>
    </form>

            {/* {<BikeData BikeData={brandData}/>} */}


        </div>
    );
}

export default BikeLease;