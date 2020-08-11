# Limiter les visualiseurs audio aux lecteurs de musique

À cause du fonctionnement audio de Windows, Wallpaper Engine ne peut pas lui-même limiter les visualiseurs audio du lecteur de musique de votre choix. Cependant, vous pouvez utiliser un logiciel tiers pour créer un *faux* appareil audio pour y parvenir. Ce guide vous décrira une façon de créer ce genre de faux appareil audio et comment configurer Windows 10 et Wallpaper Engine pour que cette installation fonctionne correctement.

N'oubliez pas que nous ne prenons en charge aucun faux appareil audio et que nous ne pouvons pas vous garantir que cela fonctionnera. Ceci est une installation très avancée qui va bien au-delà de ce qu'offre Wallpaper Engine. Nous ne proposons ce guide que pour aider les utilisateurs qui veulent pousser la personnalisation de leur système encore plus loin.

::: warning
Ce guide ne fonctionne que sur les versions mises à jour de Windows 10. Des versions Windows plus anciennes ne comportent pas toutes les fonctionnalités nécessaires pour suivre ce guide.
:::

### Installer un faux appareil audio

Nous vous conseillons d'utiliser l'**appareil audio virtuel VB-CABLE** que vous pouvez télécharger sur le site suivant :

* [Téléchargement de l'appareil audio virtuel](https://www.vb-audio.com/Cable/)

Téléchargez et extrayez le fichier, puis installer l'appareil audio 32-Bit ou 64-Bit selon votre version de Windows 10 en utilisant **VBCABLE_Setup.exe** ou **VBCABLE_Setup_x64.exe**. N'oubliez pas d'ouvrir le fichier de lancement en utilisant les droits administrateurs en faisant un clic droit dessus et en sélectionnant *Exécuter en tant qu'administrateur*. Suivez les instructions d'installation et assurez-vous que l'appareil audio ait bien été installé.

### Configurer Windows et Wallpaper Engine

La vidéo ci-dessous décrit toutes les étapes du début à la fin sur une version de Windows 10 (interface en anglais). Consultez-la si vous avez besoin d'aide avec les instructions ci-dessous.

1. Lancez de la musique grâce au logiciel que vous voudrez utiliser plus tard avec Wallpaper Engine
2. Faites un clic droit sur l'icône d'audio près de l'horloge dans la barre des tâches Windows puis sélectionnez **Ouvrir les paramètres de son**.
3. Défilez jusqu'en bas de la page qui s'ouvre et cliquez sur **Préférences de volumes des applications et des appareils**.
4. Une liste de toutes les applications qui émettent du son s'affiche. Trouvez votre lecteur de musique et dans la colonne **Sortie**, changez l'option de **Par défaut** à **CABLE Input (VB-Audio Virtual Cable)**. Le son de votre lecteur audio devrait immédiatement se couper. C'est normal.
5. Revenez sur la page principale des paramètres de son Windows, et dans le coin supérieur droit, sélectionnez **Panneau de configuration Son**.
6. Une petite fenêtre apparaîtra. Sélectionnez l'onglet **Enregistrement**, puis faites un clic droit sur l'appareil audio **CABLE Output** et sélectionnez **Propriétés**.
7. Une autre fenêtre s'ouvre. Cliquez sur l'onglet **Écouter** et cochez **Écouter ce périphérique**. Cliquez sur **Appliquer** puis **OK** et la musique de votre lecteur de musique devrait revenir.
8. Windows est désormais correctement configuré. Ouvrez les **paramètres de Wallpaper Engin** et dans l'onglet **Général**, changez l'**appareil d'enregistrement audio** par **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine devrait désormais réagir à la musique qui vient de votre lecteur de musique, mais ignorera toute autre application de votre ordinateur.

*Vidéo reproduisant toutes les étapes ci-dessus :*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Votre explorateur ne prend pas en charge le filtre vidéo.
</video>
