import React from 'react';
import { Provider } from 'react-redux';

import { Player } from './pages/player'
import { GlobalStyles } from './ui/globalstyles';

import configureStore from './store';

const store = configureStore();

const App = () => (
 
  <Provider store={store} >
    <GlobalStyles/>
    <Player />
  </Provider>
 
)

export default App;
