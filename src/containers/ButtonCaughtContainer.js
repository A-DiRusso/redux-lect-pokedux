import { connect } from 'react-redux';
import VisibilityButton from '../components/VisibilityButton';
import { setVisiblityCaught } from '../actions-reducers';

const mapStateToProps = (state) => {
    //return a custom object with props name
    return {
        //react: "redux"
        label: "caught",
    }
}

const mapDispatchToPorps = (dispatch) => {
    // return a custom props object
   return {
       handleClick: () => {
           dispatch(setVisiblityCaught())
       },
   };
}
const makeComponentSmart = connect(mapStateToProps,
                                    mapDispatchToPorps,
                                    );

const ButotnCaught = makeComponentSmart(VisibilityButton);

export default ButotnCaught;