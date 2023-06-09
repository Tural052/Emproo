import React from 'react'
import PageHelper from './PageHelper'
import { Link } from 'react-router-dom'
import AddCompanent from '../helper/addCompanent/AddCompanent'
const Serbest = ({user}) => {
    const location=window.location
  const navigate = location.pathname.split('/').slice(0, -1).join('/');

  return (
    <>
    <PageHelper/>
    <div className="link_box">
        <Link to={`${navigate}/list`}>Aktivlik</Link>
        <Link to={`${navigate}/imtahna`}>Imtahan</Link>
        <Link to={`${navigate}/labarotorlya`}>Labarotorya iş</Link>
        <Link to={`${navigate}/sərbəst`}>Sərbəst iş</Link>
        <Link to={`${navigate}/kollokvium`}>Kollokvium</Link>
      </div>
    <AddCompanent user={user}/>
    </>
  )
}

export default Serbest