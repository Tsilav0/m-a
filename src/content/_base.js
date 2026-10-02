/* Base du contenu : helpers pour déclarer unités, leçons et questions.
   Types de questions :
   - mcq   : QCM (o = options, a = index de la bonne réponse)
   - tf    : vrai / faux (a = true|false)
   - num   : réponse chiffrée (a = valeur, tol = tolérance absolue, u = unité)
   - ord   : remettre dans l'ordre (o = éléments dans le BON ordre)
   - open  : question d'entretien orale (r = réponse modèle, p = points clés attendus)
*/
window.MA = { units: [], sims: [], glossary: [] };
const mcq = (q, o, a, e) => ({ t: 'mcq', q, o, a, e });
const tf = (q, a, e) => ({ t: 'tf', q, a, e });
const num = (q, a, tol, u, e) => ({ t: 'num', q, a, tol, u, e });
const ord = (q, o, e) => ({ t: 'ord', q, o, e });
const open = (q, r, p) => ({ t: 'open', q, r, p });
MA.unit = function (u) { MA.units.push(u); };
