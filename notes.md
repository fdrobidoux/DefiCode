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

## Expressions régulières

| Cas | Expression | Exemple |
| --- | ---------- | -------------------- |
| Première parenthèse capable d'être résolue. | `/[\(]{1}(?!\()([^\(]+[0-9])[\)]{1}/g` | [ici](https://regexr.com/3q43m) |
| Binôme: Exposant. | `/([0-9]+[.]?[0-9]*)([\^])([0-9]+[.]?[0-9]*)/g` | [ici](https://regexr.com/3q43v) |
| Binôme: 


**TODO: Finir le tableau d'expressions régulières.**