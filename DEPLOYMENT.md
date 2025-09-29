# 🚀 Hướng dẫn Deploy Website lên Vercel

## 📋 Chuẩn bị

### 1. Yêu cầu hệ thống
- **Node.js** 16+ ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/))
- **Tài khoản GitHub** ([Đăng ký](https://github.com/))
- **Tài khoản Vercel** ([Đăng ký](https://vercel.com/))

### 2. Kiểm tra code
```bash
# Kiểm tra Node.js version
node --version

# Kiểm tra npm version  
npm --version

# Kiểm tra Git
git --version
```

## 🔧 Cài đặt Local

### Bước 1: Clone hoặc tạo project
```bash
# Nếu có repository
git clone https://github.com/your-username/giai-cap-thuyetrinh.git
cd giai-cap-thuyetrinh

# Hoặc tạo folder mới và copy code vào
mkdir giai-cap-thuyetrinh
cd giai-cap-thuyetrinh
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy development server
```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Bước 4: Test build production
```bash
npm run build
npm start
```

## 📤 Push code lên GitHub

### Bước 1: Tạo repository trên GitHub
1. Vào [GitHub](https://github.com/)
2. Click "New repository"
3. Đặt tên: `giai-cap-thuyetrinh`
4. Chọn **Public** 
5. Click "Create repository"

### Bước 2: Push code
```bash
# Khởi tạo git (nếu chưa có)
git init

# Thêm remote origin
git remote add origin https://github.com/YOUR_USERNAME/giai-cap-thuyetrinh.git

# Add và commit files
git add .
git commit -m "Initial commit: Website thuyết trình Giai cấp"

# Push lên GitHub
git push -u origin main
```

## 🌐 Deploy lên Vercel

### Phương pháp 1: Tự động qua GitHub (Khuyến nghị)

#### Bước 1: Kết nối Vercel với GitHub
1. Vào [Vercel.com](https://vercel.com/)
2. Đăng nhập bằng GitHub
3. Click "New Project"
4. Chọn repository `giai-cap-thuyetrinh`
5. Click "Import"

#### Bước 2: Cấu hình deploy
```
Framework Preset: Next.js
Build Command: npm run build  
Output Directory: .next
Install Command: npm install
```

#### Bước 3: Deploy
1. Click "Deploy"
2. Chờ 2-3 phút để build
3. Nhận được URL: `https://giai-cap-thuyetrinh.vercel.app`

### Phương pháp 2: Manual deploy qua CLI

#### Bước 1: Cài đặt Vercel CLI
```bash
npm i -g vercel
```

#### Bước 2: Login và deploy
```bash
# Login vào Vercel
vercel login

# Deploy lần đầu
vercel

# Deploy production
vercel --prod
```

## ⚙️ Cấu hình nâng cao

### Custom Domain
1. Vào Vercel Dashboard
2. Chọn project
3. Vào tab "Domains"
4. Thêm domain của bạn
5. Cấu hình DNS

### Environment Variables
```bash
# Trong Vercel Dashboard > Settings > Environment Variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Performance Optimization
```javascript
// next.config.js
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  compress: true,
}
```

## 🔄 Tự động deploy khi có thay đổi

### Workflow tự động
1. **Push code** lên GitHub
2. **Vercel tự động detect** thay đổi
3. **Auto build** và deploy
4. **Nhận thông báo** qua email

### Git workflow
```bash
# Thay đổi code
git add .
git commit -m "Update: Thêm slide mới"
git push origin main

# Vercel sẽ tự động deploy
```

## 📱 Tối ưu cho Mobile

### PWA Configuration
File `public/manifest.json` đã được cấu hình:
- **Standalone app** trên mobile
- **Landscape orientation** cho thuyết trình
- **Theme colors** phù hợp

### Performance Tips
- **Images**: Optimize kích thước < 500KB
- **Audio**: Compress file âm thanh
- **Code splitting**: Next.js tự động
- **Caching**: Vercel CDN global

## 🐛 Troubleshooting

### Lỗi Build
```bash
# Clear cache và rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Lỗi Audio không phát
- Kiểm tra file audio trong `public/audio/`
- Browser cần user interaction để phát audio
- Thêm multiple audio formats (mp3, ogg)

### Lỗi Fullscreen
- Một số browser không hỗ trợ Fullscreen API
- Fallback đã được implement trong code

### Lỗi Navigation
- Kiểm tra keyboard event listeners
- Test trên nhiều browser khác nhau

## 📊 Monitoring

### Vercel Analytics
```javascript
// pages/_app.js
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

### Performance Monitoring
- **Lighthouse scores**: 90+ trên tất cả metrics
- **Core Web Vitals**: Theo dõi qua Vercel Dashboard
- **Real User Monitoring**: Analytics tích hợp

## 🎯 Checklist Deploy

- [ ] ✅ Code hoạt động local (`npm run dev`)
- [ ] ✅ Build thành công (`npm run build`)  
- [ ] ✅ Push code lên GitHub
- [ ] ✅ Kết nối Vercel với GitHub
- [ ] ✅ Deploy thành công
- [ ] ✅ Test website trên URL live
- [ ] ✅ Test responsive trên mobile
- [ ] ✅ Test tất cả tính năng
- [ ] ✅ Cấu hình custom domain (optional)

## 🔗 URLs và Links

- **Repository**: `https://github.com/YOUR_USERNAME/giai-cap-thuyetrinh`
- **Live Demo**: `https://giai-cap-thuyetrinh.vercel.app`
- **Vercel Dashboard**: `https://vercel.com/dashboard`

## 📞 Support

Nếu gặp vấn đề:
1. Kiểm tra [Vercel Documentation](https://vercel.com/docs)
2. Xem [Next.js Documentation](https://nextjs.org/docs)
3. Tạo issue trên GitHub repository

---

**🎉 Chúc mừng! Website thuyết trình của bạn đã live trên internet!**
