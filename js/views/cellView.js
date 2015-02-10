var CellView = Backbone.View.extend({
	className: 'col-xs-4 col-sm-4 col-md-4 cell',
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
		selectedCell = e.currentTarget
		cellId = selectedCell.id;
		console.log('currentTarget', e.currentTarget);
	},
});