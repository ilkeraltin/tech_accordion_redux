import { combineReducers } from 'redux';
import LibrarReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibrarReducer,
  selectedLibraryId: SelectionReducer
});
