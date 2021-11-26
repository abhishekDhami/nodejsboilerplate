const ind=require('../dist/index');
const assert=require('assert');


describe('This is mmyy first test case',()=>{
    it('Checking for Pr1 response',(done)=>{
        ind.pr1.then((d)=>{
            if(d!=='pr1'){
                done(new Error('It should be pr1'))
            }
            else{done()}
        }).catch(err=>{done(err)})
    })
})