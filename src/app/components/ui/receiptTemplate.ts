type ReceiptTemplateParams = {
  orderNumber: string;
  productTitle: string;
  bookPrice: number;
  shippingFee: number;
  taxAmount: number;
  totalAmount: number;
  estimatedDelivery: string;
  supportEmail: string;
  supportPhone: string;
  currency: string;
};

const formatMoney = (amount: number, currency: string) =>
  new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const openReceiptTemplate = ({
  orderNumber,
  productTitle,
  bookPrice,
  shippingFee,
  taxAmount,
  totalAmount,
  estimatedDelivery,
  supportEmail,
  supportPhone,
  currency,
}: ReceiptTemplateParams) => {
  const receiptDate = new Date().toLocaleDateString();
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Receipt ${escapeHtml(orderNumber)}</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f5f7fb;
        --card: #ffffff;
        --line: #e5e7eb;
        --text: #111827;
        --muted: #6b7280;
        --brand: #0f766e;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: var(--bg);
        color: var(--text);
        padding: 40px 20px;
      }
      .sheet {
        max-width: 760px;
        margin: 0 auto;
        background: var(--card);
        border: 1px solid var(--line);
        border-radius: 12px;
        overflow: hidden;
      }
      .header {
        padding: 28px 32px;
        border-bottom: 1px solid var(--line);
        background: #f0fdfa;
      }
      .title {
        margin: 0;
        font-size: 28px;
        line-height: 1.2;
      }
      .sub {
        margin: 8px 0 0;
        color: var(--muted);
        font-size: 14px;
      }
      .meta {
        margin-top: 18px;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }
      .meta-label {
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: 4px;
      }
      .meta-value {
        font-size: 15px;
        font-weight: 600;
      }
      .body {
        padding: 28px 32px 22px;
      }
      .section {
        margin-bottom: 24px;
      }
      .section-title {
        margin: 0 0 10px;
        font-size: 14px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--muted);
      }
      .row {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 10px 0;
        border-bottom: 1px solid var(--line);
      }
      .row:last-child { border-bottom: 0; }
      .value-strong { font-weight: 600; }
      .totals {
        border: 1px solid var(--line);
        border-radius: 10px;
        padding: 14px 16px;
        background: #fcfcfd;
      }
      .total-line {
        margin-top: 10px;
        padding-top: 12px;
        border-top: 1px solid var(--line);
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 700;
        color: var(--brand);
      }
      .footer {
        padding: 0 32px 28px;
        color: var(--muted);
        font-size: 13px;
      }
      .actions {
        display: flex;
        justify-content: center;
        gap: 10px;
        padding: 18px;
        border-top: 1px solid var(--line);
        background: #f9fafb;
      }
      .btn {
        border: 1px solid #d1d5db;
        background: #fff;
        border-radius: 8px;
        padding: 9px 14px;
        cursor: pointer;
        font-size: 13px;
      }
      .btn.primary {
        background: #111827;
        border-color: #111827;
        color: #fff;
      }
      @media print {
        body { background: #fff; padding: 0; }
        .sheet { border: 0; border-radius: 0; }
        .actions { display: none; }
      }
    </style>
  </head>
  <body>
    <main class="sheet">
      <header class="header">
        <h1 class="title">Payment Receipt</h1>
        <p class="sub">Thank you for your purchase. Keep this receipt for your records.</p>
        <div class="meta">
          <div>
            <div class="meta-label">Order Number</div>
            <div class="meta-value">${escapeHtml(orderNumber)}</div>
          </div>
          <div>
            <div class="meta-label">Receipt Date</div>
            <div class="meta-value">${escapeHtml(receiptDate)}</div>
          </div>
          <div>
            <div class="meta-label">Estimated Delivery</div>
            <div class="meta-value">${escapeHtml(estimatedDelivery)}</div>
          </div>
          <div>
            <div class="meta-label">Status</div>
            <div class="meta-value">Processing</div>
          </div>
        </div>
      </header>

      <section class="body">
        <div class="section">
          <h2 class="section-title">Item</h2>
          <div class="row">
            <span>${escapeHtml(productTitle)}</span>
            <span class="value-strong">${formatMoney(bookPrice, currency)}</span>
          </div>
        </div>

        <div class="section totals">
          <div class="row"><span>Book Price</span><span>${formatMoney(bookPrice, currency)}</span></div>
          <div class="row"><span>Shipping</span><span>${formatMoney(shippingFee, currency)}</span></div>
          <div class="row"><span>Tax (7.5%)</span><span>${formatMoney(taxAmount, currency)}</span></div>
          <div class="total-line"><span>Total Paid</span><span>${formatMoney(totalAmount, currency)}</span></div>
        </div>
      </section>

      <footer class="footer">
        <div>Support: ${escapeHtml(supportEmail)} | ${escapeHtml(supportPhone)}</div>
      </footer>

      <div class="actions">
        <button class="btn" onclick="window.close()">Close</button>
        <button class="btn primary" onclick="window.print()">Print / Save PDF</button>
      </div>
    </main>
  </body>
</html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");

  if (!win) {
    const link = document.createElement("a");
    link.href = url;
    link.download = `receipt-${orderNumber}.html`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    return;
  }

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 5000);
};
