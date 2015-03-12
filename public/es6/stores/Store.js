import EventEmitter from 'EventEmitter';
import {AppDispatcher} from 'dispatcher/AppDispatcher';
import {Constants} from 'constants/Constants';

class Store extends EventEmitter {
  constructor() {
    this.tag = 'tag';
    this.photos = [];
  }
  photo_emit() {
    this.emit(Constants.TODO_FEACH);
  }

  photo_on(collback) {
    this.on(Constants.TODO_FEACH, collback);
  }

  updateItems(photos) {
    this.photos = photos;
  }
  _getState() {
    return {
      tag: this.tag,
      photos: this.photos
    }
  }
}
export var PhotoStore = new Store();

AppDispatcher.register((action) => {
  if (action.actionType === Constants.TODO_FEACH) {
    PhotoStore.photo_emit();
  } else if (action.actionType === Constants.TODO_SUCCESS) {
    PhotoStore.updateItems(action.photos);
    PhotoStore.photo_emit();
  }
});