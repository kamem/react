define(["exports"], function (exports) {
    "use strict";

    exports.createConstans = createConstans;

    function createConstans(constants) {
        var cons = {};
        constants.forEach(function (i) {
            cons[i] = i;
        });
        return cons;
    }

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});