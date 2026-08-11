/* ==========================================
   AI FESTIVAL TRAFFIC MANAGEMENT
   LIVE MAP JAVASCRIPT
   Demo Version - No Database
========================================== */


/* ==========================================
   1. SHOW LOCATION INFORMATION
========================================== */

function showLocation(
    name,
    status,
    vehicles,
    speed
) {

    const popup =
        document.getElementById("mapPopup");

    const title =
        document.getElementById("popupTitle");

    const statusText =
        document.getElementById("popupStatus");

    const vehicleText =
        document.getElementById("popupVehicles");

    const speedText =
        document.getElementById("popupSpeed");


    title.innerText = name;

    statusText.innerText =
        "Current Status: " + status;

    vehicleText.innerText =
        vehicles;

    speedText.innerText =
        speed;


    popup.classList.add("show");

}


/* ==========================================
   2. CLOSE POPUP
========================================== */

function closePopup() {

    const popup =
        document.getElementById("mapPopup");

    popup.classList.remove("show");

}


/* ==========================================
   3. FILTER MAP MARKERS
========================================== */

function filterMap(type, button) {

    const markers =
        document.querySelectorAll(
            ".location-marker"
        );


    /* Remove active from all buttons */

    document
        .querySelectorAll(".map-filter")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });


    /* Add active to clicked button */

    button.classList.add("active");


    /* Show / hide markers */

    markers.forEach(function(marker) {

        const markerType =
            marker.getAttribute("data-type");


        if (
            type === "all" ||
            markerType === type
        ) {

            marker.style.display = "flex";

        } else {

            marker.style.display = "none";

        }

    });


    /* Close popup */

    closePopup();

}


/* ==========================================
   4. MAP LOADED MESSAGE
========================================== */

console.log(
    "🗺️ Live Traffic Map Loaded"
);

console.log(
    "📍 Traffic markers active"
);

console.log(
    "🅿️ Parking markers active"
);

console.log(
    "🚑 Emergency markers active"
);

console.log(
    "🗄️ Database connection: Not connected yet"
);
