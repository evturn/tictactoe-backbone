var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		this.$el.empty();
		wins = [
		  [ 1, 2, 3 ],
		  [ 3, 6, 9 ],
		  [ 4, 5, 6 ],
		  [ 7, 8, 9 ],
		  [ 1, 4, 7 ],
		  [ 2, 5, 8 ],
		  [ 1, 5, 9 ],
		  [ 7, 5, 3 ]
		];
		occupied = [];
		userBank = [];
		cpuBank = [];
		winner = false;
		turns = this.collection.length;
		this.grid();
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

