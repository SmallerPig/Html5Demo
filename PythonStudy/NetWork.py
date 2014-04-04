import string, urllib.request
 
#定义百度函数
def baidu_tieba(url,begin_page,end_page):   
    for i in range(begin_page, end_page+1):
        sName = str(i) + '.html'#自动填充成六位的文件名
        print ('loding' + str(i) + 'the page and save as' + sName + '......')
        f = open(sName,'w+')
        m = urllib.request.urlopen(url + str(i)).read()
        print(str(m.decode('cp936')))
        f.write(str(m.decode('cp936')))
        f.close()
 
 
#-------- 在这里输入参数 ------------------

#bdurl = 'http://tieba.baidu.com/p/2296017831'
#iPostBegin = 1
#iPostEnd = 10

bdurl = str(u'http://tieba.baidu.com/p/2958284902?pn=')
begin_page = 1
end_page = 2
#-------- 在这里输入参数 ------------------
 

#调用
baidu_tieba(bdurl,begin_page,end_page)
