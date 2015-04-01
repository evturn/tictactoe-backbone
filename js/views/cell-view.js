var CellView = Backbone.View.extend({
	className: 'col-xs-12 col-sm-12 cell',
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.cellTemplate());
		return this;
	},
});
