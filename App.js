import React from 'react';
import MianStack from './src/navigation/MianStack';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <MianStack />
      </PersistGate>
    </Provider>
  );
};
export default App;
