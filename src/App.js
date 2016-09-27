import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
      <Header headerText='Tech Stach' />
      <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
