from flask import Flask, request, jsonify, send_from_directory
from app import app

# Catch all routes for react compatibility
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return 'You want path: %s' % path

# Serve index
@app.route('/')
def serve_static_index():
    return send_from_directory("static/build/", "index.html")

# Serve js and css
@app.route("/static/<path:c_dir>/<path:c_file>")
def serve_static_css(c_dir, c_file):
    c_dir = str(c_dir + "/")
    return send_from_directory("static/build/static/" + c_dir, c_file)

# @app.route("/static/js/<path:path>")
# def serve_static_js(path):
#     return send_from_directory("static/build/static/js/", path)