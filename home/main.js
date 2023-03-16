const checked = document.querySelector('.check');






function closebar(el){
    el.style.left = "-150px";
}

function openbar(el){
    el.style.left = "0px";
}

function barOpenOrClose(e){
    // console.log(document.getElementById('navBar').style);
    let el = document.getElementById('navBar');
    if(el.style.left == "0px"){
        closebar(el);
    }
    else{
        openbar(el);
    }

}

checked.addEventListener('click', barOpenOrClose);

console.log("all good");