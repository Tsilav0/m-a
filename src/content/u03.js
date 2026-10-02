MA.unit({
  id: 'u3', title: 'Comptabilité pour l’entretien', icon: '📒',
  desc: 'Les 3 états financiers, leurs liens et les walkthroughs',
  lessons: [
    {
      id: 'u3l1', title: 'Les 3 états financiers',
      cards: [
        ['Compte de résultat (P&L)', `Mesure la <b>performance</b> sur une période :<br>Chiffre d'affaires<br>− Coûts des ventes → <b>Marge brute</b><br>− Charges opérationnelles (SG&A, R&D) → <b>EBITDA</b><br>− D&A → <b>EBIT</b> (résultat d'exploitation)<br>− Charges financières nettes → Résultat avant impôt<br>− Impôt → <b>Résultat net</b>`],
        ['Bilan', `Une <b>photo</b> à une date donnée : <b>Actif = Passif + Capitaux propres</b>.<br>Actif : immobilisations, stocks, créances clients, trésorerie.<br>Passif : dettes financières, dettes fournisseurs, provisions.<br>Capitaux propres : capital, réserves, résultat.`],
        ['Tableau des flux de trésorerie', `Explique la variation de trésorerie, en 3 blocs :<ul><li><b>CFO</b> (exploitation) : résultat net + éléments non cash (D&A, provisions, SBC) − variation du BFR.</li><li><b>CFI</b> (investissement) : capex, acquisitions, cessions.</li><li><b>CFF</b> (financement) : émission ou remboursement de dette, augmentation de capital, dividendes, rachats d'actions.</li></ul>`],
        ['Comment ils sont liés', `<ul><li>Le <b>résultat net</b> est la première ligne du tableau de flux et alimente les <b>réserves</b> au bilan.</li><li>Les éléments non cash (D&A) sont réintégrés dans le CFO et réduisent la valeur des immobilisations.</li><li>Les variations des postes du bilan (BFR, capex, dette) apparaissent dans le tableau de flux.</li><li>La <b>trésorerie de fin</b> du tableau de flux = trésorerie au bilan.</li></ul>`],
        ['Si tu ne devais en garder qu’un', `Question classique. Réponse attendue : le <b>tableau des flux de trésorerie</b>, car il montre la vraie génération de cash, et on peut reconstruire l'essentiel du reste. Variante : avec le bilan d'ouverture, on peut reconstituer le bilan de clôture à partir du P&L et des flux. Toujours <b>justifier</b>.`]
      ],
      qs: [
        ord('Remets le compte de résultat dans l’ordre :', ['Chiffre d’affaires', 'Marge brute', 'EBITDA', 'EBIT', 'Résultat avant impôt', 'Résultat net']),
        mcq('Quel état financier est une photo à une date donnée ?', ['Compte de résultat', 'Bilan', 'Tableau des flux', 'Annexe'], 1, 'Le bilan est un stock à une date ; P&L et flux mesurent une période.'),
        mcq('Le rachat d’actions propres apparaît dans :', ['Le CFO', 'Le CFI', 'Le CFF', 'Le P&L'], 2, 'C’est un flux avec les actionnaires : flux de financement.'),
        mcq('L’acquisition d’une filiale payée en cash apparaît dans :', ['Le CFO', 'Le CFI', 'Le CFF', 'Nulle part'], 1, 'Les acquisitions sont des investissements (CFI).'),
        tf('Les dividendes versés passent par le compte de résultat.', false, 'Les dividendes sont une distribution du résultat : ils réduisent les capitaux propres et passent par le CFF, pas par le P&L.'),
        mcq('Quelle ligne relie directement le P&L et le bilan ?', ['Le chiffre d’affaires', 'Le résultat net (via les réserves)', 'Les capex', 'Les stocks'], 1, 'Le résultat net non distribué augmente les réserves (retained earnings).'),
        open('Comment les 3 états financiers sont-ils liés ?', `Le résultat net du P&L est la première ligne du tableau de flux et s'ajoute aux réserves des capitaux propres au bilan (moins les dividendes). Dans le tableau de flux, on réintègre les éléments non cash (D&A, qui diminue aussi les immobilisations au bilan) et on intègre les variations du BFR, les capex (qui augmentent les immobilisations) et les flux de financement (dette, capital). La trésorerie de fin calculée dans le tableau de flux est la trésorerie au bilan, ce qui équilibre le bilan.`, ['Résultat net → première ligne du tableau de flux', 'Résultat net → réserves au bilan', 'D&A réintégré / baisse des immobilisations', 'BFR, capex, dette = variations du bilan', 'Trésorerie de fin = trésorerie au bilan']),
        open('Si tu ne pouvais utiliser qu’un seul des 3 états financiers pour évaluer une société, lequel choisirais-tu ?', `Le tableau des flux de trésorerie : il montre la capacité réelle de la société à générer du cash, ce qui est la base de toute valorisation (DCF, capacité de remboursement en LBO). Il est plus difficile à manipuler que le résultat net. Le résultat net y apparaît en première ligne et on voit les investissements et le financement. Si on a le bilan d'ouverture, on peut même reconstruire le bilan de clôture.`, ['Choix argumenté : tableau des flux', 'Le cash est la base de la valeur', 'Moins manipulable que le résultat', 'Contient résultat net, capex, financement', 'Variante : bilan d’ouverture']),
      ]
    },
    {
      id: 'u3l2', title: 'Les walkthroughs classiques',
      cards: [
        ['La méthode', `Toujours dans cet ordre : <b>1. P&L → 2. Tableau de flux → 3. Bilan</b>, et vérifier que <b>Actif = Passif</b>.<br>Dans ce module, le taux d'IS est de <b>25 %</b>.`],
        ['D&A +10', `<b>P&L</b> : EBIT −10, impôt −2,5, résultat net <b>−7,5</b>.<br><b>Flux</b> : RN −7,5 + D&A 10 = trésorerie <b>+2,5</b>.<br><b>Bilan</b> : trésorerie +2,5, immobilisations −10 → actif −7,5 ; capitaux propres −7,5. ✅<br>Le D&A « crée » du cash via l'économie d'impôt.`],
        ['Achat d’une machine de 100 financée par dette', `<b>P&L</b> : rien au moment de l'achat.<br><b>Flux</b> : capex −100 (CFI), dette +100 (CFF) → trésorerie inchangée.<br><b>Bilan</b> : immobilisations +100, dette +100. ✅`],
        ['Un an plus tard', `Amortissement 10, intérêts 10 % sur la dette = 10.<br><b>P&L</b> : EBIT −10, intérêts −10 → avant impôt −20, impôt +5, RN <b>−15</b>.<br><b>Flux</b> : −15 + 10 = <b>−5</b>.<br><b>Bilan</b> : trésorerie −5, immobilisations −10 → actif −15 ; capitaux propres −15. ✅`],
        ['BFR et éléments non cash', `<ul><li><b>Hausse des créances clients</b> : consomme du cash (on a vendu sans encaisser).</li><li><b>Hausse des dettes fournisseurs</b> : libère du cash.</li><li><b>Dépréciation des stocks</b> : charge non cash, se traite comme une D&A.</li><li><b>Stock-based compensation</b> : charge non cash, réintégrée dans le CFO, et augmente les capitaux propres.</li></ul>`]
      ],
      qs: [
        num('Taux d’IS 25 %. Le D&A augmente de 10. Variation du résultat net ?', -7.5, 0.01, '', 'EBIT −10, économie d’impôt +2,5 → résultat net −7,5.'),
        num('Taux d’IS 25 %. Le D&A augmente de 10. Variation de la trésorerie ?', 2.5, 0.01, '', 'RN −7,5 + réintégration du D&A 10 = +2,5. C’est l’économie d’impôt.'),
        num('Taux d’IS 25 %. Dépréciation de stocks de 20. Variation du total de l’actif ?', -15, 0.01, '', 'RN −15 ; trésorerie +5 (économie d’impôt) ; stocks −20 → actif −15 = capitaux propres −15.'),
        num('Taux d’IS 25 %. Une vente à crédit de 10 est enregistrée (pas de coût associé). Variation de la trésorerie ?', -2.5, 0.01, '', 'RN +7,5 mais créances clients +10 (consommation de cash) → trésorerie −2,5 (on a payé l’impôt sans encaisser).'),
        num('Machine de 100 achetée avec une dette à 10 %, amortie sur 10 ans, IS 25 %. Variation du résultat net la 1re année ?', -15, 0.01, '', 'D&A −10, intérêts −10 → −20 avant impôt, impôt +5 → RN −15.'),
        num('Même cas : variation de la trésorerie la 1re année (sans remboursement de dette) ?', -5, 0.01, '', 'RN −15 + D&A 10 = −5.'),
        num('Taux d’IS 25 %. Charge de stock-based compensation de 40. Variation des capitaux propres ?', 10, 0.01, '', 'RN −30 (40 × 75 %), mais les actions émises augmentent le capital de +40 → capitaux propres +10. Côté actif : trésorerie +10 (économie d’impôt). ✅'),
        mcq('Une hausse des dettes fournisseurs :', ['Consomme du cash', 'Libère du cash', 'N’a pas d’impact', 'Réduit le résultat net'], 1, 'On reçoit des biens sans payer tout de suite : le BFR baisse, la trésorerie augmente.'),
        tf('Une société rentable peut faire faillite.', true, 'Oui, si elle ne génère pas de cash : hausse du BFR (créances), capex lourds, échéances de dette. On fait faillite par manque de trésorerie, pas de résultat.'),
        mcq('Une société rembourse 50 de dette. Impact sur le P&L le jour du remboursement ?', ['−50', 'Aucun', '−50 × (1 − t)', '+50'], 1, 'Le remboursement du principal n’est pas une charge : seuls les intérêts passent par le P&L. Trésorerie −50, dette −50.'),
        open('Walk me through : le D&A augmente de 10 (taux d’IS 25 %).', `P&L : l'EBIT baisse de 10, l'impôt baisse de 2,5, le résultat net baisse de 7,5. Tableau de flux : résultat net −7,5, on réintègre le D&A non cash +10, la trésorerie augmente de 2,5. Bilan : trésorerie +2,5, immobilisations nettes −10, donc actif −7,5 ; côté passif, les capitaux propres baissent de 7,5 via le résultat. Le bilan est équilibré.`, ['P&L : RN −7,5 (via économie d’impôt 2,5)', 'Flux : +10 de D&A réintégré, cash +2,5', 'Bilan : immobilisations −10, cash +2,5', 'Capitaux propres −7,5', 'Vérification de l’équilibre']),
        open('Walk me through : une société achète pour 100 de stocks, payés cash. Puis elle les vend 150 l’année suivante (IS 25 %).', `Achat : pas d'impact P&L ; flux : hausse des stocks −100 dans le BFR ; bilan : stocks +100, trésorerie −100. Vente : P&L chiffre d'affaires +150, coût des ventes −100, résultat avant impôt +50, impôt −12,5, RN +37,5. Flux : RN +37,5, baisse des stocks +100 → trésorerie +137,5. Bilan : trésorerie +137,5, stocks −100 → actif +37,5 ; capitaux propres +37,5.`, ['Achat : pas d’impact P&L, BFR −100', 'Vente : marge 50, RN +37,5', 'Flux : déstockage +100', 'Cash +137,5', 'Bilan équilibré à +37,5']),
      ]
    },
    {
      id: 'u3l3', title: 'EBITDA, BFR et cash',
      cards: [
        ['Pourquoi l’EBITDA ?', `L'EBITDA approxime le <b>cash-flow opérationnel</b> avant investissements et structure financière. Il est indépendant de la structure de capital (avant intérêts) et de la politique d'amortissement, d'où son usage pour comparer les sociétés et dimensionner la dette (levier = dette nette / EBITDA).<br><br><b>Limites</b> : il ignore les capex, le BFR et l'impôt. Une société à capex lourds peut avoir un bel EBITDA et peu de cash.`],
        ['Le BFR', `<b>BFR = Stocks + Créances clients − Dettes fournisseurs</b> (+ autres éléments opérationnels).<br>Une <b>hausse</b> du BFR consomme du cash. Une société en croissance consomme souvent du BFR. Certains modèles (grande distribution) ont un <b>BFR négatif</b> : les clients paient comptant, les fournisseurs sont payés à 60 jours.`],
        ['Ratios de BFR', `<ul><li><b>DSO</b> (délai clients) = créances / CA × 365</li><li><b>DIO</b> (rotation des stocks) = stocks / coût des ventes × 365</li><li><b>DPO</b> (délai fournisseurs) = dettes fournisseurs / achats × 365</li><li><b>Cycle de conversion du cash</b> = DSO + DIO − DPO</li></ul>`],
        ['EBITDA ajusté', `Dans un deal, on parle d'<b>EBITDA ajusté</b> ou normalisé : retraité des éléments non récurrents (restructuration, litiges, coûts de transaction) et parfois de <b>pro forma</b> (acquisitions faites en cours d'année en année pleine). C'est le cœur de la <b>quality of earnings</b> des due diligences. Attention aux ajustements « agressifs » du vendeur.`]
      ],
      qs: [
        num('Créances clients 50, CA annuel 365. DSO en jours ?', 50, 0.5, 'jours', 'DSO = 50 / 365 × 365 = 50 jours.'),
        num('Stocks 40, créances 60, dettes fournisseurs 70. BFR ?', 30, 0, '', 'BFR = 40 + 60 − 70 = 30.'),
        num('DSO 45 j, DIO 30 j, DPO 60 j. Cycle de conversion du cash (jours) ?', 15, 0, 'jours', '45 + 30 − 60 = 15 jours.'),
        mcq('Quel modèle a typiquement un BFR négatif ?', ['Industrie lourde', 'Grande distribution alimentaire', 'Société de conseil', 'Promoteur immobilier'], 1, 'Les clients paient comptant, les stocks tournent vite et les fournisseurs sont payés à plusieurs semaines.'),
        mcq('Principale limite de l’EBITDA comme proxy du cash :', ['Il inclut les intérêts', 'Il ignore les capex et le BFR', 'Il dépend de la structure de capital', 'Il est après impôt'], 1, 'L’EBITDA ne tient pas compte des investissements nécessaires ni des besoins en BFR (ni de l’impôt).'),
        tf('Une société en forte croissance consomme généralement du BFR.', true, 'Plus de ventes = plus de stocks et de créances à financer.'),
        mcq('Les coûts d’une restructuration exceptionnelle sont généralement :', ['Retranchés de l’EBITDA ajusté', 'Réintégrés pour calculer l’EBITDA ajusté', 'Ignorés', 'Capitalisés'], 1, 'On réintègre les charges non récurrentes pour obtenir un EBITDA normatif, représentatif de la performance récurrente.'),
        open('Pourquoi utilise-t-on l’EBITDA en M&A et quelles sont ses limites ?', `L'EBITDA est un proxy du cash-flow opérationnel, indépendant de la structure financière (avant intérêts), de la fiscalité et des politiques d'amortissement : il permet de comparer les sociétés entre elles (EV/EBITDA) et de dimensionner la dette (levier en multiple d'EBITDA). Limites : il ignore les capex (crucial dans les secteurs capitalistiques), le BFR et l'impôt ; il peut être embelli par des ajustements ; et il n'est pas une mesure normée en IFRS (IFRS 16 l'augmente mécaniquement).`, ['Proxy du cash opérationnel', 'Indépendant de la structure de capital', 'Comparabilité et dimensionnement de la dette', 'Ignore capex, BFR, impôt', 'Ajustements / non normé, IFRS 16']),
      ]
    },
    {
      id: 'u3l4', title: 'IFRS : leases, goodwill, impôts différés',
      cards: [
        ['IFRS 16 (contrats de location)', `Depuis 2019, la quasi-totalité des locations sont inscrites au bilan : un <b>droit d'utilisation</b> à l'actif et une <b>dette locative</b> au passif.<br>Au P&L, le loyer disparaît et est remplacé par un <b>amortissement</b> + des <b>intérêts</b>.<br>→ <b>L'EBITDA augmente</b>, la dette nette aussi.<br>Règle de cohérence : si l'EBITDA est post-IFRS 16, la dette locative doit être dans la dette nette (et inversement).`],
        ['Goodwill', `Écart entre le prix payé et la <b>juste valeur des actifs nets identifiables</b> de la cible. En IFRS, le goodwill n'est <b>pas amorti</b> mais testé chaque année (<b>impairment test</b>). Une dépréciation est une charge non cash, irréversible.`],
        ['Impôts différés', `Ils naissent des écarts temporaires entre comptabilité et fiscalité.<br><b>IDP</b> (impôt différé passif, DTL) : on paiera plus d'impôt plus tard (exemple : réévaluation d'actifs en acquisition, amortissement fiscal accéléré).<br><b>IDA</b> (impôt différé actif, DTA) : on paiera moins plus tard (exemple : déficits reportables).`],
        ['Déficits reportables', `Les pertes fiscales passées réduisent l'impôt futur. En M&A, elles ont une <b>valeur</b> (actualisation des économies d'impôt), mais leur utilisation est souvent limitée en cas de changement de contrôle ou d'activité. En France, l'imputation est plafonnée chaque année.`]
      ],
      qs: [
        mcq('Effet d’IFRS 16 sur l’EBITDA d’un distributeur qui loue ses magasins :', ['Baisse', 'Hausse', 'Aucun effet', 'Dépend du taux d’IS'], 1, 'Le loyer (en EBITDA) est remplacé par un amortissement et des intérêts (sous l’EBITDA).'),
        tf('En IFRS, le goodwill est amorti linéairement sur 10 ans.', false, 'Il n’est pas amorti en IFRS mais fait l’objet d’un test de dépréciation au moins annuel.'),
        mcq('Si on utilise un EBITDA post-IFRS 16 pour un multiple EV/EBITDA, il faut :', ['Exclure les dettes locatives de la dette nette', 'Inclure les dettes locatives dans la dette nette', 'Ajouter les loyers à l’EBITDA', 'Utiliser le P/E'], 1, 'Cohérence : l’EBITDA ne supporte plus le loyer, donc l’obligation correspondante doit figurer dans l’EV via la dette nette.'),
        mcq('Des déficits fiscaux reportables créent :', ['Un impôt différé passif', 'Un impôt différé actif', 'Du goodwill', 'Une provision'], 1, 'Ils permettront de payer moins d’impôt à l’avenir : IDA (DTA).'),
        mcq('La réévaluation d’actifs à la juste valeur lors d’une acquisition (non reconnue fiscalement) crée :', ['Un IDA', 'Un IDP', 'Un BFR', 'Rien'], 1, 'Les amortissements comptables seront plus élevés que les amortissements fiscaux : on paiera relativement plus d’impôt qu’en compta → IDP (DTL).'),
        open('Quel est l’impact d’IFRS 16 sur la valorisation ?', `IFRS 16 inscrit les locations au bilan : droit d'utilisation à l'actif, dette locative au passif. Au P&L, le loyer est remplacé par un amortissement et des intérêts, donc l'EBITDA augmente et la dette nette augmente. En valorisation, il faut être cohérent : soit on travaille post-IFRS 16 (EBITDA sans loyer, dette locative dans la dette nette), soit pré-IFRS 16 (EBITDA après loyers, sans dette locative). Mélanger les deux fausse les multiples. Pour les comparables, vérifier que toutes les sociétés sont traitées de la même façon.`, ['Locations au bilan (actif + dette)', 'EBITDA augmente', 'Dette nette augmente', 'Cohérence pré/post IFRS 16', 'Homogénéité des comparables']),
      ]
    }
  ]
});
