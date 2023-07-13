import pickle5 as pickle

pickle1 = open("clf.pickle","rb")
pickle2 = open("clf1.pickle","rb")

clf = pickle.load(pickle1)
clf1 = pickle.load(pickle2)

ans1 = clf.predict([[80,70,1,0,6.7,1,1,1,0,1,0,0,1]])
sent=(sum([1,1,2,2,3,3,3,3,3,4])/10)
ans2 = clf1.predict([[ans1,sent]])

print(ans2)
