/*
 * @Author: Mujib Ansari 
 * @Date: 2018-05-21 09:07:18 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-05-21 10:12:35
 */


/* 
	It is like sorting the cards 
	take a first card and
	then second card and place appropraitely with first card
*/

'use strict';
(
	function( window ) {

		var InsertionSort = function( p_data ) {

			addDash();
			logInfoMessage( 'Insertion Sort' );
			calcEstimate( true );

			doInsertionSort( p_data, () => {
				calcEstimate( false );
			} );


			function doInsertionSort( p_data, p_callback ) {

				let testArr = [ ...p_data ],
					nLen = testArr.length;
				// console.log( testArr );
				for( let i = 1; i < nLen; i++ ) {

					let needToCheck = testArr[ i ];

					// console.log( 'eNeedToCheck :: ', needToCheck );

					if( needToCheck < testArr[ i - 1 ] ) {

						let test = i;

						while( test ) {

							if( testArr[ test ] < testArr[ test - 1 ] ) {

								let temp = testArr[ test ];

								testArr[ test ] = testArr[ test - 1 ];
								testArr[ test - 1 ] = temp;

							}

							test--;
						}

					}


				}
				// console.log( testArr );
				if( p_callback )
					p_callback();
			}
		}

		logInfoMessage( 'InsertionSort.js is loaded.' );
		window.InsertionSort = InsertionSort;
	}( window )
);