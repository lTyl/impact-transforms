ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    'impact.debug.debug',
    'plugins.transform'
)
.defines(function(){

MyGame = ig.Game.extend({
	transition: null,
	// Load a font
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
        this.transition = new ig.TransformEffect();
        this.transition.activateTransitionClass( "exampleMove", "exampleInitial");
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		

	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
