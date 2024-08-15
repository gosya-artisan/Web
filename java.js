var modal = document.getElementById("myModal");
var modalForm = document.querySelector(".modalform");
var btn = document.getElementById("openModal");
var submitBtn = document.getElementById("submit");
var span = document.querySelector(".close");

btn.onclick = function() {
    modal.style.display = "flex";
    modalForm.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
    modalForm.style.display = "none";
}

submitBtn.onclick = function(){
    modal.style.display = "none";
    modalForm.style.display = "none";
    alert("Замовлення надіслано!");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalForm.style.display = "none";
    }
}