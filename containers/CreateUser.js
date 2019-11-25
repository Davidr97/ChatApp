import { connect } from "react-redux";
import {clearLoginFields, createUser} from '../redux/actions';
import { onTextChanged } from '../redux/actions';
import { clearRegistrationFields } from '../redux/actions';
import { resetRegistrationFlag } from '../redux/actions';
import CreateUserScreen from '../components/CreateUserScreen';

const mapStateToProps = state => ({
    registrationErrorMessage : state.user.registrationErrorMessage,
    registrationPassed : state.user.registrationPassed,
    registerFields : state.registerFields
});

const mapDispatchToProps = dispatch => ({
    createUser: (email, password, displayName, photoURL) => dispatch(createUser(email, password, displayName, photoURL)),
    onTextChanged: (name, text) => dispatch(onTextChanged({name: 'register'+name, text})),
    clearFields: () => dispatch(clearRegistrationFields()),
    clearLoginFields: () => dispatch(clearLoginFields()),
    resetRegistrationFlag: () => dispatch(resetRegistrationFlag())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUserScreen)
