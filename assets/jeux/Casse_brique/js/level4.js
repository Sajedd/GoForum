// Initialisation des variables
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let balleX = canvas.width / 2;
let balleY = canvas.height - 30;
let dx = 9;
let dy = -9;
let raquetteLargeur = 75;
let raquetteHauteur = 10;
let raquetteX = (canvas.width - raquetteLargeur) / 2;
let droitePressee = false;
let gauchePressee = false;
let briqueRangeeCount = 3;
let briqueColonneCount = 7;
let briqueLargeur = 75;
let briqueHauteur = 20;
let briquePadding = 10;
let briqueOffsetTop = 30;
let briqueOffsetLeft = 30;
let score = 0;
let vies = 3;

// Création des briques
let briques = [];
for (let c = 0; c < briqueColonneCount; c++) {
  briques[c] = [];
  for (let r = 0; r < briqueRangeeCount; r++) {
    briques[c][r] = { x: 0, y: 0, statut: 1 };
  }
}

// Fonction de dessin de la balle
function dessinerBalle() {
  ctx.beginPath();
  ctx.arc(balleX, balleY, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// Fonction de dessin de la raquette
function dessinerRaquette() {
  ctx.beginPath();
  ctx.rect(
    raquetteX,
    canvas.height - raquetteHauteur,
    raquetteLargeur,
    raquetteHauteur
  );
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// Fonction de dessin des briques
function dessinerBriques() {
  for (let c = 0; c < briqueColonneCount; c++) {
    for (let r = 0; r < briqueRangeeCount; r++) {
      if (briques[c][r].statut == 1) {
        let briqueX = c * (briqueLargeur + briquePadding) + briqueOffsetLeft;
        let briqueY = r * (briqueHauteur + briquePadding) + briqueOffsetTop;
        briques[c][r].x = briqueX;
        briques[c][r].y = briqueY;
        ctx.beginPath();
        ctx.rect(briqueX, briqueY, briqueLargeur, briqueHauteur);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// Fonction de détection de collision avec les briques
function collisionDetection() {
  for (let c = 0; c < briqueColonneCount; c++) {
    for (let r = 0; r < briqueRangeeCount; r++) {
      let b = briques[c][r];
      if (b.statut == 1) {
        if (
          balleX > b.x &&
          balleX < b.x + briqueLargeur &&
          balleY > b.y &&
          balleY < b.y + briqueHauteur
        ) {
          dy = -dy;
          b.statut = 0;
          score++;
          if (score == briqueRangeeCount * briqueColonneCount) {
            alert("Bravo, vous avez gagné !");
            document.location.reload();
          }
        }
      }
    }
  }
}

// Fonction de dessin du score
function dessinerScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}

// Fonction de dessin des vies
function dessinerVies() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Vies: " + vies, canvas.width - 65, 20);
}

// Fonction de déplacement de la raquette
function deplacerRaquette() {
  if (droitePressee && raquetteX < canvas.width - raquetteLargeur) {
    raquetteX += 9;
  } else if (gauchePressee && raquetteX > 0) {
    raquetteX -= 9;
  }
}

// Fonction de détection de collision avec les bords du canvas
function collisionDetectionBords() {
  if (balleX + dx > canvas.width - 10 || balleX + dx < 10) {
    dx = -dx;
  }
  if (balleY + dy < 10) {
    dy = -dy;
  } else if (balleY + dy > canvas.height - 10) {
    if (balleX > raquetteX && balleX < raquetteX + raquetteLargeur) {
      dy = -dy;
    } else {
      vies--;
      if (!vies) {
        alert("Perdu, dommage !");
        document.location.reload();
      } else {
        balleX = canvas.width / 2;
        balleY = canvas.height - 30;
        dx = 9;
        dy = -9;
        raquetteX = (canvas.width - raquetteLargeur) / 2;
      }
    }
  }
}

// Fonction principale de dessin
function dessiner() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dessinerBriques();
  dessinerBalle();
  dessinerRaquette();
  dessinerScore();
  dessinerVies();
  collisionDetection();
  collisionDetectionBords();
  deplacerRaquette();
  balleX += dx;
  balleY += dy;
  requestAnimationFrame(dessiner);
}

// Gestionnaires d'événements de clavier
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 39) {
    droitePressee = true;
  } else if (event.keyCode == 37) {
    gauchePressee = true;
  }
});
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 39) {
    droitePressee = false;
  } else if (event.keyCode == 37) {
    gauchePressee = false;
  }
});

// Recommencer
canvas.addEventListener("click", () => {
  if (fin === true) {
    fin = false;
    document.location.reload();
  }
});

// Lancement de la fonction de dessin toutes les 10 millisecondes
dessiner();
