# 常见问题备忘
## 1. “xxx”已损坏，无法打开。 你应该将它移到废纸篓。
``` bash
sudo xattr -r -d com.apple.quarantine /Applications/xxx.app
```