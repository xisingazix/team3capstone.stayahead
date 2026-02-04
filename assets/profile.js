// js for profile.html 
const isLoggedIn = localStorage.getItem("usertoken"); // check local storage if user is logged in


if (!isLoggedIn) {
    window.location.href = "signuplogin.html";  // if not log in to return user to log in page
}
function displayName(username){
   return username.split('@')[0];
}
document.getElementById("profile-username").textContent = displayName(username); // to be confirmed id of elemen

document.getElementById("profileContainer").addEventListener('click', function(){
    window.location.href = "/profile.html";
})