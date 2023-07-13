import pickle
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')

# {
#     "tenth": 80,
#     "inter": 70,
#     "competitive": 1,
#     "attendance": 0,
#     "cgpa": 6.7,
#     "willingtocontinue": 1,
#     "interest": 1,
#     "othercareer": 1,
#     "financialstatus": 0,
#     "family": 1,
#     "personalissues": 0,
#     "addictions": 0,
#     "bullying": 1,
#     "a":1,
#     "b":1,
#     "c":2,
#     "d":2,
#     "e":3,
#     "f":3,
#     "g":3, n                 v                       
#     "h":3,
#     "i":3,
#     "j":4
# }

@app.route('/predict', methods = ['POST'])
def home():
    if(request.method == 'POST'):
        data = request.get_json()
        
        data["tenth"]=int(data["tenth"])
        data["inter"]=int(data["inter"])
        data["cgpa"]=float(data["cgpa"])
        if data["competitive"]=='yes':
            data["competitive"]=1
        else:
            data["competitive"]=0 
        data["attendance"]=int(data["attendance"])
        if data["willingtocontinue"]=='yes':
            data["willingtocontinue"]=1 
        else:
            data["willingtocontinue"]=0
        if data["interest"]=='interested':
            data["interest"]=1
        else:
            data["interest"]=0
        if data["othercareer"]=='yes':
            data["othercareer"]=1
        else:
            data["othercareer"]=0
        if data["financialstatus"]=='yes':
            data["financialstatus"]=1 
        else:
            data["financialstatus"]=0
        if data["family"]=='yes':
            data["family"]=1 
        else:
            data["family"]=0
        if data["personalissues"]=='yes':
            data["personalissues"]=1 
        else:
            data["personalissues"]=0
        if data["addictions"]=='yes':
            data["addictions"]=1 
        else:
            data["addictions"]=0
        if data["bullying"]=='yes':
            data["bullying"]=1
        else:
            data["bullying"]=0
        data["a"]=int(data["a"])
        data["b"]=int(data["b"])
        data["c"]=int(data["c"])
        data["d"]=int(data["d"])
        data["e"]=int(data["e"])
        data["f"]=int(data["f"])
        data["g"]=int(data["g"])
        data["h"]=int(data["h"])
        data["i"]=int(data["i"])
        data["j"]=int(data["j"])

        pickle1 = open("clf.pickle","rb")
        pickle2 = open("clf1.pickle","rb")
        
        clf = pickle.load(pickle1)
        clf1 = pickle.load(pickle2)
        
        arr1 = [data["tenth"],data["inter"],data["competitive"],data["attendance"],data["cgpa"],data["willingtocontinue"],data["interest"],data["othercareer"],data["financialstatus"],data["family"],data["personalissues"],data["addictions"],data["bullying"]]
        ans1 = clf.predict([arr1])
        arr2 = [data["a"],data["b"],data["c"],data["d"],data["e"],data["f"],data["g"],data["h"],data["i"],data["j"]]
        sent=(sum(arr2)/10)
        ans2 = clf1.predict([[ans1,sent]])

        if(ans2[0]):
            return "NO"
        else:
            return "YES"

if __name__ == '__main__':
	app.run(debug = True)