var Cells = Backbone.Collection.extend({
	model: Cell,
	initialize: function() {
		newCells = [];
		this.buildRow('a');
		this.buildRow('b');
		this.buildRow('c');
	},
	buildRow: function(rowLetter) {
		counter = 1;
		for (counter + 1; counter <= 3; counter++) {
			cellId = rowLetter + counter;
			var cell = new Cell({cell: cellId});
			newCells.push(cell);
			console.log(cell);
		};
	},
});