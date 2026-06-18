// =========================================================================
// DONNÉES DE BASE (GYM DATA) - LISTE DES ÉLÉMENTS INDIVIDUELS
// =========================================================================
const gymData = [
     // --- SOL ---
    { 
       id: "sol_rouleaux", agre: "SOL", action: "ROULER", nom: "ROULEAUX", difficulte: "⭐", mode_enfant: "ours",
       media: { face: "SOL - ROULER - ROULEAUX - FACE.webp", profil: "SOL - ROULER - ROULEAUX - PROFIL.webp" }, 
       criteres_realisation: ["Corps parfaitement gainé et tendu", "Bras aux oreilles", "Pointes tendues"], 
       criteres_reussite: ["Rouler sans dévier de la ligne droite", "Ne pas plier les jambes ou les bras"] },
    {
        id: "sol_culbuto", agre: "SOL", action: "ROULER", nom: "CULBUTO", difficulte: "⭐", mode_enfant: "ours",
        media: { face: "SOL - ROULER - CULBUTO - FACE.webp", profil: "SOL - ROULER - CULBUTO - PROFIL.webp" },
        criteres_realisation: ["Dos bien rond", "Menton collé à la poitrine", "Attraper fermement les genoux"],
        criteres_reussite: ["Revenir en position assise", "Ne pas lâcher les jambes", "Rester en boule"],
        securite: "S'assurer que l'espace derrière l'élève est dégagé.",
            erreurs: [
              { titre: "Pas de retour", indicateur: "Reste bloqué sur le dos", correction: "Prendre plus d'élan et grouper fort dès le départ", media: { face: "SOL - ROULER - CULBUTO - FACE - ERREUR - CULBUTO INCOMPLET (PAS DE RETOUR).webp" }}] },
    {
        id: "sol_roulade_av", agre: "SOL", action: "ROULER", nom: "ROULADE AVANT", difficulte: "⭐⭐", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL.webp", profil: "SOL - ROULER - ROULADE AVANT - FACE.webp" },
        criteres_realisation: ["Mains à plat largeur épaules", "Regard vers le nombril", "Pousser sur les jambes en pliant les bras"],
        criteres_reussite: ["Se relever sans l'aide des mains", "Rester dans l'axe du tapis", "Finir debout"],
        securite: "Veiller impérativement à ce que le menton soit collé à la poitrine pour protéger les cervicales. Ne pas faire reposer le poids sur la tête.",
          etapes: [
            { nom: "Départ sur bloc", media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 1.webp", profil: "SOL - ROULER - ROULADE AVANT - FACE - ETAPE - 1.webp" }},
            { nom: "Sur pente (arr. assis)", media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp", profil: "SOL - ROULER - ROULADE AVANT - FACE - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp" }},
            { nom: "Sur pente (arr. debout)", media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 3 - ROULADE AVANT SUR PENTE ARRIVEE DEBOUT.webp", profil: "SOL - ROULER - ROULADE AVANT - FACE - ETAPE - 3 - ROULADE AVANT SUR PENTE ARRIVEE DEBOUT.webp" }},
            { nom: "Au sol (arr. assis)", media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 4 - ROULADE AVANT ARRIVEE ASSIS.webp", profil: "SOL - ROULER - ROULADE AVANT - FACE - ETAPE - 4 - ROULADE AVANT ARRIVEE ASSIS.webp" }},
        ],
           erreurs: [
            { titre: "Désaxée", indicateur: "Roule sur le côté", correction: "Laisser les deux mains à plat par terre et ne pas tourner la tête", media: { face: "SOL - ROULER - ROULADE AVANT - FACE - ERREUR - ROULADE AVANT DESAXEE.webp", profil: "SOL - ROULER - ROULADE AVANT - PROFIL - ERREUR - ROULADE AVANT DESAXEE.webp" }}
        ]
    },
    {
        id: "sol_roulade_ar", agre: "SOL", action: "ROULER", nom: "ROULADE ARRIERE", difficulte: "⭐⭐⭐", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL.webp", profil: "SOL - ROULER - ROULADE ARRIERE - FACE.webp" },
        criteres_realisation: ["Mains à côté des oreilles, paumes vers le plafond", "Garder le menton à la poitrine sans mettre la tête sur le côté", "Pousser fort sur les mains pour se relever"],
        criteres_reussite: ["Rouler droit", "Arriver sur les pieds", "Rester groupé"],
        securite: "L'enseignant peut accompagner la rotation au niveau des hanches si l'élève manque de vitesse pour passer la tête.",
         etapes: [
            { nom: "Culbuto", media: { face: "SOL - ROULER - CULBUTO - PROFIL.webp", profil: "SOL - ROULER - CULBUTO - FACE.webp" }},
            { nom: "Sur pente (arr. genoux)", media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ETAPE - 2 - ROULADE ARRIERE SUR PENTE ARRIVEE GENOUX.webp", profil: "SOL - ROULER - ROULADE ARRIERE - FACE - ETAPE - 2 - ROULADE ARRIERE SUR PENTE ARRIVEE GENOUX.webp" }},
            { nom: "Sur pente (simple)", media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ETAPE - 3 - ROULADE ARRIERE SUR PENTE.webp", profil: "SOL - ROULER - ROULADE ARRIERE - FACE - ETAPE - 3 - ROULADE ARRIERE SUR PENTE.webp"}}, 
            { nom: "Au sol (arr. genoux)", media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ETAPE - 4 - ROULADE ARRIERE AU SOL ARRIVEE GENOUX.webp", profil: "SOL - ROULER - ROULADE ARRIERE - FACE - ETAPE - 4 - ROULADE ARRIERE AU SOL ARRIVEE GENOUX.webp" }}
        ],
          erreurs: [
            { titre: "Désaxée", indicateur: "Part de travers", correction: "Placer les mains symétriquement, garder les coudes serrés et pousser ensemble sur les mains", media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ERREUR - ROULADE ARRIERE DESAXEE.webp", profil: "SOL - ROULER - ROULADE ARRIERE - FACE - ERREUR - ROULADE ARRIERE DESAXEE.webp" }},
            { titre: "Tête relevée", indicateur: "Blocage de la nuque", correction: "Bien coller le menton à la poitrine pour regarder le nombril", media: { profil: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ERREUR - TETE RELEVEE MANQUE D ENROULEMENT.webp" }}
        ]
    },
    {
      id: "sol_saut_cerceaux", agre: "SOL", action: "SAUTER", nom: "SAUTS DANS CERCEAUX", difficulte: "⭐", mode_enfant: "lapin",
      media: { face: "SOL - SAUTER - SAUTS PIEDS JOINTS DANS CERCEAUX - FACE.webp", profil: "SOL - SAUTER - SAUTS PIEDS JOINTS DANS CERCEAUX - PROFIL.webp" }, 
      criteres_realisation: ["Pieds joints", "Utiliser les bras pour s'équilibrer"], 
      criteres_reussite: ["Atterrir précisément dans chaque cerceau", "Enchainer les sauts, Rebond dynamique (ne pas s'arrêter)"] },
    { 
      id: "sol_saut_extension", agre: "SOL", action: "SAUTER", nom: "SAUT EXTENSION", difficulte: "⭐", mode_enfant: "lapin",
      media: { face: "SOL - SAUTER - SAUT EXTENSION - FACE.webp", profil: "SOL - SAUTER - SAUT EXTENSION - PROFIL.webp" }, 
      criteres_realisation: ["Pousser fort sur les jambes", "Grandir le corps au maximum"], 
      criteres_reussite: ["Corps aligné et tendu en l'air", "Bras aux oreilles lors du vol"],
      securite: "Prévoir des tapis de réception adaptés et ne pas se gêner mutuellement." },
   { 
      id: "sol_saut_extension_bas", agre: "SOL", action: "SAUTER", nom: "EXTENSION CONTRE BAS", difficulte: "⭐", mode_enfant: "lapin",
      media: { face: "SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - FACE.webp", profil: "SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp" }, 
      criteres_realisation: ["Regarder devant soi", "Engager les bras vers le haut"], 
      criteres_reussite: ["Amortir la réception (flexion des jambes)", "Rester immobile 2 secondes à l'arrivée"],
      securite: "Apprendre aux élèves à bien fléchir les genoux à la réception pour amortir le choc." },
    {
      id: "sol_saut_lapin_haut", agre: "SOL", action: "SAUTER", nom: "SAUT DE LAPIN (HAUT)", difficulte: "⭐", mode_enfant: "lapin",
      media: { face: "SOL - SAUTER - SAUT DE LAPIN EN CONTRE HAUT - FACE.webp", profil: "SOL - SAUTER - SAUT DE LAPIN EN CONTRE HAUT - PROFIL.webp" }, 
      criteres_realisation: ["Regarder ses mains", "Impulsion simultanée des deux pieds"], 
      criteres_reussite: ["Monter les fesses au-dessus des épaules", "Réception équilibrée sur le bloc"] },
   
    {
        id: "sol_saut_demi", agre: "SOL", action: "SAUTER", nom: "SAUT DEMI TOUR", difficulte: "⭐⭐", mode_enfant: "lapin",
        media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE.webp", profil: "SOL - SAUTER - SAUT DEMI TOUR - PROFIL.webp" },
        criteres_realisation: ["S'aider des bras pour tourner", "Rotation du corps gainé autour de l'axe"],
        criteres_reussite: ["Rotation exacte de 180°", "Réception équilibrée, jambes serrées, sans sursaut ni pas de côté"],
        etapes: [
            { nom: "Saut extension", media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE - ETAPE - 1 - SAUT EXTENSION.webp", profil: "SOL - SAUTER - SAUT DEMI TOUR - PROFIL - ETAPE - 1 - SAUT EXTENSION.webp" }},
            { nom: "Quart de tour", media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE - ETAPE - 2 - SAUT QUART DE TOUR.webp", profil: "SOL - SAUTER - SAUT DEMI TOUR - PROFIL - ETAPE - 2 - SAUT QUART DE TOUR.webp" }}
        ],
        erreurs: [{ titre: "Déséquilibre", indicateur: "Déséquilibre à la réception", correction: "Fixer un point du regard à l'arrivée", media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE - ERREUR - DESEQUILIBRE A LA RECEPTION.webp", profil: "SOL - SAUTER - SAUT DEMI TOUR - PROFIL - ERREUR - DESEQUILIBRE A LA RECEPTION.webp" }}]
    },  
    { 
      id: "sol_saut_chat", agre: "SOL", action: "SAUTER", nom: "SAUT DE CHAT", difficulte: "⭐⭐", mode_enfant: "lapin",
      media: { face: "SOL - SAUTER - SAUT DE CHAT - FACE.webp", profil: "SOL - SAUTER - SAUT DE CHAT - PROFIL.webp" }, 
      criteres_realisation: ["Sauter pieds décalés", "Monter un genou après l'autre", "Se réceptionner sans bruit"], 
      criteres_reussite: ["Les 2 genoux passe au dessus du niveau du bassin", "Réception stable sans bouger les pieds"] },
    {
      id: "sol_saut_groupe", agre: "SOL", action: "SAUTER", nom: "SAUT GROUPE", difficulte: "⭐⭐", mode_enfant: "lapin",
      media: { face: "SOL - SAUTER - SAUT GROUPE - FACE.webp", profil: "SOL - SAUTER - SAUT GROUPE - PROFIL.webp" },
      criteres_realisation: ["Monter les genoux à la poitrine", "En l'air, amener les bras vers les genoux pour les redresser à la réception", "Garder le dos droit (ne pas se pencher)"],
      criteres_reussite: ["Genoux au-dessus du bassin en l'air", "Redéplier les jambes pour la réception"],
      etapes: [
            { nom: "Groupé au sol", media: { face: "SOL - SAUTER - SAUT GROUPE - PROFIL - ETAPE - 1 - GROUPE AU SOL.webp", profil: "SOL - SAUTER - SAUT GROUPE - FACE - ETAPE - 1 - GROUPE AU SOL.webp" }},
            { nom: "Saut extension", media: { face: "SOL - SAUTER - SAUT GROUPE - FACE - ETAPE - 2 - SAUT EXTENSION.webp", profil: "SOL - SAUTER - SAUT GROUPE - PROFIL - ETAPE - 2 - SAUT EXTENSION.webp" }}  ]
    },
   
   { 
      id: "sol_araignee", agre: "SOL", action: "SE DEPLACER", nom: "EN ARAIGNEE", difficulte: "⭐", mode_enfant: "chat",
      media: { face: "SOL - SE DEPLACER - EN ARAIGNEE - FACE.webp", profil: "SOL - SE DEPLACER - EN ARAIGNEE - PROFIL.webp" }, 
      criteres_realisation: ["Ventre vers le plafond", "Bassin maintenu haut"], 
      criteres_reussite: ["Avancer sans poser les fesses", "Vitesse régulière"], 
      flashcard: "FLASHCARD - ARAIGNEE.jpg" },
      
    { 
      id: "sol_chat", agre: "SOL", action: "SE DEPLACER", nom: "EN CHAT", difficulte: "⭐", mode_enfant: "chat",
      media: { face: "SOL - SE DEPLACER - EN CHAT - FACE.webp", profil: "SOL - SE DEPLACER - EN CHAT - PROFIL.webp" }, 
      criteres_realisation: ["Quadrupédie souple", "Pas de bruit lors des appuis"], 
      criteres_reussite: ["Dos plat pendant tout le trajet", "Mouvement fluide"], 
      flashcard: "FLASHCARD - CHAT.jpg" },
      
    { 
      id: "sol_chenille", agre: "SOL", action: "SE DEPLACER", nom: "EN CHENILLE", difficulte: "⭐⭐", mode_enfant: "chat",
      media: { face: "SOL - SE DEPLACER - EN CHENILLE - FACE.webp", profil: "SOL - SE DEPLACER - EN CHENILLE - PROFIL.webp" }, 
      criteres_realisation: ["Avancer les mains au maximum", "Garder les jambes tendues"], 
      criteres_reussite: ["Décomposition mains-puis-pieds respectée", "Bassin monte haut"], 
      flashcard: "FLASHCARD - CHENILLE.jpg" },
      
    { 
      id: "sol_elephant", agre: "SOL", action: "SE DEPLACER", nom: "EN ELEPHANT", difficulte: "⭐", mode_enfant: "chat",
      media: { face: "SOL - SE DEPLACER - EN ELEPHANT - FACE.webp", profil: "SOL - SE DEPLACER - EN ELEPHANT - PROFIL.webp" }, 
      criteres_realisation: ["Jambes et bras tendus", "Pas lourds et assurés"], 
      criteres_reussite: ["Garder les fesses hautes", "Appuis solides"], 
      flashcard: "FLASHCARD - ELEPHANT.jpg" },
      
    { 
      id: "sol_girafe", agre: "SOL", action: "SE DEPLACER", nom: "EN GIRAFE", difficulte: "⭐", mode_enfant: "chat",
      media: { face: "SOL - SE DEPLACER - EN GIRAFE - FACE.webp", profil: "SOL - SE DEPLACER - EN GIRAFE - PROFIL.webp" }, 
      criteres_realisation: ["Sur la pointe des pieds uniquement", "Bras tendus vers le ciel"], 
      criteres_reussite: ["Ne jamais poser les talons", "Corps le plus grand possible"], 
      flashcard: "FLASHCARD - GIRAFE.jpg" },
      
    { 
      id: "sol_kangourou", agre: "SOL", action: "SE DEPLACER", nom: "EN KANGOUROU", difficulte: "⭐", mode_enfant: "chat",
      media: { face: "SOL - SE DEPLACER - EN KANGOUROU - FACE.webp", profil: "SOL - SE DEPLACER - EN KANGOUROU - PROFIL.webp" }, 
      criteres_realisation: ["Sauts pieds joints", "Mains contre la poitrine"], 
      criteres_reussite: ["Sauts réguliers et rythmés", "Réception sur l'avant du pied"], 
      flashcard: "FLASHCARD - KANGOUROU.jpg" },
      
    { 
        id: "sol_lapin", agre: "SOL", action: "SE DEPLACER", nom: "EN LAPIN", difficulte: "⭐", mode_enfant: "chat",
        media: { face: "SOL - SE DEPLACER - EN LAPIN - FACE.webp", profil: "SOL - SE DEPLACER - EN LAPIN - PROFIL.webp" }, 
        criteres_realisation: ["Mains posées loin devant", "Pieds qui rattrapent les mains"], 
        criteres_reussite: ["Les mains se posent en même temps avant que les pieds ne bougent", "Les mains avancent puis les pieds, ene pas sauter avant que les mains ne se posent"], flashcard: "FLASHCARD - LAPIN.jpg" },
    {
        id: "sol_phoque", agre: "SOL", action: "SE DEPLACER", nom: "EN PHOQUE", difficulte: "⭐", mode_enfant: "chat",
        media: { face: "SOL - SE DEPLACER - EN PHOQUE - FACE.webp", profil: "SOL - SE DEPLACER - EN PHOQUE - PROFIL.webp" }, 
        criteres_realisation: ["Tirer uniquement avec les bras", "Jambes relâchées"], 
        criteres_reussite: ["Le bassin reste au sol", "Avancer de manière continue"], flashcard: "FLASHCARD - PHOQUE.jpg" },

    {
        id: "sol_chandelle", agre: "SOL", action: "S EQUILIBRER", nom: "CHANDELLE", difficulte: "⭐⭐", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - CHANDELLE - FACE.webp", profil: "SOL - S EQUILIBRER - CHANDELLE - PROFIL.webp" },
        criteres_realisation: ["Alignement épaules-bassin-pieds", "Serrer les fessiers"],
        criteres_reussite: ["Tenir la position immobile 3 secondes", "Pointes de pieds vers le plafond"],
        etapes: [{ nom: "Dos/Jambes pliées", media: { face: "SOL - S EQUILIBRER - CHANDELLE - FACE - ETAPE - 1 - SE METTRE SUR LE DOS ET JAMBES PLIEES.webp", profil: "SOL - S EQUILIBRER - CHANDELLE - PROFIL - ETAPE - 1 - SE METTRE SUR LE DOS ET JAMBES PLIEES.webp" }}] },
    
    { 
      id: "sol_cuillere", agre: "SOL", action: "S EQUILIBRER", nom: "CUILLERE", difficulte: "⭐⭐", mode_enfant: "flamant",
      media: { face: "SOL - S EQUILIBRER - CUILLERE - FACE.webp", profil: "SOL - S EQUILIBRER - CUILLERE - PROFIL.webp" },
      criteres_realisation: ["Jambes tendues derrière", "Bras tendus devant"],
      criteres_reussite: ["Jambes et épaules décollées", "Tenir sur le nombril 3 secondes"] },
   
   { 
      id: "sol_eq_1pied", agre: "SOL", action: "S EQUILIBRER", nom: "EQUILIBRE 1 PIED", difficulte: "⭐", mode_enfant: "flamant",
      media: { face: "SOL - S EQUILIBRER - EQUILIBRE 1 PIED - FACE.webp", profil: "SOL - S EQUILIBRER - EQUILIBRE 1 PIED - PROFIL.webp" }, 
      criteres_realisation: ["Jambe d'appui tendue", "Fixer un point devant soi"], 
      criteres_reussite: ["Immobilité totale", "Tenir sans poser le deuxième pied"] },
   
   {
        id: "sol_eq_fessier", agre: "SOL", action: "S EQUILIBRER", nom: "EQUILIBRE FESSIER", difficulte: "⭐⭐", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - EQUILIBRE FESSIER - PROFIL.webp", profil: "SOL - S EQUILIBRER - EQUILIBRE FESSIER - FACE.webp" },
        criteres_realisation: ["Dos plat et solide", "Bras tendus sur le côté pour l'équilibre", "Jambes tendues devant"],
        criteres_reussite: ["Seules les fesses touchent le sol", "Tenir immobile 3 secondes"],
        etapes: [
            { nom: "Jambes pliées", media: { face: "SOL - S EQUILIBRER - EQUILIBRE FESSIER - PROFIL - ETAPE - 1 - EQUILBRE FESSIER JAMBES PLIES AVEC LES BRAS.webp", profil: "SOL - S EQUILIBRER - EQUILIBRE FESSIER - FACE - ETAPE - 1 - EQUILBRE FESSIER JAMBES PLIES AVEC LES BRAS.webp" }},
            { nom: "Jambes tendues", media: { face: "SOL - S EQUILIBRER - EQUILIBRE FESSIER - PROFIL - ETAPE - 2 - EQUILBRE FESSIER JAMBES TENDUES AVEC LES BRAS.webp", profil: "SOL - S EQUILIBRER - EQUILIBRE FESSIER - FACE - ETAPE - 2 - EQUILBRE FESSIER JAMBES TENDUES AVEC LES BRAS.webp" }} ]
    },
    {
        id: "sol_planche", agre: "SOL", action: "S EQUILIBRER", nom: "PLANCHE", difficulte: "⭐⭐⭐", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - PLANCHE - FACE.webp", profil: "SOL - S EQUILIBRER - PLANCHE - PROFIL.webp" },
        criteres_realisation: ["Bascule du buste vers l'avant", "Jambe arrière monte progressivement"],
        criteres_reussite: ["Jambe libre à l'horizontale", "Dos droit et tête fixant un point fixe devant"],
        etapes: [
            { nom: "Équilibre 1 jambe", media: { face: "SOL - S EQUILIBRER - PLANCHE - FACE - ETAPE - 1 - EQUILIBRE 1 JAMBE .webp", profil: "SOL - S EQUILIBRER - PLANCHE - PROFIL - ETAPE - 1 - EQUILIBRE 1 JAMBE.webp" }},
            { nom: "Planche oblique", media: { face: "SOL - S EQUILIBRER - PLANCHE - FACE - ETAPE - 2 - PLANCHE OBLIQUE.webp", profil: "SOL - S EQUILIBRER - PLANCHE - PROFIL - ETAPE - 2 - PLANCHE OBLIQUE.webp" }}
        ],
        erreurs: [{ titre: "Déséquilibre", indicateur: "Bascule avant", correction: "Gainer le dos et fixer un point devant", media: { face: "SOL - S EQUILIBRER - PLANCHE - FACE - ERREUR - DESEQUILIBRE AVANT.webp", profil: "SOL - S EQUILIBRER - PLANCHE - PROFIL - ERREUR - DESEQUILIBRE AVANT.webp" }}]
    },
    { 
      id: "sol_pont", agre: "SOL", action: "S EQUILIBRER", nom: "PONT", difficulte: "⭐⭐⭐", mode_enfant: "flamant",
      media: { face: "SOL - S EQUILIBRER - PONT - FACE.webp", profil: "SOL - S EQUILIBRER - PONT - PROFIL.webp" }, 
      criteres_realisation: ["Mains près des oreilles", "Pousser simultanément sur bras et les jambes"], 
      criteres_reussite: ["Bras et jambes tendus", "Tête décollée du tapis"] },
    
    { 
      id: "sol_3pattes", agre: "SOL", action: "S EQUILIBRER", nom: "3 PATTES", difficulte: "⭐", mode_enfant: "flamant",
      media: { face: "SOL - S EQUILIBRER - 3 PATTES ET JAMBE TENDUE - FACE.webp", profil: "SOL - S EQUILIBRER - 3 PATTES ET JAMBE TENDUE - PROFIL.webp" }, 
      criteres_realisation: ["Appui sur les mains et un pied", "Jambe libre tendue"], 
      criteres_reussite: ["Immobilité", "Jambe tendue haute"] },
      
    { 
      id: "sol_chaise", agre: "SOL", action: "S EQUILIBRER", nom: "LA CHAISE", difficulte: "⭐", mode_enfant: "flamant",
      media: { face: "SOL - S EQUILIBRER - CHAISE - FACE.webp", profil: "SOL - S EQUILIBRER - CHAISE - PROFIL.webp" }, 
      criteres_realisation: ["Dos droit", "Cuisses à l'horizontale"], 
      criteres_reussite: ["Tenir la position sans bouger"] },
      
    { 
      id: "sol_fente", agre: "SOL", action: "S EQUILIBRER", nom: "LA FENTE", difficulte: "⭐", mode_enfant: "flamant",
      media: { face: "SOL - S EQUILIBRER - FENTE - FACE.webp", profil: "SOL - S EQUILIBRER - FENTE - PROFIL.webp" }, 
      criteres_realisation: ["Jambe avant pliée, arrière tendue", "Dos droit"], 
      criteres_reussite: ["Stabilité", "Alignement jambe arrière et tronc"] },
      
    { 
      id: "sol_sur1jambe", agre: "SOL", action: "S EQUILIBRER", nom: "SUR 1 JAMBE", difficulte: "⭐", mode_enfant: "flamant",
      media: { face: "SOL - S EQUILIBRER - SUR 1 JAMBE - FACE.webp", profil: "SOL - S EQUILIBRER - SUR 1 JAMBE - PROFIL.webp" }, 
      criteres_realisation: ["Fixer un point", "Bras pour équilibrer"], 
      criteres_reussite: ["Ne pas poser le pied libre"] },
      
    { 
      id: "sol_table", agre: "SOL", action: "S EQUILIBRER", nom: "LA TABLE", difficulte: "⭐", mode_enfant: "flamant",
      media: { profil: "SOL - S EQUILIBRER - TABLE - PROFIL.webp" }, 
      criteres_realisation: ["Ventre vers le plafond", "Mains et pieds au sol"], 
      criteres_reussite: ["Dos plat comme une table", "Fesses hautes"] },
      
    { 
      id: "sol_x", agre: "SOL", action: "S EQUILIBRER", nom: "LE X", difficulte: "⭐", mode_enfant: "flamant",
      media: { face: "SOL - S EQUILIBRER - X - FACE.webp", profil: "SOL - S EQUILIBRER - X - PROFIL.webp" }, 
      criteres_realisation: ["Jambes écartées", "Bras écartés"], 
      criteres_reussite: ["Corps grand et étiré"] },

    {
        id: "sol_atr", agre: "SOL", action: "SE RENVERSER", nom: "ATR", difficulte: "⭐⭐⭐⭐", mode_enfant: "hibou",
        media: { face: "SOL - SE RENVERSER - ATR - PROFIL.webp", profil: "SOL - SE RENVERSER - ATR - FACE.webp" },
        criteres_realisation: ["position de fente avant de commencer", "Mains cherchent loin devant et regard fixé sur les mains au sol", "Serrer fessiers et abdos"],
        criteres_reussite: ["Passage précis par la verticale", "Alignement segmentaire parfait"],
        securite: "Parade indispensable : un enseignant ou élève pareur se place sur le côté pour accompagner ou bloquer les jambes au niveau du bassin.",
        etapes: [
            { nom: "Départ bloc", media: { face: "SOL - SE RENVERSER - ATR - PROFIL - ETAPE - 1 - ATR 1 JAMBE DEPART AU SOL AVEC BLOC.webp", profil: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 1 - ATR 1 JAMBE DEPART AU SOL AVEC BLOC.webp" }},
            { nom: "Lancer jambe (bloc)", media: { face: "SOL - SE RENVERSER - ATR - PROFIL - ETAPE - 2 - ATR DEPART AU SOL AVEC BLOC.webp", profil: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 2 - ATR DEPART AU SOL AVEC BLOC.webp" }},
            { nom: "Départ sol", media: { face: "SOL - SE RENVERSER - ATR - PROFIL - ETAPE - 3 - ATR 1 JAMBE DEPART AU SOL.webp", profil: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 3 - ATR 1 JAMBE DEPART AU SOL.webp" }},
            { nom: "ATR 1 Jambe", media: { face: "SOL - SE RENVERSER - ATR - PROFIL - ETAPE - 4 - ATR 1 JAMBE.webp", profil: "SOL - SE RENVERSER - ATR - FACE - ETAPE - 4 - ATR 1 JAMBE.webp" }}
        ],
        erreurs: [{ titre: "Banane", indicateur: "Dos cambré", correction: "Gainer,serrer le ventre et les fesses en regardant ses mains au sol", media: { face: "SOL - SE RENVERSER - ATR - PROFIL - ERREUR - LE CORPS EST EN ”BANANE”.webp", profil: "SOL - SE RENVERSER - ATR - FACE - ERREUR - LE CORPS EST EN ”BANANE”.webp" }}]
    },
    {
        id: "sol_roue", agre: "SOL", action: "SE RENVERSER", nom: "ROUE", difficulte: "⭐⭐⭐", mode_enfant: "hibou",
        media: { face: "SOL - SE RENVERSER - ROUE - FACE.webp", profil: "SOL - SE RENVERSER - ROUE - PROFIL.webp" },
        criteres_realisation: ["Pose alternée des appuis (rythme régulier main-main-pied-pied)", "Bras tendus"],
        criteres_reussite: ["Passage par la verticale", "Réception stable un pied après l'autre"],
        securite: "Veiller à ce que les bras restent toujours bien verrouillés et tendus au moment de la pose des mains.",
        etapes: [
            { nom: "Sur banc", media: { face: "SOL - SE RENVERSER - ROUE - FACE - ETAPE - 2 - ROUE EN APPUI SUR UN BANC.webp", profil: "SOL - SE RENVERSER - ROUE - PROFIL - ETAPE - 2 - ROUE EN APPUI SUR UN BANC.webp" }},
            { nom: "Jambes élevées", media: { face: "SOL - SE RENVERSER - ROUE - FACE - ETAPE - 3 - ROUE EN APPUI SUR UN BANC JAMBES ELEVEES.webp", profil: "SOL - SE RENVERSER - ROUE - PROFIL - ETAPE - 3 - ROUE EN APPUI SUR UN BANC JAMBES ELEVEES.webp" }}  ]
    },
    { 
       id: "sol_4pattes_renv", agre: "SOL", action: "SE RENVERSER", nom: "A 4 PATTES (PIED SUR BLOC)", difficulte: "⭐", mode_enfant: "hibou",
       media: { profil: "SOL - SE RENVERSER - A 4 PATTES AVEC PIED SUR BLOC - PROFIL.webp" }, 
       criteres_realisation: ["Mains au sol", "Pieds surélevés"], 
       criteres_reussite: ["Soutenir son poids sur les bras"] },

    {
        id: "sol_franchir_lapin_bloc", agre: "SOL", action: "FRANCHIR", nom: "SAUT DE LAPIN SUR BLOC", difficulte: "⭐⭐", mode_enfant: "lapin",
        media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 8.webp", profil: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 8.webp" },
        criteres_realisation: ["Regarder ses mains sur le bloc", "Impulsion simultanée des deux pieds", "Monter les fesses au-dessus des épaules"],
        criteres_reussite: ["Franchir le bloc sans poser les genoux", "Réception équilibrée de l'autre côté", "Ne pas hésiter à la prise d'élan"],
        securite: "Placer un grand tapis de réception épais derrière le bloc pour amortir le saut.",
        etapes: [
            { nom: "FICHE 1", media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 1.webp", profil: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 1.webp" }},
            { nom: "FICHE 2", media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 2.webp", profil: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 2.webp" }},
            { nom: "FICHE 3", media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 3.webp", profil: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 3.webp" }},
            { nom: "FICHE 4", media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 4.webp", profil: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 4.webp" }},
            { nom: "FICHE 5", media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 5.webp", profil: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 5.webp" }},
            { nom: "FICHE 6", media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 6.webp", profil: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 6.webp" }},
            { nom: "FICHE 7", media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 7.webp", profil: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 7.webp" }},
            { nom: "FICHE 8", media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 8.webp", profil: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 8.webp" }}
        ]
    },

    // --- POUTRE ---
     { 
       id: "poutre_saut_dessus", agre: "POUTRE", action: "SAUTER", nom: "PAR DESSUS POUTRE", difficulte: "⭐", mode_enfant: "lapin",
       media: { face: "POUTRE - SAUTER - SAUT AU DESSUS DE LA POUTRE - FACE.webp" }, 
       criteres_realisation: ["Prendre de l'élan", "Pousser fort dans les jambes"], 
       criteres_reussite: ["Ne pas toucher la poutre"] },
       
    { 
      id: "poutre_saut_change", agre: "POUTRE", action: "SAUTER", nom: "CHANGEMENT DE PIED", difficulte: "⭐⭐", mode_enfant: "lapin",
      media: { profil: "POUTRE - SAUTER - SAUT CHANGEMENT DE PIED - PROFIL.webp" }, 
      criteres_realisation: ["Saut ciseaux", "Buste droit"], 
      criteres_reussite: ["Réception sur l'autre pied"] },
      
    { 
      id: "poutre_saut_chat", agre: "POUTRE", action: "SAUTER", nom: "SAUT DE CHAT", difficulte: "⭐⭐⭐", mode_enfant: "lapin",
      media: { profil: "POUTRE - SAUTER - SAUT DE CHAT - PROFIL.webp" }, 
      criteres_realisation: ["Monter les genouxau niveau du bassin", "Amorti"], 
      criteres_reussite: ["Stabilité"] },
    
    { 
      id: "poutre_saut_ext", agre: "POUTRE", action: "SAUTER", nom: "SAUT EXTENSION", difficulte: "⭐", mode_enfant: "lapin",
      media: { profil: "POUTRE - SAUTER - SAUT EXTENSION - PROFIL.webp" }, 
      criteres_realisation: ["Se grandir", "Gainage"], 
      criteres_reussite: ["Réception sans chuter"] },

    { 
      id: "poutre_araignee", agre: "POUTRE", action: "SE DEPLACER", nom: "EN ARAIGNEE", difficulte: "⭐", mode_enfant: "chat",
      media: { face: "POUTRE - SE DEPLACER - EN ARAIGNEE - PROFIL.webp", profil: "POUTRE - SE DEPLACER - EN ARAIGNEE - FACE.webp" }, 
      criteres_realisation: ["Mains et pieds bien à plat", "Bassin décollé"], 
      criteres_reussite: ["Parcourir la longueur sans déséquilibre"], 
      flashcard: "FLASHCARD - ARAIGNEE.jpg" },
      
    { 
      id: "poutre_chat", agre: "POUTRE", action: "SE DEPLACER", nom: "EN CHAT", difficulte: "⭐", mode_enfant: "chat",
      media: { face: "POUTRE - SE DEPLACER - EN CHAT - PROFIL.webp", profil: "POUTRE - SE DEPLACER - EN CHAT - FACE.webp" }, 
      criteres_realisation: ["Mouvement fluide bras/jambes", "Dos plat"], 
      criteres_reussite: ["Déplacement silencieux et stable"],
      flashcard: "FLASHCARD - CHAT.jpg" },
      
    { 
      id: "poutre_chenille", agre: "POUTRE", action: "SE DEPLACER", nom: "EN CHENILLE", difficulte: "⭐⭐", mode_enfant: "chat",
      media: { face: "POUTRE - SE DEPLACER - EN CHENILLE - PROFIL.webp", profil: "POUTRE - SE DEPLACER - EN CHENILLE - FACE.webp" }, 
      criteres_realisation: ["Alternance mains-pieds", "Garder l'alignement"], 
      criteres_reussite: ["Ne pas sortir de l'axe de la poutre"], 
      flashcard: "FLASHCARD - CHENILLE.jpg" },
      
    { 
      id: "poutre_girafe", agre: "POUTRE", action: "SE DEPLACER", nom: "EN GIRAFE", difficulte: "⭐", mode_enfant: "chat",
      media: { face: "POUTRE - SE DEPLACER - EN GIRAFE - PROFIL.webp", profil: "POUTRE - SE DEPLACER - EN GIRAFE - FACE.webp" }, 
      criteres_realisation: ["Marcher sur demi-pointes", "Bras hauts"], 
      criteres_reussite: ["Maintenir la hauteur constante"],
      flashcard: "FLASHCARD - GIRAFE.jpg" },
      
    { 
      id: "poutre_kangourou", agre: "POUTRE", action: "SE DEPLACER", nom: "EN KANGOUROU", difficulte: "⭐⭐", mode_enfant: "chat",
      media: { face: "POUTRE - SE DEPLACER - EN KANGOUROU - PROFIL.webp", profil: "POUTRE - SE DEPLACER - EN KANGOUROU - FACE.webp" }, 
      criteres_realisation: ["Sauts légers", "Amortir avec les chevilles"], 
      criteres_reussite: ["Enchaîner 3 sauts sans s'arrêter"], 
      flashcard: "FLASHCARD - KANGOUROU.jpg" },
      
    { 
      id: "poutre_lapin", agre: "POUTRE", action: "SE DEPLACER", nom: "EN LAPIN", difficulte: "⭐⭐", mode_enfant: "chat",
      media: { face: "POUTRE - SE DEPLACER - EN LAPIN - PROFIL.webp", profil: "POUTRE - SE DEPLACER - EN LAPIN - FACE.webp" }, 
      criteres_realisation: ["Transfert du poids sur les mains", "Serrer les pieds"], 
      criteres_reussite: ["Contrôler le retour des pieds sur la poutre"], 
      flashcard: "FLASHCARD - LAPIN.jpg" },
      
    { 
      id: "poutre_marchant", agre: "POUTRE", action: "SE DEPLACER", nom: "EN MARCHANT", difficulte: "⭐", mode_enfant: "chat",
      media: { face: "POUTRE - SE DEPLACER - EN MARCHANT - PROFIL.webp", profil: "POUTRE - SE DEPLACER - EN MARCHANT - FACE.webp" }, 
      criteres_realisation: ["Bras à l'horizontale", "Poser le pied dans l'axe"], 
      criteres_reussite: ["Marche assurée", "Regard devant"] },
    
    { 
      id: "poutre_reculant", agre: "POUTRE", action: "SE DEPLACER", nom: "EN RECULANT", difficulte: "⭐⭐", mode_enfant: "chat",
      media: { face: "POUTRE - SE DEPLACER - EN RECULANT - PROFIL.webp", profil: "POUTRE - SE DEPLACER - EN RECULANT - FACE.webp" }, 
      criteres_realisation: ["Chercher la poutre avec la pointe du pied", "Garder le buste droit"], 
      criteres_reussite: ["Reculer sur 2 mètres sans hésiter"] },
    
    { 
      id: "poutre_eq_1pied", agre: "POUTRE", action: "S EQUILIBRER", nom: "EQUILIBRE 1 PIED", difficulte: "⭐⭐", mode_enfant: "flamant",
      media: { profil: "POUTRE - S EQUILIBRER - EQUILIBRE 1 PIED - PROFIL.webp" }, 
      criteres_realisation: ["Jambe libre en retrait", "Gainer la jambe d'appui"], 
      criteres_reussite: ["Tenir immobile 3 secondes"] },
      
    { 
      id: "poutre_eq_fessier", agre: "POUTRE", action: "S EQUILIBRER", nom: "EQUILIBRE FESSIER", difficulte: "⭐⭐⭐", mode_enfant: "flamant",
      media: { profil: "POUTRE - S EQUILIBRER - EQUILIBRE FESSIER - PROFIL.webp" }, 
      criteres_realisation: ["Trouver le point de bascule", "Serrer les abdominaux"], 
      criteres_reussite: ["Tenir 3 secondes", "Jambes levées"] },
      
    { 
      id: "poutre_planche", agre: "POUTRE", action: "S EQUILIBRER", nom: "PLANCHE", difficulte: "⭐⭐⭐⭐", mode_enfant: "flamant",
      media: { profil: "POUTRE - S EQUILIBRER - PLANCHE - PROFIL.webp" }, 
      criteres_realisation: ["Fixer un point au bout de la poutre", "Aligner jambe et buste"], 
      criteres_reussite: ["Jambe arrière à l'horizontale"] },
      
    { 
      id: "poutre_planche_obl", agre: "POUTRE", action: "S EQUILIBRER", nom: "PLANCHE OBLIQUE", difficulte: "⭐⭐", mode_enfant: "flamant",
      media: { profil: "POUTRE - S EQUILIBRER - PLANCHE OBLIQUE - PROFIL.webp" }, 
      criteres_realisation: ["Alignement Tronc/Jambe", "Inclinaison"], 
      criteres_reussite: ["Tenir 3 secondes"] },
      
    { 
      id: "poutre_accroupi", agre: "POUTRE", action: "S EQUILIBRER", nom: "S ACCROUPIR", difficulte: "⭐", mode_enfant: "flamant",
      media: { profil: "POUTRE - S EQUILIBRER - S ACCROUPIR - PROFIL.webp" }, 
      criteres_realisation: ["Genoux pliés", "Dos droit"], 
      criteres_reussite: ["Equilibre stable"] },

    { 
      id: "poutre_tour_accroupi", agre: "POUTRE", action: "TOURNER", nom: "DEMI TOUR ACCROUPI", difficulte: "⭐⭐", mode_enfant: "hibou",
      media: { profil: "POUTRE - TOURNER - DEMI TOUR ACCROUPI - PROFIL.webp" }, 
      criteres_realisation: ["Sur demi-pointes", "Rotation controlée sans s'arrêter"], 
      criteres_reussite: ["Ne pas tomber"] },
      
    { 
      id: "poutre_tour_debout", agre: "POUTRE", action: "TOURNER", nom: "DEMI TOUR DEBOUT", difficulte: "⭐⭐⭐", mode_enfant: "hibou",
      media: { profil: "POUTRE - TOURNER - DEMI TOUR DEBOUT - PROFIL.webp" }, 
      criteres_realisation: ["Corps gainé", "Rotation sur pointes"], 
      criteres_reussite: ["Finir dans l'axe"] },

    // --- BARRES ---
  { 
      id: "barres_appui", agre: "BARRES", action: "S APPUYER", nom: "APPUI SIMPLE", difficulte: "⭐", mode_enfant: "singe",
      media: { face: "BARRES - S APPUYER - APPUI SIMPLE - FACE.webp" }, 
      criteres_realisation: ["Bras tendus", "Pousser sur les épaules pour s'éloigner de la barre"], 
      criteres_reussite: ["Corps gainé", "Pas de balancement"],
      securite: "Veiller à ce que les pouces fassent bien le tour de la barre (prise palmaire sécurisée)." },
      
    { 
      id: "barres_suspension", agre: "BARRES", action: "SE SUSPENDRE", nom: "SUSPENSION SIMPLE", difficulte: "⭐", mode_enfant: "singe",
      media: { face: "BARRES - SE SUSPENDRE - SUSPENSION SIMPLE - FACE.webp" }, 
      criteres_realisation: ["Mains à largeur épaules", "Bras tendus (ne pas plier)"], 
      criteres_reussite: ["Rester suspendu sans toucher le sol", "Corps droit"] },
      
    { 
      id: "barres_balancer", agre: "BARRES", action: "SE BALANCER", nom: "BALANCERS", difficulte: "⭐⭐", mode_enfant: "singe",
      media: { face: "BARRES - SE BALANCER - BALANCERS SUSPENDUS - PROFIL.webp", profil: "BARRES - SE BALANCER - BALANCERS SUSPENDUS - FACE.webp" }, 
      criteres_realisation: ["Jeter les jambes et les bloquer devant puis derriere", "Rester suspendu sans lâcher la barre"], 
      criteres_reussite: ["Corps gainé", "Jambes tendues"] },
      
    { 
      id: "barres_balancer_cochon", agre: "BARRES", action: "SE BALANCER", nom: "BALANCERS COCHON PENDU", difficulte: "⭐⭐", mode_enfant: "singe",
      media: { face: "BARRES - SE BALANCER - BALANCERS COCHON PENDU - PROFIL.webp", profil: "BARRES - SE BALANCER - BALANCERS COCHON PENDU - FACE.webp" }, 
      criteres_realisation: ["Crocheter les les jambes", "Engager les balancers avec la tête et les épaules"], 
      criteres_reussite: ["Corps gainé", "Enchaîner 3 balancers"] },
      
    { 
      id: "barres_tourner_av", agre: "BARRES", action: "TOURNER", nom: "RENVERSEMENT AVANT", difficulte: "⭐⭐", mode_enfant: "singe",
      media: { face: "BARRES - TOURNER - RENVERSEMENT AVANT - PROFIL.webp",  profil: "BARRES - TOURNER - RENVERSEMENT AVANT - FACE.webp" }, 
      criteres_realisation: ["Rotation autour de la barre", "Ne pas lâcher ni retourner les mains"], 
      criteres_reussite: ["Revenir au point de départ sans lâcher la barre"] },
    { 
      id: "barres_tourner_ar", agre: "BARRES", action: "TOURNER", nom: "RENVERSEMENT ARRIERE", difficulte: "⭐⭐⭐", mode_enfant: "singe",
      media: { face: "BARRES - TOURNER - RENVERSEMENT ARRIERE AVEC APPUI - PROFIL.webp",  profil: "BARRES - TOURNER - RENVERSEMENT ARRIERE AVEC APPUI - FACE.webp" }, 
      criteres_realisation: ["Départ suspendu sous la barre, Une jambe tendue sur le bloc et une jambe pliée en appui", "Coordonner tirer dans les bras, jeter la jambe tendue et pousser dans la jambe pliée"], 
      criteres_reussite: ["Revenir au point de départ sans lâcher la barre et sans arrêt", "Arriver à l'appui sur les bras"],
      securite: "Parade essentielle pour soutenir le dos et les jambes lors de la montée du bassin vers la barre." }  
      
];

// =========================================================================
// DONNÉES NAVIGATION VIGNETTES (ACCUEIL)
// =========================================================================
const actionsData = {
    "SOL": [
        { nom: "ROULER", img: "SOL - ROULER.webp" },
        { nom: "SAUTER", img: "SOL - SAUTER.webp" },
        { nom: "S EQUILIBRER", img: "SOL - S EQUILIBRER.webp" },
        { nom: "SE DEPLACER", img: "SOL - SE DEPLACER.webp" },
        { nom: "SE RENVERSER", img: "SOL - SE RENVERSER.webp" },
        { nom: "FRANCHIR", img: "SOL - FRANCHIR.webp" }
    ],
    "POUTRE": [
        { nom: "SAUTER", img: "POUTRE - SAUTER.webp" },
        { nom: "SE DEPLACER", img: "POUTRE - SE DEPLACER.webp" },
        { nom: "S EQUILIBRER", img: "POUTRE - S EQUILIBRER.webp" },
        { nom: "TOURNER", img: "POUTRE - TOURNER.webp" }
    ],
    "BARRES": [
        { nom: "S APPUYER", img: "BARRES - S APPUYER.webp" },
        { nom: "SE SUSPENDRE", img: "BARRES - SE SUSPENDRE.webp" },
        { nom: "SE BALANCER", img: "BARRES - SE BALANCER.webp" },
        { nom: "TOURNER", img: "BARRES - TOURNER.webp" }
    ]
};

// =========================================================================
// DONNÉES ÉCHAUFFEMENTS
// =========================================================================
const warmupsData = [
    {
        id: "warmup_pirates",
        nom: "L'ÎLE AU TRÉSOR DES PETITS PIRATES",
        img: "ECHAUFFEMENT GYM - L ILE AU TRESOR DES PETITE PIRATES.jpg",
        pdf: "ECHAUFFEMENT GYM - L ILE AU TRESOR DES PETITE PIRATES - PRESENTATION.pdf",
        video: "ECHAUFFEMENT GYM - L ILE AU TRESOR DES PETITE PIRATES - VIDEO.mp4",
        histoire: `1. On hisse les voiles ! (Épaules et Bras) : Tirer de haut en bas comme sur une corde imaginaire.
2. On frotte le pont (Hanches et Bas du dos) : Tourner le buste de gauche à droite, mains devant soi.
3. Gare au mal de mer ! (Équilibre et Chevilles) : S'équilibrer sur une jambe quand le bateau penche.
4. À l'eau ! (Coordination) : Nager (brasse/crawl) avec les bras en marchant rapidement sur place.
5. La jungle épaisse (Genoux) : Lever les genoux très haut (lianes) puis se baisser (branches).
6. Le pont de singe (Déplacement) : Pas chassés latéraux avec les bras tendus sur les côtés.
7. Le passage étroit (Ramper) : Ramper sur le ventre ou avancer sur les fesses dans le tunnel.
8. La découverte du trésor : S'étirer au maximum vers le haut pour attraper le coffre sur le rocher.`
    },
    {
        id: "warmup_foret",
        nom: "LA FORÊT MAGIQUE",
        img: "ECHAUFFEMENT GYM - LA FORET MAGIQUE.jpg",
        pdf: "ECHAUFFEMENT GYM - LA FORET MAGIQUE - PRESENTATION.pdf",
        video: "ECHAUFFEMENT GYM - LA FORET MAGIQUE - VIDEO.mp4",
        histoire: `1. L'Entrée (Épaules) : Grands cercles avec les bras pour écarter les branches magiques.
2. L'Arbre de la Chouette (Cervicales) : Tourner la tête lentement pour observer la forêt à 180°.
3. Les Hautes Herbes (Hanches) : Grands pas en levant les genoux et rotations du bassin.
4. La Mare aux Grenouilles (Cardio) : Petits sauts pieds joints (nénuphars) et flexions.
5. Le Tunnel des Lutins (Dos) : Marche en canard ou dos rond/dos creux comme le chat.
6. Le Pont Suspendu (Équilibre) : Marcher sur une ligne imaginaire, bras en croix.
7. La Récolte (Grandissement) : S'étirer sur la pointe des pieds pour attraper les fruits d'or.`
    },
    {
        id: "warmup_planete",
        nom: "LA PLANÈTE INCONNUE",
        img: "ECHAUFFEMENT GYM - LA PLANETE INCONNUE.jpg",
        pdf: "ECHAUFFEMENT GYM - LA PLANETE INCONNUE - PRESENTATION.pdf",
        video: "ECHAUFFEMENT GYM - LA PLANETE INCONNUE - VIDEO.mp4",
        histoire: `1. Sortie de la fusée (Marcher) : Pas lourds et lents (gravité forte), lever les genoux.
2. Cratères de feu (Sauter) : Sauter par-dessus des cerceaux ou zones rouges, réception souple.
3. Vent solaire (Reculer) : Reculer face au vent en restant bien droit, petits pas rapides.
4. Tunnel de cristal (Ramper) : Traverser la grotte étroite sur le ventre (comme un serpent).
5. Pente glissante (Rouler) : Roulade "bûche" ou "crayon" sur le côté, corps gainé.
6. Rivières d'acide (Equilibre) : Faire un grand pas et tenir 2s sur une jambe sur chaque pierre.
7. Robots en panne (Articulations) : Grands moulinets avec les bras et balancements du tronc.
8. Décollage final (S'étirer) : S'étirer très fort pour atteindre le bouton au plafond de la fusée.`
    },
    {
        id: "warmup_carnaval",
        nom: "LE CARNAVAL DES ANIMAUX",
        img: "ECHAUFFEMENT GYM - LE CARNAVAL DES ANIMAUX.jpg",
        pdf: "ECHAUFFEMENT GYM - LE CARNAVAL DES ANIMAUX - PRESENTATION.pdf",
        video: "ECHAUFFEMENT GYM - LE CARNAVAL DES ANIMAUX - VIDEO.mp4",
        histoire: `1. La Girafe (Chevilles) : Marcher sur la pointe des pieds, mains vers le ciel (tête de girafe).
2. L'Éléphant (Tronc) : Pas lourds jambes écartées, bras joints balançant comme une trompe.
3. Le Lapin (Appuis) : Accroupis, sauts de puce (mains touchent le sol puis les pieds rejoignent).
4. Le Kangourou (Puissance) : Grands sauts vers l'avant pieds joints, réception souple.
5. La Chenille (Souplesse) : Avancer les mains en planche puis ramener les pieds jambes tendues.
6. L'Araignée (Coordination) : Marche en crabe (ventre vers le ciel) sans poser les fesses.
7. Le Phoque (Bras) : Sur le ventre, bras tendus pour regarder le soleil, taper dans les mains.`
    },
{
        id: "super_heros",
        nom: "L'Académie des Super-Héros",
        img: "ECHAUFFEMENT - L ACADEMIE DES SUPER HEROS.jpg",
        video: "ECHAUFFEMENT - L ACADEMIE DES SUPER HEROS - VIDEO.mp4",
        pdf: "ECHAUFFEMENT - L ACADEMIE DES SUPER HEROS - PRESENTATION.pdf",
        histoire: `🦸‍♂️ Bienvenue à l'Académie !
        
1. Radar (Nuque) : Tourner la tête pour surveiller les méchants.
2. Chargement (Poignets/Épaules) : Mouliner les bras et visser les poignets.
3. Costume (Étirements) : Enfiler la combinaison, toucher ses pieds.
4. Course QG (Cardio) : Courir sur place, accélérer au signal "Turbo".
5. Lasers (Ramper) : Ramper bas et reculer vite si on touche un laser.
6. Toits (Sauter) : Sauter de toit en toit, réception silencieuse "Ninja".
7. Bouclier (Rouler) : Se mettre en boule ou rouler pour parer les coups.
8. Invisibilité (Équilibre) : Statue immobile sur un pied.`
    },
    {
        id: "goutte_eau",
        nom: "L'Odyssée de la Goutte d'Eau",
        img: "ECHAUFFEMENT - L ODYSSEE DE LA GOUTTE D EAU.jpg",
        video: "ECHAUFFEMENT - L ODYSSEE DE LA GOUTTE D EAU - VIDEO.mp4",
        pdf: "ECHAUFFEMENT - L ODYSSEE DE LA GOUTTE D EAU - PRESENTATION.pdf",
        histoire: `💧 Le voyage de la petite goutte...
        
1. Réveil (Nuque) : Regarder les nuages, secouer les gouttelettes.
2. Pluie (Sauter) : Petits sauts légers, atterrissage silencieux.
3. Ruisseau (Courir) : Courir en virages (slalom).
4. Tourbillon (Rouler) : Rouler sur le côté (bâche) comme un tronc.
5. Souterrain (Ramper) : Ramper dans un tunnel étroit.
6. Cascade (Saut Extension) : Grand saut vers le haut, arrivée en boule.
7. Lac Gelé (Équilibre) : Marcher sur la pointe des pieds sur la glace.
8. Évaporation (Étirement) : Monter doucement vers le ciel.`
    },
    {
        id: "boite_jouets",
        nom: "La Boîte à Jouets",
        img: "ECHAUFFEMENT - LA BOITE A JOUETS.jpg",
        video: "ECHAUFFEMENT - LA BOITE A JOUETS - VIDEO.mp4",
        pdf: "ECHAUFFEMENT - LA BOITE A JOUETS - PRESENTATION.pdf",
        histoire: `🧸 La nuit, les jouets se réveillent...
        
1. Couvercle (Poignets) : Tourner la clé, sortir la tête.
2. Soldat de Plomb (Marcher) : Marcher jambes et bras raides.
3. Voiture (Vitesse) : Courir, freiner, marche arrière au bip.
4. Ballon (Rebonds) : Sauts élastiques.
5. Serpent (Onduler) : Ramper/Onduler au sol.
6. Ours (Rouler) : Roulade latérale "lourde".
7. Robot (Isolation) : Mouvements saccadés et blocages.
8. Poupée Chiffon (Relâchement) : Se laisser fondre au sol.`
    },
    {
        id: "traceurs",
        nom: "Mission Traceurs (Yamakasi)",
        img: "ECHAUFFEMENT - MISSION TRACEURS - UNITE D ELITE.jpg",
        video: "ECHAUFFEMENT - MISSION TRACEURS - UNITE D ELITE - VIDEO.mp4",
        pdf: "ECHAUFFEMENT - MISSION TRACEURS - UNITE D ELITE - PRESENTATION.pdf",
        histoire: `🕶️ Infiltration urbaine...
        
1. Calibration (Articulations) : Chevilles, poignets, radar 360°.
2. Zone d'ombre (Appuis) : Courir léger. Stop en fente au signal.
3. Saut précision (Sauter) : Saut pieds joints, réception collée (statue).
4. Infrarouges (Gainage) : Ramper commando ou araignée (dos).
5. Esquive (Rouler) : Roulade épaule ou avant pour fuir.
6. Corniche (Équilibre) : Marcher sur une ligne, demi-tour.
7. Mur (Explosivité) : Courir, toucher mur, reculer vite.
8. Fin de mission (Zen) : Respiration calme.`
    }

];

// =========================================================================
// DONNÉES UNITÉS D'APPRENTISSAGE (UA)
// =========================================================================

const unitsList = [
    { id: "SITUATIONS_ALL", titre: "SITUATIONS D'APPRENTISSAGE", img: "SITUATIONS D APPRENTISSAGE.jpg" },
    { id: "C1_UA1", titre: "CYCLE 1 - UNITE D APPRENTISSAGE 1", img: "CYCLE 1 - UNITE D APPRENTISSAGE 1.jpg" },
    { id: "C1_UA2", titre: "CYCLE 1 - UNITE D APPRENTISSAGE 2", img: "CYCLE 1 - UNITE D APPRENTISSAGE 2.jpg" },
    { id: "C1_UA3", titre: "CYCLE 1 - UNITE D APPRENTISSAGE 3", img: "CYCLE 1 - UNITE D APPRENTISSAGE 3.jpg" },
    { id: "C2_UA1", titre: "CYCLE 2 - UNITE D APPRENTISSAGE 1", img: "CYCLE 2 - UNITE D APPRENTISSAGE 1.jpg" },
    { id: "C2_UA2", titre: "CYCLE 2 - UNITE D APPRENTISSAGE 2", img: "CYCLE 2 - UNITE D APPRENTISSAGE 2.jpg" },
    { id: "C3_UA3", titre: "CYCLE 3 - UNITE D APPRENTISSAGE 3", img: "CYCLE 3 - UNITE D APPRENTISSAGE 3.jpg" }
];

// =========================================================================
// DONNÉES DES SITUATIONS (BASÉE SUR LE TABLEUR EXCEL - ONGLET SITUATIONS)
// =========================================================================
const situationsDB = [
    // --- CYCLE 1 UA 1 ---
    { 
        ua: "C1_UA1", ref: "SITUATION 1", nom: "MULTI ATELIERS", 
        img_dispo: "MATERIEL - DISPOSITIF A.jpg", 
        imgs_elements: ["SOL - SE DEPLACER - EN CHAT - PROFIL.webp", "SOL - ROULER - ROULEAUX - FACE.webp", "POUTRE - SE DEPLACER - EN MARCHANT - PROFIL.webp", "POUTRE - SAUTER - SAUT AU DESSUS DE LA POUTRE - FACE.webp"],
        but: "AGIR DANS LES DIFFERENTS DISPOSITIFS", 
        criteres: "AUCUN SAUF LA SECURITE", 
        modalites: "LIBRE CIRCULATION, UN ELEVE A LA FOIS SUR UN ATELIER", 
        orga: "GROUPE CLASSE REPARTI",
        evo1: "L ENSEIGNANT INCITE LES ELEVES A EXPLORER TOUS LES ATELIERS", 
        evo2: "L ENSEIGNANT INCITE LES ELEVES A EXPLORER DIFFERENTS MODES DE DEPLACEMENTS ET ACTION (VERBES D ACTIONS)" 
    },
    { 
        ua: "C1_UA1", ref: "SITUATION 2", nom: "MULTI ATELIERS (ROTATION)", 
        img_dispo: "MATERIEL - DISPOSITIF A.jpg", 
        imgs_elements: ["SOL - SE DEPLACER - EN LAPIN - FACE.webp", "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp", "POUTRE - SE DEPLACER - EN CHAT - PROFIL.webp", "SOL - SE RENVERSER - ROUE - PROFIL - ETAPE - 2 - ROUE EN APPUI SUR UN BANC.webp"],
        but: "AGIR DANS LES DIFFERENTS DISPOSITIFS", 
        criteres: "RESPECTER LES ACTIONS DEMANDEES", 
        modalites: "LIBRE CIRCULATION, UN ELEVE A LA FOIS, RESPECTER L ENTREE",
        orga: "ROTATION POUR ASSURER LE PASSAGE DANS TOUS LES ATELIERS",
        evo1: "L ENSEIGNANT INSTALLE UNE ROTATION POUR S ASSURER LE PASSAGE DE TOUS LES ELEVES DANS CHAQUE ATELIERS" 
    },
    { 
        ua: "C1_UA1", ref: "SITUATION 3", nom: "TRAVERSER ET FRANCHIR", 
        img_dispo: "MATERIEL - DISPOSITIF B.jpg", 
        imgs_elements: ["SOL - SE DEPLACER - EN LAPIN - PROFIL.webp", "SOL - SE DEPLACER - EN KANGOUROU - PROFIL.webp", "POUTRE - SE DEPLACER - EN RECULANT - PROFIL.webp", "POUTRE - SE DEPLACER - EN CHAT - PROFIL.webp"],
        but: "TAPIS : TRAVERSER / BANC : FRANCHIR", 
        criteres: "CONSIGNES D ACTIONS RESPECTEES. BANC : POSER LES 2 MAINS.", 
        modalites: "AU MOINS 2 ATELIERS DISTINCTS, LIBRE CIRCULATION",
        orga: "GROUPE CLASSE",
        evo1: "ENCHAINER 2 ATELIERS DE SUITE" 
    },
    { 
        ua: "C1_UA1", ref: "SITUATION 4", nom: "VOLER ET ROULER", 
        img_dispo: "MATERIEL - DISPOSITIF C.jpg", 
        imgs_elements: ["SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp", "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp", "SOL - ROULER - ROULADE AVANT DEPART SUR BANC - PROFIL.webp"],
        but: "PLINTH : SAUTER / PENTE : ROULER", 
        criteres: "REUSSIR AU MOINS 3 FOIS. ARRIVEE DEBOUT (PLINTH).", 
        modalites: "LIBRE CIRCULATION, ATELIERS DEDOUBLES",
        orga: "CLASSE REPARTIE SUR 3 ATELIERS",
        evo1: "REUSSIR 2 ATELIERS", 
        evo2: "REUSSIR DANS LES 3 ATELIERS" 
    },
    { 
        ua: "C1_UA1", ref: "SITUATION 5", nom: "TRAVERSER, FRANCHIR, SAUTER ET ROULER", 
        img_dispo: "MATERIEL - DISPOSITIF A.jpg", 
        imgs_elements: ["SOL - SE RENVERSER - ROUE - FACE - ETAPE - 2 - ROUE EN APPUI SUR UN BANC.webp", "SOL - SE DEPLACER - EN GIRAFE - PROFIL.webp", "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp", "SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp"],
        but: "TOUS LES ATELIERS", 
        criteres: "REUSSIR AU MOINS 3 FOIS PAR ATELIER", 
        modalites: "LIBRE CIRCULATION",
        orga: "FREQUENTER LES 3 ATELIERS",
        evo1: "ENCHAINER AU MOINS 3 ATELIERS" 
    },

    // --- CYCLE 1 UA 2 ---
    { 
        ua: "C1_UA2", ref: "SITUATION 1", nom: "MULTI ATELIERS", 
        img_dispo: "MATERIEL - DISPOSITIF A.jpg", 
        imgs_elements: ["POUTRE - SE DEPLACER - EN ARAIGNEE - PROFIL.webp", "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp","SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp", "SOL - ROULER - ROULADE AVANT DEPART SUR BANC - PROFIL.webp"],
        but: "DECOUVERTE ET ACTION DANS LES DISPOSITIFS", 
        criteres: "CONSIGNES RESPECTEES, REUSSIR 3 FOIS", 
        modalites: "LIBRE CIRCULATION",
        orga: "FREQUENTER TOUS LES ATELIERS",
        evo1: "ENCHAINER AU MOINS 3 ATELIERS" 
    },
    { 
        ua: "C1_UA2", ref: "SITUATION 2", nom: "ROULER EN AVANT", 
        img_dispo: "MATERIEL - DISPOSITIF D.jpg", 
        imgs_elements: ["SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp", "SOL - ROULER - ROULADE AVANT DEPART SUR BANC - PROFIL.webp", "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 4 - ROULADE AVANT ARRIVEE ASSIS.webp"],
        but: "ROULER SUR PLAN INCLINE ET SOL", 
        criteres: "ARRIVEE DANS L AXE, TETE RENTREE", 
        modalites: "LIBRE CIRCULATION",
        orga: "3 ATELIERS",
        evo1: "ARRIVEE SUR LE DOS - ASSIS - ACCROUPI - DEBOUT" 
    },
    { 
        ua: "C1_UA2", ref: "SITUATION 3", nom: "SAUTER ET FRANCHIR", 
        img_dispo: "MATERIEL - DISPOSITIF E.jpg", 
        imgs_elements: ["POUTRE - SAUTER - SAUT AU DESSUS DE LA POUTRE - FACE.webp", "SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp"],
        but: "SAUT CONTREBAS ET FRANCHISSEMENT BANC", 
        criteres: "ARRIVEE DEBOUT, RECEPTION PIEDS", 
        modalites: "LIBRE CIRCULATION",
        orga: "2 ATELIERS DEDOUBLES",
        evo1: "REUSSIR DANS LES 2 ATELIERS" 
    },
    { 
        ua: "C1_UA2", ref: "SITUATION 4", nom: "VOLER, FRANCHIR ET SE DEPLACER", 
        img_dispo: "MATERIEL - DISPOSITIF F.jpg", 
        imgs_elements: ["SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp", "POUTRE - SE DEPLACER - EN MARCHANT - PROFIL.webp", "SOL - SE RENVERSER - ROUE - FACE - ETAPE - 2 - ROUE EN APPUI SUR UN BANC.webp"],
        but: "TOUCHER OBJET SUSPENDU, FRANCHIR BANC", 
        criteres: "REUSSIR 3 FOIS, SANS POSER PIED", 
        modalites: "LIBRE CIRCULATION",
        orga: "ATELIERS",
        evo1: "VARIER HAUTEURS ET LARGEURS", 
        evo2: "SUR LA POUTRE AVEC OBJET SUR LA TETE" 
    },
    { 
        ua: "C1_UA2", ref: "SITUATION 5", nom: "ROULER, FRANCHIR, SAUTER ET SE DEPLACER", 
        img_dispo: "MATERIEL - DISPOSITIF G.jpg", 
        imgs_elements: ["SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp", "POUTRE - SE DEPLACER - EN MARCHANT - PROFIL.webp", "SOL - SE RENVERSER - ROUE - FACE - ETAPE - 2 - ROUE EN APPUI SUR UN BANC.webp"],
        but: "CIRCUIT COMPLET", 
        criteres: "ARRIVEE DEBOUT / DANS L AXE", 
        modalites: "LIBRE CIRCULATION",
        orga: "4 ATELIERS DEDOUBLES",
        evo1: "VARIER HAUTEURS", 
        evo2: "POUTRE AVEC OBJET TETE", 
        evo3: "ENCHAINER SANS ARRET" 
    },
    { 
        ua: "C1_UA2", ref: "SITUATION 6", nom: "ENCHAINER TOUT", 
        img_dispo: "MATERIEL - DISPOSITIF G.jpg", 
        imgs_elements: ["SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp", "POUTRE - SE DEPLACER - EN MARCHANT - PROFIL.webp", "SOL - SE RENVERSER - ROUE - FACE - ETAPE - 2 - ROUE EN APPUI SUR UN BANC.webp"],
        but: "ENCHAINER LES 4 ATELIERS", 
        criteres: "FLUIDITE", 
        modalites: "4 ENTREES",
        orga: "GROUPE CLASSE REPARTI",
        evo1: "SANS TEMPS D ARRET" 
    },

    // --- CYCLE 1 UA 3 ---
    { 
        ua: "C1_UA3", ref: "SITUATION 1", nom: "ENCHAINER : ROULER, FRANCHIR...", 
        img_dispo: "MATERIEL - DISPOSITIF G.jpg", 
        imgs_elements: ["SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp", "POUTRE - SE DEPLACER - EN MARCHANT - PROFIL.webp", "SOL - SE RENVERSER - ROUE - FACE - ETAPE - 2 - ROUE EN APPUI SUR UN BANC.webp"],
        but: "ENCHAINER LES 4 ATELIERS", 
        criteres: "REUSSITE GLOBALE", 
        modalites: "GROUPE CLASSE REPARTI",
        orga: "4 ENTREES PROPOSEES",
        evo1: "PLUS VITE", 
        evo2: "AVEC QUALITE" 
    },
    { 
        ua: "C1_UA3", ref: "SITUATION 2", nom: "LE FUNAMBULE", 
        img_dispo: "MATERIEL - DISPOSITIF H.jpg", 
        imgs_elements: ["POUTRE - SE DEPLACER - EN MARCHANT - PROFIL.webp", "POUTRE - SE DEPLACER - EN CHAT - PROFIL.webp"],
        but: "SE DEPLACER EQUILIBRE", 
        criteres: "SANS TOMBER", 
        modalites: "ROTATION TOUTES LES 7 MINS",
        orga: "4 DISPOSITIFS",
        evo1: "VARIER LES HAUTEURS", 
        evo2: "MARCHE ARRIERE" 
    },
    { 
        ua: "C1_UA3", ref: "SITUATION 3", nom: "L ECUREUIL", 
        img_dispo: "MATERIEL - DISPOSITIF I.jpg", 
        imgs_elements: ["SOL - SE RENVERSER - ROUE - PROFIL - ETAPE - 3 - ROUE EN APPUI SUR UN BANC JAMBES ELEVEES.webp"],
        but: "FRANCHIR AVEC APPUI MANUEL", 
        criteres: "ARRIVEE DEBOUT", 
        modalites: "ROTATION TOUTES LES 5 MINS",
        orga: "5 DISPOSITIFS",
        evo1: "SANS TOUCHER L OBSTACLE AVEC PIEDS" 
    },
    { 
        ua: "C1_UA3", ref: "SITUATION 4", nom: "L OISEAU", 
        img_dispo: "MATERIEL - DISPOSITIF J.jpg", 
        imgs_elements: ["SOL - SAUTER - SAUT EXTENSION EN CONTRE BAS - PROFIL.webp"],
        but: "S ELANCER HAUT", 
        criteres: "RECEPTION STABILISEE", 
        modalites: "CLASSE DIVISEE EN 2 GROUPES",
        orga: "PLINTH / TREMPLIN",
        evo1: "FORMES DE SAUTS (ECART, GROUPE)", 
        evo2: "AVEC DEMI TOUR" 
    },
    { 
        ua: "C1_UA3", ref: "SITUATION 5", nom: "LES BILLES", 
        img_dispo: "MATERIEL - DISPOSITIF J.jpg", 
        imgs_elements: ["SOL - ROULER - ROULADE AVANT - PROFIL.webp"],
        but: "ROULER", 
        criteres: "ARRIVER ASSIS/DEBOUT", 
        modalites: "DEPART QUADRUPEDIE",
        orga: "INDIVIDUEL",
        evo1: "ARRIVER DEBOUT EQUILIBRE", 
        evo2: "ENCHAINER 2 ROULADES" 
    },
    { 
        ua: "C1_UA3", ref: "SITUATION 6", nom: "LES GYMNASTES", 
        img_dispo: "MATERIEL - DISPOSITIF G.jpg", 
        imgs_elements: [],
        but: "PARCOURS FINAL", 
        criteres: "MAITRISE", 
        modalites: "GROUPE CLASSE REPARTI",
        orga: "4 ENTREES",
        evo1: "EVALUATION" 
    },

    // --- CYCLE 2 UA 1 ---
    { 
        ua: "C2_UA1", ref: "SITUATION 1", nom: "LA ROULADE", 
        img_dispo: "MATERIEL - PENTE.jpg", 
        imgs_elements: ["SOL - ROULER - ROULADE AVANT - PROFIL.webp"],
        but: "ROULER EN AVANT", 
        criteres: "ARRIVEE ASSIS DANS LA ZONE, DANS L AXE", 
        modalites: "POUSSER JAMBES, MENTON POITRINE",
        orga: "BANC + TAPIS",
        evo1: "SANS PLAN INCLINE", 
        evo2: "ROULER SUR UNE LIGNE" 
    },
    { 
        ua: "C2_UA1", ref: "SITUATION 2", nom: "LES KANGOUROUS", 
        img_dispo: "MATERIEL - CERCEAUX.jpg", 
        imgs_elements: ["SOL - SAUTER - SAUTS PIEDS JOINTS DANS CERCEAUX - PROFIL.webp"],
        but: "SAUTER D UN CERCEAU A L AUTRE", 
        criteres: "CORPS TENDU", 
        modalites: "APPEL ET RECEPTION 2 PIEDS",
        orga: "2 TAPIS, 3 CERCEAUX",
        evo1: "ENCHAINER 3 SAUTS" 
    },
    { 
        ua: "C2_UA1", ref: "SITUATION 3", nom: "LES STATUES", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: ["SOL - S EQUILIBRER - EQUILIBRE 1 PIED - FACE.webp"],
        but: "MAINTIEN POSTURE 3s", 
        criteres: "IMMOBILITE", 
        modalites: "BRAS TENDUS, REGARD LOIN",
        orga: "GRAND ESPACE TAPIS",
        evo1: "CHANGER A CHAQUE SIGNAL", 
        evo2: "POSTURES IMPOSEES" 
    },
    { 
        ua: "C2_UA1", ref: "SITUATION 4", nom: "CULBUTO", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: ["SOL - ROULER - CULBUTO - PROFIL.webp"],
        but: "BASCULER ET REVENIR", 
        criteres: "DOS ROND, TETE RENTREE", 
        modalites: "BRAS TENDUS AVANT POUR RETOUR",
        orga: "TAPIS",
        evo1: "ENCHAINER PLUSIEURS", 
        evo2: "SANS LES MAINS" 
    },
    { 
        ua: "C2_UA1", ref: "SITUATION 5", nom: "LES CISEAUX", 
        img_dispo: "MATERIEL - PLINTH ET TAPIS.jpg", 
        imgs_elements: ["SOL - SE RENVERSER - A 4 PATTES AVEC PIED SUR BLOC - PROFIL.webp"],
        but: "BASSIN AU DESSUS EPAULES", 
        criteres: "BRAS TENDUS", 
        modalites: "POSER 2 MAINS EN MEME TEMPS",
        orga: "TAPIS + MUR/PLINTH",
        evo1: "CISEAUX DE JAMBE" 
    },
    { 
        ua: "C2_UA1", ref: "SITUATION 6", nom: "PRODUCTION FINALE", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: [],
        but: "ENCHAINEMENT LIBRE", 
        criteres: "1 ELEMENT CHAQUE FAMILLE", 
        modalites: "PAS DE TEMPS D ARRET",
        orga: "ESPACE SECURISE",
        evo1: "ENCHAINER 2 ELEMENTS", 
        evo2: "ENCHAINER 3 ELEMENTS" 
    },

    // --- CYCLE 2 UA 2 ---
    { 
        ua: "C2_UA2", ref: "SITUATION 1", nom: "LA ROULADE (PERF)", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: ["SOL - ROULER - ROULADE AVANT - PROFIL.webp"],
        but: "ARRIVEE JAMBES TENDUES", 
        criteres: "JAMBES TENDUES", 
        modalites: "BRAS TENDUS FIN MOUVEMENT",
        orga: "TAPIS",
        evo1: "ARRIVEE JAMBES TENDUES SERREES" 
    },
    { 
        ua: "C2_UA2", ref: "SITUATION 2", nom: "LA FUSEE", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: ["SOL - SAUTER - SAUT EXTENSION - PROFIL.webp"],
        but: "SAUT TENDU OBSTACLE", 
        criteres: "CORPS GAINE", 
        modalites: "ALIGNEMENT BRAS TRONC JAMBES",
        orga: "2 TAPIS + OBSTACLES",
        evo1: "FRANCHIR 2 OBSTACLES", 
        evo2: "SANS OBSTACLE (SAUT EXTENSION)" 
    },
    { 
        ua: "C2_UA2", ref: "SITUATION 3", nom: "LES STATUES (PERF)", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: ["SOL - S EQUILIBRER - EQUILIBRE 1 PIED - PROFIL.webp"],
        but: "EQUILIBRE 1 PIED", 
        criteres: "TENIR 3 SECONDES", 
        modalites: "BRAS TENDUS",
        orga: "GRAND ESPACE",
        evo1: "YEUX FERMES", 
        evo2: "SUR POUTRE" 
    },
    { 
        ua: "C2_UA2", ref: "SITUATION 4", nom: "CULBUTO", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: ["SOL - ROULER - CULBUTO - PROFIL.webp"],
        but: "RETOUR ACCROUPI", 
        criteres: "DYNAMIQUE", 
        modalites: "S AIDER DES BRAS",
        orga: "TAPIS",
        evo1: "SERRER GENOUX SANS MAINS", 
        evo2: "ENCHAINER" 
    },
    { 
        ua: "C2_UA2", ref: "SITUATION 5", nom: "LA BASCULE", 
        img_dispo: "MATERIEL - BANC.jpg", 
        imgs_elements: [],
        but: "MONTER BASSIN", 
        criteres: "BRAS TENDUS", 
        modalites: "POSER 2 MAINS",
        orga: "BANC",
        evo1: "DIMINUER HAUTEUR BANC", 
        evo2: "SANS BANC", 
        evo3: "JAMBES TENDUES" 
    },
    { 
        ua: "C2_UA2", ref: "SITUATION 6", nom: "PRODUCTION FINALE", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: [],
        but: "MINI ENCHAINEMENT", 
        criteres: "FLUIDITE", 
        modalites: "3 ACROBATIES ENCHAINEES",
        orga: "ESPACE SECURISE",
        evo1: "DEVANT PUBLIC" 
    },

    // --- CYCLE 3 UA 3 ---
    { 
        ua: "C3_UA3", ref: "SITUATION 1", nom: "LA ROULADE EXPERT", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: ["SOL - ROULER - ROULADE AVANT - PROFIL.webp"],
        but: "DEPART DEBOUT ARRIVEE DEBOUT", 
        criteres: "SANS MAINS AU SOL", 
        modalites: "ROULER EN BOULE",
        orga: "TAPIS",
        evo1: "SANS AIDE MAINS RELEVER", 
        evo2: "ENCHAINER 2 ROULADES" 
    },
    { 
        ua: "C3_UA3", ref: "SITUATION 2", nom: "L ASCENSEUR", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: ["SOL - SAUTER - SAUT DEMI TOUR - PROFIL.webp"],
        but: "SAUT AVEC FIGURE", 
        criteres: "RECEPTION STABLE", 
        modalites: "ENVOL TENDU",
        orga: "TAPIS",
        evo1: "SAUT GROUPE / ECART", 
        evo2: "SAUT 1 TOUR" 
    },
    { 
        ua: "C3_UA3", ref: "SITUATION 3", nom: "LA PLANCHE", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: ["SOL - S EQUILIBRER - PLANCHE - PROFIL.webp"],
        but: "EQUILIBRE HORIZONTAL", 
        criteres: "JAMBE HAUTE", 
        modalites: "BRAS TENDUS",
        orga: "TAPIS",
        evo1: "CHANGER SIGNAL", 
        evo2: "SUR DEMI POINTES", 
        evo3: "YEUX FERMES" 
    },
    { 
        ua: "C3_UA3", ref: "SITUATION 4", nom: "ROULADE ARRIERE", 
        img_dispo: "MATERIEL - PENTE.jpg", 
        imgs_elements: ["SOL - ROULER - ROULADE ARRIERE - PROFIL.webp"],
        but: "ROULER ARRIERE LIGNE", 
        criteres: "POUSSEE BRAS", 
        modalites: "DEPART ACCROUPI",
        orga: "PENTE",
        evo1: "ARRIVEE PIEDS", 
        evo2: "SANS PLAN INCLINE", 
        evo3: "ENCHAINER CULBUTO CHANDELLE" 
    },
    { 
        ua: "C3_UA3", ref: "SITUATION 5", nom: "L ARC (ATR)", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: ["SOL - SE RENVERSER - ATR - PROFIL.webp"],
        but: "TOUCHER MUR JAMBE", 
        criteres: "BRAS TENDUS", 
        modalites: "CORPS GAINE",
        orga: "TAPIS + MUR",
        evo1: "MONTEE ALTERNEE" 
    },
    { 
        ua: "C3_UA3", ref: "SITUATION 6", nom: "PRODUCTION FINALE", 
        img_dispo: "MATERIEL - TAPIS.jpg", 
        imgs_elements: [],
        but: "ENCHAINEMENT COMPLET", 
        criteres: "4 FAMILLES", 
        modalites: "ENCHAINER 3 ACTIONS",
        orga: "ESPACE SECURISE",
        evo1: "DIAGONALES ET MEDIANES" 
    }
];

const sessionsMap = [
    // C1 UA 1
    { ua: "C1_UA1", id: 1, parts: ["SITUATION 1"] },
    { ua: "C1_UA1", id: 2, parts: ["SITUATION 1", "SITUATION 1 - EVOLUTION 1"] },
    { ua: "C1_UA1", id: 3, parts: ["SITUATION 1", "SITUATION 1 - EVOLUTION 2"] }, 
    { ua: "C1_UA1", id: 4, parts: ["SITUATION 2"] },
    { ua: "C1_UA1", id: 5, parts: ["SITUATION 2 - EVOLUTION 1"] },
    { ua: "C1_UA1", id: 6, parts: ["SITUATION 3", "SITUATION 3 - EVOLUTION 1"] },
    { ua: "C1_UA1", id: 7, parts: ["SITUATION 3", "SITUATION 3 - EVOLUTION 1"] }, 
    { ua: "C1_UA1", id: 8, parts: ["SITUATION 4", "SITUATION 4 - EVOLUTION 1"] },
    { ua: "C1_UA1", id: 9, parts: ["SITUATION 4", "SITUATION 4 - EVOLUTION 1"] },
    { ua: "C1_UA1", id: 10, parts: ["SITUATION 5"] },

    // C1 UA 2
    { ua: "C1_UA2", id: 1, parts: ["SITUATION 1"] },
    { ua: "C1_UA2", id: 2, parts: ["SITUATION 1 - EVOLUTION 1"] },
    { ua: "C1_UA2", id: 3, parts: ["SITUATION 2"] },
    { ua: "C1_UA2", id: 4, parts: ["SITUATION 2 - EVOLUTION 1"] },
    { ua: "C1_UA2", id: 5, parts: ["SITUATION 3"] },
    { ua: "C1_UA2", id: 6, parts: ["SITUATION 3 - EVOLUTION 1"] },
    { ua: "C1_UA2", id: 7, parts: ["SITUATION 4"] },
    { ua: "C1_UA2", id: 8, parts: ["SITUATION 4 - EVOLUTION 1"] },
    { ua: "C1_UA2", id: 9, parts: ["SITUATION 5"] },
    { ua: "C1_UA2", id: 10, parts: ["SITUATION 6"] },

    // C1 UA 3
    { ua: "C1_UA3", id: 1, parts: ["SITUATION 1"] },
    { ua: "C1_UA3", id: 2, parts: ["SITUATION 2", "SITUATION 2 - EVOLUTION 2"] },
    { ua: "C1_UA3", id: 3, parts: ["SITUATION 3"] },
    { ua: "C1_UA3", id: 4, parts: ["SITUATION 4", "SITUATION 5"] },
    { ua: "C1_UA3", id: 5, parts: ["SITUATION 4", "SITUATION 4 - EVOLUTION 1", "SITUATION 5", "SITUATION 5 - EVOLUTION 2"] },
    { ua: "C1_UA3", id: 6, parts: ["SITUATION 6"] },

    // C2 UA 1
    { ua: "C2_UA1", id: 1, parts: ["SITUATION 3", "SITUATION 3 - EVOLUTION 1", "SITUATION 1 - EVOLUTION 1", "SITUATION 2 - EVOLUTION 1", "Enchaînement de 2 éléments"] },
    { ua: "C2_UA1", id: 2, parts: ["SITUATION 3 - EVOLUTION 1", "SITUATION 1 - EVOLUTION 1", "SITUATION 1 - EVOLUTION 2", "SITUATION 4", "SITUATION 5", "Enchaînement de 2 éléments"] },
    { ua: "C2_UA1", id: 3, parts: ["SITUATION 3 - EVOLUTION 2", "SITUATION 1 - EVOLUTION 1", "SITUATION 4", "SITUATION 5", "Enchaînement de 2 éléments"] },
    { ua: "C2_UA1", id: 4, parts: ["SITUATION 1 - EVOLUTION 2", "SITUATION 4 - EVOLUTION 1", "SITUATION 4 - EVOLUTION 1", "SITUATION 4 - EVOLUTION 2", "SITUATION 5 - EVOLUTION 1", "Enchaînement de 2 éléments"] },
    { ua: "C2_UA1", id: 5, parts: ["SITUATION 2 - EVOLUTION 1", "SITUATION 4 - EVOLUTION 2", "SITUATION 5 - EVOLUTION 1", "SITUATION 6", "Enchaînement de 2 éléments"] },
    { ua: "C2_UA1", id: 6, parts: ["SITUATION 6 - EVOLUTION 1", "SITUATION 6 - EVOLUTION 2", "SITUATION 6 - EVOLUTION 3"] },

    // C2 UA 2
    { ua: "C2_UA2", id: 1, parts: ["SITUATION 3", "SITUATION 3 - EVOLUTION 1", "SITUATION 1", "SITUATION 2", "SITUATION 5", "Enchaînement de 2 éléments"] },
    { ua: "C2_UA2", id: 2, parts: ["SITUATION 3 - EVOLUTION 1", "SITUATION 1", "SITUATION 2", "SITUATION 2 - EVOLUTION 1", "SITUATION 5", "SITUATION 5 - EVOLUTION 1", "Enchaînement de 2 éléments"] },
    { ua: "C2_UA2", id: 3, parts: ["SITUATION 3 - EVOLUTION 2", "SITUATION 1 - EVOLUTION 1", "SITUATION 2 - EVOLUTION 1", "SITUATION 5 - EVOLUTION 1", "SITUATION 4", "Enchaînement de 3 éléments"] },
    { ua: "C2_UA2", id: 4, parts: ["SITUATION 2 - EVOLUTION 2", "SITUATION 4", "SITUATION 4 - EVOLUTION 1", "SITUATION 5", "SITUATION 5 - EVOLUTION 1", "SITUATION 1 - EVOLUTION 1", "Enchaînement de 2 éléments"] },
    { ua: "C2_UA2", id: 5, parts: ["SITUATION 3 - EVOLUTION 2", "SITUATION 1 - EVOLUTION 1", "SITUATION 2 - EVOLUTION 2", "SITUATION 4 - EVOLUTION 2", "SITUATION 5 - EVOLUTION 3", "Enchaînement de 3 éléments"] },
    { ua: "C2_UA2", id: 6, parts: ["SITUATION 6"] },

    // C3 UA 3
    { ua: "C3_UA3", id: 1, parts: ["SITUATION 3", "SITUATION 3 - EVOLUTION 1", "SITUATION 1", "SITUATION 4", "SITUATION 5", "Enchaînement de 2 éléments"] },
    { ua: "C3_UA3", id: 2, parts: ["SITUATION 3 - EVOLUTION 2", "SITUATION 1", "SITUATION 1 - EVOLUTION 1", "SITUATION 4", "SITUATION 4 - EVOLUTION 1", "SITUATION 5", "Enchaînement de 3 éléments"] },
    { ua: "C3_UA3", id: 3, parts: ["SITUATION 3 - EVOLUTION 2", "SITUATION 3 - EVOLUTION 3", "SITUATION 1 - EVOLUTION 1", "SITUATION 4 - EVOLUTION 2", "SITUATION 5 - EVOLUTION 1", "Enchaînement de 3 éléments"] },
    { ua: "C3_UA3", id: 4, parts: ["SITUATION 2", "SITUATION 1 - EVOLUTION 2", "SITUATION 4 - EVOLUTION 2", "SITUATION 5 - EVOLUTION 1", "Enchaînement de 3 éléments"] },
    { ua: "C3_UA3", id: 5, parts: ["SITUATION 2 - EVOLUTION 1", "SITUATION 1 - EVOLUTION 2", "SITUATION 4 - EVOLUTION 3", "SITUATION 6"] },
    { ua: "C3_UA3", id: 6, parts: ["SITUATION 6", "SITUATION 6 - EVOLUTION 1"] }
];

const brevetData = [
    {
        id: "brevet_sol_franchir_1", agre: "SOL", action: "FRANCHIR", nom: "SAUT DE LAPIN SUR BLOC - ETAPE 1 (ARRIVEE A GENOUX)", mode_enfant: "lapin",
        media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 1.webp", profil:"SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 1.webp" },
        criteres_realisation: ["POSER LES MAINS SUR LE PLINTH", "SAUTER POUR ARRIVER À GENOUX", "PUIS SAUTER VERS LE HAUT SUR LE TAPIS POUR ARRIVER EQUILIBRE"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_franchir_2", agre: "SOL", action: "FRANCHIR", nom: "SAUT DE LAPIN SUR BLOC - ETAPE 2 (SAUT DE LAPIN)", mode_enfant: "lapin",
        media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 2.webp", profil:"SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 2.webp"},
        criteres_realisation: ["POSER LES MAINS", "REALISER UN SAUT DE LAPIN", "SAUTER POUR ARRIVER À GENOUX SUR LE PLINTH", "PUIS SAUTER VERS LE HAUT SUR LE TAPIS"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_franchir_3", agre: "SOL", action: "FRANCHIR", nom: "SAUT DE LAPIN SUR BLOC - ETAPE 3 (ARRIVEE PIEDS)", mode_enfant: "lapin",
        media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 3.webp", profil:"SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 3.webp" },
        criteres_realisation: ["POSER LES MAINS SUR LE PLINTH", "SAUTER POUR ARRIVER ACCROUPI", "PUIS SAUTER VERS LE HAUT POUR ARRIVER EQUILIBRE"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_franchir_4", agre: "SOL", action: "FRANCHIR", nom: "SAUT DE LAPIN SUR BLOC - ETAPE 4 (SAUT DE LAPIN PIEDS)", mode_enfant: "lapin",
        media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 4.webp", profil:"SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 4.webp" },
        criteres_realisation: ["POSER LES MAINS", "SAUTER POUR ARRIVER ACCROUPI", "REALISER UN SAUT DE LAPIN", "SAUTER VERS LE HAUT ET STABILISER LA RECEPTION"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_franchir_5", agre: "SOL", action: "FRANCHIR", nom: "SAUT DE LAPIN AVEC ENVOL - ETAPE 5", mode_enfant: "lapin",
        media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 5.webp", profil:"SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 5.webp" },
        criteres_realisation: ["PRENDRE DE L ELAN", "SAUTER SUR LE TREMPLIN EN POSANT LES MAINS SUR LE PLINTH POUR ARRIVER A GENOUX", "PUIS SAUT VERS LE HAUT"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_franchir_6", agre: "SOL", action: "FRANCHIR", nom: "SAUT DE LAPIN AVEC ENVOL - ETAPE 6", mode_enfant: "lapin",
        media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 6.webp", profil:"SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 6.webp" },
        criteres_realisation: ["PRENDRE DE L ELAN", "SAUTER SUR LE TREMPLIN", "ARRIVER A GENOUX", "SAUT DE LAPIN SUR LE PLINTH", "PUIS SAUT VERS LE HAUT EQUILIBRE"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_franchir_7", agre: "SOL", action: "FRANCHIR", nom: "SAUT DE LAPIN AVEC ENVOL - ETAPE 7 (PIEDS)", mode_enfant: "lapin",
        media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 7.webp", profil:"SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 7.webp" },
        criteres_realisation: ["PRENDRE DE L ELAN", "SAUTER SUR LE TREMPLIN", "ARRIVER ACCROUPI SUR LE PLINTH", "PUIS SAUT VERS LE HAUT EQUILIBRE"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_franchir_8", agre: "SOL", action: "FRANCHIR", nom: "SAUT DE LAPIN AVEC ENVOL - ETAPE 8 (SAUT DE LAPIN)", mode_enfant: "lapin",
        media: { face: "SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - PROFIL - ETAPE - 8.webp", profil:"SOL - FRANCHIR - SAUT DE LAPIN SUR BLOC - FACE - ETAPE - 8.webp" },
        criteres_realisation: ["PRENDRE DE L ELAN, SAUTER (MAINS SUR LE PLINTH)", "ARRIVER ACCROUPI", "SAUT DE LAPIN SUR LE PLINTH", "PUIS SAUT VERS LE HAUT"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_ar_1", agre: "SOL", action: "ROULER EN ARRIERE", nom: "ROULADE ARRIERE SUR PENTE - ETAPE 1 (ARRIVEE GENOUX)", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ETAPE - 2 - ROULADE ARRIERE SUR PENTE ARRIVEE GENOUX.webp" },
        criteres_realisation: ["DEPART SURELEVE SUR UNE PENTE ASSIS, FOULARD SOUS LE MENTON, GENOUX CONTRE LA POITRINE ET MAINS DERRIERE LA TETE", "ROULER EN ARRIERE SANS PERDRE LE FOULARD SOUS LE MENTON", "ARRIVER SUR LES GENOUX AVEC LES BRAS EN AVANT"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_ar_2", agre: "SOL", action: "ROULER EN ARRIERE", nom: "ROULADE ARRIERE SUR PENTE - ETAPE 2 (ACCROUPI)", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ETAPE - 3 - ROULADE ARRIERE SUR PENTE.webp" },
        criteres_realisation: ["DEPART SURELEVE SUR UNE PENTE ASSIS, FOULARD SOUS LE MENTON, GENOUX CONTRE LA POITRINE ET MAINS DERRIERE LA TETE", "ROULER EN ARRIERE SANS PERDRE LE FOULARD SOUS LE MENTON", "ARRIVER ACCROUPI AVEC LES BRAS EN AVANT"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_ar_3", agre: "SOL", action: "ROULER EN ARRIERE", nom: "ROULADE ARRIERE AU SOL - ETAPE 3 (ARRIVEE GENOUX)", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL - ETAPE - 4 - ROULADE ARRIERE AU SOL ARRIVEE GENOUX.webp" },
        criteres_realisation: ["DEPART ACCROUPI, MAINS DERRIERE LA TETE", "ROULER EN ARRIERE", "ARRIVER SUR LES GENOUX"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_ar_4", agre: "SOL", action: "ROULER EN ARRIERE", nom: "ROULADE ARRIERE AU SOL - ETAPE 4", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL.webp" },
        criteres_realisation: ["DEPART ACCROUPI, MAINS DERRIERE LA TETE", "ROULER EN ARRIERE", "ARRIVER ACCROUPI AVEC LES BRAS EN AVANT"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_ar_5", agre: "SOL", action: "ROULER EN ARRIERE", nom: "ROULADE ARRIERE + SAUT EXTENSION - ETAPE 5", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL.webp" },
        criteres_realisation: ["DEPART ACCROUPI, MAINS DERRIERE LA TETE OU LES BRAS DEVANT", "ROULER EN ARRIERE", "ARRIVER ACCROUPI", "ENCHAINER AVEC UN SAUT EXTENSION"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_ar_6", agre: "SOL", action: "ROULER EN ARRIERE", nom: "ROULADE ARRIERE + SAUT DEMI TOUR - ETAPE 6", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE ARRIERE - PROFIL.webp" },
        criteres_realisation: ["DEPART ACCROUPI, MAINS DERRIERE LA TETE OU LES BRAS DEVANT", "ROULER EN ARRIERE", "ARRIVER ACCROUPI", "ENCHAINER AVEC UN SAUT EXTENSION DEMI TOUR"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_av_1", agre: "SOL", action: "ROULER EN AVANT", nom: "ROULADE AVANT SUR PENTE - ETAPE 1 (ARRIVEE ASSIS)", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 2 - ROULADE AVANT SUR PENTE ARRIVEE ASSIS.webp" },
        criteres_realisation: ["DEPART SURELEVE SUR UNE PENTE ACCROUPI, FOULARD SOUS LE MENTON", "POSER LES MAINS A PLAT SUR LE TAPIS", "ROULER EN AVANT SANS PERDRE LE FOULARD SOUS LE MENTON", "ARRIVER ASSIS"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_av_2", agre: "SOL", action: "ROULER EN AVANT", nom: "ROULADE AVANT SUR PENTE - ETAPE 2 (ARRIVEE DEBOUT)", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 3 - ROULADE AVANT SUR PENTE ARRIVEE DEBOUT.webp" },
        criteres_realisation: ["DEPART SURELEVE SUR UNE PENTE ACCROUPI, FOULARD SOUS LE MENTON", "POSER LES MAINS A PLAT SUR LE TAPIS", "ROULER EN AVANT SANS PERDRE LE FOULARD SOUS LE MENTON", "ARRIVER ACCROUPI"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_av_3", agre: "SOL", action: "ROULER EN AVANT", nom: "ROULADE AVANT ARRIVEE ASSIS - ETAPE 3", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 4 - ROULADE AVANT ARRIVEE ASSIS.webp" },
        criteres_realisation: ["DEPART ACCROUPI, MAINS A PLAT SUR LE TAPIS", "ROULER EN AVANT LE MENTON CONTRE LA POITRINE", "ARRIVER ASSIS LES GNENOUX CONTRE LA POITRINE"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_av_4", agre: "SOL", action: "ROULER EN AVANT", nom: "ENCHAINEMENT ROULADE SUR PENTE ET ROULADE AU SOL - ETAPE 4", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL - ETAPE - 3 - ROULADE AVANT SUR PENTE ARRIVEE DEBOUT.webp", profil: "SOL - ROULER - ROULADE AVANT - PROFIL.webp" },
        criteres_realisation: ["DEPART SURELEVE SUR UNE PENTE ACCROUPI", "POSER LES MAINS A PLAT SUR LE TAPIS", "ROULER EN AVANT LE MENTON CONTRE LA POITRINE", "ARRIVER ACCROUPI", "ENCHAINER UNE DEUXIEME ROULADE DANS L AXE", "ARRIVER ASSIS LES GENOUX CONTRE LA POITRINE"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_av_5", agre: "SOL", action: "ROULER EN AVANT", nom: "ROULADE AVANT AU SOL - ETAPE 5", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL.webp" },
        criteres_realisation: ["DEPART ACCROUPI, MAINS A PLAT SUR LE TAPIS", "ROULER EN AVANT LE MENTON CONTRE LA POITRINE", "ARRIVER ACCROUPI SANS L AIDE DES MAINS"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_av_6", agre: "SOL", action: "ROULER EN AVANT", nom: "ROULADE AVANT + SAUT EXTENSION - ETAPE 6", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL.webp", profil: "SOL - SAUTER - SAUT DEMI TOUR - PROFIL - ETAPE - 1 - SAUT EXTENSION.webp"},
        criteres_realisation: ["DEPART ACCROUPI, MAINS A PLAT SUR LE TAPIS", "ROULER EN AVANT LE MENTON CONTRE LA POITRINE, GENOUX CONTRE LE VENTRE", "ARRIVER ACCROUPI SANS L AIDE DES MAINS", "SE RELEVER ET ENCHAINER AVEC UN SAUT EXTENSION"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_sol_rouler_av_7", agre: "SOL", action: "ROULER EN AVANT", nom: "ENCHAINER 2 ROULADES AVANT - ETAPE 7", mode_enfant: "ours",
        media: { face: "SOL - ROULER - ROULADE AVANT - PROFIL.webp" },
        criteres_realisation: ["DEPART ACCROUPI, MAINS A PLAT SUR LE TAPIS", "ROULER EN AVANT LE MENTON CONTRE LA POITRINE", "ARRIVER ACCROUPI SANS L AIDE DES MAINS", "ENCHAINER UNE DEUXIEME ROULADE DANS L AXE ET ARRIVER ACCROUPI SANS L AIDE DES MAINS"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_poutre_x_1", agre: "POUTRE", action: "S EQUILIBRER", nom: "EQUILIBRE EN X - ETAPE 1", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - X - FACE.webp" },
        criteres_realisation: ["JAMBES ECARTEES", "BRAS TENDUS SUR LE COTE"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_poutre_1pied_2", agre: "POUTRE", action: "S EQUILIBRER", nom: "EQUILIBRE 1 PIED - ETAPE 2", mode_enfant: "flamant",
        media: { face: "POUTRE - S EQUILIBRER - EQUILIBRE 1 PIED - PROFIL.webp" },
        criteres_realisation: ["MONTER UN GENOU", "JAMBE D APPUI TENDUE ET PIED A PLAT"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_poutre_accroupi_3", agre: "POUTRE", action: "S EQUILIBRER", nom: "ACCROUPI - ETAPE 3", mode_enfant: "flamant",
        media: { face: "POUTRE - S EQUILIBRER - S ACCROUPIR - PROFIL.webp" },
        criteres_realisation: ["S ACCROUPI (SUR POINTES)", "BAISSER LE NIVEAU DES FESSES"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_poutre_planche_obl_4", agre: "POUTRE", action: "S EQUILIBRER", nom: "PLANCHE OBLIQUE - ETAPE 4", mode_enfant: "flamant",
        media: { face: "POUTRE - S EQUILIBRER - PLANCHE OBLIQUE - PROFIL.webp" },
        criteres_realisation: ["PENCHER LE CORPS VERS L AVANT PENDANT QUE LA JAMBE MONTE", "JAMBE EN L AIR TENDUE"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_poutre_planche_5", agre: "POUTRE", action: "S EQUILIBRER", nom: "PLANCHE OBLIQUE (HORIZONTALE) - ETAPE 5", mode_enfant: "flamant",
        media: { face: "POUTRE - S EQUILIBRER - PLANCHE - PROFIL.webp" },
        criteres_realisation: ["PENCHER LE CORPS VERS L AVANT PENDANT QUE LA JAMBE MONTE", "JAMBE EN L AIR TENDUE", "JAMBE A L HORIZONTALE"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_x_1", agre: "SOL", action: "S EQUILIBRER", nom: "EQUILIBRE EN X - ETAPE 1", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - X - FACE.webp" },
        criteres_realisation: ["ECARTER LES JAMBES TENDUES", "BRAS TENDUS SUR LE COTE"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_chaise_2", agre: "SOL", action: "S EQUILIBRER", nom: "CHAISE - ETAPE 2", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - CHAISE - FACE.webp" },
        criteres_realisation: ["PLIER LES JAMBES", "GARDER LE DOS DROIT"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_1pied_3", agre: "SOL", action: "S EQUILIBRER", nom: "EQUILIBRE 1 PIED - ETAPE 3", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - SUR 1 JAMBE - PROFIL.webp" },
        criteres_realisation: ["MONTER UN GENOU", "JAMBE D APPUI TENDUE ET PIED A PLAT"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_planche_4", agre: "SOL", action: "S EQUILIBRER", nom: "PLANCHE - ETAPE 4", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - PLANCHE - PROFIL.webp" },
        criteres_realisation: ["PENCHER LE CORPS VERS L AVANT PENDANT QUE LA JAMBE MONTE", "JAMBE EN L AIR TENDUE", "JAMBE A L HORIZONTALE"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_fessier_5", agre: "SOL", action: "S EQUILIBRER", nom: "EQUILIBRE FESSIER - ETAPE 5", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - EQUILIBRE FESSIER - PROFIL - ETAPE - 2 - EQUILBRE FESSIER JAMBES TENDUES AVEC LES BRAS.webp" },
        criteres_realisation: ["DEPART ASSIS", "BRAS POSER DERRIERE LES FESSES", "MONTER LES JAMBES TENDUES"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_3pattes_6", agre: "SOL", action: "S EQUILIBRER", nom: "EQUILIBRE 3 PATTES JAMBE TENDUE - ETAPE 6", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - 3 PATTES ET JAMBE TENDUE - PROFIL.webp" },
        criteres_realisation: ["DEPART A 4 PATTES", "MONTER UNE JAMBE TENDUE A L HORIZONTALE"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_table_7", agre: "SOL", action: "S EQUILIBRER", nom: "TABLE - ETAPE 7", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - TABLE - PROFIL.webp" },
        criteres_realisation: ["POSER LES MAINS A COTE DES FESSES", "MONTER LE BASSIN POUR AVOIR LE CORPS A PLAT"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_chandelle_8", agre: "SOL", action: "S EQUILIBRER", nom: "CHANDELLE - ETAPE 8", mode_enfant: "flamant",
        media: { face: "SOL - S EQUILIBRER - CHANDELLE - PROFIL.webp" },
        criteres_realisation: ["BASCULER VERS L ARRIERE", "PLACER SES MAINS DANS LES DOS A PLAT", "SERRER LES COUDES", "SORTIR LE VENTRE POUR MONTER LES JAMBES"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_atr_9", agre: "SOL", action: "S EQUILIBRER", nom: "ATR - ETAPE 9", mode_enfant: "hibou",
        media: { face: "SOL - SE RENVERSER - ATR - PROFIL - ETAPE - 1 - ATR 1 JAMBE DEPART AU SOL AVEC BLOC.webp" },
        criteres_realisation: ["DEPART JAMBES SUR BLOC ET MAINS AU SOL", "REGARDER SES MAINS", "PLACER LE DOS AU DESSUS DES MAINS", "MONTER UNE JAMBE"],
        criteres_reussite: ["SE MAINTENIR PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_saut_ext_1", agre: "SOL", action: "SAUTER", nom: "SAUT EXTENSION - ETAPE 1", mode_enfant: "lapin",
        media: { face: "SOL - SAUTER - SAUT EXTENSION - FACE.webp" },
        criteres_realisation: ["SAUT EXTENSION"],
        criteres_reussite: ["MAINTENIR L EQUILIBRE A LA RECEPTION PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_saut_groupe_2", agre: "SOL", action: "SAUTER", nom: "SAUT GROUPE - ETAPE 2", mode_enfant: "lapin",
        media: { face: "SOL - SAUTER - SAUT GROUPE - PROFIL.webp" },
        criteres_realisation: ["SAUT GROUPE"],
        criteres_reussite: ["MAINTENIR L EQUILIBRE A LA RECEPTION PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_saut_quart_3", agre: "SOL", action: "SAUTER", nom: "SAUT QUART DE TOUR - ETAPE 3", mode_enfant: "lapin",
        media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE - ETAPE - 2 - SAUT QUART DE TOUR.webp" },
        criteres_realisation: ["SAUT QUART DE TOUR"],
        criteres_reussite: ["MAINTENIR L EQUILIBRE A LA RECEPTION PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_saut_demi_4", agre: "SOL", action: "SAUTER", nom: "SAUT DEMI TOUR - ETAPE 4", mode_enfant: "lapin",
        media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE.webp" },
        criteres_realisation: ["SAUT DEMI TOUR"],
        criteres_reussite: ["MAINTENIR L EQUILIBRE A LA RECEPTION PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_sol_saut_tour_5", agre: "SOL", action: "SAUTER", nom: "SAUT 1 TOUR - ETAPE 5", mode_enfant: "lapin",
        media: { face: "SOL - SAUTER - SAUT DEMI TOUR - FACE.webp" },
        criteres_realisation: ["SAUT TOUR COMPLET"],
        criteres_reussite: ["MAINTENIR L EQUILIBRE A LA RECEPTION PENDANT 3 SECONDES (3 FOIS DE SUITE)"]
    },
    {
        id: "brevet_barres_suspendus_1", agre: "BARRES", action: "SE BALANCER", nom: "BALANCERS SUSPENDUS - ETAPE 1", mode_enfant: "singe",
        media: { face: "BARRES - SE BALANCER - BALANCERS SUSPENDUS - PROFIL.webp", profil: "BARRES - SE BALANCER - BALANCERS SUSPENDUS - FACE.webp"},
        criteres_realisation: ["SE BALANCER POUR ARRIVER STABILISE DEBOUT DERRIERE"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_barres_cochon_2", agre: "BARRES", action: "SE BALANCER", nom: "BALANCERS COCHON PENDU - ETAPE 2", mode_enfant: "singe",
        media: { face: "BARRES - SE BALANCER - BALANCERS COCHON PENDU - PROFIL.webp", profil: "BARRES - SE BALANCER - BALANCERS COCHON PENDU - FACE.webp"},
        criteres_realisation: ["SE BALANCER ACCROCHE PAR LES MAINS ET LES GENOUX"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_barres_renv_av_3", agre: "BARRES", action: "SE BALANCER", nom: "RENVERSEMENT AVANT - ETAPE 3", mode_enfant: "singe",
        media: { face: "BARRES - TOURNER - RENVERSEMENT AVANT - PROFIL.webp", profil: "BARRES - TOURNER - RENVERSEMENT AVANT - FACE.webp"},
        criteres_realisation: ["SE RENVERSER POUR TOURNER EN AVANT"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_barres_depla_4", agre: "BARRES", action: "SE BALANCER", nom: "DEPLACEMENT HORIZONTAL - ETAPE 4", mode_enfant: "singe",
        media: { face: "BARRES - SE SUSPENDRE - DEPLACEMENT HORIZONTAL - FACE.webp", profil: "BARRES - SE SUSPENDRE - DEPLACEMENT HORIZONTAL - PROFIL.webp" },
        criteres_realisation: ["SE DEPLACER AUX BARRES ASYETRIQUES EN RESTANT GAINE"],
        criteres_reussite: ["2 PASSAGES"]
    },
    {
        id: "brevet_barres_renv_ar_5", agre: "BARRES", action: "SE BALANCER", nom: "RENVERSEMENT ARRIERE - ETAPE 5", mode_enfant: "singe",
        media: { face: "BARRES - TOURNER - RENVERSEMENT ARRIERE AVEC APPUI - PROFIL.webp", profil: "BARRES - TOURNER - RENVERSEMENT ARRIERE AVEC APPUI - FACE.webp"},
        criteres_realisation: ["SE RENVERSER POUR TOURNER EN ARRIERE", "S AIDER D UN APPUI AVEC LES JAMBES", "ARRIVER A L APPUI"],
        criteres_reussite: ["REUSSIR 3 FOIS CETTE ACTION"]
    },
    {
        id: "brevet_poutre_marcher_1", agre: "POUTRE", action: "SE DEPLACER", nom: "TRAVERSER EN MARCHANT - ETAPE 1", mode_enfant: "chat",
        media: { face: "POUTRE - SE DEPLACER - EN MARCHANT - PROFIL.webp" },
        criteres_realisation: ["DEPART SUR LA POUTRE", "REGARDER LOIN DEVANT", "MARCHER JUSQU AU BOUT DE LA POUTRE", "SAUTER ET ARRIVER EQUILIBRE SUR LES 2 PIEDS"],
        criteres_reussite: ["NE PAS TOMBER DE LA POUTRE OU METTRE LE PIED PAR TERRE"]
    },
    {
        id: "brevet_poutre_reculer_2", agre: "POUTRE", action: "SE DEPLACER", nom: "TRAVERSER EN RECULANT - ETAPE 2", mode_enfant: "chat",
        media: { face: "POUTRE - SE DEPLACER - EN RECULANT - PROFIL.webp" },
        criteres_realisation: ["DEPART SUR LA POUTRE", "REGARDER LOIN DEVANT", "MARCHER JUSQU AU BOUT DE LA POUTRE", "RECULER (MARCHE ARRIERE)", "REPARTIR EN AVANT JUSQU AU BOUT DE LA POUTRE", "SAUTER ET ARRIVER EQUILIBRE SUR LES 2 PIEDS"],
        criteres_reussite: ["NE PAS TOMBER DE LA POUTRE OU METTRE LE PIED PAR TERRE"]
    },
    {
        id: "brevet_poutre_objets_3", agre: "POUTRE", action: "SE DEPLACER", nom: "TRAVERSER EN EVITANT LES OBJETS - ETAPE 3", mode_enfant: "chat",
        media: { face: "MATERIEL - POUTRE ET OBJETS.jpg" },
        criteres_realisation: ["DEPART SUR LA POUTRE", "REGARDER LOIN DEVANT", "MARCHER JUSQU AU BOUT DE LA POUTRE EN FRANCHISSANT LES OBSTACLES", "SAUTER ET ARRIVER EQUILIBRE SUR LES 2 PIEDS"],
        criteres_reussite: ["NE PAS TOMBER DE LA POUTRE OU METTRE LE PIED PAR TERRE"]
    },
    {
        id: "brevet_poutre_saut_ext_4", agre: "POUTRE", action: "SE DEPLACER", nom: "SAUT EXTENSION - ETAPE 4", mode_enfant: "lapin",
        media: { face: "POUTRE - SAUTER - SAUT EXTENSION - PROFIL.webp" },
        criteres_realisation: ["DEPART SUR LA POUTRE", "REGARDER LOIN DEVANT", "DESCENDRE LES JAMBES LE LONG DE LA POUTRE L UNE APRES L AUTRE", "SAUTER ET ARRIVER EQUILIBRE SUR LES 2 PIEDS"],
        criteres_reussite: ["NE PAS TOMBER DE LA POUTRE OU METTRE LE PIED PAR TERRE"]
    },
    {
        id: "brevet_poutre_demi_tour_5", agre: "POUTRE", action: "SE DEPLACER", nom: "DEMI TOUR - ETAPE 5", mode_enfant: "hibou",
        media: { face: "POUTRE - TOURNER - DEMI TOUR DEBOUT - PROFIL.webp" },
        criteres_realisation: ["DEPART SUR LA POUTRE", "REGARDER LOIN DEVANT", "MARCHER JUSQU AU BOUT DE LA POUTRE", "FAIRE UN DEMI TOUR", "REVENIR JUSQU AU BOUT DE LA POUTRE", "SAUTER ET ARRIVER EQUILIBRE SUR LES 2 PIEDS"],
        criteres_reussite: ["NE PAS TOMBER DE LA POUTRE OU METTRE LE PIED PAR TERRE"]
    },
    {
        id: "brevet_poutre_lapin_6", agre: "POUTRE", action: "SE DEPLACER", nom: "SAUTS DE LAPIN - ETAPE 6", mode_enfant: "lapin",
        media: { face: "POUTRE - SE DEPLACER - EN LAPIN - PROFIL.webp" },
        criteres_realisation: ["DEPART SUR LA POUTRE", "REGARDER LOIN DEVANT", "REALISER UN SAUT DE LAPIN", "SE RELEVER AU BOUT DE LA POUTRE ET SAUTER ET ARRIVER EQUILIBRE SUR LES 2 PIEDS"],
        criteres_reussite: ["NE PAS TOMBER DE LA POUTRE OU METTRE LE PIED PAR TERRE"]
    }
];