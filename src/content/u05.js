MA.unit({
  id: 'u5', title: 'Valorisation par multiples', icon: '📊',
  desc: 'Comparables boursiers, transactions précédentes, football field',
  lessons: [
    {
      id: 'u5l1', title: 'Panorama des méthodes',
      cards: [
        ['Deux grandes familles', `<b>Valorisation intrinsèque</b> : la valeur découle des flux futurs de la société → <b>DCF</b>.<br><b>Valorisation relative</b> : la valeur découle du prix d'actifs comparables → <b>comparables boursiers</b> (trading comps) et <b>transactions précédentes</b> (precedent transactions).<br>Plus des méthodes spécifiques : <b>LBO</b> (ce qu'un fonds peut payer), <b>ANR</b> (somme des parties, holdings, foncières), cours de bourse et objectifs de cours des analystes.`],
        ['Quelle méthode donne la valeur la plus haute ?', `En général : <b>transactions précédentes</b> > comparables boursiers, car elles incluent une <b>prime de contrôle</b>. Le <b>DCF</b> est très variable selon les hypothèses (souvent élevé si le business plan est optimiste). Le <b>LBO</b> donne souvent un <b>plancher</b> : le prix qu'un fonds peut payer pour atteindre son TRI cible.<br>Répondre « ça dépend » mais avec cette logique.`],
        ['Forces et faiblesses', `<b>DCF</b> : fondamental, mais très sensible au WACC, à la croissance et à la valeur terminale.<br><b>Comps</b> : reflète le marché actuel, mais rarement de vrais comparables, et pas de prime de contrôle.<br><b>Précédents</b> : inclut la prime de contrôle, mais les données sont anciennes ou incomplètes et le contexte de marché a changé.`]
      ],
      qs: [
        mcq('Quelle méthode inclut une prime de contrôle ?', ['Comparables boursiers', 'Transactions précédentes', 'Cours de bourse', 'Aucune'], 1, 'Les multiples de transactions reflètent des prix payés pour le contrôle, donc avec prime.'),
        mcq('Quelle méthode donne souvent un plancher de valorisation ?', ['DCF', 'Transactions précédentes', 'Analyse LBO', 'Somme des parties'], 2, 'L’analyse LBO indique le prix maximum qu’un sponsor peut payer pour atteindre son TRI cible ; un stratégique peut généralement payer plus.'),
        mcq('Le DCF est une méthode :', ['Relative', 'Intrinsèque', 'Patrimoniale', 'Boursière'], 1, 'Le DCF valorise à partir des flux futurs propres à la société.'),
        tf('Les transactions précédentes donnent généralement des multiples plus élevés que les comparables boursiers.', true, 'À cause de la prime de contrôle (et parfois des synergies payées).'),
        mcq('Principale faiblesse du DCF :', ['Il ignore les flux futurs', 'Forte sensibilité aux hypothèses (WACC, croissance, valeur terminale)', 'Il inclut une prime de contrôle', 'Il nécessite des sociétés cotées'], 1, 'Un petit changement de WACC ou de taux de croissance à l’infini peut modifier fortement la valeur.'),
        open('Quelles sont les principales méthodes de valorisation et laquelle donne la valeur la plus élevée ?', `Trois méthodes principales : DCF (intrinsèque, actualisation des flux de trésorerie disponibles), comparables boursiers et transactions précédentes (relatives, multiples). En complément : analyse LBO, somme des parties ou ANR, cours de bourse. En général, les transactions précédentes donnent des valeurs plus élevées que les comps car elles incluent une prime de contrôle. Le DCF est très dépendant des hypothèses et peut être le plus élevé si le business plan est optimiste. L'analyse LBO donne souvent un plancher. On synthétise le tout dans un football field.`, ['DCF (intrinsèque)', 'Comps et précédents (relatives)', 'LBO / somme des parties', 'Précédents > comps (prime de contrôle)', 'DCF sensible aux hypothèses, LBO = plancher', 'Football field']),
      ]
    },
    {
      id: 'u5l2', title: 'Les comparables boursiers',
      cards: [
        ['Choisir l’échantillon', `Critères, par ordre d'importance :<ul><li><b>Secteur et modèle économique</b> (mêmes produits, mêmes clients)</li><li><b>Taille</b></li><li><b>Géographie</b></li><li><b>Profil financier</b> : croissance, marges, intensité capitalistique</li></ul>Typiquement 5 à 10 sociétés, réparties en sous-groupes si besoin.`],
        ['Les étapes', `1. Sélectionner l'échantillon.<br>2. Collecter cours, actions diluées, dette nette, et consensus des analystes (CA, EBITDA, EBIT, RN).<br>3. Calculer les EV et les multiples (souvent N, N+1, N+2).<br>4. Retenir <b>médiane</b> et moyenne (la médiane est moins sensible aux valeurs extrêmes).<br>5. Appliquer les multiples aux agrégats de la cible pour obtenir une fourchette.`],
        ['LTM, NTM, calendarisation', `<b>LTM</b> (Last Twelve Months) : 12 derniers mois glissants. LTM = exercice N-1 + semestre en cours − semestre comparable N-1.<br><b>NTM</b> (Next Twelve Months) : 12 prochains mois.<br><b>Calendarisation</b> : ramener des sociétés aux exercices décalés (ex. clôture en mars) sur une même base annuelle pour comparer.`],
        ['Pourquoi les multiples diffèrent', `Un multiple plus élevé reflète en général : une <b>croissance</b> supérieure, des <b>marges</b> plus élevées, un <b>risque</b> plus faible (récurrence, visibilité), une meilleure <b>conversion en cash</b> (peu de capex), une taille ou une position de leader.`]
      ],
      qs: [
        num('LTM : exercice 2025 EBITDA 100 ; S1 2026 : 60 ; S1 2025 : 50. EBITDA LTM au 30/06/2026 ?', 110, 0, '', 'LTM = 100 + 60 − 50 = 110.'),
        num('Médiane des multiples EV/EBITDA : 9,0x. EBITDA de la cible : 50 M€. Dette nette : 120 M€. Equity value implicite (M€) ?', 330, 0, 'M€', 'EV = 9 × 50 = 450 ; equity = 450 − 120 = 330 M€.'),
        mcq('Pourquoi retient-on plutôt la médiane que la moyenne ?', ['Elle est plus élevée', 'Elle est moins sensible aux valeurs extrêmes', 'C’est une obligation légale', 'Elle est plus simple à calculer'], 1, 'Un comparable atypique (multiple aberrant) déforme la moyenne mais peu la médiane.'),
        mcq('Quel critère de sélection est le plus important ?', ['La couleur du logo', 'Le secteur et le modèle économique', 'L’âge du CEO', 'La place de cotation uniquement'], 1, 'Sans modèle économique comparable, le multiple n’a pas de sens.'),
        mcq('Deux sociétés du même secteur : A à 12x EBITDA, B à 8x. Explication la plus probable ?', ['A a plus de dette', 'A a une croissance et/ou des marges supérieures', 'B est mieux gérée', 'A est plus petite'], 1, 'Une prime de multiple traduit des perspectives de croissance, des marges, une récurrence ou une conversion en cash supérieures.'),
        mcq('Pourquoi calendariser ?', ['Pour corriger l’inflation', 'Pour comparer des sociétés ayant des dates de clôture différentes', 'Pour calculer le WACC', 'Pour diluer les actions'], 1, 'On ramène tout le monde sur une même période (ex. année civile) pour des multiples comparables.'),
        ord('Remets les étapes des comps dans l’ordre :', ['Sélectionner l’échantillon', 'Collecter cours, dette nette et consensus', 'Calculer EV et multiples', 'Retenir médiane / moyenne', 'Appliquer aux agrégats de la cible']),
        open('Comment construis-tu un échantillon de comparables boursiers ?', `Je pars du modèle économique de la cible : même secteur, produits, clients et canaux. Ensuite je filtre par taille, géographie et profil financier (croissance, marges, intensité capitalistique). Je vise 5 à 10 sociétés, éventuellement en sous-groupes (cœur de comparables vs élargi). Je collecte les données (cours, actions diluées, bridge EV, consensus), je calcule les multiples N, N+1, je retiens médiane et moyenne en écartant les valeurs aberrantes, puis j'applique les multiples aux agrégats de la cible en ajustant selon son profil (prime ou décote).`, ['Secteur / modèle économique d’abord', 'Taille, géographie, profil financier', '5 à 10 sociétés, sous-groupes', 'Multiples N / N+1 et médiane', 'Ajustement prime / décote selon la cible']),
      ]
    },
    {
      id: 'u5l3', title: 'Les transactions précédentes',
      cards: [
        ['Le principe', `On regarde les multiples payés lors d'<b>acquisitions</b> de sociétés comparables. Ils intègrent une <b>prime de contrôle</b> et parfois une partie des <b>synergies</b>.`],
        ['Sélection', `Même secteur, taille, géographie, et surtout des transactions <b>récentes</b> (souvent les 3 à 5 dernières années), car le contexte de marché (taux, appétit des fonds) influence fortement les multiples. Distinguer acquéreurs <b>stratégiques</b> et <b>financiers</b>.`],
        ['Les limites', `<ul><li>Données souvent <b>incomplètes</b> (cibles non cotées, prix non communiqué).</li><li>Contexte de marché différent selon les années.</li><li>Chaque deal a ses spécificités (synergies, process compétitif, part acquise).</li><li>Échantillon souvent réduit.</li></ul>`],
        ['Analyse des primes', `Pour une cible cotée, on regarde aussi les <b>primes payées</b> dans les offres publiques comparables, par rapport au cours spot, et aux moyennes 1 mois, 3 mois et 6 mois avant l'annonce (pour neutraliser la spéculation pré-annonce).`]
      ],
      qs: [
        tf('Une transaction d’il y a 15 ans est un précédent aussi pertinent qu’une transaction récente.', false, 'Les conditions de marché (taux, financement, valorisations) changent : on privilégie les transactions récentes.'),
        mcq('Pourquoi mesure-t-on la prime par rapport au cours moyen 1, 3 ou 6 mois avant l’annonce ?', ['Pour la gonfler artificiellement', 'Pour neutraliser l’effet des rumeurs et de la spéculation pré-annonce', 'Par obligation de l’AMF', 'Pour la convertir en euros'], 1, 'Le cours de la veille peut déjà intégrer des rumeurs d’offre.'),
        mcq('Principale limite des transactions précédentes :', ['Elles excluent la prime de contrôle', 'Les données sont souvent incomplètes et datées', 'Elles nécessitent un WACC', 'Elles ne concernent que les sociétés cotées'], 1, 'Beaucoup de cibles sont non cotées et les prix ou agrégats ne sont pas toujours publiés.'),
        num('Cours de bourse : 50 €. Prix d’offre : 65 €. Prime (%) ?', 30, 0.1, '%', '(65 − 50) / 50 = 30 %.'),
        num('Cours moyen 3 mois : 40 €. Prime offerte de 25 %. Prix par action (€) ?', 50, 0.01, '€', '40 × 1,25 = 50 €.'),
        open('Pourquoi les multiples de transactions sont-ils généralement plus élevés que les multiples boursiers ?', `Parce qu'ils reflètent l'acquisition du contrôle : l'acheteur paie une prime de contrôle (accès aux flux et pouvoir de décision) et souvent une partie des synergies qu'il anticipe. Le cours de bourse reflète la valeur d'une participation minoritaire, sans contrôle. S'ajoutent les effets de process compétitif (enchères). Nuance : selon le contexte de marché (bourse haute, financement rare), l'écart peut se réduire.`, ['Prime de contrôle', 'Partage des synergies', 'Cours de bourse = minoritaire', 'Effet des enchères', 'Nuance selon le contexte de marché']),
      ]
    },
    {
      id: 'u5l4', title: 'Le football field',
      cards: [
        ['Le graphique', `Le <b>football field</b> présente sur un même graphique les <b>fourchettes de valeur</b> obtenues par chaque méthode (barres horizontales) : plus-haut / plus-bas 52 semaines, objectifs de cours des analystes, comps, précédents, DCF, LBO. C'est la page de synthèse de tout pitch de valorisation.`],
        ['Comment le lire', `On identifie la zone de recouvrement des méthodes pour dégager une <b>fourchette de valorisation</b> défendable. En sell-side, on argumente vers le haut de la fourchette ; en buy-side, vers le bas. En fairness opinion, on vérifie que le prix se situe dans la fourchette.`],
        ['Le présenter à l’oral', `« Les comparables boursiers donnent X à Y, les transactions précédentes, plus élevées car incluant une prime de contrôle, donnent… Le DCF, avec un WACC de… et une croissance à l'infini de…, donne… L'analyse LBO montre qu'un fonds peut payer jusqu'à… Nous retenons donc une fourchette de… »`]
      ],
      qs: [
        mcq('Que montre un football field ?', ['L’évolution du cours de bourse', 'Les fourchettes de valeur de chaque méthode de valorisation', 'La structure de la dette', 'Le calendrier du deal'], 1, 'C’est la synthèse visuelle des méthodes de valorisation.'),
        tf('En fairness opinion, la banque vérifie que le prix proposé se situe dans une fourchette de valeur raisonnable.', true, 'La fairness opinion atteste du caractère équitable du prix d’un point de vue financier.'),
        mcq('Quelle barre apparaît souvent dans un football field pour une cible cotée ?', ['Plus-haut / plus-bas 52 semaines', 'Le WACC', 'Le taux d’IS', 'Le BFR'], 0, 'On y met des références de marché : plus-haut et plus-bas sur 52 semaines, objectifs de cours des analystes.'),
        open('Comment présenterais-tu la synthèse de valorisation d’une société à un client ?', `Avec un football field : une barre par méthode. Je commence par les références de marché (cours, 52 semaines, objectifs des analystes), puis les comparables boursiers (fourchette autour de la médiane des multiples N+1), les transactions précédentes (plus élevées, prime de contrôle), le DCF (sensibilité WACC / croissance à l'infini) et l'analyse LBO (capacité d'un fonds). J'explique pourquoi les méthodes divergent, puis je propose une fourchette retenue à la zone de recouvrement, avec les arguments pour se positionner dans le haut ou le bas selon notre rôle.`, ['Football field', 'Références de marché', 'Comps, précédents, DCF, LBO', 'Expliquer les écarts entre méthodes', 'Fourchette retenue argumentée']),
      ]
    }
  ]
});
