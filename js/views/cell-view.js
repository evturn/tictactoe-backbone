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
		var number = Math.floor(Math.random() * cpu.length);
		var model = cpu.models[number];
		$(element).html(this.occupyTemplate(model.toJSON()));
		return this;
	},
});
