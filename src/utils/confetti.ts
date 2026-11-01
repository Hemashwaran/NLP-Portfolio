import confetti from 'canvas-confetti';

export function scatterClassroomStars() {
  try {
    // Star shapes
    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f2b84b', '#fde047', '#deb887', '#ffffff'],
      shapes: ['star'],
      scalar: 1.2
    });
  } catch {
    // Canvas fallback
  }
}
