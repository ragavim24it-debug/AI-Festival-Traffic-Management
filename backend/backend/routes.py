from flask import jsonify

def get_traffic():
    return jsonify({
        "status": "success",
        "message": "Traffic data loaded"
    })
