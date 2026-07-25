def predict_traffic(vehicle_count):
    if vehicle_count < 100:
        return "Low"
    elif vehicle_count < 200:
        return "Medium"
    else:
        return "High"

vehicles = 245
prediction = predict_traffic(vehicles)

print("Predicted Traffic:", prediction)
