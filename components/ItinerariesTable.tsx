import React from 'react'
import { ItinerariesItem } from './ItinerariesItem'

export const ItinerariesTable = ({itinerariesList}) => {
  return (
    <div>
      { itinerariesList.map( (item, index) => <ItinerariesItem key={index} itinerarie={item} /> ) }
    </div>
  )
}
