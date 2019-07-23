import flask
from flask import request, jsonify
from arcgis.gis import GIS   #python wrapper
from arcgis.mapping import WebMap
# import json
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

gis = GIS("https://arcgis.com", "mkfair05", "2E5nSda4nZUKbCp")
wm = WebMap()


@app.route('/layer', methods=['GET'])
def getLayerData():
    search_result = gis.content.search(query="", item_type="Feature *")
    first_item = search_result[0]
    item_id = first_item.id
    item = gis.content.get(item_id)
    # return first_item

    layer = first_item.layers
    lay = layer[0]

    wm.add_layer(lay)

    web_map_properties = {
        'title':'BC Lightstation Sea Surface Data',
        'snippet':'This map shows the temperature and salinity of the sea surface at high tide'+\
            'for lightstations on the BC coast.',
        'tags':'ArcGIS Python API'
    }
    webmap_item = wm.save(item_properties=web_map_properties)
    webmap_obj = WebMap(webmap_item)
    return webmap_obj


# @app.route('/user', methods=['GET'])
def login():
    # connect to instance of ArcGIS Online
    return gis.properties.user.username


# @app.route('/hello')
def helloworld():
    return "hello world"


if __name__ == '__main__':
    app.run(debug=True)
    # login()
    # getLayerData()
    # getMap()

# @app.route('/', methods=['GET'])

# # A route to return all of the available entries in our catalog.
# @app.route('/api/', methods=['GET'])
# def api_all():
#     return jsonify(books)

# app.run()