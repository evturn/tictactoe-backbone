var CellView = Backbone.View.extend({
	template: _.template($('#cell-template').html()),
	initialize: function() {
		occupiedCells = [];
		gameStatus = [];
		turn = 1;
		eclairTurns = [1, 3, 5, 9];
		donutTurns = [2, 4, 6, 8];
		this.render();
	},
	events: {
		'click .cell': 'isUsed'
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	moveMade: function() {
		
		
		console.log('turn is', turn);
		if (isOdd(turn) !== 0) {
			this.addEclair();
			occupiedCells.push(targetCell);
		} else {
			this.isUsed();
		}
	},
	isUsed: function(e) {
		targetCell = this.model.get('cell');
		if ($.inArray(targetCell, occupiedCells) !== -1) {
			alert('It\s taken. Are you blind?');
		} else {
			occupiedCells.push(targetCell);
			this.alternateTurn();	
		}
	},
	alternateTurn: function() {
		if ($.inArray(turn, donutTurns) === -1) {
			this.addEclair();
		} else {
			this.addDonut();
		}
	},
	addDonut: function() {
		turn = turn + 1
		
		allDonuts = donutsCollection.models;
		newDonut = allDonuts[Math.floor(Math.random()*allDonuts.length)];
		newDonut.set({cell: targetCell});
		this.claimCell(newDonut);
		this.$el.html(this.template(newDonut.toJSON()));
		return this;
	},
	addEclair: function() {
		turn = turn + 1
		allEclairs = eclairsCollection.models;
		newEclair = allEclairs[Math.floor(Math.random()*allEclairs.length)];
		newEclair.set({cell: targetCell});
		this.claimCell(newEclair);
		this.$el.html(this.template(newEclair.toJSON()));
		return this;
	},
	claimCell: function(newTurn) {
		claimedCell = newTurn.get('player');
		for (var i = possibleWins.length - 1; i >= 0; i--) {
			outcome = possibleWins[i]
			this.checkIndex(outcome);
		};
	},
	checkIndex: function(outcome) {
		index = outcome.indexOf(targetCell);
		if (index !== -1) {
			outcome[index] = claimedCell;
			gameStatus.push(outcome);
		}
	},
	
});