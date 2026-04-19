# Git Undo Guide 🛠️


## 1. Từ Staging Area → Working Directory
Dùng khi đã chạy lệnh `git add` nhưng chưa `git commit` và muốn đưa file ra khỏi danh sách chuẩn bị.

* **Restore cụ thể một file:**
    ```
    git restore --staged <file_name>
    ```
* **Restore toàn bộ các file:**
    ```
    git restore --staged .
    ```



## 2. Từ Repository → Working Directory (Un-commit)
Dùng khi đã chạy `git commit` nhưng muốn quay lại để sửa đổi thêm mà không làm mất nội dung đã viết.

* **Cú pháp tổng quát:**
    ```
    git reset HEAD~<số_commit>
    ```
* **Ví dụ: Hủy 2 commit gần nhất:**
    ```
    git reset HEAD~2
    ```

---

# 🌿 Branching trong Git

## 1. Tạo branch

```
    git branch <ten_nhanh>
```

## 2. Di chuyển sang branch

``` 
git checkout <ten_nhanh>
```


#### 🔍 Kiểm tra branch hiện tại

```
git branch
```
👉 Branch đang đứng sẽ có dấu *


#### 🚀 Tạo branch + chuyển luôn

 ```
git checkout -b <ten_nhanh>
 ```

## 3. Xoá branch
 ```
    git branch -D <ten_nhanh> 
 ```
##### ⚠️ Lưu ý:

- Không được đứng ở branch cần xoá
- Nên chuyển sang branch khác (main/develop) trước

```
git checkout main
git branch -D <ten_nhanh>
```

--- 

# 🚫 Git Ignore File

## 📌 Các file không cần đưa lên Git Repository


#### Trong dự án có nhiều file không cần thiết phải commit lên Git

```
    - File tạm thời của hệ điều hành (.DS_Store, Thumbs.db)
    - Thư mục dependencies (node_modules/, vendor/)
    - File build và artifacts (dist/, build/, .exe)
    - File cấu hình cá nhân (IDE setting, environment)
    - File nhạy cảm (API keys, passwords, certificates)
    - File log và database local
```

#### ⚙️ Cách để Git bỏ qua file

##### 1. Tạo file .gitignore

##### 2. Thêm file/folder cần ignore
```
# Ví dụ
node_modules/
dist/
.env
.DS_Store
```

##### 3. Git sẽ tự động bỏ qua

```
Các file được khai báo trong .gitignore sẽ không được add vào Git
```


---

# ⚡ JavaScript Basic

## 1. Convention (Quy tắc đặt tên code)

### 1.1 snake_case
- 👉 Các từ viết thường, nối với nhau bằng dấu `_`

**Ví dụ:**
```
thu_qua
user_name
```

### 1.2 kebab-case
- 👉 Các từ viết thường, nối với nhau bằng dấu `-`

**Ví dụ:**
```
thu-qua
user-name
```

### 1.3 camelCase
- 👉 Viết thường chữ đầu, các từ sau viết hoa chữ cái đầu

**Ví dụ:**
```
thuQua
userName
```

### 1.4 PascalCase
- 👉 Mỗi từ đều viết hoa chữ cái đầu

**Ví dụ:**
```
ThuQua
UserName
```

### 1.5 SCREAMING_SNAKE_CASE
- 👉 Tất cả chữ viết hoa
- 👉 Các từ nối với nhau bằng dấu `_`

**Ví dụ:**
```
THU_QUA
USER_NAME
```

## 🎯 Mục đích sử dụng Conventions

| Convention   | Mục đích sử dụng        |
|-------------|-------------------------|
| snake_case  | Tạm thời không dùng     |
| kebab-case  | Đặt tên file, folder    |
| camelCase   | Đặt tên biến, hàm       |
| PascalCase  | Đặt tên class           |

## 2. Javascript

### 2.1 Console.log

#### Sử dụng nháy đơn, nháy kép
```
console.log('Toi la Thu Qua')
console.log("Toi la Thu Qua")
```
#### Sử dụng kèm variable

```
let name = "Thu Qua"
console.log(`Toi la ${name}`)
```
#### Sử dụng cộng chuỗi
```
console.log("Toi ten la" + name + " ")
```

### 2.2 Object
#### Cú pháp
```
const myInfo = {
    "name": "Thu Qua",
    address: "Da Nang", // nên dùng
    'favoriteNumber': 30,
    "address 2": "Quang Nam"
};
```
#### Truy xuất giá trị bên trong object
- Sử dụng dấu chấm: Nếu key không chứa dấu chấm, ký tự đặc biệt
- Sử dụng dấu ngoặc vuông: Nếu key chứa dấu chấm, ký tự đặc biệt

```
console.log(myInfo.name);
console.log(myInfo.["name"]);
```

### 2.3 Array

- Tạo mảng

    - Khai báo
    - Sử dụng

- Truy suất mảng

    - Độ dài mảng: lenght
    - Lấy phần tử theo index: [0], [1]

### 2.4 Function
```
Function = Hàm
Đoạn code dùng đi dùng lại
```

#### Ví dụ
```
const dai = 5;
const rong = 10;

function tinhDienTich(dai, rong) {
const dienTich = dai * rong;
return dienTich;
}

console.log(tinhDienTich(5,10));
console.log(tinhDienTich(20,5));
```


