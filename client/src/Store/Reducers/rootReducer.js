import { combineReducers } from 'redux';
import { reducer as toastrReducer} from 'react-redux-toastr';
import emailReducer from "./Email/emailReducer";


/*every reducer is brought in to here */
const rootReducer = combineReducers({
    toastr: toastrReducer,
    emailReducer,

});

export default rootReducer; 