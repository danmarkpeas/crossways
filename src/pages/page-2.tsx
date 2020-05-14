// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Terms & Conditions" />
    <h4>We follow few terms & conditions through our work -</h4>
    <p><ul>
    <li>We work remotely - To maintain a flexible timing, To reduce cost & time in terms of travelling.</li>
    <li>We communicate over mails and messages dedicatedly. We will soon provide a tele-caller to attend all your calls 24 x 7. As of now we only take calls between 2 p.m. to 3 p.m.</li>
    <li>We do not entertain any physical labour service. Our work is limited to only technology and online solutions.</li>
    <li>As of now visit to client's area is limited to thrice per month. Soon we will provide dedicated person to visit more often.</li>
    <li>Our project management system is under development. Once it is ready you will get to visualize the progress of your project every day.</li>
    <li>Since lot of third party platforms started charging we might ask you for an advance to start your project.</li>
    <li>If any of our freelancer is unable to provide service regarding to your project we provide alternatives.</li>
    <li>We follow standards and quality as per industry and maintain strict work progress to meet the deadline.</li>
    <li>Projects can be charged once, weekly, monthly, yearly.</li>
    <li>Projects can be divided into modules / parts according to the size of the project.</li>
    </ul></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
