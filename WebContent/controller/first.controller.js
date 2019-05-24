sap.ui.define([
    "sap/ui/core/mvc/Controller"

], function (Controller) {
    "use strict";
    return Controller.extend( "test.controller.first", {
        onInit: function() {
            console.log( "First controller onInit" );
        }

    } );
} );
