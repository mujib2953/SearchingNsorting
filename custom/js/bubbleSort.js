/*
 * @Author: Mujib Ansari 
 * @Date: 2018-05-20 16:47:31 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-05-21 09:05:44
 */

'use strict';

( function() {

	let BubbleSort = function( p_data ) {
		
		addDash();
		logInfoMessage( 'Bubble Sort' );
		calcEstimate( true );

		doBubleSort( p_data, () => {
			calcEstimate( false );
			// addDash();
		} );

		function doBubleSort( p_data, p_callback ) {
			
			let testArr = [ ...p_data ],
				nLen = testArr.length;
			// console.log( testArr );
			for( let i = 0; i < ( nLen - 1 ); i++ ) {

				for( let j = ( i + 1 ) ; j < nLen; j++ ) {
					
					// ---- 
					// console.log( ' i :: ' + i + ' j ::: ' + j );

					if( testArr[ i ] > testArr[ j ] ) {

						let temp = testArr[ i ];

						testArr[ i ] = testArr[ j ];

						testArr[ j ] = temp;

					}

				}

			}
			// console.log( testArr );
			if( p_callback )
				p_callback();
		}

	}

	logInfoMessage( 'BubbleSort.js loaded.' );
	window.BubbleSort = BubbleSort;
}( window ) );