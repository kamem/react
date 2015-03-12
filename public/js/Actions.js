define(["exports", "dispatcher/AppDispatcher", "GetApi"], function (exports, _dispatcherAppDispatcher, _GetApi) {
	"use strict";

	var AppDispatcher = _dispatcherAppDispatcher.AppDispatcher;
	var GetApi = _GetApi.GetApi;
	var PhotoActions = exports.PhotoActions = {
		feach: function feach() {
			AppDispatcher.dispatch({
				actionType: "feach"
			});
			GetApi(this._fetchSuccess);
		},
		_fetchSuccess: function _fetchSuccess(result) {
			AppDispatcher.dispatch({
				actionType: "success",
				photos: result
			});
		} };
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
});