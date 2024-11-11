// import React from 'react'

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="paras">
        <div className="feature">
          <h3>Features</h3>
          <a href="#" style={{ color: "blue" }}>
            Cool Staff
          </a>
          <a href="#">Random Feature</a>
          <a href="#">Team Feature</a>
        </div>

        <div className="resource">
          <h3>Resourses</h3>
          <a href="#">Resource</a>
          <a href="#">Resource name</a>
        </div>
        <div className="about">
          <h3>About</h3>
          <a href="#">Team</a>
          <a href="#">Locations</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
