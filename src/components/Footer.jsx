import React from 'react'
import styles from '../styles'

export default function Footer() {
  return (
    <div style={styles.footer}>
      <h2 style={{ color: "antiquewhite", paddingRight: "460px"}}>Find your next destination, with First Holiday Ltd</h2>
        <img src="footer.png" style={styles.footerIcons} />
    </div>
  )
}
