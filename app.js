/**
 * Sci-Flipper 教師專業發展學習平台 - 前端邏輯
 * 包含：縣市與單位連動選單、身分入口切換、表單驗證與模擬登入處理
 */

// 縣市與其對應單位資料庫
const CITY_ORGANIZATIONS = {
  "Sci-Flipper 跨領域專業學習社群": [
    "核心發展組",
    "教案研發組",
    "種子培訓教師",
    "社群正式學員",
    "觀察員"
  ],
  "教育部": [
    "國民及學前教育署 (國教署)",
    "資訊及科技教育司 (資科司)",
    "師資培育及藝術教育司 (師藝司)",
    "高等教育司"
  ],
  "大專院校": [
    "國立臺灣師範大學",
    "國立臺中教育大學",
    "國立高雄師範大學",
    "國立清華大學",
    "國立彰化師範大學",
    "國立臺北教育大學"
  ],
  "臺北市": [
    "木柵國中",
    "無界塾",
    "建成國中",
    "龍門國中",
    "北投國中",
    "南門國中",
    "中崙高中",
    "麗山高中",
    "建國中學",
    "北一女中"
  ],
  "新北市": [
    "板橋國中",
    "海山高中",
    "三和國中",
    "新莊高中",
    "江翠國中",
    "永和國中",
    "中和國中"
  ],
  "桃園市": [
    "桃園國中",
    "武陵高中",
    "經國國中",
    "平鎮高中",
    "中壢國中",
    "青埔國中"
  ],
  "臺中市": [
    "居仁國中",
    "臺中女中",
    "臺中一中",
    "惠文高中",
    "光榮國中",
    "西苑高中"
  ],
  "雲林縣": [
    "斗六國中",
    "正心中學",
    "虎尾高中",
    "雲林國中",
    "西螺國中"
  ],
  "高雄市": [
    "高雄中學",
    "高雄女中",
    "五福國中",
    "陽明國中",
    "七賢國中"
  ],
  "苗栗縣": [
    "苗栗國中",
    "建臺中學",
    "竹南高中",
    "照南國中"
  ],
  "新竹縣": [
    "成功國中",
    "六家高中",
    "竹北高中",
    "仁愛國中"
  ],
  "臺南市": [
    "建興國中",
    "臺南一中",
    "臺南女中",
    "後甲國中",
    "南新國中"
  ],
  "屏東縣": [
    "屏東高中",
    "屏東女中",
    "中正國中",
    "明正國中"
  ]
};

// DOM 元素引用
const citySelect = document.getElementById('citySelect');
const orgSelect = document.getElementById('orgSelect');
const nameInput = document.getElementById('nameInput');
const loginForm = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitBtn');
const switchPortalLink = document.getElementById('switchPortalLink');
const cardTitle = document.getElementById('cardTitle');
const toastNotice = document.getElementById('toastNotice');

// 當前登入模式 ('user' | 'admin')
let currentPortal = 'user';

// 1. 監聽縣市下拉選單變更 -> 更新單位選單
citySelect.addEventListener('change', function () {
  const selectedCity = this.value;

  // 清空單位選單
  orgSelect.innerHTML = '';

  if (!selectedCity || selectedCity === '請選擇') {
    orgSelect.disabled = true;
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '請先選擇縣市';
    orgSelect.appendChild(defaultOption);
    return;
  }

  // 啟用單位選單
  orgSelect.disabled = false;

  // 預設提示選項
  const promptOption = document.createElement('option');
  promptOption.value = '';
  promptOption.textContent = '請選擇';
  orgSelect.appendChild(promptOption);

  // 載入該縣市之單位清單
  const orgs = CITY_ORGANIZATIONS[selectedCity] || [];
  orgs.forEach(org => {
    const opt = document.createElement('option');
    opt.value = org;
    opt.textContent = org;
    orgSelect.appendChild(opt);
  });
});

// 2. 切換入口 (使用者登入 <-> 教師/管理員入口)
switchPortalLink.addEventListener('click', function (e) {
  e.preventDefault();
  if (currentPortal === 'user') {
    currentPortal = 'admin';
    cardTitle.textContent = '教師 / 管理員登入';
    switchPortalLink.textContent = '切換至 學員/使用者入口';
    submitBtn.textContent = '管理員登入';
    showToast('已切換至 教師/管理員登入 模式');
  } else {
    currentPortal = 'user';
    cardTitle.textContent = '使用者登入';
    switchPortalLink.textContent = '切換至 教師/管理員入口';
    submitBtn.textContent = '登入';
    showToast('已切換至 使用者登入 模式');
  }
});

// 3. 表單送出處理
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const city = citySelect.value;
  const org = orgSelect.value;
  const name = nameInput.value.trim();

  // 驗證欄位 (已解除密碼限制，免密碼即可送出登入)
  if (!city || city === '請選擇') {
    showToast('請先選擇縣市', 'error');
    citySelect.focus();
    return;
  }

  if (!org || org === '請選擇') {
    showToast('請選擇所屬單位', 'error');
    orgSelect.focus();
    return;
  }

  if (!name) {
    showToast('請輸入姓名', 'error');
    nameInput.focus();
    return;
  }

  // 模擬送出中的按鈕狀態
  submitBtn.disabled = true;
  const originalText = submitBtn.textContent;
  submitBtn.textContent = '登入驗證中...';

  // 模擬網路延遲與驗證回應
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;

    console.log('【表單提交資料】', {
      portal: currentPortal,
      city: city,
      organization: org,
      name: name,
      timestamp: new Date().toISOString()
    });

    showToast(`歡迎 ${name}！登入成功 (${city} - ${org})`, 'success');
  }, 900);
});

// 4. Toast 通知輔助函式
let toastTimer = null;
function showToast(message, type = 'info') {
  if (!toastNotice) return;
  toastNotice.textContent = message;
  toastNotice.className = `toast-notice show ${type}`;

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastNotice.className = 'toast-notice';
  }, 3200);
}
