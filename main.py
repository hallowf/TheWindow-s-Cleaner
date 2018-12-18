import os
from gevent.pywsgi import WSGIServer
from app import app

FLASK_ENV = os.environ.get("FLASK_ENV", "production")

### App parameters
app.config.update(
    SECRET_KEY = os.urandom(16)
)


### Check if in development or production and configure testing or sentry accordingly
if FLASK_ENV == "development":
    app.config["TESTING"] = True
else:
    #sentry = Sentry(app, dsn='')
    print("Sentry is deactivated")

### Configure cross-origin requests on api backend
print("Cross origin requests disabled")
#cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


# Run app
if __name__ == "__main__":
    port = int(os.environ.get("PORT", "2890"))
    if FLASK_ENV == "development":
      app.run( host="127.0.0.1",port=port)
    else:
      http_server = WSGIServer(("127.0.0.1", port), app)
      http_server.serve_forever()
    