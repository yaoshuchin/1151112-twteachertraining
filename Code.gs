/**
 * ==========================================================================
 * Google Apps Script 後端部署程式碼 (Code.gs)
 * ==========================================================================
 * 說明：
 * 若您希望將此平台如原網站一樣以 Google Apps Script 部署並嵌入 Google 協作平台 (Google Sites)：
 * 1. 建立一個新的 Google Apps Script 專案 (script.google.com)
 * 2. 將此 Code.gs 貼入程式碼編輯器
 * 3. 建立一個 HTML 檔案命名為 Index.html，將 index.html 的內容貼入
 * 4. 點選「部署」->「新增部署作業」-> 類型選擇「網頁應用程式 (Web App)」
 * 5. 存取權限設定為「所有人 (Anyone)」，複製產生的 Web App URL
 * 6. 至 Google 協作平台以「嵌入」功能貼上該網址即可！
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Sci-Flipper 教師專業發展學習平台')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * 處理前端送出的登入或登記表單 (可自動寫入 Google 試算表)
 */
function processFormSubmission(formData) {
  try {
    // 若有綁定試算表，可開啟試算表記錄
    // var ss = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");
    // var sheet = ss.getSheetByName("登入記錄") || ss.getActiveSheet();
    // sheet.appendRow([
    //   new Date(),
    //   formData.portal || "user",
    //   formData.city,
    //   formData.organization,
    //   formData.name
    // ]);

    return {
      success: true,
      message: "驗證成功，歡迎使用 Sci-Flipper 教師專業發展學習平台！"
    };
  } catch (error) {
    return {
      success: false,
      message: "處理失敗：" + error.toString()
    };
  }
}
