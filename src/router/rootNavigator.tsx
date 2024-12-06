import {Colors} from '../theme';
import {TAB} from '../utils/routes';
import TabNavigator from './tabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
