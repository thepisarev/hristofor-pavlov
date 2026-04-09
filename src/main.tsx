import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppV2 from './AppV2'
import './index.css'

const path = window.location.pathname;
const isV1 = path === '/v1' || path === '/v1/';
const isAdmin = path === '/admin' || path === '/admin/';

async function render() {
  let Component: React.ComponentType;
  if (isV1) {
    Component = App;
  } else if (isAdmin) {
    const mod = await import('./Admin');
    Component = mod.default;
  } else {
    Component = AppV2;
  }
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
  );
}

render().catch((e) => {
  console.error('Failed to render app:', e);
  const root = document.getElementById('root');
  if (root) {
    const div = document.createElement('div');
    div.style.cssText = 'padding:40px;text-align:center;color:#f59e0b;font-family:monospace';
    div.textContent = 'Ошибка загрузки. Обновите страницу.';
    root.appendChild(div);
  }
});
