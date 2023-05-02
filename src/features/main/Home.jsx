import React from 'react'
import Navigation from '../helper/navigation/Navigation'
const Home = ({selectUser}) => {
  console.log(selectUser)
  return (
    <div>
      <Navigation selectUser={selectUser}/>
    </div>
  )
}

export default Home