# Les aperçus / résultats de recherche ne s'affichent pas

Si vous ne pouvez pas voir les images d'aperçu des fonds d'écran non installés dans Wallpaper Engine, cela signifie généralement qu'un pare-feu ou un logiciel de sécurité empêche Wallpaper Engine d'accéder aux serveurs d'images Steam.

## Testez votre connexion aux serveurs d'images Steam

Tout d'abord, essayez de vérifier si une connexion aux serveurs d'images Steam est possible depuis votre ordinateur. Ouvrez le lien suivant dans votre navigateur web pour tester votre connexion :

* [**CLIQUEZ ICI POUR TESTER LES SERVEURS D'IMAGE STEAM**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

Lorsque vous cliquez sur le lien ci-dessus, vous devriez voir un message qui indique **OK** et affiche une **coche verte**.

### Je vois le message OK

Si vous voyez le message **OK** en cliquant sur le lien de test ci-dessus :

* Cela signifie que seul Wallpaper Engine est bloqué par un logiciel de sécurité sur votre ordinateur. Configurez tout antivirus, pare-feu ou accélérateur de réseau pour qu'il ignore Wallpaper Engine, et plus particulièrement le processus **ui32.exe** qui appartient à Wallpaper Engine.

### Je ne vois PAS le message OK

Si vous n'avez **pas** vu le message **OK** en cliquant sur le lien de test ci-dessus, cela signifie que tout votre ordinateur ou même tout votre réseau n'est pas en mesure de charger les images des serveurs d'images Steam. Les raisons possibles de ce problème sont les suivantes :

* Un antivirus, un pare-feu ou un accélérateur de réseau bloque entièrement la connexion aux serveurs d'images Steam pour toutes les applications de votre ordinateur.
* Le routeur de votre réseau est mal configuré. Examinez de plus près les paramètres du pare-feu de votre routeur et ses autres paramètres avancés qui peuvent jouer un rôle ici.
    * Vous pouvez facilement tester si votre routeur est la cause du problème, en connectant votre ordinateur à un hotspot wifi via votre smartphone. Si vous commencez à voir des images de prévisualisation alors que vous êtes connecté à un hotspot wifi mobile, le problème se situe certainement au niveau de votre routeur réseau ou du réseau de votre fournisseur d'accès à Internet.
    * Il se peut également que votre fournisseur d'accès à Internet bloque les serveurs d'images Steam ou qu'il y ait un problème de connexion temporaire. C'est très rare mais cela peut arriver, réessayez plus tard.