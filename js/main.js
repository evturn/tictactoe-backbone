newCells = [];
buildRows();
function buildRows() {
  counter = 1;
  for (counter + 1; counter <= 9; counter++) {
    var unplayed = new Unplayed;
    unplayed.set({cell: counter})
    cellView = new CellView({model: unplayed}); 
    newCells.push(unplayed);
  };
};

var newDonuts = [
	{img: 'img/o-1.jpg', player: 'o'},
	{img: 'img/o-2.jpg', player: 'o'},
	{img: 'img/o-3.jpg', player: 'o'},
	{img: 'img/o-4.jpg', player: 'o'},
	{img: 'img/o-5.jpg', player: 'o'}
];

var newEclairs = [
  {img: 'img/x-1.jpg', player: 'x'},
  {img: 'img/x-2.jpg', player: 'x'},
  {img: 'img/x-3.jpg', player: 'x'},
  {img: 'img/x-4.jpg', player: 'x'},
  {img: 'img/x-5.jpg', player: 'x'}
];

donutsCollection = new DonutsCollection(newDonuts);
eclairsCollection = new EclairsCollection(newEclairs);


var possibleWins = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 0, 4, 8 ],
    [ 6, 4, 2 ]
];



$(function() {

  cellsCollection = new CellsCollection(newCells);
  new CellsView(cellsCollection);

});
