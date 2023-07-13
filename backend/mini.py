#!/usr/bin/env python
# coding: utf-8

# In[9]:
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import pickle5 as pickle


#Loading Data
df=pd.read_csv("C:/Users/Dell/Downloads/MiniProject/StudentDropout.csv")

x=df.drop('Outcome',axis=1)
y=df['Outcome']
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.3)  


clf = RandomForestClassifier(n_estimators=8,max_depth=4)
clf.fit(x_train,y_train) 
clf.score(x_test,y_test)
# In[27]:
y_predict=clf.predict(x_test)

pickle_out = open("clf.pickle","wb")
pickle.dump(clf, pickle_out)
pickle_out.close()

from sklearn.metrics import confusion_matrix
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import accuracy_score
from sklearn.metrics import f1_score


cm=confusion_matrix(y_test,y_predict)
print("Precision : ", precision_score(y_test, y_predict, average = 'micro'))
print("Recall : ", recall_score(y_test, y_predict, average = 'micro'))
print("Accuracy : ", accuracy_score(y_test, y_predict))
print("F1 Score : ", f1_score(y_test, y_predict, average = 'micro'))
print(cm)
# In[28]:
plt.figure(figsize=(10,7))
sns.heatmap(cm,annot=True)

plt.xlabel('Predicted')
plt.ylabel('Truth')
plt.show()
# In[21]:
#Loading Data
df=pd.read_csv("C:/Users/Dell/Downloads/MiniProject/Final.csv")

x1=df.drop('Dropout',axis=1)
y1=df['Dropout']
x_train1,x_test1,y_train1,y_test1=train_test_split(x1,y1,test_size=0.3)  


clf1 = RandomForestClassifier(n_estimators=5,max_depth=4)
clf1.fit(x_train1,y_train1) 
clf1.score(x_test1,y_test1)
# In[29]:
y_predict1=clf1.predict(x_test1)

pickle_out = open("clf1.pickle","wb")
pickle.dump(clf1, pickle_out)
pickle_out.close()

from sklearn.metrics import confusion_matrix
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import accuracy_score
from sklearn.metrics import f1_score


cm1=confusion_matrix(y_test1,y_predict1)
print("Precision : ", precision_score(y_test1, y_predict1, average = 'micro'))
print("Recall : ", recall_score(y_test1, y_predict1, average = 'micro'))
print("Accuracy : ", accuracy_score(y_test1, y_predict1))
print("F1 Score : ", f1_score(y_test1, y_predict1, average = 'micro'))
print(cm1)
# In[24]:


plt.figure(figsize=(10,7))
sns.heatmap(cm1,annot=True)

plt.xlabel('Predicted')
plt.ylabel('Truth')
plt.show()
# In[ ]:

