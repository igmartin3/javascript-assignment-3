// Do your work in this file.
var viewDiv = document.createElement("div");
viewDiv.className = "view";
document.body.appendChild(viewDiv);

var grassDiv = document.createElement("div");
grassDiv.className = "grass";
viewDiv.appendChild(grassDiv);

var sunDiv = document.createElement("div");
sunDiv.className = "sun";
viewDiv.appendChild(sunDiv);

var rayDay = 1;
while (rayDay < 6) {
    var rayDiv = document.createElement("div");
    rayDiv.className = "ray-"+rayDay;
    sunDiv.appendChild(rayDiv);
    rayDay++;
}

var mountainDiv = document.createElement("div");
mountainDiv.className = "mountain";
viewDiv.appendChild(mountainDiv);

var topDiv = document.createElement("div");
topDiv.className = "mountain-top";
mountainDiv.appendChild(topDiv);

var cappy = 1;

do {
    var capDiv = document.createElement("div");
    capDiv.className = "mountain-cap-"+cappy;
    topDiv.appendChild(capDiv);
    cappy++;
} while (cappy < 4);
