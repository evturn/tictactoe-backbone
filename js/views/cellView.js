var CellView = Backbone.View.extend({
	template: _.template($('#cell-template').html()),
	initialize: function() {
		gamePlay = [];
		turn = 1;
		turns = [2, 4, 6, 8];
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
		console.log(turn);
		if (turn == 1) {
			this.addEclair();
		} else {
			this.isUsed();
		}
	},
	alternateTurn: function() {
		if ($.inArray(turn, turns) === -1) {
			this.addEclair();
		} else {
			this.addDonut();
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
		turn = turn + 1
		allDonuts = donutsCollection.models;
		newDonut = allDonuts[Math.floor(Math.random()*allDonuts.length)];
		newDonut.set({cell: cellId});
		this.$el.html(this.template(newDonut.toJSON()));
		return this;
	},
	addEclair: function() {
		turn = turn + 1
		allEclairs = eclairsCollection.models;
		newEclair = allEclairs[Math.floor(Math.random()*allEclairs.length)];
		newEclair.set({cell: cellId});
		this.$el.html(this.template(newEclair.toJSON()));
		return this;
	},
});