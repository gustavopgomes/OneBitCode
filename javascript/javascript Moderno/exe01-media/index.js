const average = (...numbers) =>{
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}
console.log(`Média Aritimetica simples: ${average(3,4,34,1,5)} `)

