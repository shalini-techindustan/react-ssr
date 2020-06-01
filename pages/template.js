import React, { Component } from 'react';
import Layout from '../components/Layout';


class NEWPAGE extends Component {
    // static async getInitialProps() {
    // }
    componentWillMount() {

    }
    componentDidMount() {

    }


    render() {
        return (
            <Layout>
                <div style={{ width: '50%' }}>
                    Use this as a template to add new pages.
                    <p>Change "template" name with your file name, replace '/template' with your your route. </p>
                    <p>Note: The name of the Route and name of the Component File should be the same. Otherwise component will not be rendered, As in ssr file name act as a route.</p>

                </div>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default NEWPAGE
// export default withRedux(initStore, mapStateToProps = null, mapDispatchToProps = null)(withMui(NEWPAGE));
