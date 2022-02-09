function swapCase(a){
    // declare & assign
    let str=''

    for(let i=0;i<a.length;i++){
        if(a[i] === a[i].toUpperCase()){
            // reassign
            str=str + a[i].toLowerCase()
        }else {
            // reassign
            str=str + a[i].toUpperCase()
        }
    } 
    return str;
}
console.log(swapCase('DctDCt'));