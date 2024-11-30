import {configureStore} from "@reduxjs/toolkit"
import groupReducer from './Slices/groupSlicer.js'
import teamsReucer from './Slices/teamSlicer.js'
export default configureStore({
    reducer:{
        groups:groupReducer,
        teams:teamsReucer
    }
})
