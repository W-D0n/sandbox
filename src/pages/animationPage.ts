export function createAnimationPage(): HTMLElement {
  const container = document.createElement('div');
  container.innerHTML = `
    <h1>Animation</h1>
    <p>This is the animation page of the application.</p>
  `;
  return container
}