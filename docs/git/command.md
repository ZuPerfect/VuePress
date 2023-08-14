## 常用命令

### 查看 log

```
git log
```

### git commit 后想撤销 commit

```
git reset --soft HEAD^
```

### 想撤销之前提交过的一个 commit

```
git revert -m 1 [logid]
```

### 因为 git 默认是不区分大小写的，所以 git status 是不会提示有修改的

可以通过以下命令查看默认的配置

```
git config --get core.ignorecase
```

可以通过一下命令修改该配置

```
git config core.ignorecase false
```
