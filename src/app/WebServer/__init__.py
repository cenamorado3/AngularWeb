from flask import Flask
from datetime import datetime
from flask_cors import CORS
from flask import jsonify
import json
from flask import request
from AngularWeb.src.app.WebServer import SqlServerConnector

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
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        results = sqc.Read('SELECT * FROM [Website].[dbo].[User]')
        response = ''
        for result in results:
                response += '[{"user_name":' + '"' + result.user_name + '"' + '},{"password":'+ '"' + result.password + '"' + '}]'
        return json.dumps(response)

@app.route("/archive/password", methods=['PUT'])
def ChangePassword():
        try:
                payload = json.loads(request.data)
                sqc = SqlServerConnector.PyDBCConnector()
                sqc.connect()
                sqc.UpdatePassword('UPDATE [dbo].[User] SET password = ' + "'" + payload['confirmPassword'] + "'" + ' WHERE [user_name] = ' + "'" + 'TEST' + "'" + ' AND  password = ' + "'" + 'TESTPASSWORD' + "'")
                 #update validator to handle persistent passwords and use that data here - encrypt or leverage JWT...
                return json.dumps('{"PasswordChanged": true}')
        except Exception:
                print('EXCEPTION')
                return json.dumps('{"PasswordChanged": false}')



@app.route("/archive/form", methods=['POST'])
def POSTForm():
        return '[{"ServerResponded": "True"},{"Name": "GET FROM REQUEST"},{"Number": "GET FROM REQUEST"},{"validated": "GET FROM REQUEST"}]'


@app.route("/archive/password", methods=['GET'])
def GetUserPass():
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        results = sqc.Read('SELECT * FROM [Website].[dbo].[User]')
        response = ''
        for result in results:
                response = result.password
        return json.dumps('{"Password":' + '"' + response + '"}')