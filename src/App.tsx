import React from 'react';
import { Provider } from 'react-redux';

import { Main } from './pages/main'
import { GlobalStyles } from './ui/globalstyles';

import configureStore from './store';

const store = configureStore();

const App = () => (
 
  <Provider store={store} >
    <GlobalStyles/>
    <Main />
  </Provider>
 
)

export default App;
