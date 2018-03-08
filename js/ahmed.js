
document.getElementById('hp').onmouseover = function() {
    console.log("ds");
    document.getElementById('hp').style.color = "black";
    document.getElementById('hp').style.backgroundColor = "white";
};
document.getElementById('hp').onmouseout = function() {
    console.log("ds");
    document.getElementById('hp').style.color = "white";
    document.getElementById('hp').style.backgroundColor = "#383E4C";
};
document.getElementById('au').onmouseover = function() {
    console.log("ds");
    document.getElementById('au').style.color = "black";
    document.getElementById('au').style.backgroundColor = "white";
};
document.getElementById('au').onmouseout = function() {
    console.log("au");
    document.getElementById('au').style.color = "white";
    document.getElementById('au').style.backgroundColor = "#383E4C";
};
document.getElementById('Sr').onmouseover = function() {
    console.log("ds");
    document.getElementById('Sr').style.color = "black";
    document.getElementById('Sr').style.backgroundColor = "white";
};
document.getElementById('Sr').onmouseout = function() {
    console.log("ds");
    document.getElementById('Sr').style.color = "white";
    document.getElementById('Sr').style.backgroundColor = "#383E4C";
};
document.getElementById('ct').onmouseover = function() {
    console.log("ds");
    document.getElementById('ct').style.color = "black";
    document.getElementById('ct').style.backgroundColor = "white";
};
document.getElementById('ct').onmouseout = function() {
    console.log("au");
    document.getElementById('ct').style.color = "white";
    document.getElementById('ct').style.backgroundColor = "#383E4C";
};
document.getElementById('catpoo').onmouseover = function() {
    console.log("ds");
    document.getElementById('catpoo').style.color = "black";
    document.getElementById('catpoo').style.backgroundColor = "white";
};
document.getElementById('catpoo').onmouseout = function() {
    console.log("au");
    document.getElementById('catpoo').style.color = "white";
    document.getElementById('catpoo').style.backgroundColor = "#383E4C";
};
function onbuttonclick() {
    isitEmpty();
    window.alert(document.getElementById("comment").value);
    console.log("working!!");

}
var form = document.querySelector('form.contact-form')
var formSubmit =  function() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var subject = document.getElementById("subject").value;
    var comment = document.getElementById("comment").value;
    var alertMessage = "";
    if(name != ""  && mail != ""  && subject != ""  & comment != "" ){
        window.alert( name + "\n\n" + mail + "\n\n" + subject + "\n\n" + comment);
    }
    else if(name == "" || mail =="" || subject =="" || comment=="" ){
        if(name==""){
            alertMessage +="name can't be empty \n";
        }
        if(mail==""){
            alertMessage +="mail field be empty \n";
        }
        if(subject==""){
            alertMessage +="subject can't be empty \n";
        }
        if(comment==""){
            alertMessage +="comment can't be empty \n";
        }
    }
   window.alert(alertMessage);
}
form.addEventListener("submit", function(event){
 
    formSubmit();
})


var greenBtn = document.querySelector(".feature-content-link.green-btn");
var greenBtnClick = function(){
    greenBtn.classList.add("feature-content-link","blue-btn");
   
    greenBtn.innerText="My Magic Button";
}
 
greenBtn.addEventListener("click", function(event){
    greenBtnClick();
})


document.querySelector(".feature-content-link.red-btn").onclick = function my() {
    location.href = "https://github.com/tobzzy"
}