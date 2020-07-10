import React, { useEffect, useState } from "react"
import OurWork from "./OurWork"
import Testimonials from "./Testimonials"
import Footer from "./Footer"
import AboutUsHome from "./AboutUsHome"

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // useEffect(() => {
  //   if (!window.location.hash) {
  //     window.location = window.location + "#home"
  //     window.location.reload()
  //   }
  // }, [])

  return (
    <>
      <main>
        <div>
          <div className="background-dark text-center">
            <div className="item">
              <div className="s-12">
                <img src="/img/header.jpg" alt=""></img>
                <div className="carousel-content">
                  <div className="content-center-vertical line">
                    <div className="margin-top-bottom-80">
                      <h1 className="text-white margin-bottom-30 text-size-60 text-m-size-30 text-line-height-1">us and weee</h1>
                      <div className="s-12 m-10 l-8 center">
                        <p className="text-white text-size-14 margin-bottom-40">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Iriure dolor in hendrerit duis autem vel eum in vulputate velit esse molestie consequat.</p>
                      </div>
                      <div className="line">
                        {/* <div className="s-12 m-12 l-3 center">
                          <a className="button button-white-stroke s-12">Get Started Now</a>
                        </div> */}
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="s-12 m-10 l-8 center">
          <br></br>
        </div>

        <section className="section-small-padding background-white text-center">
          <div className="line">
            <div className="margin">
              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered">
                  <i className="icon-sli-camera icon3x text-dark center margin-bottom-30"></i>
                  <h2 className="text-thin">High Quality Photos</h2>
                  <p className="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                </div>
              </div>
              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered">
                  <i className="icon-sli-control-forward icon3x text-dark center margin-bottom-30"></i>
                  <h2 className="text-thin">Fast Delivery</h2>
                  <p className="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                </div>
              </div>
              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered">
                  <i className="icon-sli-wallet icon3x text-dark center margin-bottom-30"></i>
                  <h2 className="text-thin">Affordable</h2>
                  <p className="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <OurWork />
        <AboutUsHome />
        <Testimonials />
      </main>
    </>
  )
}

export default Home
