import React from 'react'
import IntLearningcards from './IntLearningcards'
import RecAddedVid from './RecAddedVid'
import MoreResources from './MoreResources'
import PopVedios from './PopVedios'
import TrendingCourses from '../TrendingCourses'

function Videos() {
  return (
    <section className="py-20 md:px-16 p-6">
      <div className=" mx-auto px-6 md:px-12">
        <h2 className="text-3xl  font-semibold uppercase text-gray-600 tracking-wide mb-10">
          What are you interested in learning?
        </h2>
        <IntLearningcards />
        <RecAddedVid />
        <MoreResources />
        <PopVedios />
        <TrendingCourses />
      </div>
    </section>
  )
}

export default Videos
