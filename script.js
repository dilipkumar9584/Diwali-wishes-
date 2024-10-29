let btn=document.querySelector('.btn')
let textbox=document.querySelector('.textbox')
let song1=document.querySelector('.song1')
let song2=document.querySelector('.song2')
let ptag=document.querySelector('.ptag')
let cracker1=document.querySelector('.cracker1')
let cracker2=document.querySelector('.cracker2')
let cracker3=document.querySelector('.cracker3')
let cracker4=document.querySelector('.cracker4')
btn.addEventListener('click',()=>{
    textbox.style.display='none'
    let count=0;
    let time=setInterval(() => {
        song2.pause()
        if(count==0 || count==1){
            song1.play()
            cracker1.style.display="block"
        }
        else if(count==2 || count==3){
            cracker1.style.display='none'
            cracker2.style.display='block'
        }
        else if(count==4 || count==5){
            cracker1.style.display='none'
            cracker2.style.display='none'
            cracker3.style.display='block'
        }
        else if(count==6 || count==7){
            cracker1.style.display='none'
            cracker2.style.display='none'
            cracker3.style.display='none'
            cracker4.style.display='block'
        }
        else{
            cracker1.style.display='none'
            cracker2.style.display='none'
            cracker3.style.display='none'
            cracker4.style.display='none'
            textbox.style.display='block'
            clearInterval(time)
            song1.pause()
            song2.play()
        }
       console.log(count)
        count=count+1;
        
    },1000);
   
    
})