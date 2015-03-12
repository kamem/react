define(["exports", "react", "EventEmitter", "actions/Actions", "stores/Store"], function (exports, _react, _EventEmitter, _actionsActions, _storesStore) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var React = _interopRequire(_react);

	var event = _interopRequire(_EventEmitter);

	var PhotoActions = _actionsActions.PhotoActions;
	var PhotoStore = _storesStore.PhotoStore;

	var Photos = React.createClass({
		displayName: "Photos",

		getInitialState: function getInitialState() {
			return PhotoStore._getState();
		},
		componentDidMount: function componentDidMount() {
			PhotoStore.photo_on(this._changeState);
			PhotoActions.feach();
		},

		onClick: function onClick() {
			console.log(this.state.tag);
		},
		_changeState: function _changeState() {
			this.setState(PhotoStore._getState());
		},

		render: function render() {
			var photos = this.state.photos.map(function (photo) {
				return React.createElement(Photo, { id: photo.id, name: photo.name, key: photo.id });
			});
			return React.createElement(
				"div",
				null,
				React.createElement(
					"ul",
					null,
					React.createElement(Tag, { name: this.state.tag, onClick: this.onClick })
				),
				React.createElement(
					"p",
					null,
					"ユーザー一覧"
				),
				photos
			);
		}
	});

	var Photo = React.createClass({
		displayName: "Photo",

		propTypes: {
			name: React.PropTypes.string.isRequired,
			id: React.PropTypes.number.isRequired
		},
		render: function render() {
			return React.createElement(
				"div",
				null,
				this.props.id,
				":",
				this.props.name
			);
		}
	});

	var Tag = React.createClass({
		displayName: "Tag",

		render: function render() {
			return React.createElement(
				"li",
				{ onClick: this.props.onClick },
				this.props.name
			);
		}
	});

	var app = document.getElementById("app");
	React.render(React.createElement(Photos, null), app);
});