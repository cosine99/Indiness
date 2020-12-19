import React from "react"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>
        Made using GatsbyJS{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by
        <a href="https://www.linkedin.com/in/hrishikesh-a-j-958a26150/"> Hrishikesh AJ</a>
      </p>
    </div>
  </footer>
)

export default Footer
