class CellPhone {
    constructor(callingCard){
        this.callingCard = callingCard;
        this.isTalking = false;
        this.currentCall= {
            lengthOfCall: 0,
            phoneNumber: '',
            callCutOff: false,
        }

        this.previousCalls = [];
    }

    call(phoneNumber){
        this.currentCall.lengthOfCall = 0;
        this.currentCall.phoneNumber = phoneNumber;
        this.currentCall.callCutOff = false;
    }

    isTalking(){
        return this.currentCall.lengthOfCall > 0 ? true : false;
    }

    tick(){
        this.currentCall.lengthOfCall++;
        this.callingCard.minutesRemaining--;

        if(this.callingCard.minutesRemaining === 0) {
            this.currentCall.callCutOff = true;
            this.endCall();
        }
        
    }

    endCall(){
        this.previousCalls.push(this.currentCall);
        this.currentCall = {};

    }

    getHistory(){
        let callHistory = "";

        this.previousCalls.forEach(phoneCall => {
            let {phoneNumber, lengthOfCall, callCutOff} = phoneCall;
            let singularOrPlural = lengthOfCall <= 1 ? 'minute' : 'minutes';
            let callWasCutOff = callCutOff ? 'cut off at' : '';

            callHistory += `${callWasCutOff} ${phoneNumber} (${lengthOfCall} ${singularOrPlural}),`
        });

        return callHistory.slice(0, callHistory.length-1);
    }
}