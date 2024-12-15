
let color = 8
let lines = 32

for (let i = 0; i <= lines; i += 1){
    for (let k = 0; k <= i; k += 1){
        console.log('csl =', i % color + 1)
    }
}

//for commit test