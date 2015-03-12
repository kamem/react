define(["exports", "dispatcher/AppDispatcher", "GetApi", "constants/Constants"], function (exports, _dispatcherAppDispatcher, _GetApi, _constantsConstants) {
	"use strict";

	var AppDispatcher = _dispatcherAppDispatcher.AppDispatcher;
	var GetApi = _GetApi.GetApi;
	var Constants = _constantsConstants.Constants;
	var PhotoActions = exports.PhotoActions = {
		feach: function feach() {
			AppDispatcher.dispatch({
				actionType: Constants.TODO_FEACH
			});
			GetApi(this._fetchSuccess);
		},
		_fetchSuccess: function _fetchSuccess(result) {
			AppDispatcher.dispatch({
				actionType: Constants.TODO_SUCCESS,
				photos: result
			});
		} };
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
});