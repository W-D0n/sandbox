import './style.css'
import { createHomePage } from './pages/homePage'
import { createAboutPage } from './pages/aboutPage'
import { createAnimationPage } from './pages/animationPage'

const app = document.querySelector<HTMLDivElement>('#app')!;
const pages: Record<string, () => HTMLElement> = {
  home: createHomePage,
  about: createAboutPage,
  animation: createAnimationPage,
};


function renderPage(page: string) {
  app.innerHTML = '';
  const createPage = pages[page];
  if (createPage) {
    app.appendChild(createPage());
  } else {
    app.innerHTML = `<h1>404 Not Found</h1>`;
  }
}

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (target.tagName === 'A' && target.dataset.page) {
    event.preventDefault();
    renderPage(target.dataset.page);
  }
});

renderPage('home')  // Default page