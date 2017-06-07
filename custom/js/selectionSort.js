/*
* @Author: mujibur
* @Date:   2017-06-07 16:59:16
* @Last Modified by:   mujibur
* @Last Modified time: 2017-06-07 17:37:16
*/

'use strict';
function sortBySelectionSort() {
	this.addDashed();
	console.log( '--- Selection Sort Started ---' );

	// ---- reseting array
	this.resetArray();
	this.calculateEstimate( true );
	
	var minInx,
		nLen = this.arrayToSort.length,
		i = 0,
		j;

	for( ; i < nLen; i++ ) {
		minInx = i;

		for( j = ( i + 1 ); j < nLen; j++ ) {

			if( this.arrayToSort[ j ] < this.arrayToSort[ minInx ] )
				minInx = j

		}
		this.swap( this.arrayToSort, i, minInx )
	}


	this.calculateEstimate( false );
	console.log( '--- Selection Sort Ended ---' );
	this.addDashed();
}