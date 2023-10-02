import React from 'react'
import './style.css'
import styles from './style.module.css'

function Styling() {
  return (
    <div>
      <h1 style={{margin: "auto", backgroundColor: "#007bff" , color: "#fff"}}>Inline Styling</h1>
      <h1 className='external'>External CSS Styling</h1>
      <h1 className={styles.moduleStyling}>Module Styling</h1>
    </div>
  )
}

export default Styling
