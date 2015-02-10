var CellView = Backbone.View.extend({
	template: _.template($('#cell-template').html()),
	initialize: function() {
		gamePlay = [];
		this.render();
	},
	events: {
		'click .cell': 'isUsed'
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	isUsed: function(e) {
		e.preventDefault();
		usedCell = this.model.get('cell');
		if ($.inArray(usedCell, gamePlay) !== -1) {
			alert('It\s taken. You blind?');
		} else {
			gamePlay.push(usedCell);
			this.replaceCell();	
		}
	},
	replaceCell: function() {
		allDonuts = donutsCollection.models;
		newDonut = allDonuts[Math.floor(Math.random()*allDonuts.length)];
		newDonut.set({cell: cellId});
		this.$el.html(this.template(newDonut.toJSON()));
		return this;
	},
});