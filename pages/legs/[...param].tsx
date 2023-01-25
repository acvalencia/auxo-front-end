import { getLeg } from '@/utils/fetchData'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Index = () => {
  const router = useRouter()
  const { param } = router.query
  const [leg1, setLeg1] = useState()
  const [leg2, setLeg2] = useState()

  useEffect(() => {
    if (param) {
      getLeg(param[0]).then((data) => {
        setLeg1(data)
      })

      getLeg(param[1]).then((data) => {
        setLeg2(data)
      })
    }
  }, [param])


  return (
    <>
      <div>{leg1?.id}</div>
      <div>{leg2?.id}</div>
    </>
  )
}

export default Index
