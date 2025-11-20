# Nordic Haus - Product Pages

## Overview

Individual product detail pages with comprehensive specifications, dimensions, assembly instructions, and cross-category recommendations.

## ✅ Completed Product Pages

### 1. **Ektorp Sofa** (`ektorp-sofa.html`)
- **Category:** Sofas
- **Price:** $599
- **Status:** Best Seller
- **Features:** Removable washable cover, deep seats, 10-year warranty
- **Dimensions:** 85" W × 34.5" D × 34.5" H
- **Recommendations:** Lack Coffee Table (Tables), Kallax Shelf Unit (Storage)

### 2. **Billy Bookshelf** (`billy-bookshelf.html`) 🔥
- **Category:** Storage
- **Price:** $59 (~~$79~~) - **25% OFF PROMOTION!**
- **Status:** Limited Time Sale
- **Features:** 5 adjustable shelves, wall-mountable, FSC-certified wood
- **Dimensions:** 31.5" W × 11" D × 79.5" H
- **Recommendations:** Lisabo Dining Table (Tables), Ektorp Sofa (Sofas)

---

## 📋 Product Page Structure

Each product detail page includes:

### Navigation
- Header with Nordic Haus logo and main menu
- Breadcrumb navigation (Home → Catalog → Category → Product)
- Back to category buttons

### Product Information
- **Hero Section:**
  - High-quality product image
  - Product badges (Best Seller, Promotion, etc.)
  - Product title and ratings
  - Price (with promotional pricing if applicable)
  - Stock status
  - Key features list
  - Add to Cart / Wishlist buttons

- **Tabbed Content:**
  1. **Specifications** - Materials, construction, warranty
  2. **Dimensions** - Detailed measurements in inches and cm
  3. **Assembly** - Step-by-step instructions with time estimates
  4. **Care Instructions** - Cleaning, maintenance, safety tips

### Cross-Category Recommendations
- 2 recommended products from different categories
- Links to complement the main product
- Designed to enhance customer journey

### Navigation Links
- Return to all products
- Browse category (Sofas, Storage, Tables)

---

## 🎨 Design Features

### Visual Elements
- **Product Badges:** Best Seller, Promotion, Limited Time
- **Price Display:** Current price, original price (strikethrough), discount badge
- **Stock Status:** In Stock (green), Low Stock (yellow)
- **Star Ratings:** Visual feedback with review counts

### Interactive Features
- **Tab System:** Switch between specifications, dimensions, assembly, care
- **Add to Cart:** Immediate feedback with confirmation
- **Wishlist:** Toggle to save items
- **Hover Effects:** Product cards, buttons, images

### Responsive Design
- Mobile-first approach
- Grid layouts adapt to screen size
- Touch-friendly buttons and navigation
- Optimized images for performance

---

## 📐 Technical Implementation

### File Structure
```
products/
├── ektorp-sofa.html
├── billy-bookshelf.html
├── [7 more products to be created]
└── README.md

styles/
└── product-detail.css (shared styles)

js/
└── product-detail.js (shared JavaScript)
```

### CSS Architecture
- **Modular Design:** Reusable classes for all product pages
- **Custom Properties:** Nordic Haus brand colors (#00A1E0, #0176D3, #C8986B)
- **Responsive Grid:** Flexbox and CSS Grid for layouts
- **Smooth Transitions:** Hover effects, tab switching

### JavaScript Features
- Tab switching functionality
- Add to Cart feedback
- Wishlist toggle
- Event delegation for performance

---

## 🛒 Creating Additional Product Pages

### Template Pattern

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags with product-specific info -->
    <link rel="stylesheet" href="../styles/product-detail.css">
</head>
<body>
    <!-- Header (consistent across all pages) -->
    <!-- Breadcrumb -->
    
    <section class="product-detail">
        <!-- Product Image + Badge -->
        <!-- Product Info + Pricing -->
        <!-- Features + CTA Buttons -->
        
        <!-- Tabs (Specs, Dimensions, Assembly, Care) -->
        
        <!-- Recommendations (2 products from other categories) -->
        
        <!-- Back buttons -->
    </section>
    
    <!-- Footer -->
    <script src="../js/product-detail.js"></script>
</body>
</html>
```

### Products Remaining (To Be Created)

3. **Malm Bed** (Tables category - should be Beds)
4. **Kivik Sectional** (Sofas)
5. **Grönlid Corner Sofa** (Sofas) - *Suggest adding promotion*
6. **Kallax Shelf Unit** (Storage)
7. **Hemnes Cabinet** (Storage) - *Suggest adding promotion*
8. **Lack Coffee Table** (Tables)
9. **Lisabo Dining Table** (Tables)

### Recommended Promotional Pricing
- **Grönlid Corner Sofa:** $749 → $649 (Save $100)
- **Hemnes Cabinet:** $249 → $199 (Save $50, 20% off)
- **Kallax Shelf Unit:** $139 → $119 (Save $20, 15% off)

---

## 🎯 Cross-Category Recommendations Strategy

### Rules:
1. **Sofas** → Recommend: Coffee Table + Storage Unit
2. **Storage** → Recommend: Sofa OR Dining Table + Complementary piece
3. **Tables** → Recommend: Sofa + Storage Unit

### Example Combinations:
- **Ektorp Sofa** + Lack Coffee Table + Kallax Shelf Unit
- **Billy Bookshelf** + Lisabo Dining Table + Ektorp Sofa
- **Lack Coffee Table** + Kivik Sectional + Billy Bookshelf

---

## 💡 Product Page Best Practices

### Content Guidelines
- **Titles:** Clear, descriptive, include key feature
- **Descriptions:** 2-3 sentences, highlight main benefits
- **Specifications:** Complete, accurate, industry-standard terms
- **Dimensions:** Always include both imperial and metric
- **Assembly:** Realistic time estimates, required tools
- **Care:** Safety warnings, maintenance schedule

### SEO Optimization
- Unique meta descriptions
- Descriptive alt text for images
- Semantic HTML structure
- Internal linking (breadcrumbs, recommendations)

### Conversion Optimization
- Clear CTAs (Add to Cart, View Details)
- Trust signals (warranties, reviews, stock status)
- Urgency indicators (limited time, low stock)
- Social proof (review counts, ratings)

---

## 📊 Analytics & Tracking

### Metrics to Track
- Page views per product
- Add to Cart conversion rate
- Cross-category recommendation clicks
- Time on page
- Tab engagement (which tabs are viewed most)

---

## 🚀 Future Enhancements

### Phase 2 Features
- [ ] Image gallery (multiple product images)
- [ ] Color/size variants
- [ ] Customer reviews section
- [ ] Related products carousel
- [ ] Availability by store location
- [ ] 360° product viewer
- [ ] Assembly video tutorials
- [ ] Product comparison tool

### Phase 3 Features
- [ ] Augmented Reality (AR) room preview
- [ ] Live chat support on product pages
- [ ] Real-time inventory updates
- [ ] Personalized recommendations based on browsing history
- [ ] Save for later / wishlists
- [ ] Product configurator (customization options)

---

## 📝 Notes

- All product images are currently using Unsplash placeholders
- Replace with actual Nordic Haus product photography
- Ensure all dimensions and specifications are accurate
- Test assembly instructions with actual products
- Update inventory status regularly
- Monitor conversion rates and optimize accordingly

---

**Created:** 2025-11-20
**Last Updated:** 2025-11-20
**Version:** 1.0
**Status:** In Development - 2/9 products completed

