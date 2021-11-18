document.getElementsByClassName("circle")[0].style.background = "black";
var number = 0;
var numberTwo = 1;

var masPhotos = ["print1.jpg","print2.jpg","print3.jpg","print4.jpg","print5.jpg","print6.jpg","print7.jpg","print8.jpg","print9.jpg"];
var masIndex = 0;




document.getElementsByClassName("bloks")[masIndex].style.backgroundImage = "url(img/" + masPhotos[masIndex] + ")";
document.getElementsByClassName("bloks")[masIndex].style.backgroundSize = "cover";
document.getElementsByClassName("bloks")[masIndex + 1].style.backgroundImage = "url(img/" + masPhotos[masIndex + 1] + ")";
document.getElementsByClassName("bloks")[masIndex + 1].style.backgroundSize = "cover";
document.getElementsByClassName("bloks")[masIndex + 2].style.backgroundImage = "url(img/" + masPhotos[masIndex + 2] + ")";
document.getElementsByClassName("bloks")[masIndex + 2].style.backgroundSize = "cover";

$("#arrowRight").click(function (event){
    console.log(masIndex);  
    masIndex+= 3;
    if(numberTwo == 3){
        numberTwo = 0;
        masIndex = 0;
    }else if(number == 3){
        number = 0;
    }
    if(masIndex == 9){
        masIndex = 0;
    }
    document.getElementsByClassName("circle")[numberTwo].style.background = "black";
    document.getElementsByClassName("circle")[number].style.background = "none";

    document.getElementsByClassName("bloks")[0].style.backgroundImage = "url(img/" + masPhotos[masIndex] + ")";
    document.getElementsByClassName("bloks")[1].style.backgroundImage = "url(img/" + masPhotos[masIndex + 1] + ")";
    document.getElementsByClassName("bloks")[2].style.backgroundImage = "url(img/" + masPhotos[masIndex + 2] + ")";
    number++;
    numberTwo++;

});
$("#arrowLeft").click(function (event){
    console.log(masIndex);  
    number--;
    numberTwo--;
    masIndex -= 3;
    if(numberTwo == -1){
        numberTwo = 2;
    }else if(number == -1){
        number = 2;
        masIndex = 6;
    }

    if(masIndex == -3){
        masIndex = 6;
    }
    document.getElementsByClassName("bloks")[0].style.backgroundImage = "url(img/" + masPhotos[masIndex] + ")";
    document.getElementsByClassName("bloks")[1].style.backgroundImage = "url(img/" + masPhotos[masIndex + 1] + ")";
    document.getElementsByClassName("bloks")[2].style.backgroundImage = "url(img/" + masPhotos[masIndex + 2] + ")";

    document.getElementsByClassName("circle")[number].style.background = "black";
    document.getElementsByClassName("circle")[numberTwo].style.background = "none";
});

$("#oneBloks").click(function (event){
    document.getElementsByClassName("circle")[0].style.background = "black";
    document.getElementsByClassName("circle")[1].style.background = "none";
    document.getElementsByClassName("circle")[2].style.background = "none";

    document.getElementsByClassName("bloks")[0].style.backgroundImage = "url(img/" + masPhotos[0] + ")";
    document.getElementsByClassName("bloks")[1].style.backgroundImage = "url(img/" + masPhotos[1] + ")";
    document.getElementsByClassName("bloks")[2].style.backgroundImage = "url(img/" + masPhotos[2] + ")";
    masIndex = 0;
    number = 0;
    numberTwo = 1;
});

$("#twoBloks").click(function (event){
    document.getElementsByClassName("circle")[1].style.background = "black";
    document.getElementsByClassName("circle")[0].style.background = "none";
    document.getElementsByClassName("circle")[2].style.background = "none";

    document.getElementsByClassName("bloks")[0].style.backgroundImage = "url(img/" + masPhotos[3] + ")";
    document.getElementsByClassName("bloks")[1].style.backgroundImage = "url(img/" + masPhotos[4] + ")";
    document.getElementsByClassName("bloks")[2].style.backgroundImage = "url(img/" + masPhotos[5] + ")";
    masIndex = 3;
    number = 1;
    numberTwo = 2;
});

$("#treeBloks").click(function (event){
    document.getElementsByClassName("circle")[2].style.background = "black";
    document.getElementsByClassName("circle")[1].style.background = "none";
    document.getElementsByClassName("circle")[0].style.background = "none";

    document.getElementsByClassName("bloks")[0].style.backgroundImage = "url(img/" + masPhotos[6] + ")";
    document.getElementsByClassName("bloks")[1].style.backgroundImage = "url(img/" + masPhotos[7] + ")";
    document.getElementsByClassName("bloks")[2].style.backgroundImage = "url(img/" + masPhotos[8    ] + ")";
    masIndex = 6;
    number = 2;
    numberTwo = 0;
})