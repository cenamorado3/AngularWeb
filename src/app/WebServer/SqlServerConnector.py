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
        return connection.cursor()


    # def Create(string: query):
    #     cursor = connect()
    #     cursor.execute(query)
    #     cursor.commit

    def Read(self, query: str) -> List[User]:
        cursor = self.connect()
        cursor.execute(query)
        users = []
        for row in cursor:
            users.append(User(row.user_name, row.password))
        return users


    # def Update(string: query):
    #     cursor = connect()
    #     cursor.execute(query)
    #     cursor.commit
    def UpdatePassword(self, query: str):
        cursor = self.connect()
        cursor.execute(query)
        cursor.commit()

    # def Delete(string: query):
    #     cursor.execute(query)
    #     conn.commit()


    # DEF SPECIFIC FUNCTIONS AND QUERIES BELOW