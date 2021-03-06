import { connect } from "react-redux";
import { signIn } from '../redux/actions';
import { onTextChanged } from '../redux/actions';
import { clearLoginFields } from '../redux/actions';
import { resetLoginFlag } from '../redux/actions';
import SignInScreen from '../components/SignInScreen';

const mapStateToProps = state => ({
    signInErrorMessage: state.user.signInErrorMessage,
    signInPassed: state.user.signInPassed,
    loginFields: state.loginFields
});

const mapDispatchToProps = dispatch => ({
    signIn : (email, password) => dispatch(signIn(email, password)),
    onTextChanged: (name, text) => dispatch(onTextChanged({name: 'login'+name, text})),
    clearLoginFields: () => dispatch(clearLoginFields()),
    resetLoginFlag: () => dispatch(resetLoginFlag())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInScreen);


