// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

let modal = document.querySelector("#myModal")

let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(modal)
    } , 6000)
})

myPromise.then(result=>{
    result.style.display="block"
    document.querySelector(".close").addEventListener("click",()=>{
        result.style.display="none"
    })
})