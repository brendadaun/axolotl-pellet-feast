// Detect if on mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Adjust game parameters for mobile
if (isMobile) {
  // Slower generation of obstacles on mobile
  obstacleInterval = setInterval(() => {
    if (gamePaused) return;
    if (level >= 2 && Math.random() > 0.5) {  // 50% chance to create obstacle
      createObstacle();
    }
  }, 4000);
  
  // Make axolotl slightly slower on mobile for easier control
  axolotlSpeed = 4;
}

// Update game dimensions on orientation change or resize
window.addEventListener('resize', updateGameDimensions);
window.addEventListener('orientationchange', updateGameDimensions);

function updateGameDimensions() {
  // Update container dimensions reference
  const newContainerWidth = gameContainer.offsetWidth;
  const newContainerHeight = gameContainer.offsetHeight;
  
  // Make sure axolotl stays within bounds after resize
  if (axolotlX > newContainerWidth - axolotlWidth) {
    axolotlX = newContainerWidth - axolotlWidth;
  }
  
  if (axolotlY > newContainerHeight - axolotlHeight) {
    axolotlY = newContainerHeight - axolotlHeight;
  }
  
  updateAxolotlPosition();
}
