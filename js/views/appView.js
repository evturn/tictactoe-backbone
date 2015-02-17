var AppView = Backbone.View.extend({
	initialize: function() {
		cellGrid = [];
		openCells = [];
		this.buildCells();
		donutsCollection = new DonutsCollection(donutData);
		eclairsCollection = new EclairsCollection(eclairData);
	},
	buildCells: function() {
		this.buildRow('a');
		this.buildRow('b');
		this.buildRow('c');
	},
	buildRow: function(rowLetter) {
	  counter = 1;
	  for (counter + 1; counter <= 3; counter++) {
	    var cell = new Cell;
	    cellId = rowLetter + counter;
	    openCells.push(cellId);
	    cell.set({cell: cellId})
	    cellView = new CellView({model: cell}); 
	    cellGrid.push(cell);
	  };
	},
});