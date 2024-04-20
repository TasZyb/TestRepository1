const item = document.querySelectorAll(".item")



for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function(){
        item[i].style.color = 'green'
    })
    
}
