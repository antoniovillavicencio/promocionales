import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Products from "../components/Products"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Products heading="Our Products"/>
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
