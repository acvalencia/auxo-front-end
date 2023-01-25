import Link from 'next/link'
import React from 'react'

export const ItinerariesItem = ({ itinerarie }) => {
  return (
    <Link href={`/legs/${itinerarie.legs[0]}/${itinerarie.legs[1]}`}>
      <div className='justify-between m-3 text-center flex px-10 gap-12 bg-white py-3 rounded-md border-greenBorderAuxo border hover:bg-greenAuxo'>
        <div className='w-36'>{itinerarie.id}</div>
        <div className='w-20'>{itinerarie.price}</div>
        <div className='w-36'>{itinerarie.agent}</div>
        <div className='w-36'>{itinerarie.agent_rating}</div>
      </div>
    </Link>
  )
}
