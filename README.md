# Incollable M&A

Appli Android d'entraînement aux entretiens M&A, façon Duolingo / code de la route. 100 % hors ligne : ta progression reste sur ton téléphone.

**Contenu** : 11 unités, 41 leçons, 297 questions (QCM, vrai/faux, calculs, remises en ordre, questions d'entretien orales), 6 simulations d'entretien, examen blanc de 40 questions, lexique FR/EN et formules clés.

**Le feu vert** : l'appli te déclare prêt quand ces 5 critères sont réunis en même temps :
1. Toutes les leçons terminées
2. Maîtrise globale ≥ 80 %, aucune unité sous 70 % (révision espacée : 1, 3, 7, 14 puis 30 jours)
3. 3 examens blancs réussis d'affilée (≥ 35/40)
4. 4 simulations d'entretien ≥ 80 %, dont le Superday
5. 10 jours d'entraînement, avec une activité dans les 3 derniers jours

---

## Obtenir l'APK sans rien installer (GitHub, ~5 min)

1. Crée un dépôt **privé** sur github.com (bouton « New repository »).
2. Envoie tout le contenu de ce dossier dans le dépôt (bouton « uploading an existing file » puis glisser-déposer, ou `git push`). Le dossier caché `.github` doit bien être inclus : s'il n'apparaît pas dans le dépôt, fais « Add file → Create new file », nomme-le `.github/workflows/build-apk.yml` et colle le contenu du fichier du même nom.
3. Onglet **Actions** : le build « Construire l'APK Android » démarre tout seul (sinon : « Run workflow »).
4. Quand il est vert, ouvre-le et télécharge l'artefact **incollable-ma-apk** (un zip qui contient `incollable-ma.apk`).

## Installer sur ton téléphone

1. Transfère `incollable-ma.apk` sur ton téléphone (Drive, mail à toi-même, câble USB).
2. Ouvre-le. Android te demande d'autoriser l'installation depuis cette source : accepte.
3. Lance **Incollable M&A**. Dans Progrès → Réglages, active le rappel quotidien.

## Compiler soi-même (Android Studio)

```bash
npm install
npm run sync          # assemble l'appli et met à jour le projet Android
npx cap open android  # ouvre Android Studio → Run ▶ sur ton téléphone
```

Ou en ligne de commande : `npm run apk` → `android/app/build/outputs/apk/debug/app-debug.apk`.

## Modifier le contenu

Les cours et questions sont dans `src/content/` (un fichier par unité). Types de questions : `mcq`, `tf`, `num`, `ord`, `open` (voir `_base.js`). Après une modification : `npm run sync`, puis recompile.

## Sauvegarde

Réglages → « Copier ma sauvegarde » génère un code à coller sur un autre appareil (ou dans la version web) via « Importer ».

## Structure

```
src/content/      cours, questions, simulations, lexique
src/app.js        moteur : parcours, révision espacée, examen, simulations, feu vert
src/app.css       interface
build/build.js    assemble tout en un seul fichier www/index.html (polices incluses)
android/          projet Android (Capacitor)
```
