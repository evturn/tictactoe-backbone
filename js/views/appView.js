var AppView = Backbone.View.extend({
	el: '#row-a',
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		this.buildGame();
	},
	events: {
		'click .cell': 'replaceCell'
	},
	render: function() {
		
		
		
	},
	buildGame: function() {
		counter = 0;
		totalCells  = 3;
		for (totalCells - 1; totalCells >= 1; totalCells--) {
			var unplayed = new Unplayed;
			gridId = totalCells;
			unplayed.set({cell: 'a' + totalCells})
			this.$el.append(this.cellTemplate(unplayed.toJSON()));
			console.log(unplayed);
		};
	}
});
