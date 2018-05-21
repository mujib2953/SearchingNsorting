/*
 * @Author: Mujib Ansari 
 * @Date: 2018-05-17 13:18:46 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-05-21 10:14:48
 */

require.config({
    baseUrl: '',

    paths: {
        jQuery: './vendor/js/jquery.min',
        bootstrapJS: './vendor/js/bootstrap.min',
        common: './custom/js/common',

        bubbleSort: './custom/js/bubbleSort',
        selectionSort: './custom/js/selectionSort',
        insertionSort: './custom/js/insertionSort',
        mergeSort: './custom/js/mergeSort'
    },

    shim: {
        'common': {
            deps: [ 
                'jQuery',
                'bootstrapJS',
                'bubbleSort',
                'selectionSort',
                'insertionSort',
                'mergeSort'
            ],
        },
        'bootstrapJS': {
            deps: [ 'jQuery' ]
        }
    }
});

requirejs( [ 'common' ], function() {
    logInfoMessage( 'common.js is loaded.' );
} );

window.logInfoMessage = function( p_message ) {
    console.log( '%c ' + p_message + ' ', "background: #F00; color: #FFF" );
};

window.addDash = function() {
    console.log( '------------------------------------------' );
}

window.getTime = function() {
    let date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();

    return hrs + ':' + min + ':' + sec;
}

window.calcEstimate = function( p_bool ) {

    if( p_bool ) {
        window.p_start = new Date();
        console.log( 'Starting Time \t' + getTime() );
    } else {
        window.p_end = new Date;
        console.log( 'End Time \t\t' + getTime() );

        let dur = ( p_end - p_start ) / 1000 ;

        logInfoMessage( 'Took ' + dur + 'sec' );
    }

}
