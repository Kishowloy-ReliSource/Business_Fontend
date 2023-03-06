import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState } from 'react';
import {  useNavigate  } from 'react-router-dom';

function Login() {
    const navigate= useNavigate();
     const [Email, setEmail] = useState('');
     const [Password, setPassword] = useState('');
     const [selectedOption, setSelectedOption] = useState('0');
     let selectedvalue;
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        selectedvalue=event.target.value;
        console.log(selectedvalue);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(selectedOption=="0")
        {
            fetch(process.env.REACT_APP_BASE_URL+'/admins/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Email, Password }),
                })
                .then((response) => {
                    if (response.ok) {
                        {
                            console.log(response.json());
                            navigate("/adminpannel");
                        }
                        
                    } else {
                        alert("Invalid email or password");
                         throw new Error('Invalid email or password');
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        else if(selectedOption=="1")
        {
            fetch(process.env.REACT_APP_BASE_URL+'/dealers/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Email, Password }),
                })
                .then((response) => {
                    if (response.ok) {
                        console.log(response.bool);
                        navigate("/dealerpanel");
                    } else {
                        alert("Invalid email or password");
                        throw new Error('Invalid email or password');
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <label>
    <Form.Label>Email address</Form.Label>:
    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(event) => setEmail(event.target.value)}/>
    </label>
    </Form.Group>
    <label>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={Password} onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
    </label>
    <Button type="submit" variant="primary">
        Log in
    </Button>
    <select id="options" value={selectedOption} onChange={handleOptionChange}>
        <option value="0">Admin</option>
        <option value="1">Dealer</option>
      </select>
  </form>
  );
}

export default Login;
