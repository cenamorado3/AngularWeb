from flask import Flask, jsonify, request
import json
from datetime import datetime
from flask_cors import *
from flask_cors.core import *
from AngularWeb.src.app.WebServer import SqlServerConnector

app = Flask(__name__)
cors = CORS(app, resources={r"/archive/*": {"origins": "*"}})


#logging.getLogger('flask_cors').level = logging.DEBUG
#UPDATE ALL REQUEST TO GENERATE PAYLOAD
#ADD AND TEST MOCK VALIDATION
#HEADERS
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



@app.route("/archive/keyboards", methods=['GET'])
def GetKeyboardInventory():
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        results = sqc.GetProducts('SELECT * FROM [Website].[dbo].[Keyboards] ORDER BY ProductID')
        response = []
        for result in results:
                response.append(dict(
                        ProductID = str(result.ProductID),
                        ProductName = result.ProductName,
                        ProductDescription = result.ProductDescription,
                        ProductPrice = str(result.ProductPrice),
                        FilePath = result.FilePath
                ))
        return jsonify(response)



@app.route("/archive/mice", methods=['GET'])
def GetMiceInventory():
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        results = sqc.GetProducts('SELECT * FROM [Website].[dbo].[Mice] ORDER BY ProductID')
        response = []
        for result in results:
                response.append(dict(
                        ProductID = str(result.ProductID),
                        ProductName = result.ProductName,
                        ProductDescription = result.ProductDescription,
                        ProductPrice = str(result.ProductPrice),
                        FilePath = result.FilePath
                ))
        return jsonify(response)



@app.route("/archive/mice/", methods=['DELETE'])
def DeleteMouse():
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        data = json.loads(request.data)
        print(data['PID'])
        #sqc.Delete('DELETE FROM [Website].[dbo].[Mice] WHERE ProductID=' + data[PID])
        return jsonify({'Response':[1,2,3,4]})



        