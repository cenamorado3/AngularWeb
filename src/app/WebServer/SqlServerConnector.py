import pyodbc
from AngularWeb.src.app.WebServer.User import User
from AngularWeb.src.app.WebServer.Products import Products
from typing import List
class PyDBCConnector:
    def connect(self):
        #redirect this to you database
        server = 'CHRIS\SQLEXPRESS' 
        database = 'Website' 
        username = 'ANGULAR' 
        password = 'ANGULAR2' 
        connection = pyodbc.connect('DRIVER={SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
        return connection


    # def Create(string: query):
    #     cursor = connect()
    #     cursor.execute(query)
    #     cursor.commit

    def Read(self, query: str) -> List[User]:
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        users = []
        for row in cursor:
            users.append(User(row.user_name, row.password))
        cursor.close()
        connection.close()
        return users


    # def Update(string: query):
    #     cursor = connect()
    #     cursor.execute(query)
    #     cursor.commit
    def UpdatePassword(self, query: str):
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        cursor.commit()
        self.CloseConnection(cursor, connection)



    def ValidatePassword(self, query: str) -> List[User]:
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        users = []
        for row in cursor:
            users.append(User(row.user_name, row.password))
        self.CloseConnection(cursor, connection)
        return users



    def Delete(self, query: str):
        connection = self.connect()
        cursor = connection.cursor()
        rowsdeleted = cursor.execute(query).rowcount
        if rowsdeleted == 1:
            cursor.commit()
            self.CloseConnection(cursor, connection)
            return True
        else:
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






    def CloseConnection(self, cursor, connection):
        cursor.close()
        connection.close()