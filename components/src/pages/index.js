import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Address, Button } from "../components/Element"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Planetary Nebula</h1>
    <p>Constellation: Musca</p>
    <p>Distance: 1,800 light-years</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
 
    </div>
    <Address>
   <p> Planetary Nebula NGC 5189</p>
       
   <Link to="/page-2/">Go to another space image.</Link><br/>
      <Button variant="primary">something goes here</Button>
    </Address>
    
  </Layout>
)

export default IndexPage


