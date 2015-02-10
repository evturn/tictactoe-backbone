var AppView = Backbone.View.extend({
	el: '#grid',
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		newCells = [];
		this.rowA();
	},
	events: {
		'click .cell': 'replaceCell'
	},
	rowA: function() {
		counter = 1;
		for (counter + 1; counter <= 3; counter++) {
			var unplayed = new Unplayed;
			gridId = counter;
			unplayed.set({cell: 'a' + gridId})
			this.$el.append(this.cellTemplate(unplayed.toJSON()));
			newCells.push(unplayed);
		};
		this.rowB();
	},
	rowB: function() {
		counter = 1;
		for (counter + 1; counter <= 3; counter++) {
			var unplayed = new Unplayed;
			gridId = counter;
			unplayed.set({cell: 'b' + gridId})
			this.$el.append(this.cellTemplate(unplayed.toJSON()));
			newCells.push(unplayed);
		};
		this.rowC();
	},
		rowC: function() {
		counter = 1;
		for (counter + 1; counter <= 3; counter++) {
			var unplayed = new Unplayed;
			gridId = counter;
			unplayed.set({cell: 'c' + gridId})
			this.$el.append(this.cellTemplate(unplayed.toJSON()));
			newCells.push(unplayed);
		};
		this.markAllUnplayed();
	},
	markAllUnplayed: function() {
		unplayedCells = new UnplayedCells(newCells);
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
