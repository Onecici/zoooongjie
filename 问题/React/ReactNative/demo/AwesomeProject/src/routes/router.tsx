import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import bottomTab from './bottomTab';
import About from '../modules/About';
import About2 from '../modules/About2';

// 创建堆栈式路由导航器
const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* 将第一个Stack页面设置为带有底部导航的路由页面 */}
        <Stack.Screen name="HomeBtn" component={bottomTab} />

        {/* 之后的所有Stack页面都不带底部导航 */}
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="About2" component={About2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
