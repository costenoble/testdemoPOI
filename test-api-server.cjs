// Serveur de test local pour simuler une API de données en temps réel
// Lancer avec : node test-api-server.cjs

const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {
  // CORS headers pour autoriser les requêtes depuis le frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Gérer les requêtes OPTIONS (preflight CORS)
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Oscille entre 13 et 25 MW : monte de 2 par 5s, descend de 3 par 5s
  const CYCLE = [13, 15, 17, 19, 21, 23, 25, 22, 19, 16];
  const tick = Math.floor(Date.now() / 5000) % CYCLE.length;
  const current_power = CYCLE[tick];

  const response = {
    current_power,
    unit: 'MW',
    timestamp: new Date().toISOString(),
    status: 'ok'
  };

  console.log(`[${new Date().toLocaleTimeString()}] Requête reçue → Réponse: ${current_power} MW`);

  res.writeHead(200);
  res.end(JSON.stringify(response));
});

server.listen(PORT, () => {
  console.log(`\n🚀 Serveur de test démarré sur http://localhost:${PORT}`);
  console.log(`\n📋 Configuration pour l'admin :`);
  console.log(`   URL API JSON : http://localhost:${PORT}`);
  console.log(`   Chemin JSON  : current_power`);
  console.log(`\n💡 Les valeurs changent à chaque requête (10-50 MW aléatoire)\n`);
  console.log(`Appuyez sur Ctrl+C pour arrêter le serveur\n`);
});
