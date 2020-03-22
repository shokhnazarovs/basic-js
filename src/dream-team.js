module.exports = function createDreamTeam(list = [1]) {
    let val;
    try{
        val = list[0];
    }
    catch(err){
        return false;
    }

    if(val === undefined)
        return false;

    let name = [];

    for(let i=0; i< list.length; i++){
        if(typeof(list[i]) === 'string'){
            for(let j=0; j<list[i].length; j++){
                if(list[i][j] === ' ')
                    continue;
                name.push(list[i][j].toUpperCase());
                break;
            }
        }
    }

    name = name.sort().join('');
    if(name.length === 0 && list.length != 0)
        return false;
    return name;
};
