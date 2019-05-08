import { connect } from 'react-redux';
import VisibilityButton from '../components/VisibilityButton';
import { setVisibilityUncaught } from '../actions-reducers';

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
            dispatch(setVisibilityUncaught())
        },
    };
}

const makeComponentSmart = connect(mapStateToProps,
                                   mapDispatchToProps,
                                   );
const ButtonUncaught = makeComponentSmart(VisibilityButton);

export default ButtonUncaught;