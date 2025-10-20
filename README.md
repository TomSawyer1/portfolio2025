# Portfolio 2025 — Spencer Andrade Thomas

Portfolio développeur moderne avec style **Borussia Dortmund (BVB)** — jaune & noir, dark mode par défaut, animations fluides, multilingue (FR/EN).

## 🎨 Features

✨ **Design moderne BVB** — Palette jaune (#FDE100) et noir, dark/light mode  
🌐 **Multilingue** — Français et Anglais avec i18next  
⚡ **Performance** — Vite + React 18 + TypeScript  
🎭 **Animations** — Framer Motion pour des transitions fluides  
📱 **Responsive** — Optimisé mobile, tablette et desktop  
♿ **Accessible** — Headless UI et bonnes pratiques a11y  
🔍 **SEO Ready** — React Helmet pour meta tags  
✅ **Tests** — Vitest + React Testing Library  

## 📁 Structure du projet

```
portfolio2025/
├── public/
│   ├── documents/           # CV PDF
│   └── images/             # Photos et images de projets
├── src/
│   ├── components/         # Composants réutilisables
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── LangSwitch.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Timeline.tsx
│   │   ├── ContactForm.tsx
│   │   └── __tests__/      # Tests unitaires
│   ├── pages/              # Pages du site
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── layout/
│   │   └── RootLayout.tsx
│   ├── data/               # Données JSON
│   │   ├── site.json       # Infos personnelles
│   │   ├── projects.json   # Liste des projets
│   │   └── experience.json # Expériences pro
│   ├── i18n/               # Traductions
│   │   ├── fr/common.json
│   │   └── en/common.json
│   ├── lib/                # Utilitaires
│   │   ├── i18n.ts
│   │   └── cn.ts           # Tailwind merge
│   ├── styles/
│   │   └── index.css       # Styles Tailwind + custom
│   └── main.tsx
├── package.json
├── tailwind.config.js      # Config Tailwind avec couleurs BVB
├── vite.config.ts
└── vitest.config.ts
```

## 🚀 Installation et démarrage

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur **http://localhost:5173**

### 3. Build pour la production

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

### 4. Prévisualiser la production

```bash
npm run preview
```

## 🛠️ Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run preview  # Prévisualiser le build
npm run lint     # Linter ESLint
npm run test     # Lancer les tests Vitest
```

## 🎨 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.js` :

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#FDE100',  // Jaune BVB
        400: '#FFE44D',
        600: '#FACC15',
      },
      // ...
    }
  }
}
```

### Modifier les données personnelles

Éditez `src/data/site.json` :

```json
{
  "name": "Votre Nom",
  "role": "Votre Rôle",
  "email": "votre@email.com",
  "github": "https://github.com/username",
  "linkedin": "https://www.linkedin.com/in/username/",
  "resumeUrl": "/documents/votre-cv.pdf",
  "profileImage": "/images/votre-photo.jpg"
}
```

### Ajouter un projet

Éditez `src/data/projects.json` :

```json
{
  "id": "mon-projet",
  "title": "Mon Super Projet",
  "summary": "Description courte",
  "stack": ["React", "Node.js"],
  "tags": ["frontend", "backend"],
  "github": "https://github.com/...",
  "demo": "https://demo.com"
}
```

### Ajouter une expérience

Éditez `src/data/experience.json` :

```json
{
  "id": "experience-id",
  "title": "Poste",
  "company": "Entreprise",
  "location": "Ville",
  "from": "2023-01",
  "to": "present",
  "highlights": [
    "Réalisation 1",
    "Réalisation 2"
  ]
}
```

### Modifier les traductions

Éditez les fichiers :
- `src/i18n/fr/common.json` pour le français
- `src/i18n/en/common.json` pour l'anglais

## 🔌 Intégration du formulaire de contact

Le formulaire est actuellement en mode **mock**. Pour l'activer avec un vrai service :

### Option 1 : EmailJS

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Installez : `npm install @emailjs/browser`
3. Dans `src/components/ContactForm.tsx`, décommentez et configurez :

```typescript
import emailjs from '@emailjs/browser'

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  data,
  'YOUR_PUBLIC_KEY'
)
```

### Option 2 : Formspree

1. Créez un compte sur [Formspree](https://formspree.io/)
2. Remplacez la soumission mock par :

```typescript
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
})
```

## 🧪 Tests

Lancer les tests :

```bash
npm run test
```

Les tests couvrent :
- `ThemeToggle` : Toggle dark/light mode
- `LangSwitch` : Changement de langue
- `Chip` : Composant chip avec états

## 📦 Technologies utilisées

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool ultra-rapide
- **TailwindCSS** — Utility-first CSS
- **Framer Motion** — Animations
- **React Router** — Navigation
- **i18next** — Internationalisation
- **React Hook Form** — Gestion des formulaires
- **Zod** — Validation de schémas
- **Headless UI** — Composants accessibles
- **Lucide React** — Icônes modernes
- **Vitest** — Tests unitaires

## 🎯 Checklist de déploiement

Avant de déployer en production :

- [ ] Remplacer les données mock dans `src/data/`
- [ ] Ajouter votre vraie photo dans `public/images/`
- [ ] Ajouter votre CV dans `public/documents/`
- [ ] Configurer le formulaire de contact (EmailJS/Formspree)
- [ ] Tester le build : `npm run build && npm run preview`
- [ ] Vérifier le responsive sur mobile
- [ ] Tester les deux langues (FR/EN)
- [ ] Tester dark/light mode
- [ ] Optimiser les images (compression)
- [ ] Configurer le SEO (meta tags dans `index.html`)

## 🚀 Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Déployer le dossier dist/
```

### GitHub Pages

Ajoutez dans `vite.config.ts` :

```typescript
export default defineConfig({
  base: '/nom-du-repo/',
  // ...
})
```

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 👤 Auteur

**Spencer Andrade Thomas** — Full-Stack Developer

- GitHub: [@TomSawyer1](https://github.com/TomSawyer1)
- LinkedIn: [Spencer Andrade Thomas](https://www.linkedin.com/in/tavspencer/)
- Email: thomas.andradeve@gmail.com

---

**Fait avec ❤️ et du code propre** 🚀

