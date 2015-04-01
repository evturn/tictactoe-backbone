var CellView = Backbone.View.extend({
	className: 'col-xs-4 col-sm-4 cell',
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.cellTemplate());
		return this;
	},
});
