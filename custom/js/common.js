/*
* @Author: mujibur
* @Date:   2017-06-07 15:45:02
* @Last Modified by:   Mujib Ansari
* @Last Modified time: 2017-08-24 13:32:01
*/

'use strict';
( function() {
	var ogArray = []
	var oScope = {
		arrayElmCount: 100,
		arrayToSort: []
	};
	$( document ).ready( function() {

		generate10kValues.call( oScope );
		addEvents.call( oScope );

		window.oScope = oScope;
	});

	function generate10kValues() {
		var nLen = this.arrayElmCount;

		for( var i = 0; i < nLen; i++ ) {
			var rand = getRandomInt( -999999, 999999 );
			ogArray.push( rand );
		}
		this.arrayToSort = ogArray;
	};
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	function addEvents() {

		$( '#bubbleBtn' ).off( 'click' ).on( 'click', sortByBubbleSort.bind( oScope ) );
		$( '#selectionBtn' ).off( 'click' ).on( 'click', sortBySelectionSort.bind( oScope ) );
		// $( '#InsertionBtn' ).off( 'click' ).on( 'click', sortByInsertionSort.bind( oScope ) );
		$( '#MergeBtn' ).off( 'click' ).on( 'click', sortByMergeSort.bind( oScope ) );
		$( '#HeapBtn' ).off( 'click' ).on( 'click', sortByHeapSort.bind( oScope ) );

	};
	oScope.addDashed = function() {
		console.log( '==================================' );
	};
	oScope.resetArray = function() {
		oScope.arrayToSort = ogArray;
	};
	oScope.swap = function( p_arr, a, b ) {

		var temp = p_arr[ a ];

		p_arr[ a ] = p_arr[ b ];
		p_arr[ b ] = temp;
	};
	oScope.calculateEstimate = function( p_bool ) {

		if( p_bool )
			oScope.startTimeStamp = Date.now();
		else {

			oScope.endTimeStamp = Date.now();

			var difference = oScope.endTimeStamp - oScope.startTimeStamp;
			console.log( 'The calculation took ' + difference + ' seconds.');
		}

	};

}() );
