import { combineReducers } from 'redux';
import { reducer as toastrReducer} from 'react-redux-toastr';
import emailReducer from "./Email/emailReducer";
import loginReducer from "./Admin/loginReducer";
import blogReducer from "./Blogs/blogReducer";

/*every reducer is brought in to here */
const rootReducer = combineReducers({
    toastr: toastrReducer,
    emailReducer,
    loginReducer,
    blogReducer,

});

export default rootReducer; 