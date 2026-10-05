# Audit conformité, accessibilité et données — Le Sanboulou (5 octobre 2026)

> Je ne suis pas avocat : ce document est un audit technique et une base de rédaction. Faites relire les pages légales par un professionnel (avocat, CCI de l'Hérault, ou votre expert-comptable) avant mise en ligne.

## 1. Verdicts rapides

| Question | Réponse | Pourquoi |
|---|---|---|
| Bandeau de consentement aux cookies ? | **Non** | Le site ne dépose aucun cookie ni stockage local. Le consentement n'est exigé que pour les traceurs non indispensables (art. 82 loi Informatique et Libertés, CNIL). |
| Page de remboursement ? | **Non** | Aucune vente, aucun paiement, aucun acompte en ligne. Elle deviendrait utile si vous ajoutez des paiements (acomptes, bons cadeaux, vente à emporter en ligne). |
| Formulaire / case de consentement ? | **Non** | Il n'y a aucun formulaire : la réservation se fait par téléphone. |
| CGV (conditions de vente) ? | **Non** | Pas de vente en ligne. J'ai fait des « conditions d'utilisation » du site (facultatives mais utiles). |
| Mentions légales ? | **Oui, obligatoires** | Tout site professionnel doit identifier son éditeur et son hébergeur (loi LCEN, art. 6-III). |
| Politique de confidentialité ? | **Recommandée** | L'adresse IP des visiteurs est traitée par l'hébergeur et les réservations téléphoniques contiennent des données personnelles : information prévue par l'art. 13 du RGPD. |
| Médiateur de la consommation ? | **Oui, à afficher sur le site** | Tout professionnel vendant à des consommateurs doit désigner un médiateur référencé et l'indiquer sur son site (art. L.612-1 et suivants du Code de la consommation). Amende administrative possible en cas d'oubli. |
| Accessibilité (RGAA / loi européenne) ? | **Pas d'obligation formelle** à ma connaissance | RGAA : organismes publics et entreprises > 250 M€. Loi issue de la directive 2019/882 (depuis le 28/06/2025) : commerce en ligne, et microentreprises de services exemptées (< 10 salariés et < 2 M€). Un site vitrine sans achat n'est pas dans le champ. J'ai quand même corrigé les points essentiels. |

## 2. Inventaire des données traquées

**Avant (code d'origine)**
- Appels à `fonts.googleapis.com` et `fonts.gstatic.com` (Google Fonts) : chaque visiteur transmettait son adresse IP à Google. Un tribunal allemand (Munich, 2022) a sanctionné un site pour cela ; ce n'est pas du droit français, mais c'est un risque réel et évitable.
- Aucun cookie, aucun stockage navigateur, aucun outil de statistiques, aucune publicité, aucun pixel, aucune carte intégrée, aucun formulaire, aucun script tiers.

**Après**
- Plus aucun appel externe : polices servies par votre propre site (voir §7).
- Test automatisé effectué : 0 cookie, 0 stockage local, 0 requête vers un autre domaine, sur les 5 pages.
- Reste uniquement : journaux de votre hébergeur (adresse IP, date, pages) et vos notes de réservation téléphonique. Décrits dans la politique de confidentialité.

## 3. Corrections de contenu pour éviter un risque

- **Avis Google** : j'avais raccourci certains avis sans le signaler. Les extraits sont maintenant fidèles, avec « […] » aux coupures, noms abrégés (prénom + initiale) et date de visite plutôt que « il y a 2 mois ». Reproduire des avis publiés sur Google reste une zone grise (droit d'auteur de leurs auteurs, conditions de Google) : le plus sûr est de demander l'accord de chaque auteur, ou de ne garder qu'un lien vers la fiche Google.
- **Horaires** : le site affichait 19h–22h tous les jours ; votre flyer indique 19h–21h et pas de dîner le mardi, et une fiche tierce (Foodle) indique les mêmes horaires que le flyer. J'ai aligné le site sur le flyer. **Confirmez-les.**
- **Carte** : ajout d'une note (carte indicative, prix affichés au restaurant taxes et service compris, allergènes sur demande). La loi impose d'informer sur les 14 allergènes ; la mention « maison » (ex. « poulpe à la plancha maison ») doit correspondre à du fait maison au sens réglementaire.
- **Prix** : la carte du site n'en affiche pas. Si vous les ajoutez, indiquez-les TTC.

## 4. Accessibilité (corrections apportées)

Lien d'évitement « Aller au contenu », menu mobile annoncé aux lecteurs d'écran (aria-expanded, Échap pour fermer), onglets de la carte utilisables au clavier (flèches, Début, Fin), titres hiérarchisés (h1 > h2 > h3), focus clavier visible, étoiles annoncées « Note de 5 sur 5 », flèche décorative masquée, adresse en `<address>`, mouvement réduit respecté (prefers-reduced-motion), cibles tactiles de 44 px, titres longs qui ne débordent plus en mobile.

**Texte alternatif** : l'unique image de contenu (façade) a un alt descriptif. L'image du bandeau d'accueil est la même photo, en arrière-plan CSS : décorative, donc sans alt (annoncer deux fois la même photo gênerait les lecteurs d'écran).

## 5. Lisible par les agents IA et les moteurs

HTML sémantique, données structurées schema.org `Restaurant` (adresse, téléphone, horaires, cuisine, équipements), balises description et Open Graph, `robots.txt` ouvert à tous les robots, `llms.txt` résumant le restaurant. Je n'ai mis ni note moyenne ni nombre d'avis dans les données structurées : je n'ai pas de valeur vérifiée.

## 6. Contrastes (WCAG 2.1 AA)

| Élément | Avant | Après | Seuil | Résultat |
|---|---|---|---|---|
| Texte courant / crème | 13.03 | 13.03 | 4.5 | OK |
| Logo, survol nav, onglet survol / crème | 3.20 | 5.95 | 4.5 | OK |
| Étiquettes de section / crème | 4.09 | 5.95 | 4.5 | OK |
| Étiquettes de section / beige | 3.58 | 5.21 | 4.5 | OK |
| Titres en couleur (grand texte) / crème | 3.50 | 5.95 | 3 | OK |
| Titres en couleur (grand texte) / beige | 3.07 | 5.21 | 3 | OK |
| Titre « méditerranéennes » (sable) / bleu | 2.87 | 6.07 | 3 | OK |
| Numéro de téléphone (grand) / beige | 3.47 | 5.21 | 3 | OK |
| Étoiles / crème | 3.20 | 5.95 | 3 | OK |
| « Mercredi — Fermé » / beige | 2.87 | 4.86 | 4.5 | OK |
| « UNE TABLE ? » / bloc sable | 1.00 | 7.86 | 4.5 | OK |
| Bouton principal / sable | 8.07 | 8.07 | 4.5 | OK |
| Texte gris / crème | 5.55 | 5.55 | 4.5 | OK |
| Texte gris / beige | 4.86 | 4.86 | 4.5 | OK |
| Blanc / bleu | 11.42 | 11.42 | 4.5 | OK |
| Texte des cartes / bleu | 7.40 | 7.40 | 4.5 | OK |
| Pied de page / bleu nuit | 9.92 | 9.92 | 4.5 | OK |
| Liens du pied de page (sable) / bleu nuit | 8.28 | 8.28 | 4.5 | OK |
| Logo du pied de page (sable) / bleu nuit | 4.30 | 8.28 | 3 | OK |
| Blanc / bouton foncé | 14.79 | 14.79 | 4.5 | OK |
| Liens des pages légales / crème | — | 7.74 | 4.5 | OK |
| Texte « à compléter » / surlignage jaune | — | 12.96 | 4.5 | OK |

Bandeau d'accueil (texte blanc sur photo) : le voile sombre a été renforcé. Dans le pire cas (zone de la photo presque blanche), le contraste du texte blanc est d'environ 5,2:1. Je n'ai pas accès à votre fichier `sanboulou.jpg` d'origine : vérifiez à l'œil, surtout sur mobile.

## 7. À faire de votre côté (rien de tout cela ne peut être deviné)

1. **Remplir les zones jaunes « À COMPLÉTER / À CONFIRMER »** dans mentions-legales.html (éditeur, SIREN/RCS, directeur de la publication, e-mail, hébergeur, médiateur) et confidentialite.html (durées de conservation, pratique de réservation, e-mail). Cherchez le texte « À COMPLÉTER » et « À CONFIRMER ». Je n'ai pas pu identifier votre société avec certitude, donc je n'ai rien inventé.
2. **Choisir un médiateur de la consommation** référencé (liste officielle de la CECMC sur economie.gouv.fr) et l'indiquer dans les mentions légales.
3. **Héberger les polices** : télécharger au format woff2, sous-ensemble « latin », Cormorant Garamond (500, 600, 700) et Montserrat (400, 500, 600, 700) depuis fonts.google.com ou google-webfonts-helper, les renommer `cormorant-garamond-500.woff2` … `montserrat-700.woff2` et les placer dans `assets/fonts/`. Tant que ce n'est pas fait, le navigateur utilise une police de secours (le site reste lisible mais l'aspect change).
4. **Vérifier l'hébergeur** (j'ai supposé GitHub Pages d'après vos captures) et que le site est en HTTPS.
5. **Tester le site en ligne** : navigateur > outils de développement > onglet Réseau (aucune requête vers un autre domaine) et Application > Cookies (vide).
6. Si vous ajoutez plus tard une réservation en ligne, des statistiques, une carte Google Maps ou des paiements : revenir me voir, il faudra un bandeau de consentement ou de nouvelles pages (CGV, remboursement).
7. Ajouter un `sitemap.xml` et une balise canonical quand l'adresse définitive du site est connue.
