
import React from 'react'
import ProfileDetails from './ProfileDetails'
import Users from './Users'

function MyProfile() {
    return (
        <div className='flex gap-3'>
            <ProfileDetails />
            <Users />
        </div>
    )
}

export default MyProfile

