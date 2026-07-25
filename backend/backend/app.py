from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "AI Festival Traffic Management Backend Running"

@app.route('/traffic')
def traffic():
    return {
        "location": "Temple Road",
        "traffic": "High",
        "vehicles": 245
    }

if __name__ == "__main__":
    app.run(debug=True)
