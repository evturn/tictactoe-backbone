var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		this.grid();
		turn = 1;
	},
	events: {
		'click .cell' : 'move'
	},
	move: function(e) {
		e.preventDefault();
		var turns = this.collection.length;
		console.log(turn);
		if (turns % turn == 0) {
			console.log('User Went');
		} else {
			console.log('CPU Went');
		}
		turn = turn + 1;
	},
	cell: function(model) {
		var view = new CellView({model: model});
		this.$el.append(view.el);
	},
	grid: function() {
		this.collection.each(function(model) {
			this.cell(model);
		}.bind(this))
	},
});

