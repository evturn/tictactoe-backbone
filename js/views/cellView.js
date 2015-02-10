var CellView = Backbone.View.extend({
	template: _.template($('#cell-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .cell': 'replaceCell'
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	replaceCell: function(e) {
		e.preventDefault();
	},
});