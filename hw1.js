let chek = 'bread28muka31.23soli250'
let invalidChek = 'bread28.1muka24.31soli250.232627' //он выбивает что чек неверный но сумму все равно считает

function Numb(str) {
    let result = str.match(/(-?\d+(\.\d+)?)/g).map(v => +v);
    let rez = Object.values(result)
    for(let i=0;i < rez.length;i++){
        if((rez[i].toString().match(/\.(\d+)/)?.[1].length) > 2){
            
            console.log('invalid chek') 
            break   
        }
        if((rez[i].toString().match(/\.(\d+)/)?.[1].length) <= 2) {
            console.log(rez.reduce((acc,rez) => (acc + rez), 0))
        }
    }
    // console.log(result)

}

Numb(chek)