#Month, Day of the week,  - python date time
# distance travelled, time taken, toll - Map api 
# we actually have to predict commission base cost and driver base cost then we have to add both to get total trip cost. 
# total tax will be calculated from x% of commision and driver base cost sum 
# total trip will be the sum of driver base cost, commission base cost, total tax
#Try to predict the commision base cost.

import pickle
import pandas as pd
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression



dataset = pd.read_excel('OLA_trips_dataset.xlsx')
dataset.drop(['booking id', 'gender', 'reason', 'time_of_day', 'booking_date_time', 'ratings'], axis=1, inplace=True)
label_encoder = preprocessing.LabelEncoder()


def data_cleaning(data):
  data['month']= label_encoder.fit_transform(data['month']) 
  data['day_of_week']= label_encoder.fit_transform(data['day_of_week'])
  data['category']= label_encoder.fit_transform(data['category'])



data_cleaning(dataset)


X=dataset[['month',	'day_of_week',	'distance_travelled',	'time_taken', 'category',	'toll']] 

Y=dataset['commission_base_cost']
Z=dataset['driver_base_cost']

i = dataset[["commission_base_cost","driver_base_cost"]]  
d = dataset["total_tax"]



x_train_dri,x_test_dri, y_train_dri ,y_test_dri = train_test_split (X, Z, test_size = .10, random_state=None)
x_train_com, x_test_com, y_train_com,y_test_com = train_test_split (X, Y, test_size = .10, random_state=None)
x_train,x_test,y_train,y_test = train_test_split (i, d, test_size = .10,random_state=None)

lnr_dri = LinearRegression()   
lnr_com = LinearRegression()   
lnr = LinearRegression() 

lnr_dri.fit(x_train_dri, y_train_dri) 
lnr_com.fit(x_train_com, y_train_com) 
lnr.fit (x_train, y_train)


pickle.dump(lnr_dri, open('models/dri', 'wb'))
pickle.dump(lnr_com, open('models/com', 'wb'))
pickle.dump(lnr, open('models/tax', 'wb'))

