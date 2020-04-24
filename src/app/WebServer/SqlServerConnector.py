import pyodbc
from AngularWeb.src.app.WebServer.User import User
from AngularWeb.src.app.WebServer.Products import Products
from typing import List
from pyodbc import IntegrityError
class PyDBCConnector:
    def connect(self):
        #redirect this to you database
        server = 'CHRIS\SQLEXPRESS' 
        database = 'Website' 
        username = 'ANGULAR' 
        password = 'ANGULAR2' 
        connection = pyodbc.connect('DRIVER={SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
        return connection


    def Create(self, query: str):
        try:
            connection = self.connect()
            cursor = connection.cursor()
            cursor.execute(query)
            cursor.commit()
            return True
        except IntegrityError:
            return False


    def Read(self, query: str) -> List[User]:
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        users = []
        for row in cursor:
            users.append(User(row.user_name, row.password))
        self.CloseConnection(cursor, connection)
        return users


    def Update(self, query: str):
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        cursor.commit()
        self.CloseConnection(cursor, connection)
        return True


    def UpdatePassword(self, query: str):
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        cursor.commit()
        self.CloseConnection(cursor, connection)



    def ValidatePassword(self, query: str):
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        password = ''
        for row in cursor:
            password = row.password
        self.CloseConnection(cursor, connection)
        return password



    def Delete(self, query: str):
        connection = self.connect()
        cursor = connection.cursor()
        rowsdeleted = cursor.execute(query).rowcount
        if rowsdeleted == 1:
            cursor.commit()
            self.CloseConnection(cursor, connection)
            return True
        else:
            self.CloseConnection(cursor, connection)
            return False


    def GetProducts(self, query: str) -> List[Products]:
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        products = []
        for row in cursor:
            products.append(Products(row.ProductID, row.ProductName, row.ProductDescription, row.ProductPrice, row.FilePath))
        self.CloseConnection(cursor, connection)
        return products




    def QuoteWrap(self, s: str):
        return "'" + s + "'"
    #do the needful
    def CloseConnection(self, cursor, connection):
        cursor.close()
        connection.close()


    #do the needful, again
    def GetCursor(self):
        connection = self.connect()
        cursor = connection.cursor()

    def ValidateAndGenerateUpdate(self, data):
        query = ''
        if str.isspace(data['ProductName']) == False:
            query += '[ProductName] = {1},'
        if data['ProductDescription'] != ' ':
            query += '[ProductDescription] = {2},'
        if data['ProductPrice'] != ' ':
            query += '[ProductPrice] = {3},'
        if data['FilePath'] != ' ':
            query += '[FilePath] = {4} \n'

        query +=  'WHERE ProductID = {0}'
        return query
