import { LegCard } from '@/components/LegCard'
import { getLeg } from '@/utils/fetchData'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Index = () => {
  const [paymentMethod, setPaymentMethod] = useState();
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

  const radioChangeHandler = (e) => {
    setPaymentMethod(e.target.id);
  };


  return (
    <div className="radio-btn-container">
      <LegCard
        changed={radioChangeHandler}
        id={leg1?.id}
        isSelected={paymentMethod === leg1?.id}
        leg={leg1} />
      <LegCard
        changed={radioChangeHandler}
        id={leg2?.id}
        isSelected={paymentMethod === leg2?.id}
        leg={leg2} />
    </div>
  )
}

export default Index
