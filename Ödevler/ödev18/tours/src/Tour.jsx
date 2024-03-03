import React from 'react'
import { toursAll } from './api'

function Tour() {
  return (
    <>
    {
        toursAll.map((tour) => {
            return(
                console.log(tour.price)
            )
        })
    }
    </>
  )
}

export default Tour