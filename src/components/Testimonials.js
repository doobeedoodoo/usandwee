import React from "react"

function Testimonials() {
  return (
    <>
      <section>
        <div className="line">
          <h2 className="text-size-50 text-center">Testimonials</h2>
          <hr className="break-small background-primary break-center"></hr>

          <div className="item">
            <div className="s-12 m-12 l-7 center text-center">
              <center>
                <img className="image-testimonial-small" src="img/testi.jpg" alt=""></img>
              </center>
              <br></br>
              <p className="h1 margin-bottom text-size-20">"I'm very satisfied with his work!"</p>
              <p className="h1 text-size-16 margin-bottom-80">Mr. Satisfied Client</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
