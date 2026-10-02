MA.unit({
  id: 'u7', title: 'Le LBO', icon: '🏦',
  desc: 'Structure, sources & uses, TRI, création de valeur',
  lessons: [
    {
      id: 'u7l1', title: 'La logique du LBO',
      cards: [
        ['Le montage', `Un fonds crée une <b>holding</b> (NewCo / HoldCo) qui emprunte et reçoit l'apport en fonds propres du fonds (et souvent du management). La holding rachète la cible. La dette est remboursée grâce aux <b>dividendes</b> et cash-flows remontés de la cible.<br>À la sortie (4 à 7 ans), le fonds revend : son gain = valeur des fonds propres à la sortie vs mise initiale.`],
        ['Les 4 effets de levier', `<ul><li><b>Financier</b> : la dette, moins chère que les fonds propres, augmente le rendement des capitaux propres, tant que la rentabilité économique dépasse le coût de la dette après impôt.</li><li><b>Fiscal</b> : les intérêts de la holding sont déductibles des résultats de la cible grâce à l'<b>intégration fiscale</b> (détention ≥ 95 % en France), dans la limite du plafonnement de la déductibilité des charges financières.</li><li><b>Juridique</b> : contrôler une société avec moins de capital.</li><li><b>Managérial</b> : le management investit (management package) et est fortement intéressé à la performance.</li></ul>`],
        ['Pourquoi la dette augmente le rendement', `Achat 100. <b>Sans dette</b> : 100 de fonds propres, revente 150 → 1,5x.<br><b>Avec 60 de dette</b> : 40 de fonds propres. Revente 150, remboursement 60 → 90 pour l'actionnaire → <b>2,25x</b>.<br>Mais si la valeur baisse, le levier joue à la baisse aussi.`],
        ['Le plafonnement en France', `Depuis 2019, les charges financières nettes sont déductibles dans la limite du plus élevé de <b>3 M€</b> ou <b>30 % de l'EBITDA fiscal</b>. Cela limite l'effet de levier fiscal sur les gros LBO.`]
      ],
      qs: [
        num('Achat 100 financé par 60 de dette et 40 de fonds propres. Revente 150, dette remboursée en totalité à la sortie (60). Multiple sur fonds propres (x) ?', 2.25, 0.01, 'x', '(150 − 60) / 40 = 2,25x, contre 1,5x sans dette.'),
        mcq('Quel seuil de détention permet l’intégration fiscale en France ?', ['50 %', '66,7 %', '95 %', '100 %'], 2, 'L’intégration fiscale requiert une détention d’au moins 95 % : elle permet de compenser les intérêts de la holding avec les bénéfices de la cible.'),
        mcq('L’effet de levier financier est positif si :', ['La rentabilité économique est supérieure au coût de la dette après impôt', 'La dette est supérieure aux fonds propres', 'Le taux d’IS est nul', 'Le fonds est coté'], 0, 'Sinon, chaque euro emprunté rapporte moins qu’il ne coûte : le levier détruit de la valeur.'),
        tf('Dans un LBO, la dette est remboursée par les cash-flows de la cible.', true, 'La cible remonte des dividendes à la holding qui rembourse la dette d’acquisition.'),
        mcq('Le levier « managérial » désigne :', ['Le recrutement de nouveaux managers', 'L’investissement du management au capital, qui aligne ses intérêts', 'La réduction des salaires', 'Le contrôle du conseil'], 1, 'Le management package rend les dirigeants actionnaires : ils sont fortement intéressés à la création de valeur.'),
        open('Explique le fonctionnement d’un LBO.', `Un fonds de private equity rachète une société via une holding qui finance l'acquisition par une part importante de dette (souvent 50 à 60 % de l'EV) et le reste en fonds propres apportés par le fonds et le management. La cible remonte ses cash-flows à la holding sous forme de dividendes pour rembourser la dette. Au bout de 4 à 7 ans, le fonds revend (à un industriel, à un autre fonds ou en bourse). Le rendement provient de la croissance de l'EBITDA, du désendettement et éventuellement de l'expansion du multiple. Quatre effets de levier : financier, fiscal (intégration fiscale), juridique, managérial.`, ['Holding + dette + fonds propres', 'Remboursement par les cash-flows de la cible', 'Sortie à 4 à 7 ans', 'Leviers de création de valeur', 'Les 4 effets de levier']),
      ]
    },
    {
      id: 'u7l2', title: 'Sources & uses et dette',
      cards: [
        ['Le tableau sources & uses', `<b>Emplois (uses)</b> : prix des titres (equity), refinancement de la dette existante, frais de transaction et de financement, éventuellement cash pour le bilan.<br><b>Ressources (sources)</b> : dettes (senior, unitranche, mezzanine…), fonds propres du sponsor, réinvestissement du management ou du vendeur.<br><b>Sources = Emplois</b>. Les fonds propres sont la variable d'ajustement.`],
        ['La dette senior', `<ul><li><b>Tranche A</b> : amortissable, la moins chère.</li><li><b>Tranche B</b> : remboursée in fine (bullet), plus chère.</li><li><b>RCF</b> : ligne de crédit renouvelable pour le BFR.</li><li><b>Unitranche</b> : une seule tranche fournie par un fonds de dette privée, in fine, plus chère mais flexible et rapide.</li></ul>`],
        ['La dette subordonnée', `<b>Mezzanine</b> et <b>high yield</b> : remboursées après la senior, donc plus chères. Le <b>PIK</b> (payment in kind) : les intérêts sont capitalisés et payés à l'échéance, ce qui préserve le cash.<br>Ordre de remboursement : senior → subordonnée → fonds propres.`],
        ['Les covenants', `Engagements que la société doit respecter : <b>levier</b> (dette nette / EBITDA ≤ x), <b>couverture des intérêts</b> (EBITDA / intérêts ≥ y), capex maximum. Les financements récents sont souvent <b>cov-lite</b> (peu ou pas de covenants de maintien). Levier total typique : souvent <b>4 à 6x EBITDA</b>, selon le secteur et le marché.`]
      ],
      qs: [
        num('Prix des titres : 400. Refinancement de la dette existante : 100. Frais : 15. EBITDA : 50. Dette levée : 5,0x EBITDA. Fonds propres nécessaires ?', 265, 0, '', 'Emplois = 515. Dette = 250. Fonds propres = 515 − 250 = 265.'),
        mcq('Quelle tranche de dette senior est amortissable ?', ['Tranche A', 'Tranche B', 'Mezzanine', 'PIK'], 0, 'La tranche A est remboursée progressivement ; la B est in fine.'),
        mcq('Avantage d’une dette PIK pour la société :', ['Elle est la moins chère', 'Les intérêts ne sont pas payés en cash pendant la vie du prêt', 'Elle est remboursée en premier', 'Elle n’a pas d’échéance'], 1, 'Les intérêts sont capitalisés : la trésorerie est préservée, mais la dette grossit.'),
        ord('Classe par ordre de remboursement en cas de liquidation :', ['Dette senior', 'Dette mezzanine', 'Dette PIK / holdco', 'Fonds propres']),
        mcq('Un financement « cov-lite » est :', ['Sans intérêts', 'Avec peu ou pas de covenants de maintien', 'Garanti par l’État', 'Réservé aux PME'], 1, 'Les covenants ne sont testés qu’en cas d’opération (incurrence) et pas chaque trimestre.'),
        num('EBITDA 80, dette nette 400. Levier (x) ?', 5, 0.01, 'x', '400 / 80 = 5,0x.'),
        mcq('L’unitranche est généralement fournie par :', ['Les banques de détail', 'Des fonds de dette privée', 'La BCE', 'Les actionnaires'], 1, 'Les fonds de dette privée proposent une tranche unique in fine, simple et rapide à mettre en place.'),
        open('Quels types de dette trouve-t-on dans un LBO ?', `Dette senior : tranche A amortissable (moins chère), tranche B in fine, plus une RCF pour le BFR et parfois une ligne capex. Alternative : l'unitranche des fonds de dette privée (une seule tranche in fine, plus chère, plus flexible). Dette subordonnée : mezzanine, high yield, souvent avec une composante PIK ; plus chère car remboursée après la senior. Les prêteurs imposent des covenants (levier, couverture des intérêts), sauf en cov-lite. Le levier total est souvent de l'ordre de 4 à 6x l'EBITDA.`, ['Senior A / B / RCF', 'Unitranche', 'Mezzanine / high yield / PIK', 'Subordination et coût', 'Covenants et ordre de grandeur du levier']),
      ]
    },
    {
      id: 'u7l3', title: 'TRI et multiple',
      cards: [
        ['MOIC et TRI', `<b>MOIC</b> (multiple on invested capital) = valeur reçue / montant investi.<br><b>TRI</b> (IRR) : taux annuel qui annule la VAN des flux. Pour un flux unique : <b>TRI = MOIC^(1/n) − 1</b>.<br>Le MOIC ignore le temps ; le TRI le pénalise.`],
        ['Les repères à connaître par cœur', `<ul><li>2x en 3 ans ≈ <b>26 %</b></li><li>2x en 4 ans ≈ <b>19 %</b></li><li>2x en 5 ans ≈ <b>15 %</b></li><li>2,5x en 5 ans ≈ <b>20 %</b></li><li>3x en 5 ans ≈ <b>25 %</b></li><li>3x en 3 ans ≈ <b>44 %</b></li></ul>`],
        ['Un LBO type, de tête', `Achat à 10x un EBITDA de 100 = EV 1 000. Dette 600, fonds propres 400.<br>Sortie à 5 ans : EBITDA 150 à 10x → EV 1 500. Dette restante 300 → fonds propres <b>1 200</b>.<br>MOIC = 1 200 / 400 = <b>3,0x</b> → TRI ≈ <b>25 %</b>.`],
        ['Prix maximum pour un sponsor', `On part du TRI cible. Ex. : 20 % sur 5 ans → MOIC requis = 1,2⁵ ≈ <b>2,5x</b>. Si les fonds propres à la sortie valent 1 000, le fonds peut investir au plus 1 000 / 2,5 ≈ <b>400</b> aujourd'hui, plus la dette qu'il peut lever = prix maximum.`]
      ],
      qs: [
        num('TRI approximatif d’un 2x en 5 ans (%) ?', 15, 1, '%', '2^(1/5) − 1 ≈ 14,9 %.'),
        num('TRI approximatif d’un 3x en 5 ans (%) ?', 25, 1, '%', '3^(1/5) − 1 ≈ 24,6 %.'),
        num('TRI approximatif d’un 2x en 3 ans (%) ?', 26, 1, '%', '2^(1/3) − 1 ≈ 26 %.'),
        num('Achat : EBITDA 100 à 10x, dette 600. Sortie à 5 ans : EBITDA 150 à 10x, dette restante 300. MOIC (x) ?', 3, 0.01, 'x', 'Fonds propres : 400 à l’entrée, 1 500 − 300 = 1 200 à la sortie. 1 200 / 400 = 3,0x.'),
        num('Fonds propres investis 200, valeur reçue à la sortie 500. MOIC (x) ?', 2.5, 0.01, 'x', '500 / 200 = 2,5x.'),
        num('TRI cible 20 % sur 5 ans. Fonds propres attendus à la sortie : 1 000. Mise maximale en fonds propres aujourd’hui (arrondie) ?', 402, 3, '', '1,2⁵ ≈ 2,49 → 1 000 / 2,49 ≈ 402.'),
        mcq('Deux deals : A fait 2,0x en 2 ans, B fait 2,5x en 6 ans. Lequel a le meilleur TRI ?', ['A', 'B', 'Identique', 'Impossible à dire'], 0, 'A ≈ 41 % ; B ≈ 16,5 %. Le TRI récompense la rapidité, le MOIC récompense le montant.'),
        tf('Un dividend recap en cours de détention augmente le TRI, toutes choses égales par ailleurs.', true, 'Le fonds récupère du cash plus tôt : le TRI augmente (le MOIC, lui, peut rester proche).'),
        open('Calcule de tête : un fonds achète une société 10x un EBITDA de 100, avec 60 % de dette. À 5 ans, l’EBITDA atteint 150, il revend à 10x et la dette a été réduite de moitié. TRI ?', `EV d'entrée 1 000, dette 600, fonds propres 400. EV de sortie 150 × 10 = 1 500, dette restante 300, fonds propres 1 200. MOIC = 3,0x sur 5 ans, donc TRI ≈ 25 % (3x en 5 ans ≈ 24,6 %). Décomposition : croissance de l'EBITDA (+500 d'EV) et désendettement (+300), pas d'expansion de multiple.`, ['EV et fonds propres d’entrée (1 000 / 400)', 'Fonds propres de sortie (1 200)', 'MOIC 3,0x', 'TRI ≈ 25 %', 'Décomposition de la création de valeur']),
      ]
    },
    {
      id: 'u7l4', title: 'Création de valeur et bon candidat',
      cards: [
        ['Les 3 leviers de création de valeur', `<ul><li><b>Croissance de l'EBITDA</b> : croissance du CA (organique, build-up), amélioration des marges.</li><li><b>Désendettement</b> : les cash-flows remboursent la dette, la part des fonds propres augmente.</li><li><b>Expansion du multiple</b> : revendre à un multiple plus élevé (société plus grosse, mieux positionnée, marché porteur). Le levier le moins maîtrisable.</li></ul>`],
        ['Le candidat idéal', `<ul><li>Cash-flows <b>stables et prévisibles</b> (récurrence, contrats longs).</li><li>Faibles besoins en <b>capex</b> et en BFR.</li><li>Position de marché forte, barrières à l'entrée.</li><li>Peu de dette existante.</li><li>Management solide.</li><li>Leviers d'amélioration opérationnelle et de build-up.</li><li>Options de sortie claires.</li></ul>`],
        ['Les sorties possibles', `<ul><li>Cession à un <b>industriel</b> (souvent le meilleur prix grâce aux synergies).</li><li>Cession à un autre <b>fonds</b> (secondary LBO).</li><li><b>Introduction en bourse</b> (sortie souvent progressive).</li><li><b>Continuation fund</b> : le fonds se revend l'actif à un véhicule qu'il gère, avec de nouveaux investisseurs.</li></ul>`],
        ['Build-up', `Stratégie de <b>buy-and-build</b> : une plateforme rachète de petites sociétés à des multiples plus faibles (petites cibles = multiples plus bas). L'ensemble est revendu à un multiple plus élevé : c'est l'<b>arbitrage de multiple</b>, en plus des synergies.`]
      ],
      qs: [
        num('Entrée : EBITDA 100 à 8x. Sortie : EBITDA 120 à 9x. Création de valeur (EV) due à la croissance de l’EBITDA, au multiple d’entrée ?', 160, 0, '', '(120 − 100) × 8 = 160. Le reste (1 × 120 = 120) vient de l’expansion du multiple.'),
        num('Même cas : création de valeur due à l’expansion du multiple ?', 120, 0, '', '(9 − 8) × 120 = 120. Total : 1 080 − 800 = 280 = 160 + 120.'),
        mcq('Quel levier de création de valeur est le moins maîtrisable par le fonds ?', ['Croissance de l’EBITDA', 'Désendettement', 'Expansion du multiple', 'Amélioration du BFR'], 2, 'Le multiple de sortie dépend largement des conditions de marché au moment de la cession.'),
        mcq('Quelle société est le meilleur candidat LBO ?', ['Une biotech en phase de R&D sans revenus', 'Un éditeur de logiciel B2B avec 90 % de revenus récurrents et peu de capex', 'Un sidérurgiste très cyclique aux capex lourds', 'Une startup en hypercroissance qui brûle du cash'], 1, 'Récurrence, prévisibilité et faibles capex permettent de supporter et rembourser de la dette.'),
        tf('Dans un build-up, l’arbitrage de multiple consiste à acheter de petites cibles à des multiples plus faibles que celui de la plateforme.', true, 'Les petites sociétés se valorisent à des multiples plus bas ; une fois intégrées, elles sont valorisées au multiple du groupe.'),
        mcq('En général, quel acquéreur paie le plus cher à la sortie ?', ['Un autre fonds', 'Un industriel avec des synergies', 'Le management', 'Le marché boursier lors de l’IPO'], 1, 'L’industriel peut intégrer des synergies dans son prix.'),
        open('Qu’est-ce qui fait un bon candidat au LBO ?', `Des cash-flows stables, prévisibles et récurrents pour servir la dette ; de faibles besoins en capex et en BFR, donc une bonne conversion de l'EBITDA en cash ; une position de marché solide avec des barrières à l'entrée ; peu de dette existante ; un management de qualité prêt à investir ; des leviers d'amélioration (marges, build-up) ; des options de sortie identifiées. Un secteur peu cyclique est un plus. À l'inverse, une société cyclique, très capitalistique ou en pertes est un mauvais candidat.`, ['Cash-flows stables et récurrents', 'Faibles capex / BFR (conversion en cash)', 'Position de marché / barrières', 'Management', 'Leviers d’amélioration et de build-up', 'Sorties possibles']),
        open('Comment un fonds crée-t-il de la valeur dans un LBO ?', `Trois leviers. 1) Croissance de l'EBITDA : croissance du chiffre d'affaires (organique et acquisitions de build-up) et amélioration des marges (achats, pricing, productivité). 2) Désendettement : les cash-flows remboursent la dette, ce qui fait croître la valeur des fonds propres à EV constante. 3) Expansion du multiple : revendre à un multiple supérieur grâce à une taille plus importante, un meilleur profil ou un marché favorable ; levier le moins maîtrisable. S'y ajoutent l'ingénierie financière (dividend recap) et l'arbitrage de multiple en build-up.`, ['Croissance de l’EBITDA (CA + marges)', 'Désendettement', 'Expansion du multiple', 'Build-up / arbitrage de multiple', 'Dividend recap']),
      ]
    }
  ]
});
