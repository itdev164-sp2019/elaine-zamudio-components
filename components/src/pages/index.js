import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import Image from "../gatsby-components/image"
import SEO from "../gatsby-components/seo"
import { Button, IconButton, Section } from "../components/Element"
import { Search } from 'styled-icons/feather'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Planetary Nebula</h1>
    <p>Constellation: Musca</p>
    <p>Distance: 1,800 light-years</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
     </div>
    <Section flex justifyContent="space-evenly" m={2}>
   <p> Planetary Nebula NGC 5189</p>
       
   <Link to="/page-2/">Go to another space image.</Link><br/>
      <Button variant="primary">something goes here</Button>
      <IconButton icon={<Search />} />
    </Section>
  </Layout>
)

export default IndexPage


