# 🎓 Website Thuyết trình: Giai cấp và Đấu tranh giai cấp

## 📖 Giới thiệu

Website thuyết trình tương tác về chủ đề **"Giai cấp và đấu tranh giai cấp"** theo quan điểm triết học Mác-Lênin, được phân tích thông qua bài hát **"Lối nhỏ"** của rapper Đen Vâu.

### 🎯 Mục tiêu
- Trình bày lý thuyết Mác-Lênin về giai cấp một cách sinh động
- Kết nối lý thuyết với thực tiễn qua nghệ thuật đương đại
- Tạo trải nghiệm học tập tương tác và hấp dẫn

## ✨ Tính năng

### 🖥️ Giao diện thuyết trình
- **10 slides** với nội dung phong phú và đa dạng
- **Responsive design** - tương thích mọi thiết bị
- **Animations mượt mà** - hiệu ứng chuyển slide đẹp mắt
- **Fullscreen mode** - chế độ toàn màn hình cho thuyết trình

### ⌨️ Điều khiển linh hoạt
- **Phím tắt**: `←` `→` `Space` `F` `1-9` `Home` `End`
- **Navigation bar**: Điều hướng trực quan
- **Slide selector**: Chuyển nhanh đến slide bất kỳ
- **Progress bar**: Theo dõi tiến độ thuyết trình

### 🎵 Tích hợp âm thanh
- **Audio player** tích hợp
- **Volume control** - điều chỉnh âm lượng
- **Progress tracking** - theo dõi thời gian phát
- Phát nhạc "Lối nhỏ" trong quá trình thuyết trình

### 📱 Tối ưu di động
- **Touch navigation** - vuốt để chuyển slide
- **Responsive layout** - tự động điều chỉnh theo màn hình
- **Mobile-friendly controls** - điều khiển thân thiện với di động

## 🚀 Cài đặt và Chạy

### Yêu cầu hệ thống
- Node.js 16+ 
- npm hoặc yarn

### Cài đặt
```bash
# Clone repository
git clone https://github.com/your-username/giai-cap-thuyetrinh.git

# Di chuyển vào thư mục dự án
cd giai-cap-thuyetrinh

# Cài đặt dependencies
npm install
# hoặc
yarn install

# Nếu gặp lỗi version cũ, update dependencies
npm update
```

### Chạy development server
```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build cho production
```bash
npm run build
npm start
# hoặc
yarn build
yarn start
```

## 🌐 Deploy trên Vercel

### Tự động deploy
1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Vercel sẽ tự động build và deploy

### Manual deploy
```bash
npm run build
npx vercel --prod
```

**Demo live**: [https://giai-cap-thuyetrinh.vercel.app](https://giai-cap-thuyetrinh.vercel.app)

## 📁 Cấu trúc dự án

```
giai-cap-thuyetrinh/
├── public/                  # Static files
│   ├── audio/              # Audio files
│   ├── images/             # Images
│   └── favicon.ico         # Favicon
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx      # Header component
│   │   ├── Slide.jsx       # Slide component
│   │   ├── Navigation.jsx  # Navigation component
│   │   └── AudioPlayer.jsx # Audio player
│   ├── data/
│   │   └── slides.js       # Slide data
│   ├── pages/
│   │   └── index.js        # Main page
│   └── styles/
│       ├── globals.css     # Global styles
│       └── components.module.css # Component styles
├── package.json            # Dependencies
├── next.config.js          # Next.js config
├── vercel.json            # Vercel config
└── README.md              # Documentation
```

## 📚 Nội dung thuyết trình

### Slide 1: Giới thiệu
- Tiêu đề và mục tiêu thuyết trình
- Câu hỏi mở đầu từ bài hát "Lối nhỏ"

### Slide 2: Khái niệm giai cấp
- Định nghĩa theo V.I.Lênin
- 4 tiêu chí phân chia giai cấp

### Slide 3: Nghe nhạc
- Đoạn nhạc "Lối nhỏ" của Đen Vâu
- Chuẩn bị cho phân tích

### Slides 4-6: Phân tích lời bài hát
- **Slide 4**: "Cao tầng" vs "Mái lá"
- **Slide 5**: "Đại lộ" vs "Lối nhỏ" 
- **Slide 6**: "Ăn hải sản" vs "Mùi cá ao"

### Slide 7: Nguyên nhân phân chia giai cấp
- Nguyên nhân kinh tế
- Nguyên nhân xã hội
- Nguyên nhân lịch sử

### Slide 8: Đấu tranh giai cấp
- Khái niệm và đặc điểm
- Vai trò động lực phát triển

### Slide 9: Ứng dụng thực tiễn Việt Nam
- Các thời kỳ lịch sử
- Ý nghĩa hiện đại

### Slide 10: Kết luận
- Tóm tắt nội dung chính
- Thông điệp cuối cùng

## 🎨 Thiết kế

### Color Palette
- **Primary**: `#667eea` (Blue)
- **Secondary**: `#764ba2` (Purple)
- **Success**: `#4caf50` (Green)
- **Warning**: `#ff9800` (Orange)
- **Background**: Linear gradient `#667eea` → `#764ba2`

### Typography
- **Font family**: Inter, Segoe UI
- **Headings**: 600-700 weight
- **Body**: 400-500 weight
- **Responsive sizes**: Auto-scale theo thiết bị

### Animations
- **Slide transitions**: Fade in + Slide up
- **Hover effects**: Transform + Shadow
- **Loading states**: Spinner + Progress bar
- **Smooth scrolling**: CSS scroll-behavior

## 🔧 Customization

### Thêm slides mới
Chỉnh sửa file `src/data/slides.js`:

```javascript
export const slides = [
  // ... existing slides
  {
    id: 11,
    type: 'custom',
    title: 'Slide mới',
    content: {
      // Nội dung slide
    }
  }
];
```

### Thay đổi theme
Chỉnh sửa CSS variables trong `src/styles/globals.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Thêm audio mới
1. Thêm file audio vào `public/audio/`
2. Cập nhật `AudioPlayer.jsx`:

```javascript
<source src="/audio/your-audio.mp3" type="audio/mpeg" />
```

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push branch: `git push origin feature/new-feature`
5. Tạo Pull Request

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để biết chi tiết.

## 👥 Authors

- **Nhóm thuyết trình** - *Triết học Mác-Lênin MLN111*

## 🙏 Acknowledgments

- **Đen Vâu** - Bài hát "Lối nhỏ" làm cảm hứng
- **Next.js** - Framework React
- **Vercel** - Platform deployment
- **Giảng viên** - Hướng dẫn nội dung học thuật

---

**⭐ Nếu project hữu ích, hãy star repository này!**

**🔗 Demo**: [https://giai-cap-thuyetrinh.vercel.app](https://giai-cap-thuyetrinh.vercel.app)
