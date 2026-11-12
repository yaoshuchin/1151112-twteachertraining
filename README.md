# Sci-Flipper 教師專業發展學習平台 - 完整複製品

本專案為針對 [Google Sites - Sci-Flipper 教師專業發展學習平台](https://sites.google.com/view/twteachertraining/home) 的 1:1 完整複製與實作，包含前端介面、互動邏輯、Google Apps Script 部署檔以及 Google 表單 (Google Forms) 建立規格。

---

## 專案目錄結構

```
teacher-training-clone/
│
├── index.html        # 完整的 1:1 複製品網頁 (雙擊即可直接在瀏覽器預覽)
├── styles.css        # 高還原度 CSS 樣式 (支援響應式 RWD、配色與字體)
├── app.js            # 前端 JavaScript 邏輯 (縣市/單位動態聯動、身分切換、表單驗證)
├── logo.png          # 精準擷取的 Sci-Flipper 平台高解析 Logo 圖示
├── Code.gs           # Google Apps Script 部署程式碼 (支援嵌入 Google 協作平台)
└── README.md         # 說明文件與 Google 表單設定指南
```

---

## 功能特點

1. **外觀精準還原**：
   - 包含原站點的品牌 Logo、主標題 `Sci-Flipper 教師專業發展學習平台`、副標題 `GULLA 專業學習回饋系統` 與 `Generative Universal Language-model Learning Agent`。
   - 經典森林綠按鈕 (`#2e5b38`)、卡片陰影、圓角及 Google Sites 風格底部資訊提示。
2. **兩級連動下拉選單 (縣市 ➔ 單位)**：
   - 預設「單位」為禁用狀態 (`請先選擇縣市`)。
   - 選擇縣市（如：臺北市、新北市、臺中市、教育部、Sci-Flipper 社群...）後，自動載入並啟用對應的學校或單位選項。
3. **解除密碼限制 (免密碼登入)**：
   - 已依照需求移除密碼欄位與驗證限制，只需選擇縣市、單位並輸入姓名即可直接登入/送出表單。
4. **即時提示與驗證 (Toast Notice)**：
   - 表單送出時具備完整的欄位驗證、按鈕防重複送出狀態與友善的通知提示。

---

## 如何在本地預覽與使用？

1. 直接開啟檔案總管，進入資料夾：
   `C:\Users\admin\Downloads\teacher-training-clone`
2. 雙擊 `index.html` 即可在 Chrome、Edge 或任何瀏覽器中預覽。

---

## 若要重新部署至 Google 協作平台 (Google Sites)

原網站是透過 Google 協作平台嵌入 **Google Apps Script Web App** 來實現的，您可以依照以下步驟建立自己的版本：

1. 開啟 [Google Apps Script](https://script.google.com/) 並新增專案。
2. 將專案中的 `Code.gs` 內容替換為本專案的 [Code.gs](file:///c:/Users/admin/Downloads/teacher-training-clone/Code.gs)。
3. 在 Apps Script 左側點擊 `+` 新增 HTML 檔案，命名為 `Index`（會自動變為 `Index.html`），將本專案的 `index.html`（含 CSS/JS 整合或引用）貼入。
4. 點擊右上角 **「部署」 ➔ 「新增部署作業」**：
   - 類型：**網頁應用程式 (Web App)**
   - 存取權限：**所有人 (Anyone)**
5. 複製產生的 Web 應用程式網址。
6. 前往您的 [Google 協作平台 (Google Sites)](https://sites.google.com/)，在右側工具列點選「嵌入」，輸入該網址並儲存發布即可！

---

## 若要以 Google 表單 (Google Forms) 建立

如果您希望將此登入/報名流程製作成純 Google 表單：

1. 前往 [Google 表單](https://forms.google.com/) 建立新表單。
2. **表單標題**：`Sci-Flipper 教師專業發展學習平台`
3. **說明**：`GULLA 專業學習回饋系統 · Generative Universal Language-model Learning Agent (鍾昌宏 , 2025)`
4. **題目設計**：
   - **Q1（單選題）**：身分選擇
     - 選項：學員/使用者、教師/管理員
   - **Q2（下拉式選單）**：縣市
     - 選項：Sci-Flipper 跨領域專業學習社群、教育部、大專院校、臺北市、桃園市、臺中市、雲林縣、高雄市、苗栗縣、新竹縣、臺南市、屏東縣、新北市
   - **Q3（簡答題 或 區段跳轉）**：所屬單位 / 學校
   - **Q4（簡答題）**：姓名
   - **Q5（簡答題）**：密碼
5. 在 Google 表單設定中可開啟「將回覆傳送至 Google 試算表」，即可即時收集與管理所有成員資料。
