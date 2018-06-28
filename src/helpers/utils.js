// no lodash today

export const whereIndex = (coll, filters)=>{
    for(const [index, item] of coll.entries()){
        let match = true;
        for(const key in filters){
            if(filters[key] !== item[key])
                match = false;
        }
        if(match)
            return index;
    }
    return -1;
}

export const removeItem = (coll, item)=>{
    let index = -1;
    if((index = coll.indexOf(item)) !== -1){
        let copy = [...coll];
        copy.splice(index, 1);
        return copy;
    }
    return false;
}