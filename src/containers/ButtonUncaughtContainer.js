import { connect } from 'react-redux';
import VisibilityButton from '../components/VisibilityButton';
import { setVisiblityUncaught } from '../actions-reducers';

const mapStateToProps = (state) => {
    // return a custom props object with props as key
    return {
        //react: 'redux',
        label: "uncaught",
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(setVisiblityUncaught())
        },
    };
}

const makeComponentSmart = connect(mapStateToProps,
                                   mapDispatchToProps,
                                   );
const ButtonUncaught = makeComponentSmart(VisibilityButton);

export default ButtonUncaught;