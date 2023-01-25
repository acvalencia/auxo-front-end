import Link from 'next/link'
import React from 'react'

export const ItinerariesItem = ({ itinerarie }) => {
  return (
    <Link href={`/legs/${itinerarie.legs[0]}/${itinerarie.legs[1]}`}>
      <div className='flex '>
        {itinerarie.id}
        {itinerarie.price}
        {itinerarie.agent}
        {itinerarie.agent_rating}
      </div>
    </Link>
  )
}
