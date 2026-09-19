/*
 * ROSTUNING — Каталог прошивок (вынесенный виджет, для Tilda).
 *
 * Загружается с внешнего хостинга через <script src="...">,
 * потому что весь код целиком не вмещается в один блок Tilda
 * (лимит — 30 000 байт на блок).
 *
 * Как обновлять каталог — откройте этот файл в firmware_editor.py,
 * как и раньше — редактор находит и меняет данные внутри этого файла точно так же,
 * как раньше делал это в orderfirmware.html.
 */

(function(){
  var GT_CSS = "\r\n  #gt-firmware-root{\r\n    --gt-bg:        #FFFFFF;\r\n    --gt-bg-alt:    #F4F4F4;\r\n    --gt-surface:   #FFFFFF;\r\n    --gt-surface-2: #F4F4F4;\r\n    --gt-line:      #E4E4E4;\r\n    --gt-black:     #1A1A1A;\r\n    --gt-text:      #1A1A1A;\r\n    --gt-text-dim:  #6B6B6B;\r\n    --gt-red:       #E5231D;\r\n    --gt-red-dark:  #C31B16;\r\n    --gt-radius:    3px;\r\n    --gt-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\r\n    --gt-cond: 'Montserrat', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    --gt-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n\r\n    all: initial;\r\n    display: block;\r\n    font-family: var(--gt-sans);\r\n    color: var(--gt-text);\r\n    background: var(--gt-bg);\r\n    line-height: 1.55;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  #gt-firmware-root *{ box-sizing: border-box; }\r\n  #gt-firmware-root :focus-visible{\r\n    outline: 2px solid var(--gt-red);\r\n    outline-offset: 2px;\r\n  }\r\n  #gt-firmware-root a{ color: inherit; text-decoration: none; }\r\n  #gt-firmware-root p{ margin: 0 0 0.9em; color: var(--gt-text-dim); }\r\n  #gt-firmware-root h1,\r\n  #gt-firmware-root h2{ margin: 0; }\r\n\r\n  .gt-fw{\r\n    max-width: 860px;\r\n    margin: 0 auto;\r\n    padding: 56px 20px 64px;\r\n  }\r\n\r\n  /* ---------- Hero ---------- */\r\n  .gt-fw__hero{ padding-bottom: 40px; border-bottom: 1px solid var(--gt-line); }\r\n  .gt-fw__title{\r\n    font-family: var(--gt-cond);\r\n    font-weight: 600;\r\n    font-size: clamp(30px, 5.2vw, 46px);\r\n    line-height: 1.08;\r\n    letter-spacing: 0.005em;\r\n    color: var(--gt-black);\r\n    margin-bottom: 18px;\r\n  }\r\n  .gt-fw__lead{\r\n    max-width: 56ch;\r\n    font-size: 16.5px;\r\n    color: var(--gt-text-dim);\r\n  }\r\n  .gt-fw__specs{\r\n    list-style: none;\r\n    margin: 22px 0 0;\r\n    padding: 0;\r\n    display: grid;\r\n    gap: 10px;\r\n  }\r\n  .gt-fw__specs li{\r\n    display: flex;\r\n    gap: 10px;\r\n    align-items: baseline;\r\n    font-size: 14.5px;\r\n    color: var(--gt-text);\r\n  }\r\n  .gt-fw__specs-mark{\r\n    font-family: var(--gt-mono);\r\n    color: var(--gt-red);\r\n    flex: none;\r\n    width: 1.1em;\r\n  }\r\n\r\n  /* ---------- Section headings ---------- */\r\n  .gt-fw__h2{\r\n    font-family: var(--gt-cond);\r\n    font-weight: 600;\r\n    font-size: 24px;\r\n    letter-spacing: 0.005em;\r\n    color: var(--gt-black);\r\n    margin-bottom: 6px;\r\n  }\r\n  .gt-fw__hint{ font-size: 14px; margin-bottom: 22px; }\r\n\r\n  /* ---------- Catalog / filters ---------- */\r\n  .gt-fw__catalog{ padding: 44px 0; border-bottom: 1px solid var(--gt-line); }\r\n\r\n  .gt-fw__filters{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 12px;\r\n    margin-bottom: 24px;\r\n  }\r\n  .gt-fw__field label{\r\n    display: block;\r\n    font-family: var(--gt-mono);\r\n    font-size: 11px;\r\n    letter-spacing: 0.04em;\r\n    color: var(--gt-text-dim);\r\n    margin-bottom: 6px;\r\n  }\r\n  .gt-fw__field select{\r\n    all: unset;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    width: 100%;\r\n    padding: 11px 34px 11px 12px;\r\n    background-color: var(--gt-surface);\r\n    border: 1px solid var(--gt-line);\r\n    border-radius: var(--gt-radius);\r\n    color: var(--gt-text);\r\n    font-size: 14.5px;\r\n    font-family: var(--gt-sans);\r\n    cursor: pointer;\r\n    background-image: linear-gradient(45deg, transparent 50%, var(--gt-text-dim) 50%), linear-gradient(135deg, var(--gt-text-dim) 50%, transparent 50%);\r\n    background-position: calc(100% - 18px) center, calc(100% - 13px) center;\r\n    background-size: 5px 5px, 5px 5px;\r\n    background-repeat: no-repeat;\r\n    transition: border-color .15s ease;\r\n  }\r\n  .gt-fw__field select:hover:not(:disabled){ border-color: var(--gt-red); }\r\n  .gt-fw__field select:disabled{ opacity: 0.45; cursor: not-allowed; }\r\n\r\n  .gt-fw__results{ display: grid; gap: 12px; }\r\n  .gt-fw__placeholder{\r\n    margin: 0;\r\n    padding: 22px 16px;\r\n    border: 1px dashed var(--gt-line);\r\n    border-radius: var(--gt-radius);\r\n    font-size: 14px;\r\n    text-align: center;\r\n    background: var(--gt-bg-alt);\r\n    color: var(--gt-text-dim);\r\n  }\r\n  .gt-fw__placeholder--inline{\r\n    border: none;\r\n    background: none;\r\n    padding: 4px 0 0;\r\n    text-align: left;\r\n  }\r\n\r\n  .gt-fw__card{\r\n    padding: 18px 18px;\r\n    background: var(--gt-surface);\r\n    border: 1px solid var(--gt-line);\r\n    border-left: 3px solid var(--gt-red);\r\n    border-radius: var(--gt-radius);\r\n    box-shadow: 0 1px 2px rgba(0,0,0,0.04);\r\n  }\r\n  .gt-fw__card-id{\r\n    font-family: var(--gt-mono);\r\n    font-size: 12px;\r\n    color: var(--gt-red);\r\n    margin-bottom: 6px;\r\n    letter-spacing: 0.02em;\r\n    word-break: break-word;\r\n  }\r\n  .gt-fw__card-title{\r\n    font-family: var(--gt-cond);\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: var(--gt-black);\r\n    margin-bottom: 10px;\r\n  }\r\n  .gt-fw__card-desc{\r\n    font-size: 14.5px;\r\n    line-height: 1.6;\r\n    color: var(--gt-text);\r\n    margin: 0 0 14px;\r\n  }\r\n  .gt-fw__card-desc strong{\r\n    font-weight: 700;\r\n    color: var(--gt-black);\r\n  }\r\n\r\n  /* ---------- Stage selector ---------- */\r\n  .gt-fw__stage-layout{\r\n    display: grid;\r\n    grid-template-columns: 108px 1fr;\r\n    gap: 12px;\r\n    align-items: stretch;\r\n    padding: 14px 0;\r\n    margin-bottom: 4px;\r\n    border-top: 1px solid var(--gt-line);\r\n    border-bottom: 1px solid var(--gt-line);\r\n  }\r\n  .gt-fw__stage-buttons{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n  }\r\n  .gt-fw__stage-btn{\r\n    all: unset;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 8px 6px;\r\n    border: 1px solid var(--gt-line);\r\n    border-radius: var(--gt-radius);\r\n    font-family: var(--gt-cond);\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    color: var(--gt-text);\r\n    background: var(--gt-surface);\r\n    transition: background .15s ease, border-color .15s ease, color .15s ease;\r\n  }\r\n  .gt-fw__stage-btn:hover{ border-color: var(--gt-red); color: var(--gt-red); }\r\n  .gt-fw__stage-btn.is-active{\r\n    background: var(--gt-red);\r\n    border-color: var(--gt-red);\r\n    color: #FFFFFF;\r\n  }\r\n  .gt-fw__stage-btn--plain{\r\n    font-family: var(--gt-sans);\r\n    font-weight: 500;\r\n  }\r\n  .gt-fw__stage-panel{\r\n    border: 1px solid var(--gt-line);\r\n    border-radius: var(--gt-radius);\r\n    background: var(--gt-bg-alt);\r\n    padding: 16px;\r\n    min-width: 0;\r\n  }\r\n  .gt-fw__stage-panel .gt-fw__card-desc{ margin-bottom: 12px; }\r\n  .gt-fw__stage-panel .gt-fw__options{ margin: 4px 0 14px; }\r\n\r\n  .gt-fw__options{\r\n    display: grid;\r\n    gap: 8px;\r\n    padding: 14px 0;\r\n    margin: 4px 0 16px;\r\n    border-top: 1px solid var(--gt-line);\r\n    border-bottom: 1px solid var(--gt-line);\r\n  }\r\n  .gt-fw__options-title{\r\n    font-family: var(--gt-mono);\r\n    font-size: 11px;\r\n    letter-spacing: 0.04em;\r\n    color: var(--gt-text-dim);\r\n    margin-bottom: 2px;\r\n  }\r\n  .gt-fw__option{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    font-size: 14.5px;\r\n    color: var(--gt-text);\r\n    cursor: pointer;\r\n    padding: 4px 0;\r\n  }\r\n  .gt-fw__option input{\r\n    accent-color: var(--gt-red);\r\n    width: 16px;\r\n    height: 16px;\r\n    flex: none;\r\n  }\r\n  .gt-fw__option-label{\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n  }\r\n  .gt-fw__option-price{\r\n    font-family: var(--gt-mono);\r\n    font-size: 12.5px;\r\n    color: var(--gt-text-dim);\r\n    white-space: nowrap;\r\n  }\r\n  .gt-fw__no-options{\r\n    font-size: 13px;\r\n    color: var(--gt-text-dim);\r\n    padding: 4px 0;\r\n  }\r\n\r\n  .gt-fw__price-row{\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    margin-bottom: 14px;\r\n  }\r\n  .gt-fw__price-caption{\r\n    font-size: 13px;\r\n    color: var(--gt-text-dim);\r\n  }\r\n  .gt-fw__card-price{\r\n    font-family: var(--gt-mono);\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    color: var(--gt-black);\r\n    white-space: nowrap;\r\n  }\r\n  .gt-fw__badge-dev{\r\n    font-family: var(--gt-mono);\r\n    font-size: 11px;\r\n    letter-spacing: 0.03em;\r\n    color: var(--gt-text-dim);\r\n    border: 1px solid var(--gt-line);\r\n    border-radius: var(--gt-radius);\r\n    padding: 5px 9px;\r\n    white-space: nowrap;\r\n    display: inline-block;\r\n  }\r\n  .gt-fw__msg-caption{\r\n    font-size: 11px;\r\n    color: var(--gt-text-dim);\r\n    letter-spacing: 0.02em;\r\n    margin-bottom: 6px;\r\n  }\r\n  .gt-fw__msg-row{\r\n    display: flex;\r\n    gap: 6px;\r\n    flex-wrap: wrap;\r\n  }\r\n  .gt-fw__msg-btn{\r\n    all: unset;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    font-family: var(--gt-sans);\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    color: var(--gt-text);\r\n    background: var(--gt-surface);\r\n    border: 1px solid var(--gt-line);\r\n    border-radius: var(--gt-radius);\r\n    padding: 7px 11px;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    transition: border-color .15s ease, color .15s ease;\r\n  }\r\n  .gt-fw__msg-btn:hover{ border-color: var(--gt-red); color: var(--gt-red); }\r\n\r\n  .gt-fw__footnote{\r\n    margin-top: 20px;\r\n    font-size: 12.5px;\r\n    color: var(--gt-text-dim);\r\n    max-width: 62ch;\r\n  }\r\n\r\n  /* ---------- Notice ---------- */\r\n  .gt-fw__notice{\r\n    padding: 22px 20px;\r\n    margin: 32px 0;\r\n    background: var(--gt-bg-alt);\r\n    border: 1px solid var(--gt-line);\r\n    border-left: 3px solid var(--gt-black);\r\n    border-radius: var(--gt-radius);\r\n  }\r\n  .gt-fw__notice p{ margin: 0; font-size: 13.5px; color: var(--gt-text-dim); }\r\n  .gt-fw__notice strong{ color: var(--gt-black); }\r\n\r\n  /* ---------- Modal (shared: specialist gate + MAX copy) ---------- */\r\n  .gt-fw__modal-overlay{\r\n    position: fixed;\r\n    inset: 0;\r\n    z-index: 9999;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 20px;\r\n    background: rgba(20, 20, 20, 0.6);\r\n  }\r\n  .gt-fw__modal-overlay[hidden]{ display: none; }\r\n  .gt-fw__modal-box{\r\n    width: 100%;\r\n    max-width: 380px;\r\n    background: #FFFFFF;\r\n    border: 1px solid var(--gt-line);\r\n    border-radius: 6px;\r\n    padding: 26px 24px 22px;\r\n    box-shadow: 0 12px 32px rgba(0,0,0,0.2);\r\n  }\r\n  .gt-fw__modal-box--wide{ max-width: 520px; }\r\n  .gt-fw__modal-title{\r\n    font-family: var(--gt-cond);\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    color: var(--gt-black);\r\n    margin: 0 0 10px;\r\n  }\r\n  .gt-fw__modal-text{\r\n    font-size: 13.5px;\r\n    color: var(--gt-text-dim);\r\n    margin: 0 0 14px;\r\n  }\r\n  .gt-fw__modal-confirm{\r\n    font-size: 13.5px;\r\n    color: var(--gt-black);\r\n    font-weight: 500;\r\n    margin: 0 0 20px;\r\n  }\r\n  .gt-fw__modal-actions{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 10px;\r\n    flex-wrap: wrap;\r\n  }\r\n  .gt-fw__modal-actions--row{ flex-wrap: nowrap; }\r\n  .gt-fw__modal-actions--row .gt-fw__modal-btn{ white-space: nowrap; }\r\n  .gt-fw__modal-btn{\r\n    all: unset;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    font-family: var(--gt-cond);\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    padding: 10px 18px;\r\n    border-radius: var(--gt-radius);\r\n    border: 1px solid transparent;\r\n    text-align: center;\r\n  }\r\n  .gt-fw__modal-btn--ghost{\r\n    border-color: var(--gt-line);\r\n    color: var(--gt-text-dim);\r\n  }\r\n  .gt-fw__modal-btn--ghost:hover{ border-color: var(--gt-text-dim); color: var(--gt-text); }\r\n  .gt-fw__modal-btn--primary{\r\n    background: var(--gt-red);\r\n    border-color: var(--gt-red);\r\n    color: #FFFFFF;\r\n  }\r\n  .gt-fw__modal-btn--primary:hover{ background: var(--gt-red-dark); border-color: var(--gt-red-dark); }\r\n\r\n  @media (max-width: 640px){\r\n    .gt-fw{ padding: 40px 16px 48px; }\r\n    .gt-fw__filters{ grid-template-columns: 1fr; }\r\n    .gt-fw__msg-row{ justify-content: flex-start; }\r\n    .gt-fw__stage-layout{ grid-template-columns: 1fr; }\r\n    .gt-fw__stage-buttons{ flex-direction: row; flex-wrap: wrap; }\r\n    .gt-fw__stage-btn{ flex: 1 1 auto; }\r\n    .gt-fw__modal-actions:not(.gt-fw__modal-actions--row){ flex-direction: column-reverse; }\r\n    .gt-fw__modal-actions:not(.gt-fw__modal-actions--row) .gt-fw__modal-btn{ width: 100%; }\r\n    .gt-fw__modal-actions--row .gt-fw__modal-btn{ padding: 10px 12px; font-size: 13px; }\r\n  }\r\n";
  var GT_MARKUP = "\r\n  <section class=\"gt-fw\">\r\n\r\n    <!-- ================= HERO ================= -->\r\n    <header class=\"gt-fw__hero\">\r\n      <h1 class=\"gt-fw__title\">Каталог прошивок</h1>\r\n      <p class=\"gt-fw__lead\">\r\n        Собственные программные решения — разработаны, откалиброваны\r\n        и проверены на реальных автомобилях с полным анализом логов.\r\n      </p>\r\n\r\n      <ul class=\"gt-fw__specs\">\r\n        <li><span class=\"gt-fw__specs-mark\">✓</span>Продаём только то, что разработали и протестировали сами</li>\r\n        <li><span class=\"gt-fw__specs-mark\">✓</span>Никаких калибровок «на глазок» или «примерно»</li>\r\n        <li><span class=\"gt-fw__specs-mark\">↻</span>Каталог проверенных прошивок регулярно пополняется</li>\r\n      </ul>\r\n    </header>\r\n\r\n    <!-- ================= FILTER / CATALOG ================= -->\r\n    <section class=\"gt-fw__catalog\" aria-labelledby=\"gt-fw-catalog-title\">\r\n      <h2 id=\"gt-fw-catalog-title\" class=\"gt-fw__h2\">Найти прошивку</h2>\r\n      <p class=\"gt-fw__hint\">Выберите марку, модель, поколение (кузов) и версию прошивки.</p>\r\n\r\n      <div class=\"gt-fw__filters\">\r\n        <div class=\"gt-fw__field\">\r\n          <label for=\"gt-brand\">Марка</label>\r\n          <select id=\"gt-brand\"><option value=\"\">Выберите марку</option></select>\r\n        </div>\r\n        <div class=\"gt-fw__field\">\r\n          <label for=\"gt-model\">Модель</label>\r\n          <select id=\"gt-model\" disabled><option value=\"\">Сначала марку</option></select>\r\n        </div>\r\n        <div class=\"gt-fw__field\">\r\n          <label for=\"gt-gen\">Поколение (кузов)</label>\r\n          <select id=\"gt-gen\" disabled><option value=\"\">Сначала модель</option></select>\r\n        </div>\r\n        <div class=\"gt-fw__field\">\r\n          <label for=\"gt-version\">Версия прошивки</label>\r\n          <select id=\"gt-version\" disabled><option value=\"\">Сначала поколение</option></select>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"gt-results\" class=\"gt-fw__results\" aria-live=\"polite\">\r\n        <p class=\"gt-fw__placeholder\">Описание появится здесь после выбора версии.</p>\r\n      </div>\r\n\r\n      <p class=\"gt-fw__footnote\">\r\n        Список на сайте неполный — наличие необходимой прошивки, а также стоимость для мастера уточняйте через Telegram, WhatsApp или MAX.\r\n      </p>\r\n    </section>\r\n\r\n    <!-- ================= NOTICE ================= -->\r\n    <section class=\"gt-fw__notice\">\r\n      <p><strong>Помните:</strong> чип-тюнинг возможен только при полностью исправном техническом состоянии автомобиля. Заказывая прошивку, вы подтверждаете, что перед этим провели комплексную диагностику автомобиля.</p>\r\n    </section>\r\n\r\n  </section>\r\n\r\n  <!-- ================= SPECIALIST GATE MODAL ================= -->\r\n  <div id=\"gt-specialist-gate\" class=\"gt-fw__modal-overlay\" hidden>\r\n    <div class=\"gt-fw__modal-box gt-fw__modal-box--wide\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"gt-specialist-title\">\r\n      <p id=\"gt-specialist-title\" class=\"gt-fw__modal-title\">Раздел для специалистов по чип-тюнингу</p>\r\n      <p class=\"gt-fw__modal-text\">\r\n        Здесь калибровщики и СТО заказывают прошивки для установки клиентам.\r\n      </p>\r\n      <p class=\"gt-fw__modal-confirm\">\r\n        Для перехода на страницу подтвердите, что вы являетесь специалистом по чип-тюнингу.\r\n      </p>\r\n      <div class=\"gt-fw__modal-actions gt-fw__modal-actions--row\">\r\n        <button type=\"button\" class=\"gt-fw__modal-btn gt-fw__modal-btn--ghost\" id=\"gt-specialist-no\">Я не специалист</button>\r\n        <button type=\"button\" class=\"gt-fw__modal-btn gt-fw__modal-btn--primary\" id=\"gt-specialist-yes\">Да, я специалист</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- ================= MAX COPY MODAL ================= -->\r\n  <div id=\"gt-max-modal\" class=\"gt-fw__modal-overlay\" hidden>\r\n    <div class=\"gt-fw__modal-box\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"gt-max-modal-title\">\r\n      <p id=\"gt-max-modal-title\" class=\"gt-fw__modal-title\">Информация скопирована</p>\r\n      <p class=\"gt-fw__modal-text\">\r\n        Данные о прошивке скопированы в буфер обмена. Нажмите «Продолжить» — откроется чат в MAX,\r\n        вставьте скопированный текст в сообщение (Ctrl+V или Cmd+V) и отправьте.\r\n      </p>\r\n      <div class=\"gt-fw__modal-actions\">\r\n        <button type=\"button\" class=\"gt-fw__modal-btn gt-fw__modal-btn--ghost\" id=\"gt-max-modal-cancel\">Отмена</button>\r\n        <button type=\"button\" class=\"gt-fw__modal-btn gt-fw__modal-btn--primary\" id=\"gt-max-modal-continue\">Продолжить</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";

  var styleEl = document.createElement('style');
  styleEl.textContent = GT_CSS;
  document.head.appendChild(styleEl);

  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap';
  document.head.appendChild(fontLink);

  var mountEl = document.getElementById('gt-firmware-root');
  if(mountEl){ mountEl.innerHTML = GT_MARKUP; }
})();


(function(){

  var root = document.getElementById('gt-firmware-root');

  /* ============================ SPECIALIST GATE ============================
     При каждом заходе (в рамках вкладки/сессии браузера) показываем попап:
     подтвердите, что вы специалист. "Нет" — уводит на страницу /chiptuning.
     Подтверждение запоминается в sessionStorage, чтобы не спрашивать повторно
     при переходах между страницами в той же вкладке.
     ========================================================================= */
  (function specialistGateInit(){
    var GATE_URL_IF_NOT_SPECIALIST = '/chiptuning';
    var STORAGE_KEY = 'gt_specialist_confirmed';

    var gate    = root.querySelector('#gt-specialist-gate');
    var yesBtn  = root.querySelector('#gt-specialist-yes');
    var noBtn   = root.querySelector('#gt-specialist-no');

    var alreadyConfirmed = false;
    try{ alreadyConfirmed = sessionStorage.getItem(STORAGE_KEY) === '1'; }catch(e){}

    if(!alreadyConfirmed){
      gate.hidden = false;
    }

    yesBtn.addEventListener('click', function(){
      try{ sessionStorage.setItem(STORAGE_KEY, '1'); }catch(e){}
      gate.hidden = true;
    });
    noBtn.addEventListener('click', function(){
      window.location.href = GATE_URL_IF_NOT_SPECIALIST;
    });
  })();

  /* Порядок и подписи вариантов (стадий) тюнинга. У "custom" сознательно нет
     заголовка — это вариант "без указания стадии", как было раньше, когда
     стадий ещё не существовало. Порядок и состав этого списка фиксирован
     в коде страницы (не в данных), потому что заголовки Stage 1/1+/2 —
     общепринятые термины чип-тюнинга, а не то, что редактируется построчно. */
  var STAGE_DEFS = [
    { key: 'stage1',     title: 'Stage 1' },
    { key: 'stage1plus', title: 'Stage 1+' },
    { key: 'stage2',     title: 'Stage 2' },
    { key: 'custom',     title: null }
  ];

  /* =========================================================================
     СПРАВОЧНИК ОПЦИЙ
     Список опций, которые можно предлагать к прошивкам. Ключ (key) — короткий
     идентификатор без пробелов, используется внутри firmwareData; label — то,
     что видит специалист. Добавлять/переименовывать опции удобнее через
     firmware_editor.py.
     ========================================================================= */
  var optionCatalog = [
    {
      "key": "sl_off",
      "label": "Отключение ограничения скорости"
    },
    {
      "key": "egr_off",
      "label": "Отключение ЕГР"
    },
    {
      "key": "cruise_off",
      "label": "Отключение ограничений круиз-контроля"
    },
    {
      "key": "aoff",
      "label": "Отключение старт-стоп (A-off)"
    },
    {
      "key": "cat_off",
      "label": "Отключение катализатора (Евро 2)"
    },
    {
      "key": "immo_off",
      "label": "Отключение иммобилайзера"
    },
    {
      "key": "p1737_off",
      "label": "Отключение ошибки P1737"
    }
  ];

  /* =========================================================================
     КАТАЛОГ ПРОШИВОК
     Структура: firmwareData[Марка][Модель][Поколение][Версия] = {
       options: { key_опции: доплата_в_рублях, ... },  // ОДИН список опций
                 на все варианты этой версии — какие опции доступны и по
                 какой цене, не зависит от выбранного Stage;
       stages: {
         stage1:     { enabled, development, description, basePrice },
         stage1plus: { ... },
         stage2:     { ... },
         custom:     { ... }   // вариант без заголовка "Stage"
       }
     }
     enabled     — показывать ли этот вариант на сайте вообще;
     development — если true, вместо описания/цены показывается пометка
                   "в разработке" (описание/цена в этом случае не важны
                   и могут быть пустыми);
     description — строка с <br> между строками, без пунктов про опции;
     basePrice   — базовая цена для клиента, руб., именно для ЭТОГО
                   варианта (Stage 2 обычно дороже Stage 1).
     От выбора варианта (Stage) зависят только описание и базовая цена;
     список доступных опций и их доплаты — общие для всех вариантов
     этой версии.

     Эту таблицу удобнее редактировать через firmware_editor.py.
     ========================================================================= */
  var firmwareData = {
    "Honda": {
      "Breeze": {
        "Gen 1 (2019-2023)": {
          "37805-66Z-B320": {
            "options": {
              "sl_off": 0,
              "cat_off": 0
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10-12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 15000
              }
            }
          },
          "37805-67A-B840": {
            "options": {
              "sl_off": 0,
              "cat_off": 0
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": true,
                "description": "",
                "basePrice": 0
              }
            }
          }
        }
      },
      "Civic": {
        "FD3 (2006–2010)": {
          "37805-RMX-9670": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Улучшение динамики и отклика на педаль.<br>Прирост мощности +9...11 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          }
        },
        "FC1": {
          "37805-5AJ-J610": {
            "options": {
              "sl_off": 0,
              "cruise_off": 3000,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 30000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          }
        },
        "FK7 (2017–2021)": {
          "37805-5AN-J110": {
            "options": {
              "sl_off": 0,
              "cruise_off": 3000,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 30000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-5AN-J320": {
            "options": {
              "sl_off": 0,
              "cruise_off": 3000,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 30000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-5AN-J330": {
            "options": {
              "sl_off": 0,
              "cruise_off": 3000,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 30000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-5AN-J620": {
            "options": {
              "sl_off": 0,
              "cruise_off": 3000,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 30000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-5AN-J630": {
            "options": {
              "sl_off": 0,
              "cruise_off": 3000,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 30000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-5AN-J830": {
            "options": {
              "sl_off": 0,
              "cruise_off": 3000,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 30000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          }
        },
        "FL1": {
          "37805-64L-J530": {
            "options": {
              "sl_off": 0,
              "cat_off": 0
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 30000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          }
        }
      },
      "Crossroad": {
        "RT1": {
          "37805-RA0-J520": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          }
        },
        "RT2": {
          "37805-RA0-J620": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          }
        },
        "RT4": {
          "37805-RA1-N620": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          }
        }
      },
      "CR-V": {
        "RD6, RD7": {
          "37805-PPA-J710": {
            "options": {
              "sl_off": 0,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности 10-12 л.с.",
                "basePrice": 12000
              }
            }
          }
        },
        "RW1, RW2": {
          "37805-5PC-BD40": {
            "options": {
              "sl_off": 0,
              "cruise_off": 3000,
              "cat_off": 0
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": true,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": true,
                "development": true,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-5SJ-J520": {
            "options": {
              "sl_off": 0,
              "cruise_off": 3000,
              "cat_off": 0
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": true,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": true,
                "development": true,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-5SJ-J810": {
            "options": {
              "sl_off": 0,
              "cruise_off": 3000,
              "cat_off": 0
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": true,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": true,
                "development": true,
                "description": "Прирост мощности +45 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          }
        }
      },
      "CR-Z": {
        "ZF1": {
          "37805-RTW-3060": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          },
          "37805-RTW-J570": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          }
        }
      },
      "Fit": {
        "GE6": {
          "37805-RB0-3050": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +6...8 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          },
          "37805-RB0-J670": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +6...8 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          },
          "37805-RB0-J690": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +6...8 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          }
        },
        "GE7": {
          "37805-RB0-4070": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +6...8 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          }
        },
        "GE8": {
          "37805-RB1-4050": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-RB1-9420": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-RB1-J310": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-RB1-J650": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "GP1": {
          "37805-RE0-J540": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +8...10 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-RE0-J630": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +8...10 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "GK3": {
          "37805-5R0-9720": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +7...8 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          },
          "37805-5R0-9730": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +7...8 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          },
          "37805-5R0-J320": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +7...8 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          },
          "37805-5R0-P150": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +7...8 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          }
        },
        "GK5": {
          "37805-5R1-J320": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-5R1-J680": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "GK6": {
          "37805-5R1-9440": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-5R1-J780": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "GP5": {
          "37805-5P6-8840": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-5P6-9630": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-5P6-9640": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-5P6-9650": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-5P6-9830": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-5P6-N740": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "GP6": {
          "37805-58V-J670": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        }
      },
      "Fit Shuttle": {
        "GG7": {
          "37805-R8F-9610": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-R8F-J720": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "GP2": {
          "37805-R8K-J740": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +9...10 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-R8K-J750": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +9...10 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-R8K-J810": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +9...10 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        }
      },
      "Freed": {
        "GB3": {
          "37805-RK8-J650": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-RK8-M710": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-RK8-N740": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "GB5": {
          "37805-5JE-8530": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-5JE-J530": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "GB7": {
          "37805-5JL-J660": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "GP3": {
          "37805-RD2-J620": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-RD2-J630": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        }
      },
      "Grace": {
        "GM6": {
          "37805-55L-J610": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        }
      },
      "Insight": {
        "ZE2": {
          "37805-RBJ-3150": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +9...10 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          },
          "37805-RBJ-3160": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +9...10 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          },
          "37805-RBJ-J580": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +9...10 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          },
          "37805-RBJ-J680": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +9...10 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          }
        },
        "ZE3": {
          "37805-RBK-J720": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        }
      },
      "Jade": {
        "FR5": {
          "37805-5K8-J910": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          }
        }
      },
      "N-Box": {
        "JF_": {
          "37805-5YS-J770": {
            "options": {},
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": true,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-5YS-N740": {
            "options": {
              "cruise_off": 3000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +5-7 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          },
          "37805-5YT-9820": {
            "options": {
              "cruise_off": 3000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +13-16 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 14000
              }
            }
          }
        }
      },
      "N-Wgn": {
        "JH_": {
          "37805-5Z1-N930": {
            "options": {
              "cruise_off": 3000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +5-7 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 10000
              }
            }
          },
          "37805-5Z2-3050": {
            "options": {
              "cruise_off": 3000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +13-16 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 14000
              }
            }
          },
          "37805-5Z2-3070": {
            "options": {
              "cruise_off": 3000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +13-16 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 14000
              }
            }
          }
        }
      },
      "Shuttle": {
        "GK8": {
          "37805-5KK-J630": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "GP7": {
          "37805-5KP-J670": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-66P-NA20": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        }
      },
      "Stepwgn": {
        "RK5": {
          "37805-R0A-9050": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          },
          "37805-R0A-P730": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          }
        },
        "RP1, RP3": {
          "37805-59B-J050": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-59B-J070": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-59B-7620": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-59B-J150": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-59B-J160": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-59B-J170": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-59B-J620": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          }
        },
        "RP2, RP4": {
          "37805-59B-6720": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-59B-9160": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-59B-9170": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-59B-9620": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0,
              "immo_off": 4000
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          }
        },
        "RP6, RP7": {
          "37805-6BA-J520": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-6BA-J620": {
            "options": {
              "sl_off": 0,
              "cruise_off": 0,
              "aoff": 0,
              "cat_off": 0
            },
            "stages": {
              "stage1": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +25 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 20000
              },
              "stage1plus": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +50 л.с.<br>Бензин не ниже АИ98.",
                "basePrice": 25000
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              }
            }
          }
        }
      },
      "Stream": {
        "RN6": {
          "37805-RWR-N510": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          }
        },
        "RN7": {
          "37805-RWK-J320": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          },
          "37805-RWR-J810": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cat_off": 2000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          }
        }
      },
      "Vezel": {
        "RU1": {
          "37805-50T-J540": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          },
          "37805-50T-J640": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-50T-N610": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "aoff": 0,
              "cat_off": 2000,
              "immo_off": 3000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 12000
              }
            }
          }
        },
        "RU3": {
          "37805-51E-3070": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-51E-3080": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-51E-3170": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-51E-3180": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-51E-J680": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 0
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-51E-J930": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "RU4": {
          "37805-51E-3160": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          },
          "37805-51E-3260": {
            "options": {
              "sl_off": 0,
              "egr_off": 2000,
              "cruise_off": 3000,
              "cat_off": 2000,
              "immo_off": 3000,
              "p1737_off": 5000
            },
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": false,
                "description": "Прирост мощности +10...12 л.с.<br>Бензин не ниже АИ95.",
                "basePrice": 11000
              }
            }
          }
        },
        "RV3": {
          "37805-6HA-J510": {
            "options": {},
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": true,
                "description": "",
                "basePrice": 0
              }
            }
          },
          "37805-6PP-H720": {
            "options": {},
            "stages": {
              "stage1": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage1plus": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "stage2": {
                "enabled": false,
                "development": false,
                "description": "",
                "basePrice": 0
              },
              "custom": {
                "enabled": true,
                "development": true,
                "description": "",
                "basePrice": 0
              }
            }
          }
        }
      }
    }
  };

  var brandSel  = root.querySelector('#gt-brand');
  var modelSel  = root.querySelector('#gt-model');
  var genSel    = root.querySelector('#gt-gen');
  var verSel    = root.querySelector('#gt-version');
  var results   = root.querySelector('#gt-results');

  var MAX_CHAT_URL = 'https://max.ru/u/f9LHodD0cOJ4fJqn8onueaFA2XcpTolR3QKDYyPhKtyrcu2egEOo1PcFEQs';
  var maxModal          = root.querySelector('#gt-max-modal');
  var maxModalContinue  = root.querySelector('#gt-max-modal-continue');
  var maxModalCancel    = root.querySelector('#gt-max-modal-cancel');

  function openMaxCopyModal(message){
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(message).catch(function(){});
    }
    maxModal.hidden = false;
  }
  function closeMaxModal(){ maxModal.hidden = true; }

  maxModalCancel.addEventListener('click', closeMaxModal);
  maxModal.addEventListener('click', function(e){
    if(e.target === maxModal) closeMaxModal();
  });
  maxModalContinue.addEventListener('click', function(){
    closeMaxModal();
    window.open(MAX_CHAT_URL, '_blank');
  });

  var optionLabelByKey = {};
  optionCatalog.forEach(function(o){ optionLabelByKey[o.key] = o.label; });
  function optionLabel(key){ return optionLabelByKey[key] || key; }

  function fillSelect(sel, values, placeholder){
    sel.innerHTML = '';
    var opt0 = document.createElement('option');
    opt0.value = '';
    opt0.textContent = placeholder;
    sel.appendChild(opt0);
    values.forEach(function(v){
      var opt = document.createElement('option');
      opt.value = v;
      opt.textContent = v;
      sel.appendChild(opt);
    });
    sel.disabled = false;
  }

  function resetSelect(sel, placeholder){
    sel.innerHTML = '';
    var opt0 = document.createElement('option');
    opt0.value = '';
    opt0.textContent = placeholder;
    sel.appendChild(opt0);
    sel.disabled = true;
  }

  function showPlaceholder(text){
    results.innerHTML = '<p class="gt-fw__placeholder">' + text + '</p>';
  }

  function formatThousands(n){
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function buildMessage(model, gen, version, stageTitle, stageObj, selectedKeys, total){
    var lines = [];
    lines.push(model + ' ' + gen + ', ' + version + '.');
    if(stageTitle) lines.push('Вариант: ' + stageTitle);
    var descText = (stageObj.description || '').replace(/<br\s*\/?>/gi, '\n').trim();
    if(descText) lines.push(descText);
    if(selectedKeys.length){
      lines.push('Выбранные опции:');
      selectedKeys.forEach(function(k){ lines.push('- ' + optionLabel(k)); });
    }
    lines.push('Итоговая стоимость: ' + formatThousands(total) + ' руб.');
    lines.push('');
    lines.push('Год выпуска автомобиля:');
    lines.push('Номер кузова / VIN:');
    lines.push('Напишите номер вашего ключа PCMFLASH:');
    return lines.join('\n');
  }

  function emphasizePowerGain(html){
    if(!html) return html;
    return html.replace(/Прирост мощности[^<]*/g, function(m){
      return '<strong>' + m + '</strong>';
    });
  }

  function buildStageBodyHtml(stageObj, options){
    if(stageObj.development){
      var devDesc = (stageObj.description || '').trim();
      var devText = devDesc ? emphasizePowerGain(stageObj.description) : 'Этот вариант находится в разработке.';
      return '<p class="gt-fw__card-desc">' + devText + '</p>' +
        '<span class="gt-fw__badge-dev">в разработке</span>';
    }

    var optionKeys = Object.keys(options || {});
    optionKeys.sort(function(a, b){
      return optionCatalog.findIndex(function(o){ return o.key === a; }) -
             optionCatalog.findIndex(function(o){ return o.key === b; });
    });

    var optionsHtml;
    if(optionKeys.length){
      optionsHtml = '<div class="gt-fw__options-title">Доступные опции</div>' +
        optionKeys.map(function(key){
          var price = options[key] || 0;
          var priceLabel = price > 0 ? ('+' + formatThousands(price) + ' \u20BD') : 'без доплаты';
          return (
            '<label class="gt-fw__option">' +
              '<span class="gt-fw__option-label">' +
                '<input type="checkbox" class="gt-fw__option-input" data-key="' + key + '" data-price="' + price + '">' +
                optionLabel(key) +
              '</span>' +
              '<span class="gt-fw__option-price">' + priceLabel + '</span>' +
            '</label>'
          );
        }).join('');
    } else {
      optionsHtml = '<p class="gt-fw__no-options">Дополнительных опций для этой версии нет.</p>';
    }

    return (stageObj.description ? '<p class="gt-fw__card-desc">' + emphasizePowerGain(stageObj.description) + '</p>' : '') +
      '<div class="gt-fw__options">' + optionsHtml + '</div>' +
      '<div class="gt-fw__price-row">' +
        '<span class="gt-fw__price-caption">Рекомендуемая цена для клиента</span>' +
        '<span class="gt-fw__card-price" data-total></span>' +
      '</div>' +
      '<div class="gt-fw__msg-caption">Оформить заказ этой прошивки:</div>' +
      '<div class="gt-fw__msg-row">' +
        '<button type="button" class="gt-fw__msg-btn" data-channel="tg">Telegram</button>' +
        '<button type="button" class="gt-fw__msg-btn" data-channel="wa">WhatsApp</button>' +
        '<button type="button" class="gt-fw__msg-btn" data-channel="max">MAX</button>' +
      '</div>';
  }

  function wireStageBody(bodyDiv, model, gen, version, stageDef, stageObj){
    if(stageObj.development) return;

    var totalEl = bodyDiv.querySelector('[data-total]');
    var checkboxes = bodyDiv.querySelectorAll('.gt-fw__option-input');

    function currentTotal(){
      var total = stageObj.basePrice;
      checkboxes.forEach(function(cb){
        if(cb.checked) total += Number(cb.getAttribute('data-price')) || 0;
      });
      return total;
    }
    function updateTotal(){
      totalEl.textContent = formatThousands(currentTotal()) + ' \u20BD';
    }
    checkboxes.forEach(function(cb){ cb.addEventListener('change', updateTotal); });
    updateTotal();

    bodyDiv.querySelectorAll('.gt-fw__msg-btn').forEach(function(msgBtn){
      msgBtn.addEventListener('click', function(){
        var selectedKeys = [];
        checkboxes.forEach(function(cb){ if(cb.checked) selectedKeys.push(cb.getAttribute('data-key')); });
        var total = currentTotal();
        var message = buildMessage(model, gen, version, stageDef.title, stageObj, selectedKeys, total);
        var channel = msgBtn.getAttribute('data-channel');
        if(channel === 'tg'){
          window.open('https://t.me/chucknorris_1940?text=' + encodeURIComponent(message), '_blank');
        } else if(channel === 'wa'){
          window.open('https://wa.me/79294244455?text=' + encodeURIComponent(message), '_blank');
        } else if(channel === 'max'){
          openMaxCopyModal(message);
        }
      });
    });
  }

  function renderResult(){
    var brand = brandSel.value, model = modelSel.value, gen = genSel.value, version = verSel.value;
    if(!brand || !model || !gen || !version){
      showPlaceholder('Прошивка появится здесь после выбора версии.');
      return;
    }
    var entry = firmwareData[brand][model][gen][version];
    var available = STAGE_DEFS.filter(function(d){
      var s = entry.stages && entry.stages[d.key];
      return s && s.enabled;
    });

    results.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'gt-fw__card';
    card.innerHTML =
      '<div class="gt-fw__card-id">' + version + '</div>' +
      '<div class="gt-fw__card-title">' + model + ' \u00B7 ' + gen + '</div>';

    if(!available.length){
      card.insertAdjacentHTML('beforeend', '<p class="gt-fw__card-desc">Нет доступных вариантов для этой версии.</p>');
      results.appendChild(card);
      return;
    }

    var options = entry.options || {};

    function renderStageInto(panel, key){
      var stageDef = STAGE_DEFS.filter(function(d){ return d.key === key; })[0];
      var stageObj = entry.stages[key];
      panel.innerHTML = buildStageBodyHtml(stageObj, options);
      wireStageBody(panel, model, gen, version, stageDef, stageObj);
    }

    if(available.length > 1){
      var layout = document.createElement('div');
      layout.className = 'gt-fw__stage-layout';

      var buttonsCol = document.createElement('div');
      buttonsCol.className = 'gt-fw__stage-buttons';

      var panel = document.createElement('div');
      panel.className = 'gt-fw__stage-panel';

      var buttons = available.map(function(d){
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'gt-fw__stage-btn' + (d.title ? '' : ' gt-fw__stage-btn--plain');
        btn.textContent = d.title || 'Без указания стадии';
        btn.setAttribute('data-key', d.key);
        buttonsCol.appendChild(btn);
        return btn;
      });

      function activate(key){
        buttons.forEach(function(b){
          b.classList.toggle('is-active', b.getAttribute('data-key') === key);
        });
        renderStageInto(panel, key);
      }

      buttons.forEach(function(btn){
        btn.addEventListener('click', function(){ activate(btn.getAttribute('data-key')); });
      });

      layout.appendChild(buttonsCol);
      layout.appendChild(panel);
      card.appendChild(layout);

      // По умолчанию активен Stage 1, если он доступен, иначе — первый
      // доступный вариант по порядку (Stage 1+ / Stage 2 / без названия).
      activate(available[0].key);
    } else {
      var bodyDiv = document.createElement('div');
      card.appendChild(bodyDiv);
      renderStageInto(bodyDiv, available[0].key);
    }

    results.appendChild(card);
  }

  brandSel.addEventListener('change', function(){
    resetSelect(modelSel, 'Сначала марку');
    resetSelect(genSel, 'Сначала модель');
    resetSelect(verSel, 'Сначала поколение');
    showPlaceholder('Прошивка появится здесь после выбора версии.');
    if(!brandSel.value) return;
    fillSelect(modelSel, Object.keys(firmwareData[brandSel.value]), 'Выберите модель');
  });

  modelSel.addEventListener('change', function(){
    resetSelect(genSel, 'Сначала модель');
    resetSelect(verSel, 'Сначала поколение');
    showPlaceholder('Прошивка появится здесь после выбора версии.');
    if(!modelSel.value) return;
    fillSelect(genSel, Object.keys(firmwareData[brandSel.value][modelSel.value]), 'Выберите поколение');
  });

  genSel.addEventListener('change', function(){
    resetSelect(verSel, 'Сначала поколение');
    showPlaceholder('Прошивка появится здесь после выбора версии.');
    if(!genSel.value) return;
    fillSelect(verSel, Object.keys(firmwareData[brandSel.value][modelSel.value][genSel.value]), 'Выберите версию');
  });

  verSel.addEventListener('change', renderResult);

  fillSelect(brandSel, Object.keys(firmwareData), 'Выберите марку');
})();
