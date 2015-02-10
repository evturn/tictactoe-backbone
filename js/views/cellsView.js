var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		this.render();
	},
	render: function() {
		cellsCollection.each(function(model) {
		cellView = new CellView({model: model});
		console.log(cellView);
		$('#grid').append(cellView.el);
		});
	},
});
