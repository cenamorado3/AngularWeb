from flask import Flask, jsonify, request
import json
from datetime import datetime
from flask_cors import *
from flask_cors.core import *
from AngularWeb.src.app.WebServer import SqlServerConnector

app = Flask(__name__)
cors = CORS(app, resources={r"/archive/*": {"origins": "*"}})



#SECURE

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

######################          LOGIN
@app.route("/archive/login", methods=['POST'])
def ValidateUser():
        data = json.loads(request.data)
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        result = sqc.ValidatePassword('SELECT [password] FROM [Website].[dbo].[User] WHERE [user_name] = ' + sqc.QuoteWrap(data['account']))
        if result == data['password']:
                return jsonify({'Response': 'Login successful'})
        else:
             return jsonify({'Response': 'Login failed'})   

######################          USER

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
        result = sqc.Delete(str.format('DELETE FROM [Website].[dbo].[Mice] WHERE ProductID={0}', PID))
        if result == True:
                return jsonify({'Response':'Record was succesfully deleted'})
        else:
                return jsonify({'Response':'Record failed to delete or does not exist'})


@app.route("/archive/mice", methods=['POST'])
def CreateMouse():
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        data = json.loads(request.data)
        result = sqc.Create("""
                                INSERT INTO [dbo].[Mice]
                                        ([ProductID]
                                        ,[ProductName]
                                        ,[ProductDescription]
                                        ,[ProductPrice]
                                        ,[FilePath])
                                VALUES
                                        ({0}
                                        ,{1}
                                        ,{2}
                                        ,{3}
                                        ,{4})
                                """.format(int(data['PID']), sqc.QuoteWrap(data['ProductName']), sqc.QuoteWrap(data['ProductDescription']), float(data['ProductPrice']), sqc.QuoteWrap(data['FilePath'])))
        if result == True:
                return jsonify({'Response':'Record was succesfully created'})
        else:
                return jsonify({'Response':'Failed to create record or Product ID already exist.'})


@app.route("/archive/mice/<string:PID>", methods=['PATCH'])
def UpdateMouse(PID):
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        data = json.loads(request.data)
        result = sqc.Update("""
                        UPDATE [Website].[dbo].[Mice]
                        SET """ +  sqc.ValidateAndGenerateUpdate(data).format(PID, sqc.QuoteWrap(data['ProductName']), sqc.QuoteWrap(data['ProductDescription']), float(data['ProductPrice']), sqc.QuoteWrap(data['FilePath'])))
        if result == True:
                return jsonify({'Response':'Record was succesfully updated.'})

@app.route("/archive/keyboards/<string:PID>", methods=['DELETE'])
def DeleteKeyboard(PID):
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        result = sqc.Delete(str.format('DELETE FROM [Website].[dbo].[Keyboards] WHERE ProductID={0}', PID))
        if result == True:
                return jsonify({'Response':'Record was succesfully deleted'})
        else:
                return jsonify({'Response':'Failed to delete record or record does not exist'})

@app.route("/archive/keyboards", methods=['POST'])
def CreateKeyboard():
        sqc = SqlServerConnector.PyDBCConnector()
        sqc.connect()
        data = json.loads(request.data)
        result = sqc.Create("""
                                INSERT INTO [dbo].[Keyboards]
                                        ([ProductID]
                                        ,[ProductName]
                                        ,[ProductDescription]
                                        ,[ProductPrice]
                                        ,[FilePath])
                                VALUES
                                        ({0}
                                        ,{1}
                                        ,{2}
                                        ,{3}
                                        ,{4})
                                """.format(int(data['PID']), sqc.QuoteWrap(data['ProductName']), sqc.QuoteWrap(data['ProductDescription']), float(data['ProductPrice']), sqc.QuoteWrap(data['FilePath'])))
        if result == True:
                return jsonify({'Response':'Record was succesfully created'})
        else:
                return jsonify({'Response':'Failed to create record or Product ID already exist.'})

        