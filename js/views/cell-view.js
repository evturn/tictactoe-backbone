var CellView = Backbone.View.extend({
	tagName: 'li',
	occupyTemplate: _.template($('#occupy-template').html()),
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .cell' : 'occupy'
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
		console.log(cpu.length);
		$(element).html(this.occupyTemplate(this.model.toJSON()));
		return this;
	},
});
