# Professional Portfolio Website

A modern, responsive portfolio website with dark/light mode toggle and mobile preview feature.

## ✨ Features

- **Dark/Light Mode Toggle** - Switch between themes seamlessly with persistent storage
- **Mobile Preview** - Preview your website on a mobile device frame
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About Me** - Personal background and achievements
- **Skills Showcase** - Organized skill categories with tags
- **Projects Portfolio** - Featured projects with descriptions, technologies, and links
- **Blog Section** - Latest articles and case studies
- **Contact Form** - Easy way for visitors to reach out
- **GitHub Integration** - Display your GitHub projects
- **Smooth Animations** - Subtle animations and transitions
- **Mobile Navigation** - Hamburger menu for mobile devices

## 📁 Files Included

- `index.html` - Main HTML file with complete structure
- `style.css` - Comprehensive styling with dark/light mode support
- `script.js` - Interactive features, mobile preview, and project rendering
- `README.md` - Documentation

## 🚀 Getting Started

### Option 1: GitHub Pages (Recommended)

1. Create a new GitHub repository named `portfolio`
2. Clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```
3. Copy all the files into the repository
4. Commit and push the changes:
```bash
git add .
git commit -m "Initial commit: Add portfolio website"
git push origin main
```
5. Go to repository settings → Pages → Select main branch as source
6. Your portfolio will be live at `https://yourusername.github.io/portfolio`

### Option 2: Local Development

1. Clone or download all files
2. Open `index.html` in your web browser
3. Or use a local server: 
```bash
python -m http.server 8000
# or with Python 3
python3 -m http.server 8000
```

### Option 3: Web Hosting

Upload all files to any web hosting provider and customize the domain.

## 🎨 Customization

### Edit Your Information

1. **Name & Title** - Update in `index.html` hero section
2. **About Me** - Edit the about section text
3. **Skills** - Modify the skills categories and tags
4. **Projects** - Edit the `projects` array in `script.js`
5. **Social Links** - Update URLs in HTML footer and hero section
6. **Contact Info** - Change email, phone, and location
7. **Colors** - Modify CSS variables in `:root` section of `style.css`

### Edit Projects Array (script.js)

```javascript
{
    title: "Project Name",
    description: "Project description",
    technologies: ["Tech1", "Tech2", "Tech3"],
    liveLink: "https://your-project.com",
    githubLink: "https://github.com/username/project",
    icon: "fas fa-icon-name"
}
```

### Change Colors

Edit the `:root` CSS variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main color */
    --secondary-color: #8b5cf6;    /* Accent color */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    --bg-light: #f9fafb;           /* Light background */
    --bg-white: #ffffff;           /* White background */
}
```

For dark mode colors, add them to the `body.dark-mode` selector:

```css
body.dark-mode {
    --primary-color: #818cf8;
    --secondary-color: #a78bfa;
    /* ... other dark mode colors ... */
}
```

### Dark/Light Mode

- Theme preference is automatically saved to localStorage
- Users can toggle between modes using the moon/sun icon button
- All colors automatically adapt to the selected theme

### Mobile Preview

- Click the mobile phone icon button to preview your portfolio on a mobile device
- The preview shows a realistic iPhone frame with notch and home indicator
- Close the preview by clicking the X or outside the frame
- Content inside the mobile preview is scrollable

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Font Awesome Icons

This portfolio uses Font Awesome icons loaded from a CDN. All common icons are available.

Popular Icon Examples:
- `fas fa-code` - Code icon
- `fab fa-github` - GitHub logo
- `fab fa-linkedin` - LinkedIn logo
- `fas fa-envelope` - Email icon
- `fas fa-phone` - Phone icon
- `fas fa-moon` - Moon icon (for dark mode)
- `fas fa-sun` - Sun icon (for light mode)

[View all Font Awesome icons](https://fontawesome.com/icons)

## ⚡ Performance Optimization

- Lazy loading for images
- Optimized CSS and JavaScript
- Responsive images
- Efficient animations
- Small file sizes
- CSS variables for theme switching
- LocalStorage for theme persistence

## 📱 SEO Optimization

- Semantic HTML structure
- Meta descriptions
- Open Graph tags (customize in HTML)
- Structured data ready
- Fast load times
- Mobile-friendly design

## ✅ Deployment Checklist

- [ ] Update your name and title
- [ ] Add your profile picture/avatar
- [ ] Update about me section
- [ ] Add your projects with links
- [ ] Update social media links
- [ ] Add your contact information
- [ ] Update blog posts
- [ ] Test dark/light mode switching
- [ ] Test mobile preview feature
- [ ] Test on mobile devices
- [ ] Test all links
- [ ] Deploy to hosting
- [ ] Set up analytics

## 🔧 Advanced Customization

### Add Blog Posts

Edit the blog section HTML to add more articles:

```html
<article class="blog-card">
    <div class="blog-image">
        <i class="fas fa-icon"></i>
    </div>
    <h3>Post Title</h3>
    <p class="blog-date">Date</p>
    <p>Description</p>
    <a href="#" class="read-more">Read More →</a>
</article>
```

### Connect Contact Form

To make the contact form functional, you can:

1. **Use Formspree** (Recommended)
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

2. **Use Netlify Forms**
```html
<form class="contact-form" name="contact" method="POST" netlify>
```

3. **Connect to your own backend**

## 📚 Additional Resources

- [Font Awesome Icons](https://fontawesome.com/icons)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Grid & Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 🎓 What's New in This Update

### Dark/Light Mode
- Persistent theme preference using localStorage
- Smooth transitions between themes
- All colors automatically adapt
- Toggle button in top-right corner

### Mobile Preview
- Realistic iPhone frame with notch
- Scrollable mobile content
- Easy close functionality
- Responsive preview sizes

## 📝 License

This portfolio template is free to use and modify for your personal use.

## 🤝 Support

For customization help or issues, feel free to reach out or check the code comments.

---

**Happy coding! 🚀**

Made with ❤️ by Vishnu Boya