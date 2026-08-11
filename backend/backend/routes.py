from flask import Blueprint, request, jsonify

from database import (
    create_database,
    insert_traffic,
    get_all_traffic
)


traffic_routes = Blueprint(
    "traffic_routes",
    __name__
)


# Create database
create_database()


# GET all traffic data
@traffic_routes.route(
    "/api/traffic",
    methods=["GET"]
)
def get_traffic():

    data = get_all_traffic()

    return jsonify({
        "status": "success",
        "count": len(data),
        "data": data
    })


# ADD traffic data
@traffic_routes.route(
    "/api/traffic",
    methods=["POST"]
)
def add_traffic():

    data = request.get_json()

    road = data.get("road")
    vehicles = data.get("vehicles")
    speed = data.get("speed")
    traffic_level = data.get("traffic_level")
    delay = data.get("delay")

    if not road:
        return jsonify({
            "status": "error",
            "message": "Road name is required"
        }), 400

    insert_traffic(
        road,
        vehicles,
        speed,
        traffic_level,
        delay
    )

    return jsonify({
        "status": "success",
        "message": "Traffic data stored successfully"
    }), 201
