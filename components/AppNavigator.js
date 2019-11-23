import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from '../containers/SignIn';
import CreateUser from '../containers/CreateUser';
import Chat from '../containers/Chat';

const AppNavigator = createStackNavigator({
    SignIn,
    CreateUser,
    Chat
});

export default createAppContainer(AppNavigator);
