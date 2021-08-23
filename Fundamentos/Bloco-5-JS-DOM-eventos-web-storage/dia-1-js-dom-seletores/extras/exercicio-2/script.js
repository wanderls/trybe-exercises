let headerContainer = document.getElementById("header-container");
headerContainer.style.color = "white";
headerContainer.style.background = "green";

let sectionEmergency =document.getElementsByClassName("emergency-tasks")[0];
sectionEmergency.style.background = "pink";

let hUrgente = document.querySelectorAll(".emergency-tasks h3")[0];
hUrgente.style.background = "purple";

let hUrgente2 = document.querySelectorAll(".emergency-tasks h3")[1];
hUrgente2.style.background = "purple";

let sectionNotEmergency = document.getElementsByClassName("no-emergency-tasks")[0];
sectionNotEmergency.style.color = "white";
sectionNotEmergency.style.background = "yellow";

let hNoUrgente1 = document.querySelectorAll(".no-emergency-tasks h3")[0];
hNoUrgente1.style.background = "black";

let hNoUrgente2 = document.querySelectorAll(".no-emergency-tasks h3")[1];
hNoUrgente2.style.background = "black";

let footer = document.querySelector("footer");
footer.style.background = "darkgreen";