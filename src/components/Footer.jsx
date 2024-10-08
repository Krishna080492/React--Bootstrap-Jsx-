import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {

  return (
    <>
      {/* Start Footer Section */}
      <footer className="footer-section">
        <div className="container relative">
          <div className="sofa-img">
            <img src="images/sofa.png" alt="Image" className="img-fluid" />
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>
                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input type="text" className="form-control" placeholder="Enter your name" />
                  </div>
                  <div className="col-auto">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span className="fa fa-paper-plane" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap"><Link href="#" className="footer-logo">Furni<span>.</span></Link> </div>
              <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
              <ul className="list-unstyled custom-social">
                <li><NavLink href="#"><span className="fa fa-brands fa-facebook-f" /></NavLink> </li>
                <li><NavLink href="#"><span className="fa fa-brands fa-twitter" /></NavLink> </li>
                <li><NavLink href="#"><span className="fa fa-brands fa-instagram" /></NavLink> </li>
                <li><NavLink href="#"><span className="fa fa-brands fa-linkedin" /></NavLink> </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><NavLink href="#">About us</NavLink> </li>
                    <li><NavLink href="#">Services</NavLink> </li>
                    <li><NavLink href="#">Blog</NavLink> </li>
                    <li><NavLink href="#">Contact us</NavLink> </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><NavLink href="#">Support</NavLink> </li>
                    <li><NavLink href="#">Knowledge base</NavLink> </li>
                    <li><NavLink href="#">Live chat</NavLink> </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><NavLink href="#">Jobs</NavLink> </li>
                    <li><NavLink href="#">Our team</NavLink> </li>
                    <li><NavLink href="#">Leadership</NavLink> </li>
                    <li><NavLink href="#">Privacy Policy</NavLink> </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><NavLink href="#">Nordic Chair</NavLink> </li>
                    <li><NavLink href="#">Kruzo Aero</NavLink> </li>
                    <li><NavLink href="#">Ergonomic Chair</NavLink> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">Copyright ©. All Rights Reserved. — Designed with love by <Link href="https://untree.co">Untree.co</Link>  Distributed By <Link hreff="https://themewagon.com">ThemeWagon</Link>   {/* License information: https://untree.co/license/ */}
                </p>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4"><Link href="#">Terms &amp; Conditions</Link> </li>
                  <li><Link href="#">Privacy Policy</Link> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Section */}
    </>

  )

}

export default Footer