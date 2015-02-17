var CellView = Backbone.View.extend({
	template: _.template($('#cell-template').html()),
	cpuTemplate: _.template($('#cpu-template').html()),
	initialize: function() {
		occupiedCells = [];
		turn = 1;
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
		targetCell = this.model.get('cell');
		if ($.inArray(targetCell, occupiedCells) === -1) {
			occupiedCells.push(targetCell);
			this.whoseTurn();
		} else {
			alert('This is taken. Are you blind?');
		}
	},
	whoseTurn: function() {
		if (isOdd(turn) !== 0) {
			this.addEclair();	
		} else {
			console.log('CPU turn');
			this.cpuTurn();
		}
	},
	cpuTurn: function() {
		console.log('openCells: ', openCells);
		openCellIdx = (occupiedCells.length - 1);
		openCellVal = occupiedCells[openCellIdx];
		removeValue(openCells, openCellVal);
		cpuSelection = openCells[Math.floor(Math.random()*openCells.length)];
		occupiedCells.push(cpuSelection);
		removeValue(openCells, cpuSelection);
		console.log('openCells: ', openCells);
  	this.addDonut();
	},
	addDonut: function() {
		turn = turn + 1		
		allDonuts = donutsCollection.models;
		donutModel = allDonuts[Math.floor(Math.random()*allDonuts.length)];
		donutModel.set({cell: cpuSelection});
		this.occupyCell(donutModel);
		cpuCell = $("#" + cpuSelection);
		cpuCell.html(this.cpuTemplate(donutModel.toJSON()));
		return this;
	},
	addEclair: function() {
		turn = turn + 1
		allEclairs = eclairsCollection.models;
		eclairModel = allEclairs[Math.floor(Math.random()*allEclairs.length)];
		eclairModel.set({cell: targetCell});
		this.occupyCell(eclairModel);
		this.$el.html(this.template(eclairModel.toJSON()));
		this.whoseTurn();
		return this;
	},
	occupyCell: function(model) {
		emblem = model.get('emblem');
		for (var i = winningOutcomes.length - 1; i >= 0; i--) {
			outcome = winningOutcomes[i]
			idx = outcome.indexOf(targetCell);
			if (idx !== -1) {
				outcome[idx] = emblem;
			}
		};
		this.checkScore(winningOutcomes);
	},
	checkScore: function(scores) {
		for (var i = scores.length - 1; i >= 0; i--) {
			currentResults = scores[i]
			if (compareValues(currentResults) === true && currentResults[0] === 'x') {
				alert('Eclairs Win! Eclairs forverz!');
			}
			else if (compareValues(currentResults) === true && currentResults[0] === 'o') {
				alert('A poorly written fake computer wins!');
			}
		};
	},
});