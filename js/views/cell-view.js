var CellView = Backbone.View.extend({
	el: '#view',
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.append(this.cellTemplate(this.model.toJSON()));
		return this;
	},
});
