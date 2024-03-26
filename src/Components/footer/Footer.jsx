import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <h3>Reframe your inbox</h3>
      <p className="footer_text">
        Subscribe to our newsletter and never miss a story.
      </p>
      <form>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <button className="btn-primary">Subscribe</button>
      </form>
      <p>
        We care about your data in our{" "}
        <a href="https://zyro.com/preview/goodnews?returnPath=%2Fnew-template&defaultTemplateId=goodnews">
          privacy policy
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
