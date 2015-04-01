var wins = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 1, 5, 9 ],
    [ 7, 5, 3 ]
];

var cells = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9}
];

var donuts = [
  {img: 'img/o-1.jpg', emblem: 'o'},
  {img: 'img/o-2.jpg', emblem: 'o'},
  {img: 'img/o-3.jpg', emblem: 'o'},
  {img: 'img/o-4.jpg', emblem: 'o'},
  {img: 'img/o-5.jpg', emblem: 'o'}
];

var eclairs = [
  {img: 'img/x-1.jpg', emblem: 'x'},
  {img: 'img/x-2.jpg', emblem: 'x'},
  {img: 'img/x-3.jpg', emblem: 'x'},
  {img: 'img/x-4.jpg', emblem: 'x'}
];


var cells = new Cells(cells);
var cellsView = new CellsView({collection: cells});

