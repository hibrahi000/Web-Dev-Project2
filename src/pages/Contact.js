import React, { Component } from 'react';
import Layout from '../components/Layout/Layout'
import ContactForm from '../components/Form/ContactForm/ContactForm'

class Contact extends Component {
  render() {
    return (
      <Layout>
        <ContactForm />
      </Layout>
    );
  }  
}

export default Contact;