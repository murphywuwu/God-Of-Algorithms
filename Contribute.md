## Fork此项目
1. 打开[项目](https://github.com/nimojs/learn-js)

2. 点击fork按钮，fork此项目
<img width="1203" alt="image" src="https://user-images.githubusercontent.com/12481194/175309015-e308a81e-62a3-454e-9f06-9c1d675d6562.png">


## clone代码到本地
1. 复制链接地址
<img width="1215" alt="image" src="https://user-images.githubusercontent.com/12481194/175309678-aec82a2c-6d1f-4b49-ac7d-5d25752ad0bb.png">

2. 打开你的终端
<img width="483" alt="image" src="https://user-images.githubusercontent.com/12481194/175310211-1767aa6d-9e47-42ba-8121-938bc81a06f8.png">

## 切换分支
```
git checkout -b develop
```

## 编写代码
```
// JS/apply.js
function myApply() {
  // 编写你的代码... 
}
```

## 提交代码：

```
git commit -m 'apply complete'
```


## 打开任务：
1. 打开[项目](https://github.com/nimojs/learn-js)

2. 点击issue
<img width="1215" alt="image" src="https://user-images.githubusercontent.com/12481194/175319999-bc0bdf8b-ebfb-44c6-83bc-3b7d0a9012a4.png">

3. 找到任务对应issue
<img width="1216" alt="image" src="https://user-images.githubusercontent.com/12481194/175320482-4c45482b-3e49-40da-bb56-f8dd1ca785d7.png">

4. 在issue底下附上你自己的代码，参与讨论
<img width="934" alt="image" src="https://user-images.githubusercontent.com/12481194/175320963-aba661f2-d059-467b-b672-2f4004586e67.png">

5. 截图到群里打卡并@我，然后我对你的代码进行code review


## 任务更新
### 1. 更新自己的README.md上的任务
#### 方式1: 自己手动更新
任务更新后，我会实时同步任务到群里，你可以自行根据任务的更新情况，手动更新你的README

#### 方式2：自动更新
任务更新后，我会实时同步任务到群里，同样的，你可以通过下面的方式自动更新你的README

```
git checkout main // 切换到主分支
git pull // 将主分支上的最新内容拉下来

git checkout develop // 切换到develop分支
git checkout -b develop_tmp // 创建临时分支

git merge main // 只关注README.md即可，如果有冲突，解决下冲突，即可更新获取最新任务

git checkout develop // 切换回develop分支

git checkout develop_tmp README.md // 合并develop_tmp上的README.md
```

### 2. 你需要自行根据最新任务创建对应的文件并编写代码

