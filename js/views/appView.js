var AppView = Backbone.View.extend({
	el: '#grid',
	unplayedTemplate: _.template($('#grid-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		var unplayed = new Unplayed;
		this.$el.html(this.unplayedTemplate(unplayed.toJSON()));
		return this;
	},
});