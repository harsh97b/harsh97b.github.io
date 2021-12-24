
console.log("sdak");
// var aboutSection = document.getElementById("first");
// var careerSection = document.getElementById("second");
// var whySection = document.getElementById("third");
// var aboutBtn = document.getElementById("btnAbout");
// var careerBtn = document.getElementById("btnCareer");
// var whyBtn = document.getElementById("btnWhy");
// aboutBtn.onclick = function () {
//     aboutSection.style.display = "block";
//     //show(aboutSection);
// };
// careerBtn.onclick = function () {
//     //show(careerSection);
// };
// whyBtn.onclick = function () {
//     //show(whySection);
// };
// function show(abc){
//     if (abc.style.display !== "none") {
//         abc.style.display = "none";
//     } 
//     else {
//         abc.style.display = "block";
//     }
// }
function clicker(num){
    if(num==0){
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "none";
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "none";
        document.getElementById("backImgHome").style.display = "flex";
        document.getElementById("homeContent").style.display = "block";
        
    }
    else if(num==1){
        document.getElementById("first").style.display = "block";
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "none";
        document.getElementById("img1").style.display = "block";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "none";
        document.getElementById("backImgHome").style.display = "none";
        document.getElementById("homeContent").style.display = "none";
    }
    else if(num==2){
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("third").style.display = "none";
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "block";
        document.getElementById("img3").style.display = "block";
        document.getElementById("backImgHome").style.display = "none";
        document.getElementById("homeContent").style.display = "none";
        
    }
    else if(num==3){
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "block";
        document.getElementById("img1").style.display = "block";
        document.getElementById("img2").style.display = "block";
        document.getElementById("img3").style.display = "block";
        document.getElementById("backImgHome").style.display = "none";
        document.getElementById("homeContent").style.display = "none";
    }
}
