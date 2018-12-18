from flask import Flask, Response, request, jsonify, send_from_directory
from app import app

b_url = "/twc-api-"

# Tools routes
@app.route(b_url + "<string:tool>")
def run_tool(tool):
  return "Tool ran"

# Options route
@app.route('/twc-api-options')
def user_options():
  req = request.args.get("req")
  if req == "save":
    # Save options
    return "options saved"
  elif req == "reset":
    # Reset options
    return "options reset"
  else:
    return Response("Uknown parameter: " + req, status=404, mimetype="text/plain")