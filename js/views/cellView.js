var CellView = Backbone.View.extend({
	el: '#grid',
	tagName: 'div',
	className: 'col-xs-4 col-sm-4 col-md-4 cell',
	cellTemplate: _.template($('#cell-template').html()),
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
			var cell = new Cell({img: cellId});
		};
	},
});