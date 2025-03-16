# 已弃用

此插件已弃用
功能已经被`tab panels`插件覆盖

前往[tab panels](https://github.com/GnoxNahte/obsidian-tab-panels)插件仓库，或者官方插件商城搜索`tab panels`

## 这是一个Obsidian笔记软件的插件
可以通过代码块嵌入多个标签页

## 例1，tab按钮在上

效果: 

 ![Image 例一](Screenshots/例一.png)
 代码块语法：
````md
```minitabs
tabs
`按钮1` `按钮2` `可以一直写下去……` 
===
第一个按钮对应的页面
===
按钮二对应的页面
===
按钮三对应的页面
```
````

## 例2，tab按钮在下

效果: 

 ![Image 例二](Screenshots/例二.png)
 代码块语法：
````md
```minitabs
tabsBottom
`按钮1` `按钮2` `可以一直写下去……` 
===
第一个按钮对应的页面
===
按钮二对应的页面
===
按钮三对应的页面
```
````


## 上下tab按钮相互套娃


效果: 

 ![Image 例三](Screenshots/例三.png)

 代码块语法：

``````md
`````minitabs
tabs
`按钮1` `按钮2` `按钮3` 
---
>[!Note]+ 1
># 1
````minitabs
tabsBottom
`按钮1` `按钮2` `按钮3` 
===
>[!Note]+ 1
># 1.1
===
>[!Note]+ 1
># 1.2
===
>[!Note]+ 1
># 1.3
````
---
>[!Note]+ 1
># 2
````minitabs
tabsBottom
`按钮1` `按钮2` `按钮3` 
===
>[!Note]+ 1
># 2.1
===
>[!Note]+ 1
># 2.2
===
>[!Note]+ 1
># 2.3
````
---
>[!Note]+ 1
># 3
````minitabs
tabsBottom
`按钮3.1` `按钮3.2` `按钮3.3` 
===
>[!Note]+ 1
># 3.1
===
>[!Note]+ 1
># 3.2
===
>[!Note]+ 1
># 3.3
````
`````
``````


## 四象限视图

效果: 

![四象限视图](Screenshots/四象限视图.png)

 代码块语法：

 `````md
````minitabs
fourQuadrant
---
### 不紧急但重要⭐⭐⭐
- [ ] 呆呆
---
### 紧急且重要⭐⭐⭐⭐
- [ ] 呆呆
---
### 不紧急不重要⭐
- [ ] 呆呆
---
### 紧急不重要⭐⭐
- [ ] 呆呆
````
 `````
