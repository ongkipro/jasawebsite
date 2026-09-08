import os
from PIL import Image, ImageDraw, ImageFont

REPO_ROOT = "/Users/ongki/Projects/jasawebsite"
PUBLIC_DIR = os.path.join(REPO_ROOT, "public")
APP_DIR = os.path.join(REPO_ROOT, "src/app")

FONT_PATH = "/System/Library/Fonts/Supplemental/Arial Black.ttf"

def make_squircle_ong(size=512, theme="obsidian"):
    """
    Renders a maximum-fill, high-density squircle favicon with .ONG monogram.
    theme:
      - 'obsidian': Deep luxury obsidian squircle (#0e0f13), neon vermillion dot, pure white ONG
      - 'vermillion': Studio vermillion red squircle (#c23b22), white dot, white ONG
    """
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    
    # Radius ~22% of size (112px on 512px)
    radius = int(size * 0.22)
    margin = int(size * 0.012) # 6px on 512px
    
    if theme == "vermillion":
        bg_color = (205, 45, 30, 255)
        border_color = (245, 100, 85, 255)
        dot_color = (255, 255, 255, 255)
        dot_spec = None
        text_color = (255, 255, 255, 255)
    else: # obsidian (default)
        bg_color = (14, 15, 18, 255)
        border_color = (255, 255, 255, 45)
        dot_color = (255, 55, 40, 255)
        dot_spec = (255, 195, 185, 230)
        text_color = (255, 255, 255, 255)
        
    # Draw solid squircle body (fills canvas)
    border_w = max(1, int(size * 0.006))
    d.rounded_rectangle(
        [margin, margin, size - margin, size - margin],
        radius=radius,
        fill=bg_color,
        outline=border_color,
        width=border_w
    )
    
    # Font size ~36.5% of size (187px on 512px)
    font_size = int(size * 0.365)
    font = ImageFont.truetype(FONT_PATH, font_size)
    
    bbox = d.textbbox((0, 0), "ONG", font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    
    dot_r = int(size * 0.065) # 33px on 512px
    dot_diam = dot_r * 2
    gap = int(size * 0.038)   # 19px on 512px
    total_w = dot_diam + gap + tw
    
    start_x = (size - total_w) // 2
    dot_cx = start_x + dot_r
    text_x = start_x + dot_diam + gap - bbox[0]
    text_y = (size - th) // 2 - bbox[1]
    dot_cy = text_y + bbox[3] - dot_r - int(size * 0.004)
    
    # Draw Dot
    d.ellipse([dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r], fill=dot_color)
    if dot_spec:
        spec_r = int(dot_r * 0.45)
        d.ellipse(
            [dot_cx - int(dot_r*0.5), dot_cy - int(dot_r*0.7), dot_cx + spec_r - int(dot_r*0.5), dot_cy + spec_r - int(dot_r*0.7)],
            fill=dot_spec
        )
        
    # Draw Text
    d.text((text_x, text_y), "ONG", font=font, fill=text_color)
    
    return img

def generate_svg():
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <style>
    :root { color-scheme: light dark; }
    .squircle { fill: #0e0f12; stroke: rgba(255, 255, 255, 0.2); stroke-width: 3; }
    .ong-dot { fill: #ff453a; }
    .ong-dot-spec { fill: #ffb4ab; opacity: 0.9; }
    .ong-text { 
      font-family: -apple-system, BlinkMacSystemFont, "Arial Black", "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      font-weight: 900;
      font-size: 187px;
      letter-spacing: -2px;
      fill: #ffffff; 
    }
  </style>
  
  <!-- Solid Squircle Body (Maximum Fill & Density) -->
  <rect class="squircle" x="6" y="6" width="500" height="500" rx="112" ry="112" />
  
  <!-- Glowing Vermillion Dot -->
  <circle class="ong-dot" cx="72" cy="300" r="33" />
  <circle class="ong-dot-spec" cx="64" cy="288" r="12" />
  
  <!-- Architectural ONG Typography -->
  <text class="ong-text" x="122" y="338">ONG</text>
</svg>
"""
    svg_path = os.path.join(PUBLIC_DIR, "favicon.svg")
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("Saved SVG:", svg_path)

def build_all():
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    os.makedirs(APP_DIR, exist_ok=True)
    
    # 1. Generate SVG
    generate_svg()
    
    # 2. Master 512x512 Squircle
    master_512 = make_squircle_ong(size=512, theme="obsidian")
    
    # Save master icon.png
    master_512.save(os.path.join(PUBLIC_DIR, "icon.png"), "PNG")
    master_512.save(os.path.join(APP_DIR, "icon.png"), "PNG")
    print("Saved icon.png (512x512)")
    
    # Theme PNGs
    master_512.save(os.path.join(PUBLIC_DIR, "icon-dark.png"), "PNG")
    master_512.save(os.path.join(PUBLIC_DIR, "icon-light.png"), "PNG")
    print("Saved icon-dark.png and icon-light.png (512x512)")
    
    # Apple touch icon (180x180)
    apple_180 = make_squircle_ong(size=180, theme="obsidian")
    apple_180.save(os.path.join(PUBLIC_DIR, "apple-touch-icon.png"), "PNG")
    apple_180.save(os.path.join(APP_DIR, "apple-icon.png"), "PNG")
    print("Saved apple-touch-icon.png and apple-icon.png (180x180)")
    
    # 32x32 and 16x16
    fav_32 = master_512.resize((32, 32), Image.Resampling.LANCZOS)
    fav_16 = master_512.resize((16, 16), Image.Resampling.LANCZOS)
    fav_32.save(os.path.join(PUBLIC_DIR, "favicon-32x32.png"), "PNG")
    fav_16.save(os.path.join(PUBLIC_DIR, "favicon-16x16.png"), "PNG")
    fav_32.save(os.path.join(PUBLIC_DIR, "icon-dark-32x32.png"), "PNG")
    fav_32.save(os.path.join(PUBLIC_DIR, "icon-light-32x32.png"), "PNG")
    print("Saved favicon-32x32.png and favicon-16x16.png")
    
    # Multi-resolution ICO (16, 32, 48)
    fav_48 = master_512.resize((48, 48), Image.Resampling.LANCZOS)
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
