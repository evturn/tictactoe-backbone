var CellView = Backbone.View.extend({
	template: _.template($('#cell-template').html()),
	initialize: function() {
		occupiedCells = [];
		gameStatus = [];
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
		targetCell = this.model.get('cell');
		console.log('moveMade says Cell:', targetCell);
		if (turn === 1) {
			this.addEclair();
			occupiedCells.push(targetCell);
			console.log('moveMade says occupiedCells << ' + targetCell);
			console.log('moveMade calling addEclair');
		} else {
			this.isUsed();
			console.log('moveMade calling isUsed');
		}
	},
	alternateTurn: function() {
		if ($.inArray(turn, turns) === -1) {
			this.addEclair();
			console.log('alternateTurn calling addEclair');
			occupiedCells.push(targetCell);
			console.log('alternateTurn says occupiedCells << ' + targetCell);
		} else {
			this.addDonut();
		}
	},
	isUsed: function() {
		if ($.inArray(targetCell, occupiedCells) === -1) {
			alert('It\s taken. Are you blind?');
		} else {
			this.alternateTurn();	
		}
	},
	addDonut: function() {
		turn = turn + 1
		console.log('addDonut says Turn:', turn);
		occupiedCells.push(targetCell);
		console.log('addDonut says occupiedCells << ' + targetCell);
		targetCell = this.model.get('cell');
		allDonuts = donutsCollection.models;
		newDonut = allDonuts[Math.floor(Math.random()*allDonuts.length)];
		newDonut.set({cell: targetCell});
		this.claimCell(newDonut);
		this.$el.html(this.template(newDonut.toJSON()));
		return this;
	},
	addEclair: function() {
		turn = turn + 1
		console.log('addEclair says Turn:', turn);
		occupiedCells.push(targetCell);
		console.log('addEclair says occupiedCells << ' + targetCell);
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
		this.checkStatus();
	},
	checkStatus: function() {
		

	},
});