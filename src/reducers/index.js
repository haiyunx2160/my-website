import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase:firebaseReducer
});
