import React from 'react'
import { ItinerariesItem } from './ItinerariesItem'

export const ItinerariesTable = ({itinerariesList}) => {
  return (
    <div>
      <div className='justify-between flex px-10 gap-12 bg-white text-center'>
        <div className='w-36'>Id itinerarie</div>
        <div className='w-20'>Price</div>
        <div className='w-36'>Agent</div>
        <div className='w-36'>Agent rating</div>
      </div>
      { itinerariesList?.map( (item, index) => <ItinerariesItem key={index} itinerarie={item} /> ) }
    </div>
  )
}
