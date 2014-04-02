import module1
import functools
import re


class Human(object):
    laugh = 'hahahaha'
    def show_laugh(self,a):
        print(self.laugh , ":",a)
    def laugh_100th(self):
        for i in range(20):
            self.show_laugh(i)

li_lei = Human()          
li_lei.laugh_100th()

def func(*name):
    print(type(name))
    print(name)
func(1,4,6)
func(5,6,7,1,2,3)

def func(**dict):
    print (type(dict))
    print (dict)

func(a=1,b=9)
func(m=2,n=1,c=11)

S = 'abcdefghijkq'
for i in range(0,len(S),2):
    print (S[i])

for (index,char) in enumerate(S):
    print (index,":",char)

ta = [1,2,3]
tb = [9,8,7]
tc = ['a','b','c']
for (a,b,c) in zip(ta,tb,tc):
    print(a,b,c)

# cluster
zipped = zip(ta,tb)
print(zipped)

# decompose
na, nb = zip(*zipped)
print(na, nb)


#生成器
def gen():
    a = 100
    yield a
    a = a*8
    yield a
    yield 1000
for i in gen():
    print (i) # 100 800 1000


#表推导
L = []
for x in range(10):
    L.append(x**2)
print(L) #[0,1,4,9,25,36,49,64,81]
L = [x**2 for x in range(10)]
print(L) #[0,1,4,9,25,36,49,64,81]

xl = [1,3,5]
yl = [9,12,13]
L  = [ x**2 for (x,y) in zip(xl,yl) if y > 10]
#[9,25]
print(L)



#lambda test
func = lambda x,y: x + y
print (func(3,4))#7

def test(f, a, b):
    print ('test')
    print (f(a,b))
test(func, 3, 5)#test 8

test((lambda x,y: x**2 + y), 6, 9)#test 45

# map test map()的功能是将函数对象依次作用于表的每一个元素，每次作用的结果储存于返回的表re中
re = map((lambda x: x+3),[1,3,5,6])
print(re) #map object
for i in re:
    print(i)# 4 6 8 9

# filter test:filter函数的第一个参数也是一个函数对象。
#它也是将作为参数的函数对象作用于多个元素。
#如果函数对象返回的是True，则该次的元素被储存于返回的表中。filter通过读入的函数来筛选数据。
def func(a):
    if a > 100:
        return True
    else:
        return False
print (filter(func,[10,56,101,500]))
for i in filter(func,[10,56,101,500]):
    print (i) # 101 500
    
#reduce test
a = functools.reduce((lambda x,y: x+y),[1,2,5,7,9])
print(a) # 24

def IsYear(year):
    if (year%4==0 and year%100!=0) or y%400==0:
        return True
    elif year%3200==0 and year%172800==0:
        return True
    else:
        return False

print (IsYear(2008))


