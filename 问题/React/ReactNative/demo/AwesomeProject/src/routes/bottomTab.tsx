import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../modules/Home';
import Test from '../modules/Test';

// 创建底部导航按钮页面
const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Test" component={Test} />
    </Tab.Navigator>
  );
};
