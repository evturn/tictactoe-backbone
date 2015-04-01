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
		if (counter % 2 == 1) {
			this.occupy(id, user, userBank);
			console.log(counter);
		} else {
			console.log('Chill, the cpu is thinking');
		}
		this.cpu();
	},
	occupy: function(id, collection, bank) {
		var idx = Math.floor(Math.random() * collection.length);
		var model = collection.models[idx];
		var player = model.get('player');
		var elem = '#' + id;
		var cell = parseInt(id);
		console.log(player);
		occupied.push(cell);
		bank.push(cell);
		$(elem).removeClass('vacant');
		$(elem).addClass('occupied');
		$(elem).addClass(player);
		this.win(player)
		$(elem).html(this.occupyTemplate(model.toJSON()));
		return this;
	},
	cpu: function() {
		var vacant = document.getElementsByClassName('vacant');
		var available = [];
		for (var i = 0; i < vacant.length; ++i) {
				available.push(vacant[i].id);
		}
		setTimeout(function(){ 
			var id = available[Math.floor(Math.random() * vacant.length)];
			counter = (turns - occupied.length);
			console.log(counter);
			this.occupy(id, cpu, cpuBank);
  	}.bind(this), 1250);
	},
	win: function(player) {
		var player = document.getElementsByClassName(player);
		var bank = [];
		for (var i = 0; i < player.length; ++i) {
			bank.push(player[i].id);
		}
		console.log(bank);
	},
});
