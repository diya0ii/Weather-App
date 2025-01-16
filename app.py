from flask import Flask, jsonify, request
from flask_cors import CORS
from test import get_weather

app = Flask(__name__)
CORS(app)

@app.route("/api/weather", methods=["GET"])
def fetch_weather():
    city = request.args.get("city")
    if not city:
        return jsonify({"error": "City not provided"}), 400
    
    result = get_weather(city)
    if "error" in result:
        return jsonify(result), 404
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
