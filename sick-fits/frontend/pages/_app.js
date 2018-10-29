import App, { Container } from 'next/app';
import Page from '../components/Page'
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
  // getInitialProps is a special next-js lifecycle method, it will run first, before the first render, and it gives you access to any props it has in the render below
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
  // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}> {/* ApolloProvider needs a client, available bc we wrap it at the bottom (withData) */}
          <Page>
            <Component {...pageProps}/>
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
