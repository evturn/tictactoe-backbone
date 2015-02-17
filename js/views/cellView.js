var CellView = Backbone.View.extend({
	template: _.template($('#cell-template').html()),
	cpuTemplate: _.template($('#cpu-template').html()),
	initialize: function() {
		occupiedCells = [];
		turn = 1;
		this.render();
	},
	events: {
		'click .cell': 'userMove'
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	userMove: function(e) {
		e.preventDefault();
		targetCell = this.model.get('cell');
		console.log('TARGET', targetCell);
		console.log('TURN', turn);
		console.log('OPENCELLS', openCells);
		this.isUsed();
	},
	isUsed: function() {
		if ($.inArray(targetCell, occupiedCells) === -1) {
			occupiedCells.push(targetCell);
			this.whoseTurn();
		} else {
			alert('This is taken. Are you blind?');
		}
		console.log('OCCUPIED', occupiedCells);
	},
	whoseTurn: function() {
		if (this.isOdd(turn) !== 0) {
			this.addUserSelection();	
		} else {
			this.createCPUSelection();
		}
	},
	addUserSelection: function() {
		turn = turn + 1
		this.removeValue(openCells, targetCell);
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
			if (this.compareValues(currentResults) === true && currentResults[0] === 'x') {
				alert('Eclairs Win! Eclairs forverz!');
			}
			else if (this.compareValues(currentResults) === true && currentResults[0] === 'o') {
				alert('A poorly written fake computer wins!');
			}
		};
	},
	createCPUSelection: function() {
		cpuSelection = openCells[Math.floor(Math.random()*openCells.length)];
		console.log('CPU SELECTION', cpuSelection);
		openCellIdx = (occupiedCells.length - 1);
		openCellVal = occupiedCells[openCellIdx];
		this.removeValue(openCells, cpuSelection);
		this.removeValue(openCells, openCellVal);
		occupiedCells.push(cpuSelection);
			setTimeout(function(){ 
	  		this.addDonut();
	  	}.bind(this), 1250);
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
	isOdd: function(number) {
  	return number % 2;
	},
	compareValues: function(array) {
	  for(var i = 1; i < array.length; i++) {
	    if (array[i] !== array[0]) {
	        return false;
	    }
	  };
	  return true;
	},
	removeValue: function(array, value) {
	  var idx = array.indexOf(value);
	  if (idx != -1) {
	    array.splice(idx, 1);
  	}
	},
});