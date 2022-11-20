let modal = document.querySelector('#myModal')
// let btn = document.querySelector('.mod')
 let span = document.querySelector('.close')

// btn.onclick = () => {
//     modal.style.display = 'block'
// }
// span.onclick = () => {
//     modal.style.display = 'none'
// }

// window.onclick = (event) => {
// if(event.target ==modal){
//     modal.style.display = 'none'
// }
// }
let reqUrl = 'data.json'

let headers = {
    'Content-Type':'application/json'
}

function SendReq(method,url,body){
    return fetch(url, {
method:method,
 body:JSON.stringify(body),
 headers:headers
    }
    ).then(responce => {
   if(responce.status ){
    modal.style.display = 'block'
    span.textContent = 'Succes'
   }

// return responce.text().then(error => {
//    let err =new Error(span.textContent = 'Error') 
//    err.data = error
//    throw err
// }) Создание Ошибки
    })
    

}

SendReq('GET',reqUrl)
// .then(data => console.log(data))