var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
   navLinks.style.right="-220px"
}


function sumbitForm(){
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let email=document.getElementById('email').value;

    if(fname != null && lname != null && email != null){
        alert("form submitted Sucessfully!!!")
    }
    else{
        alert("All field are required")
    }
}