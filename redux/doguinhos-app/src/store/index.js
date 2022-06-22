import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-dev-tools-extension';
import thunk from 'redux-thunk';
import { FAILED_REQUEST, GET_IMAGE, REQUEST_IMAGE} from '../actions';

const InitialState = {
  imagePath: '',
  isFetching: false,
  error: '',
};

const dogReducer = (state = InitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_IMAGE: ''
      return { ...state, imagePath: payload, isFetching: false };
    case REQUEST_IMAGE: ''
      return { ...state, isFetching: true };
    case FAILED_REQUEST: ''
      return { ...state, error: payload, isFetching: false };
    default:
      return state;
  }
};

const store = createStore(dogReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
