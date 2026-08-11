/* ==========================================
   AI FESTIVAL TRAFFIC MANAGEMENT
   ANALYTICS JAVASCRIPT
   Demo Version - No Database
========================================== */


/* ==========================================
   1. TRAFFIC VOLUME LINE CHART
========================================== */

const volumeCanvas =
    document.getElementById("volumeChart");

if (volumeCanvas) {

    new Chart(volumeCanvas, {

        type: "line",

        data: {

            labels: [
                "8 AM",
                "10 AM",
                "12 PM",
                "2 PM",
                "4 PM",
                "6 PM",
                "8 PM",
                "10 PM"
            ],

            datasets: [{

                label: "Vehicles",

                data: [
                    80,
                    120,
                    165,
                    190,
                    245,
                    310,
                    275,
                    150
                ],

                borderWidth: 3,

                tension: 0.4,

                fill: true

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

                    beginAtZero: true,

                    title: {
                        display: true,
                        text: "Vehicles"
                    }

                },

                x: {

                    title: {
                        display: true,
                        text: "Time"
                    }

                }

            }

        }

    });

}


/* ==========================================
   2. TRAFFIC DISTRIBUTION DOUGHNUT
========================================== */

const distributionCanvas =
    document.getElementById("distributionChart");

if (distributionCanvas) {

    new Chart(distributionCanvas, {

        type: "doughnut",

        data: {

            labels: [
                "Low Traffic",
                "Medium Traffic",
                "High Traffic"
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
   3. ROAD COMPARISON BAR CHART
========================================== */

const roadCanvas =
    document.getElementById("roadChart");

if (roadCanvas) {

    new Chart(roadCanvas, {

        type: "bar",

        data: {

            labels: [
                "Temple Road",
                "Market Road",
                "Ring Road",
                "Bus Stand",
                "Hospital Road"
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

                borderRadius: 7

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

                    beginAtZero: true,

                    title: {
                        display: true,
                        text: "Number of Vehicles"
                    }

                }

            }

        }

    });

}


/* ==========================================
   4. PERIOD FILTER
========================================== */

const periodSelect =
    document.getElementById("analyticsPeriod");

if (periodSelect) {

    periodSelect.addEventListener(
        "change",
        function () {

            console.log(
                "Analytics period selected:",
                this.value
            );

            alert(
                "Analytics updated for: " +
                this.value
            );

        }
    );

}


/* ==========================================
   5. EXPORT DATA
========================================== */

function exportData() {

    const data = [

        [
            "Road",
            "Vehicles",
            "Speed",
            "Delay",
            "Status"
        ],

        [
            "Temple Road",
            "245",
            "18 km/h",
            "35 min",
            "High"
        ],

        [
            "Market Road",
            "180",
            "28 km/h",
            "20 min",
            "Medium"
        ],

        [
            "Ring Road",
            "95",
            "45 km/h",
            "8 min",
            "Low"
        ],

        [
            "Bus Stand Road",
            "210",
            "22 km/h",
            "28 min",
            "High"
        ],

        [
            "Hospital Road",
            "140",
            "35 km/h",
            "12 min",
            "Medium"
        ]

    ];


    let csvContent = "";


    data.forEach(function(row) {

        csvContent +=
            row.join(",") + "\n";

    });


    const blob = new Blob(
        [csvContent],
        {
            type: "text/csv;charset=utf-8;"
        }
    );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "traffic_analytics.csv";


    link.click();


    URL.revokeObjectURL(url);


    console.log(
        "Traffic analytics exported."
    );

}
