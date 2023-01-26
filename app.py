import json
import pickle
import pandas as pd
from datetime import date
from sklearn import preprocessing
from flask import Flask, render_template, request


app = Flask(__name__)


today = date.today()
month = today.strftime("%B")
day = today.strftime('%A')

toll = 0
driver = pickle.load(open("models/dri", 'rb' ))
comm = pickle.load(open("models/com", 'rb' ))
tax = pickle.load(open("models/tax", 'rb' ))

label_encoder = preprocessing.LabelEncoder()

def dataFixing(input):
  data =  pd.DataFrame(input, columns=['month', 'day_of_week',  'distance_travelled',  'time_taken','category', 'toll'])
  
  data['month']= label_encoder.fit_transform(data['month']) 
  data['day_of_week']= label_encoder.fit_transform(data['day_of_week'])
  data['category']= label_encoder.fit_transform(data['category'])
  
  return data

def totalCostCalc(driver, comm, tax, fixed):
    driver_cost = driver.predict(fixed)[0]
    comm_cost = comm.predict(fixed)[0]
    tax_cost = tax.predict(pd.DataFrame([[comm_cost, driver_cost]], columns=["commission_base_cost","driver_base_cost"]))[0]
    
    return  tax_cost + comm_cost + driver_cost



@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route('/send', methods=['POST'])
def test():
    
    output = request.get_json()
    result = json.loads(output) 
    
    data = [[month, day[:3], result["distance"], int(result["duration"]),result["category"], toll]]
    fixed = dataFixing(data)
    total = totalCostCalc(driver, comm, tax, fixed)
    print(round(total, 2))

    return {"result": round(total,2)}


if __name__ == "__main__":
    app.run(debug=True)
