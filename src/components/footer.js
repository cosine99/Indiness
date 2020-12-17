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
        by Hrishikesh and Ankush
      </p>
    </div>
  </footer>
)

export default Footer
