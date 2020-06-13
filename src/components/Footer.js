import React, { useEffect } from "react"

function Footer() {
  const borderColor = {
    "border-color": "#002633"
  }

  return (
    <>
      <footer>
        <div className="background-primary padding text-center">
          <p className="h1">Contact Us: +63 917 123 4567</p>
        </div>

        <section className="background-dark full-width">
          <div className="s-12 m-12 l-6">
            <div className="s-12 grayscale center"></div>
          </div>

          <div className="s-12 m-12 l-4">
            <div className="padding-2x">
              <div className="line">
                <div className="float-left">
                  <i className="icon-sli-location-pin text-primary icon3x"></i>
                </div>
                <div className="margin-left-70">
                  <h3 className="margin-bottom-0">Facebook</h3>
                  <p> https://www.facebook.com/usandweee/</p>
                </div>
              </div>
            </div>
          </div>

          <div className="s-12 m-12 l-4">
            <div className="padding-2x">
              <div className="line">
                <div className="float-left">
                  <i className="icon-sli-envelope text-primary icon3x"></i>
                </div>
                <div className="margin-left-70">
                  <h3 className="margin-bottom-0">Email</h3>
                  <p>usandweee@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="s-12 m-12 l-4">
            <div className="padding-2x">
              <div className="line">
                <div className="float-left">
                  <i className="icon-sli-phone text-primary icon3x"></i>
                </div>
                <div className="margin-left-70">
                  <h3 className="margin-bottom-0">Phone Number</h3>
                  <p>+63 917 123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
