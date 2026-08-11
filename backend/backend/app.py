from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow frontend to communicate with backend
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "status": "success",
        "message": "AI Festival Traffic Management Backend is running!"
    })


@app.route("/api/traffic")
def traffic():
    return jsonify({
        "total_vehicles": 245,
        "roads_monitored": 18,
        "parking_available": 120,
        "emergency_alerts": 2,
        "ai_accuracy": "96%",
        "smart_signals": 32
    })


@app.route("/api/health")
def health():
    return jsonify({
        "status": "Backend connected"
    })


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )
