/* ==========================================
   AI FESTIVAL TRAFFIC MANAGEMENT
   DASHBOARD JAVASCRIPT
   Frontend Demo - No Database Yet
========================================== */


/* ==========================================
   1. TRAFFIC LINE CHART
========================================== */

const trafficChartElement =
    document.getElementById("trafficChart");

if (trafficChartElement) {

    new Chart(trafficChartElement, {

        type: "line",

        data: {

            labels: [
                "8 AM",
                "9 AM",
                "10 AM",
                "11 AM",
                "12 PM",
                "1 PM",
                "2 PM",
                "3 PM",
                "4 PM"
            ],

            datasets: [{

                label: "Vehicles",

                data: [
                    80,
                    120,
                    180,
                    245,
                    310,
                    280,
                    350,
                    290,
                    240
                ],

                borderWidth: 3,

                tension: 0.4,

                fill: true,

                pointRadius: 4

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

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


/* ==========================================
   2. TRAFFIC PIE CHART
========================================== */

const trafficPieElement =
    document.getElementById("trafficPie");

if (trafficPieElement) {

    new Chart(trafficPieElement, {

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

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}


/* ==========================================
   3. VEHICLE BAR CHART
========================================== */

const vehicleChartElement =
    document.getElementById("vehicleChart");

if (vehicleChartElement) {

    new Chart(vehicleChartElement, {

        type: "bar",

        data: {

            labels: [
                "Temple",
                "Market",
                "Ring Road",
                "Bus Stand",
                "Hospital"
            ],

            datasets: [{

                label: "Vehicles",

                data: [
                    245,
                    180,
                    95,
                    210,
                    140
                ],

                borderWidth: 1,

                borderRadius: 8

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

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


/* ==========================================
   4. NOTIFICATION BUTTON
========================================== */

function showNotification() {

    alert(
        "🚨 TRAFFIC ALERT\n\n" +
        "Heavy traffic detected near Temple Road.\n\n" +
        "Recommended action:\n" +
        "Use Ring Road as an alternate route."
    );

}


/* ==========================================
   5. AI ROUTE BUTTON
========================================== */

function showRoute() {

    alert(
        "🤖 AI RECOMMENDED ROUTE\n\n" +
        "Temple Road\n" +
        "      ↓\n" +
        "Ring Road\n" +
        "      ↓\n" +
        "Bus Stand Road\n\n" +
        "Expected traffic reduction: 25%"
    );

}


/* ==========================================
   6. VIEW ROAD
========================================== */

function viewRoad(roadName) {

    alert(
        "🚦 ROAD INFORMATION\n\n" +
        "Road: " + roadName + "\n\n" +
        "Traffic monitoring is active.\n" +
        "AI system is analysing traffic conditions."
    );

}


/* ==========================================
   7. REFRESH TRAFFIC
========================================== */

function refreshTraffic() {

    const button =
        document.querySelector(".refresh-btn");

    if (button) {

        button.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Updating...';

        setTimeout(function () {

            button.innerHTML =
                '<i class="fa-solid fa-check"></i> Updated';

            setTimeout(function () {

                button.innerHTML =
                    '<i class="fa-solid fa-rotate"></i> Refresh';

            }, 1500);

        }, 1000);

    }

}


/* ==========================================
   8. SEARCH
========================================== */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "keyup",
        function () {

            const searchText =
                this.value.toLowerCase();

            const rows =
                document.querySelectorAll(
                    "#trafficTable tbody tr"
                );

            rows.forEach(function (row) {

                const rowText =
                    row.innerText.toLowerCase();

                if (rowText.includes(searchText)) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        }
    );

}


/* ==========================================
   9. CARD CLICK EFFECT
========================================== */

const statCards =
    document.querySelectorAll(".stat-card");

statCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const title =
                this.querySelector("p").innerText;

            const value =
                this.querySelector("h2").innerText;

            alert(
                title +
                "\n\nCurrent Value: " +
                value
            );

        }
    );

});


/* ==========================================
   10. PERIOD SELECT
========================================== */

const period =
    document.getElementById("trafficPeriod");

if (period) {

    period.addEventListener(
        "change",
        function () {

            alert(
                "Traffic data changed to: " +
                this.value +
                "\n\nDemo data will be replaced with database data later."
            );

        }
    );

}


/* ==========================================
   11. SYSTEM MESSAGE
========================================== */

console.log(
    "🚦 AI Festival Traffic Management Dashboard Loaded"
);

console.log(
    "📊 Demo traffic data active"
);

console.log(
    "🗄️ Database connection: Not connected yet"
);
