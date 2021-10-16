import React, { Fragment } from 'react';
import { ResetCSS } from '../assets/css/style';
import Layout from "../components/layout"
import WelcomeSection from '../components/welcome';
import Seo from '../components/seo';
const IndexPage = () => {
  return (
      <Layout>
          <Fragment>
              <Seo title="Marcin Zawadzki | Software Engineer, living in Wrocław, Poland."/>
              <ResetCSS/>
              <WelcomeSection/>
          </Fragment>
      </Layout>
  )
}

export default IndexPage
