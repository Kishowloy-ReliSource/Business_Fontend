import React, { useState, useEffect,useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemList() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [brandData, setBrandData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/lessees')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);
  useEffect(() => {
      fetch('http://localhost:3000/api/v1/bikes') 
      .then((response) => response.json())
      .then((data) => setBrandData(data))
      .catch((error) => console.error(error));
  }, []);

  const foundItem= useRef(null);
  function handleView(item) {
    foundItem.current = brandData.find(i => i.id === item.bike_id)
    setSelectedItem(item);
    setShow(true);
    setShowModal(true);    
  }

  useEffect(()=>{
    console.log( foundItem.current);
  },[selectedItem])
  function handleApprove(item) {
    fetch(`http://localhost:3000/api/v1/lessees/${item.id}`, 
    { 
      method: 'PUT' ,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apv: 1, id: item.id })
  
    })
      .then((response) => {

        if(response.ok)
        {
          window.location.reload(false);
          console.log("updated");
        }

      });
  }

  return (
    <>  
    <CardGroup>
      {
        items.map(item => (
          <Card>
          <Card.Body>
            <Card.Title>{item.lesseename}</Card.Title>
            <Card.Text>
            <p>
                 Name: {item.lesseename} 
                <br />
                 Down Payment: {item.downpayment}
                <br />                
            </p>
          </Card.Text>
          </Card.Body>
          <Card.Footer>
                  <Button variant="primary" className='me-1' onClick={() => handleView(item)}>View</Button>
                  {item.approved !== 1 && (
                  <Button variant="success"  onClick={() => handleApprove(item)}>Approve</Button>
                  )}
          </Card.Footer>
        </Card>
        ))
      }
    </CardGroup>
        {showModal && (

              <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{selectedItem.lesseename+' Application '}</Modal.Title>
              </Modal.Header>
              <Modal.Body>

              <h1>Lessee Information:</h1>
              <p>
                Lessee Name: {selectedItem.lesseename} 
                <br />
                Lessee Address: {selectedItem.lesseeaddress}
                <br />
                Lessee Down Payment: {selectedItem.downpayment}
                <br />
                Lessee Income: {selectedItem.lesseemonthlyincome}
                <br />
                Co-Lessee Income: {selectedItem.colesseename}
                <br />
                Co-Lessee Phone: {selectedItem.colessephone}
                <br />
                Bike: {foundItem.current.brand+' '+foundItem.current.model+' '+foundItem.current.year+' '+foundItem.current.mileage }
              </p>
              </Modal.Body>
              <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
              </Modal>
        )}    
    </>
  );
}

export default ItemList;
