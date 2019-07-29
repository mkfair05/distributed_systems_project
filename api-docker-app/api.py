import flask
from flask import request, jsonify
from flask_cors import CORS, logging
from arcgis.gis import GIS
from arcgis.features import FeatureLayer, SpatialDataFrame
import json
# from pandas import * as pd

app = flask.Flask(__name__)

# FUCK YOU CORS YOU ARE THE WORST
cors = CORS()
logging.getLogger('flask_cors').level = logging.DEBUG

gis = GIS("https://arcgis.com", "mkfair05", "2E5nSda4nZUKbCp")

@app.route('/api/map', methods=['GET'])
def getMap():
    search_result = gis.content.search(query="", item_type="Web Map")
    
    first_item = search_result[0]
    item_id = first_item.id

    return item_id

@app.route('/api/data', methods=['GET'])
def getData():

    search_result = gis.content.search(query="", item_type="Feature *")
    first_item = search_result[1]
    item_id = first_item.id
    item = gis.content.get(item_id)

    layer = first_item.layers
    lay = layer[0]  #FeatureLayer   

    # call query() on feature layer object and get a FeatureSet.
    feature_set = lay.query(out_fields="*", return_geometry=False)  #.sdf makes data frame object

    # FeatureSet class has sdf property to make pandas spatialdataframe table
    # data_frame = feature_set.sdf

    geoJ = feature_set.to_json

    return geoJ

if __name__ == '__main__':
    app.run(debug=True)
    # app.run()
    # getData()