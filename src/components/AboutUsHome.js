import React from "react"

function AboutUsHome() {
  return (
    <>
      <section className="section">
        <div className="line">
          <h2 className="text-size-50 text-center">About Us</h2>
          <hr className="break-small background-primary break-center"></hr>
        </div>
        <div className="line">
          <div className="margin">
            <div className="s-12 m-12 l-2">
              <p className="h1 text-size-30 margin-m-bottom-30 text-primary text-line-height-1 text-right">
                We Are<br></br> Web Design Heroes
              </p>
            </div>
            <div className="s-12 m-12 l-5">
              <p className="text-size-14 margin-m-bottom-30 text-dark">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica. Dolor in hendrerit in vulputate velit esse molestie consequat. Mirum est notare quam littera gothica. </p>
            </div>
            <div className="s-12 m-12 l-5">
              <p className="text-size-14 text-dark">Mirum est notare quam littera gothica. Dolor in hendrerit in vulputate velit esse molestie consequat. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Dolor in hendrerit in vulputate velit esse molestie consequat.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="full-width">
        <div className="s-12 m-12 l-6">
          <img src="img/img-12.jpg" alt=""></img>
        </div>
        <div className="s-12 m-12 l-6">
          <div className="padding-2x">
            <div className="line">
              <div className="float-left">
                <i className="icon-sli-drop icon3x text-dark"></i>
              </div>
              <div className="margin-left-60 margin-bottom-30">
                <h3 className="text-size-25 margin-bottom-0">Unlimited Color Variants</h3>
                <p className="text-dark">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.<br></br> Vel illum dolore eu feugiat nulla facilisis.
                </p>
              </div>
            </div>

            <div className="line">
              <div className="float-left">
                <i className="icon-sli-screen-smartphone icon3x text-dark"></i>
              </div>
              <div className="margin-left-60 margin-bottom-30">
                <h3 className="text-size-25 margin-bottom-0">Responsive Layoute</h3>
                <p className="text-dark">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>

            <div className="line">
              <div className="float-left">
                <i className="icon-sli-heart icon3x text-dark"></i>
              </div>
              <div className="margin-left-60 margin-bottom-30">
                <h3 className="text-size-25 margin-bottom-0">Clean Minimalistic Design</h3>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.<br></br> Vel illum dolore eu feugiat nulla facilisis.
                </p>
              </div>
            </div>

            <div className="line">
              <div className="float-left">
                <i className="icon-sli-chart icon3x text-dark"></i>
              </div>
              <div className="margin-left-60 margin-bottom-30">
                <h3 className="text-size-25 margin-bottom-0">Tons of Animated Elements</h3>
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>

            <div className="line">
              <div className="float-left">
                <i className="icon-sli-globe-alt icon3x text-dark"></i>
              </div>
              <div className="margin-left-60">
                <h3 className="text-size-25 margin-bottom-0">And many more...</h3>
                <p className="text-dark">
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
