import pyodbc
from AngularWeb.src.app.WebServer.User import User
from AngularWeb.src.app.WebServer.Products import Products
from typing import List
# TEST THIS LATER
class PyDBCConnector:
    def connect(self):
        #redirect this to database
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
        self.CloseAll(cursor, connection)



    def ValidatePassword(self, query: str) -> List[User]:
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        users = []
        for row in cursor:
            users.append(User(row.user_name, row.password))
        self.CloseAll(cursor, connection)
        return users



    def Delete(self, query: str):
        connection = self.cursor.execute(query)
        cursor = connection.cursor()
        cursor.execute(query)
        self.CloseAll(cursor, connection)


    def GetProducts(self, query: str) -> List[Products]:
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        products = []
        for row in cursor:
            products.append(Products(row.ProductID, row.ProductName, row.ProductDescription, row.ProductPrice, row.FilePath))
        self.CloseAll(cursor, connection)
        return products






    def CloseAll(self, cursor, connection):
        cursor.close()
        connection.close()