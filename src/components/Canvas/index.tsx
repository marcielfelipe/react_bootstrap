import { useState } from "react";
import { Button} from 'react-bootstrap'

export default function Canvas(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      
    </>
  );
}
