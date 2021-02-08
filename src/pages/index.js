import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Products from "../components/Products"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Products heading="Our Products"/>
    <Testimonials />
  </Layout>
)

export default IndexPage
