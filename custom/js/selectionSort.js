/*
 * @Author: Mujib Ansari 
 * @Date: 2018-05-20 20:40:42 
 * @Last Modified by:   Mujib Ansari 
 * @Last Modified time: 2018-05-20 20:40:42 
 */

'use strict';

(
	function() {

		let SelectionSort = function( p_data ) {

			addDash();
			logInfoMessage( 'Selection Sort' );
			calcEstimate( true );

			doSelectionSort( p_data, () => {
				calcEstimate( false );
			} );

			function doSelectionSort( p_data, p_fcallback ) {

				let testArr = [ ...p_data ],
					nLen = testArr.length;
				// console.log( testArr );
				for( let i  = 0; i < nLen; i++ ) {

					let nMinPos = i;
					
					for( let j = ( i + 1 ); j < nLen; j++ ) {

						if( testArr[ j ] < testArr[ nMinPos ] )
							nMinPos = j;

					}

					let temp = testArr[ i ];

					testArr[ i ] = testArr[ nMinPos ];
					testArr[ nMinPos ] = temp;


				}
				// console.log( testArr );
				if( p_fcallback )
					p_fcallback();
			}

		};

		window.SelectionSort = SelectionSort;
	}()
);