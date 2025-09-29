# 🚀 HƯỚNG DẪN DEPLOY LÊN VERCEL

## 📋 **CHUẨN BỊ TRƯỚC KHI DEPLOY**

### ✅ **Kiểm tra các file cấu hình:**
- ✅ `package.json` - Dependencies đã cập nhật
- ✅ `next.config.js` - Cấu hình cho Vercel
- ✅ `vercel.json` - Cấu hình Vercel
- ✅ Code đã hoàn thiện

### ✅ **Test local trước khi deploy:**
```bash
npm run build
npm run start
```

---

## 🌐 **CÁCH 1: DEPLOY VỚI VERCEL CLI**

### **Bước 1: Cài đặt Vercel CLI**
```bash
npm install -g vercel
```

### **Bước 2: Login Vercel**
```bash
vercel login
```
- Chọn phương thức login (GitHub, Email, etc.)
- Làm theo hướng dẫn để đăng nhập

### **Bước 3: Deploy**
```bash
# Trong thư mục dự án
vercel

# Hoặc deploy production
vercel --prod
```

### **Bước 4: Làm theo hướng dẫn**
- **Project name**: `giai-cap-thuyetrinh` (hoặc tên bạn muốn)
- **Framework**: Next.js (auto-detect)
- **Root directory**: `.` (thư mục hiện tại)
- **Build command**: `npm run build` (auto-detect)
- **Output directory**: `.next` (auto-detect)

---

## 🌐 **CÁCH 2: DEPLOY VỚI VERCEL DASHBOARD**

### **Bước 1: Tạo Git Repository**
```bash
git init
git add .
git commit -m "Initial commit - Giai cấp và đấu tranh giai cấp presentation"
```

### **Bước 2: Push lên GitHub**
```bash
# Tạo repo trên GitHub trước
git remote add origin https://github.com/username/giai-cap-thuyetrinh.git
git branch -M main
git push -u origin main
```

### **Bước 3: Import vào Vercel**
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub
3. Nhấn **"New Project"**
4. Chọn repository `giai-cap-thuyetrinh`
5. Nhấn **"Deploy"**

---

## ⚙️ **CẤU HÌNH ENVIRONMENT VARIABLES**

### **Nếu cần thiết, thêm env vars:**
```bash
# Trong Vercel Dashboard > Settings > Environment Variables
NODE_ENV=production
```

---

## 🖼️ **XỬ LÝ HÌNH ẢNH**

### **Thêm hình ảnh vào public/images:**
```
public/
└── images/
    ├── marx-engels-lenin.jpg
    ├── class-structure.jpg
    ├── social-structure.jpg
    ├── class-origin.jpg
    ├── class-struggle.jpg
    ├── three-forms-struggle.jpg
    ├── vietnam-development.jpg
    └── den-vau-loi-nho.jpg
```

### **Redeploy sau khi thêm ảnh:**
```bash
vercel --prod
```

---

## 🔧 **TROUBLESHOOTING**

### **❌ Lỗi Build:**
```bash
# Kiểm tra build local
npm run build

# Xem logs chi tiết
vercel logs your-deployment-url
```

### **❌ Lỗi 404:**
- Kiểm tra `next.config.js`
- Đảm bảo routes được cấu hình đúng

### **❌ Hình ảnh không hiển thị:**
- Đảm bảo file ở đúng thư mục `public/images/`
- Tên file phải chính xác
- Redeploy sau khi thêm ảnh

---

## 📊 **SAU KHI DEPLOY THÀNH CÔNG**

### **✅ Bạn sẽ nhận được:**
- **URL Production**: `https://giai-cap-thuyetrinh.vercel.app`
- **Preview URLs** cho mỗi commit
- **Automatic deployments** khi push code mới

### **✅ Tính năng Vercel:**
- **SSL Certificate** tự động
- **CDN Global** cho tốc độ nhanh
- **Analytics** để theo dõi traffic
- **Custom Domain** (nếu cần)

---

## 🎯 **CHECKLIST CUỐI CÙNG**

### **Trước khi deploy:**
- [ ] Code hoạt động tốt local
- [ ] Tất cả dependencies đã cài
- [ ] Build thành công
- [ ] Không có lỗi linting

### **Sau khi deploy:**
- [ ] Website load được
- [ ] Tất cả slides hoạt động
- [ ] Navigation working
- [ ] Fullscreen mode OK
- [ ] Audio player (nếu có)
- [ ] Responsive trên mobile

---

## 🚀 **DEPLOY NGAY:**

```bash
# Cách nhanh nhất
npm install -g vercel
vercel login
vercel --prod
```

**Chúc bạn deploy thành công!** 🎉✨

---

## 📞 **HỖ TRỢ**

Nếu gặp vấn đề:
1. Kiểm tra [Vercel Docs](https://vercel.com/docs)
2. Xem logs: `vercel logs`
3. Check Discord/Forum Vercel
