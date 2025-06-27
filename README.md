การแสดงผลบน GitHub:

markdown
คัดลอก
แก้ไข
# 🛠️ REST API Example with NestJS

นี่คือตัวอย่างโปรเจกต์ REST API ที่พัฒนาด้วย [NestJS](https://nestjs.com/)

## 📦 เครื่องมือที่ต้องติดตั้งก่อนเริ่ม

- [Node.js](https://nodejs.org/)
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)

## 📥 Clone Repository

```bash
git clone https://github.com/Ntdpz/RestAPI_NestJS_Example.git
cd RestAPI_NestJS_Example
▶️ เริ่มรันโปรเจกต์
bash
คัดลอก
แก้ไข
npm install
npm run start
🧠 อธิบายโครงสร้างและการทำงาน
main.ts
ไฟล์เริ่มต้นของแอป (Entry Point)

ทำหน้าที่บูต NestJS Application

app.module.ts
เป็น Module หลักที่รวบรวมและจัดการ Module อื่น ๆ ภายในแอป

articles/
โฟลเดอร์นี้คือ API หลักที่เราสร้างขึ้น โดยมี Flow การทำงานดังนี้:

จำลอง Database

ใช้ตัวแปรแบบ array เพื่อเก็บข้อมูล บน memory (Mock Database)

สร้าง DTO (Data Transfer Object)

ใช้สำหรับกำหนดรูปแบบข้อมูล (Model) ที่ใช้รับ-ส่งค่าระหว่าง client กับ server

Articles Service (articles.service.ts)

เขียน Logic ของ API เช่น:

create()

findAll()

findOne()

Articles Controller (articles.controller.ts)

กำหนดเส้นทาง (Endpoints)

กำหนด HTTP Methods (GET, POST ฯลฯ)

เรียกใช้ Service เพื่อนำ Logic มาทำงานตามคำขอ

ส่ง Response กลับไปยัง Client

📌 สรุป
NestJS ใช้งานง่ายและจัดระเบียบโครงสร้างชัดเจน เหมาะสำหรับการพัฒนา API ขนาดเล็กไปจนถึงใหญ่ และโค้ดนี้ก็เป็นตัวอย่างที่เข้าใจได้ง่ายสำหรับผู้เริ่มต้น

ง่ายใช่ไหมล่ะ 😄
