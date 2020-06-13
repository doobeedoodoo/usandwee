import React, { useEffect } from "react"

function HomeBody() {
  return (
    <>
      <main>
        <div className="carousel-default owl-carousel carousel-main carousel-nav-white background-dark text-center">
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
      </main>
    </>
  )
}

export default HomeBody
