# class Person:
#     name="sakib"
#     occupation="Ai developer"
#     def info(self):
#         print(f"{self.name} is a {self.occupation}")

# a=Person()
# a.name="ekon"
# a.info()

# with constructer.constructer is special function that runs within a class whenever a class is called.moreover,we can pass class' property through arguments in this special constructer function.
# here self argument is mendatory
# class Person:
#     def __init__(self,arg1,arg2):
#         print('I am in constructer and i am called whenever a class is called')
#         self.name=arg1
#         self.occupation=arg2
#     def info(self):
#         print(f"{self.name} is a {self.occupation}")

# a=Person("sakib","devloper")
# a.info()

# decarotors
# decorators takes another function as argument.Doing this they actually decorates function.whenever we want to show something before executing the real one we make decorators.we can use it for multiple function all we have to do is @func before the real one
# here in the following example (hfunc) is a the hello function and we give it to decorator as an arguments
# def greet(hfunc):
#     def mfx():
#         print('good morning')
#         hfunc()
#         print("thanks for using this function")
#     return mfx


# @greet # here using decorator function name is mendatory
# def hello():
#     print('hello world')

# greet(hello())

# decorators for dynamic function

# def decorator(addfunc):
#     def mfx(*args,**kwargs):
#         print('good morning')
#         addfunc(*args,**kwargs)
#         print("thanks for using this function")
#     return mfx

# @decorator
# def add(a,b):
#     print(a+b)

# decorator(add)(2,3)


# getter and setter
# getter is just  a method to return something and setter is used to set something of (self)
# it is widely used to get and set value of (self) related value

# class myClass:
#     def __init__(self,value,name):
#         self.value=value
#         self.name=name
#     def show(self):
#         print(f"value is {self.value} and name {self.name}")
   
#     def returnvalue(self):
#         return self.value *10
    
#     def setname(self,name):
#         self.name=name

# a=myClass(int(60),"sakib")
# a.setname("ekon")
# a.returnvalue()
# a.show()

# if we want to extend our classes we have (extend ) in js and (inharitance) in python

# class Emplyoee:
#     def __init__(self,name,id):
#         self.name=name
#         self.id=id
#     def showDetails(self):
#         print(f"the name of empolyee :{self.id} is {self.name}")

# class Programmer(Emplyoee):
#     def showLang(self):
#         print(f"favourite langguage  {self.name}")

# # a=Emplyoee("sakib",50)
# # a.showDetails()
# b=Programmer("ekon",40)
# b.showDetails()
# b.showLang()

# class Emplyoee:
#     def __init__(self):
#         self.__name="sakib" #name mangling
#         self._fname="fsakib" #private attribute
#         # self.id=id
#     def showDetails(self):
#         print(f"the name of empolyee  is {self.name}")

# a=Emplyoee()
# print (a._Emplyoee__name)
# print(a._fname)

# class Math:
#     def __init__(self,num):
#         self.num=num
#     def addtonum(self,n):
#         self.num=self.num + n
#     @staticmethod #it doesn't take any (self)
#     def add(a,b):
#         return a+b
    
# a=Math(5)
# a.addtonum(5)
# print(a.add(5,6))

# class Library:
#     def __init__(self):
#         self.numOfBooks=0
#         self.book=[]
#     def addBook(self,book):
#         self.book.append(book)
#         self.numOfBooks=len(self.book)
#     def showInfo(self):
#         print(f"The library has {self.numOfBooks} books and the books are")
#         for bookname in self.book:
#             print(bookname)

# a=Library()
# a.addBook("harry potter")
# a.addBook("Spoider -Moon")
# a.showInfo()


# class Emplyoee:
#     company='Ibm'
#     # def __init__(self,name):
#     #     self.company=name
       
#     def showDetails(self):
#         print(f"the name of company:{self.company}")
#     @classmethod
#     def changeCompany(cls,newCompany):
#         cls.company=newCompany

# a=Emplyoee()
# print(Emplyoee.company)
# a.changeCompany('tesla')
# a.showDetails()

# dict and help method
# class Person:
#     def __init__(self,name,age) :
#         self.name=name
#         self.age=age

# a=Person("john",22)
# print(a.__dict__)
# print(help(a))

# method overriding with super keyword.super keyword helps calling parents method inside child class
# class Shape:
#      def __init__(self,x,y) :
#          self.x=x
#          self.y=y
#      def area(self):
#         #  return f" shape is {self.x*self.y}  x is {self.x} y is {self.y}"
#          return self.x*self.y
     
# class Circle(Shape):
#      def __init__(self,radious) : 
#           self.radious=radious
#           super().__init__(radious,radious) # here we are calling parent class shape"s init method where it takes two arguments which are x,y thats why we are providing radious two times
          
#      def area(self):
#           return 3.14* super().area() 
#         #   return self.radious

# rec=Shape(4,5)
# rec.area()
# print(rec.area())

# cir=Circle(5)
# cir.area()
# print(cir.area())

#vector
# class Vector:
#     def __init__(self,i,j,k) :
#         self.i=i
#         self.j=j
#         self.k=k

#     def __str__(self):
#         return f"{self.i}i + {self.j}j +{self.k}k"
#     def __add__(self,x):
#         return Vector(self.i +x.i,self.j+x.j,self.k +x.k)
#         return (self.i +x.i,self.j+x.j,self.k +x.k)
    
# v1=Vector(3,5,6)
# print(v1)
# v2=Vector(1,2,4)
# print(v2)
# print(v1 +v2)
# print(type(v1 +v2))
# # print(v2.__add__)

# class Animal:
#     def __init__(self,name,species) :
#         self.name=name
#         self.species=species
#     def show_details(self):
#         print(f"Name:{self.name}")
#         print(f"Species:{self.species}")

# class Dog(Animal):
#     def __init__(self,nname,breed) :
#         self.name=nname
#         self.breed=breed
#         Animal.__init__(self,name=nname,species=breed)
       
#     def print(self):
#         Animal.show_details(self)
#         print("just print",self.name,self.breed)

# a=Animal("johny","bulldog")
# a.show_details()
# b=Dog("tommy","frog")
# b.print()
# a=Animal("jhony","bulldog")
# a.show_details()
# b.show_details()

# import time
# t=time.localtime()
# formatted_time=time.strftime("%H:%M:%S")
# print(formatted_time)
# def usingWhile():
#     i=0
#     while i<1000:
#         print(f"I love you {i+1} times")
#         i=i+1
# usingWhile()
# formatted_time=time.strftime("%H:%M:%S")
# print(formatted_time)

# walrus Operator
# numbers=[1,2,3,4,5]

# while (n:=len(numbers))>0:
#     print(numbers.pop())

# foods=list()
# while True:
#     food=input("what food do you like?")
#     if food=="quit":
#         break
#     foods.append(food)

# for item in foods:
#     print(item)   


# foods=list()
# while (food:=input('what food do you like?...')) !="quit":
#     foods.append(food)

# import shutil
# shutil.copy("class2.py","class3.py")
# shutil.copytree("data","data2")

# import win32com.client

# names=input("Write all the name that you want to give shoutout to.....")
# shoutout=names.split(",")
# # shoutout=["sakib","Ekon","rakib"]
# speaker=win32com.client.Dispatch("SAPI.SpVoice")

# for name in shoutout:
#     speaker.Speak(f"Shoutout to {name}")

# import requests
# from bs4 import BeautifulSoup

# response=requests.get("https://www.google.com")

# # print(response.text)
# soup=BeautifulSoup(response.text,"html.parser")
# print(soup)
# for heading in soup.find_all("div"):
#     print(heading.text)

# import random
# num=random.randint(0,2)
# shoutout=["sakib","Ekon","rakib"][num]
# print(shoutout)

#  generators only run when value is used in any func
    
# def my_gen():
#     for i in range(10):
#      yield i

# gen=my_gen()
# print(next(gen))

# for l in gen:
#    print(l)

# function caching
# here it gives 4th  fx(14) func's value without delaying 5 sec.that means it is caching value on the background and if the same function is called later it gives the value fasttly.
# from functools import lru_cache
# import time

# @lru_cache(maxsize=None)
# def fx (n):
#     time.sleep(5)
#     return n*5

# print(fx(20))
# print(fx(14))
# print(fx(2))
# print(fx(14))

# Reguler expressions- used to search things
# import re

# # pattern="sakib"
# pattern=r"[A-Z]+oodboy"
# text= ''' sakib is not a Goodboy'''
# match=re.search(pattern,text)
# print(match)

# async func
# import time
# import asyncio
# async def func1():
#    await asyncio.sleep(1)
   
#    return "completed"

# async def func2():
#    await asyncio.sleep(2)
   
#    return "completed"

# async def func3():
#    await asyncio.sleep(3)
   
#    return "completed"

# asyncio.run(func1())
# 1 after one
# async def main():
#    await func1()
#    await func2()
#    await func3()
# asyncio.run(main())
# async def main():
#    l= await asyncio.gather(
#        await func1(),
#        await func2(),
#        await func3(),
#    )
#    print(l)
 
# asyncio.run(main())


# threading-> is used to run multiple func simultaneously
# import threading
# import time

# def func(seconds):
#     print(f"Sleeping for {seconds} seconds")
#     time.sleep(seconds)
# normal
# func(4)
# func(3)
# func(2)
# timex=time.perf_counter()
# print(timex)
# same code using threads
# t1=threading.Thread(target=func,args=[4])
# t2=threading.Thread(target=func,args=[2])
# t3=threading.Thread(target=func,args=[1])
# t1.start()
# t2.start()
# t3.start()

# t1.join()
# t2.join()
# t3.join()

# other ways to do threading using concuurent.futures
import threading
import time
from concurrent.futures import ThreadPoolExecutor

def func(seconds):
    print(f"Sleeping for {seconds} seconds")
    time.sleep(seconds)


def poolingDemo ():
    with ThreadPoolExecutor() as executer:
        f1=executer.submit(func,3)
        f2=executer.submit(func,2)
        f3=executer.submit(func,4)
        print(f1.result())
        print(f2.result())
        print(f3.result())

# poolingDemo()

# multi possecing

# argparse
import argparse
import requests

def download_file(url,local_filename):
    if local_filename is None:
        local_filename=url.split('/')[1]
    with requests.get(url,stream=True) as r:
        r.raise_for_status()
        with open(local_filename,"wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    return local_filename

parser=argparse.ArgumentParser()

parser.add_argument("url",help="Url of the file to download")
parser.add_argument("-o","--output",help="name of the file",default=None)

args=parser.parse_args()
print(args.url)
print(args.output,type(args.output))
download_file(args.url,args.output)