MA.unit({
  id: 'u4', title: 'Enterprise Value & Equity Value', icon: '🏗️',
  desc: 'Le bridge, les actions diluées, la cohérence des multiples',
  lessons: [
    {
      id: 'u4l1', title: 'EV vs Equity Value',
      cards: [
        ['L’analogie de la maison', `Tu achètes une maison à <b>500</b> avec un prêt de <b>300</b> que tu reprends. Tu ne paies que <b>200</b> au vendeur.<br>• Valeur de la maison = <b>Enterprise Value</b> (500)<br>• Ce qui revient au vendeur = <b>Equity Value</b> (200)<br>• L'écart = la dette nette reprise (300).`],
        ['Définitions', `<b>Equity Value</b> (valeur des capitaux propres) : valeur revenant aux <b>actionnaires</b>. Pour une société cotée : nombre d'actions diluées × cours.<br><br><b>Enterprise Value</b> (valeur d'entreprise) : valeur de l'<b>outil opérationnel</b>, revenant à <b>tous les apporteurs de capitaux</b> (actionnaires, prêteurs, minoritaires…). Elle est indépendante de la structure financière.`],
        ['La formule de base', `<b>EV = Equity Value + Dette financière − Trésorerie</b><br>soit <b>EV = Equity Value + Dette nette</b>.<br><br>Pourquoi retrancher le cash ? Parce que l'acheteur le récupère : c'est un actif non opérationnel qui réduit le coût réel de l'acquisition.`],
        ['Une EV peut-elle être négative ?', `Oui : si la trésorerie dépasse largement l'equity value + la dette. C'est rare et signale souvent un marché qui anticipe que la société va brûler son cash (ou une société très décotée). L'equity value d'une société cotée, elle, ne peut pas être négative.`]
      ],
      qs: [
        num('Capitalisation boursière 800, dette 300, trésorerie 100. Enterprise Value ?', 1000, 0, '', 'EV = 800 + 300 − 100 = 1 000.'),
        num('EV 1 200, dette 400, trésorerie 50. Equity Value ?', 850, 0, '', 'Equity = EV − dette nette = 1 200 − 350 = 850.'),
        mcq('L’Enterprise Value revient à :', ['Uniquement aux actionnaires', 'Tous les apporteurs de capitaux', 'Uniquement aux prêteurs', 'L’État'], 1, 'L’EV est la valeur de l’outil opérationnel, partagée entre tous les apporteurs de capitaux.'),
        tf('Une Enterprise Value peut être négative.', true, 'Si la trésorerie excède la capitalisation + la dette. Rare, mais possible.'),
        mcq('Pourquoi retranche-t-on la trésorerie pour passer de l’equity value à l’EV ?', ['Parce qu’elle est taxée', 'Parce que c’est un actif non opérationnel que l’acheteur récupère', 'Par convention comptable', 'Parce qu’elle appartient aux prêteurs'], 1, 'L’acheteur récupère le cash : le coût net de l’outil opérationnel est donc réduit d’autant.'),
        open('Quelle est la différence entre Enterprise Value et Equity Value ?', `L'Equity Value est la valeur revenant aux seuls actionnaires (pour une société cotée : actions diluées × cours). L'Enterprise Value est la valeur de l'outil opérationnel, revenant à tous les apporteurs de capitaux, indépendamment de la structure de financement. On passe de l'une à l'autre par le bridge : EV = Equity Value + dette nette (+ intérêts minoritaires, actions de préférence, provisions de type dette − participations non consolidées). Analogie : la valeur de la maison (EV) vs ce que tu touches en la vendant après remboursement du prêt (equity).`, ['Equity = actionnaires', 'EV = tous les apporteurs / outil opérationnel', 'Indépendance de la structure de capital', 'Bridge : + dette nette', 'Autres éléments du bridge ou analogie']),
      ]
    },
    {
      id: 'u4l2', title: 'Le bridge complet',
      cards: [
        ['On ajoute', `<ul><li><b>Dette financière</b> (bancaire, obligataire, crédit-bail, dettes locatives IFRS 16 si EBITDA post-IFRS 16).</li><li><b>Intérêts minoritaires</b> (NCI) : car on consolide 100 % de l'EBITDA d'une filiale détenue à 80 %.</li><li><b>Actions de préférence</b>.</li><li><b>Provisions assimilées à de la dette</b> : engagements de retraite non financés, provisions pour restructuration, parfois earn-outs à payer.</li></ul>`],
        ['On retranche', `<ul><li><b>Trésorerie</b> et équivalents.</li><li><b>Participations dans des entreprises associées</b> (mises en équivalence) : leur EBITDA n'est pas dans l'EBITDA consolidé, il faut donc les retirer pour être cohérent.</li><li>Actifs non opérationnels (titres non consolidés, immobilier hors exploitation…).</li></ul>`],
        ['Le principe de cohérence', `La règle à retenir : <b>ce qui est dans le dénominateur (EBITDA) doit être dans le numérateur (EV)</b>.<br>• 100 % de l'EBITDA de la filiale à 80 % est consolidé → on ajoute les minoritaires.<br>• L'EBITDA de la société mise en équivalence n'est pas consolidé → on retire sa valeur.`],
        ['Cash « piégé »', `Toute la trésorerie n'est pas librement disponible : <b>cash minimum</b> d'exploitation, cash bloqué dans des pays à contrôle des changes, saisonnalité du BFR. En deal, on négocie la définition de la dette nette ligne par ligne avec les équipes TS.`]
      ],
      qs: [
        num('Equity value 500, dette 200, trésorerie 50, intérêts minoritaires 30, participations mises en équivalence 20. EV ?', 660, 0, '', 'EV = 500 + 200 − 50 + 30 − 20 = 660.'),
        mcq('Pourquoi ajoute-t-on les intérêts minoritaires à l’EV ?', ['Parce qu’ils sont une dette', 'Parce que 100 % de l’EBITDA de la filiale est consolidé', 'Pour des raisons fiscales', 'C’est facultatif'], 1, 'Cohérence numérateur/dénominateur : l’EBITDA inclut 100 % de la filiale, donc l’EV doit inclure la part des minoritaires.'),
        mcq('Pourquoi retranche-t-on les participations dans les entreprises associées ?', ['Elles sont illiquides', 'Leur EBITDA n’est pas inclus dans l’EBITDA consolidé', 'Elles sont taxées', 'Par prudence'], 1, 'Mises en équivalence, leur EBITDA n’apparaît pas dans l’EBITDA consolidé : leur valeur doit sortir de l’EV.'),
        mcq('Un engagement de retraite non financé est généralement traité comme :', ['Un élément de BFR', 'Un élément assimilé à de la dette', 'Un actif', 'Il est ignoré'], 1, 'C’est une obligation future de payer, assimilée à de la dette (souvent nette d’impôt).'),
        num('Equity value 1 000, dette 400, cash 150, actions de préférence 50, dettes de retraite 60, minoritaires 0. EV ?', 1360, 0, '', '1 000 + 400 − 150 + 50 + 60 = 1 360.'),
        tf('Toute la trésorerie au bilan est toujours retranchée en totalité dans le bridge.', false, 'En deal, on exclut souvent le cash minimum d’exploitation, le cash piégé ou bloqué et l’effet de saisonnalité du BFR.'),
        open('Quels éléments trouve-t-on dans le passage de l’EV à l’equity value, et pourquoi ?', `EV − dette financière (y compris dettes locatives si EBITDA post-IFRS 16) + trésorerie − intérêts minoritaires − actions de préférence − provisions assimilées à de la dette (retraites non financées, restructurations, litiges) + participations dans des entreprises associées et actifs non opérationnels = Equity Value. Logique : cohérence avec l'agrégat utilisé (EBITDA consolidé à 100 %, sans l'EBITDA des sociétés mises en équivalence) et prise en compte de tous les ayants droit avant les actionnaires ordinaires.`, ['Dette financière et trésorerie', 'Intérêts minoritaires', 'Actions de préférence', 'Provisions assimilées à de la dette', 'Participations / actifs non opérationnels', 'Principe de cohérence']),
      ]
    },
    {
      id: 'u4l3', title: 'Les actions diluées',
      cards: [
        ['Pourquoi diluer ?', `L'equity value se calcule sur le nombre d'actions <b>diluées</b> : les instruments « dans la monnaie » (options, BSA, actions gratuites, obligations convertibles) créeront de nouvelles actions.`],
        ['La méthode du rachat d’actions (TSM)', `<b>Treasury Stock Method</b> : on suppose que les options dans la monnaie sont exercées, et que le produit de l'exercice sert à racheter des actions au cours actuel.<br><b>Nouvelles actions nettes = N options × (1 − prix d'exercice / cours)</b><br>Les options hors de la monnaie (strike > cours) sont ignorées.`],
        ['Exemple', `100 M d'actions, cours 20 €, 10 M d'options à 10 €.<br>Produit de l'exercice : 100 M€ → rachat de 5 M d'actions.<br>Dilution nette : 10 − 5 = <b>5 M</b>. Actions diluées : <b>105 M</b>.<br>Equity value : 105 × 20 = <b>2 100 M€</b>.`],
        ['Convertibles', `Une obligation convertible <b>dans la monnaie</b> (cours > prix de conversion) est traitée comme des actions (on ajoute les actions créées et on retire la dette de la dette nette).<br>Hors de la monnaie, elle reste une <b>dette</b>. Jamais les deux à la fois.`]
      ],
      qs: [
        num('100 M d’actions, cours 20 €, 10 M d’options au prix d’exercice de 10 €. Nombre d’actions diluées (en M) ?', 105, 0.01, 'M', 'Produit = 100 M€ → rachat de 5 M actions. Dilution nette 5 M → 105 M.'),
        num('50 M d’actions, cours 40 €, 5 M d’options à 30 € et 2 M d’options à 50 €. Actions diluées (en M) ?', 51.25, 0.01, 'M', 'Seules les options à 30 € sont dans la monnaie : 5 × (1 − 30/40) = 1,25 M. Les options à 50 € sont ignorées. Total : 51,25 M.'),
        num('Même exemple (50 M actions, cours 40 €, 5 M options à 30 €). Equity value diluée (M€) ?', 2050, 0.5, 'M€', '51,25 × 40 = 2 050 M€.'),
        tf('Les options hors de la monnaie sont intégrées dans le calcul des actions diluées.', false, 'Elles ne seraient pas exercées : on les ignore.'),
        mcq('Une obligation convertible dans la monnaie est traitée :', ['Comme dette uniquement', 'Comme actions (et retirée de la dette)', 'Comme dette et comme actions', 'Elle est ignorée'], 1, 'On suppose la conversion : les actions sont créées et la dette disparaît. Jamais de double comptage.'),
        open('Explique la treasury stock method.', `La TSM permet de calculer la dilution liée aux options et BSA. On ne retient que les instruments dans la monnaie (prix d'exercice inférieur au cours). On suppose qu'ils sont exercés : la société émet de nouvelles actions et encaisse le produit de l'exercice, qu'elle utilise pour racheter des actions au cours actuel. La dilution nette = nombre d'options − (produit de l'exercice / cours). Ex. : 10 M d'options à 10 € avec un cours à 20 € → 10 − 5 = 5 M d'actions nouvelles nettes.`, ['Seulement les instruments dans la monnaie', 'Exercice supposé', 'Produit utilisé pour racheter au cours actuel', 'Formule de dilution nette', 'Exemple chiffré']),
      ]
    },
    {
      id: 'u4l4', title: 'Multiples et cohérence',
      cards: [
        ['Les principaux multiples', `<b>Basés sur l'EV</b> (agrégats avant intérêts, pour tous les apporteurs de capitaux) :<ul><li>EV / Chiffre d'affaires</li><li>EV / EBITDA (le plus utilisé)</li><li>EV / EBIT</li></ul><b>Basés sur l'equity</b> (agrégats après intérêts) :<ul><li>P/E = Prix / BPA = Capitalisation / Résultat net</li><li>P/B (Price to book), très utilisé pour les banques</li></ul>`],
        ['La règle d’or', `<b>Numérateur et dénominateur doivent concerner les mêmes apporteurs de capitaux.</b><br>• EV / EBITDA ✅ (les deux avant intérêts)<br>• Equity / Résultat net ✅<br>• EV / Résultat net ❌ (EV pour tous, résultat après paiement des prêteurs)<br>• Equity / EBITDA ❌`],
        ['Ce qui change l’EV (ou pas)', `<ul><li>Lever de la dette et garder le cash : equity inchangée, dette +, cash + → <b>EV inchangée</b>.</li><li>Verser un dividende : cash −, equity − (en théorie) → <b>EV inchangée</b>.</li><li>Émettre des actions pour du cash : equity +, cash + → <b>EV inchangée</b>.</li><li>Utiliser du cash pour acheter une société : on échange du cash contre un actif opérationnel → <b>EV augmente</b>.</li></ul>`],
        ['Multiples sectoriels', `Certains secteurs ont leurs propres métriques : EV/EBITDAR (compagnies aériennes, distribution, loyers inclus), P/B et P/E pour les banques et assurances (la dette est leur matière première), EV/ARR ou EV/Revenue pour le SaaS en croissance, EV/réserves pour le pétrole, prix par m² ou ANR pour la foncière.`]
      ],
      qs: [
        mcq('Quel multiple est incohérent ?', ['EV / EBITDA', 'Prix / BPA', 'EV / Résultat net', 'EV / Chiffre d’affaires'], 2, 'L’EV concerne tous les apporteurs alors que le résultat net est après rémunération des prêteurs.'),
        mcq('Une société lève 100 de dette et garde le cash au bilan. Son EV :', ['Augmente de 100', 'Baisse de 100', 'Ne change pas', 'Dépend du taux'], 2, 'Dette +100 et cash +100 : la dette nette est inchangée, l’equity aussi → EV inchangée.'),
        mcq('Une société verse un dividende de 50. Son EV (en théorie) :', ['Augmente', 'Baisse', 'Ne change pas', 'Baisse de 100'], 2, 'Le cash baisse de 50 et l’equity value baisse de 50 : l’EV ne bouge pas.'),
        mcq('Pourquoi valorise-t-on une banque avec P/B ou P/E plutôt qu’EV/EBITDA ?', ['Les banques n’ont pas d’EBITDA', 'La dette est leur matière première, pas un financement', 'Pour des raisons réglementaires', 'L’EV des banques est négative'], 1, 'Pour une banque, dépôts et dettes sont l’activité elle-même : on ne peut pas séparer opérationnel et financement. On raisonne donc en equity.'),
        num('Capitalisation 600, dette nette 200, EBITDA 100. Multiple EV / EBITDA (x) ?', 8, 0.01, 'x', 'EV = 800 ; 800 / 100 = 8,0x.'),
        num('Cours 30 €, BPA 2 €. P/E (x) ?', 15, 0.01, 'x', '30 / 2 = 15x.'),
        mcq('Pourquoi EV/EBITDA est-il préféré au P/E pour comparer des sociétés ?', ['Il est plus simple', 'Il neutralise les différences de structure de capital, de fiscalité et d’amortissements', 'Il est toujours plus élevé', 'Il inclut les capex'], 1, 'Le P/E dépend du levier financier, du taux d’impôt et des choix comptables ; l’EV/EBITDA neutralise ces effets.'),
        mcq('Le multiple EV/EBITDAR est utile pour :', ['Les banques', 'Les compagnies aériennes et la distribution', 'Les sociétés minières', 'Les startups SaaS'], 1, 'Le R (Rent) neutralise les choix entre location et propriété des actifs (avions, magasins).'),
        open('Pourquoi ne peut-on pas utiliser EV / Résultat net ?', `Le résultat net est l'agrégat revenant aux actionnaires, après rémunération des prêteurs (intérêts). L'EV représente la valeur pour tous les apporteurs de capitaux. Le numérateur et le dénominateur ne concerneraient pas les mêmes ayants droit. Il faut associer EV et agrégats avant intérêts (CA, EBITDA, EBIT, FCF unlevered) et equity value et agrégats après intérêts (résultat net, FCF levered, capitaux propres comptables).`, ['Résultat net = actionnaires (après intérêts)', 'EV = tous les apporteurs', 'Incohérence numérateur / dénominateur', 'Bonnes paires : EV/EBITDA, P/E']),
      ]
    }
  ]
});
