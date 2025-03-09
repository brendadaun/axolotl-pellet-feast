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
