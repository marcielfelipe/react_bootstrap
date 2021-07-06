import styles from '../../styles/components/menu.module.scss'
import { Nav} from 'react-bootstrap'

export default function Menu(){
  return(
    <div className={styles.menu}>
      <Nav className="flex-column">
        <Nav.Link className={styles.item}href="/home">Gerar fatura</Nav.Link>
        <Nav.Link eventKey="link-1">Cadastrar cliente</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav>
    </div>
  )
}