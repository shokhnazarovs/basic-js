const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity = -1) {

    if(typeof(sampleActivity) != 'string')
        return false;

    sampleActivity = parseFloat(sampleActivity);

    if(isNaN(sampleActivity) || sampleActivity === -1){
        return false;
    }

    if(sampleActivity > 0 && sampleActivity <= 15){
        let age = Math.log(sampleActivity / MODERN_ACTIVITY) / (-0.693 / HALF_LIFE_PERIOD);
        return Math.ceil(age);
    } else{
        return false;
    }
};
