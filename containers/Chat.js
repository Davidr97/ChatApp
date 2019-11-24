import { connect } from "react-redux";
import { receiveMessages } from '../redux/actions';
import { fetchUsers } from '../redux/actions';
import ChatScreen from '../components/ChatScreen';


const mapStateToProps = (state) => ({
    messages: state.messages,
    users: state.users,
    userInfo: state.user.userInfo
});

const mapDispatchToProps = dispatch => ({
    onReceiveMessages: messages => dispatch(receiveMessages(messages)),
    getUsers: () => dispatch(fetchUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatScreen)
