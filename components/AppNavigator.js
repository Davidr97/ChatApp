import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { colors } from '../styles/colors';
import SignIn from '../containers/SignIn';
import CreateUser from '../containers/CreateUser';
import Chat from '../containers/Chat';

const AppNavigator = createStackNavigator({
    SignIn : {
        screen: SignIn,
        navigationOptions: () => ({headerTitle: 'Sign In'})
    },
    CreateUser : {
        screen: CreateUser,
        navigationOptions: () => ({headerTitle: 'Sign up'})
    },
    Chat : {
        screen: Chat,
        navigationOptions: () => ({headerTitle: 'Chat'})
    }
},{
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.green,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
        }
    }
});

export default createAppContainer(AppNavigator);
