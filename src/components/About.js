import React from "react"

function About() {
  return (
    <>
      <article>
        <header className="section background-dark">
          <div className="line">
            <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">About Us</h1>
            <p className="margin-bottom-0 text-size-16">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.<br></br>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
            </p>
          </div>
        </header>
        <div className="section background-white">
          <div className="line">
            <h2 className="text-size-40 margin-bottom-30">Investigationes demonstraverunt lectores</h2>
            <hr className="break-small background-primary margin-bottom-30"></hr>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            <blockquote className="margin-top-bottom-20">
              <h3 className="text-size-20 text-line-height-1 margin-bottom-15">Mirum est notare quam littera gothica</h3>
              Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
            </blockquote>

            <div className="line margin-top-30">
              <div className="margin">
                <div className="s-12 m-6 l-6">
                  <img src="img/img-01.jpg" alt=""></img>
                  <p className="margin-top-30">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                </div>
                <div className="s-12 m-6 l-6">
                  <img src="img/img-02.jpg" alt=""></img>
                  <p className="margin-top-30">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default About
