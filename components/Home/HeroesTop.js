import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroesTop = () => {
  return (
    <>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 ">
          <Image
            src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
            className="d-block w-100 rounded"
            alt="meeting_img1"
            width={2250}
            height={2000}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">The best for work</h1>
          <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap,
            the worlds most popular front-end open source toolkit, featuring Sass variables and mixins,
            responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link href="/booking">
              <a className="btn btn-primary btn-lg px-4 me-md-2">BOOK NOW</a>
            </Link>
            <Link href="/promotion">
              <a className="btn btn-outline-secondary btn-lg px-4">Promotion</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroesTop