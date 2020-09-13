import './style.css'



document.addEventListener('DOMContentLoaded', (event) => {


    let coll = document.querySelector(".collapsible");
    coll.addEventListener("click", function (e) {
        let content = document.querySelector('.content')
        coll.classList.toggle("active");

        if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          } 
    });
    
    let projForm = document.querySelector('.project-form');
    projForm.addEventListener('submit',(e)=>{
        e.preventDefault();
    })

});
