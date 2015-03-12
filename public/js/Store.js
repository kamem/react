define(["exports", "EventEmitter", "dispatcher/AppDispatcher"], function (exports, _EventEmitter2, _dispatcherAppDispatcher) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var EventEmitter = _interopRequire(_EventEmitter2);

  var AppDispatcher = _dispatcherAppDispatcher.AppDispatcher;

  var Store = (function (_EventEmitter) {
    function Store() {
      _classCallCheck(this, Store);

      this.tag = "tag";
      this.photos = [];
    }

    _inherits(Store, _EventEmitter);

    _createClass(Store, {
      photo_emit: {
        value: function photo_emit() {
          this.emit("feach");
        }
      },
      photo_on: {
        value: function photo_on(collback) {
          this.on("feach", collback);
        }
      },
      updateItems: {
        value: function updateItems(photos) {
          this.photos = photos;
        }
      },
      _getState: {
        value: function _getState() {
          return {
            tag: this.tag,
            photos: this.photos
          };
        }
      }
    });

    return Store;
  })(EventEmitter);

  var PhotoStore = exports.PhotoStore = new Store();

  AppDispatcher.register(function (action) {
    if (action.actionType === "feach") {
      PhotoStore.photo_emit();
    } else if (action.actionType === "success") {
      PhotoStore.updateItems(action.photos);
      PhotoStore.photo_emit();
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});