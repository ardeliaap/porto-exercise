# 03 - Executions

## RTCC-O Task
- [] R — Role dispesifikasi?
- [] T — Task konkret?
- [] C — Context cukup?
- [] C — Constraints jelas?
- [] O — Output format ditentukan?

## Step 1 – Role & Task

```markdown
## R — Role
Anda adalah senior front-end developer dengan keahlian HTML semantik, Tailwind CSS, dan desain web modern.

## T — Task
Buat desain dan kode portfolio satu halaman dengan key decisions yang ada di file porto-exercise/plan/01-brainstorms.md

## C — Context
- Tech: Tailwind CSS v4, vanilla JS.
- Layout: Mobile-first, one-page scrolling.
- Persona: IT Support, lulusan S1 Sistem Informasi, pengalaman kerja 4 tahun, terbiasa dengan query DB MySQL, automation testing melalui katalon, membuat script python untuk scheduler airflow.

## C — Constraints
- ZERO non-semantic `div`.
- WAJIB memakai semantic tag (section, header, footer, nav, article, etc.).
- Style menggunakan Tailwind utility class, tidak boleh inline style CSS.
- Mobile-first: desain harus bagus mulai dari layar 375px ke atas.
- Font: sesuaikan dengan key decisions dalam file porto-exercise/plan/01-brainstorms.md.

## O — Output
- Satu file HTML lengkap (`index.html`).
- CSS style ditulis di file terpisah, jangan tergabung dengan `index.html`, jangan menggunakan `<style>` / `<link>` inline (tidak perlu build process).
- Kode harus bisa langsung dijalankan di browser tanpa tools tambahan.
