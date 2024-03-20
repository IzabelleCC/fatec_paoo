require('dotenv').config()
const axios = require ('axios')

//const APPID = process.env.APPID
const {
    APPID,
    Q,
    UNITS,
    LANGUAGE,
    CNT,
    URL_BASE
} = process.env

const url = `${URL_BASE}?appid=${APPID}&q=${Q}&units=${UNITS}&lang=${LANGUAGE}&cnt=${CNT}`
//console.log(url)

//usando async/await, exibir as descrições de todas as previsões que tenham temperatura minima no max 25

const exercicioAsyncAwait = async () => {
    const resultado = await axios.get(url)
    const data = resultado.data
    const list = data.list
    
    // list.forEach(e => {
    //     console.log(e)
    //     console.log('********')
    // })
    list.forEach(e => {
        console.log(e['main']['temp_min'] < 30 ? e.weather[0].description : '')
    });
}
exercicioAsyncAwait()

// axios.get(url)
// .then(res => {
//     console.log('data')
//     console.log(res.data)
//     console.log('***************')
//     return res.data
// })
// .then(outroNome => {
//     console.log('cnt')
//     console.log(outroNome.cnt)
//     console.log('***************')
//     return outroNome
// })
// .then(res =>{
//     console.log('list')
//     console.log(res.list)
//     console.log('***************')
//     return res
// })
// .then(res =>{
//     console.log('temp min do primeiro')
//     console.log(res.list[0].main.temp_min)
//     console.log('***************')
//     return res
// })
// .then(res =>{
// //iterar sobre a lista, mostrando temp maxima, minima e umidade de cada previsao
//     for(let i = 0; i < res.cnt; i++){
//         console.log('Previsao ' + res.list[i].dt_txt, 
//                     '\nTemp_min: ' + res.list[i].main.temp_min,
//                     '\nTemp_max: ' + res.list[i].main.temp_max,
//                     '\nUmidade: ' + res.list[i].main.humidity, '\n')
//     }
//     console.log('***************')
//     return res
// })
// .then(res =>{
// //iterar sobre a lista. mostrando a descrição de cada previsao
//         for(let i = 0; i < res.cnt; i++){
//             console.log(`Previsao: ${res.list[i].dt_txt}\n${res.list[i].weather[0].description.toUpperCase()}\n`)
//         }
//         console.log('***************')
//         return res
// })
// .then(res =>{
// //responder se tem pelo menos uma previsao cuja sensação termica seja menor do que 30
//     for(let i = 0; i < res.cnt; i++){
//         if(res.list[i].main.feels_like < 30){return console.log('True')}
//     }
//     console.log('***************')    
// })

