import {AppDispatcher} from 'dispatcher/AppDispatcher';
import {GetApi} from 'GetApi';
import {Constants} from 'constants/Constants';

export var PhotoActions = {
  feach() {
	  AppDispatcher.dispatch({
	    actionType: Constants.TODO_FEACH
	  });
    GetApi(this._fetchSuccess);
  },
	_fetchSuccess(result) {
		AppDispatcher.dispatch({
			actionType: Constants.TODO_SUCCESS,
			photos: result
		});
	},
}