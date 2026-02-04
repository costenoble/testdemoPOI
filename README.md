# testdemoPOI

API de simulation pour tester le système PULL de données en temps réel sur Quelia.

## Déploiement Vercel

Le fichier `api/eolienne.js` est une fonction serverless Vercel.
Après déploiement, l'endpoint sera disponible à :

```
https://<votre-domaine>.vercel.app/api/eolienne
```

### Exemple de réponse

```json
{
  "current_power": 32.47,
  "unit": "MW",
  "timestamp": "2026-02-04T10:00:00.000Z",
  "status": "ok"
}
```

## Usage local

```bash
node test-api-server.cjs
```

Le serveur local tourne sur `http://localhost:3001`.

## Configuration dans Quelia Admin

- **URL API JSON** : `https://<votre-domaine>.vercel.app/api/eolienne`
- **Chemin JSON** : `current_power`
