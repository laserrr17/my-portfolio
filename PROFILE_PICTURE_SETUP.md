# Profile Picture Setup

To add your actual profile picture to the portfolio:

## Step 1: Add Your Image
1. Place your profile picture in the `public/` directory
2. Name it something like `profile-picture.jpg` or `profile-picture.png`

## Step 2: Update the Code
In `src/app/page.tsx`, replace the placeholder profile section (around line 45-61) with:

```tsx
{/* Profile Picture */}
<div className="mb-8 flex justify-center">
  <div className="relative">
    <Image 
      src="/profile-picture.jpg" 
      alt="Yuhao Cheng" 
      width={160} 
      height={160}
      className="rounded-full cursor-target border-4 border-purple-400 hover:border-purple-500 transition-colors"
      priority
    />
  </div>
</div>
```

## Step 3: Add the Image Import
At the top of `src/app/page.tsx`, add:
```tsx
import Image from "next/image"
```

## Current Placeholder
The current placeholder shows your initials "YC" with a purple gradient background and will work with the custom cursor effects.

## Recommended Image Specs
- Size: 400x400px or larger (square aspect ratio)
- Format: JPG or PNG
- File size: Under 500KB for optimal loading
- Professional headshot or portrait style
