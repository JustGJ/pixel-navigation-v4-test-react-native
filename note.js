navigation.navigate('Photo'); // navigate pour mettre Portfolio au dessus, et push pour rajouter une couche dans le stack
navigation.replace('Photo'); // On retire la pile Portfolio, que l'on remplace par Photo
navigation.goBack(); // retour vers la stack précédente (Portfolio)
navigation.popToTop('Home'); // go to home. Home se place au dessus de la pile (le reste des autre stack a été enlevé)
navigation.pop(); // Alternative a goBack

// navigation vers porfolio, avec passage d'item en props que l'on pourra récupérer dans composant enfant avec par exemple : navigation.getParam("name")
<Pressable onPress={() => navigation.navigate('Portfolio', item)}>....</Pressable>;

// Ou Navigation vers portfolio avec passage de props sélectionnés
<Pressable
    onPress={() =>
        navigation.navigate({
            routeName: 'Portfolio',
            params: {
                name: item.name,
                country: item.country,
                totalImg: item.totalImg,
            },
        })
    }>
    ....
</Pressable>;
