var AppView = Backbone.View.extend({
	el: '#grid',
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		
	},
});