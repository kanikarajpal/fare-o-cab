
import pickle
import pandas as pd
from datetime import date

from sklearn import preprocessing

today = date.today()
month = today.strftime("%B")
day = today.strftime('%A')

driver = pickle.load(open("models/dri", 'rb' ))
comm = pickle.load(open("models/com", 'rb' ))
tax = pickle.load(open("models/tax", 'rb' ))



label_encoder = preprocessing.LabelEncoder()

def data_cleaning(data):
  data['month']= label_encoder.fit_transform(data['month']) 
  data['day_of_week']= label_encoder.fit_transform(data['day_of_week'])
  data['category']= label_encoder.fit_transform(data['category'])



data = [[month, day[:3], 22, 46.0,'Prime', 0]]

data_cx =  pd.DataFrame(data, columns=['month', 'day_of_week',  'distance_travelled',  'time_taken','category', 'toll'])



data_cleaning(data_cx)


def totalCostCalc(driver, comm, tax, data_cx):
    driver_cost = driver.predict(data_cx)[0]
    comm_cost = comm.predict(data_cx)[0]
    
    tax_cost = tax.predict(pd.DataFrame([[comm_cost, driver_cost]], columns=["commission_base_cost","driver_base_cost"]))[0]
    
    return  tax_cost + comm_cost + driver_cost


print("This is the total cost"  , totalCostCalc(driver, comm, tax, data_cx) )
