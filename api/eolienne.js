// Fonction serverless Vercel — simule une station éolienne demo
// Accessible via : https://testdemo-poi.vercel.app/api/eolienne

module.exports = function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Valeur aléatoire entre 10 et 50 MW
  const current_power = parseFloat((Math.random() * 40 + 10).toFixed(2));

  res.status(200).json({
    current_power,
    unit: 'MW',
    timestamp: new Date().toISOString(),
    status: 'ok'
  });
}
