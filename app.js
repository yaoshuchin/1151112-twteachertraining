/**
 * Sci-Flipper 教師專業發展學習平台 - 前端邏輯
 * 已移除密碼、縣市、單位、姓名限制，改為一鍵快速直接進入
 */

// DOM 元素引用
const entryCard = document.getElementById('entryCard');
const enterBtn = document.getElementById('enterBtn');
const roleUserBtn = document.getElementById('roleUserBtn');
const roleAdminBtn = document.getElementById('roleAdminBtn');
const platformDashboard = document.getElementById('platformDashboard');
const currentRoleBadge = document.getElementById('currentRoleBadge');
const welcomeHeading = document.getElementById('welcomeHeading');
const toastNotice = document.getElementById('toastNotice');

// AI 回饋互動面板元素
const aiUserInput = document.getElementById('aiUserInput');
const aiSendBtn = document.getElementById('aiSendBtn');
const aiResponseBox = document.getElementById('aiResponseBox');

// 當前選擇身分 ('學員' | '教師/管理員')
let currentRole = '學員';

// 1. 身分切換事件
roleUserBtn.addEventListener('click', function () {
  currentRole = '學員';
  roleUserBtn.classList.add('active');
  roleAdminBtn.classList.remove('active');
  updateRoleBadge();
});

roleAdminBtn.addEventListener('click', function () {
  currentRole = '教師/管理員';
  roleAdminBtn.classList.add('active');
  roleUserBtn.classList.remove('active');
  updateRoleBadge();
});

function updateRoleBadge() {
  if (currentRoleBadge) {
    currentRoleBadge.textContent = `當前身分：${currentRole}視角`;
  }
}

// 2. 點擊「立即進入平台」按鈕
enterBtn.addEventListener('click', function () {
  enterBtn.disabled = true;
  enterBtn.innerHTML = '<span>⚡ 正在載入平台工作區...</span>';

  setTimeout(() => {
    // 隱藏入口卡片，顯示工作區儀表板
    entryCard.style.display = 'none';
    platformDashboard.style.display = 'block';

    updateRoleBadge();
    showToast(`歡迎進入 Sci-Flipper 平台！當前模式：${currentRole}`, 'success');

    // 平滑捲動至工作區
    platformDashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 400);
});

// 3. 模組開啟提示
function openModule(moduleName) {
  showToast(`已開啟【${moduleName}】研習模組`, 'info');
}

// 4. GULLA AI 智能互動回饋模擬
aiSendBtn.addEventListener('click', function () {
  const query = aiUserInput.value.trim();
  if (!query) {
    showToast('請先輸入教學問題或課堂反思', 'error');
    aiUserInput.focus();
    return;
  }

  aiSendBtn.disabled = true;
  aiSendBtn.textContent = '生成回饋中...';
  aiResponseBox.className = 'ai-response-box active';
  aiResponseBox.innerHTML = '<em>🤖 GULLA 語言模型代理人正在分析您的提問並進行語意診斷...</em>';

  setTimeout(() => {
    aiSendBtn.disabled = false;
    aiSendBtn.textContent = '取得回饋';

    const feedbackText = `
      <strong>💡 GULLA 專業回饋與引導建議：</strong><br><br>
      針對您的提問「<em>${query}</em>」，系統提供以下 3 項課堂實作建議：<br>
      1. <strong>鷹架式提問設計</strong>：先讓學生以自然語言描述觀察到的現象，再引導其將問題結構化為「操縱變因」與「應變變因」。<br>
      2. <strong>AI 作為思維教練 (Thinking Partner)</strong>：鼓勵學生主動向 AI 提出「假說驗證」提問，而非單純尋求現成答案。<br>
      3. <strong>反思回饋機制</strong>：在課堂結尾運用 3 分鐘 Exit Ticket，請學生記錄「今天課堂上最意想不到的科學發現」，並由 GULLA 彙整全班共構學習歷程。<br><br>
      <span style="color: #2e5b38; font-size: 12.5px;">（以上回饋由 GULLA 學習回饋引擎根據鍾昌宏老師 2025 Sci-Flipper 研習架構自動生成）</span>
    `;
    aiResponseBox.innerHTML = feedbackText;
    showToast('GULLA 專業學習回饋已產生！', 'success');
  }, 800);
});

// 5. Toast 通知輔助函式
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
