import React from 'react'
import PageHelper from './PageHelper'
import { Link } from 'react-router-dom'
const Kol = () => {
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
    <div>Kol</div>
    </>
  )
}

export default Kol