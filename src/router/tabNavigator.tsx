import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Games from '../screens/games';
import {DOWNLOADS, FASTLAUGHTS, GAMES, HOME, NEWHOT} from '../utils/routes';
import FastLaughts from '../screens/fastlaughts';
import NewHot from '../screens/newhot';
import Dowloads from '../screens/dowloads';
import {Colors} from '../theme';
import {Image, Pressable, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerLeft: () => (
          <Image
            source={require('../assets/icons/netflix.png')}
            style={{width: 40, height: 36, resizeMode: 'center'}}
          />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
            <Pressable style={{paddingHorizontal: 5}}>
              <Ionicons name="search-outline" size={25} color={Colors.WHITE} />
            </Pressable>
            <Pressable style={{paddingHorizontal: 5}}>
              <Ionicons
                name="person-circle-outline"
                size={25}
                color={Colors.WHITE}
              />
            </Pressable>
          </View>
        ),
        headerTintColor: Colors.WHITE,
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
        tabBarStyle: {
          backgroundColor: Colors.BLACK,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === HOME) {
            iconName = 'home-outline';
          } else if (route.name === GAMES) {
            iconName = 'game-controller-outline';
          } else if (route.name === NEWHOT) {
            iconName = 'play-circle-outline';
          } else if (route.name === FASTLAUGHTS) {
            iconName = 'happy-outline';
          } else if (route.name === DOWNLOADS) {
            iconName = 'download-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.GRAY,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={GAMES} component={Games} />
      <Tab.Screen name={NEWHOT} component={NewHot} />
      <Tab.Screen name={FASTLAUGHTS} component={FastLaughts} />
      <Tab.Screen name={DOWNLOADS} component={Dowloads} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
