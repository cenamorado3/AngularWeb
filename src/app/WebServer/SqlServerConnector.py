import pyodbc
from AngularWeb.src.app.WebServer.User import User
from typing import List
# TEST THIS LATER
class PyDBCConnector:
    def connect(self):
        #redirect this to database
        server = 'CHRIS\SQLEXPRESS' 
        database = 'Website' 
        username = 'ANGULAR' 
        password = 'ANGULAR' 
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
        cursor.close()



    def ValidatePassword(self, query: str) -> List[User]:
        connection = self.connect()
        cursor = connection.cursor()
        cursor.execute(query)
        users = []
        for row in cursor:
            users.append(User(row.user_name, row.password))
        cursor.close()
        return users
    # def Delete(string: query):
    #     cursor.execute(query)
    #     conn.commit()

    # DEF SPECIFIC FUNCTIONS AND QUERIES BELOW