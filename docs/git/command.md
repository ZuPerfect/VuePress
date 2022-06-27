## 常用命令
### 查看log
```
git log
```
### git commit 后想撤销 commit
```
git reset --soft HEAD^
```

### 想撤销之前提交过的一个commit
```
git revert -m 1 [logid]
```

