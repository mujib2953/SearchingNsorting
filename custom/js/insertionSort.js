/*
* @Author: mujibur
* @Date:   2017-06-07 17:07:27
* @Last Modified by:   mujibur
* @Last Modified time: 2017-06-08 09:50:05
*/

'use strict';
function sortByInsertionSort(argument) {
	this.addDashed();
	console.log( '--- Insertion Sort Started ---' );

	// ---- reseting array
	this.resetArray();
	this.calculateEstimate( true );
	
	var i = 0,
		nLen = this.arrayToSort.length,
		newArr = [];

	for( ; i < nLen; i++ ) {

		newArr = stubInsertion( newArr, this.arrayToSort[ i ] );

	}
	this.calculateEstimate( false );
	console.log( '--- Insertion Sort Ended ---' );
	this.addDashed();
};

function stubInsertion( p_arr, p_ToAdd ) {

	var i = 1,
		nLen = p_arr.length,
		el,
		j;

	for( ; i < nLen; i++ ) {

		el = p_arr[ i ];
		j = i;

		while( j > 0 && p_arr[ j - 1 ] > p_ToAdd ) {
			p_arr[ j ] = p_arr[ j - 1 ];
			j--;
		}

		p_arr[ j ] = el;
	}

	return p_arr;
};