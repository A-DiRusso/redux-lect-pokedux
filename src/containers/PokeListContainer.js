//a smart container has 3 jobs
//1. grab stuff from redux
//2. grab a dumb component
//3. smash them together

import { connect } from 'react-redux';
import PokeList from '../components/PokeList';
import { catchCard } from '../actions-reducers';

// We have 2 jobs

// 1. Tell it how to map redux state to react props

// translating from redux state to react props
const mapStateToProps = (state) => {
    //return our very own custom props Object
    return {
        // React goes on the left
        // Redux goes on the right
        // React: Redux
        cards: state.cards,
        visibilityFilter: state.visibilityFilter,
    }
};
//2. Tell it how to map dispatch to react props
// translate from redux dispatch to react props
const mapDispatchToProps = (dispatch) => {
    // return our own custom props object
    return {
        // This Anonymous function 
        // is doing the same 
        //as setState() in react
        handleClick: (id) => {
            dispatch(catchCard(id));
        }
    };
}


// connect gives us a function that knows how to
// translate for a dumb component
const makeComponentSmart = connect(
    mapStateToProps, 
    mapDispatchToProps,
);
const SmartPokeList = makeComponentSmart(PokeList);

export default SmartPokeList;