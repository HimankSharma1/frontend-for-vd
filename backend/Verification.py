import flask
from twilio.rest import Client 
from flask_cors import CORS
from tkinter import messagebox
import random

account_sid = 'AC9eae00df1c006eee03a3944f96a1db25' 
auth_token = 'd2112138d0ad567ba0ca16931beffa32' 
client = Client(account_sid, auth_token)

app=flask.Flask(__name__)
cors=CORS(app,resources={r'*':{'origins': '*'}})

@app.route("/phoneno/number/<string:n>")
def message(n):
    global randomotp
    randomotp = random. randint(100000, 999999)
    apps= {f'otp sent to {n} is':randomotp}
    try:
        message = client.messages.create(
                    body=f'Your OTP for Virtual Doctor Verification is {randomotp}',
                    from_='+18055909513',
                    to="+91"+n
                )
        return flask.jsonify(1)
    except Exception as error:
        return flask.jsonify(0)

        
ringing=0
isCallActive=0

@app.route("/phoneno/otp/<string:n>")
def otp(n):
    if str(randomotp)==n:
        return flask.jsonify(1)
    else:
        return flask.jsonify(0)
    
@app.route("/call/<string:n>")
def call(n):
    global ringing
    if (int(n)==1):
        ringing=1
        return flask.jsonify("active!")
    elif (int(n)==0):
        ringing=0
        return flask.jsonify("call ended!")

@app.route("/call/state")
def callstate():
    global ringing
    return flask.jsonify(ringing)

@app.route("/call/Call_ongoing/<string:n>")
def callOngoing(n):
    global isCallActive
    isCallActive=int(n)
    return flask.jsonify(isCallActive)

@app.route("/call/isCallOnline")
def isCallOnline():
    global isCallActive
    return flask.jsonify(isCallActive)


if __name__=="__main__":
    app.run(debug=True,port=3000)

