import React from 'react'
import styles from '../styles'

const Card = ({ data, cardIndex }) => {

  return (
    <div>
      {data[cardIndex].map(item => (
        <div>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  )
}
export default Card;