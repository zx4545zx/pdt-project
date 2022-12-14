import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">About</h1>
          <p className="col-md-8 fs-4">Using a series of utilities,
            you can create this jumbotron, just like the one in previous versions
            of Bootstrap. Check out the examples below for how you can remix and
            restyle it to your liking.</p>
          <Link href="/booking">
            <a className="btn btn-primary btn-lg">BOOK NOW</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header