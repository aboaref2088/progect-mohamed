// const apikey='api_key=5809c72514b4c51c22ff022244df1f00'
// const baseurl='https://api.themoviedb.org/3'
// const imgurl='http://image.tmdb.org/t/p/original/'
// const requests={
//     fetchTrending:`${baseurl}/trending/all/week?${apikey}&language=en=US`
// }
// console.log(fetch.Trending);
const apikey = 'api_key=5809c72514b4c51c22ff022244df1f00';
const baseurl = 'https://api.themoviedb.org/3';
const imgurl = 'http://image.tmdb.org/t/p/original/';
const requests = {
    fetchTrending: `${baseurl}/trending/all/week?${apikey}&language=en-US`,
// ابن تاني لل object
fetchComedyMovie: `${baseurl}/discover/movie?${apikey}&with_genres=35`,

};

fetch(requests.fetchTrending )
.then((Response)=>Response.json())
.then((data)=>{
   

// لاخذ قيمة عشوايئة 
 var bannermovie = data.results[Math.floor(Math.random() * data.results.length)];
 document.getElementById("title").innerHTML=bannermovie.name ? bannermovie.name:bannermovie.title ;
 document.getElementById("desc").innerHTML=bannermovie.overview.substr(0,50)


 var bannermovie = data.results[Math.floor(Math.random() * data.results.length)];
// Document.getElementById("img").style.backgroundImag=`url(${imgurl+bannermovie.backdrop_path})`
document.getElementById("face").style.backgroundImage = `url(${imgurl + bannermovie.backdrop_path})`;

if (bannermovie) {
    document.getElementById("title").innerHTML = bannermovie.name ? bannermovie.name : bannermovie.title;
    document.getElementById("desc").innerHTML = bannermovie.overview ? bannermovie.overview.substr(0, 50) : "لا يوجد وصف متاح.";
} else {
    console.log("لا يوجد فيلم عشوائي.");
}

})
// if (bannermovie && bannermovie.backdrop_path) {
//     document.getElementById("img").style.backgroundImage = `url(${imgurl + bannermovie.backdrop_path})`;
// } else {
//     console.log("لا يوجد مسار خلفية متاح للفيلم.");
// }
// ابن تاني لل object
// ___________الكود الاصلي 

fetch(requests.fetchComedyMovie )
.then((res)=>res.json())
.then((data)=>{
        console.log(data);
        data.results.forEach(element => {
const  movieSlider = document.getElementById("comedyMovie");
const div  = document.createElement("div");
div.classList.add ("swiper-movie");
movieSlider.appendchild(div)
div.innerHTML = `
<img src ="${imgurl +movie.backdrop_path}" alt="${element.title}" class="movieimg">
<div class="dateilsdiv">
<img  src="${imgurl + movie.backdrop_path}" alt="${element.title}" class="movieimg">
<div class="dateilss">
<div  class="iconsdateilss">
<div
<i class="fa solid fa-play"></i>
<i class="fa solid fa-plus"></i>
<i class="fa solid fa-thumbs-up "></i>
<i class="fa solid fa-thumbs-down"></i>
</div>
<i class="fa-solid fa-caret-down"></i>
</div>
<h3>${ movie.original_title ?movie.original_title:movie.name}</h3>
<p>${movie.overview.substr(0,50)}</p>
</div>
</div>
`   
 });   

})

// fetch(requests.fetchComedyMovie)
//     .then((response) => response.json())
//     .then((data) => {
//         data.results.forEach(element => {
//             const movieSlider = document.getElementById("comedyMovie");
//             const div = document.createElement("div");
//             div.classList.add("swiper-movie");
//             movieSlider.appendChild(div); // استخدم appendChild بدلاً من appendchild

//             div.innerHTML = `
//                 <img src="${imgurl + element.backdrop_path}" alt="${element.title}" class="movieimg">
//                 <div class="dateilsdiv">
//                     <img src="${imgurl + element.backdrop_path}" alt="${element.title}" class="movieimg">
//                     <div class="dateilss">
//                         <div class="iconsdateilss">
//                             <div>
//                                 <i class="fa solid fa-play"></i>
//                                 <i class="fa solid fa-plus"></i>
//                                 <i class="fa solid fa-thumbs-up"></i>
//                                 <i class="fa solid fa-thumbs-down"></i>
//                             </div>
//                             <i class="fa-solid fa-caret-down"></i>
//                         </div>
//                         <h3>${element.original_title ? element.original_title : element.name}</h3>
//                         <p>${element.overview.substr(0, 50)}</p>
//                     </div>
//                 </div>
//             `;
//         });
//     })
//     .catch(error => console.error("Error fetching data:", error));
// شات جي بي تي 

fetch(requests.fetchComedyMovie )
.then((Response)=>Response.json())
.then((data)=>{
   

// لاخذ قيمة عشوايئة 
 var bannermovie = data.results[Math.floor(Math.random() * data.results.length)];
 document.getElementById("title").innerHTML=bannermovie.name ? bannermovie.name:bannermovie.title ;
 document.getElementById("desc").innerHTML=bannermovie.overview.substr(0,50)


 var bannermovie = data.results[Math.floor(Math.random() * data.results.length)];
// Document.getElementById("img").style.backgroundImag=`url(${imgurl+bannermovie.backdrop_path})`
document.getElementById("face").style.backgroundImage = `url(${imgurl + bannermovie.backdrop_path})`;

if (bannermovie) {
    document.getElementById("title").innerHTML = bannermovie.name ? bannermovie.name : bannermovie.title;
    document.getElementById("desc").innerHTML = bannermovie.overview ? bannermovie.overview.substr(0, 50) : "لا يوجد وصف متاح.";
} else {
    console.log("لا يوجد فيلم عشوائي.");
}

})