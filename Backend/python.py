import numpy as np
from sklearn import preprocessing
#We imported a couple of packages. Let's create some sample data and add the 
# line to this file:
input_data = np.array([[3, -1.5, 3, -6.4], [0, 3, -1.3, 4.1], [1, 2.3, -2.9, -
4.3]])


opdata = preprocessing.scale(input_data)
print ("mean :",opdata(axis=0))
print ("Standerd devation: ",opdata.std(axis = 0))

# min max scaler

data_scaler = preprocessing.MinMaxScaler(feature_range(0,1));
min_maxopData = data_scaler.fit(input_data);
print ("sclaed data: ",min_maxopData);

# Normalization

data_normalized = preprocessing.normalize(input_data,norm='l1')