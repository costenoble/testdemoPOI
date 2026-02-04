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

  // Oscille entre 13 et 25 MW : monte de 2 par 5s, descend de 3 par 5s
  const CYCLE = [13, 15, 17, 19, 21, 23, 25, 22, 19, 16];
  const tick = Math.floor(Date.now() / 5000) % CYCLE.length;
  const current_power = CYCLE[tick];

  res.status(200).json({
    current_power,
    unit: 'MW',
    timestamp: new Date().toISOString(),
    status: 'ok'
  });
}
