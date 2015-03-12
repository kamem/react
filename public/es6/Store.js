import EventEmitter from 'EventEmitter';
import {AppDispatcher} from 'dispatcher/AppDispatcher';

class Store extends EventEmitter {
  constructor() {
    this.tag = 'tag';
    this.photos = [];
  }
  photo_emit() {
    this.emit('feach');
  }

  photo_on(collback) {
    this.on("feach", collback);
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
  if (action.actionType === 'feach') {
    PhotoStore.photo_emit();
  } else if (action.actionType === 'success') {
    PhotoStore.updateItems(action.photos);
    PhotoStore.photo_emit();
  }
});