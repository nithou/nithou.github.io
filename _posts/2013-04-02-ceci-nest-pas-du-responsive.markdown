---
layout: post
title: Ceci n'est pas du responsive
date: 2013-04-02
categories: blog
---
Lors de mes balades sur l'interoueb, j'ai souvent l'occasion de tomber sur des articles traitant des dernières "tendances" dans le domaine du Webdesign (oui, étrangement je ne me tiens pas trop au courant des tendances boucheries... quoi que, quand on parle d'Internet Explorer...). Certains sont très intéressants, d'autres, malheureusement, semblent complètement allumés ou se fourvoient complètement.

J'ai donc pu voir quelques articles parlant **des inconvénients du responsive**, mais avec des arguments malheureusement assez bancals. A mes yeux, le design responsive (s'adaptant à l'écran sans changer le contenu) constitue vraiment **l'avenir d'Internet**, face au changement de supports de lecture (smartphones, tablettes, ... on est très loin de l'ordinateur de bureau de Papa.). Revenons donc à nos moutons, afin de parler de quelques aberrations que j'ai pu lire

### Le design responsive est lourd à charger
Cette critique revient souvent quand le design fluide fonctionne en appliquant seulement une **valeur variable à la taille des images**, sans bouger leur poids. Hors, si le design doit être fluide, la notion de "responsive" vaut pour **toutes les données du site** : scripts, image, ... (Voir d'ailleurs [ce script](http://unstoppablerobotninja.com/entry/responsive-images/), ou [celui-ci](https://github.com/filamentgroup/Responsive-Images) très utile pour appeler des images de taille inférieure sur mobile). Une des règles principales du design responsive restant que la page doit se charger en **maximum 3 secondes**.

Dès lors, travailler sur un simple design fluide ne le fera pas, et toute donnée chargée doit être pensée dans un contexte d'usages multiples. Et beaucoup de techniques existent pour enlever la charge côté client et la reporter du côté serveur, permettant ainsi des chargements très rapides.

### Le design responsive ne respecte pas l'utilisateur mobile
Certains arguent que l'utilisateur mobile n'a **pas la même utilisation que l'utilisateur desktop** ET POURTANT les usages changent. Je vous invite à lire [ce billet très intéressant de Jim Ramsden](http://jimramsden.com/notes/no-more-mobile) qui explique justement qu'**il ne faut pas trop décider à la place de l'utilisateur** ce qu'il veut faire. Même si un utilisateur mobile voudra d'habitude consulter des informations très courtes, beaucoup d'utilisateurs se mettent à lire des romans entiers sur l'écran de leur téléphone. Pourquoi les en priver ? Pourquoi restreindre le contenu accessible à ces utilisateurs ? Pourquoi décider à leur place ?

### Compatibilité avec les anciens navigateurs
Là on va faire très simple. Est-ce qu'un utilisateur d'Internet Explorer 6-7 a quelque bénéfice à **réduire la fenêtre de son navigateur à la taille d'un smartphone** ? D'ailleurs en y réfléchissant, je pense qu'il n'y a que les webdesigners pour s'amuser à resizer constamment leur fenêtre de navigateur. Le design responsive s'adresse aux écrans plus petits : tablettes, smartphones, ... qui eux gèrent totalement ces mesures. Et au cas où, des scripts comme [respond.js](https://github.com/scottjehl/Respond) vous permettent d'utiliser ces méthodes quand même.
### Différencier design fluide et design responsive

A mes yeux, le nœud du problème se trouve dans le fait de confondre un design fluide (qui n'est qu'une étape) avec un design responsive, qui lui recouvre **tous les domaines de la création du site web** (et demande un gros investissement en développement d'ailleurs). Mais même si l'investissement de départ peut sembler **coûteux**, le design responsive offre l'avantage immense de ne devoir modifier son contenu qu'à un seul endroit, sans se prendre la tête.