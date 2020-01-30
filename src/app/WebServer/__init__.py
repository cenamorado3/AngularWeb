from flask import Flask
from datetime import datetime
from flask_cors import CORS
from flask import jsonify
import json
from flask import request

app = Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "*"}})

#UPDATE ALL REQUEST TO GENERATE PAYLOAD
#ADD AND TEST MOCK VALIDATION
#CREATE  DATABASE CONNECTOR
#HEADERS
#HANDLE CORS
#MAKE ASYNC - FIRST REQUEST FAILS


@app.route("/")
def home():
    return '[{"message": "hello"},{"message": "world"}]'

@app.route("/archive/password", methods=['PUT'])
def ChangePassword():
        return '[{"oldPassword": "GET FROM REQUEST"},{"newPassword": "GET FROM REQUEST"},{"validated": "ADD VALIDATION"}]'


@app.route("/archive/form", methods=['POST'])
def POSTForm():
        return '[{"ServerResponded": "True"},{"Name": "GET FROM REQUEST"},{"Number": "GET FROM REQUEST"},{"validated": "GET FROM REQUEST"}]'