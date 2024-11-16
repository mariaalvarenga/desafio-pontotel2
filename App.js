// App.js (Atualizado com navegação para a tela de detalhes)
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import LaunchListScreen from './src/screens/LaunchListScreen';
import LaunchDetailScreen from './src/screens/LaunchDetailScreen';
import launchesReducer, { fetchLaunches } from './src/redux/launchesSlice';

const store = configureStore({
  reducer: {
    launches: launchesReducer,
  },
});

const Stack = createStackNavigator();

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LaunchList">
          <Stack.Screen name="LaunchList" component={LaunchListScreen} />
          <Stack.Screen name="LaunchDetail" component={LaunchDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
