var WinView = Backbone.View.extend({
	el: '#grid',
	elcairTemplate: _.template($('#eclair-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #replay': 'replay'
	},
	render: function() {
		this.$el.html(this.elcairTemplate());
		return this;
	},
	replay: function() {
		appView = new AppView();
	},
});