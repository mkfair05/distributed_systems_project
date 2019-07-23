import flask
from flask import request, jsonify
# from flask_restful import Resource, Api
from arcgis.gis import GIS   #python wrapper


app = flask.Flask(__name__)
# api = Api(app)
# app.config["DEBUG"] = True

# class ArcGis (Resource):
#     def get(self):
#         return {'hello': 'world'}
gis = GIS("https://arcgis.com", "mkfair05", "2E5nSda4nZUKbCp")

def getLayer():
    # gis = GIS()
    search_result = gis.content.search(query="", item_type="Feature *")
    first_item = search_result[0]
    item_id = first_item.id

    item = gis.content.get(item_id)
    print(item)

    

def login():
    # gis = GIS()

    # connect to instance of ArcGIS Online
    print(gis.properties.user.username)
    # print(type(gis.content))



@app.route('/')
def helloworld():
    return "hello world"


if __name__ == '__main__':
    app.run(debug=True)
    # login()
    # getLayer()


# @app.route('/', methods=['GET'])

# # A route to return all of the available entries in our catalog.
# @app.route('/api/', methods=['GET'])
# def api_all():
#     return jsonify(books)

# app.run()