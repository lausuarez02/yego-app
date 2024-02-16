export const getAmountOfBattery = battery => {
    if(battery > 80){
        return 'full'
    }else if(battery > 20 && battery < 80){
        return 'half'
    }
    return 'empty'
   }