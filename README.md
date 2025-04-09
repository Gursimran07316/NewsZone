# 📰 NewsZone — Decoupled News Portal (Drupal Backend + React Frontend)

**NewsZone** is a fully decoupled modern news portal project built using **Drupal** as the backend and **React.js** as the frontend.

This repository contains both:
- 🖥️ **Frontend**: React.js application (in the `/frontend` folder)
- 🗂️ **Backend**: Drupal application (in the root directory)

> 🔗 **Repository:** [NewsZone](https://github.com/Gursimran07316/NewsZone)

---

## 🚀 Project Overview

- 🧩 **Decoupled Architecture:** React frontend + Drupal backend
- ⚛️ Frontend: React.js with Vite, Axios, Swiper.js, FontAwesome, Bootstrap
- 🧩 Backend: Drupal 10, JSON:API module enabled
- 📡 API-driven dynamic content delivery
- 🎯 Modular, scalable, and professional structure
- 💻 Responsive & clean UI

---

## 📂 Project Structure

```
/ (Root)
  /frontend              # React frontend application
  /web                   # Drupal backend application
  .pantheon.yml          # Pantheon configuration
  .pantheonignore        # Pantheon ignore file (ignores frontend folder)
  README.md              # Project README
  composer.json          # Drupal dependencies
  package.json           # Frontend dependencies (inside /frontend)
```

---

## 🧩 Backend — Drupal

### Set up the Drupal backend:

1. Clone this repository:
```bash
git clone https://github.com/Gursimran07316/NewsZone.git
cd NewsZone
```

2. Install dependencies:
```bash
composer install
```

3. Set up your environment:
- Make sure **JSON:API module** is enabled in Drupal.
- Configure your local settings (`settings.local.php`)

4. Import or set up content in Drupal admin.

5. Start your local development environment (Lando, DDEV, or MAMP).

6. Access your Drupal site locally:
```
http://newszone.lndo.site (example)
```

---

## ⚛️ Frontend — React

### Set up the React frontend:

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install frontend dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Visit the app:
```
http://localhost:5173
```

### API Integration

- The React frontend consumes the Drupal API endpoints.
- Example endpoint:
```
/api/news-menu-api/main
```
- Update Axios base URL if needed in `frontend/src/axios.js` (or wherever API config is stored).


## ⚙️ Deployment

### Frontend (React):
- Recommended: Deploy to **Netlify** or **Vercel**.


### Backend (Drupal):
- Recommended: Deploy to **Pantheon** or **Acquia**.


---

## 📝 Customization

- Update images in `/frontend/public/img/`
- Add new components in `/frontend/src/components/`
- Update API paths if your backend changes

---

## 🤝 Contributing

Pull requests and feedback are always welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/FeatureName`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/FeatureName`)
5. Open a pull request 🚀

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---



> ✨ **Note:**  
> This is part of a decoupled application architecture project where **Drupal serves as the backend API**, and **React** handles the frontend rendering.

