define(["exports"], function (exports) {
    "use strict";

    require.config({
        paths: {
            react: "components/react/react",
            superagent: "components/superagent/superagent",
            flux: "components/flux/dist/Flux",
            EventEmitter: "components/eventEmitter/EventEmitter" },
        shim: {
            react: {
                exports: "react" },
            superagent: {
                exports: "superagent" },
            flux: {
                exports: "flux" },
            EventEmitter: {
                exports: "EventEmitter" }
        }
    });
    require(["app"]);
});
/// <reference path="typings/tsd.d.ts" />