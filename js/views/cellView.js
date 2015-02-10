var CellView = Backbone.View.extend({
	template: _.template($('#cell-template').html()),
	initialize: function() {
		gamePlay = [];
		turn = 1;
		turns = [1, 3, 5, 7, 9];
		this.render();
	},
	events: {
		'click .cell': 'moveMade'
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	moveMade: function(e) {
		e.preventDefault();
		if (turn === 1) {
			this.addEclair();
		} else {
			this.isUsed();
		}
	},
	alternateTurn: function() {
		if ($.inArray(turn, turns) !== -1) {
			this.addDonut();
		} else {
			this.addEclair();
		}
	},
	isUsed: function() {
		usedCell = this.model.get('cell');
		if ($.inArray(usedCell, gamePlay) !== -1) {
			alert('It\s taken. Are you blind?');
		} else {
			gamePlay.push(usedCell);
			this.alternateTurn();	
		}
	},
	addDonut: function() {
		allDonuts = donutsCollection.models;
		newDonut = allDonuts[Math.floor(Math.random()*allDonuts.length)];
		newDonut.set({cell: cellId});
		this.$el.html(this.template(newDonut.toJSON()));
		return this;
	},
	addEclair: function() {
		allEclairs = eclairsCollection.models;
		newEclair = allEclairs[Math.floor(Math.random()*allEclairs.length)];
		newEclair.set({cell: cellId});
		this.$el.html(this.template(newEclair.toJSON()));
		return this;
	},
});