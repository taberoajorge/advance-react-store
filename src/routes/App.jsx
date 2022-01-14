import React from 'react';
import Header from '../components/Header';
import Layout from '../containers/Layout';
import { Theme } from '../Theme';

function App() {
  const [theme, setTheme] = React.useState('ligth');

  return (
    <Theme theme={theme} >
      <Header />
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </ Theme>
  );
}

export default App;
