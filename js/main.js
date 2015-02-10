var $a1 = $('#a1');
var $a2 = $('#a2');
var $a3 = $('#a3');
var $b1 = $('#b1');
var $b2 = $('#b2');
var $b3 = $('#b3');
var $c1 = $('#c1');
var $c2 = $('#c2');
var $c3 = $('#c3');


var possibleWins = [
    [ $a1, $a2, $a3 ],
    [ $b1, $b2, $b3 ],
    [ $c1, $c2, $c3 ],
    [ $a1, $b1, $c1 ],
    [ $a2, $b2, $c2 ],
    [ $a1, $b2, $c3 ],
    [ $c1, $b2, $a3 ]
];

$(function() {
	new AppView();
});