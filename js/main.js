newCells = [];
buildRows('a');
buildRows('b');
buildRows('c');
function buildRows(rowLetter) {
  counter = 1;
  for (counter + 1; counter <= 3; counter++) {
    var unplayed = new Unplayed;
    cellId = rowLetter + counter;
    unplayed.set({cell: cellId})
    cellView = new CellView({model: unplayed}); 
    newCells.push(unplayed);
  };
};

function isOdd(number) {
  return number % 2;
};

function compareValues(array) {
  for(var i = 1; i < array.length; i++) {
      if (array[i] !== array[0]) {
          return false;
      }
  };
  return true;
};


var newDonuts = [
	{img: 'img/o-1.jpg', emblem: 'o'},
	{img: 'img/o-2.jpg', emblem: 'o'},
	{img: 'img/o-3.jpg', emblem: 'o'},
	{img: 'img/o-4.jpg', emblem: 'o'},
	{img: 'img/o-5.jpg', emblem: 'o'}
];

var newEclairs = [
  {img: 'img/x-1.jpg', emblem: 'x'},
  {img: 'img/x-2.jpg', emblem: 'x'},
  {img: 'img/x-3.jpg', emblem: 'x'},
  {img: 'img/x-4.jpg', emblem: 'x'},
  {img: 'img/x-5.jpg', emblem: 'x'}
];

donutsCollection = new DonutsCollection(newDonuts);
eclairsCollection = new EclairsCollection(newEclairs);


var possibleWins = [
    [ 'a1', 'a2', 'a3' ],
    [ 'b1', 'b2', 'b3' ],
    [ 'c1', 'c2', 'c3' ],
    [ 'a1', 'b1', 'c1' ],
    [ 'a2', 'b2', 'c2' ],
    [ 'a1', 'b2', 'c3' ],
    [ 'c1', 'b2', 'a3' ]
];



$(function() {

  cellsCollection = new CellsCollection(newCells);
  new CellsView(cellsCollection);

});
