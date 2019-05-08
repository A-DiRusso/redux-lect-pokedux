import { connect } from 'react-redux';
import VisibilityButton from '../components/VisibilityButton';
import { setVisiblityAll, } from '../actions-reducers';


const mapStateToProps = (state) => {
    //return a custom props object 
    // make the key the name of hte prop that your component is expecting
    return {
        label:"all",
    }
}

//translate from redux-dispatch to react-props
const mapDispatchToProps = (dispatch) => {
    // return a custom props object 
    // behind the scenes, redux is doing the 
    //same as 'setState' ir react
    return {
        handleClick: () => {
            dispatch(setVisiblityAll())
        },
    };
}

// connect gives us a function taht knows how to 
//translate for a dumb component 
//always use in this order
const makeComponentSmart = connect(mapStateToProps,
                                   mapDispatchToProps,
                                   );
//now you make the component smart
const ButtonAll = makeComponentSmart(VisibilityButton);

export default ButtonAll;