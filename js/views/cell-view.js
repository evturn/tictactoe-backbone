var CellView = Backbone.View.extend({
	tagName: 'li',
	className: 'cell',
	occupyTemplate: _.template($('#occupy-template').html()),
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .vacant' : 'occupy'
	},
	render: function() {
		this.$el.append(this.cellTemplate(this.model.toJSON()));
		return this;
	},
	occupy: function(e) {
		var target = e.currentTarget;
		var id = target.id;
		var elem = '#' + id;
		var idx = Math.floor(Math.random() * cpu.length);
		var model = cpu.models[idx];
		$(elem).html(this.occupyTemplate(model.toJSON()));
		return this;
	},
});
