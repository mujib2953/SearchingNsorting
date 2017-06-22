/*
* @Author: mujibur
* @Date:   2017-06-08 15:48:55
* @Last Modified by:   mujibur
* @Last Modified time: 2017-06-08 16:08:29
*/

'use strict';
function sortByHeapSort() {
	this.addDashed();
	console.log( '--- Heap Sort Started ---' );

	// ---- reseting array
	this.resetArray();
	this.calculateEstimate( true );
	
	heapSort( this.arrayToSort );
	console.log( this.arrayToSort );
	this.calculateEstimate( false );
	console.log( '--- Heap Sort Ended ---' );
	this.addDashed();
}

function heapSort( p_arr ) {

	var nLen = p_arr.length,
		end = nLen - 1;

	heapify( p_arr, nLen );

};

function heapify( p_arr, p_len ) {

	// break the array into root + two sides, to create tree (heap)
	var mid = Math.floor( ( p_len - 2 ) / 2 );

	while( mid >= 0 ) {
		shiftDown( p_arr, mid--, p_len - 1 );
	}
};

function shiftDown( p_arr, p_start, p_end ) {

	var root = p_start,
		child = root*2 + 1,
		toSwap = root;

	while( child <= p_end ) {

		if( p_arr[ toSwap ] < p_arr[ child ] )
			swap( p_arr, toSwap, child );
		
		if( child + 1 <= p_end && p_arr[ toSwap ] < p_arr[ child + 1 ] )
			swap( p_arr, toSwap, child + 1 )
		
		if( toSwap != root ) {
			swap( p_arr, root, toSwap);
			root = toSwap;
		}
		else 
			return; 

		toSwap = root;
		child = root*2 + 1;

	}

};

function swap( p_arr, p_i, p_j ) {
	var temp = p_arr[ p_i ];
	p_arr[ p_i ] = p_arr[ p_j ];
	p_arr[ p_j ] = temp;
};