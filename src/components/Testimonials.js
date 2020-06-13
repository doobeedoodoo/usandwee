import React from "react"

function Testimonials() {
  return (
    <>
      <section className="section background-white text-center">
        <div className="line">
          <h2 className="text-size-50 text-center">Testimonials</h2>
          <hr className="break-small background-primary break-center"></hr>

          <div className="item">
            <div className="s-12 m-12 l-7 center text-center">
              <center>
                <img className="image-testimonial-small" src="img/testimonials-04.png" alt=""></img>
              </center>
              <br></br>
              <p className="h1 margin-bottom text-size-20">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
              <p className="h1 text-size-16">Scott Star / CEO / Company</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
