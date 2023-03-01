import React from 'react'
import './userInfoRow.scss'

const UserInfoRow = ({property, value}) => {
  return (
   <div className="user-info-row">
      <span className="user-info-property">{property}:</span>
      <span className="user-info-value">{value}</span>
   </div>
  )
}

export default UserInfoRow