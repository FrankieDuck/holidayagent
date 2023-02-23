import React from 'react'
import styles from '../styles'

const Card = ({ data, cardIndex }) => {

  return (
    <div>
      {data[cardIndex].map(item => (
        <div>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}
export default Card;