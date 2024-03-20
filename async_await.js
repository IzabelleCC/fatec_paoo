// function hello(nome){
//     return `Ola, ${nome}`
// }
// console.log(hello('Ana'))
// console.log('Terminar...')

// function hello2(nome){
//     return Promise.resolve(`Ola, ${nome}`)
// }
// hello2('Maria').then(res => console.log(`${res}\nTerminar...`))

// async function hello3(nome){
//     return `Ola, ${nome}`
// }
// hello3('Juliana').then(res => console.log(`${res}\nTerminar...`))


const fatorial = (n) => {
    if (n<0) return Promise.reject('Valor nao pode ser negativo')
    let res = 1
    for(let i = 2; i<n; i++) res *= i
    return Promise.resolve(res)
}
//fatorial(10).then(res => console.log(res))

function fatorialComThenCath(){
    fatorial(5)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))
    fatorial(-1)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))
}
fatorialComThenCath()

async function fatorialComAsyncAwait(){
    const res1 = await fatorial(5)
    console.log(res1)
    try{
        const res2 = await fatorial(-1)
        console.log(res2) 
    }    
    catch(e){
        console.log(e)
    }

}
fatorialComAsyncAwait()