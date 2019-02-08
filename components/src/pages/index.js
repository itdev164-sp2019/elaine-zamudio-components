import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Address, Button } from "../components/Element"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi Instructor and Class</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>I'm working on components :D</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Address>
      My address is 123 Sleepy Hollow Road.
      <Button variant="primary">Contact Me</Button>
    </Address>
 
  </Layout>
)

export default IndexPage
