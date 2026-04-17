# Tổng quan kiến thức về Git

## 1. Ba vùng trạng thái trong Git

Git hoạt động dựa trên **3 vùng chính**:

### 1.1 Working Directory
- Nơi chỉnh sửa file
- File chưa được đưa vào staging

### 1.2 Staging Area
- Nơi chuẩn bị commit
- Sử dụng lệnh:

```
git add <file>   # Thêm 1 file
git add .        # Thêm toàn bộ file
```

### 1.3 Repository (Local)
- Nơi lưu commit chính thức
- Sủ dụng lệnh:
```
git commit -m"message"
```

---

## 2. Git Workflow cơ bản


**Flow cơ bản**
``` 
![Git Workflow](images/mermaid-diagram.png)
```

**Flow phổ biến:**

```
git init
git add .
git commit -m "message"

```

---
## 3. Các lệnh Git quan trọng

### 3.1 Kiểm tra trạng thái
```
git status
```
### 3.2 Xem lịch sử commit 
```
git log
```
### 3.3 Push code lên git
```
git remote add origin <repo-url>
git push origin main
```
