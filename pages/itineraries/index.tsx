import { ItinerariesTable } from '@/components/ItinerariesTable';
import { getItinearies } from '@/utils/fetchData'
import { Nav } from '@/components/Nav';
import React, { useCallback, useEffect, useState } from 'react'

const FILTER = {
    POPULAR: {
      id: 'popular',
      sortBy: (a, b) => {
        if ( a.agent_rating < b.agent_rating ){
          return -1;
        }
        if ( a.agent_rating > b.agent_rating ){
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
        if ( priceA < priceB ) {
          return -1;
        }
        if ( priceA > priceB ) {
          return 1;
        }
        return 0;
      }
    },
    RATE: {
      id: 'rate',
      sortBy: (a, b) => {
        if ( a.agent_rating > b.agent_rating ){
          return -1;
        }
        if ( a.agent_rating < b.agent_rating ){
          return 1;
        }
        return 0;
      }
    }
}

const Index = () => {

  const [itinerariesList, setItinerariesList] = useState([])

  const loadItineraries = useCallback(() => {
    getItinearies().then((data) => {
      setItinerariesList(data)
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

  return (
    <Nav>

      <div className='flex gap-3'>
        <button  id={FILTER.POPULAR.id} onClick={handleFilter} >Most Popular</button>
        <button  id={FILTER.PRICE.id} onClick={handleFilter} >Price, Low to High</button>
        <button  id={FILTER.RATE.id} onClick={handleFilter} >Rate, High to Low</button>
      </div>
      <ItinerariesTable itinerariesList={itinerariesList} />
    </Nav>
  )
}

export default Index;
