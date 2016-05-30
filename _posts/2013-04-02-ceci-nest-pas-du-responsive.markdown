---
layout: post
title: Ceci n'est pas du responsive
date: 2013-04-02 12:01:01.000000000 +02:00
type: post
published: true
status: publish
categories: blog
description: Lors de mes balades sur l'interoueb, j'ai souvent l'occasion de tomber sur
  des articles traitant des dernières "tendances" dans le domaine du Webdesign (oui,
  étrangement je ne me tiens pas trop au courant des tendances boucheries... quoi
  que, quand on parle d'Internet Explorer...). Certains sont très intéressants, d'autres,
  malheureusement, semblent complètement allumés ou se fourvoient complètement.
---
<p>Lors de mes balades sur l'interoueb, j'ai souvent l'occasion de tomber sur des articles traitant des dernières "tendances" dans le domaine du Webdesign (oui, étrangement je ne me tiens pas trop au courant des tendances boucheries... quoi que, quand on parle d'Internet Explorer...). Certains sont très intéressants, d'autres, malheureusement, semblent complètement allumés ou se fourvoient complètement.</p>
<p>J'ai donc pu voir quelques articles parlant <strong>des inconvénients du responsive</strong>, mais avec des arguments malheureusement assez bancals. A mes yeux, le design responsive (s'adaptant à l'écran sans changer le contenu) constitue vraiment <strong>l'avenir d'Internet</strong>, face au changement de supports de lecture (smartphones, tablettes, ... on est très loin de l'ordinateur de bureau de Papa.). Revenons donc à nos moutons, afin de parler de quelques aberrations que j'ai pu lire</p>
<h2>Le design responsive est lourd à charger</h2>
<p>Cette critique revient souvent quand le design fluide fonctionne en appliquant seulement une <strong>valeur variable à la taille des images</strong>, sans bouger leur poids. Hors, si le design doit être fluide, la notion de "responsive" vaut pour <strong>toutes les données du site</strong> : scripts, image, ... (Voir d'ailleurs <a title="http://unstoppablerobotninja.com/entry/responsive-images/" href="http://unstoppablerobotninja.com/entry/responsive-images/">ce script</a>, ou <a title="https://github.com/filamentgroup/Responsive-Images" href="https://github.com/filamentgroup/Responsive-Images">celui-ci</a> très utile pour appeler des images de taille inférieure sur mobile). Une des règles principales du design responsive restant que la page doit se charger en <strong>maximum 3 secondes</strong>. Dès lors, travailler sur un simple design fluide ne le fera pas, et toute donnée chargée doit être pensée dans un contexte d'usages multiples. Et beaucoup de techniques existent pour enlever la charge côté client et la reporter du côté serveur, permettant ainsi des chargements très rapides.</p>
<h2>Le design responsive ne respecte pas l'utilisateur mobile</h2>
<p>Certains arguent que l'utilisateur mobile n'a <strong>pas la même utilisation que l'utilisateur desktop</strong> ET POURTANT les usages changent. Je vous invite à lire <a title="http://jimramsden.com/notes/no-more-mobile" href="http://jimramsden.com/notes/no-more-mobile">ce billet très intéressant de Jim Ramsden</a> qui explique justement qu'<strong>il ne faut pas trop décider à la place de l'utilisateur</strong> ce qu'il veut faire. Même si un utilisateur mobile voudra d'habitude consulter des informations très courtes, beaucoup d'utilisateurs se mettent à lire des romans entiers sur l'écran de leur téléphone. Pourquoi les en priver ? Pourquoi restreindre le contenu accessible à ces utilisateurs ? Pourquoi décider à leur place ?</p>
<h2>Compatibilité avec les anciens navigateurs</h2>
<p>Là on va faire très simple. Est-ce qu'un utilisateur d'Internet Explorer 6-7 a quelque bénéfice à <strong>réduire la fenêtre de son navigateur à la taille d'un smartphone</strong> ? D'ailleurs en y réfléchissant, je pense qu'il n'y a que les webdesigners pour s'amuser à resizer constamment leur fenêtre de navigateur. Le design responsive s'adresse aux écrans plus petits : tablettes, smartphones, ... qui eux gèrent totalement ces mesures. Et au cas où, des scripts comme <a title="https://github.com/scottjehl/Respond" href="https://github.com/scottjehl/Respond">respond.js</a> vous permettent d'utiliser ces méthodes quand même.</p>
<h2>Différencier design fluide et design responsive</h2>
<p>A mes yeux, le nœud du problème se trouve dans le fait de confondre un design fluide (qui n'est qu'une étape) avec un design responsive, qui lui recouvre <strong>tous les domaines de la création du site web</strong> (et demande un gros investissement en développement d'ailleurs). Mais même si l'investissement de départ peut sembler <strong>coûteux</strong>, le design responsive offre l'avantage immense de ne devoir modifier son contenu qu'à un seul endroit, sans se prendre la tête.</p>
