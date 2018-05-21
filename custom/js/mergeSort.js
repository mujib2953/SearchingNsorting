/*
 * @Author: Mujib Ansari 
 * @Date: 2018-05-21 10:15:17 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-05-21 10:18:30
 */


'use strict';

(
	function( window ) {

		var MergeSort = function( p_data ) {

			addDash();
			logInfoMessage( 'Merge Sort' );
			calcEstimate( true );

			doMergeSort( p_data, () => {
				calcEstimate( false );
			} );

			function doMergeSort( p_data, p_callback ) {

				let testArr = [ ...p_data ];

				if( p_callback )
					p_callback();

			};

		};

		logInfoMessage( 'MergeSort.js loaded.' );
		window.MergeSort = MergeSort;

	}( window )
);