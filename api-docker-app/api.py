import flask
from flask import request, jsonify
from flask_cors import CORS
from arcgis.gis import GIS
from arcgis.mapping import WebMap

app = flask.Flask(__name__)

# FUCK YOU CORS YOU ARE THE WORST
CORS(app)

gis = GIS("https://arcgis.com", "mkfair05", "2E5nSda4nZUKbCp")

@app.route('/map', methods=['GET'])
def getMap():
    search_result = gis.content.search(query="", item_type="Web Map")
    
    first_item = search_result[0]
    item_id = first_item.id

    return item_id

if __name__ == '__main__':
    app.run(debug=True)
