# 你好👋 我是zhs

## 关于我
- 我是新手，如果是老手~~请退出~~（bushi
- [我的哔哩哔哩](https://space.bilibili.com/1851635221/)
- 你知道B站吗？🤓👆，不知道的话[点这](https://baidu.ma/?q=YuermeaYr+S7gOS5iD8=)
- [这有好康的东西](https://www.bilibili.com/video/BV1hq4y1s7VH/)

## 访问统计
![访问统计](https://count.kjchmc.cn/get/@你好?theme=minecraft)

# 代码笔记

## 1. C++简易开头
```cpp
#include <iostream>
using namespace std;
int main() {
    return 0;
}
```

## 2. 猜数字游戏(Python)
需要pyttsx3语音包，可以用以下代码安装：
```bash
pip install pyttsx3
pip install rich
```

代码：
```python
from random import randint as 随机数
from time import sleep as 等待
import pyttsx3
from rich import print

talker=pyttsx3.init()
def chat(chat):
    talker.say(chat)
    talker.runAndWait()

end = ''
time_list = []
times = 0
time0 = 0

def output():
    print('')
    print('战绩：')
    print('第几次', '用了几次')
    for a1 in range(times):
        print(a1 + 1,'       ',time_list[a1])

star='''__________________________________________________________________
Powered By:
_____  __ __  _____    
|     T|  T  T/ ___/  
l__/  ||  l  (   \\_  
|   __j|  _  |\\__  T 
|  /  ||  |  |/  \\ |  
|     ||  |  |\\    |   
l_____jl__j__j \\___j    
    BILIBILI:UID:1851635221 NAME:coding的zhs'''
print(f'[red]{star}[/red]')

chat('请输入最小范围：')
a = int(input('请输入最小范围：'))
chat('请输入最大范围：')
b = int(input('请输入最大范围：'))

while True:
    num = 随机数(a, b)
    time0 = 0
    player = None
    chat('你的数字是什么：')
    player = int(input('你的数字是什么：'))
    print('🤔🤔🤔')
    等待(0.3)
    if player != num:
        time0 += 1
        if player < num:
            print('小了')
            chat('小了')
        else:
            print('大了')
            chat('小了')
    else:
        time0 += 1
        print(f'恭喜你答对了，就是{player}!!!')
        chat(f'恭喜你答对了，就是{player}!!!')
        print(f'你用了{time0}次才答对的哦...........')
        time_list.append(time0)
        input('回车键继续')
        times += 1
        user_input = ''
        while not user_input:
            user_input = input('enter[1] try again, enter[2] exit:')
            if not user_input:
                print('输入不能为空，请重新输入')
        user_input = int(user_input)
        if user_input == 2:
            output()
            break
```

## 3. 语音朗读程序
需要安装pyttsx3库：
```python
import pyttsx3

talker=pyttsx3.init()
def chat(chat):
    talker.say(chat)
    talker.runAndWait()

while True:
    a=input('请输入：')
    chat(a)
```

## 4. 张野求生
```python
import random

r=0
while r==0:
    a = 0
    water = 10
    c=random.randint(1, 100)
    while True:
        a += 1
        b = random.randint(1, 100)
        if b == c:
            print(f'第{a}天，张野走出来了')
            r=1
            break
        elif b >= 90:
            print('张野遇到了野兽')
            r=1
            break
```

## 5. 猜数字（GUI版）
需要安装tkinter（Python自带）：
```python
import tkinter as tk
import random

def check_guess():
    """检查用户的猜测"""
    try:
        guess = int(entry.get())
        if guess < number:
            result_label.config(text="小了，猜不到就放弃吧！")
        elif guess > number:
            result_label.config(text="大了，猜不到就放弃吧！")
        else:
            result_label.config(text="你个大神，猜对了！")
    except ValueError:
        result_label.config(text="你这不是数字吧？")

def reset_game():
    """重置游戏"""
    global number
    number = random.randint(1, 1000)
    result_label.config(text="")

root = tk.Tk()
root.title("猜数游戏")

instruction_label = tk.Label(root, text="猜一个1到1000之间的数字：")
instruction_label.pack()

entry = tk.Entry(root)
entry.pack()

guess_button = tk.Button(root, text="我要猜！", command=check_guess)
guess_button.pack()

reset_button = tk.Button(root, text="赢了，重开！", command=reset_game)
reset_button.pack()

result_label = tk.Label(root, text="")
result_label.pack()

number = random.randint(1, 1000)
root.mainloop()
```

---

# 谢谢访问！

感谢你能看到这里！希望这些代码对你有帮助！

[回到顶部](#你好-我是zhs)