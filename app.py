from flask import Flask
# from redis import Redis, RedisError
import os
import socket
# from html import HTML
import html

# Connect to Redis
# redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

# app = Flask(__name__)
# h = HTML()
# @app.route("/")
def hello():

    # try:
    #     visits = redis.incr("counter")
    # except RedisError:
    #     visits = "<i>cannot connect to Redis, counter disabled</i>"

    # date =''

    html = "<h1>CSC 462 Distributed Systems Project!</h1>" \
    "<h2>Meghan Fair V00839675</h2>" \
    "<b>Hostname:</b>{hostname}<br/>" \
    # "<b>Visits:</b> {visits}" \
    # "<br>{title}<br>" \

    # p = h.h1("CSC 462 Distributed Systems Project!")
    # p.br
    # h.h2("Meghan Fair V00839675")
    # p.br

    string = ""
    h=""
    l = ""
    headerRow=[]

    dataSet = []
    with open("test_data.csv", "r") as csv_file:
        lines = csv_file.readlines()
        data_title = lines[0]
        # p+=data_title
        second_line = lines[1]
        headerRow = second_line.split(",")

        # string += "<table>"\
        #     "<tr>"\
        # for i in range(headerRow):
        #     string += "<th>{headerrow[i]}</th>"\
        # string += "</tr>"
        
        string = "<table>"\
            "<tr>"\
                "<th>{headerRow0}</th>"\
                "<th>{headerRow1}</th>"\
                "<th>{headerRow2}</th>"\
                "<th>{headerRow3}</th>"\
                "<th>{headerRow4}</th>"\
            "</tr>"\
        # l = html.format(headerRow0 = headerRow[0], headerRow1 = headerRow[1],headerRow2 = headerRow[2],headerRow3 = headerRow[3],headerRow4 = headerRow[4])
        # t = h.table()
        # r = t.tr
        # r.th(headerRow[0])
        # r.th(headerRow[1])
        # r.th(headerRow[2])
        # r.th(headerRow[3])
        # r.th(headerRow[4])

        l = lines[2:]
        for i in l:
            row = i.split(",")
            date = row[0]
            salinity = row[1]
            temp = row[2]
            latitude = row[3]
            longitude = row[4]

            
            
            
            dataString = "<tr>"\
                "<td>{date}</td"\
                "<td>{salinity}</td"\
                "<td>{temp}</td"\
                "<td>{latitude}</td"\
                "<td>{longitude}</td"\
                "</tr>"\

            string += dataString

            # data_row = t.tr
            # data_row.td(date)
            # data_row.td(salinity)
            # data_row.td(temp)
            # data_row.td(latitude)
            # data_row.td(longitude)

    string += "</table>"


    h = dataString.format(date=date, salinity=salinity, temp=temp, latitude=latitude, longitude=longitude)
    print(string)
    f = html.format(name=os.getenv("NAME", "Meghan"), hostname=socket.gethostname(), visits=visits)
    l = string.format(headerRow0 = headerRow[0], headerRow1 = headerRow[1],headerRow2 = headerRow[2],headerRow3 = headerRow[3],headerRow4 = headerRow[4])

    # return html.format(name=os.getenv("NAME", "Meghan"), hostname=socket.gethostname(), visits=visits, )
    # print(f+l+h)
    # return f + l +h
if __name__ == "__main__":
    # app.run(host='0.0.0.0', port=80)
    hello()