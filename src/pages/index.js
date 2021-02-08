import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Products from "../components/Products"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Products heading="Our Products"/>
  </Layout>
)

export default IndexPage
