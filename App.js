import IndexScreen from './Screens/IndexScreen.js';
import ShowScreen from './Screens/ShowScreen.js';
import EditScreen from './Screens/EditScreen.js';
import CreateScreen from './Screens/CreateScreen.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
const stack = createStackNavigator();
import {Provider} from './context/BlogContext.js';
const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="index"
            component={IndexScreen}
            options={{
              title: 'Blog'
            }}
          />
          <stack.Screen
            name="show"
            component={ShowScreen}
            options={{title: 'Blog'}}
          />
          <stack.Screen
            name="create"
            component={CreateScreen}
            options={{title: 'Creating Blog'}}
          />
          <stack.Screen
            name="edit"
            component={EditScreen}
            options={{title: 'Editing Blog'}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
