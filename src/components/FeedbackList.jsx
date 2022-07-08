import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem'
import React from 'react'

function FeedbackList({feedback, handleDelete}) {
   if(!feedback || feedback.length === 0){
    return(<p>no feedback List</p>)
   }

  return (
    <div className='feedback-list'>
        {feedback.map((item) => {
          return <FeedbackItem key={item.id} item={item}
         handleDelete={handleDelete} />
        })}
    </div>
  )
}

FeedbackList.propType = {
    feedback: PropTypes.arrayOf
}

export default FeedbackList