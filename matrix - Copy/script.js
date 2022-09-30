let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let page4 = document.querySelector(".page4");

let verticalposter1 = document.querySelector(".verticalposter1");
let verticalposter2 = document.querySelector(".verticalposter2");
let verticalposter3 = document.querySelector(".verticalposter3");
let verticalposter4 = document.querySelector(".verticalposter4");
let verticalposterm = document.querySelector(".verticalposterm");
let block1 = document.querySelector(".block1");
let block2 = document.querySelector(".block2");
let block3 = document.querySelector(".block3");
let block4 = document.querySelector(".block4");
let block5 = document.querySelector(".block5");
let block6 = document.querySelector(".block6");
let block7 = document.querySelector(".block7");
let block8 = document.querySelector(".block8");
let homebtn = document.querySelector("#homebtn");
let moviebtn=document.querySelector('#moviebtn');
let tvbtn=document.querySelector('#tvbtn');
let movie=document.querySelector('.movie');
let movienametop=document.querySelector('.movienametop');
let postertop=document.querySelector('#postertop');





function tiles(imgurl,name,vidurl) {
  let btnid=name.replaceAll(' ','-');
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tile");
  verticalposter1.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgv");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxt");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "moviename");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "year");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "duration");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "ua");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butn");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";

}
// tiles("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3FV1g4LAWsvBsSLJ2tpQm_yZv6UzBdTJrLQ4B3B_&s", "Army of Thieves","army");
tiles("../images/army of thieves.jpg","Army of Thieves","army","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/escape room.jpg","Escape Room","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/1917.jpg","1917","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/dune.jpg","Dune","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/eternals.jpg","Eternals","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/red notice.jpg","Red notice","");
tiles("images/the cruella.jpg","The Cruella","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/it.jpg","It","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/passengers.jpg","Passengers","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/old.jpg","Old","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/night teeth.jpg","Night Teeth","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/limitless.jpg","Limitless","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/sinister.jpg","Sinister","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/percy jackson.jpg","Percy Jackson","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/tokyo drift.jpg","Tokyo Drift","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/nerve.jpg","Nerve.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/red.jpg","Red.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/paranormal activity.jpg","Paranormal Activity","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles("images/tenet.jpg","Tenet.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");



function tiles2(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tile");
  verticalposter2.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgv");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxt");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "moviename");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "year");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "duration");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "ua");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butn");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";
}
tiles2("images/army of thieves.jpg", "Army of Thieves","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles2("images/escape room.jpg","Escape Room","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles2("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles2("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles2("images/tenet.jpg","Tenet.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles2("images/the cruella.jpg","The Cruella","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles2("images/it.jpg","It","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles2("images/passengers.jpg","Passengers","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles2("images/old.jpg","Old","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");




function tiles3(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tile");
  verticalposter3.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgv");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxt");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "moviename");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "year");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "duration");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "ua");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butn");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";
}
tiles3("images/army of thieves.jpg", "Army of Thieves","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/escape room.jpg","Escape Room","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/1917.jpg","1917","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/dune.jpg","Dune","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/eternals.jpg","Eternals","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/red notice.jpg","Red notice","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/the cruella.jpg","The Cruella","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/it.jpg","It","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/passengers.jpg","Passengers","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/old.jpg","Old","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/night teeth.jpg","Night Teeth","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/limitless.jpg","Limitless","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/sinister.jpg","Sinister","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/percy jackson.jpg","Percy Jackson","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/tokyo drift.jpg","Tokyo Drift","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/nerve.jpg","Nerve.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/red.jpg","Red.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/paranormal activity.jpg","Paranormal Activity","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles3("images/tenet.jpg","Tenet.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");



function tiles4(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tile");
  verticalposter4.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgv");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxt");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "moviename");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "year");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "duration");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "ua");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butn");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";
}
tiles4("images/army of thieves.jpg", "Army of Thieves","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/escape room.jpg","Escape Room","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/tenet.jpg","Tenet.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/the cruella.jpg","The Cruella","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/it.jpg","It","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/passengers.jpg","Passengers","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/old.jpg","Old","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/night teeth.jpg","Night Teeth","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/limitless.jpg","Limitless","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/sinister.jpg","Sinister","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/percy jackson.jpg","Percy Jackson","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/tokyo drift.jpg","Tokyo Drift","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/nerve.jpg","Nerve.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/red.jpg","Red.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/paranormal activity.jpg","Paranormal Activity","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tiles4("images/tenet.jpg","Tenet.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");


function tilesm(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tile");
  verticalposterm.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgv");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxt");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "moviename");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "year");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "duration");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "ua");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butn");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";
}

tilesm("images/army of thieves.jpg", "Army of Thieves","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/escape room.jpg","Escape Room","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/tenet.jpg","Tenet.jpg","");
tilesm("images/the cruella.jpg","The Cruella","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/it.jpg","It","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/passengers.jpg","Passengers","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/old.jpg","Old","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/night teeth.jpg","Night Teeth","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/limitless.jpg","Limitless","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/sinister.jpg","Sinister","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/percy jackson.jpg","Percy Jackson","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/tokyo drift.jpg","Tokyo Drift","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/nerve.jpg","Nerve.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/red.jpg","Red.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/paranormal activity.jpg","Paranormal Activity","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesm("images/tenet.jpg","Tenet.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");



function tilesp3b1(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tilep3");
  block1.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgvp3");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxtp3");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "movienamep3");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "yearp3");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "durationp3");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "uap3");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butnp3");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";

}

tilesp3b1("images/red.jpg","Red.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b1("images/paranormal activity.jpg","Paranormal Activity","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b1("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b1("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b1("images/tenet.jpg","Tenet.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");


function tilesp3b2(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tilep3");
  block2.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgvp3");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxtp3");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "movienamep3");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "yearp3");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "durationp3");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "uap3");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butnp3");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";

}

tilesp3b2("images/the cruella.jpg","The Cruella","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b2("images/it.jpg","It","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b2("images/passengers.jpg","Passengers","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b2("images/old.jpg","Old","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b2("images/night teeth.jpg","Night Teeth","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");


function tilesp3b3(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tilep3");
  block3.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgvp3");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxtp3");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "movienamep3");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "yearp3");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "durationp3");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "uap3");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butnp3");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";

}
tilesp3b3("images/limitless.jpg","Limitless","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b3("images/sinister.jpg","Sinister","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b3("images/percy jackson.jpg","Percy Jackson","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b3("images/tokyo drift.jpg","Tokyo Drift","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b3("images/nerve.jpg","Nerve.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");





function tilesp3b4(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tilep3");
  block4.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgvp3");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxtp3");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "movienamep3");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "yearp3");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "durationp3");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "uap3");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butnp3");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";

}

tilesp3b4("images/army of thieves.jpg", "Army of Thieves","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b4("images/escape room.jpg","Escape Room","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b4("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b4("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp3b4("images/tenet.jpg","Tenet.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");




function tilesp4b8(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tilep3");
  block8.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgvp3");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxtp3");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "movienamep3");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "yearp3");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "durationp3");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "uap3");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butnp3");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";

}
tilesp4b8("images/red.jpg","Red.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b8("images/paranormal activity.jpg","Paranormal Activity","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b8("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b8("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b8("images/tenet.jpg","Tenet.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");




function tilesp4b7(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tilep3");
  block7.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgvp3");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxtp3");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "movienamep3");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "yearp3");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "durationp3");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "uap3");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butnp3");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";

}
tilesp4b7("images/the cruella.jpg","The Cruella","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b7("images/it.jpg","It","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b7("images/passengers.jpg","Passengers","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b7("images/old.jpg","Old","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b7("images/night teeth.jpg","Night Teeth","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");


function tilesp4b6(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tilep3");
  block6.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgvp3");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxtp3");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "movienamep3");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "yearp3");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "durationp3");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "uap3");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butnp3");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";

}
tilesp4b6("images/limitless.jpg","Limitless","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b6("images/sinister.jpg","Sinister","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b6("images/percy jackson.jpg","Percy Jackson","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b6("images/tokyo drift.jpg","Tokyo Drift","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b6("images/nerve.jpg","Nerve.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");





function tilesp4b5(imgurl, name,vidurl) {
  let tilee = document.createElement("div");
  tilee.setAttribute("class", "tilep3");
  block5.append(tilee);
  let imge = document.createElement("img");
  imge.setAttribute("src", imgurl);
  imge.setAttribute("class", "posterimgvp3");
  tilee.append(imge);

  let postertxte = document.createElement("div");
  postertxte.setAttribute("class", "postertxtp3");
  tilee.append(postertxte);

  let movienamee = document.createElement("h4");
  movienamee.setAttribute("class", "movienamep3");
  postertxte.append(movienamee);
  movienamee.innerText = name;

  let yeare = document.createElement("h5");
  yeare.setAttribute("class", "yearp3");
  postertxte.append(yeare);
  yeare.innerText = "(2002)";

  let duratione = document.createElement("h4");
  duratione.setAttribute("class", "durationp3");
  postertxte.append(duratione);
  duratione.innerText = "2h 55min";

  let uae = document.createElement("h4");
  uae.setAttribute("class", "uap3");
  postertxte.append(uae);
  uae.innerText = "U/A 13+";

  let butne = document.createElement("div");
  butne.setAttribute("class", "butnp3");
  postertxte.append(butne);
  
  let watche = document.createElement("button");
  // watche.setAttribute("href", "#");
  // watche.setAttribute("id", btnid);
  watche.setAttribute("class", "watchnow");
  butne.append(watche);
  watche.innerText = "Watch Now";

  // let run =document.getElementById(btnid);
   watche.addEventListener('click',function(){
  page1.style.transform='translateX(-100%)';
    page2.style.transform='translateX(0%)';
    page3.style.transform='translateX(-100%)';
    page4.style.transform='translateX(-100%)';

  movie.src=vidurl;
  movienametop.innerText=name;
  postertop.src=imgurl;
  watching.style.display='block';
  playimg.src=imgurl;
  homebtn.style.borderBottomStyle='none';
  moviebtn.style.borderBottomStyle='none';
  tvbtn.style.borderBottomStyle='none';
})

  let adde = document.createElement("button");
  // adde.setAttribute("href", "#");
  adde.setAttribute("class", "add");
  butne.append(adde);
  adde.innerText = "+ Add to Watchlist";

}
tilesp4b5("images/escape room.jpg","Escape Room","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b5("images/hotel transylvania.jpg","Hotel Transylvania","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b5("images/godzilla vs kong.jpg","Godzilla vs Kong","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b5("images/tenet.jpg","Tenet.jpg","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");
tilesp4b5("images/paranormal activity.jpg","Paranormal Activity","She.Hulk.Attorney.at.Law.S01E01.720p.x264.Hindi.English.Esubs.mkv");

// page2.style.transform='translateX(0%)'
// function play(btni,name,imgurl,vidurl){
//   btnid.addEventListener('click',e=>{
//     page2.style.transform='translateX(0%)';

// }
// }



// gsap.from(".tittle", { x: 300, y: 300, scale: 4, delay: 6, duration: 5 });
// gsap.from("#p1",{x:1000,duration:2})
// gsap.from(".box",{x:750,y:200,scale:2,skew:2,rotationX:360,rotationY:360, rotationZ:360,fill:"yellow",backgroundColor:'green', stagger:1, duration:1});
const slide = gsap.timeline({ repeat: -1, defaults: { duration: 1.5 } });
slide
  .to("#p1", { x: -1000 }, "+=4")
  .to("#p2", { x: -1000 }, "-=1.5")
  .to("#p3", { x: -1000 }, "+=4")
  .to("#p4", { x: -1000 }, "+=4")
  .to("#p5", { x: -1000 }, "+=4")
  .to("#p6", { x: -1000 }, "+=4")
  .to("#p1", { x: -1000 }, "+=4");
