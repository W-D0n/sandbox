export function createAboutPage(): HTMLElement {
  const container = document.createElement('div')
  container.innerHTML = `
    <h1>About Us</h1>
    <p>This is the about page of the application.</p>
  `;
  return container
}