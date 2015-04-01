var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		this.cell();
	},
	cell: function() {
		var view = new CellView();
		$('#row-a').append(view.render().el);
	},
	grid: function() {
		var row = 3;

	}
});

