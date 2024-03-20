import React from 'react';

import Facebook from '../../assets/footer_images/facebook.png';
import Twitter from '../../assets/footer_images/twitter.png';
import Instagram from '../../assets/footer_images/instagram.png';
import LinkedIn from '../../assets/footer_images/linkedin.png';
import GitHub from '../../assets/footer_images/github.png';

class Footer extends React.Component {  

  render() {
    const footerStyle = {
      // backgroundColor: '#929fba',
      color: 'white',
    };

    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
    };

    const containerStyle = {
      bottom: 0,
      left: 0,
      width: '100%',
    //   zIndex: 1000,
    };

    return (
      <div style={containerStyle}>
        {/* Remove the container if you want to extend the Footer to full width */}
        {/* <div className="container my-5"> */}
          {/* Footer */}
          <footer className="text-center text-lg-start" style={footerStyle}>
            {/* Grid container */}
            <div className="container p-4 pb-0">
              {/* Section: Links */}
              <section>
                {/*Grid row*/}
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">ZenVista</h6>
                    <p>
                    Welcome to ZenVista yoga academy, where we are dedicated to promoting
            health, wellness, and spiritual growth through the practice of
            yoga. Our academy offers a variety of classes, workshops, and
            retreats suitable for practitioners of all levels, from beginners
            to advanced yogis.
                    </p>
                  </div>
                  {/* Grid column */}

                  <hr className="w-100 clearfix d-md-none" />

                  {/* Grid column */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Pages</h6>
                    <p>
                      <a href="#" style={linkStyle}>
                        Feedback
                      </a>
                    </p>
                    <p>
                      <a href="#" style={linkStyle}>
                        FAQ
                      </a>
                    </p>
                    <p>
                      <a href="#" style={linkStyle}>
                        Terms and Conditions
                      </a>
                    </p>
                    <p>
                      <a href="#" style={linkStyle}>
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                  {/* Grid column */}

                  <hr className="w-100 clearfix d-md-none" />

                  {/* Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p>
                      <i className="fas fa-home mr-3"></i> Coimbatore, Tamil Nadu, India
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> 727821tuit022@skct.edu.in
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 9384405120
                    </p>
                    <p>
                      <i className="fas fa-print mr-3"></i> + 0123456789
                    </p>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-md-3 col-lg-2 col-xl-3 mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                    
                    <a href='https://www.facebook.com' target='_blank'><img src={Facebook}/></a>
                    <a href='https://www.twitter.com' target='_blank'><img src={Twitter}/></a>
                    <a href='https://www.instagram.com' target='_blank'><img src={Instagram}/></a>
                    <a href='https://www.linkedin.com' target='_blank'><img src={LinkedIn}/></a>
                    <a href='https://www.github.com' target='_blank'><img src={GitHub}/></a>

                    {/* <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: '#55acee' }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-twitter"></i>
                    </a> */}
            
                  </div>
                </div>
                {/* Grid row */}
              </section>
              {/* Section: Links */}
            </div>
            {/* Grid container */}

            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2023 Copyright:
              <a className="text-white" href="/Home">
                ZenVista.com
              </a>
            </div>
            {/* Copyright */}
          </footer>
          {/* Footer */}
        {/* </div> */}
        {/* End of .container */}
      </div>
    );
  }
}

export default Footer;
