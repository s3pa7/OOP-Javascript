function GSM(model) {

    var _model = model;
    var _hasSimCard = false;
    var _simMobileNumber = 0;
    var _outgoingCallsDuration = 0;
    var _lastIncomingCall = 0;
    var _lastOutgoingCall = 0;

    this.getModel = function () {
        return _model;
    };

    this.setModel = function (modelSet) {
        _model = modelSet;
    };

    this.getHasSimCard = function () {
        return _hasSimCard;
    };

    this.setHasSimCard = function (hasSimCardSet) {
        _hasSimCard = hasSimCardSet;
    };

    this.getSimMobileNumber = function () {
        return _simMobileNumber;
    };

    this.setSimMobileNumber = function (simMobileNumberSet) {
        _simMobileNumber = simMobileNumberSet;
    };

    this.getOutgoingCallsDuration = function () {
        return _outgoingCallsDuration;
    };

    this.setOutgoingCallsDuration = function (outgoingCallsDurationSet) {
        _outgoingCallsDuration = outgoingCallsDurationSet;
    };

    this.getLastIncomingCall = function () {
        return _lastIncomingCall;
    };

    this.setLastIncomingCall = function (lastIncomingCallSet) {
        _lastIncomingCall = lastIncomingCallSet;
    };

    this.getLastOutgoingCall = function () {
        return _lastOutgoingCall;
    };

    this.setLastOutgoingCall = function (lastOutgoingCallSet) {
        _lastOutgoingCall = lastOutgoingCallSet;
    };
}


GSM.prototype.insertSimCard = function (simMobileNumber) {
    var myRegexp = /08[789]\d{7}/;
    var match = myRegexp.exec(simMobileNumber);
    if (match) {
        this.setSimMobileNumber(simMobileNumber);
        this.setHasSimCard(true);
    }

}

GSM.prototype.removeSimCard = function () {
    this.setHasSimCard(false);
}

GSM.prototype.call = function (objectGSM, objectCall) {
	debugger;
    if ((this.getHasSimCard() == true) && (objectGSM.getHasSimCard() == true)) {
        if (this.getSimMobileNumber() == objectGSM.getSimMobileNumber()) {
            console.log("ednakvi nomera");
            return false;
        } else if (!objectCall.getDuration()) {
            throw new Error("The duration must be between 0 and 120.");
        }
    }

    this.setLastOutgoingCall(objectCall.getDuration());
    objectGSM.setLastIncomingCall(objectCall.getDuration());
    this.setOutgoingCallsDuration(this.getOutgoingCallsDuration() + this.getLastOutgoingCall());

}

GSM.prototype.outgoingCallsDuration = function () {
    return this.getOutgoingCallsDuration();
}

GSM.prototype.getSumForCall = function (objectCall) {
    return objectCall.getPriceForAMinute() * this.outgoingCallsDuration();
}

GSM.prototype.printInfoForTheLastOutgoingCall = function () {
    return "Duration of last outgoing call: " + this.getLastOutgoingCall();
}

GSM.prototype.printInfoForTheLastIncomingCall = function () {
    return "Duration of last incoming call: " + this.getLastIncomingCall();
   
}
GSM.prototype.getInfo = function () {
    console.log("Does " + this.getModel() + " have SIM card: " + this.getHasSimCard());
    console.log(this.getModel() + "'s mobile number is: " + this.getSimMobileNumber());
    console.log(this.getModel() + "'s last outgoing call's duration is: " + this.getLastOutgoingCall());
    console.log(this.getModel() + "'s last incoming call's duration is: " + this.getLastIncomingCall());
    console.log(this.getModel() + "'s sum for all outgoing calls so far is: " + this.getSumForCall(call_));


}