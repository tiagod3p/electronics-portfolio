const clickButtons = document.querySelectorAll('.click')


for (let button of clickButtons){
    button.addEventListener('click', function(){
        const id = button.getAttribute('id')
        window.location.href = `video?id=${id}`
    })
     
}
