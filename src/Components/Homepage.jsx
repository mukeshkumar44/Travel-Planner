import React from 'react'
import Home from './Home'
import TripPlanner from './TripPlanner'
import Try from './Try'
import FeaturesSection from './FeaturesSection'
import PromoSection from './PromoSection'
import SubscriptionForm from './SubscriptionForm'


const Homepage = () => {
  return (
    <div>
         <TripPlanner/> 
        <Try/>
    <FeaturesSection/>
    <PromoSection/> 
    <SubscriptionForm/>
    </div>
  )
}

export default Homepage