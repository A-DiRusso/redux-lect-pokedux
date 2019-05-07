//a smart container has 3 jobs
//1. grab stuff from redux
//2. grab a dumb component
//3. smash them together

import { connect } from 'react-redux';
import PokeList from '../components/PokeList';

// We have 2 jobs
// 1. Tell it how to map redux state to react props
//2. Tell it how to map dispatch to react props


// translating from redux state to react props
const mapStateToProps = (state) => {
    //return our very own custom props Object
    return {
        // React goes on the left
        // Redux goes on the right
        // React: Redux
        cards: state.cards,
    }
};

// connect gives us a function that knows how to
// translate for a dumb component
const makeComponentSmart = connect(mapStateToProps);
const SmartPokeList = makeComponentSmart(PokeList);

export default SmartPokeList;