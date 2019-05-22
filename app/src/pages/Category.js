import React, { Component } from 'react';
import Layout from '../components/Layout/Layout'
import ListContainer from '../components/CatagoryComponents/ListContainer/ListContainer'
class Category extends Component {
  render() {
    return (
      <Layout>
        <ListContainer/>
      </Layout>
    );
  }  
}

export default Category;