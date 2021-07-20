function check(){
        var ch=document.querySelector("#email_c")
        if(ch.checked){ 
            var d =document.querySelector(".display_points h2")
            var em=document.querySelector(".email")
            em.style.transition="0.5s ease-in-out"
            em.style.opacity="1"
        }
        else if(ch.checked==false){
            var d =document.querySelector(".display_points h2")
            var em=document.querySelector(".email")
            em.style.transition="0.5s ease-in-out"
            em.style.opacity="0"
        }
    }
function ph_check(){
    var ch=document.querySelector("#phone_c")
    if(ch.checked){ 
        var em=document.querySelector(".phone")
        em.style.transition="0.5s ease-in-out"
        em.style.opacity="1"
        
    }
    else{
        var em=document.querySelector(".phone")
        em.style.transition="0.3s ease-in-out"
        em.style.opacity="0"
    }
}
const phone =document.querySelector(".contents")
new Sortable(phone,{
    animation:250
})
function handleSub(e){
    // e.preventDefault()
    // var form =document.querySelector(".form_container")
    // form.style.background="pink"
    // form.style.transition="0.3s ease-in-out"
}