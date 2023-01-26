import { ItinerariesTable } from '@/components/ItinerariesTable';
import { getItinearies } from '@/utils/fetchData'
import { Nav } from '@/components/Nav';
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

const FILTER = {
  POPULAR: {
    id: 'popular',
    sortBy: (a, b) => {
      if (a.agent_rating < b.agent_rating) {
        return -1;
      }
      if (a.agent_rating > b.agent_rating) {
        return 1;
      }
      return 0;
    }
  },
  PRICE: {
    id: 'price',
    sortBy: (a, b) => {
      const priceA = Number(a.price.slice(1))
      const priceB = Number(b.price.slice(1))
      if (priceA < priceB) {
        return -1;
      }
      if (priceA > priceB) {
        return 1;
      }
      return 0;
    }
  },
  RATE: {
    id: 'rate',
    sortBy: (a, b) => {
      if (a.agent_rating > b.agent_rating) {
        return -1;
      }
      if (a.agent_rating < b.agent_rating) {
        return 1;
      }
      return 0;
    }
  }
}

const Index = () => {
  const [sourceList, setSourceList] = useState([])
  const [itinerariesList, setItinerariesList] = useState([])
  const [inputText, setInputText] = useState('')

  const loadItineraries = useCallback(() => {
    getItinearies().then((data) => {
      setItinerariesList(data)
      setSourceList(data)
    })
  }, [])

  useEffect(() => {
    loadItineraries()
  }, [loadItineraries])

  const handleFilter = (event) => {
    const id = event.currentTarget.id
    switch (id) {
      case FILTER.POPULAR.id:
        setItinerariesList([].concat(itinerariesList).sort(FILTER.POPULAR.sortBy))
        break;
      case FILTER.PRICE.id:
        setItinerariesList([].concat(itinerariesList).sort(FILTER.PRICE.sortBy))
        break;
      case FILTER.RATE.id:
        setItinerariesList([].concat(itinerariesList).sort(FILTER.RATE.sortBy))
        break;
      default:
        break;
    }
  }

  const updateInputText = (event) => {
    setInputText(event.target.value)
  }

  const handleOpenFilter = () => {
    if (inputText === '') {
      setItinerariesList(sourceList)
    } else {
      let result = itinerariesList.filter( (item) => {
        for (let prop in item) {
          const value = `${item[prop]}`
          if ( value.includes(inputText) ) {
            return true;
          }
        }
        return false;
      });
      setItinerariesList(result)
    }
  }

  return (
    <Nav title={'Welcome'}>
      <div className='px-14'>
        <div className='flex gap-4 py-8'>

          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4  border rounded-md outline-none bg-grayAuxo focus:bg-whiteAuxo"
              value={inputText}
              onChange={updateInputText}
            />
          </div>

          <button
            className='rounded-lg shadow-sm px-4 py-2 bg-grayAuxo'
            onClick={handleOpenFilter}
          >
            <Image
              src="/filter.png"
              alt="Auxo Logo"
              width={30}
              height={30}
              priority
            />
          </button>

          <button
            className='px-4 py-2 bg-whiteAuxo rounded-lg shadow-sm'
            id={FILTER.POPULAR.id}
            onClick={handleFilter} >
            Most Popular
          </button>
          <button
            className='px-4 py-2 bg-whiteAuxo rounded-lg shadow-sm'
            id={FILTER.PRICE.id}
            onClick={handleFilter} >
            Price, Low to High
          </button>
          <button
            className='px-4 py-2 bg-whiteAuxo rounded-lg shadow-sm'
            id={FILTER.RATE.id}
            onClick={handleFilter} >
            Rate, High to Low
          </button>

        </div>
        {/* <div className='grid w-44 gap-2'>
        </div> */}
        <div className='font-semibold py-4'>
          Select the itinerary from the list below
        </div>
        <ItinerariesTable itinerariesList={itinerariesList} />
      </div>
    </Nav>
  )
}

export default Index;
