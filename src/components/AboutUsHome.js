import React from "react"

function AboutUsHome() {
  return (
    <>
      <section className="section">
        <div className="line">
          <h2 className="text-size-50 text-center">About Us</h2>
          <hr className="break-small background-primary break-center"></hr>
        </div>

        <div className="s-12 m-12 l-6">
          <img src="img/jeano.jpg" alt=""></img>
        </div>
        <div className="s-12 m-12 l-6">
          <div className="padding-2x">
            <div className="line">
              <div className="float-left">
                <i className="icon-sli-heart icon3x text-dark"></i>
              </div>
              <div className="margin-left-60 margin-bottom-30">
                <h3 className="text-size-25 margin-bottom-0">Passionate About Your Memories</h3>
                <p className="text-dark">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.<br></br> Vel illum dolore eu feugiat nulla facilisis.
                </p>
              </div>
            </div>

            <div className="line">
              <div className="float-left">
                <i className="icon-sli-trophy icon3x text-dark"></i>
              </div>
              <div className="margin-left-60 margin-bottom-30">
                <h3 className="text-size-25 margin-bottom-0">Top Notch Shots</h3>
                <p className="text-dark">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>

            <div className="line">
              <div className="float-left">
                <i className="icon-sli-directions icon3x text-dark"></i>
              </div>
              <div className="margin-left-60 margin-bottom-30">
                <h3 className="text-size-25 margin-bottom-0">Versatile To Your Needs</h3>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.<br></br> Vel illum dolore eu feugiat nulla facilisis.
                </p>
              </div>
            </div>

            <div className="line">
              <div className="float-left">
                <i className="icon-sli-people icon3x text-dark"></i>
              </div>
              <div className="margin-left-60 margin-bottom-30">
                <h3 className="text-size-25 margin-bottom-0">Easy To Work With</h3>
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>

            <div className="line">
              <div className="float-left">
                <i className="icon-sli-credit-card icon3x text-dark"></i>
              </div>
              <div className="margin-left-60">
                <h3 className="text-size-25 margin-bottom-0">Quality That Won't Break Your Bank</h3>
                <p className="text-dark margin-bottom-80">
                  Nam liber tempor cum soluta nobis eleifend. Duis autem vel eum iriure dolor<br></br> in hendrerit in vulputate velit esse molestie consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsHome
