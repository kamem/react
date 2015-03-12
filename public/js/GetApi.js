define(["exports", "superagent"], function (exports, _superagent) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var Request = _interopRequire(_superagent);

    var GetApi = exports.GetApi = function GetApi(collback) {
        var API_URI = "https://api.flickr.com/services/rest/";
        var API_KEY = "982ed6872b004b1e646a71f4f5a9970f";
        var USER_ID = "37978321@N03";
        Request.get(getApiURL(API_URI, {
            method: ["photos", "search"],
            api_key: API_KEY,
            user_id: USER_ID
        }), function (res) {
            collback(res.body.photos.photo);
        });
    };

    var getApiURL = function getApiURL(url, search) {
        var urlAry = [];
        for (var apiName in search) {
            if (apiName === "method") {
                if (search[apiName]) urlAry.push(apiName + "=flickr." + search[apiName][0] + "." + search[apiName][1]);
            } else {
                if (search[apiName]) urlAry.push(apiName + "=" + search[apiName]);
            }
        }

        return url + "?" + urlAry.join("&") + "&format=json&nojsoncallback=1";
    };
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});