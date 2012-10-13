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
 * Necessary to test controls
 */

XVM.Control.FakeMousePosition = XVM.Control.extend({
	
	initialize : function(params) {
		console.log('FakeMousePosition on Fire');
		console.log(params);
	}
	
})
