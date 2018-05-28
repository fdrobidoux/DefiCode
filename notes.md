# Notes personnelles

## Quoi faire

### 1. Créer des objets pour : 

#### En général...

 - Les objets créés doivent se rappeler de leur position dans l'équation courante dont ils appartiennent.

#### `Equation`

Un objet `Equation` sera une string représentant une équation brut. Le premier objet `Equation` créé sera toujours la string de calcul de départ.

Puis, l'équation de départ sera séparée en morceaux, ou _"sous-équations"_, qui, pour l'instant dans mon analyse, seront la valeur en string du contenu d'une paire de parenthèses.

Ils vont pouvoir retourner leur résultat, normalement.

#### `Binome`

On peut aussi créer des binômes, donc des paires de nombres avec un opérateur.

**TODO: Finir d'analyser tout ça.**

## Problèmes

### 1) RegExp et `sqrt()`.

Ma RegExp pour les parenthèses peut ajouter du fil à tordre lorsqu'on deal avec sqrt. À voir.

### 2) Structure

No idea wtf I'm doing with that, mais j'vais faire mon possible lol.

## Expressions régulières

| Cas | Expression | Exemple |
| --- | ---------- | -------------------- |
| Première parenthèse capable d'être résolue | `[\(]{1}(?!\()([^\(]+[0-9])[\)]{1}` | [ici](https://regexr.com/3q43m) |
| __Nombre__ - Avec ou sans virgule | `([0-9]+(\.[0-9]+)?)` | [ici](https://regexr.com/3q450) |
| __Binôme__ - Exposant | `(.+)(\^)(.+)` | [ici](https://regexr.com/3q43v) |
| __Binôme__ - Division | `(.+)(\/)(.+)` | N/A |
| __Binôme__ - Multiplication | `(.+)(\*)(.+)` | N/A |
| __Binôme__ - Soustraction | `(.+)(\*)(.+)` | N/A |
| __Binôme__ - Addition | `(.+)(\*)(.+)` | N/A |
| __Spécial__ - Racine carré | Ajouter `(sqrt)?` au début du cas __"Première parenthèse [...]"__ et s'assurer de regarder dans le groupe de capture `$1` s'il n'est pas vide. | [ici]() |

**TODO: Finir le tableau d'expressions régulières.**