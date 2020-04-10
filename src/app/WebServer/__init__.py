from flask import Flask, jsonify, request
import json
from datetime import datetime
from flask_cors import *
from flask_cors.core import *
from AngularWeb.src.app.WebServer import SqlServerConnector

app = Flask(__name__)
cors = CORS(app, resources={r"/archive/*": {"origins": "*"}})


#logging.getLogger('flask_cors').level = logging.DEBUG



######################          HOME

@app.route("/")
def home():
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        results = sqc.Read('SELECT * FROM [Website].[dbo].[User]')
        response = ''
        for result in results:
                response += '[{"user_name":' + '"' + result.user_name + '"' + '},{"password":'+ '"' + result.password + '"' + '}]'
        return json.dumps(response)




######################          USER SERVICE

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

######################          KEYBOARD


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

######################          MICE

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








######################        ADMIN
@app.route("/archive/mice/<string:PID>", methods=['DELETE'])
def DeleteMouse(PID):
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        result =sqc.Delete(str.format('DELETE FROM [Website].[dbo].[Mice] WHERE ProductID={0}', PID))
        if result == True:
                return jsonify({'Response':'Record was succesfully deleted'})
        else:
                return jsonify({'Response':'Record failed to delete or does not exist'})


@app.route("/archive/keyboards/<string:PID>", methods=['DELETE'])
def DeleteKeyboard(PID):
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        result =sqc.Delete(str.format('DELETE FROM [Website].[dbo].[Keyboards] WHERE ProductID={0}', PID))
        if result == True:
                return jsonify({'Response':'Record was succesfully deleted'})
        else:
                return jsonify({'Response':'Record failed to delete or does not exist'})



        