# 毕业设计项目

##启动

###### 拉取项目
```
git clone git@github.com:hanliming/biyesheji.git
```

###### 安装依赖
```
npm install
```

###### 启动项目
```
npm run dev
```
>项目在本地会自动打开浏览器或者键入http://localhost:8080/


## 文档
1. [vue](https://cn.vuejs.org)
2. [vuex](https://vuex.vuejs.org)
3. [vue-router](https://router.vuejs.org)
4. [mint-ui](https://mint-ui.github.io/#!/zh-cn)
5. [axios](https://github.com/axios/axios)

## 编码规范

1. 路由和vue文件要保持对应关系，路由即代表资源路径。文件夹名小写，文件名驼峰命名。
    ```
    eg:
    router:{
    path:'Order',
    name:'Order'
    child:[{
        path:'OrderTable',
        name:'OrderTable'
    }]
    }
    ```
    ```z
    |--Order.vue
    |--order
        |--OrderTable.vue
    ```

2. 保证变量名称和文件名称语义化，不要起无意义的变量名。全局变量采用全大写，私有变量要采用`_`加变量名称，普通变量尽量采用驼峰命名。用`let`和`const`取代你的`var`
    __示例__:
    ```bash
    const USERTYPE=['','管理员','普通用户']
    let UserList=[];
    let _myUserType=['','用户1','用户2']
    ```

3. 不要将`console` `debugger`等代码提交到远程仓库，请务必保证提交代码时提交的模块没有`warning` `danger`等报错信息。