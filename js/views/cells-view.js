var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		turns = this.collection.length;
		this.grid();
	},
	events: {
		'click .cell' : 'move'
	},
	move: function(e) {
		e.preventDefault();
		var counter = (turns - occupied.length);
		if (counter % 2 == 0) {
			console.log('User Went');
		} else {
			console.log('CPU Went');
		}
		
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

