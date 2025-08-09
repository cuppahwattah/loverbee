
const beeContainer = document.getElementById('bee-container');


// Use bee.png image instead of SVG
const beeImg = document.createElement('img');
beeImg.src = 'bee.png';
beeImg.className = 'bee';
beeImg.style.position = 'absolute';
beeImg.style.width = '48px';
beeImg.style.height = '48px';
beeImg.style.zIndex = '10';
beeContainer.appendChild(beeImg);
const bee = beeImg;

// Set bee's initial position to the beehive image (top right corner)
let beeX = window.innerWidth / 2;
let beeY = window.innerHeight / 2;
let targetX = beeX;
let targetY = beeY;

function moveBee() {
  // Smoothly interpolate bee position
  beeX += (targetX - beeX) * 0.15;
  beeY += (targetY - beeY) * 0.15;
  bee.style.transform = `translate(${beeX - 24}px, ${beeY - 24}px)`;

  // Add trail
  const trail = document.createElement('div');
  trail.className = 'trail';
  // Attach trail to bottom right of bee (bee is 48x48, trail is 12x12)
  trail.style.left = `${beeX + 12}px`;
  trail.style.top = `${beeY + 12}px`;
  trail.style.width = '12px';
  trail.style.height = '12px';
  beeContainer.appendChild(trail);
  setTimeout(() => {
    trail.style.opacity = '0';
    setTimeout(() => beeContainer.removeChild(trail), 500);
  }, 400);

  requestAnimationFrame(moveBee);
}

window.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

moveBee();
