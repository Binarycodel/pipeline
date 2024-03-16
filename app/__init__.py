from flask import Flask 


def pipline_application():

    app = Flask(__name__)

    from app import view

    return app
