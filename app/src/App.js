import React, { Component } from 'react';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import Contact from './pages/Contact'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
          <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/Category" component={Category} />
            <Route path="/Contact" component={Contact} />
          </BrowserRouter>
        <Footer />
      </Layout>
    );
  }
}

export default App;
