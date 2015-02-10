var AppView = Backbone.View.extend({
	
	initialize: function() {
		
	},

	replaceCell: function(e) {
		e.preventDefault();
		selectedCell = e.currentTarget
		cellId = selectedCell.id;
		turnX = new OpponentX();
		newImg = turnX.get('img');
		console.log('currentTarget', e.currentTarget);
	}
});
