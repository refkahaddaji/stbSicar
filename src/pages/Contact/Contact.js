import React from "react";
import "./style.css";
function Contact() {
  return (
    <>
      {/* BANNER */}
      <div>
        {" "}
        <div className="contact-banner">
          <span className="contact-banner-title">
            <span>All you need to know</span>
            <h1>CONTACT US</h1>
          </span>
        </div>
      </div>
      <section class="contact">
        <form class="form">
          <h3>CONTACT US</h3>
          <p type="Name:">
            <input placeholder="Write your name here.."></input>
          </p>
          <p type="Email:">
            <input placeholder="Let us know how to contact you back.."></input>
          </p>
          <p type="Message:">
            <input placeholder="What would you like to tell us.."></input>
          </p>
          <button>Send Message</button>
          <div>
            <span class="fa fa-phone"></span>001 1023 567
            <span class="fa fa-envelope-o"></span> contact@company.com
          </div>
        </form>

        <script src="js/jquery.min.js"></script>
        <script src="js/popper.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.validate.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
        <script src="js/google-map.js"></script>
        <script src="js/main.js"></script>
      </section>
    </>
  );
}

export default Contact;
