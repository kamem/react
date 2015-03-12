import React from 'react';
import event from 'EventEmitter';
import {PhotoActions} from 'Actions';
import {PhotoStore} from 'Store';

var Photos = React.createClass({
	getInitialState() {
		return PhotoStore._getState();
	},
	componentDidMount() {
 		PhotoStore.photo_on(this._changeState);
		PhotoActions.feach();
	},


	onClick() {
		console.log(this.state.tag);
	},
	_changeState() {
		this.setState(PhotoStore._getState());
	},


	render() {
		var photos = this.state.photos.map((photo) => {
			return <Photo id={photo.id} name={photo.name} key={photo.id}/>
		});
		return (
			<div>
				<ul>
					<Tag name={this.state.tag} onClick={this.onClick} />
				</ul>
				<p>ユーザー一覧</p>
				{photos}
			</div>
		);
	}
});

var Photo = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		id:   React.PropTypes.number.isRequired
	},
	render() {
		return (
			<div>{this.props.id}:{this.props.name}</div>
		);
	}
});

var Tag = React.createClass({
	render() {
		return(
			<li onClick={this.props.onClick}>{this.props.name}</li>
		)
	}
})

var app = document.getElementById("app");
React.render(
	<Photos />,
	app
);


