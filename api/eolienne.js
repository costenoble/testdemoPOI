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

  // Valeur basée sur le temps : monte de 1 MW par 5s entre 10 et 50, puis redescend
  const MIN = 10, MAX = 50;
  const RANGE = MAX - MIN;          // 40 paliers
  const CYCLE = RANGE * 2;          // 80 paliers pour un aller-retour complet
  const tick = Math.floor(Date.now() / 5000) % CYCLE;
  const position = tick <= RANGE ? tick : CYCLE - tick;
  const current_power = MIN + position;

  res.status(200).json({
    current_power,
    unit: 'MW',
    timestamp: new Date().toISOString(),
    status: 'ok'
  });
}
