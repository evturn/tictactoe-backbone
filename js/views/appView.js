var AppView = Backbone.View.extend({
	el: '#grid',
	unplayedTemplate: _.template($('#grid-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .cell': 'replaceCell'
	},
	render: function() {
		var unplayed = new Unplayed;
		this.$el.html(this.unplayedTemplate(unplayed.toJSON()));
		return this;
	},
	replaceCell: function(e) {
		e.preventDefault();
		here = $(this).click();
		console.log(here.nextSibling);
	},
});