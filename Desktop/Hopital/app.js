document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const code = document.getElementById('code').value;
    // Appel à une fonction pour vérifier les informations d'authentification du patient
    login(username, code);
});

// Fonction pour mettre à jour la liste des patients triés
function updatePatientList(patients) {
    const patientListElement = document.getElementById('patient-list');
    patientListElement.innerHTML = '';
    // Parcourir la liste des patients et afficher les informations dans la liste
    patients.forEach(patient => {
        const patientElement = document.createElement('div');
        patientElement.textContent = `Nom: ${patient.name}, Code: ${patient.code}, Temps d'attente: ${patient.waitTime} min`;
        patientListElement.appendChild(patientElement);
    });
}


// Fonction pour simuler l'authentification du patient et récupérer la liste des patients triés
function login(username, code) {
    // Appel à une API ou à un serveur PHP pour vérifier les informations d'authentification et récupérer la liste des patients triés
    // Exemple de données de patients triés retournées par le serveur
    const patients = [
        { name: 'Patient 1', code: 'ABC', waitTime: 5 },
        { name: 'Patient 2', code: 'XYZ', waitTime: 10 },
        // ...
    ];
    // Mise à jour de la liste des patients triés dans l'interface utilisateur
    updatePatientList(patients);
}





        // Fonction pour valider le formulaire d'inscription
        function Inscription() {
            var nomUtilisateur = document.getElementById("nomUtilisateur").value;
            var motDePasse = document.getElementById("motDePasse").value;

            // Vérifier si les champs sont vides
            if (nomUtilisateur === "" || motDePasse === "") {
                alert("Veuillez remplir tous les champs.");
                return false;
            }

            // Enregistrer les informations de l'utilisateur (exemple)
            alert("Inscription réussie ! Nom d'utilisateur : " + nomUtilisateur + ", Mot de passe : " + motDePasse);
            return true;
        }

        // Fonction pour valider le formulaire de connexion
        function validerConnexion() {
            var nomUtilisateur = document.getElementById("nomUtilisateurConnexion").value;
            var motDePasse = document.getElementById("motDePasseConnexion").value;

            // Vérifier si les champs sont vides
            if (nomUtilisateur === "" || motDePasse === "") {
                alert("Veuillez remplir tous les champs.");
                return false;
            }

            // Vérifier les informations d'identification (exemple)
            if (nomUtilisateur === "utilisateur" && motDePasse === "motdepasse") {
                alert("Connexion réussie ! Bienvenue, " + nomUtilisateur + " !");
                return true;
            } else {
                alert("Nom d'utilisateur ou mot de passe incorrect.");
                return false;
            }
        }
    

