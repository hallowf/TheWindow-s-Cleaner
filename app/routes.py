from flask import Flask, request, jsonify, send_from_directory
from app import app

@app.route('/')
def serve_static_index():
    return send_from_directory("static/build/", "index.html")

@app.route("/static/css/<path:path>")
def serve_static_css(path):
    return send_from_directory("static/build/static/css/", path)

@app.route("/static/js/<path:path>")
def serve_static_js(path):
    return send_from_directory("static/build/static/js/", path)