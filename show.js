function form(){
    var cont = document.querySelector('.S');
    cont.classList.toggle('active')
}
const formEl = document.querySelector("form");
formEl.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const formData = new FormData(formEl);
    const formDataSerialized = Object.fromEntries(formData);
    const jsonObject ={
        ...formDataSerialized,
        sendToSelf: formDataSerialized.sendToSelf ? true: false
    };
    try{
        const response = await fetch('http://localhost:2000/items',{
            methdo:"POST",
            body: JSON.stringify(jsonObject),
            headers:{
                "Content-Type":"application/json",
            },
        });
        const json = await response.json();
        console.log(json);
    }
    catch(e){
        console.log(e);
    }
})