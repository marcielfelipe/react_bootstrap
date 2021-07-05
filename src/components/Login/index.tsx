import { Button, Form } from "react-bootstrap";
import styles from '../../styles/components/Login/styles.module.css'

export default function Login(){
  return(
    <div className={styles.container}>
      <Form className={styles.form}>
        <h3>Faça login</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Control size='lg' type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control size='lg' type="password" placeholder="Senha" />
        </Form.Group>

        <Button variant="primary" type="submit" block size='lg' >
          Login
        </Button>
      </Form>
    </div>
  )
}