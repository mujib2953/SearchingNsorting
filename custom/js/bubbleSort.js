/*
* @Author: mujibur
* @Date:   2017-06-07 15:44:52
* @Last Modified by:   mujibur
* @Last Modified time: 2017-06-07 17:36:04
*/

'use strict';
function sortByBubbleSort() {
	this.addDashed();
	console.log( '--- Bubble Sort Started ---' );

	// ---- reseting array
	this.resetArray();
	this.calculateEstimate( true );
	var nLen = this.arrayToSort.length,
		i = nLen - 1,
		j;

	for( ; i >= 0; i-- ) {
		for( j = 1; j < i; j++ ) {

			if( this.arrayToSort[ j - 1 ] > this.arrayToSort[ j ] )
				this.swap( this.arrayToSort, ( j - 1 ), j );

		}
	}
	this.calculateEstimate( false );
	console.log( '--- Bubble Sort Ended ---' );
	this.addDashed();
}