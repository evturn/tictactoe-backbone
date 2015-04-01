var CellView = Backbone.View.extend({
	tagName: 'li',
	className: 'cell',
	occupyTemplate: _.template($('#occupy-template').html()),
	cellTemplate: _.template($('#cell-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .vacant' : 'move'
	},
	render: function() {
		this.$el.append(this.cellTemplate(this.model.toJSON()));
		return this;
	},
	move: function(e) {
		var target = e.currentTarget;
		var id = target.id;
		var counter = (turns - occupied.length);
		if (counter % 2 == 0) {
			this.occupy(id, user);
		} else {
			this.occupy(id, cpu);
		}
	},
	occupy: function(id, collection) {
		var idx = Math.floor(Math.random() * collection.length);
		var model = collection.models[idx];
		var elem = '#' + id;
		occupied.push(id);
		$(elem).removeClass('vacant');
		$(elem).addClass('occupied');
		$(elem).html(this.occupyTemplate(model.toJSON()));
		return this;
	},
});
