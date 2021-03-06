import 'react-native-gesture-handler';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { colors } from './src/theme';

import HomeScreen from './src/screens/Home/HomeScreen';
import HowTo from './src/screens/Intro/HowTo';
import AskForLocation from './src/screens/Intro/AskForLocation';
import DataPrivacy from './src/screens/Intro/DataPrivacy';

import ChatBot from './src/screens/ChatBot/ChatBot';
import Result from './src/screens/ChatBot/Result';
import DummyBotFormScreens from './src/screens/DummyBotForm';

const Stack = createStackNavigator();

const NoHeader = {
  header: () => <View />,
};

const ScreenWithBackButtonOptions = {
  title: '',
  headerLeft: () => <BackButton />,
};

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={{ paddingHorizontal: 10 }}>
      <Feather name="arrow-left" size={34} color={colors.blue400} />
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="ChatBot"
          component={FirstQuestion}
          options={NoHeader}
        /> */}
        <Stack.Screen name="HowTo" component={HowTo} options={NoHeader} />
        <Stack.Screen
          name="DataPrivacy"
          component={DataPrivacy}
          options={NoHeader}
        />
        <Stack.Screen
          name="AskForLocation"
          component={AskForLocation}
          options={NoHeader}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={NoHeader} />
        <Stack.Screen name="ChatBot" component={ChatBot} options={NoHeader} />
        <Stack.Screen name="Result" component={Result} options={NoHeader} />

        {/* {DummyBotFormScreens.map((screen) => (
          <Stack.Screen
            name={screen.routeName}
            component={screen.routeComponent}
            options={NoHeader}
          />
        ))} */}
        {/* <Stack.Screen name="FinishScreen" component={FourthQuestion} options={NoHeader} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
