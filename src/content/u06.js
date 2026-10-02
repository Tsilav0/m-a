MA.unit({
  id: 'u6', title: 'Le DCF', icon: '🔮',
  desc: 'Free cash-flows, WACC, CAPM, valeur terminale',
  lessons: [
    {
      id: 'u6l1', title: 'La logique et les free cash-flows',
      cards: [
        ['Le principe', `La valeur d'une société = la <b>valeur actuelle</b> des flux de trésorerie qu'elle générera. Deux étapes :<br>1. Projeter les <b>free cash-flows</b> sur la durée du business plan (5 à 10 ans).<br>2. Calculer une <b>valeur terminale</b> pour l'après.<br>On actualise le tout au <b>WACC</b> → on obtient l'<b>Enterprise Value</b>, puis on retire la dette nette pour obtenir l'equity value.`],
        ['Le FCF unlevered (FCFF)', `<b>FCFF = EBIT × (1 − t) + D&A − Capex − ΔBFR</b><br>• EBIT × (1 − t) = NOPAT (résultat opérationnel après impôt normatif).<br>• On réintègre le D&A (non cash).<br>• On retire les investissements et la hausse du BFR.<br>Il est <b>avant intérêts</b> : il revient à tous les apporteurs de capitaux → actualisé au <b>WACC</b> → <b>EV</b>.`],
        ['Le FCF levered (FCFE)', `<b>FCFE = FCFF − intérêts × (1 − t) + variation nette de la dette</b><br>Il revient aux seuls actionnaires → actualisé au <b>coût des fonds propres</b> (Ke) → directement l'<b>equity value</b>. Moins utilisé en M&A (sauf banques et assurances), car il dépend de la structure de financement.`],
        ['Pourquoi l’impôt sur l’EBIT ?', `On calcule un impôt « comme si » la société n'avait pas de dette. L'avantage fiscal de la dette (intérêts déductibles) est pris en compte dans le <b>WACC</b>, via Kd × (1 − t). Le compter aussi dans les flux serait un <b>double comptage</b>.`]
      ],
      qs: [
        num('EBIT 100, taux d’IS 25 %, D&A 20, capex 30, hausse du BFR 10. FCFF ?', 55, 0, '', '100 × 75 % = 75 ; + 20 − 30 − 10 = 55.'),
        num('EBITDA 200, D&A 50, taux d’IS 25 %, capex 60, hausse du BFR 10. FCFF ?', 92.5, 0.01, '', 'EBIT 150 → NOPAT 112,5 ; + 50 − 60 − 10 = 92,5.'),
        mcq('Le FCFF est actualisé au :', ['Coût des fonds propres', 'WACC', 'Taux sans risque', 'Coût de la dette'], 1, 'Il revient à tous les apporteurs de capitaux : on utilise le coût moyen pondéré du capital.'),
        mcq('Actualiser des FCFE au coût des fonds propres donne :', ['L’Enterprise Value', 'L’Equity Value', 'La dette nette', 'Le goodwill'], 1, 'Les FCFE reviennent aux actionnaires : on obtient directement la valeur des capitaux propres.'),
        tf('Dans le FCFF, on retire les intérêts financiers.', false, 'Le FCFF est avant intérêts. L’effet de la dette passe par le WACC.'),
        mcq('Pourquoi applique-t-on l’impôt sur l’EBIT et pas sur le résultat avant impôt dans le FCFF ?', ['Par simplicité', 'Pour ne pas compter deux fois l’économie d’impôt sur les intérêts, déjà dans le WACC', 'Parce que l’EBIT est plus élevé', 'C’est une erreur courante'], 1, 'Le bouclier fiscal de la dette est intégré via Kd × (1 − t) dans le WACC.'),
        open('Walk me through un DCF.', `1) Projeter les free cash-flows unlevered sur 5 à 10 ans à partir du business plan : EBIT × (1 − t) + D&A − capex − variation du BFR. 2) Calculer une valeur terminale à la fin de la période, par la méthode de Gordon-Shapiro (FCF n+1 / (WACC − g)) ou par un multiple de sortie. 3) Calculer le WACC : coût des fonds propres via le CAPM (rf + β × prime de risque), coût de la dette après impôt, pondérés par la structure cible. 4) Actualiser flux et valeur terminale au WACC → Enterprise Value. 5) Retirer la dette nette (et autres éléments du bridge) → equity value, puis diviser par les actions diluées → valeur par action. 6) Faire des sensibilités sur WACC et g.`, ['Projection des FCF unlevered (formule)', 'Valeur terminale (Gordon / multiple)', 'WACC via CAPM', 'Actualisation → EV', 'Bridge → equity value / par action', 'Sensibilités']),
      ]
    },
    {
      id: 'u6l2', title: 'WACC et CAPM',
      cards: [
        ['Le WACC', `<b>WACC = E/(D+E) × Ke + D/(D+E) × Kd × (1 − t)</b><br>On utilise des pondérations en <b>valeur de marché</b>, et idéalement une <b>structure cible</b> (celle du secteur), pas la structure actuelle ponctuelle.`],
        ['Le CAPM (MEDAF)', `<b>Ke = Rf + β × (Rm − Rf)</b><br>• <b>Rf</b> : taux sans risque (obligation d'État à 10 ans).<br>• <b>β</b> : sensibilité de l'action au marché (risque systématique).<br>• <b>Rm − Rf</b> : prime de risque du marché (souvent 5 à 7 %).<br>On ajoute parfois une prime de taille ou une prime pays.`],
        ['Désendetter et réendetter le bêta', `Le bêta observé (levered) inclut le risque financier. Pour une cible non cotée :<br>1. Prendre les bêtas des comparables et les <b>désendetter</b> : <b>βu = βL / [1 + (1 − t) × D/E]</b><br>2. Retenir la médiane des βu.<br>3. <b>Réendetter</b> à la structure cible : <b>βL = βu × [1 + (1 − t) × D/E]</b>.`],
        ['Pourquoi Ke > Kd ?', `Les actionnaires sont <b>payés en dernier</b> (résiduels) et n'ont pas de rendement garanti : ils exigent plus. De plus, les intérêts sont déductibles. Donc la dette est moins chère que les fonds propres… jusqu'à un certain point : trop de dette augmente le risque de faillite, ce qui fait monter Kd et Ke.`]
      ],
      qs: [
        num('Rf 3 %, β 1,2, prime de risque de marché 5 %. Coût des fonds propres (%) ?', 9, 0.01, '%', 'Ke = 3 % + 1,2 × 5 % = 9 %.'),
        num('E/(D+E) = 60 %, D/(D+E) = 40 %, Ke 10 %, Kd 5 %, IS 25 %. WACC (%) ?', 7.5, 0.01, '%', '0,6 × 10 % + 0,4 × 5 % × 0,75 = 6 % + 1,5 % = 7,5 %.'),
        num('βL 1,5, D/E 0,5, IS 25 %. Bêta désendetté (2 décimales) ?', 1.09, 0.01, '', '1,5 / (1 + 0,75 × 0,5) = 1,5 / 1,375 = 1,09.'),
        num('βu 1,0, D/E cible 1,0, IS 25 %. Bêta réendetté ?', 1.75, 0.01, '', '1,0 × (1 + 0,75 × 1,0) = 1,75.'),
        mcq('Pourquoi désendetter les bêtas des comparables ?', ['Pour réduire le WACC', 'Pour isoler le risque opérationnel, indépendamment de la structure financière de chacun', 'Par convention comptable', 'Pour le rendre négatif'], 1, 'On compare le risque business pur, puis on réintègre le levier de la cible.'),
        mcq('Si une société augmente son levier, son bêta levered :', ['Baisse', 'Augmente', 'Ne change pas', 'Devient nul'], 1, 'Plus de dette = plus de risque pour l’actionnaire = bêta plus élevé.'),
        tf('Le coût des fonds propres est généralement supérieur au coût de la dette.', true, 'L’actionnaire est rémunéré en dernier et sans garantie ; la dette est prioritaire et ses intérêts sont déductibles.'),
        mcq('Quel taux sans risque utilise-t-on généralement ?', ['Le taux du livret A', 'L’obligation d’État à 10 ans de la devise des flux', 'Le taux de la BCE au jour le jour', 'Le taux de l’inflation'], 1, 'On prend un taux souverain long, dans la même devise que les flux projetés.'),
        open('Comment calcules-tu le WACC d’une société non cotée ?', `WACC = E/(D+E) × Ke + D/(D+E) × Kd × (1 − t). Pour Ke, j'utilise le CAPM : taux sans risque (OAT 10 ans pour l'euro) + bêta × prime de risque de marché, plus éventuellement une prime de taille. La société n'étant pas cotée, je prends les bêtas de comparables cotés, je les désendette avec leur propre D/E, je retiens la médiane, puis je réendette avec la structure cible. Kd : coût d'emprunt marginal de la société (ou spread de crédit de sociétés de rating comparable), après impôt. Pondérations : structure cible à long terme, en valeurs de marché.`, ['Formule du WACC', 'CAPM pour Ke', 'Bêtas de comparables désendettés puis réendettés', 'Kd après impôt', 'Structure cible / valeurs de marché', 'Prime de taille éventuelle']),
      ]
    },
    {
      id: 'u6l3', title: 'La valeur terminale',
      cards: [
        ['Pourquoi elle pèse lourd', `La valeur terminale représente souvent <b>60 à 80 %</b> de l'EV d'un DCF. Il faut donc la vérifier avec soin.`],
        ['Gordon-Shapiro (croissance perpétuelle)', `<b>VT = FCF(n+1) / (WACC − g) = FCF(n) × (1 + g) / (WACC − g)</b><br>• <b>g</b> doit rester inférieur à la croissance nominale de long terme de l'économie (souvent 1,5 à 3 %), sinon la société finirait plus grosse que l'économie.<br>• Le dernier flux doit être <b>normatif</b> : capex ≈ D&A (un peu au-dessus pour financer la croissance), marges stabilisées.`],
        ['Multiple de sortie', `<b>VT = EBITDA(n) × multiple</b> (souvent la médiane des comps actuels).<br>Plus intuitif, mais il réintroduit du relatif dans une méthode intrinsèque.<br>Bonne pratique : <b>croiser</b> les deux méthodes (calculer le g implicite du multiple et le multiple implicite du Gordon).`],
        ['Ne pas oublier d’actualiser', `La valeur terminale est calculée à la date <b>n</b> : il faut l'actualiser de n années : <b>VT / (1 + WACC)^n</b>. Erreur classique en entretien.`]
      ],
      qs: [
        num('FCF de l’année 5 : 100. WACC 10 %, g 2 %. Valeur terminale en année 5 (Gordon) ?', 1275, 0.5, '', '100 × 1,02 / (10 % − 2 %) = 102 / 0,08 = 1 275.'),
        num('Valeur terminale de 1 275 en année 5, WACC 10 %. Valeur actuelle (arrondie) ?', 792, 1, '', '1 275 / 1,1⁵ = 1 275 / 1,6105 ≈ 792.'),
        num('EBITDA année 5 : 150, multiple de sortie 8,0x. Valeur terminale ?', 1200, 0, '', '150 × 8 = 1 200.'),
        num('VT par multiple = 1 200, FCF année 5 = 100, WACC 10 %. Taux de croissance perpétuelle implicite (%, 1 décimale) ?', 1.5, 0.1, '%', 'g = (VT × WACC − FCF) / (VT + FCF) = (120 − 100) / 1 300 ≈ 1,5 %.'),
        mcq('Pourquoi g doit-il rester inférieur à la croissance de long terme de l’économie ?', ['Par prudence comptable', 'Sinon la société deviendrait à terme plus grande que l’économie', 'Pour réduire le WACC', 'C’est une règle de l’AMF'], 1, 'Une croissance perpétuelle supérieure à celle de l’économie est économiquement impossible.'),
        tf('La valeur terminale représente généralement une part mineure (moins de 20 %) de l’EV d’un DCF.', false, 'Elle pèse souvent 60 à 80 % de l’EV : d’où l’importance des hypothèses de long terme.'),
        mcq('Que se passe-t-il si g ≥ WACC dans la formule de Gordon ?', ['La valeur est nulle', 'La formule n’a plus de sens (valeur infinie ou négative)', 'La valeur double', 'Rien de particulier'], 1, 'Le dénominateur devient nul ou négatif : la formule ne fonctionne plus.'),
        mcq('Dans l’année normative du Gordon, les capex doivent être :', ['Nuls', 'Proches du D&A (légèrement supérieurs pour financer g)', 'Dix fois le D&A', 'Égaux au chiffre d’affaires'], 1, 'À l’état stationnaire, on renouvelle la base d’actifs (≈ D&A), plus un peu pour financer la croissance.'),
        open('Quelles sont les deux méthodes de calcul de la valeur terminale ? Laquelle préfères-tu ?', `Gordon-Shapiro : FCF de l'année n+1 / (WACC − g), avec g la croissance perpétuelle (inférieure à la croissance nominale de long terme, ≈ 1,5 à 3 %) et un flux normatif. Méthode intrinsèque mais très sensible à g et au WACC. Multiple de sortie : EBITDA de la dernière année × multiple (médiane des comps) ; plus parlante pour le marché mais elle importe la valorisation relative actuelle dans le DCF. Je croise les deux : je calcule le g implicite du multiple et le multiple implicite du Gordon pour vérifier la cohérence. En pratique, les banques montrent souvent les deux ; les fonds raisonnent davantage en multiple de sortie.`, ['Formule de Gordon et contrainte sur g', 'Multiple de sortie', 'Avantages / inconvénients', 'Croisement (g ou multiple implicite)', 'Actualisation de la VT']),
      ]
    },
    {
      id: 'u6l4', title: 'Sensibilités et pièges',
      cards: [
        ['Qu’est-ce qui fait monter la valeur ?', `<ul><li>WACC plus bas</li><li>Croissance perpétuelle plus élevée</li><li>Marges plus élevées</li><li>Capex ou BFR plus faibles</li><li>Taux d'impôt plus faible</li></ul>Les tableaux de <b>sensibilité</b> classiques : WACC × g, WACC × multiple de sortie.`],
        ['Convention mi-année', `Les flux arrivent tout au long de l'année, pas au 31 décembre. Avec la <b>mid-year convention</b>, on actualise chaque flux sur (t − 0,5) années : la valeur augmente légèrement.`],
        ['Plus de dette = plus de valeur ?', `Un peu de dette réduit le WACC (Kd < Ke, déductibilité des intérêts) → valeur en hausse. Mais au-delà d'un certain niveau, le risque de défaut fait monter Kd et Ke → le WACC remonte. Il existe une <b>structure optimale</b>.`],
        ['Questions pièges', `• <i>« Une société sans dette : son WACC ? »</i> → WACC = Ke.<br>• <i>« Peut-on faire un DCF pour une startup en pertes ? »</i> → oui, mais horizon long, scénarios et forte sensibilité.<br>• <i>« Pourquoi les capex ne sont pas dans le P&L ? »</i> → ils sont capitalisés puis amortis via le D&A.`]
      ],
      qs: [
        num('Un flux de 110 reçu dans 1 an, actualisé à 10 %. Valeur actuelle ?', 100, 0.01, '', '110 / 1,10 = 100.'),
        mcq('Le WACC passe de 8 % à 9 %. La valeur du DCF :', ['Augmente', 'Baisse', 'Ne change pas', 'Impossible à dire'], 1, 'Un taux d’actualisation plus élevé réduit la valeur actuelle des flux, en particulier de la valeur terminale.'),
        mcq('Avec la convention mi-année, la valeur DCF est :', ['Légèrement plus faible', 'Légèrement plus élevée', 'Identique', 'Divisée par deux'], 1, 'Chaque flux est actualisé sur une demi-année de moins.'),
        mcq('Une société n’a aucune dette. Son WACC est égal à :', ['Kd', 'Ke', 'Rf', 'Zéro'], 1, 'Sans dette, le poids des fonds propres est de 100 % : WACC = Ke.'),
        tf('Augmenter indéfiniment la dette réduit toujours le WACC.', false, 'Au-delà d’un niveau optimal, le risque de défaut fait monter Kd et Ke : le WACC remonte.'),
        num('Facteur d’actualisation mi-année pour l’année 1 à 10 % (3 décimales) ?', 0.953, 0.002, '', '1 / 1,1^0,5 = 1 / 1,0488 ≈ 0,953.'),
        mcq('Quel paramètre a typiquement le plus d’impact sur un DCF ?', ['Le BFR de l’année 1', 'Le WACC et la croissance perpétuelle', 'Le nombre d’actions', 'La date de clôture'], 1, 'Ils déterminent la valeur terminale, qui pèse 60 à 80 % de l’EV.'),
        open('Une société a un WACC de 9 % et une croissance de 2 %. Comment juges-tu la robustesse de ton DCF ?', `Je regarde d'abord la part de la valeur terminale dans l'EV (si elle dépasse 75 à 80 %, la valeur repose surtout sur le long terme). Je fais des tableaux de sensibilité WACC × g (par ex. ±0,5 % / ±0,25 %) et WACC × multiple de sortie. Je vérifie le multiple implicite de la valeur terminale par rapport aux comps et le g implicite. Je contrôle que l'année normative est cohérente (capex ≈ D&A, BFR stable, marges soutenables). Enfin je confronte le résultat aux autres méthodes du football field.`, ['Poids de la valeur terminale', 'Sensibilités WACC × g', 'Multiple implicite vs comps', 'Année normative cohérente', 'Confrontation aux autres méthodes']),
      ]
    }
  ]
});
