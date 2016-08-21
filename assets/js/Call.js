/**
 * 
 */
function Call(caller, receiver, duration){
	var _priceForAMinute = 2.40;
	var _caller = caller;
	var _receiver = receiver;
	var _duration = duration;
	
	this.getPriceForAMinute = function(){
		return  _priceForAMinute;
	}
	this.getCaller = function(){
		return _caller;
	}
	this.setCaller = function (newCaller) {
		_caller  = newCaller;
	}
	this.getReceiver = function(){
		return _receiver;
	}
	this.setReceiver = function (newReceiver) {
		_receiver  = newReceiver;
	}
	this.getDuration = function(){
		return _duration;
	}
	this.setDuration = function (newDuration) {
		if(newDuration < 0 || newDuration > 120){
			alert("Error duration");
		}else {
			_duration  = newDuration;
		}
	}
	
	
	
}