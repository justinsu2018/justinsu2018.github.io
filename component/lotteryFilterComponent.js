function createComboSelector(containerId, selectId = 'combo', onReadyCallback = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  //const label = document.createElement('label');
  //label.setAttribute('for', selectId);
  //label.textContent = '單價 - 名稱';

  const select = document.getElementById(selectId) || document.createElement('select');
  select.id = selectId;
  select.style.maxWidth = '220px';
  select.style.padding = '6px';

  if (!document.getElementById(selectId)) {
    //container.appendChild(label);
    container.appendChild(select);
  }

  loadComboOptions(selectId);

  if (typeof onReadyCallback === 'function') {
    onReadyCallback();
  }
}

function loadComboOptions(comboSelectId) {
  const comboSelect = document.getElementById(comboSelectId);
  const settings = JSON.parse(localStorage.getItem('lotterySettingsList') || '[]');
  comboSelect.innerHTML = '<option value="">請選擇</option>';
  settings.forEach(s => {
    const option = document.createElement('option');
    option.value = `${s.unitPrice}|||${s.name}`;
    option.textContent = `${s.unitPrice} - ${s.name}`;
    comboSelect.appendChild(option);
  });
}
