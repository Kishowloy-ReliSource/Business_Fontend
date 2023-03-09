import { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.REACT_APP_BASE_URL+'/dealers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password,name,phone,status,dob }),
        }).then((response) => {
            if (response.ok) {
                console.log(response.json());
            } else {
            throw new Error('Invalid email or password');
            }
        })
        .catch((error) => {
            console.error(error);
            // Show an error message to the user
        });
  };
  return (
    <div className="container">
     <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>

      <label>
        Status:
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </label>

      <label>
        Date of birth:
        <input
          type="date"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
    </div>
    
  );
}
export default RegistrationForm;
