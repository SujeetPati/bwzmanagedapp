/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comshell/pocapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
