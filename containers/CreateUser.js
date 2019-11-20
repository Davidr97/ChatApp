import { connect } from "react-redux";
import { createUser } from '../redux/actions';
import CreateUserScreen from '../components/CreateUserScreen';

const mapStateToProps = state => ({
    registrationErrorMessage : state.user.registrationErrorMessage,
    registrationPassed : state.user.registrationPassed
});

const mapDispatchToProps = dispatch => ({
    createUser: (email, password, displayName, photoURL) => dispatch(createUser(email, password, displayName, photoURL))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUserScreen)
