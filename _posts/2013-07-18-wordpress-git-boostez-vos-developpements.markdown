---
layout: post
title: 'Wordpress & Git : boostez vos développements'
date: 2013-07-18
categories: blog
---
Depuis quelques mois maintenant, j'ai intégré [Git](http://en.wikipedia.org/wiki/Git) dans mon processus de développement Wordpress, après plusieurs hésitations et peur d'incompréhension. Les atouts de Git sont nombreux : sécurisation, versions, déploiement, ... ce qui en fait l'outil rêvé pour travailler en Webdesign et surtout avec Wordpress.

Travaillant pas mal sur des thèmes Wordpress, j'avais besoin d'un système me permettant de tester rapidement en live, mais aussi de pouvoir maintenir un historique de mes modifications de façon précise. J'aimais aussi beaucoup l'idée de proposer quelque chose librement, permettant ainsi d'avoir des retours constructifs sur un projet en cours (mon framework WordPress par exemple).

N'étant pas pousseur de pixels pour rien, j'avoue qu'apprivoiser la console n'est pas encore dans mes projets (vous savez ces choses que vous reportez sans cesse ? Voilà.), j'ai donc opté pour une solution logicielle avec une jolie interface visuelle : [SourceTree](http://www.sourcetreeapp.com/) (oui, j'ai un handicap grave m'empêchant de travailler avec des logiciels moches). Si dans un premier temps j'ai utilisé le bien connu [Github](http://www.github.com), entre autres pour son offre gratuite permettant de tester un petit peu Git, je me suis depuis orienté vers [Beanstalk](http://beanstalkapp.com), séduit par son système de déploiement automatique vers serveur (ok, il existe aussi [The Deploy Button](https://deploybutton.com/) mais à part m'afficher des erreurs je ne suis arrivé à rien avec).

Une fois installé, le processus est très simple : vous créez votre espace en ligne (appelé **Repository**), et vous le reliez à votre dossier de développement local. A chaque fois que vous modifierez un fichier, SourceTree le remarquera, vous permettant ensuite de pousser vos modifications vers votre repository en un clic, le tout avec un champ de commentaire vous permettant d'expliquer ce que vous venez de faire (toujours utile, vraiment.).

La manoeuvre vous offre énormément d'avantages : vous gardez une **version en ligne**, vous avez un **suivi continu des modifications** effectuées et surtout, à tout moment, vous pouvez décider de **revenir en arrière**. Git vous permet de plus de tester différentes voies à travers un système de branches (j'avoue ne pas trop en avoir besoin actuellement).

Maintenant, il faut aussi faire fonctionner votre installation Wordpress avec ce repository, car je doute que vous creviez d'envie de constamment tout réuploader par FTP. Et pour ce faire il existe une solution très simple, le plugin [Theme Updater](https://github.com/UCF/Theme-Updater). En ajoutant simplement une ligne à votre fichier *style.css* : *Github Theme URI : l'adresse de votre repository*, le plugin **détectera chaque mise à jour** et proposera d'updater votre thème via l'interface de Wordpress.

Il vous faudra juste veiller à **tagguer chaque update** que vous faites vers votre repository avec un numéro de version correspondant au numéro de version que vous inscrivez dans votre fichier **style.css** et hop le tour est joué ! (Dans le cas de Beanstalk, même pas besoin de se casser la tête, il synchronisera directement votre serveur avec votre repository !).

J'avoue regretter d'avoir mis autant de temps à m'y mettre quand je vois le temps que j'ai gagné et le nombre d'erreurs que j'ai pu éviter en intégrant ce système dans mon processus. Je ne peux que vous conseillez de vous dirigez vers Github et de lui donner une chance, **vous ne pouvez qu'y gagner**. Et si vous avez des questions, n'hésitez pas à me faire signe ;)
