import React from 'react';
import Characters from '../containers/Characters';
import Header from '../components/Header';
import Layout from '../containers/Layout';
import { Theme } from '../Theme';

function App() {
  const [theme, setTheme] = React.useState(true);

  return (
    <Theme theme={theme} >
      <Header theme={theme} setTheme={setTheme}/>
      <Layout>
        <section>
          <article>
            <Characters />
          </article>
        </section>
      </Layout>
    </ Theme>
  );
}

export default App;
