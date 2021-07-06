import styles from '../styles/pages/dashboard.module.scss'

import Header from "../components/Header";
import Menu from "../components/Menu"
import Canvas from "../components/Canvas"

export default function Dashboard(){
  return(
    <>
      <Header/>
      <div className={styles.container}>
        <Menu/>
        <Canvas/>
      </div>
    </>
  )
}