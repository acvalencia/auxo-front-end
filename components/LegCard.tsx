import React from 'react'
import Image from 'next/image'

export const LegCard = ({changed, id, isSelected, leg}) => {
  return (
    <div className='flex justify-center'>
      <input
        id={id}
        onChange={changed}
        type="radio"
        checked={isSelected}
      />
      <div className='w-[500px] rounded-md m-5 border shadow-sm'>
        <div className='px-4 py-3 flex justify-between w-full bg-gray-300'>
          <p>{leg?.airline_name}</p>
          <p>{leg?.id}</p>
        </div>

        <div className='px-10 py-6'>
          <div className='flex pb-4'>
            <p>AIRLINE ID: </p>
            {leg?.airline_id}
          </div>

          <div className='grid grid-cols-2'>
            <div>
              <h3 className='w-full text-center'>
                {leg?.departure_airport}
              </h3>
              <div className='flex items-center gap-3'>
                <Image
                  src="/airplane.png"
                  alt="airplane"
                  width={30}
                  height={30}
                  priority
                />
                {leg?.departure_time}
              </div>
            </div>

            <div>
              <h3 className='w-full text-center'>
                {leg?.arrival_airport}
              </h3>
              <div className='flex items-center gap-3'>
                <Image
                  src="/airplane.png"
                  alt="airplane"
                  width={30}
                  height={30}
                  priority
                />
                {leg?.arrival_time}
              </div>
            </div>

          </div>

          <div className='pt-8 flex justify-between'>
            <div className='flex'>
              <p className='pr-2'>STOPS: </p>
              {leg?.stops}
            </div>

            <div className='flex'>
              <p className='pr-2'>DURATION MINS: </p>
              {leg?.duration_mins}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
