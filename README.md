# Golden Fiber – Website

Open `index.html` in any browser, or upload the whole folder (index.html + assets/) to GitHub Pages.
Keep `index.html` and the `assets` folder together – images and videos are loaded from `assets/`.

## Install as an app (new)
The site is now a PWA. Over https (GitHub Pages is https) Chrome and Edge show an "Install app"
button in the header; Android also offers "Add to home screen"; on iPhone/iPad the button opens a
short sheet explaining Share -> Add to Home Screen. It opens full screen with the Golden Fiber mark
as its icon, rotates freely, and the pages still open when the signal drops.
Upload these alongside index.html, in the SAME folder: manifest.webmanifest, sw.js, icon-192.png,
icon-512.png, icon-maskable-512.png, apple-touch-icon.png.

## Language (new)
The site starts in ENGLISH, in the browser and inside the installed app. The EN/ع button switches
to Arabic and the choice is remembered. index.html?lang=ar opens straight in Arabic.

## Performance
- index.html ≈ 100 KB; first screen loads ≈ 0.1–0.3 MB.
- Images load lazily as you scroll; the map loads only when you reach the contact section.
- Journey videos load only when the journey is on screen, one stage at a time; phones get lighter 540p clips; on data-saver / 2G connections still frames are shown instead of video.

## Structure (3 tabs)
- **Home** – hero · cinematic "From Stem to Fabric" journey (6 stages play automatically) · banana-waste numbers · shop (20 products, details window, WhatsApp order list; fertilizer 250 / 140 / 80 EGP) · why banana fibre · future plan · team · FAQ · contact
- **Story & Support** – story, vision, mission · supporting project · shared goals
- **B2B** – materials & specs, 12 industries, supply steps, quotation form

Responsive: tested at 360, 390, 768, 820, 1024, 1280 and 1440 px.
Journey video clips and photos are licensed Adobe Stock assets (free tier).
