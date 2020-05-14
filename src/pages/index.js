import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>We are a group of freelancers & tech savvy interested to work in a flexible & remote platform.</p>
    <p>Our focus is to provide top-notch services most efficiently. We expertise in Programming & Tech, Graphics & Design, Digital Marketing, Content Writing, Video & Animation, Data Science.</p>
    <p>As of now we have 3 Software Developers, 3 Digital Marketer, 1 Data Scientist, 1 Video Editor, 3 Graphic Designer, 2 Content Writer.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Terms & Conditions</Link>
  </Layout>
)

export default IndexPage
