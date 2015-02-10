var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		this.addAll();
	},
	addOne: function() {

	},
	addAll: function() {
		cellsCollection.each(function(model) {
		cellView = new CellView({model: model});
		console.log(cellView);
		$('#grid').append(cellView.el);
		});
	},
});
