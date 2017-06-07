/*
* @Author: mujibur
* @Date:   2017-06-07 15:45:02
* @Last Modified by:   mujibur
* @Last Modified time: 2017-06-07 17:07:01
*/

'use strict';
( function() {
	var ogArray = [90,52,-44,-44,61,36,75,-50,-24,78,78,38,78,15,6,-15,-6,54,68,-26,-30,-12,-49,-44,-13,93,29,-14,98,75,-17,80,19,-11,93,6,56,-32,-48,7,-15,47,-24,98,32,71,63,-43,30,93,14,12,-46,63,47,79,60,74,-47,27,26,-42,70,-27,-7,16,-15,82,2,-15,15,68,-7,-32,-39,-35,-37,7,23,-28,59,7,61,3,17,41,-17,79,95,75,82,40,-40,-3,17,49,-13,46,80];
	var oScope = {
		arrayToSort: [90,52,-44,-44,61,36,75,-50,-24,78,78,38,78,15,6,-15,-6,54,68,-26,-30,-12,-49,-44,-13,93,29,-14,98,75,-17,80,19,-11,93,6,56,-32,-48,7,-15,47,-24,98,32,71,63,-43,30,93,14,12,-46,63,47,79,60,74,-47,27,26,-42,70,-27,-7,16,-15,82,2,-15,15,68,-7,-32,-39,-35,-37,7,23,-28,59,7,61,3,17,41,-17,79,95,75,82,40,-40,-3,17,49,-13,46,80]
	};
	$( document ).ready( function() {
		addEvents.call( oScope );

		window.oScope = oScope;
	});

	function addEvents() {

		$( '#bubbleBtn' ).off( 'click' ).on( 'click', sortByBubbleSort.bind( oScope ) );
		$( '#selectionBtn' ).off( 'click' ).on( 'click', sortBySelectionSort.bind( oScope ) );
		$( '#selectionBtn' ).off( 'click' ).on( 'click', sortByInsertionSort.bind( oScope ) );

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
