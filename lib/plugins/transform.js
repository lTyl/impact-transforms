// Handles the transformation animation during a level change
ig.module('plugins.transform')
    .defines(function (){
        ig.TransformEffect = ig.Class.extend({

            transitionClass: {active: null, passive: null},
            canvas: null,

            init: function () {
                this.canvas = ig.system.canvas;
                this.bindTransitionEndEvents();
            },

            bindTransitionEndEvents: function() {
                this.canvas.addEventListener("MSTransitionEnd", this.deactivateCurrentTransition());
                this.canvas.addEventListener("transitionEnd", this.deactivateCurrentTransition());
                this.canvas.addEventListener("webkitTransitionEnd", this.deactivateCurrentTransition());
                this.canvas.addEventListener("OTransitionEnd", this.deactivateCurrentTransition());
            },

            deactivateCurrentTransition: function () {
                var me = this;
                return function () {
                    if ( me.canvas.className == me.transitionClass.active )
                        me.canvas.className = me.transitionClass.passive;
                }
            },

            activateTransitionClass: function ( activeClassName, passiveClassName ) {
                this.transitionClass = {active: activeClassName, passive: passiveClassName};
                ig.system.canvas.className = activeClassName;
            }
        })
    });