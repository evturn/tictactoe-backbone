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
		} else {
			console.log('Chill, the cpu is thinking');
		}
		return this.cpu();
	},
	occupy: function(id, collection, bank) {
		var idx = Math.floor(Math.random() * collection.length);
		var model = collection.models[idx];
		var player = model.get('player');
		var elem = '#' + id;
		var cell = parseInt(id);
		occupied.push(cell);
		bank.push(cell);
		$(elem).removeClass('vacant');
		$(elem).addClass('occupied');
		$(elem).addClass(player);
		this.contrast(player, bank)
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
			this.occupy(id, cpu, cpuBank);
  	}.bind(this), 1250);
	},
	contrast: function(player, bank) {
		var bank = bank.sort();
		console.log(player, bank);
		for (var i = 0; i < bank.length; i++) {
			var idx = bank[i];
			console.log(idx);
			for (var j = 0; j < wins.length; j++) {
				var win = wins[j];
				var jdx = win.indexOf(idx);
				if ( jdx !== -1) {
					win[jdx] = player;
				}
			};
		};
		for (var i = 0; i < wins.length; i++) {
			var win = wins[i];
			if (win[0] === win[1]) {
				console.log(player, 'checking last', win);
				if (win[1] === win[2]) {
					 return this.win(player);
				}
			} 
		};
	},
	win: function(player) {
		setTimeout(function(){
			alert(player + ' just won!');
		}, 500);
	},
});
