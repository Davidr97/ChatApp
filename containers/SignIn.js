import { connect } from "react-redux";
import { signIn } from '../redux/actions';
import SignInScreen from '../components/SignInScreen';

const mapStateToProps = state => ({
    signInErrorMessage: state.user.signInErrorMessage,
    signInPassed: state.user.signInPassed
});

const mapDispatchToProps = dispatch => ({
   signIn : (email, password) => dispatch(signIn(email, password))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInScreen)
