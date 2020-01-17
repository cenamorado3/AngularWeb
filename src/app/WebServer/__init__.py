from flask import Flask
from datetime import datetime
from flask_cors import CORS
from flask import jsonify
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "*"}})


@app.route("/")
def home():
    #mock returns string, sould return array which front end will handle
    #logging.getLogger('flask_cors').level = logging.DEBUG
    return '[{"message": "hello"},{"message": "world"}]'