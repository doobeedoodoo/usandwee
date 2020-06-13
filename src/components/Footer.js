import React, { useEffect } from "react"

function Footer() {
  const borderColor = {
    "border-color": "#002633"
  }

  return (
    <>
      <footer>
        <div className="background-primary padding text-center">
          <p className="h1">Contact Us: 0800 787 787</p>
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
                  <h3 className="margin-bottom-0">Company Address</h3>
                  <p>
                    Responsive Street 7<br></br>
                    London / United Kingdom / Europe
                  </p>
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
                  <p>
                    Responsive Street 7<br></br>
                    London / United Kingdom / Europe
                  </p>
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
                  <p>
                    Responsive Street 7<br></br>
                    London / United Kingdom / Europe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="padding background-dark full-width">
          <div className="s-12 l-6">
            <p className="text-size-12">Copyright 2019, Vision Design - graphic zoo</p>
            <p className="text-size-12">All images have been purchased from Bigstock. Do not use the images in your website.</p>
          </div>
          <div className="s-12 l-6">
            <a className="right text-size-12" href="http://www.myresponsee.com" title="Responsee - lightweight responsive framework">
              Design and coding<br></br>by Responsee Team
            </a>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
