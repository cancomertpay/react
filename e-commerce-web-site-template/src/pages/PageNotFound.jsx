import React from 'react'
import { Link } from 'react-router-dom'


const PageNotFound = () => {
  return (
    <>
      <div>404 - Page Not Found</div>
      <Link to={'/'} className={"btn btn-info"}>Ana Sayfaya Gitmek İçin Tıklayınız</Link>
    </>
  )
}

export default PageNotFound