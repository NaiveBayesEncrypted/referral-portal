# Referral QR Portal (Free Stack)

This is a ready referral-tracking portal.

## What it does
- Unique QR per referrer (e.g. `?ref=danny`)
- Shows deals page
- Captures lead info
- Sends form to your email
- Includes `referrer` in submission so you know source

## 1) Finalize email receiver
In `index.html`, replace:

`https://formsubmit.co/YOUREMAIL@example.com`

with your real email.

## 2) Deploy for free
Fast options:
- GitHub Pages
- Netlify Drop
- Cloudflare Pages

Use this folder as-is.

## 3) Use these referral links
- `https://YOUR-DOMAIN.com/?ref=danny`
- `https://YOUR-DOMAIN.com/?ref=alex`
- `https://YOUR-DOMAIN.com/?ref=sam`

## 4) QR files generated
In `qrcodes/`:
- `danny.png`
- `alex.png`
- `sam.png`

These currently point to placeholder domain:
`https://YOUR-DOMAIN.com/?ref=<name>`

Regenerate with your live domain using `generate-qrs.js`.
