import { connect } from "react-redux";
import { receiveMessages } from '../redux/actions';
import Chat from '../components/Chat';


const mapStateToProps = (state) => ({
    messages: state.messages,
    userInfo: state.user.userInfo
});

const mapDispatchToProps = dispatch => ({
    onReceiveMessages: messages => dispatch(receiveMessages(messages))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
