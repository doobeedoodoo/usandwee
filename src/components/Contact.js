import React from "react"

function Contact() {
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
                      <h3 className="margin-bottom-0">Company Address</h3>
                      <p>
                        Responsive Street 7<br></br>
                        London / UK / Europe
                      </p>
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
                      <p>
                        sampledomain.comcomcom<br></br>
                        sampledomain.comcomcom
                      </p>
                    </div>
                  </div>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x block-bordered border-radius">
                    <div className="float-left hide-s">
                      <i className="icon-sli-phone icon3x text-primary"></i>
                    </div>
                    <div className="margin-left-70 margin-s-left-0">
                      <h3 className="margin-bottom-0">Phone Numbers</h3>
                      <p>
                        <span className="text-primary">Infoline: 0800 4521 800 50</span>
                        <br></br>
                        Office: 0450 5896 625 16<br></br>
                        Office 2: 0798 6546 465 15
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="line">
              <div className="margin">
                <div className="s-12 m-12 l-8">
                  <h2 className="margin-bottom-10">Leave Message</h2>
                  <form name="contactForm" className="customform" method="post">
                    <div className="line">
                      <div className="margin">
                        <div className="s-12 m-12 l-6">
                          <input name="email" className="required email" placeholder="Your e-mail" title="Your e-mail" type="text" />
                          <p className="email-error form-error">Please enter your e-mail.</p>
                        </div>
                        <div className="s-12 m-12 l-6">
                          <input name="name" className="name" placeholder="Your name" title="Your name" type="text" />
                          <p className="name-error form-error">Please enter your name.</p>
                        </div>
                      </div>
                    </div>
                    <div className="s-12">
                      <input name="subject" className="subject" placeholder="Subject" title="Subject" type="text" />
                      <p className="subject-error form-error">Please enter the subject.</p>
                    </div>
                    <div className="s-12">
                      <textarea name="message" className="required message" placeholder="Your message" rows="3"></textarea>
                      <p className="message-error form-error">Please enter your message.</p>
                    </div>
                    <div className="s-12">
                      <button className="s-12 submit-form button background-primary text-white" type="submit">
                        Submit Button
                      </button>
                    </div>
                  </form>
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
