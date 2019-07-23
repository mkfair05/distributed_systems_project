import flask
from flask import request, jsonify
from arcgis.gis import GIS   #python wrapper
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

gis = GIS("https://arcgis.com", "mkfair05", "2E5nSda4nZUKbCp")

@app.route('/layer', methods=['GET'])
def getLayer():
    search_result = gis.content.search(query="", item_type="Feature *")
    first_item = search_result[0]
    item_id = first_item.id

    item = gis.content.get(item_id)
    return item_id

    
@app.route('/user', methods=['GET'])
def login():
    # connect to instance of ArcGIS Online
    return gis.properties.user.username



@app.route('/hello')
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