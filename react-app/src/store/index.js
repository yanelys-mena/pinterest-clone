import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import pinsReducer from './pins';
import boardsReducer from './boards';
// import pin_board_reducer from './pin_board'
import profile_user_reducer from './profile_user';
import profile_board_reducer from './profile_boards';

const rootReducer = combineReducers({
  session,
  pins: pinsReducer,
  boards: boardsReducer,
  // pinBoard: pin_board_reducer,
  profile: profile_user_reducer,
  profileBoards: profile_board_reducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
