var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		this.render();
	},
	render: function() {
		cellsCollection.each(function(model) {
		cellView = new CellView({model: model});
		$('#grid').append(cellView.el);
		});
	},
});
