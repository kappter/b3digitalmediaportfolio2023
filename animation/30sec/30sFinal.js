(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"30sFinal_atlas_1", frames: [[603,1507,20,308],[523,1034,529,471],[0,0,992,1032],[0,1034,521,479],[0,1515,601,415]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["30sFinal_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Among_Usremovebgpreview = function() {
	this.initialize(ss["30sFinal_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["30sFinal_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.imageremovebgpreview3 = function() {
	this.initialize(ss["30sFinal_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.uwu = function() {
	this.initialize(ss["30sFinal_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Flowers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AkDBzQAAgCAAgDQgBgDgBgDQgBgDgBgCQgBgFgBgDAkHBjQABAFACAGIAAAAQAAADABACQATA+A4C9AEGlfQgBgDACgEQACgGABAAAEHlfIAAAAIgBAAQgBADAAADQgJA4gZB6QgBACAAADQgOBDAAA7QAAADABAGQAAABAAAAIAAABQABAHABAEQAAABAAABADVgbQgCACAAACIAAAAQABAGABAIQAAAJAAADIAAABQAAACAAADADVAPQAAAAAAABADVAQQgCANgEAUIAAAAQgBADAAADQgIAkAAAdQAAAEABAUQABAOAAAKQAAABAAACQAAABABABADJCuQAAACgCAB");
	this.shape.setTransform(418.5375,147.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("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gBADQgBAEgBAEQgFAUAAATQAAAXAGAhQAFAaAGAVQAGARAdAFQANACAlAAQABAAAXABQABAAABAAQANABALgCQAhgEAygZQANgGAHgJQAHgJADgCQABgBARgIQAQgJABgIQgBATgEAeQgEAXAAAcQAAARABAMQAAAFABAEQAAACAAABQAEAcAFAiQACAKAOAaQAHAOAIAOQAEALAOAOQATATAPAVQABABAJAFIAAAAQAAABABAAQABABACAAQANAIABABQAWATAPAIQAAAAABAAQAJAFAGAAQADAAAdgHQAOgDAKgDQABAAAAAAQAMgDAGgCQAFgCAfgLQAggOASgXQARgVANgVQASgeAJgOAi2rNQgjgMgHgBQgKgCgcAAIgYABIgagCQgBAAgBAAQgqgBgPACQgQACgaAEQgNACgQAAQgFAAgLADQAzBIAABdQAAAbgFAaQAEACAGADIABAAQAZAJAiAOQAGADAOADQAEABAFABQAFABAHACQAcAGA2ABIABAAQAAAAAEAAQAEABAAgBIgIAAAi0rLQABAAADAAQAEAAAJADQAIACACABAq4tdQAJhPAGgeQARhYAghCQACgEACgEAm+z/QgDACgCABQgUAJgYALQgOAHgTAdQgCAEgCADQgUAhAAAOAooyLQAAADACAFQAAACABABQABAEABACQAMAaAwAWQAYALAUAEQANACAFgCQACgBAAgDQAAgCgBABQgEABgBAAQADAAADAAQASAAAPgBAtqsVQgXgUgYgpQgOgagdhBQgagwgUg1QgohoAAhQQAAgsAZgYQAegeBDAAQA2AAAxBEQA0BHANBmQAIA+AYBIQAYBIAFARAzJt+QAqABAxAIQBPALAjAUQAFADBHAgQAwAXASAKQACgCACgBQBMg6BjAAQBpAABNBAAvdpFQAIhoBMhNQANgNAOgLAvepCQAAgBABgCQgMACgbACQgiAEgWACQgVACgsABQgcABgTAAIgBAAQAAACg0gKQgxgIgSgFQgqgLgpgRQgSgHgjgRQgSgIgQgeQgVgkAAgoQAAglARgYQAQgWAqgWQASgJALgIQAJgEAvgJQAbgFAxgBQAagBALAAQAEAAACABQgCgBgEABQgIAAgCAAQAJAAAKABAlOxAQgsAjgdAzQgQAcgIAbQgDACgBADQgBAEgBAEQgDALgGATQgMAogIARQgGAPgUAVQgTAUgBACQgCADgDADQAJAGAIAIQADADAEAEQAUAUAPAVAmcn3QgOBXhDBCQgSASgTAPQgJAGgJAGQAHBTAEAhQABAJAABwQAAA4AAAMQAAAAAAABQAAADAAADQgCApgIAcQgVBUhMAAQgNAAgMgFQglgNgmg2QgvhDgPhNQgRhagHhFQgFgxgEgiQgLgHgLgHQgBgBgBAAQgCgCgCgBQgBgBgCgBQgGgEgGgFQgMgKgLgLQgBgBAAgBQhVhVAAh5QAAgLAAgLAicgFQAAAKg1gWQg1gWgUgTQgsgjgSgPQgggagXgfQgVgagXgjQgQgZgPgPQgFgGgogjQgGgFgFgFAokkxQhDAphUAAQhNAAg+giAyjjAQgCAAAAAAQgpAAgmgVQgxgaAAgsQAAhDBfhPQBEg5CHhLQAOgJAPgIAyjjAQAAAAABAAQgBAAgCAAQAAgBABAAQAAABABAAgAtxlHQgKAMgNAMQgdAdgxAjQgJAHgXAKQgZAMgbAJQgYAJg0AAQgmAAgHAAAoFENQAAgGAAgCQAAgDgIgFQgYgShiglQgRgHgPgFQAAAAAAAAQhegjgVgDQg7gGhcgEQhpgDgzgDQi4gJhagmQA1AyA/AfQAsAVBQAZQBNAYA1ALQAhAGBIAMQAvAICHAIQBCAEA5ADQAAABgBABQgCABgEgBQgGAAgEAAQAJAAAHAAQANAAAMAAQApgBALgBIAAgBQAAgEABgIQABAGABAGQAbCWBEDBQA6CiA+CBQABACABABQACAFADAFIAAADQgDgFgCgIAoFDzQAGAEAHAEQAYAOAVALQADACAEACQAAAAAAAAQAZAQA9AqQAJAGASAZQAWAfAaAZQADADAWATQAYAWARAQQASASAJAfQADALACAMQACALADAzQAFgRAEgbQAEgeAAgTQAAgygDhoQgDhoAAh4QAFghAHggQAMg4AKgHIABAAQABgBABAAQAgAAAhBBQABACABADIAAAAQAFAMAGANQABABAAABQADAHACAHQAXA7AXBZQASA8A5CsQAvCYALBQIABABQAAAEABAEAoFENQgCACABAEQAAgBAAAAQAAgDABgCgAFInkQg8AMgUADQgdAFgkAAQgjAAgFgBQgTgGgpgJAAGnRQgCAEgBAFQgCAGgBAHAAAm7QgBADAAADQgXBSgMBgQgDAXgCAZQgCAXgEBGQAAAGgBAGAgwn6QgoAdgiAKQgfAJg5ABAmRnyQANAHAUAKQAeAQAVAOQA+AsAtBKQARAcAcAkQAlAwAFAIQAhAuAJAvIAAAAQABAFAAAEQACANAAANQAAAEAAAEQAAAIgBAHQgBAIgBAHQgEAUgKAIQgPAOguAAQADAAgBACQgBAAAAABIAAAAQgBgBAAgCAgxhXQAAACAAACQAAAAgBABQAAADAAADAgwhoQgBAHAAAJAgyhLIAAAAQAAAIgBAHQgFBMgFA7QgBABAAABIAAABQAAAAAAABQgBADgBADQgBAGAAAHQgBAGAAAKAg+BOQAAAAAAABIAAAAQAAABAAABQAAABAAAAACMgGQABABABAAQACABAAgCQgCAAgCAAgAmew7QAPgEAJgBAi8JrQAAABABABQAAAJABAKQACAhgBAsQAAAygBARQABACABAHQAKA2BGFhQBBFOAAATQAAAHgCAOQgCARgEAHAkmOfQAAADABAEQADAXAHAkQAKAuAGApQADAWAXA8QAXA9AFAbQABAGAYBCQAYBBAFAMQADAHAaBFQARAtAQARAB1LnQgBBFABBtQAABEgCAyQgBAOgBAMQgJCIgyCvIgBAAQAAACAAADIAAAAQgBABAAAAQAAABAAAAAA0VmQABgBAAAAIAAgBQAAABAAAAAA2VgIAAABQAAABgBACIAAAAAA0VoQgBABAAACIAAACQAAgCABgDgAA0VmQAAABAAABIAAgBIAAABQgFAjgQBOQgTBZgMAmAFNScQgEAHgGALQAAAAAAABQgLATgPAdQgpBOggA2QhJB6hCBIQgWAYgVATQgJAIgKAHQATAAAKgEQAKgEAHgIQALgTAOgPQAGgHAHgHAFYSIQgDAFgIAPAAWZfIAAAAQABgCACgCAAWZfIAAAAQAAgCgBAAQAAABgBAAQgBABgCAAQADAAACAAQAAAAAAAAIABAAIAAAAQAAAAgBABIAAgBAhfYBQACALAKATQAJATAIAIQAFAHAHAFQAUASAaAHQADABADABIABAAQAHACAHAAQAIgBABgDAzMt/IABAAQACAAAAAB");
	this.shape_1.setTransform(444.875,156.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheJDIgCgBQgPgIgXgTIgOgIIgDgCIgBgBIgJgGQgPgVgTgTQgOgOgFgKIgPgdQgOgagBgKIgJg+IgBgDIAAgJIgBgdQAAgbADgYIAGgxQgCAIgQAJIgSAJQgDACgHAKQgGAIgNAHQgzAZggAEQgLABgNAAIgCAAIgZgBQglAAgNgCQgdgGgFgRQgGgVgFgaQgGghAAgWQAAgUAEgUIADgIIABgFQAIgbAQgcQAegyAsgkIgGgGQgRABgZAEIgIABQgPABgSAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgEABIAGAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAQgEACgNgCQgVgEgYgLQgvgWgNgZIgCgHIgBgCQgCgGABgDIAAgCQAAgPATghIAFgGQASgeAOgGIAsgVIAFgCQAjgQATgHQAjgNAdAAIASAFQALADATABIABAAIADAAIAGgCIgCgeQAAgVAIglQAHghAHgSQANggAKgRQAQgdARgIQAhgRAkgUQAggUAKgEQATgJATgDQAVgEAkAAIAngBQAQAAAIABQANADAkAeQAiAbALALIAWATIAPgVQAWghAcgWQAKgIAigOQAngQAUAAQAWgBAwAYQApAVAGAIIAPAdIATAnQAMAZABAMIAAAbQAAAfgFAeQgIAegCARQAYgLAfgWQAegPAvABQBBAAAgA4QAaAsADBHIAAAAIABAWQAABUghAxQgOAWgkAeIgcAWQgXAUgSANQgfAXhGAgQgKAFgXgBIgtgDIgCACIAAAAQAyAwATAeQAQAZAHAcQg2BLAABgIABAaIg2AYIgHADIgBAAIgBABIAAAAIgBAAIgBAAIAAAAIAAAAIgBAAIgBAAIAAABIgBAAIAAAAIgBAAIgFACIg1AEIgGAAQgNgDgMgGQgPgHgNgOQgPgQgYgqIgDAAIgcAsQgNAWgQAVQgSAWggAPIgjAMIgSAGIgBAAIgZAFIggAHQgFAAgJgEgAh5iHQg7A8AABSQAAAkAKAfQAPAqAiAiQA6A6BRACIACAAQBUAAA7g8QAdgdAPgjQAPgkAAgrQAAhSg7g8QgbgbgggOQgmgRguAAQhSAAg7A6g");
	this.shape_2.setTransform(455.545,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAD4DF").s().p("ABsLiQglgOgmg2QguhDgPhNQgRhbgHhFIgJhTQA9AiBNAAQBUAABDgpQAHBUAEAgQABAKAABwIAABDIAAACIAAAGQgCApgIAcQgVBUhMAAQgNAAgMgEgAI3I1Qg1gXgUgSIg+gzQgggagXgeQgVgbgXgjQgQgYgPgQQgFgGgogiIgLgLQATgOASgSQBDhCAOhYIAKAFIABABIAhARQAeAPAVAPQA+AsAtBKQARAcAcAkQAlAvAFAJQAhAuAJAuIAAABIABAIQACAOAAANIAAAIIgBAPIgCAOQgEAUgKAJQgPANguAAQAAAEgGAAQgLAAgkgPgAmaGFIgBAAIgBABQgpgBgmgUQgxgaAAgsQAAhDBfhPQBEg5CHhMIAdgQIAAAWQAAB5BVBVIABACQALALAMAJQgKANgNAMQgdAcgxAkQgJAGgXALQgZALgbAKQgYAIg0ABIgtgBgAIuB8IgBAAQg2AAgcgHIgMgCIgJgCQgOgEgGgCQgigOgZgJIgBgBIgKgFQAFgZAAgbQAAhcgzhIQALgDAFAAQAQAAANgCQAagFAQgBQAPgCAqAAIACAAIAaADIAYgBQAcAAAKACQAHABAjALIACADIAEgBQAEAAAJADIAKADIAGAAIAAACIAJA+QACAKAOAbIAPAbQAEAKAOAOQATATAPAVIAKAGIgDAFQgoAdgiAKQgfAJg5AAgAnYAHQgxgIgSgFQgqgKgpgRIg1gYQgSgJgQgeQgVgkAAgoQAAglARgXQAQgWAqgWQASgKALgHQAJgEAvgJQAbgFAxgCIAlAAIAAAAIgKABIATAAQAqACAxAHQBPAMAjAUIBMAjQAwAWASALQgOALgNANQhMBMgIBoIgnAEIg4AFQgVACgsABIgvABIgBAAIgBABQgIAAgrgIgABNkJQhiAAhMA6QgXgTgYgqQgOgZgdhCQgagwgUg1QgohnAAhRQAAgrAZgZQAegdBDAAQA2AAAxBEQAzBHANBlQAIA+AYBJIAdBYIADgBQAJhOAGgfQARhXAghDIAEgIIADgGIgCgBIAFgJQAGgOAFgJQAUggArgdIAUANIgEAGQgUAiAAAOIAAACQAAADACAGIABADIACAGQAMAaAwAWQAYAKAUAEQANACAFgCIALABIAYgGIAIgBQAagEAQgBIAGAHQgsAjgdAzQgQAcgIAbQgDABgBAEIgCAIIgJAeQgMAngIASQgGAOgUAWIgUAWIgFAFQhNhAhpAAgAFVlnQABgEADgBIgCAFgAFZlsIAAAAg");
	this.shape_3.setTransform(367.175,98.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgCDKQhSgBg6g6QgigjgOgqQgLgeAAgkQAAhTA7g7QA7g7BTAAQAuAAAmARQAgAPAbAbQA7A7AABTQAAArgPAjQgPAjgdAeQg7A7hUAAIgCAAg");
	this.shape_4.setTransform(457.575,51.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8DBF20").s().p("AB7M5IgBAAIgGgCQgagHgUgSIgMgMQgIgIgJgTQgKgTgCgLIgCAAQgQgRgQgtIgdhMQgFgMgYhBQgYhCgBgGQgFgbgXg9QgXg8gDgWQgGgpgKguQgHgkgDgXIgBgHIABAHIgBAAIgFgKIgCgDQg+iAg6iiQhEjBgbiWIgCgMIAOgYIAtAZIAHAEIABAAIBVA6QAJAGASAZQAWAfAaAZIAZAWIApAmQASASAJAfIAFAXQACALADAzQAFgRAEgbQAEgeAAgTQAAgygDhoQgDhoAAh4QAFghAHggQAMg4AKgHIABAAIACgBQAfAAAhBBIACAFIAAAAIALAZIABACIAFAOQAXA7AXBZQATA8A5CsQAvCYALBQIgCABIAACxQAABEgCAyIAEAAQAthFArhuQAehMAriGQA5ivAOgoQAoh1AlhJIAAgCIACAAIAHgCIAGACQgGAFgEABQAEgBAGgFQANgMAYgiQAZgiANgWIAEgGIACgCIAvgmQAtgjAdgTQBKguA/gKQAQgDAQAAQAbAAAyAXQAaALAdAPQAOAFAgAjQAeAfAfAoQApA1ATCFQANBSAAA8IgZAQQgQgZgaggQgtg3gugrQgXgWhdg8QhthHgdAAQg1AAhfBNQgfAaggAeQgYAXgHAJIgJAAIgBgMQgBgOgCgJIgEgSIgCgeQgCgOgIgDQAIADACAOIACAeIAEASQACAJABAOIABAMIgBAjQAAD4gZDHQghEKhHBZIALgUIgLAUIgOAPIgCABIgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIABgIIABgKIgBAKIgBAIQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAIABAAIACgBIAEADIAAABIgaAwQgpBOggA2QhJB6hCBIQgWAYgVATIgTAPIAAAAIgBAAIADgEIgDAEIAAAAIAAAAIAAAAIgBgCIgBABIgDABIAFAAQgBADgIABQgHAAgIgCgACcKxQgTBZgMAmQAMgmAThZQAQhOAFgjQgFAjgQBOgABTL+QgCARgEAHQAEgHACgRIACgVQAAgThBlOIhPmWIgCgJIABhDIABgYQAAgdgCgYIgBgTIgBgCIABACIABATQACAYAAAdIgBAYIgBBDIACAJIBPGWQBBFOAAATIgCAVgACwJDIAAACIABgFIgBADgACyI9IAAAAIgBABIAAACIAAAAIACgHIAAgBIgBAAIAAAFgADuEBQgJCIgyCvQAyivAJiIIACgaIgCAagAnXoFIABgCIh7gHQiHgIgvgIIhpgSQg1gLhNgYQhQgZgsgVQg/gfg1gyQBaAmC4AJICcAGQBcAEA7AGQAVADBeAjIAAAAIAgAMQBiAlAYASQAIAFAAADIAAAIQgCACABAEIgBAMIAAABIg0ACIgZAAgAmJoUIAAAAg");
	this.shape_5.setTransform(432.375,237.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E378AE").s().p("AtrEXIgWgNIgCgBIgEgDIgDgCIgMgKQgMgJgLgLIgCgCQhUhVAAh5IAAgWIABgCQAHhoBMhNQAOgNAOgLIAEgDQBLg6BkgBQBoAABOBBIAQANIAIAIQAUATAPAWQAzBIgBBcQABAbgFAaQgPBXhCBCQgSASgTAOIgSANQhDAphUgBQhNABg+gjgAIJDDQhDhEgPhXIgBgGQgDgMAAgNIgBgYQAAhhA2hLQAOgUATgSQA6g6BJgTQAlgKAqAAQBZAABGAtIAVAPQAQANAPAOQBWBXAAB7IgBAcIgBAPQgNBfhHBIQgkAjgpAUQgaANgcAJQgmAJgqABQh7gBhXhWg");
	this.shape_6.setTransform(448.6,98.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCD6E0").s().p("AjjK8QgQgLgIgaQgHgXABgXQABgJgDgQIgFgXQgDgRAAgIIAAgjQAAgzAGhCQAGhBAIgwIgDgDQgKANgSAdIggA0QgaAogTAQQgbASgaAWQgLAKguAdQguAbgMAMQgmAkgWALQgaAOgnABIgDAAIgBAAIgGgBQgMgDgLgEQghgNAAgYQAAglAihKQAehDAog9IBFhtQAog7AbgPIAIgEIAEgCIABAAIgDgFIhQAPQgdAEgjAAQgkAAgEAAQgTgGgpgJIASgFIAkgNQAggOASgXQAQgVANgVIAcgrIADAAQAYApAPAQQANANAPAHQAMAHANACQAKACAKAAQATAAAUgFIAFgBIAFAAIABAAIACAAIABAAIAIgBIAIATIAFgCIAqgQQAQBXBDBEQBXBWB7ABQApgBAmgJIgEAWIgRBjQgVB0gYA0IAAACQg+AJhKAvQgeASgtAkgAmIBnIgaALIgrATIArgTIAagLIAJgDIAAAAIANgFIAHgDIgHADIgNAFIAAAAIgJADgAECGiQgSgMgYgXIgwgrQgLgKgPgPIgdgcIgDgDQApgUAjgjQBIhIANhfIAbALQA2AYAoAjIApAhQAkAfAFAJQAMAaAHAbQAJAeAAAVQAAAZgKAWQgGAPgXAlQgKAPgnANQgfALgJgBQhHAAgtgcgAEQAvIABgdQAAh6hXhXQgOgOgQgNQAqgXAggOQBWgkBwgCQAAACAFgBIAGgBIgLAAQAAgFAsAEQAzAFAwANQCQAmAABOQAAAXgKAcQgPAtgdAQQgnAWgUAJQgWAJgqAJQgkAIgWADIhkANIgzAMIgjAHIgSADIgEAAgAkhjNQgTgfgygwIABAAIABgBIAtACQAXABAKgEQBGghAfgWQASgNAXgUIAcgXQAkgdAOgXQAhgyAAhTIgBgXIAAAAQAUgPAqguQAtgoArAAQBBAAAfAmQAcAiAABEIgBAwIAAAbQAAAPgBAHQgFAVgEANIgKAdQgFARgMAWQgJASgIAdIg7BXQhGgthXAAQgqAAglAKIgBgMQgEgcAAgOIAAgRIACgMIACgMIAAgCIgBgRIAAgKIAAAKIABARIAAACIgCAMIgCAMIAAARQAAAOAEAcIABAMQhJATg6A6QgTASgOAUQgHgbgQgZg");
	this.shape_7.setTransform(524.125,95.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(291.6,-9.6,306.6,331.90000000000003);


// stage content:
(lib._30sFinal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,210,269,351,429,677];
	this.streamSoundSymbolsList[0] = [{id:"AmongUsThememp3cutnet",startFrame:0,endFrame:210,loop:1,offset:0}];
	this.streamSoundSymbolsList[210] = [{id:"heartbeat21649",startFrame:210,endFrame:269,loop:1,offset:0}];
	this.streamSoundSymbolsList[269] = [{id:"CarelessWhisperdjlunatiquecommp3cutnet",startFrame:269,endFrame:351,loop:1,offset:0}];
	this.streamSoundSymbolsList[351] = [{id:"AmongUsThememp3cutnet",startFrame:351,endFrame:429,loop:1,offset:0}];
	this.streamSoundSymbolsList[429] = [{id:"_20190225__Poisonous__David_Fesliyanmp3cutnetAudioTrimmercomwav",startFrame:429,endFrame:677,loop:1,offset:0}];
	this.streamSoundSymbolsList[677] = [{id:"VictoryImpostormp3cutnet",startFrame:677,endFrame:720,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("AmongUsThememp3cutnet",0);
		this.InsertIntoSoundStreamData(soundInstance,0,210,1);
	}
	this.frame_210 = function() {
		var soundInstance = playSound("heartbeat21649",0);
		this.InsertIntoSoundStreamData(soundInstance,210,269,1);
	}
	this.frame_269 = function() {
		var soundInstance = playSound("CarelessWhisperdjlunatiquecommp3cutnet",0);
		this.InsertIntoSoundStreamData(soundInstance,269,351,1);
	}
	this.frame_351 = function() {
		var soundInstance = playSound("AmongUsThememp3cutnet",0);
		this.InsertIntoSoundStreamData(soundInstance,351,429,1);
	}
	this.frame_429 = function() {
		var soundInstance = playSound("_20190225__Poisonous__David_Fesliyanmp3cutnetAudioTrimmercomwav",0);
		this.InsertIntoSoundStreamData(soundInstance,429,677,1);
	}
	this.frame_677 = function() {
		var soundInstance = playSound("VictoryImpostormp3cutnet",0);
		this.InsertIntoSoundStreamData(soundInstance,677,720,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(210).call(this.frame_210).wait(59).call(this.frame_269).wait(82).call(this.frame_351).wait(78).call(this.frame_429).wait(248).call(this.frame_677).wait(43));

	// Dialogue
	this.text = new cjs.Text("Will you go on a date with me Imp?", "45px 'Times New Roman'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 275;
	this.text.parent = this;
	this.text.setTransform(232.75,253.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("AcWAAQAAHJoUFCQoTFDrvAAQruAAoUlDQoTlCAAnJQAAnHITlDQIUlDLuAAQLvAAITFDQIUFDAAHHg");
	this.shape.setTransform(229.85,320.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A0BMLQoTlDAAnIQAAnHITlEQITlCLuAAQLvAAITFCQIUFEAAHHQAAHIoUFDQoTFDrvAAQruAAoTlDg");
	this.shape_1.setTransform(229.85,320.7);

	this.text_1 = new cjs.Text("Yes! I've always liked you Crew!!", "bold 45px 'Times'", "#FF0000");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 289;
	this.text_1.parent = this;
	this.text_1.setTransform(787,237.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A0BMLQoUlCABnJQgBnHIUlDQITlDLuAAQLvAAITFDQIUFDAAHHQAAHJoUFCQoTFDrvAAQruAAoTlDg");
	this.shape_2.setTransform(783.25,314.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#323232").ss(1,1,1).p("AcWAAQAAHJoUFCQkWCqlUBQQkzBJllAAQlkAAkzhJQlUhQkXiqQoTlCAAnJQAAnHITlDQIUlDLuAAQLvAAITFDQIUFDAAHHg");
	this.shape_3.setTransform(278.2,299.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqXQFQlThQkYiqQoSlDgBnIQABnHISlEQIUlCLuAAQLvAAITFCQITFEAAHHQAAHIoTFDQkWCqlUBQQkzBJllAAQlkAAkzhJg");
	this.shape_4.setTransform(278.2,299.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#323232").ss(1,1,1).p("AcWAAQAAHIoUFDQkWCqlTBQQk0BJllAAQlkAAkzhJQlThQkXiqQoTlDAAnIQAAnHITlDQITlDLuAAQLvAAITFDQIUFDAAHHg");
	this.shape_5.setTransform(631.55,355.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AqXQFQlThRkYipQoSlCgBnJQABnIISlCQIUlDLuAAQLvAAITFDQITFCAAHIQAAHJoTFCQkWCplTBRQk0BJllAAQlkAAkzhJg");
	this.shape_6.setTransform(631.55,355.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#323232").ss(1,1,1).p("AcWAAQAAHIoUFDQkWCplTBRQk0BJllAAQlkAAkzhJQlUhRkXipQoSlDAAnIQAAnIISlDQEOikFIhQQE8hOFwAAQFyAAE8BOQFGBQEOCkQIUFDAAHIg");
	this.shape_7.setTransform(660.9,346.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AqXQFQlThRkYipQoTlCAAnJQAAnHITlDQEOikFIhRQE7hOFxAAQFyAAE8BOQFGBREOCkQITFDAAHHQAAHJoTFCQkXCplSBRQk0BJllAAQlkAAkzhJg");
	this.shape_8.setTransform(660.9,346.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#323232").ss(1,1,1).p("AcVAAQAAHJoTFCQkXCqlTBQQkzBJllAAQlkAAkzhJQlThQkYiqQoSlCAAnJQAAnIISlDQEOikFHhQQE9hOFwAAQFxAAE9BOQFGBQEOCkQITFDAAHIg");
	this.shape_9.setTransform(437.45,112.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AqYQFQlThRkWipQoUlCABnJQgBnIIUlDQEOikFHhQQE7hOFxAAQFyAAE7BOQFHBQEOCkQITFDABHIQgBHJoTFCQkXCplSBRQk0BJllAAQlkAAk0hJg");
	this.shape_10.setTransform(437.45,112.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:229.85,y:320.7}},{t:this.text,p:{x:232.75,y:253.3,text:"Will you go on a date with me Imp?",font:"45px 'Times New Roman'",color:"#FF0000",lineHeight:51.85,lineWidth:275}}]},210).to({state:[{t:this.shape_2},{t:this.shape,p:{x:783.25,y:314.45}},{t:this.text_1},{t:this.text,p:{x:669.1,y:496.2,text:"",font:"45px 'Times-Bold'",color:"#FFFFFF",lineHeight:47,lineWidth:100}}]},59).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.text,p:{x:288.15,y:231.8,text:"Great!! Lets go have dinner in the Reactor!!",font:"45px 'Times New Roman'",color:"#FF0000",lineHeight:51.85,lineWidth:289}}]},38).to({state:[]},44).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.text,p:{x:639.55,y:278.35,text:"Wait.. I have something to tell you..",font:"45px 'Times New Roman'",color:"#FF0000",lineHeight:51.85,lineWidth:289}}]},8).to({state:[]},45).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.text,p:{x:668.9,y:269.7,text:"I'm.....",font:"80px 'Times New Roman'",color:"#FF0000",lineHeight:90.6,lineWidth:289}}]},25).to({state:[{t:this.text,p:{x:560.15,y:276.7,text:"THE IMPOSTER",font:"150px 'Helvetica'",color:"#FF0000",lineHeight:152,lineWidth:874}}]},72).to({state:[{t:this.text,p:{x:663.75,y:30.25,text:"COME HERE",font:"150px 'Helvetica'",color:"#FF0000",lineHeight:152,lineWidth:784}}]},37).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.text,p:{x:444.75,y:56.6,text:"WAIT.. THE IMPOSTER??",font:"53px 'Times New Roman'",color:"#FF0000",lineHeight:60.7,lineWidth:506}}]},38).to({state:[]},37).to({state:[{t:this.text,p:{x:528.8,y:0.9,text:"So.. WHOS NEXT",font:"150px 'Helvetica'",color:"#FF0000",lineHeight:152,lineWidth:1015}}]},70).to({state:[{t:this.text,p:{x:485.15,y:83.35,text:"ANIMATION: JOHNATHAN CHEN\nConcept: Among Us/Innersloth\nMusic:  Among uS/  David Fesliyan\n\n\nLOVE AMONG US",font:"43px 'Helvetica'",color:"#FF0000",lineHeight:45,lineWidth:847}}]},28).wait(9));

	// Foreground
	this.instance = new lib.Flowers("synched",0);
	this.instance.setTransform(533.55,558.85,0.4687,0.6515,0,43.9913,0,445.1,156.5);

	this.instance_1 = new lib.uwu();
	this.instance_1.setTransform(378.1,364,0.4418,0.4606,0,10.9224,0);

	this.instance_2 = new lib.uwu();
	this.instance_2.setTransform(379.1,369.8,0.4418,0.4606,0,10.9224,0);

	this.instance_3 = new lib.imageremovebgpreview3();
	this.instance_3.setTransform(242.3,145.2,0.4367,0.4367,-30.4453);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleX:0.4418,scaleY:0.4606,skewX:10.9224,skewY:0,x:378.1,y:364}},{t:this.instance,p:{regX:445.1,regY:156.5,scaleX:0.4687,scaleY:0.6515,skewX:43.9913,x:533.55,y:558.85,skewY:0}}]},153).to({state:[{t:this.instance,p:{regX:444.9,regY:156.6,scaleX:0.4828,scaleY:0.5651,skewX:-29.297,x:736.05,y:612.65,skewY:0}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.3866,scaleY:0.403,skewX:-10.9215,skewY:180,x:861.65,y:411.05}}]},38).to({state:[{t:this.instance,p:{regX:444.9,regY:156.6,scaleX:0.4828,scaleY:0.5651,skewX:-29.297,x:736.05,y:612.65,skewY:0}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.3866,scaleY:0.403,skewX:-10.9215,skewY:180,x:861.65,y:411.05}}]},58).to({state:[{t:this.instance,p:{regX:444.9,regY:156.6,scaleX:0.4828,scaleY:0.5651,skewX:29.297,x:847.35,y:588.7,skewY:180}}]},38).to({state:[]},15).to({state:[{t:this.instance_3}]},102).to({state:[]},25).wait(291));

	// Backround
	this.text_2 = new cjs.Text("On a sunny space day... Crew finally gets the courage to ask Imp on a date", "bold 64px 'Times'", "#FF0000");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 66;
	this.text_2.lineWidth = 827;
	this.text_2.parent = this;
	this.text_2.setTransform(467.4,147.35);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(271.9,-60.65,0.5,0.5);

	this.instance_5 = new lib.Bitmap6();
	this.instance_5.setTransform(-140,-187,1.2833,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{x:-140,y:-187,scaleX:1.2833,scaleY:1}},{t:this.instance_4},{t:this.text_2}]}).to({state:[{t:this.instance_5,p:{x:-139,y:-189,scaleX:1.2833,scaleY:1}}]},73).to({state:[{t:this.instance_5,p:{x:-833,y:-1097,scaleX:3.0194,scaleY:2.3529}}]},47).to({state:[{t:this.instance_5,p:{x:-94,y:-120,scaleX:1.2363,scaleY:0.9634}}]},591).wait(9));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-353,-777,2515.3,2108.2);
// library properties:
lib.properties = {
	id: '46C1FE4F90BD409E9A9594D22757A46A',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/30sFinal_atlas_1.png", id:"30sFinal_atlas_1"},
		{src:"sounds/_20190225__Poisonous__David_Fesliyanmp3cutnetAudioTrimmercomwav.mp3", id:"_20190225__Poisonous__David_Fesliyanmp3cutnetAudioTrimmercomwav"},
		{src:"sounds/AmongUsThememp3cutnet.mp3", id:"AmongUsThememp3cutnet"},
		{src:"sounds/CarelessWhisperdjlunatiquecommp3cutnet.mp3", id:"CarelessWhisperdjlunatiquecommp3cutnet"},
		{src:"sounds/heartbeat21649.mp3", id:"heartbeat21649"},
		{src:"sounds/VictoryImpostormp3cutnet.mp3", id:"VictoryImpostormp3cutnet"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['46C1FE4F90BD409E9A9594D22757A46A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;