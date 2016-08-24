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

    this.setModel = function (setModel) {
        _model = setModel;
    };

    this.getHasSimCard = function () {
        return _hasSimCard;
    };

    this.setHasSimCard = function (setSimCard) {
        _hasSimCard = setSimCard;
    };

    this.getSimMobileNumber = function () {
        return _simMobileNumber;
    };

    this.setSimMobileNumber = function (setSimMobilNumber) {
        _simMobileNumber = setSimMobilNumber;
    };

    this.getOutgoingCallsDuration = function () {
        return _outgoingCallsDuration;
    };

    this.setOutgoingCallsDuration = function (setOutGoingCallsDuration) {
        _outgoingCallsDuration = setOutGoingCallsDuration;
    };

    this.getLastIncomingCall = function () {
        return _lastIncomingCall;
    };

    this.setLastIncomingCall = function (setLastIncomingCall) {
        _lastIncomingCall = setLastIncomingCall;
    };

    this.getLastOutgoingCall = function () {
        return _lastOutgoingCall;
    };

    this.setLastOutgoingCall = function (setLastOutgoingCall) {
        _lastOutgoingCall = setLastOutgoingCall;
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
    var flag = this.getHasSimCard() ? "yes" : "no";
    console.log("Does " + this.getModel() + " have SIM card: " + flag);
    console.log(this.getModel() + "'s mobile number is: " + this.getSimMobileNumber());
    if (this.getLastIncomingCall()) {
        console.log(this.getModel() + "'s last incoming call's duration is: " + this.getLastIncomingCall() + " minutes");
    }
}

GSM.prototype.call = function (objectGSM, duration) {
    if ((this.getHasSimCard() == true) && (objectGSM.getHasSimCard() == true)) {
        if (this.getSimMobileNumber() == objectGSM.getSimMobileNumber()) {
            console.log("ednakvi nomera");
            return false;
        }
    }
    var call_ = new Call(this, objectGSM, duration);
    this.setLastOutgoingCall(call_.getDuration());
    objectGSM.setLastIncomingCall(call_.getDuration());
    this.setOutgoingCallsDuration(this.getOutgoingCallsDuration() + this.getLastOutgoingCall());

    console.log("The receiver of " + this.getModel() + "'s last outgoing call is: " + objectGSM.getSimMobileNumber());
    this.getInfo();
    console.log(this.getModel() + "'s last outgoing call's duration is: " + this.getLastOutgoingCall() + " minutes");
    console.log(this.getModel() + "'s sum for all outgoing calls so far is: " + this.getSumForCall(call_) + " BGN");
}