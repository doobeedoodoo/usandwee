import React, { useEffect } from "react"
import OurWork from "./OurWork"
import Testimonials from "./Testimonials"
import Footer from "./Footer"
import AboutUsHome from "./AboutUsHome"

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main>
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
                      <div className="s-12 m-12 l-3 center">
                        <a className="button button-white-stroke s-12" href="/">
                          Get Started Now
                        </a>
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
                  <i className="icon-sli-shield icon3x text-dark center margin-bottom-30"></i>
                  <h2 className="text-thin">Napakagaling</h2>
                  <p className="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                  <a className="button button-dark-stroke text-size-12" href="/">
                    GET MORE INFO
                  </a>
                </div>
              </div>
              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered">
                  <i className="icon-sli-umbrella icon3x text-dark center margin-bottom-30"></i>
                  <h2 className="text-thin">Napakahusay</h2>
                  <p className="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                  <a className="button button-dark-stroke text-size-12" href="/">
                    GET MORE INFO
                  </a>
                </div>
              </div>
              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered">
                  <i className="icon-sli-home icon3x text-dark center margin-bottom-30"></i>
                  <h2 className="text-thin">Mabango</h2>
                  <p className="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                  <a className="button button-dark-stroke text-size-12" href="/">
                    GET MORE INFO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutUsHome />
        <OurWork />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default Home
