import React, { useEffect } from "react"

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              <h2 className="text-size-40 margin-bottom-30">Choose the package that suits you</h2>
              <hr className="break-small background-primary margin-bottom-30"></hr>
              <p className="margin-bottom-40">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
            <div className="line text-center">
              <div className="margin">
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x background-primary">
                    <i className="icon-sli-shield icon3x text-white margin-bottom-30"></i>
                    <h2 className="text-thin">Unli Shoot</h2>
                    <p className="margin-bottom-30">Unli shot hanggang sa manigas na panga mo kaka-pose. Diyan ka magaling eh.</p>
                    <a className="button button-white-stroke text-size-12">P10,000</a>
                  </div>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x background-primary">
                    <i className="icon-sli-umbrella icon3x text-white margin-bottom-30"></i>
                    <h2 className="text-thin">Pang Profile Pic Package</h2>
                    <p className="margin-bottom-30">Palitan na natin profile pic mo dali. Ang pangit kasi.</p>
                    <a className="button button-white-stroke text-size-12">P8,000</a>
                  </div>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x background-primary">
                    <i className="icon-sli-home icon3x text-white margin-bottom-30"></i>
                    <h2 className="text-thin">Pang Akit sa Crush</h2>
                    <p className="margin-bottom-30">Pag ito, hindi ka pa pinansin ng crush mo, ewan nalang.</p>
                    <a className="button button-white-stroke text-size-12">P5,000</a>
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
