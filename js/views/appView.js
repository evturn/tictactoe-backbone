var AppView = Backbone.View.extend({
	el: '#grid',
	
	initialize: function() {
		newCells = [];
		this.buildRows('a');
		this.buildRows('b');
		this.buildRows('b');
	},
	events: {
		'click .cell': 'replaceCell'
	},
	buildRows: function(rowLetter) {
		counter = 1;
		for (counter + 1; counter <= 3; counter++) {
			var unplayed = new Unplayed;
			cellId = rowLetter +counter;
			unplayed.set({cell: cellId})
			cellView = new CellView({model: unplayed});
			
			newCells.push(unplayed);
		};
	},
	replaceCell: function(e) {
		e.preventDefault();
		selectedCell = e.currentTarget
		cellId = selectedCell.id;
		turnX = new OpponentX();
		newImg = turnX.get('img');
		console.log('currentTarget', e.currentTarget);
	}
});
