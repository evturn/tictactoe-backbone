var AppView = Backbone.View.extend({
	el: '#grid',
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		this.buildGame();
	},
	events: {
		'click .cell': 'replaceCell'
	},
	buildGame: function() {
		this.rowA();	
	},
	rowA: function() {
		counter = 1;
		for (counter + 1; counter <= 3; counter++) {
			var unplayed = new Unplayed;
			gridId = counter;
			unplayed.set({cell: 'a' + gridId})
			this.$el.append(this.cellTemplate(unplayed.toJSON()));
			console.log(unplayed);
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
			console.log(unplayed);
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
			console.log(unplayed);
		};
	}
});
