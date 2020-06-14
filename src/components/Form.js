import React, { useState } from "react"

function Form() {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    if (email && message) {
      alert("Thank you! We have received your message. Expect us to reach back to you soon!")
    }
  }

  return (
    <>
      <h2 className="margin-bottom-10">Leave Message</h2>
      <form onSubmit={handleSubmit} name="contactForm" className="customform" method="post">
        <div className="line">
          <div className="margin">
            <div className="s-12 m-12 l-6">
              <input onChange={e => setEmail(e.target.value)} name="email" className="required email" placeholder="Your e-mail" title="Your e-mail" type="text" />
              <p className="email-error form-error">Please enter your e-mail.</p>
            </div>
            <div className="s-12 m-12 l-6">
              <input onChange={e => setName(e.target.value)} name="name" className="name" placeholder="Your name" title="Your name" type="text" />
              <p className="name-error form-error">Please enter your name.</p>
            </div>
          </div>
        </div>
        <div className="s-12">
          <input onChange={e => setSubject(e.target.value)} name="subject" className="subject" placeholder="Subject" title="Subject" type="text" />
          <p className="subject-error form-error">Please enter the subject.</p>
        </div>
        <div className="s-12">
          <textarea onChange={e => setMessage(e.target.value)} name="message" className="required message" placeholder="Your message" rows="3"></textarea>
          <p className="message-error form-error">Please enter your message.</p>
        </div>
        <div className="s-12">
          <button className="s-12 submit-form button background-primary text-white" type="submit">
            Submit Button
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
