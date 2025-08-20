# Portfolio Website - kimdevhere

Một website portfolio hiện đại, responsive và đa ngôn ngữ được xây dựng với HTML, CSS và JavaScript thuần.

## ✨ Tính năng

- **Đa ngôn ngữ**: Hỗ trợ tiếng Việt, tiếng Anh và tiếng Nhật
- **Responsive Design**: Tối ưu hóa cho mọi thiết bị
- **Dark/Light Mode**: Chuyển đổi theme tự động
- **Smooth Animations**: Hiệu ứng mượt mà với CSS animations
- **Mobile First**: Thiết kế ưu tiên mobile
- **Accessibility**: Hỗ trợ screen readers và keyboard navigation
- **Performance**: Tối ưu hóa với lazy loading và intersection observer

## 🚀 Cách sử dụng

### 1. Khởi chạy website
```bash
# Sử dụng Python
python -m http.server 8000

# Hoặc sử dụng Node.js
npx serve .

# Hoặc mở trực tiếp file index.html trong browser
```

### 2. Cấu trúc thư mục
```
mainport/
├── index.html          # File HTML chính
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── update/             # Thư mục cập nhật
└── README.md           # Hướng dẫn này
```

### 3. Tùy chỉnh nội dung

#### Thay đổi thông tin cá nhân
Trong `script.js`, tìm và thay đổi:
```javascript
const YOUR_NAME = "kimdevhere"; // Thay đổi tên của bạn
```

#### Thêm dự án mới
Trong `script.js`, thêm vào mảng `projectData`:
```javascript
{
    id: 'proj7',
    category: 'dev uiux',
    cardImg: 'path/to/image.jpg',
    detailImg: 'path/to/detail-image.jpg',
    tags: ['React', 'Node.js'],
    liveLink: 'https://your-project.com',
    repoLink: 'https://github.com/your-repo'
}
```

#### Thay đổi ngôn ngữ
Website hỗ trợ 3 ngôn ngữ:
- `vi`: Tiếng Việt
- `en`: Tiếng Anh  
- `ja`: Tiếng Nhật

### 4. Tùy chỉnh giao diện

#### Thay đổi màu sắc
Trong `styles.css`, tìm các biến màu:
```css
:root {
    --primary-color: #8b5cf6;
    --secondary-color: #a855f7;
}
```

#### Thay đổi font
Trong `index.html`, thay đổi Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

## 🎨 Các section chính

1. **Hero Section**: Giới thiệu và call-to-action
2. **Skills**: Hiển thị kỹ năng và công nghệ
3. **Projects**: Portfolio các dự án
4. **Services**: Dịch vụ cung cấp
5. **Store**: Sản phẩm số
6. **About**: Thông tin về bản thân
7. **Contact**: Form liên hệ

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🔧 Tối ưu hóa

- **Lazy Loading**: Images và animations
- **Intersection Observer**: Performance animations
- **CSS Grid & Flexbox**: Layout hiện đại
- **CSS Variables**: Dễ dàng tùy chỉnh
- **Minimal JavaScript**: Tối ưu performance

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 License

MIT License - Tự do sử dụng và chỉnh sửa.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

## 📞 Liên hệ

- **Email**: emailcuaban@example.com
- **GitHub**: [your-username](https://github.com/your-username)
- **LinkedIn**: [your-profile](https://linkedin.com/in/your-username)

---

**Lưu ý**: Đừng quên thay đổi thông tin liên hệ và social media links trong `index.html` trước khi deploy!
