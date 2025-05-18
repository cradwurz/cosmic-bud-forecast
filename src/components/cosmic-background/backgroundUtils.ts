
export const drawBackground = (
  ctx: CanvasRenderingContext2D,
  dimensions: { width: number, height: number }
) => {
  // Create deep space gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, dimensions.height);
  gradient.addColorStop(0, 'rgba(10, 10, 30, 1)');      // Deep blue at top
  gradient.addColorStop(0.4, 'rgba(25, 15, 50, 0.95)'); // Deep purple in middle
  gradient.addColorStop(1, 'rgba(15, 10, 30, 0.9)');    // Dark blue-black at bottom
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, dimensions.width, dimensions.height);
};
