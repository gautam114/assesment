import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function AssesmentModal(props) {
    useEffect(()=>{
        props.openModal.current=ToggleModel
    },[]);
  const [show, setShow] = useState(false);

  const ToggleModel=()=>setShow(!show);

  return (
    <>

      <Modal show={show} onHide={ToggleModel}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className='model-title'>
            Create Assesment
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
               <div className='form-box'>
                <label>Name of Assesment</label><br/>
                <input className='form-control' placeholder='Type Here'/>
               </div>
               <div className=' form-box'>
                <label>Purpose of Test</label><br/>
                <select className='form-select'>
                    <option value="">Select</option>
                    <option>m m m </option>
                </select>
               </div>
        </Modal.Body>
        <Modal.Footer className='d-flex'>
          <Button variant="primary w-100" onClick={ToggleModel}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

