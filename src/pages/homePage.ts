export function createHomePage(): HTMLElement {
  const container = document.createElement('div')
  container.innerHTML = `
    <h1>Home</h1>
    <p>This is the home page of the application.</p>
  `;
  return container
}