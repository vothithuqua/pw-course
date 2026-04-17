# Git Undo Guide 🛠️

Tài liệu tóm tắt các lệnh hoàn tác (undo) trong Git

---

## 1. Từ Staging Area → Working Directory
Dùng khi đã chạy lệnh `git add` nhưng chưa `git commit` và muốn đưa file ra khỏi danh sách chuẩn bị.

* **Restore cụ thể một file:**
    ```bash
    git restore --staged <file_name>
    ```
* **Restore toàn bộ các file:**
    ```bash
    git restore --staged .
    ```

---

## 2. Từ Repository → Working Directory (Un-commit)
Dùng khi đã chạy `git commit` nhưng muốn quay lại để sửa đổi thêm mà không làm mất nội dung đã viết.

* **Cú pháp tổng quát:**
    ```bash
    git reset HEAD~<số_commit>
    ```
* **Ví dụ: Hủy 2 commit gần nhất:**
    ```bash
    git reset HEAD~2
    ```


---

## 3. Một số lệnh bổ trợ khác

| Tình huống | Lệnh thực hiện |
| :--- | :--- |
| **Xóa hẳn thay đổi ở Working Directory** | `git restore <file_name>` |
| **Hủy commit và giữ nguyên Staging** | `git reset --soft HEAD~1` |
| **Xóa sạch mọi thứ (Về hẳn commit cũ)** | `git reset --hard HEAD~1` |

---

Working directory -> Staging 
- git add <ten_file>
Staging -> Working directory 
- git restore --staged <file_name>
- git restore --staged .
Staging -> Repository
- git commit -m"<msg>
Repository -> Working directory
- git reset HEAD~<so commit>
- git reset HEAD~2

