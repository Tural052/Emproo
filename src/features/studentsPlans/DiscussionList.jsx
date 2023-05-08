import React from 'react'
import PageHelper from '../main/PageHelper'

const DiscussionList = ({selectUser,selectGroup}) => {
  return (
    <div>
        <PageHelper selectGroup={selectGroup} selectUser={selectUser}/>
    </div>
  )
}

export default DiscussionList