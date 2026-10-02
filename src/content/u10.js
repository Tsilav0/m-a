MA.unit({
  id: 'u10', title: 'Calcul mental & cas', icon: '🧮',
  desc: 'Calcul de tête, paper LBO, mini-cas de valorisation',
  lessons: [
    {
      id: 'u10l1', title: 'Les réflexes de calcul',
      cards: [
        ['Pourcentages', `• 15 % de X = 10 % + la moitié de 10 %.<br>• Une hausse de 25 % puis une baisse de 20 % → retour au point de départ (1,25 × 0,8 = 1).<br>• Une baisse de 50 % nécessite une hausse de 100 % pour revenir.`],
        ['Intérêts composés', `<b>Règle de 72</b> : nombre d'années pour doubler ≈ 72 / taux (%).<br>• 1,1² = 1,21 ; 1,1³ ≈ 1,33 ; 1,1⁵ ≈ 1,61<br>• 1,2² = 1,44 ; 1,2³ ≈ 1,73 ; 1,2⁵ ≈ 2,49<br>• 1,15⁵ ≈ 2,01 → 15 % pendant 5 ans ≈ ×2`],
        ['CAGR', `<b>Taux de croissance annuel moyen = (Valeur finale / Valeur initiale)^(1/n) − 1</b>.<br>Ex. : de 100 à 150 en 3 ans → 1,5^(1/3) ≈ 1,145 → <b>≈ 14,5 %</b>.`],
        ['Astuce en entretien', `Annonce ta méthode avant le calcul, arrondis intelligemment et donne un <b>ordre de grandeur</b> d'abord, puis affine. Le recruteur évalue le raisonnement autant que le résultat.`]
      ],
      qs: [
        num('15 % de 240 ?', 36, 0, '', '10 % = 24, 5 % = 12 → 36.'),
        num('Selon la règle de 72, en combien d’années double-t-on un capital placé à 8 % ?', 9, 0.5, 'ans', '72 / 8 = 9 ans.'),
        num('Un actif baisse de 50 %. Hausse nécessaire pour revenir à la valeur initiale (%) ?', 100, 0, '%', '× 0,5 puis × 2 : il faut +100 %.'),
        num('CA de 100 à 150 en 3 ans. CAGR (%, arrondi) ?', 14.5, 0.5, '%', '1,5^(1/3) ≈ 1,145 → ≈ 14,5 %.'),
        num('1,1 puissance 5 (2 décimales) ?', 1.61, 0.01, '', '1,1⁵ ≈ 1,6105.'),
        num('Un EBITDA de 80 croît de 10 % par an pendant 2 ans. EBITDA final ?', 96.8, 0.01, '', '80 × 1,21 = 96,8.'),
        num('7 × 1,8 (multiple × EBITDA en M€) ?', 12.6, 0.01, '', '7 × 1,8 = 12,6.'),
        num('Prix +25 % puis −20 %. Variation totale (%) ?', 0, 0, '%', '1,25 × 0,80 = 1,00 → 0 %.'),
        num('Une société vaut 8,5x un EBITDA de 120 M€. EV (M€) ?', 1020, 0, 'M€', '8 × 120 = 960 + 0,5 × 120 = 60 → 1 020.'),
      ]
    },
    {
      id: 'u10l2', title: 'Le paper LBO',
      cards: [
        ['Qu’est-ce que c’est ?', `Un LBO simplifié à faire <b>de tête ou sur papier</b> en 5 à 10 minutes, fréquent en entretien (surtout pour les fonds et les équipes de LevFin). Hypothèses simples, pas d'Excel.`],
        ['La méthode en 6 étapes', `1. <b>EV d'entrée</b> = EBITDA × multiple.<br>2. <b>Sources</b> : dette (x EBITDA) et fonds propres (le reste, + frais).<br>3. <b>Projeter l'EBITDA</b> et le <b>FCF</b> : EBITDA − capex − ΔBFR − intérêts − impôt.<br>4. <b>Cumuler le FCF</b> → dette remboursée.<br>5. <b>EV de sortie</b> = EBITDA final × multiple ; − dette restante = fonds propres de sortie.<br>6. <b>MOIC</b> et <b>TRI</b> avec les repères.`],
        ['Exemple de tête', `EBITDA 100, achat à 8x = 800 ; dette 5x = 500 ; fonds propres 300.<br>FCF de 50/an, entièrement affecté à la dette pendant 5 ans → dette 250.<br>EBITDA à 5 ans : 130, sortie à 8x = 1 040.<br>Fonds propres = 1 040 − 250 = 790 → MOIC ≈ <b>2,6x</b> → TRI ≈ <b>21 %</b>.`]
      ],
      qs: [
        num('EBITDA 100, achat à 8x, dette 5x EBITDA. Fonds propres investis (sans frais) ?', 300, 0, '', '800 − 500 = 300.'),
        num('Même cas : FCF de 50 par an pendant 5 ans, intégralement utilisé pour rembourser la dette. Dette restante à 5 ans ?', 250, 0, '', '500 − 5 × 50 = 250.'),
        num('EBITDA à 5 ans : 130, sortie à 8x, dette restante 250, fonds propres investis 300. MOIC (2 décimales) ?', 2.63, 0.02, 'x', '1 040 − 250 = 790 ; 790 / 300 ≈ 2,63x.'),
        num('MOIC 2,63x sur 5 ans : TRI approximatif (%) ?', 21, 1.5, '%', '2,63^(1/5) ≈ 1,213 → ≈ 21 %.'),
        num('EBITDA 50, capex 10, hausse du BFR 5, intérêts 15, IS 25 % sur (EBITDA − D&A − intérêts) avec D&A = 10. FCF ?', 13.75, 0.01, '', 'Résultat avant impôt = 50 − 10 − 15 = 25 → impôt 6,25. FCF = 50 − 10 − 5 − 15 − 6,25 = 13,75.'),
        open('Paper LBO : EBITDA 50 M€, achat à 10x, dette 6x, l’EBITDA croît de 10 %/an, sortie à 5 ans au même multiple, 100 M€ de dette remboursés au total. TRI ?', `EV d'entrée = 500, dette = 300, fonds propres = 200. EBITDA à 5 ans ≈ 50 × 1,61 = 80,5. EV de sortie ≈ 805. Dette restante = 300 − 100 = 200. Fonds propres de sortie ≈ 605. MOIC ≈ 3,0x sur 5 ans, donc TRI ≈ 25 %. Décomposition : croissance de l'EBITDA ≈ +305 d'EV, désendettement +100, multiple constant.`, ['EV et fonds propres d’entrée (500 / 200)', 'EBITDA de sortie (×1,61)', 'EV de sortie et dette restante', 'MOIC ≈ 3,0x', 'TRI ≈ 25 %']),
      ]
    },
    {
      id: 'u10l3', title: 'Mini-cas de valorisation',
      cards: [
        ['Les questions de raisonnement', `Le recruteur te donne une situation et attend un raisonnement structuré, pas forcément un chiffre exact. Méthode : <b>reformuler</b>, <b>poser les hypothèses</b>, <b>structurer</b> (décomposer), <b>calculer</b>, <b>conclure</b> et vérifier l'ordre de grandeur.`],
        ['Les grands classiques', `• « Combien vaut cette société ? » → méthodes, agrégats, multiples.<br>• « Un client veut racheter un concurrent, qu'en penses-tu ? » → stratégie, synergies, prix, financement, risques.<br>• « Deux sociétés identiques sauf la dette : laquelle a l'EV la plus élevée ? » → identiques (en théorie), seule l'equity diffère.`]
      ],
      qs: [
        mcq('Deux sociétés identiques sur le plan opérationnel, l’une sans dette, l’autre très endettée. En théorie, leurs EV sont :', ['Identiques', 'Plus élevée pour celle sans dette', 'Plus élevée pour celle endettée', 'Impossible à dire'], 0, 'L’EV ne dépend pas de la structure financière (en première approximation, hors effets fiscaux et risque de faillite). Seule l’equity value diffère.'),
        mcq('Une société très endettée pourrait avoir un P/E :', ['Toujours plus faible', 'Très différent d’une société identique non endettée, car le RN dépend des intérêts', 'Identique', 'Nul'], 1, 'Le résultat net est après intérêts : le levier modifie fortement le P/E, pas l’EV/EBITDA.'),
        num('Une société génère 20 M€ de FCF, croissance perpétuelle 2 %, WACC 7 %. EV (Gordon, en considérant 20 comme le flux de l’année prochaine) ?', 400, 0, 'M€', '20 / (7 % − 2 %) = 400 M€.'),
        num('Société A : EV 1 000, EBITDA 100, dette nette 400. Equity value ?', 600, 0, '', '1 000 − 400 = 600.'),
        open('Un client industriel veut racheter un concurrent. Comment l’accompagnes-tu ?', `1) Logique stratégique : pourquoi ce concurrent (parts de marché, géographie, produits, technologie), alternatives. 2) Valorisation standalone : comps, transactions, DCF. 3) Synergies : de coûts et de revenus, coûts de mise en œuvre, calendrier, puis valeur maximale payable. 4) Structure et financement : cash, dette, titres ; impact sur le levier, le rating et le BPA (accretion / dilution). 5) Exécution : approche de la cible (amicale ou non), due diligence, risques concurrentiels (autorisation antitrust), calendrier. 6) Intégration et risques : culture, rétention des talents. Conclure par une recommandation de fourchette de prix et de tactique de négociation.`, ['Logique stratégique', 'Valorisation standalone', 'Synergies et prix maximum', 'Financement et accretion / dilution', 'Antitrust et exécution', 'Intégration / risques et recommandation']),
        open('Combien vaut une société qui fait 100 M€ de chiffre d’affaires ?', `Je ne peux pas répondre sans plus d'informations : je demanderais le secteur, la croissance, la marge d'EBITDA, l'intensité capitalistique, la récurrence des revenus et la dette nette. Ensuite : comparables (EV/EBITDA ou EV/CA si pas encore rentable), transactions précédentes, éventuellement DCF. Exemple : si c'est une société industrielle avec 15 % de marge, soit 15 M€ d'EBITDA, à 8x on aurait environ 120 M€ d'EV ; un éditeur de logiciel récurrent en croissance pourrait se valoriser plusieurs fois son chiffre d'affaires. Puis on retire la dette nette pour avoir l'equity value.`, ['Demander les informations manquantes', 'Secteur, croissance, marges, récurrence', 'Choix des méthodes / multiples', 'Ordre de grandeur chiffré', 'Passage EV → equity']),
      ]
    }
  ]
});

MA.unit({
  id: 'u11', title: 'Technical interview in English', icon: '🇬🇧',
  desc: 'Vocabulaire et questions techniques en anglais',
  lessons: [
    {
      id: 'u11l1', title: 'Key vocabulary',
      cards: [
        ['Accounting', `Chiffre d'affaires = <b>revenue</b> (ou sales) · Résultat net = <b>net income</b> · Capitaux propres = <b>shareholders' equity</b> · BFR = <b>net working capital</b> · Créances clients = <b>accounts receivable</b> · Dettes fournisseurs = <b>accounts payable</b> · Stocks = <b>inventory</b> · Réserves = <b>retained earnings</b> · Immobilisations corporelles = <b>PP&E</b>.`],
        ['Valuation & deals', `Valeur d'entreprise = <b>enterprise value</b> · Dette nette = <b>net debt</b> · Intérêts minoritaires = <b>non-controlling interests</b> · Prime de contrôle = <b>control premium</b> · Relutif / dilutif = <b>accretive / dilutive</b> · BPA = <b>EPS</b> · TRI = <b>IRR</b> · Contrat de cession = <b>SPA</b> · Conditions suspensives = <b>conditions precedent (CPs)</b> · Garantie d'actif et de passif ≈ <b>indemnity / warranties</b>.`],
        ['Phrases utiles', `• « Let me walk you through it step by step. »<br>• « Assuming a 25% tax rate… »<br>• « It depends on… but generally… »<br>• « Could you clarify whether… ? »<br>• « The key driver here is… »`]
      ],
      qs: [
        mcq('« Créances clients » en anglais :', ['Accounts payable', 'Accounts receivable', 'Accrued expenses', 'Deferred revenue'], 1, 'Accounts receivable = ce que les clients doivent. Accounts payable = ce que l’on doit aux fournisseurs.'),
        mcq('« Intérêts minoritaires » en anglais :', ['Minority shareholders loan', 'Non-controlling interests', 'Preferred equity', 'Treasury shares'], 1, 'Non-controlling interests (NCI), anciennement minority interest.'),
        mcq('« Conditions suspensives » en anglais :', ['Covenants', 'Conditions precedent', 'Earn-out', 'Break fee'], 1, 'Conditions precedent (CPs) : conditions à lever avant le closing.'),
        mcq('« Relutif » en anglais :', ['Dilutive', 'Accretive', 'Accrued', 'Additive'], 1, 'Accretive = augmente le BPA (EPS) pro forma.'),
        mcq('« Réserves » (bénéfices non distribués) en anglais :', ['Retained earnings', 'Reserves for losses', 'Paid-in capital', 'Goodwill'], 0, 'Retained earnings = résultats cumulés non distribués.'),
        mcq('« BFR » en anglais :', ['Free cash flow', 'Net working capital', 'Capex', 'Gross margin'], 1, 'Net working capital (NWC).'),
      ]
    },
    {
      id: 'u11l2', title: 'Classic questions in English',
      cards: [
        ['Comment répondre en anglais', `Mêmes structures qu'en français, phrases courtes, et annonce ton plan : « There are three main methods… First… Second… Finally… ». Ne traduis pas mot à mot : prépare les réponses directement en anglais.`]
      ],
      qs: [
        open('Walk me through the three financial statements.', `The income statement shows revenue, expenses and net income over a period. The balance sheet shows assets, liabilities and shareholders' equity at a point in time, with assets equal to liabilities plus equity. The cash flow statement starts with net income, adjusts for non-cash items like D&A and changes in working capital to get cash flow from operations, then adds cash flow from investing (capex, acquisitions) and financing (debt, equity, dividends) to get the net change in cash. Net income flows into retained earnings, and ending cash flows to the balance sheet.`, ['Income statement: performance over a period', 'Balance sheet: assets = liabilities + equity', 'Cash flow: operations, investing, financing', 'Links: net income → retained earnings, ending cash → balance sheet']),
        open('What is the difference between enterprise value and equity value?', `Equity value is the value of the company attributable to shareholders only; for a listed company it is diluted shares outstanding times the share price. Enterprise value is the value of the core operating business attributable to all capital providers, independent of capital structure. To get from equity value to enterprise value, you add debt, preferred stock and non-controlling interests, and subtract cash and non-operating assets such as equity investments.`, ['Equity value: shareholders only', 'Enterprise value: all capital providers / core operations', 'Bridge: + debt, preferred, NCI', '− cash and non-operating assets']),
        open('Walk me through a DCF.', `First, project unlevered free cash flows for five to ten years: EBIT times one minus the tax rate, plus D&A, minus capex, minus the change in net working capital. Then calculate a terminal value, using either the perpetuity growth method or an exit multiple. Discount the cash flows and the terminal value back at the WACC to get enterprise value. Finally, subtract net debt to get equity value and divide by diluted shares to get the implied share price, and run sensitivities on WACC and the growth rate.`, ['Project unlevered FCF (formula)', 'Terminal value (two methods)', 'Discount at WACC → EV', 'Net debt → equity value / share price', 'Sensitivities']),
        open('How would you value a company?', `There are three main methodologies. Comparable companies: look at trading multiples like EV/EBITDA of similar listed companies. Precedent transactions: look at multiples paid in past acquisitions of similar companies, which include a control premium. And a DCF, which values the company based on its future cash flows. You can also use an LBO analysis to see what a financial sponsor could pay. I would summarize the ranges in a football field and triangulate a valuation range.`, ['Trading comps', 'Precedent transactions (control premium)', 'DCF', 'LBO analysis', 'Football field']),
        open('Why do you want to work in M&A?', `Structure in three points with a personal example each: the strategic content and the technical rigor of valuation and deal structuring; the steep learning curve and exposure to senior decision makers early on; and the concrete, team-based nature of deals with a clear outcome. Show that you understand the demands of the job and chose it knowingly.`, ['Strategic and technical content', 'Learning curve', 'Concrete outcomes / teamwork', 'Personal examples', 'Awareness of the lifestyle']),
      ]
    }
  ]
});
