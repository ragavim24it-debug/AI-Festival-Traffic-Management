// ==========================================
// AI FESTIVAL TRAFFIC MANAGEMENT
// Dashboard JavaScript
// Frontend Demo Version
// Database will be connected later
// ==========================================


// ------------------------------------------
// 1. TRAFFIC TREND - LINE CHART
// ------------------------------------------

const trafficCanvas = document.getElementById("trafficChart");

if (trafficCanvas) {

    new Chart(trafficCanvas, {

        type: "line",

        data: {

            labels: [
                "8 AM",
                "9 AM",
                "10 AM",
                "11 AM",
                "12 PM",
                "1 PM",
                "2 PM"
            ],

            datasets: [{

                label: "Vehicles",

                data: [
                    80,
                    120,
                    180,
                    245,
                    210,
                    190,
                    230
                ],

                borderWidth: 3,

                tension: 0.4,

                fill: true,

                pointRadius: 5

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    display: true
                }

            },

            scales: {

                y: {
                    beginAtZero: true
                }

            }

        }

    });

}


// ------------------------------------------
// 2. VEHICLE COUNT - BAR CHART
// ------------------------------------------

const vehicleCanvas = document.getElementById("vehicleChart");

if (vehicleCanvas) {

    new Chart(vehicleCanvas, {

        type: "bar",

        data: {

            labels: [
                "Temple Road",
                "Main Road",
                "Market Road",
                "Bus Stand",
                "Ring Road",
                "Hospital Road"
            ],

            datasets: [{

                label: "Vehicles",

                data: [
                    245,
                    180,
                    90,
                    150,
                    70,
                    210
                ],

                borderWidth: 1,

                borderRadius: 8

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    display: true
                }

            },

            scales: {

                y: {
                    beginAtZero: true
                }

            }

        }

    });

}


// ------------------------------------------
// 3. TRAFFIC DISTRIBUTION - PIE CHART
// ------------------------------------------

const pieCanvas = document.getElementById("pieChart");

if (pieCanvas) {

    new Chart(pieCanvas, {

        type: "doughnut",

        data: {

            labels: [
                "High Traffic",
                "Medium Traffic",
                "Low Traffic"
            ],

            datasets: [{

                data: [
                    35,
                    40,
                    25
                ],

                borderWidth: 2

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}


// ------------------------------------------
// 4. CARD CLICK EFFECT
// ------------------------------------------

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", function () {

        cards.forEach(item => {

            item.classList.remove("selected");

        });

        this.classList.add("selected");

    });

});


// ------------------------------------------
// 5. SEARCH
// ------------------------------------------

const searchInput = document.querySelector(".search input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const searchValue =
            this.value.toLowerCase();

        const cards =
            document.querySelectorAll(".card");

        cards.forEach(card => {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(searchValue)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ------------------------------------------
// 6. NOTIFICATION
// ------------------------------------------

const notification =
    document.querySelector(".fa-bell");

if (notification) {

    notification.style.cursor = "pointer";

    notification.addEventListener("click", function () {

        alert(
            "🚨 Traffic Alert!\n\n" +
            "Heavy traffic detected near Temple Road."
        );

    });

}


// ------------------------------------------
// 7. WELCOME MESSAGE
// ------------------------------------------

console.log(
    "🚦 AI Festival Traffic Dashboard Loaded Successfully"
);


// ------------------------------------------
// 8. LIVE CLOCK
// ------------------------------------------

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString();

    const clock =
        document.getElementById("liveClock");

    if (clock) {

        clock.innerText = time;

    }

}

setInterval(updateClock, 1000);

updateClock();
