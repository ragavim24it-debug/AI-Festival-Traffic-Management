/* ==========================================
   AI FESTIVAL TRAFFIC MANAGEMENT
   AI PREDICTION JAVASCRIPT
   Demo Version - No Database
========================================== */

function predictTraffic() {

    // Get user input
    const road = document.getElementById("road").value;

    const vehicles =
        Number(document.getElementById("vehicles").value);

    const time =
        document.getElementById("time").value;

    const festivalDay =
        document.getElementById("festivalDay").value;


    // Validate vehicle input
    if (vehicles < 0 || isNaN(vehicles)) {

        alert("Please enter a valid vehicle count.");

        return;
    }


    // --------------------------------------
    // DEMO AI PREDICTION LOGIC
    // --------------------------------------

    let trafficLevel;
    let predictedVehicles;
    let delay;
    let confidence;
    let recommendation;


    if (vehicles >= 250) {

        trafficLevel = "HIGH";

        predictedVehicles =
            Math.round(vehicles * 1.25);

        delay = "25 - 40 minutes";

        confidence = "96%";

        recommendation =
            "Heavy traffic is predicted on " +
            road +
            ". Use Ring Road as an alternate route and consider redirecting vehicles.";

    }

    else if (vehicles >= 150) {

        trafficLevel = "MEDIUM";

        predictedVehicles =
            Math.round(vehicles * 1.15);

        delay = "10 - 25 minutes";

        confidence = "91%";

        recommendation =
            "Moderate traffic is expected on " +
            road +
            ". Monitor the road and adjust traffic signals if required.";

    }

    else {

        trafficLevel = "LOW";

        predictedVehicles =
            Math.round(vehicles * 1.08);

        delay = "0 - 10 minutes";

        confidence = "88%";

        recommendation =
            "Traffic is expected to remain low on " +
            road +
            ". Normal traffic management is sufficient.";

    }


    // --------------------------------------
    // UPDATE RESULT
    // --------------------------------------

    document.getElementById("predictionResult")
        .innerText =
        trafficLevel + " TRAFFIC";

    document.getElementById("predictionMessage")
        .innerText =
        "AI prediction for " +
        road +
        " during " +
        time +
        " (" +
        festivalDay +
        ").";


    document.getElementById("trafficLevel")
        .innerText =
        trafficLevel;


    document.getElementById("predictedVehicles")
        .innerText =
        predictedVehicles;


    document.getElementById("delay")
        .innerText =
        delay;


    document.getElementById("confidence")
        .innerText =
        confidence;


    document.getElementById("recommendationContent")
        .innerHTML =
        `
        <strong>🤖 AI Recommendation</strong>
        <br><br>
        ${recommendation}
        `;


    // --------------------------------------
    // CHANGE RESULT COLOR
    // --------------------------------------

    const resultCard =
        document.getElementById("resultCard");


    if (trafficLevel === "HIGH") {

        resultCard.style.background =
            "linear-gradient(135deg, #991b1b, #dc2626)";

    }

    else if (trafficLevel === "MEDIUM") {

        resultCard.style.background =
            "linear-gradient(135deg, #92400e, #f59e0b)";

    }

    else {

        resultCard.style.background =
            "linear-gradient(135deg, #065f46, #16a34a)";

    }


    // --------------------------------------
    // CONSOLE INFORMATION
    // --------------------------------------

    console.log("AI Prediction Generated");

    console.log("Road:", road);

    console.log("Vehicles:", vehicles);

    console.log("Time:", time);

    console.log("Festival Day:", festivalDay);

    console.log("Traffic:", trafficLevel);

}
