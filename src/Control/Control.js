/**
 * XVM: Xeovisor Minimo
 * ----------------------------------------------
 * Copyright (c) 2012, Xunta de Galicia. All rights reserved.
 * Code licensed under the BSD License:
 *   LICENSE.txt file available at the root application directory
 *
 * @author Instituto Estudos do Territorio, IET
 */

/**
 * @requires Utils.js
 */

XVM.Control = XVM.Class.extend({

	OLMap : null,

	options : {},

	controlPath : null,

	OLControl : null,
	
	addToPanel : false,

	createControl : function() {
		throw 'XVM.Control.createControl dummy implementation';
	},

	initialize : function(params, controlPath) {
		this.options = params;
		this.controlPath = controlPath;
		this.createControl();
	},

	setOLMap : function(map) {
		this.OLMap = map;
		this.addControl();
	},
	
	beforeAddingControl : function() {
	},
	
	afterAddingControl : function() {
	},

	addControl : function() {
		this.beforeAddingControl();
		if (this.addToPanel) {
			this.OLMap.panel.addControls([this.OLControl]);
		} else {
			this.OLMap.addControl(this.OLControl);
		}
		this.afterAddingControl();
	}
});
