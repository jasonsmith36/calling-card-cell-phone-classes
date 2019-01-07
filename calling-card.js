class CallingCard {
    constructor(costPerMinute) {
       this.costPerMinute = costPerMinute;
       this.minutesRemaining = 0;
      }

      addDollars(amountToAdd){
          let cents = amountToAdd * 100;
          let minutes = cents / this.costPerMinute;

          if(minutes % 2 === 0){
              this.minutesRemaining = minutes;
          }else{
              Math.floor(minutes);
          }
      }

      getRemainingMinutes(){
        return this.minutesRemaining;
      }

      useMinutes(callLengthInMin){
        if( this.minutesRemaining - callLengthInMin < 0){
            this.minutesRemaining = 0;
        }else{
           this.getRemainingMinutes -= callLengthInMin;
        }
      }
    
      
    
}