import React from "react"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"
import { AiOutlineMail, AiFillLinkedin, AiFillPhone } from "react-icons/ai"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="contact-page">
      <SEO
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <h2> Contact me here </h2>

        <div>
          <AiOutlineMail
            size={56}
            style={{ margin: "auto 18px auto auto", verticalAlign: "middle" }}
          />
          <a
            style={{ verticalAlign: "middle" }}
            href="mailto:ashwini1812@gmail.com"
          >
            ashwini1812@gmail.com
          </a>
        </div>

        <br />

        <div>
          <AiFillLinkedin
            size={56}
            style={{ margin: "auto 18px auto auto", verticalAlign: "middle" }}
          />
          <a
            style={{ verticalAlign: "middle" }}
            href="https://www.linkedin.com/in/ashwini-amarapura-242bab74"
          >
            LinkedIn Profile
          </a>
        </div>

        <br />

        <div>
          <AiFillPhone
            size={56}
            style={{ margin: "auto 18px auto auto", verticalAlign: "middle" }}
          />
          <a style={{ verticalAlign: "middle" }} href="tel:+919901702620">
            +91 9901702620
          </a>
        </div>

        {/* <form
          className="contact-form"
          action="mailto:ashwini1812@gmail.com"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          enctype="multipart/form-data"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Name
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Subject
              <input type="text" name="subject" />
            </label>
          </p>
          <p>
            <label>
              Message<textarea name="message"></textarea>
            </label>
          </p>
          <p className="text-align-right">
            <button className="button" type="submit">
              Send Message{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form> */}
      </div>
    </Layout>
  )
}

export default Contact
