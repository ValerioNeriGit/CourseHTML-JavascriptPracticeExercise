function s(array){
    let l=array.length;

    for(let a=0; a<l; a++ ){
        for(let i=0; i<l; i++){
            if(array[a]<array[i]){
                let variabile=array[a];
                array[a]=array[i];
                array[i]=variabile;
            }
        }
        for(let i=0; i<l; i++){
            if(array[a]<array[i]){
                let variabile=array[a];
                array[a]=array[i];
                array[i]=variabile;
            }
        }
    }
}

l = [];

for (var i=0; i <= 100000000; i++){
    l[i] = Math.ceil(Math.random() * 1000000);
}

let array=[3,1,4,1,4];
myfunction(array);
console.log(array);