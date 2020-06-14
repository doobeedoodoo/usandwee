import React, { useState, useEffect } from "react"
import Form from "./Form"
import MessageSent from "./MessageSent"

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main role="main">
        <article>
          <header className="section background-dark">
            <div className="line">
              <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">Contact Us</h1>
              <p className="margin-bottom-0 text-size-16">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.<br></br>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
              </p>
            </div>
          </header>
          <div className="section background-white">
            <div className="line margin-bottom-60">
              <div className="margin">
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x block-bordered border-radius">
                    <div className="float-left hide-s">
                      <i className="icon-sli-location-pin icon3x text-primary"></i>
                    </div>
                    <div className="margin-left-70 margin-s-left-0 margin-bottom">
                      <h3 className="margin-bottom-0">Facebook</h3>
                      <p>www.facebook.com/usandweee/</p>
                    </div>
                  </div>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x block-bordered border-radius">
                    <div className="float-left hide-s">
                      <i className="icon-sli-envelope icon3x text-primary"></i>
                    </div>
                    <div className="margin-left-70 margin-s-left-0 margin-bottom">
                      <h3 className="margin-bottom-0">E-mail</h3>
                      <p>usandweee@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x block-bordered border-radius">
                    <div className="float-left hide-s">
                      <i className="icon-sli-phone icon3x text-primary"></i>
                    </div>
                    <div className="margin-left-70 margin-s-left-0 margin-bottom">
                      <h3 className="margin-bottom-0">Phone Number</h3>
                      <p>+63 917 123 4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="line">
              <div className="margin">
                <div className="s-12 m-12 l-8">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export default Contact
