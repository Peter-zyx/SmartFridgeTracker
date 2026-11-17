import qrcode from 'qrcode-generator';

const storageKey = 'fridge-settings-v1';
export const settings = { accountId: null, name: '', clock: '24', markers: true, game: false };

try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (typeof saved?.accountId === 'string' &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(saved.accountId)) {
    settings.accountId = saved.accountId;
  }
  if (typeof saved?.name === 'string') settings.name = saved.name.trim().slice(0, 48);
  settings.game = saved?.game === true;
  if (saved?.clock === '12') settings.clock = '12';
  if (typeof saved?.markers === 'boolean') settings.markers = saved.markers;
} catch {}

const page = document.querySelector('#menu-page');
const dialog = page.querySelector('#profile-dialog');
const input = page.querySelector('#profile-input');
const status = page.querySelector('#settings-status');
const error = dialog.querySelector('.profile-error');
const qrDialog = page.querySelector('#qr-dialog');
const qrButton = page.querySelector('#profile-qr');

function renderAccountCode() {
  if (!settings.accountId && !save({ accountId: crypto.randomUUID() })) {
    qrButton.hidden = true;
    return;
  }
  qrButton.hidden = false;
  const image = qrDialog.querySelector('img');
  if (image.hasAttribute('src')) return;
  const code = qrcode(0, 'M');
  code.addData('SMART FRIDGE ACCOUNT: ' + settings.accountId.toUpperCase(), 'Alphanumeric');
  code.make();
  const svg = code.createSvgTag({ cellSize: 4 }).replace('fill="black"', 'fill="#183a32"');
  image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  qrButton.querySelector('img').src = image.src;
  qrDialog.querySelector('code').textContent = settings.accountId;
}

qrButton.onclick = () => {
  qrDialog.querySelector('.qr-owner').textContent = settings.name || 'My profile';
  qrDialog.showModal();
};
qrDialog.querySelector('button').onclick = () => qrDialog.close();

function render() {
  page.querySelector('#profile-name').textContent = settings.name || 'My profile';
  page.querySelector(`input[name="clock"][value="${settings.clock}"]`).checked = true;
  page.querySelector('#game-mode').checked = settings.game;
  page.querySelector('#expiry-markers').checked = settings.markers;
}

function save(change) {
  const next = { ...settings, ...change };
  try {
    localStorage.setItem(storageKey, JSON.stringify(next));
  } catch {
    render();
    const feedback = dialog.open ? error : status;
    feedback.hidden = false;
    feedback.textContent = 'Could not save on this device. Try again.';
    return false;
  }
  Object.assign(settings, next);
  status.textContent = '';
  render();
  if ('game' in change) window.dispatchEvent(new Event('game-change'));
  if (change.clock) window.dispatchEvent(new Event('clock-change'));
  return true;
}

page.querySelector('#profile-edit').onclick = () => {
  input.value = settings.name;
  input.setCustomValidity('');
  error.hidden = true;
  dialog.showModal();
  input.focus();
};
input.oninput = () => input.setCustomValidity('');
page.querySelector('#profile-cancel').onclick = () => dialog.close();
page.querySelector('#profile-form').onsubmit = event => {
  event.preventDefault();
  const name = input.value.trim();
  if (!name) {
    input.setCustomValidity('Enter a display name.');
    input.reportValidity();
    return;
  }
  if (save({ name })) dialog.close();
};
page.addEventListener('change', ({ target }) => {
  if (target.name === 'clock') save({ clock: target.value });
  if (target.id === 'game-mode') save({ game: target.checked });
  if (target.id === 'expiry-markers') save({ markers: target.checked });
});
window.addEventListener('menu-show', () => {
  renderAccountCode();
  render();
  page.hidden = false;
  page.scrollTop = 0;
  page.querySelector('h1').focus({ preventScroll: true });
});
window.addEventListener('menu-hide', () => {
  if (dialog.open) dialog.close();
  if (qrDialog.open) qrDialog.close();
  page.hidden = true;
});
