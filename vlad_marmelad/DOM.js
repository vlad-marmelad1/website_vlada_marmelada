function validation(form){
    let result = true;
    
    return result
}

document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault()
    
    if(validation(this) == true) {   
        alert("Вы подписались на обновления!")
    }   
})