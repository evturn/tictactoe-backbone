var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		this.grid();
	},
	cell: function(model) {
		var view = new CellView({model: model});
		$('#view').append(view.render().el);
	},
	grid: function() {
		this.collection.each(function(model) {
			this.cell(model);
		}.bind(this))
	},
});
