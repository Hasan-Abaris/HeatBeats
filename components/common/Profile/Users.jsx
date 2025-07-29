import React from 'react'
import UserDetails from './UserDetails'
import LearningGoals from './LearningGoals'
import Studyplanrem from './Studyplanrem'
import Helponcourse from './Helponcourse'

function Users() {
    return (
        <div className='flex-1 '>
            <UserDetails />
            <LearningGoals />
            <Studyplanrem />
            <Helponcourse />
        </div>
    )
}

export default Users
