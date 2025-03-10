# print('first program')
string="this is  string !"
# print(string[0:5])
# print(string[10])
# a=int(input('Enter your first Number...'))
# b=int(input('Enter your second4 Number...'))
# #print(a/b)
# print(float(a/b))

# import matplotlib.pyplot as plt
# import time
#string methods
# print(len(string))
# test=string.upper()
# test=string.lower()
# test=string.rstrip("!")
# test=string.replace("is","was")
# test=string.replace("is","was")
# test=string.split(" ") # exactly works like js
# test=string.capitalize() #capitalize first letter of a string 
# test=string.endswith('!')
# test=string.endswith('is',3,7)
# test=string.find('is')
# test=string.index('is')
# test=string.index('is')
# test=string.isalnum()
# print(test)

# part2
# 1
# input1=int(input("enter your first num"))
# input2=int(input("enter your second num"))2
# if(input1>18):
#     print("you can drive")
# else:
#     print('go home kid')

# 2
# applePrice=input1
# budget=100
# if(budget-applePrice >50):
#     print("alexa .add 1kg apple to cart")
# elif(budget-applePrice >70):
#     print("its okay you can buy 2kg")
# else:
#     print('you cant buy because of money shortness')

# 3
# num=int(input('Enter a num..'))
# if(num < 0):
#     print('num is negative',num)
# elif(num > 0):
#     if(num <= 10):
#         print("num is between 1-10 =",num)
#     elif(num >10 and num<=20):
#         print("Number is between 20")
#     else:
#         print("Number is greater than 20",num)
# else:
#     print('Number is Zero')

# import time
# timestamp=time.strftime('%H:%M:%S')
# timeHour=int(time.strftime('%H'))
# print(timeHour)

# num=int(input('Enter a num..'))
# match num:
#     case 0:
#         print("x is zero")
#     case 4:
#         print('case 4 is 4')
#     case _ if num==90:
#         print(num,'is  90') 
#     case _:
#         print(num)

#   loops

string="this is a string"

# for i in string:
#     print(i)
#     if(i=='s'):
#         print('this is special')

# list=['red','blue','black']
# for color in list:
#     print(color)

# for i in range(5):
    # print(i)
# for i in range(1,12,2):# here last argument 2 is skip rates
    # print(i)

# count=5
# while (count>0):
#     print(count)
#     count=count-1
# else:
#     print('I am inside else')

# for i in range(12):
#     if(i==10):
#         print(i)
#         break

# for i in range(10):
#     print('5 x',i+1,'=',5*(i+1))
   
# i=0
# while True:
#     print(i)
#     i=i+1
#     if(i%100 ==0):
#         break

# print(100%100)

# num=int(input("Enter your num"))
# for i in range(num):
#     print(i+1)

# functions

# def calculateGmean(a,b):
#      mean=(a*b)/(a+b)
#      print(mean)

# calculateGmean(1,4)

# def isGreater(a,b):
#      if(a>b):
#         print('First number is greater')
#      else:
#         print('second number is greater or equal')
# isGreater(5,6)
# ways of proviiding arguments

# def average(a=9,b=1):
#     print('average =',(a+b)/2)
# average(b=2)

# def average(*number):
#     sum=0
#     for i in number:
#         sum=sum+i
#     print('average',sum/len(number))

# average(5,5,5)


# str=' this is a string'
# marks =[3,5,6,'harry',True,'sakib']
# print(marks[len(marks)-3])
# print(marks[1:5:2])

# if "is" in str:
#     print("yes")
# else:
#     print('No')

# if "harry" in marks:
#     print("yes")
# else:
#     print('No')

# any=[i*i for i in range(10)]
# print(any)
# any=[i*i for i in range(10) if i%3==0]
# print(any)

marks2 =[3,5,6,7,7,9,]
# marks2.append(8)
# marks2.sort()  
# # marks2.sort(reverse=True)  
# marks2.reverse()

# print(marks2.index(5)) 
# print(marks2.count(7)) 
# m=marks2.copy()
# print('m',m)
# n=marks2+m
# print('n',n)
# marks2.extend(m)
# print('marks2 extented',marks2)
# print(marks2) 
tuple=(1,3,5,6,"green",5,True)
# print(len(tuple))
# print(tuple[-2])
# print(tuple.count(5))
print(tuple.index(5,3,6))

if "green" in tuple:
    print('yes')
else:
    print("No")

# def square(n):
#     '''Takes in number n,returns the square of n'''
#     print(n**2)
    
# square(5)
# print(square.__doc__)

# def factorial(n):
#     if(n==0 or n==1):
#         return 1
#     else:
#         return n * factorial(n-1)

# print(factorial(4))

# set
set={2,4,6,6,7}# doesn't print duplicate value
# set2={} #empty set is considered dictionary
set3={'sakib','ekon',3,8,'ekon'}
# print(set)
# print(type(set2))
# set4=set.union(set3)
# print(set4)
# set.update(set3)
# set.intersection_update(set3)
# print(set)
# set4=set.symmetric_difference(set3)
# print(set4)
# print(set.isdisjoint(set3))
# print(set.issuperset(set3))
# set.add('sakib')
# set.remove('sakib')
# item=set.pop()
# print(set)
# del set
# print(set)
# print(item)


# dictionary
# info={'name':'sakib','age':20,'aligible':True}
# print(type(info))
# print(info.keys())
# print(info.values())

# for key in info.keys():
#     print(key)
#     # print(key,'=',info[key])
#     print(f"the value corresponding to key {key} is {info[key]}")

# try catch /try-except-finally
# a=input("Enter the number: ")

# print(f"multification table of  {a} is : ")

# try:
#     for i in range(1,11):
#         print(f"{int(a)} X {i} = {int(a) * i}")
# except ValueError:
#     print("Number enterd is not integer")
# finally:
#     print('I am always executed whether some code goes wrong or not')

# print("some important code")


#raising error
# a=int(input("Enter any number between 5 and 9: "))

# if(a<5 or a>9 ):
#     raise ValueError("value should be between 5 and 9")


#short conditional
# print a if a is grather than b ,otherwise go in else part and print b
# note:here we first say what is needed to be done before condition
# here are two examples demonstrating short ifelse statements 
# a=333
# b=33

# print("a") if a>b else print("=") if a==b else print("B")

# c=9 if a>b else 0
# print(c)


marks=[1,3,4,5,7,6,7,7,]

# index=0
# for mark in marks:
#     print(mark)
#     if(index==3):
#         print("sakib awesome")
#     index=index+1
#     print(index)

# instead of getting index like this we can use enumerate function to get indexex like following way:
# for index,mark in enumerate(marks):
#     print(mark)
#     if(index==3):
#         print("harry")

# importing module,and from file
# import math
# print(dir(math))
# from math import pi # implicit import 
# from math import pi as ti # implicit import 
# print(ti)
# print(type(math.pi))

# import sakib
# sakib.welcome()

# from sakib import sakibtxt

# print(sakib)


# if __name__ =="__sakib__":
#     sakib.welcome()

# import os 

# if(not os.path.exists("data")):
#    os.mkdir('data')

# # for i in range(0,100):
# #     os.mkdir(f"data/day{i+1}")
# for i in range(0,100):
#     os.rename(f"data/day{i+1}",f"data/tutorials{i+1}")

# folders=os.listdir('data')
# print(folders)

# for folder in folders:
#     print(folder)

# string="this is a string"

# print(string[::-1])
# local scope and global variable
# x=6
# def func():
#     global x
#     x=5
#     print(x)
# func()
# print(x)

# f=open("sakib.py","r")

# text=f.read()
# print(text)
# f=open("sakib.py","w")

# f.write('new text')
# f.close()

# lanbda func
# def double(x):
#     return x*2

# print(double(2))

# double=lambda x: x*2


# print(double(3))

# add=lambda x,y: x+y
# print(add(5,6))

def cube(x):
    return x*x*x
# print(cube(3))


l=[1,2,3,4,5,6,7,8,9]
# map func
newL=list(map(cube,l))
print(newL)
# filter
def filter_function(x):
    return x>3

newL2=list(filter(filter_function,l))
print(newL2)

# reduce 
from functools import reduce
def add (x,y):
    return x +y
newL3=reduce(add(),l)
