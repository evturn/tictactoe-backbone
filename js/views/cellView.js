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
		played = this.model.set({img: 'img/o-1.jpg'});
		this.$el.html(this.template(played.toJSON()));
		return this;
	},
});