import React, { Component } from 'react';
// import withRedux from 'next-redux-wrapper';
// import initStore from 'root/store';
// import { bindActionCreators } from 'redux';
import Layout from '../components/Layout';

class About extends Component {
  static async getInitialProps(ctx) {
    const { req } = ctx;
    const { store } = ctx;
    const { isServer } = ctx;
    const id = ctx.query.id;
    return { id: id }
  }

  componentDidMount() {
  }

  componentWillMount() {
  }

  render() {
    return (
      <Layout>
        {this.props.id && (
          <p>{"ID: " + this.props.id}</p>
        )}
        <p>Here is the value:
        {this.props.textValue}
        </p>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default About
// export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(About);
