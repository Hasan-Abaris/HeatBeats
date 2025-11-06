import React from 'react'
import Banner from './Banner'
import Contest from './Contest'
import Tournamentdetail from './Tournamentdetail'
import HowPlay from './HowPlay'

function Tournamentpage() {
  return (
    <div >
      <Banner/>
      <div/>

      <div className='mt-2 bg-black'>

      <Contest/>
      <Tournamentdetail/>
      <HowPlay/>
      </div>
    </div>
  )
}

export default Tournamentpage
