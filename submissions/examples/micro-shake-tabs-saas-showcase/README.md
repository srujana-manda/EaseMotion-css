<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Micro Shake Tabs - SaaS Showcase</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="tabs">
  <button class="tab active">Overview</button>
  <button class="tab">Pricing</button>
  <button class="tab">Features</button>
  <button class="tab">Reviews</button>
</div>

<div class="content">
  <h2>SaaS Showcase</h2>
  <p>Hover over inactive tabs or select the active tab to experience a subtle micro shake animation.</p>
</div>

</body>
</html># Micro Shake Tabs - SaaS Showcase Layout

## Description

A responsive tab component featuring a subtle Micro Shake hover animation designed for modern SaaS showcase pages.

## Features

- Pure HTML & CSS
- Responsive layout
- Keyboard accessible
- CSS custom properties
- No JavaScript required

## Usage

```html
<div class="tabs">
  <button class="tab active">Overview</button>
  <button class="tab">Pricing</button>
  <button class="tab">Features</button>
</div>
```

Link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## Customization

Modify the CSS variables:

```css
:root{
  --primary:#4f46e5;
  --duration:0.35s;
  --ease:ease;
}
```

## Fits EaseMotion CSS

Uses a lightweight, human-readable Micro Shake animation with customizable variables and zero JavaScript.