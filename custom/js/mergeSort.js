/*
* @Author: mujibur
* @Date:   2017-06-08 15:07:05
* @Last Modified by:   mujibur
* @Last Modified time: 2017-06-08 15:18:42
*/

'use strict';
function sortByMergeSort() {
	this.addDashed();
	console.log( '--- Merge Sort Started ---' );

	// ---- reseting array
	this.resetArray();
	this.calculateEstimate( true );
	
	this.arrayToSort = mergeSort( this.arrayToSort );
	console.log( this.arrayToSort );
	this.calculateEstimate( false );
	console.log( '--- Merge Sort Ended ---' );
	this.addDashed();
}

function mergeSort( p_arr ) {
	var nLen = p_arr.length;

	if( nLen < 2 )
		return p_arr;
	else {

		var mid = Math.floor( nLen/2 ),
			left = p_arr.slice( 0, mid ),
			right = p_arr.slice( mid );

		//send left and right to the mergeSort to broke it down into pieces
		//then merge those
		return merge(mergeSort(left),mergeSort(right));
	}
};

function merge( p_left, p_right ) {

	var result = [],
		l_len = p_left.length,
		r_len = p_right.length,
		l = 0,
		r = 0;

	while( l < l_len && r < r_len ) {

		if( p_left[ l ] < p_right[ r ] )
			result.push( p_left[ l++ ] );
		else
			result.push( p_right[ r++ ] );

	}


	//remaining part needs to be addred to the result
	return result.concat( p_left.slice( l ) ).concat( p_right.slice( r ) );
};