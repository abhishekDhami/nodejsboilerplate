import {setTimeout} from 'timers'

let pr1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('pr1');
    },400)
})

let pr2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('pr2');
    },5000)
})

let pr3=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej('pr3');
    },100)
})

export {pr1,pr2,pr3}

//It will give output once all are successful, throw error if anyone has failed before completing other tasks
// let p=Promise.all([pr1,pr2,pr3]).then((d)=>{
//     console.log(d)
// }).catch((err)=>{
//     console.log(err)
// })

//It will give error or success for any one promise which is fastest
// let p=Promise.race([pr1,pr2,pr3]).then((d)=>{
//     console.log(d)
// }).catch((err)=>{
//     console.log('error'+err)
// })

//It will wait for all promise to complete it with resolve or reject
// let p=Promise.allSettled([pr1,pr2,pr3]).then((d)=>{
//     console.log(d)
// }).catch((err)=>{
//     console.log('error'+err)
// })
   
