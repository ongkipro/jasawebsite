import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

REPO_ROOT = "/Users/ongki/Projects/jasawebsite"
PUBLIC_DIR = os.path.join(REPO_ROOT, "public")
APP_DIR = os.path.join(REPO_ROOT, "src/app")

FONT_PATH = "/System/Library/Fonts/Supplemental/Arial Black.ttf"

def make_base_graphic(mode="universal", size=512):
    """
    mode:
      - 'light': Jet ink text, rich vermillion dot, transparent bg
      - 'dark': Chalk white text, glowing vermillion dot, transparent bg
      - 'universal': Solid dark ink letters + luminous white ambient halo (flawless on all backgrounds)
      - 'apple': Deep luxury obsidian background, chalk white text, glowing vermillion dot (iOS HIG)
    """
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    font_size = int(size * 0.303) # ~155 for 512
    font = ImageFont.truetype(FONT_PATH, font_size)
    
    # Measure text bounding box
    dummy = Image.new("RGBA", (1, 1), (0, 0, 0, 0))
    dd = ImageDraw.Draw(dummy)
    bbox = dd.textbbox((0, 0), "ONG", font=font)
    text_x0, text_y0, text_x1, text_y1 = bbox
    tw = text_x1 - text_x0
    th = text_y1 - text_y0
    
    dot_r = int(size * 0.051) # 26 for 512
    dot_diam = dot_r * 2
    gap = int(size * 0.043)   # 22 for 512
    total_w = dot_diam + gap + tw
    
    start_x = (size - total_w) // 2
    dot_cx = start_x + dot_r
    text_start_x = start_x + dot_diam + gap - text_x0
    text_start_y = (size - th) // 2 - text_y0
    dot_cy = text_start_y + text_y1 - dot_r - 2
    
    if mode == "apple":
        # iOS HIG: Solid background (deep luxury obsidian #0f1013) with fine hairline border
        d = ImageDraw.Draw(img)
        d.rectangle([0, 0, size, size], fill=(15, 16, 19, 255))
        # Subtle perimeter rim
        d.rectangle([0, 0, size - 1, size - 1], outline=(38, 41, 48, 255), width=2)
        # Dot
        d.ellipse([dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r], fill=(255, 55, 40, 255))
        d.ellipse([dot_cx - dot_r//2, dot_cy - dot_r*3//4, dot_cx + dot_r//4, dot_cy - dot_r//4], fill=(255, 195, 185, 230))
        # Text
        d.text((text_start_x, text_start_y), "ONG", font=font, fill=(252, 252, 255, 255))
        return img
        
    elif mode == "light":
        d = ImageDraw.Draw(img)
        # Dot
        d.ellipse([dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r], fill=(215, 40, 25, 255))
        d.ellipse([dot_cx - dot_r//2, dot_cy - dot_r*3//4, dot_cx + dot_r//4, dot_cy - dot_r//4], fill=(255, 160, 150, 220))
        # Text
        d.text((text_start_x, text_start_y), "ONG", font=font, fill=(15, 17, 21, 255))
        return img
        
    elif mode == "dark":
        d = ImageDraw.Draw(img)
        # Dot
        d.ellipse([dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r], fill=(255, 60, 45, 255))
        d.ellipse([dot_cx - dot_r//2, dot_cy - dot_r*3//4, dot_cx + dot_r//4, dot_cy - dot_r//4], fill=(255, 195, 185, 230))
        # Text
        d.text((text_start_x, text_start_y), "ONG", font=font, fill=(252, 252, 255, 255))
        return img
        
    elif mode == "universal":
        # Solid dark ink letters with a luminous white ambient halo
        halo = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        dh = ImageDraw.Draw(halo)
        halo_r = max(2, int(size * 0.015)) # 8 for 512
        for ox in range(-halo_r, halo_r + 1):
            for oy in range(-halo_r, halo_r + 1):
                if ox*ox + oy*oy <= halo_r * halo_r:
                    dh.ellipse([dot_cx + ox - dot_r, dot_cy + oy - dot_r, dot_cx + ox + dot_r, dot_cy + oy + dot_r], fill=(255, 255, 255, 220))
                    dh.text((text_start_x + ox, text_start_y + oy), "ONG", font=font, fill=(255, 255, 255, 220))
        halo = halo.filter(ImageFilter.GaussianBlur(max(1.0, size * 0.006)))
        img.paste(halo, (0, 0), halo)
        
        d = ImageDraw.Draw(img)
        # Dot
        d.ellipse([dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r], fill=(225, 45, 30, 255))
        d.ellipse([dot_cx - dot_r//2, dot_cy - dot_r*3//4, dot_cx + dot_r//4, dot_cy - dot_r//4], fill=(255, 170, 160, 220))
        # Text
        d.text((text_start_x, text_start_y), "ONG", font=font, fill=(15, 17, 21, 255))
        return img

def generate_svg():
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <style>
    :root { color-scheme: light dark; }
    .ong-dot { fill: #c23b22; }
    .ong-dot-spec { fill: #ff8a80; opacity: 0.85; }
    .ong-text { 
      font-family: -apple-system, BlinkMacSystemFont, "Arial Black", "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      font-weight: 900;
      font-size: 155px;
      letter-spacing: -1.5px;
      fill: #0f1115; 
    }
    @media (prefers-color-scheme: dark) {
      .ong-dot { fill: #ff453a; }
      .ong-dot-spec { fill: #ffb4ab; opacity: 0.95; }
      .ong-text { fill: #fcfcfd; }
    }
  </style>
  <!-- Vermillion Dot at baseline -->
  <circle class="ong-dot" cx="52" cy="285" r="26" />
  <circle class="ong-dot-spec" cx="45" cy="275" r="10" />
  
  <!-- Architectural ONG Typography -->
  <text class="ong-text" x="96" y="318">ONG</text>
</svg>
"""
    svg_path = os.path.join(PUBLIC_DIR, "favicon.svg")
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("Saved SVG:", svg_path)

def build_all():
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    os.makedirs(APP_DIR, exist_ok=True)
    
    # 1. Generate SVG Favicon
    generate_svg()
    
    # 2. Base images
    universal_512 = make_base_graphic(mode="universal", size=512)
    light_512 = make_base_graphic(mode="light", size=512)
    dark_512 = make_base_graphic(mode="dark", size=512)
    apple_180 = make_base_graphic(mode="apple", size=180)
    
    # 3. Save master icon.png (512x512)
    universal_512.save(os.path.join(PUBLIC_DIR, "icon.png"), "PNG")
    universal_512.save(os.path.join(APP_DIR, "icon.png"), "PNG")
    print("Saved icon.png (512x512)")
    
    # 4. Save light and dark mode PNGs
    light_512.save(os.path.join(PUBLIC_DIR, "icon-light.png"), "PNG")
    dark_512.save(os.path.join(PUBLIC_DIR, "icon-dark.png"), "PNG")
    print("Saved icon-light.png and icon-dark.png (512x512)")
    
    # 5. Save apple-touch-icon.png and apple-icon.png (180x180)
    apple_180.save(os.path.join(PUBLIC_DIR, "apple-touch-icon.png"), "PNG")
    apple_180.save(os.path.join(APP_DIR, "apple-icon.png"), "PNG")
    print("Saved apple-touch-icon.png and apple-icon.png (180x180)")
    
    # 6. Save favicon-32x32.png and favicon-16x16.png
    fav_32 = universal_512.resize((32, 32), Image.Resampling.LANCZOS)
    fav_16 = universal_512.resize((16, 16), Image.Resampling.LANCZOS)
    fav_32.save(os.path.join(PUBLIC_DIR, "favicon-32x32.png"), "PNG")
    fav_16.save(os.path.join(PUBLIC_DIR, "favicon-16x16.png"), "PNG")
    print("Saved favicon-32x32.png and favicon-16x16.png")
    
    # Dedicated light and dark 32x32
    light_32 = light_512.resize((32, 32), Image.Resampling.LANCZOS)
    dark_32 = dark_512.resize((32, 32), Image.Resampling.LANCZOS)
    light_32.save(os.path.join(PUBLIC_DIR, "icon-light-32x32.png"), "PNG")
    dark_32.save(os.path.join(PUBLIC_DIR, "icon-dark-32x32.png"), "PNG")
    print("Saved icon-light-32x32.png and icon-dark-32x32.png")
    
    # 7. Save favicon.ico (multi-res 16, 32, 48)
    fav_32.save(
        os.path.join(PUBLIC_DIR, "favicon.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)]
    )
    fav_32.save(
        os.path.join(APP_DIR, "favicon.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print("Saved favicon.ico (16, 32, 48 multi-res)")

if __name__ == "__main__":
    build_all()
