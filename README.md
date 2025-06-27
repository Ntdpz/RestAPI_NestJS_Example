#  ตัวอย่างการเขียน RestAPI ด้วย NestJS
# 🛠️ REST API Example with NestJS

นี่คือตัวอย่างโปรเจกต์ REST API ที่พัฒนาด้วย [NestJS](https://nestjs.com/) เหมาะสำหรับผู้เริ่มต้นที่ต้องการเรียนรู้การสร้าง API ด้วย NestJS โครงสร้างชัดเจน เข้าใจง่าย

---

## 📦 เครื่องมือที่ต้องติดตั้งก่อนเริ่ม

- [Node.js](https://nodejs.org/)
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)

---

## 📥 การติดตั้งและเริ่มใช้งาน

### 1. Clone Repository

```bash
git clone https://github.com/Ntdpz/RestAPI_NestJS_Example.git
cd RestAPI_NestJS_Example
```

### 2. ติดตั้ง dependencies
```bash
npm install
```

### 3. รันโปรเจกต์
```bash
npm run start
```

## 📂 โครงสร้างโปรเจกต์โดยย่อ
```bash
src/
├── articles/
│   ├── dto/
│   │   └── create-article.dto.ts      # กำหนด datamodel ของข้อมูล
│   ├── articles.controller.ts         # รับ Request ส่ง Response และเรียกใช้ service
│   ├── articles.service.ts            # Logic หลัก เช่น create, findAll, findOne
│   └── articles.module.ts             # รวบรวมทุกส่วนใน articles เข้า Module
├── app.module.ts                      # รวมทุก Module เข้าด้วยกัน
└── main.ts                            # จุดเริ่มต้นของแอป (Entry Point)

```

## ## 🧠 อธิบายการทำงานของแต่ละไฟล์

### `main.ts`

-   ไฟล์เริ่มต้นของแอปพลิเคชัน
    
-   ทำหน้าที่บูต NestJS application
    

### `app.module.ts`

-   Module หลักที่รวมทุก module เข้าด้วยกัน
    

### `articles/` Folder

เป็น API หลักของโปรเจกต์ โดยมีลำดับการทำงานดังนี้:

1.  **จำลอง Database**
    
    -   สร้างตัวแปรแบบ `array` เพื่อเก็บข้อมูล จำลองการทำงานของฐานข้อมูล (Mock)
        
2.  **สร้าง DTO (Data Transfer Object)**
    
    -   `create-article.dto.ts`: กำหนดรูปแบบข้อมูลที่ใช้ในการรับ-ส่งค่าระหว่าง client กับ server
        
3.  **Service (articles.service.ts)**
    
    -   เขียน Logic หลักของ API เช่น:
        
        -   `create()`: เพิ่มบทความ
            
        -   `findAll()`: ดึงรายการบทความทั้งหมด
            
        -   `findOne()`: ดึงบทความตาม ID
            
4.  **Controller (articles.controller.ts)**
    
    -   กำหนด Endpoint และ HTTP Method (GET, POST, ฯลฯ)
        
    -   เรียกใช้ Service เพื่อประมวลผลคำสั่ง
        
    -   ส่ง Response กลับไปยัง client
        

----------

## 🚀 ตัวอย่าง Flow การทำงาน

1.  Client ส่ง Request มาที่ `articles` endpoint
    
2.  Controller รับคำขอ และเรียกใช้ Service
    
3.  Service ประมวลผล logic และส่งค่ากลับ
    
4.  Controller ส่ง Response กลับให้ Client
    

----------

## ✅ สรุป

NestJS เป็น Framework ที่ช่วยให้เราสร้าง REST API ได้ง่าย รวดเร็ว และมีโครงสร้างที่ชัดเจน  
ตัวอย่างนี้เหมาะสำหรับผู้เริ่มต้นเพื่อเข้าใจแนวคิดพื้นฐาน เช่นการใช้ DTO, Service, Controller และการ Mock database ด้วย array

> ง่ายใช่ไหมล่ะ 😄

# 🙌 ผู้จัดทำ

[Ntdpz](https://github.com/Ntdpz)
