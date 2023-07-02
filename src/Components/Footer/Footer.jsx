import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <section className="Footer">
      <div className="Footer-main">
        <div className="top">
          <div className="left">
            <a href="#">
              <img src="/Images/logo.png" alt="..." />
            </a>
            <h1>Lorem ipsum dolor sit amet,</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ultrices quam eu facilisis molestie. Praesent commodo risus eros,
              non pharetra dolor laoreet id. Nunc maximus erat id magna
              porttitor, eget dignissim nisi gravida. Aenean venenatis odio sit
              amet lectus cursus eleifend. Sed libero justo, sollicitudin vitae
              facilisis ac, gravida eu tortor. Aliquam sit amet nulla sapien.
              Cras non euismod nunc, nec aliquet erat. Donec sed lacinia dui,
              non molestie augue. Quisque interdum elit vel velit suscipit, a
              venenatis odio posuere. Nam volutpat in neque id tempor.
            </p>
          </div>
          <div className="right">
            <h3>Join Our Community</h3>
            <div className="social">
              <img src="/Images/facebook.png" alt="..." className="img-fluid" />
              <img src="/Images/twitter.png" alt="..." className="img-fluid" />
              <img src="/Images/insta.png" alt="..." className="img-fluid" />
              <img
                src="/Images/pinterent.png"
                alt="..."
                className="img-fluid"
              />
              <img src="/Images/youtube.png" alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="lines"></div>
        <div className="bottom">
          <div className="left">
            <p>2010 - 2023 </p>
          </div>
          <div className="right">
            <p>Privacy Policy</p>
            <p>Terms of service</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
