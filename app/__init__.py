from flask import Flask


app = Flask(__name__)

from app import routes
from app import api
from .logs.logger import Log