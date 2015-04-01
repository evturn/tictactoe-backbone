var CellView = Backbone.View.extend({
	tagName: 'li',
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click a' : 'occupy'
	},
	render: function() {
		this.$el.append(this.cellTemplate(this.model.toJSON()));
		return this;
	},
	occupy: function(e) {
		e.preventDefault();
		var target = e.currentTarget;
		var id = target.id;
		var element = '#' + id;
		$(element).html('<img src="img/o-1.jpg">');
	},
});
