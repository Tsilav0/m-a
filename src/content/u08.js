MA.unit({
  id: 'u8', title: 'Accretion / dilution & structuration', icon: '⚖️',
  desc: 'Cash vs titres, BPA pro forma, goodwill et PPA',
  lessons: [
    {
      id: 'u8l1', title: 'Payer en cash, en dette ou en titres',
      cards: [
        ['Les 3 modes de paiement', `<ul><li><b>Cash disponible</b> : le moins cher (on perd seulement les intérêts du placement) mais limité par la trésorerie.</li><li><b>Dette</b> : coût = intérêts après impôt ; augmente le levier et le risque.</li><li><b>Actions nouvelles</b> : pas de cash décaissé, mais <b>dilution</b> des actionnaires existants ; les vendeurs partagent le risque et l'upside futur.</li></ul>`],
        ['Quand payer en titres ?', `• Quand l'acheteur juge son action <b>surévaluée</b> (signal négatif pour le marché).<br>• Quand le deal est trop gros pour être financé en cash ou en dette.<br>• Pour faire <b>partager le risque</b> d'intégration aux vendeurs.<br>• Pour une fusion entre égaux.<br>Le vendeur, lui, préfère souvent le <b>cash</b> : certain et immédiat.`],
        ['Parité d’échange', `En paiement en titres : <b>parité = prix offert par action cible / cours de l'acheteur</b>.<br>Ex. : offre à 15 € par action de la cible, acheteur à 30 € → <b>0,5</b> action de l'acheteur par action de la cible.<br><b>Parité fixe</b> : le nombre d'actions est fixe, le vendeur porte le risque de cours. <b>Valeur fixe</b> : c'est l'acheteur qui le porte.`]
      ],
      qs: [
        num('Offre à 15 € par action de la cible, l’action de l’acheteur vaut 30 €. Parité d’échange ?', 0.5, 0.001, '', '15 / 30 = 0,5 action de l’acheteur par action de la cible.'),
        mcq('Quel mode de paiement est généralement le moins coûteux pour l’acheteur ?', ['Actions nouvelles', 'Dette', 'Cash disponible', 'Ils coûtent tous pareil'], 2, 'Le coût du cash est le rendement perdu sur le placement, après impôt, généralement le plus faible.'),
        mcq('Un acheteur paie en titres. Quel signal le marché peut-il y lire ?', ['L’acheteur juge son action sous-évaluée', 'L’acheteur juge son action surévaluée', 'Aucun signal', 'L’acheteur a trop de cash'], 1, 'On n’utilise pas une monnaie qu’on juge bon marché : payer en titres peut signaler une action surévaluée.'),
        tf('Avec une parité fixe, le vendeur supporte le risque de baisse du cours de l’acheteur entre l’annonce et le closing.', true, 'Le nombre d’actions reçues est fixe : leur valeur fluctue avec le cours de l’acheteur.'),
        num('L’acheteur a 100 M d’actions et émet 30 M d’actions pour payer la cible. Part des actionnaires historiques de l’acheteur après l’opération (%, 1 décimale) ?', 76.9, 0.1, '%', '100 / 130 = 76,9 %.'),
        open('Cash ou titres : quels critères pour choisir le mode de paiement ?', `Côté acheteur : trésorerie et capacité d'endettement disponibles (rating, levier), coût relatif (cash < dette < actions en général), effet sur le BPA (accretion/dilution), perception de la valorisation de son propre titre, volonté de partager le risque d'intégration, contrôle (dilution de l'actionnaire de référence). Côté vendeur : le cash est certain et immédiat ; les titres permettent de profiter de l'upside et peuvent offrir un différé d'imposition, mais exposent au risque de cours. Souvent : offre mixte.`, ['Capacité financière (cash, dette, rating)', 'Coût relatif des modes de paiement', 'Impact BPA', 'Valorisation perçue de son titre / signal', 'Partage du risque et contrôle', 'Point de vue du vendeur']),
      ]
    },
    {
      id: 'u8l2', title: 'L’analyse accretion / dilution',
      cards: [
        ['La question posée', `Le <b>BPA pro forma</b> (bénéfice par action) de l'acheteur après le deal est-il plus élevé (<b>relutif / accretive</b>) ou plus faible (<b>dilutif</b>) que son BPA standalone ?`],
        ['La méthode', `<b>Résultat net pro forma</b> = RN acheteur + RN cible<br>− intérêts après impôt sur la nouvelle dette<br>− intérêts perdus après impôt sur le cash utilisé<br>+ synergies après impôt<br>− amortissements additionnels liés à la PPA (après impôt)<br><b>Nombre d'actions pro forma</b> = actions acheteur + actions nouvelles émises.<br>BPA pro forma = RN pro forma / actions pro forma.`],
        ['Exemple en titres', `Acheteur : RN 100, 100 actions à 10 € (BPA 1,00, P/E 10x).<br>Cible : RN 20, prix d'achat 300, payée en actions → 30 actions nouvelles.<br>BPA pro forma = 120 / 130 = <b>0,92</b> → <b>dilutif de 7,7 %</b>.`],
        ['Le même deal en cash', `Le cash rapportait 4 % avant impôt → coût après impôt 300 × 4 % × 75 % = <b>9</b>.<br>RN pro forma = 100 + 20 − 9 = 111 ; 100 actions → BPA <b>1,11</b> → <b>relutif de 11 %</b>.`],
        ['Relutif ≠ création de valeur', `Un deal peut être relutif et détruire de la valeur (prix trop élevé payé en cash bon marché) ou dilutif et en créer (cible en forte croissance). Le BPA est un indicateur court terme. Le vrai test : la <b>rentabilité du capital investi</b> (ROIC) vs le coût du capital.`]
      ],
      qs: [
        num('Acheteur : RN 100, 100 actions. Cible : RN 20, achetée 300 en actions émises à 10 €. BPA pro forma (2 décimales) ?', 0.92, 0.01, '€', '30 actions émises ; 120 / 130 = 0,92 €.'),
        num('Même cas mais payé en cash, rendement perdu 4 % avant impôt, IS 25 %. BPA pro forma (2 décimales) ?', 1.11, 0.01, '€', 'Coût : 300 × 4 % × 75 % = 9. RN = 111 ; 111 / 100 = 1,11 €.'),
        num('Même cas mais financé par dette à 6 % avant impôt, IS 25 %. BPA pro forma (3 décimales) ?', 1.065, 0.002, '€', 'Coût : 300 × 6 % × 75 % = 13,5. RN = 106,5 ; 106,5 / 100 = 1,065 €.'),
        num('Cas en titres (RN pro forma 120, 130 actions). Synergies AVANT impôt nécessaires pour atteindre le point mort (BPA = 1,00), IS 25 % (1 décimale) ?', 13.3, 0.1, '', 'Il faut un RN de 130 → +10 après impôt → 10 / 0,75 = 13,3 avant impôt.'),
        tf('Un deal relutif crée forcément de la valeur pour les actionnaires.', false, 'Le BPA ne mesure pas la création de valeur : un deal relutif peut être payé trop cher (ROIC < coût du capital).'),
        mcq('Quel élément RÉDUIT le résultat net pro forma ?', ['Les synergies', 'Les amortissements d’actifs réévalués (PPA)', 'Le RN de la cible', 'Le rachat d’actions'], 1, 'La réévaluation d’actifs incorporels amortissables génère des amortissements additionnels.'),
        open('Walk me through une analyse accretion / dilution.', `1) Partir des BPA standalone de l'acheteur et de la cible (résultats nets et nombre d'actions). 2) Définir le prix et le financement : cash, dette, actions. 3) Calculer le résultat net pro forma : RN acheteur + RN cible − intérêts perdus sur le cash (après impôt) − intérêts sur la nouvelle dette (après impôt) + synergies après impôt − amortissements additionnels de PPA après impôt. 4) Calculer le nombre d'actions pro forma (actions existantes + actions émises = valeur payée en titres / cours de l'acheteur). 5) BPA pro forma vs BPA standalone → relutif ou dilutif, en % ; souvent sur N+1 et N+2. 6) Calculer les synergies de point mort.`, ['BPA standalone', 'Prix et mix de financement', 'RN pro forma (coûts de financement après impôt, synergies, PPA)', 'Actions pro forma', 'Relution / dilution en %', 'Synergies de point mort']),
      ]
    },
    {
      id: 'u8l3', title: 'Les règles rapides',
      cards: [
        ['La règle du P/E (paiement 100 % titres)', `Si le <b>P/E de l'acheteur > P/E payé pour la cible</b> → <b>relutif</b>.<br>Si le P/E de l'acheteur < P/E payé → <b>dilutif</b>.<br>Intuition : l'acheteur « paie » avec une monnaie chère (son action) pour acheter des bénéfices moins chers.`],
        ['Le coût des titres', `Le « coût » d'une action émise = le <b>rendement des bénéfices</b> de l'acheteur = <b>1 / P/E</b>.<br>P/E de 10x → coût des titres = 10 %. P/E de 20x → 5 %.`],
        ['La règle générale du coût d’acquisition', `Comparer :<br>• le <b>rendement de la cible</b> = RN cible / prix payé = 1 / P/E payé<br>• au <b>coût moyen pondéré</b> du financement : cash (taux × (1 − t)), dette (taux × (1 − t)), titres (1 / P/E acheteur).<br>Rendement de la cible > coût pondéré → <b>relutif</b>.`],
        ['Exemple', `Cible achetée à 15x (rendement 6,7 %).<br>Financement 50 % dette à 6 % (4,5 % après impôt) + 50 % titres à 10x (10 %) → coût pondéré = 7,25 %.<br>6,7 % < 7,25 % → <b>dilutif</b>.`]
      ],
      qs: [
        mcq('Acheteur à 20x P/E, cible achetée à 15x, paiement 100 % titres. Le deal est :', ['Relutif', 'Dilutif', 'Neutre', 'Impossible à dire'], 0, 'L’acheteur paie avec une monnaie plus chère (20x) pour des bénéfices moins chers (15x) : relutif.'),
        mcq('Acheteur à 12x P/E, cible achetée à 18x, paiement 100 % titres. Le deal est :', ['Relutif', 'Dilutif', 'Neutre', 'Impossible à dire'], 1, 'Le P/E payé dépasse celui de l’acheteur : dilutif.'),
        num('P/E de l’acheteur : 20x. Coût implicite du financement en titres (%) ?', 5, 0.01, '%', '1 / 20 = 5 %.'),
        num('Cible achetée à un P/E de 12,5x. Rendement des bénéfices de la cible (%) ?', 8, 0.01, '%', '1 / 12,5 = 8 %.'),
        mcq('Cible achetée à 10x (rendement 10 %). Financement 100 % dette à 8 % avant impôt, IS 25 %. Le deal est :', ['Relutif', 'Dilutif', 'Neutre', 'Impossible à dire'], 0, 'Coût après impôt 6 % < rendement 10 % : relutif.'),
        num('Financement 50 % dette à 6 % avant impôt (IS 25 %) et 50 % titres avec un P/E acheteur de 10x. Coût pondéré du financement (%, 2 décimales) ?', 7.25, 0.01, '%', '0,5 × 4,5 % + 0,5 × 10 % = 7,25 %.'),
        tf('À P/E identiques entre acheteur et cible, sans synergies, un deal 100 % titres est neutre sur le BPA.', true, 'Le coût des titres égale exactement le rendement des bénéfices acquis.'),
        open('Un acheteur avec un P/E de 15x rachète une cible à un P/E de 20x en titres. Relutif ou dilutif ? Et en dette ?', `En titres : dilutif, car l'acheteur émet des actions dont le coût implicite est 1/15 = 6,7 % pour acquérir des bénéfices qui rapportent 1/20 = 5 % du prix payé. En dette : cela dépend du coût de la dette après impôt. Si la dette coûte 5 % avant impôt avec 25 % d'IS, soit 3,75 % après impôt, inférieur à 5 %, le deal est relutif. Il faut aussi intégrer les synergies et les amortissements de PPA.`, ['Coût des titres = 1 / P/E acheteur', 'Rendement de la cible = 1 / P/E payé', 'Titres : dilutif', 'Dette : comparer au coût après impôt', 'Synergies / PPA']),
      ]
    },
    {
      id: 'u8l4', title: 'Goodwill et PPA',
      cards: [
        ['Purchase Price Allocation', `Lors d'une acquisition, l'acheteur réévalue à la <b>juste valeur</b> les actifs et passifs identifiables de la cible : marques, relations clients, brevets, stocks, immobilier… C'est la <b>PPA</b>.`],
        ['Le calcul du goodwill', `<b>Goodwill = Prix payé (equity) − Juste valeur des actifs nets identifiables</b><br>avec : juste valeur des actifs nets = actifs nets comptables + réévaluations − <b>impôt différé passif</b> sur les réévaluations.`],
        ['Exemple', `Prix payé 500. Actifs nets comptables 300. Réévaluation d'une marque : +50. IS 25 % → IDP 12,5.<br>Juste valeur des actifs nets = 300 + 50 − 12,5 = 337,5.<br>Goodwill = 500 − 337,5 = <b>162,5</b>.`],
        ['Ce que représente le goodwill', `Les éléments non identifiables séparément : synergies attendues, savoir-faire, équipes, position de marché, et… la prime éventuellement surpayée. Non amorti en IFRS, il est testé chaque année. Une dépréciation de goodwill signale souvent une acquisition <b>surpayée</b>.`],
        ['Badwill', `Si le prix est inférieur à la juste valeur des actifs nets → <b>badwill</b> (« bargain purchase ») : après vérification, le gain est reconnu immédiatement en résultat. Typique des rachats de sociétés en difficulté.`]
      ],
      qs: [
        num('Prix payé 500. Actifs nets comptables 300. Réévaluation de marque +50, IS 25 %. Goodwill ?', 162.5, 0.01, '', '500 − (300 + 50 − 12,5) = 162,5.'),
        num('Prix payé 800. Actifs nets comptables 500. Aucune réévaluation. Goodwill ?', 300, 0, '', '800 − 500 = 300.'),
        num('Prix payé 1 000. Actifs nets comptables 600. Réévaluation de 100 des immobilisations, IS 25 %. Goodwill ?', 325, 0, '', 'Juste valeur = 600 + 100 − 25 = 675 ; goodwill = 325.'),
        mcq('En IFRS, le goodwill :', ['Est amorti sur 20 ans', 'N’est pas amorti mais testé au moins une fois par an', 'Est passé en charge immédiatement', 'Est inscrit en capitaux propres'], 1, 'IAS 36 : test de dépréciation annuel (impairment test).'),
        mcq('Une dépréciation massive du goodwill signale souvent :', ['Une acquisition surpayée ou des synergies non réalisées', 'Une hausse du cours', 'Une meilleure trésorerie', 'Une erreur de l’auditeur'], 0, 'La valeur recouvrable de l’activité ne justifie plus le prix payé.'),
        tf('Les réévaluations d’actifs incorporels amortissables lors de la PPA réduisent le résultat net futur.', true, 'Elles créent des amortissements additionnels, ce qui pèse sur le BPA (et donc sur l’accretion / dilution).'),
        mcq('Un badwill (bargain purchase) est :', ['Amorti sur 5 ans', 'Comptabilisé en gain immédiatement en résultat', 'Ajouté au goodwill', 'Ignoré'], 1, 'Après vérification des justes valeurs, le profit est reconnu immédiatement au compte de résultat.'),
        open('Comment calcule-t-on le goodwill lors d’une acquisition ?', `Goodwill = prix payé pour les titres − juste valeur des actifs nets identifiables de la cible. On part des capitaux propres comptables, on retire le goodwill préexistant de la cible, on ajoute les réévaluations à la juste valeur (marques, relations clients, brevets, immobilier, stocks) et on retire l'impôt différé passif créé sur ces réévaluations. Le résiduel est le goodwill : synergies, savoir-faire, équipes, prime. En IFRS il n'est pas amorti mais testé chaque année ; s'il est négatif, c'est un badwill comptabilisé en résultat.`, ['Prix − juste valeur des actifs nets', 'Retirer le goodwill existant', 'Réévaluations (PPA)', 'Impôt différé passif', 'Pas d’amortissement / impairment test', 'Badwill']),
      ]
    }
  ]
});
