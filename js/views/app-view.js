var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		this.grid();
	},
	cell: function() {
		var view = new CellView();
		$('#view').append(view.render().el);
	},
	grid: function() {
		for (var i = 0; i < 9; i++) {
			this.cell();
		}
	},
});

