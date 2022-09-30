



let bon=document.querySelector('#bon');
let ggn=document.querySelector('#ggn');

let ham=document.querySelector('#ham');
let barbar=document.querySelector('.barbar');
let black=document.querySelector('.black');


let playimg=document.querySelector('#playimg');
let watching=document.querySelector('.watching');
let signout=document.querySelector('#signout');
let naam=document.querySelector('.naam');
let biopic=document.querySelector('.biopic');



homebtn.addEventListener('click',function(){
    page1.style.zIndex='200';
    page2.style.zIndex='200';
    page3.style.zIndex='100';
    page4.style.zIndex='100';
    page1.style.transform='translateX(0%)';
  page2.style.transform='translateX(100%)';
  page3.style.transform='translateX(100%)';
  page4.style.transform='translateX(100%)';
    
    homebtn.style.borderBottomStyle='solid';
    moviebtn.style.borderBottomStyle='none';
    tvbtn.style.borderBottomStyle='none';
})
moviebtn.addEventListener('click',function(){
    page1.style.zIndex='100';
    page2.style.zIndex='200';
    page3.style.zIndex='200';
    page4.style.zIndex='100';

    page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(100%)';
    page3.style.transform='translateX(0%)';
    page4.style.transform='translateX(100%)';
      
      homebtn.style.borderBottomStyle='none';
    moviebtn.style.borderBottomStyle='solid';
    tvbtn.style.borderBottomStyle='none';
  })
  tvbtn.addEventListener('click',function(){
    page1.style.zIndex='100';
    page2.style.zIndex='200';
    page3.style.zIndex='100';
    page4.style.zIndex='200';

    page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(100%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(0%)';
      
      homebtn.style.borderBottomStyle='none';
    moviebtn.style.borderBottomStyle='none';
    tvbtn.style.borderBottomStyle='solid';
  })

  playimg.addEventListener('click',function(){
    page1.style.zIndex='200';
    page2.style.zIndex='200';
    page3.style.zIndex='100';
    page4.style.zIndex='100';

    page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(100%)';
    page4.style.transform='translateX(100%)';
      
      homebtn.style.borderBottomStyle='none';
    moviebtn.style.borderBottomStyle='none';
    tvbtn.style.borderBottomStyle='none';
  })

  let sin=0;
  signout.addEventListener('click',function (){
      if(sin==0){
      signout.innerText='Log In';
      naam.innerText='Log In';
      biopic.src='https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg'
      sin=1;
      }else{
        signout.innerText='Sign Out';
          naam.innerText='Gagan Rider';
          biopic.src='https://stickerly.pstatic.net/sticker_pack/tuhLgeeNbLotJ5dQNtjBYg/KQ7T1T/6/d4e3f6b7-2a08-47f4-b722-99f5994419a9.png'
          sin=0;
      }});

let tag=0;
ham.addEventListener('click',function (){
    if(tag==0){
    barbar.style.transform='translate(0%,-8%)';
    black.style.display='block';
    tag=1;
    }else{
        barbar.style.transform='translate(120%,-8%)';
        black.style.display='none';
        tag=0;
    }

})


if(topbtn=-1){
    // homebtn.style.borderBottomStyle='solid';
}else if(topbtn==3){
    moviebtn.style.borderBottomStyle='solid';
    console.log('movie');
}else if(topbtn==4){
    tvbtn.style.borderBottomStyle='solid';
    console.log('tv');
}else if(topbtn==1){
    homebtn.style.borderBottomStyle='solid';
    console.log('home');
}
else{
    homebtn.style.borderBottomStyle='none';
    moviebtn.style.borderBottomStyle='none';
    tvbtn.style.borderBottomStyle='none';
}



// bon.addEventListener('click',function play(){
//     page2.style.transform='translateX(0%)';
//     page1.style.transform='translateX(-100%)';
//     // movie.setAttribute=('src','../720/Escap.Rooom.Tournamen.of.Champons.2021.720p.WEBRip.x264.ESubs.mkv')
//     movie.src='../../movies/The.Bourne.Supremacy.(2004).720p.Dual.Audio.(Hindi-English).[AllMoviesHub.in].mkv';
//     movienametop.innerText='Army of Thieves';
//     postertop.src='../images/army of thieves.jpg';
//     watching.style.display='block';
//     playimg.src='../images/army of thieves.jpg';
//     homebtn.style.borderBottomStyle='none';
//     moviebtn.style.borderBottomStyle='none';
//     tvbtn.style.borderBottomStyle='none';
// })
// ggn.addEventListener('click',function play(){
//     page2.style.transform='translateX(0%)';
//     page1.style.transform='translateX(-100%)';
//     // movie.setAttribute=('src','../720/Escap.Rooom.Tournamen.of.Champons.2021.720p.WEBRip.x264.ESubs.mkv')
//     movie.src='She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv';
//     movienametop.innerText='Escape Room';
//     postertop.src='images/escape room.jpg';
//     watching.style.display='block';
//     playimg.src='images/escape room.jpg';
//     homebtn.style.borderBottomStyle='none';
//     moviebtn.style.borderBottomStyle='none';
//     tvbtn.style.borderBottomStyle='none';
// })


// console.log('gagan');let press=document.getElementById(btnid)
// army.addEventListener("click", function(){

//     // movie.setAttribute('src','..\720\Army.Of.Thieves.2021.720p.Hindi.English.mkv');
//     // postertop.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3FV1g4LAWsvBsSLJ2tpQm_yZv6UzBdTJrLQ4B3B_&s');
//     postertop.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3FV1g4LAWsvBsSLJ2tpQm_yZv6UzBdTJrLQ4B3B_&s";
//     movie.src="..\720\Army.Of.Thieves.2021.720p.Hindi.English.mkv";
//     movienametop.innerText="Army of thieves";
// });
