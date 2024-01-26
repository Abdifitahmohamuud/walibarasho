const me=document.getElementById('view')
const cr=document.getElementById('hide')
const menu=document.getElementById('menu')
const lin=document.getElementById('lin')

me.addEventListener('click',function(){
   me.classList='viewh'
   cr.classList='hidev'
   menu.classList='menuv'
   lin.classList='linc'
})
cr.addEventListener('click',function(){
    me.classList='view'
    cr.classList='hide'
    menu.classList='menu'
    lin.classList='lin'
 })

 const form = document.getElementById('form')
const fname=document.getElementById('fname')
const sname=document.getElementById('sname')
const email=document.getElementById('email')
const tel=document.getElementById('tel')
const img=document.getElementById('img')
const fnamed=document.getElementById('fnamed')
const snamed=document.getElementById('snamed')
const emaild=document.getElementById('emaild')
const teld=document.getElementById('teld')
const diplay=document.getElementById('diplay')
const link=document.getElementById('link')
form.addEventListener('submit',(e)=>{
   e.preventDefault()
//   limg.innerHTML='<img src=${img.value}>'
//  elments([fname.value,sname.value])
form.classList='formd'
diplay.classList='diplayv'
fnamed.value=fname.value
snamed.value=sname.value
emaild.value=email.value
teld.value=tel.value
link.append(fname.value,'\t',sname.value)
})

