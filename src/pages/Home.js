import React, { Component } from 'react';
import Layout from '../components/Layout/Layout'
import Slides from '../components/HomeComponents/Slides/Slides'
import Cards from '../components/HomeComponents/Card/Cards/Cards'
class Home extends Component {
  render() {
    return (
      <Layout>
        <Slides />
        <Cards />
      </Layout>
    );
  }  
}

export default Home;