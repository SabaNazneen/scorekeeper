const p1button=document.querySelector('#p1btn')
const  p2button = document.querySelector("#p2btn");
const p1score=document.querySelector('#p1score')
const p2score=document.querySelector('#p2score')
const reset=document.querySelector('#rst')
const winnigscoreselect=document.querySelector('#playto')
let p1=0;
let p2=0;
let winningscore=5
let isGameover=false

p1button.addEventListener('click',function(){
    if(!isGameover){
        p1+=1
        if(p1===winningscore){
       // p1score.textContent=p1
    isGameover=true
    p1score.classList.add('has-text-success')
    p2score.classList.add('has-text-danger')
    p1button.disabled=true
    p2button.disabled=true
        }
        p1score.textContent=p1
    }
   // p1score.textContent=p1
})
p2button.addEventListener('click',function(){
    if(!isGameover){
        p2+=1
        if(p2===winningscore){
       // p2score.textContent=p2
    isGameover=true
    p1score.classList.add('has-text-danger')
    p2score.classList.add('has-text-success')
    p1button.disabled=true
    p2button.disabled=true
        }
        p2score.textContent=p2
    }
   // p2score.textContent=p2
})
winnigscoreselect.addEventListener('change', function (){
    winningscore=parseInt(this.value)
    reset1();
})

reset.addEventListener('click',reset1)
function reset1() {
    isGameover=false
    p1=0
    p2=0
    p1score.textContent=0
    p2score.textContent=0
    p1score.classList.remove('has-text-success','has-text-danger')
    p2score.classList.remove('has-text-success','has-text-danger')
    p1button.disabled=false
    p2button.disabled=false

}