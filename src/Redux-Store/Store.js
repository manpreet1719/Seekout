import {configureStore} from '@reduxjs/toolkit';
import TeamSlice from './TeamSlice';

const store = configureStore({
    reducer : {
        teamlist : TeamSlice
    }

});

export default store;