/*
* @Author: mujibur
* @Date:   2017-06-07 17:07:27
* @Last Modified by:   mujibur
* @Last Modified time: 2017-06-07 17:36:18
*/

'use strict';
function sortByInsertionSort(argument) {
	this.addDashed();
	console.log( '--- Insertion Sort Started ---' );

	// ---- reseting array
	this.resetArray();
	this.calculateEstimate( true );
	


	this.calculateEstimate( false );
	console.log( '--- Insertion Sort Ended ---' );
	this.addDashed();
};