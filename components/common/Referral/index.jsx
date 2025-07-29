import React from 'react'
import AccountBalace from './AccountBalace'
import ReferralDetails from './ReferralDetails'

function Referral() {
    return (
        <div className='flex gap-3'>
            <AccountBalace />
            <ReferralDetails />
        </div>
    )
}

export default Referral
