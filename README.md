# CV – Théo Strobbe (Next.js)

CV en ligne éco-conçu, réalisé avec Next.js (App Router) en **export statique**.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Générer le site statique

```bash
npm run build    # produit le dossier ./out
```

## Déployer sur GitHub Pages

1. Crée un dépôt GitHub (par ex. `cv`) et pousse ce dossier sur la branche `main`.
2. Dans **Settings → Pages**, choisis **Source : GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` construit et publie le site à chaque push.
   Le site sera disponible sur `https://<ton-pseudo>.github.io/<nom-du-depot>/`.

Le `basePath` est calculé automatiquement depuis le nom du dépôt (laissé vide si le dépôt s'appelle `<pseudo>.github.io`).

## Modifier le contenu

Tout le contenu du CV est dans `app/data.js`. Le style est dans `app/globals.css`.
# CvEco
# CvEco
