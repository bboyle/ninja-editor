// TODO npm module format: http://blog.npmjs.org/post/112712169830/making-your-jquery-plugin-work-better-with-npm
// TODO what does this function do? return whether passive voice is present? highlight it? return the matches!?

// passive voice
(function() {
	'use strict';


		// passive voice (terms that precede past participles)
	var	PASSIVE_VOICE = [
		"has been",
		"hasn't been",
		"has not been",
		"have been",
		"haven't been",
		"have not been",
		"was",
		"wasn't",
		"was not",
		"were",
		"were't",
		"were not",
		"will be",
		"will not be",
		"might be",
		"might not be",
		"won't be",
		"going to be",
		"not going to be",
		"is being",
		"is not being",
		"should be",
		"should not be",
		"must be",
		"must not be"
		// no ',' on last line
	];

	// past participles (terms that follow passive voice)
	PAST_PARTICIPLES = [
		'agreed',
		'alleged',
		'allowed',
		'answer',
		'answered',
		'arisen',
		'asked',
		'been',
		'begun',
		'believed',
		'bit',
		'bitten',
		'blown',
		'borne',
		'borrowed',
		'bought',
		'broken',
		'brought',
		'called',
		'carried',
		'caught',
		'changed',
		'chosen',
		'closed',
		'come',
		'crept',
		'cut',
		'decided',
		'directed',
		'dived',
		'done',
		'dragged',
		'drawn',
		'dreamt',
		'driven',
		'drowned',
		'drunk',
		'eaten',
		'explained',
		'fallen',
		'felt',
		'filled',
		'finished',
		'flown',
		'followed',
		'forgiven',
		'forgotten',
		'forgotten',
		'fought',
		'found',
		'frozen',
		'given',
		'gone',
		'got',
		'gotten',
		'grown',
		'heard',
		'helped',
		'hidden',
		'hung',
		'known',
		'laid',
		'lain',
		'learned',
		'led',
		'left',
		'liked',
		'listened',
		'lit',
		'lived',
		'looked',
		'lost',
		'lost',
		'made',
		'moved',
		'needed',
		'opened',
		'paid',
		'played',
		'promised',
		'proved',
		'proven',
		'put',
		'read',
		'remembered',
		'ridden',
		'run',
		'run',
		'rung',
		'said',
		'sat',
		'seen',
		'seen',
		'sent',
		'set',
		'set',
		'shaken',
		'sold',
		'sought',
		'spent',
		'spoken',
		'sprung',
		'started',
		'stolen',
		'stood',
		'stopped',
		'struck',
		'studied',
		'stung',
		'suggested',
		'sung',
		'sunk',
		'sworn',
		'swum',
		'swung',
		'take',
		'taken',
		'talked',
		'thought',
		'thrown',
		'told',
		'took',
		'torn',
		'travelled',
		'tried',
		'turned',
		'understood',
		'used',
		'waited',
		'walked',
		'wanted',
		'watched',
		'woken',
		'won',
		'worked',
		'worn',
		'worried',
		'written'
		// no comma on last line
	];


	test( 'passive voice', function() {
		var ppFound = [];

		// strictEqual( /(has been|was|should be) agreed/i.test( body ), false, 'passive voice ‘agreed’' );
		$.each( PAST_PARTICIPLES, function( index, pastParticiples ) {
			// check if passive voice is found in document
			if ( new RegExp( "\\b(" + PASSIVE_VOICE.join( '|' ) + ")\\s+" + pastParticiples + '\\b', 'i' ).test( body )) {
				$.each( PASSIVE_VOICE, function( index, passiveVoice ) {
					strictEqual( new RegExp( "\\b"+ passiveVoice + "\\s+" + pastParticiples + '\\b', 'i' ).test( body ), false, 'passive voice ‘' + passiveVoice + ' ' + pastParticiples + '’' );
				});
				ppFound.push( pastParticiples );

			} else {
				ok( true, 'passive voice ‘' + pastParticiples + '’' );
			}
		});

		// any issues?
		if ( ppFound.length > 0 ) {
			// highlight them! (use 'passive-voice' class)
			contentContainer.highlightRegex( new RegExp( '\\b(has been|hasn\'t been|has not been|have been|haven\'t been|have not been|was|wasn\'t|was not|were|were\'t|were not|will be|will not be|might be|might not be|won\'t be|going to be|not going to be|is being|is not being|should be|should not be|must be|must not be)\\s+(' + ppFound.join( '|' ) + ')\\b' ), { 'className' : 'passive-voice' });
		}
	});

}());