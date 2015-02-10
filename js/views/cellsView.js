var CellsView = Backbone.View.extend({
	el: '#grid',
	initialize: function() {
		this.listenTo(this.collection, 'add', this.addAll);
	},
	addAll: function() {
		console.log('hello');
	},

});
