var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		this.listenTo(this.collection, 'reset', this.addAll);
	},
	

});
