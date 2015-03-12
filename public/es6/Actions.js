import {AppDispatcher} from 'dispatcher/AppDispatcher';
import {GetApi} from 'GetApi';
export var PhotoActions = {
  feach() {
	  AppDispatcher.dispatch({
	    actionType: 'feach'
	  });
    GetApi(this._fetchSuccess);
  },
	_fetchSuccess(result) {
		AppDispatcher.dispatch({
			actionType: 'success',
			photos: result
		});
	},
}