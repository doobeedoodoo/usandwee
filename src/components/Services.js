import React from "react"

function Services() {
  return (
    <>
      <main role="main">
        <article>
          <header className="section background-dark">
            <div className="line">
              <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">Our Services</h1>
              <p className="margin-bottom-0 text-size-16">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.<br></br>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
              </p>
            </div>
          </header>
          <section className="section background-white">
            <div className="line">
              <h2 className="text-size-40 margin-bottom-30">Investigationes demonstraverunt lectores</h2>
              <hr className="break-small background-primary margin-bottom-30"></hr>
              <p className="margin-bottom-40">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
            <div className="line text-center">
              <div className="margin">
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x background-primary">
                    <i className="icon-sli-shield icon3x text-white margin-bottom-30"></i>
                    <h2 className="text-thin">Unlimited Color Variants</h2>
                    <p className="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                    <a className="button button-white-stroke text-size-12" href="/">
                      GET MORE INFO
                    </a>
                  </div>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x background-primary">
                    <i className="icon-sli-umbrella icon3x text-white margin-bottom-30"></i>
                    <h2 className="text-thin">Parallax Background</h2>
                    <p className="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                    <a className="button button-white-stroke text-size-12" href="/">
                      GET MORE INFO
                    </a>
                  </div>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x background-primary">
                    <i className="icon-sli-home icon3x text-white margin-bottom-30"></i>
                    <h2 className="text-thin">Clean Modern Code</h2>
                    <p className="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                    <a className="button button-white-stroke text-size-12" href="/">
                      GET MORE INFO
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}

export default Services
