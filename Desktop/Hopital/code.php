<?php

// Configuration de la base de données
define('DB_HOST', 'localhost');
define('DB_USER', 'votre_utilisateur');
define('DB_PASSWORD', 'votre_mot_de_passe');
define('DB_NAME', 'hospital');

// Connexion à la base de données
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Erreur de connexion à la base de données : " . $conn->connect_error);
}

?>
<?php

session_start();

// Vérifier si l'utilisateur est déjà connecté
if(isset($_SESSION['admin_id'])){
    header("Location: liste_patients.php");
    exit();
}

require_once 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $password = $_POST['password'];

    // Vérifier les informations d'authentification de l'admin
    $query = "SELECT id, nom FROM admins WHERE nom = ? AND password = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $nom, $password);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($admin_id, $admin_nom);
        $stmt->fetch();

        // Créer une session pour l'admin
        $_SESSION['admin_id'] = $admin_id;
        $_SESSION['admin_nom'] = $admin_nom;

        // Rediriger vers la liste des patients
        header("Location: liste_patients.php");
        exit();
    } else {
        $error = "Nom d'utilisateur ou mot de passe incorrect";
    }
}

?>


