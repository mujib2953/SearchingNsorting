/*
 * @Author: Mujib Ansari 
 * @Date: 2018-05-20 20:40:05 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-05-20 21:08:42
 */


'use strict';

( function( window ) {

	let mScope = {
		maxValue: 10000,
		oRange: {
			nMin: -99999,
			nMax: 99999
		},

		// maxValue: 10000,
		// oRange: {
		// 	nMin: -99999,
		// 	nMax: 99999
		// },

		ogArray: [],
		testArray: []
	};
	
	$( document ).ready( function() {
		console.log( mScope );
		generate10kValues.call( mScope );
		

		addEvents.call( mScope );
		window.mScope = mScope;
	} );

	function generate10kValues() {
		
		const { nMin, nMax } = this.oRange;
		
		for( let i = 0; i < this.maxValue; i++ ) {
		
			let nRandom = getRandomValue.call( this, nMin, nMax );
			this.ogArray.push( nRandom );

		}

		this.testArray = [ ...this.ogArray ];
	}

	function getRandomValue( p_min, p_max ) {
		p_min = Math.ceil( p_min );
		p_max = Math.floor( p_max );
		return Math.floor( Math.random() * ( p_max - p_min ) ) + p_min;
	}

	function addEvents() {
		
		let oScope = this;

		$( '.btn' ).off( 'click' ).on( 'click', ( e ) => {

			if( $( e.target ).hasClass( 'disabled' ) === false ) {
				let pageName = $( e.target ).attr( 'pageName' )
				
				try {
					if( pageName )
						eval( pageName + '( mScope.testArray )' )
				} catch( e ) {
					console.error( e );
				}
			}
			
			
		} );
	}

	function moveToPage( p_pageName ) {
		
		const { protocol, host, pathname } = window.location;

		let goToUrl = protocol + '//' + host + pathname + 'custom/html/' + p_pageName + '.html';

		window.location.href = goToUrl;

	}

} ( window ) );


