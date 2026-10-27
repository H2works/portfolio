'use client';

import { useState } from 'react';
import submitContact from '@/fetch/submitContact';

export default function WebServiceContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [currentSiteUrl, setCurrentSiteUrl] = useState('');
  const [plan, setPlan] = useState('【無料】現状サイトの診断・無料デモ作成を希望');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMessage('');
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('お名前を入力してください');
      return;
    }
    if (!email.trim()) {
      setErrorMessage('メールアドレスを入力してください');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('ご相談内容を入力してください');
      return;
    }
    if (!agreed) {
      setErrorMessage('個人情報の取り扱いおよび利用規約にご同意ください');
      return;
    }

    setIsLoading(true);

    try {
      const detailedMessage = `【ご相談種別・ご検討プラン】\n${plan}\n\n【会社名・屋号】\n${company.trim() || '（無記入）'}\n\n【現在のWebサイトURL】\n${currentSiteUrl.trim() || '（無記入 / なし）'}\n\n【ご相談内容・現状のお困りごと】\n${message.trim()}`;

      await submitContact({
        name: name.trim(),
        email: email.trim(),
        message: detailedMessage,
      });

      setSuccessMessage('お問い合わせいただきありがとうございます。内容を確認の上、通常24時間以内に担当エンジニア（H2works）よりご連絡差し上げます。');
      setName('');
      setEmail('');
      setCompany('');
      setCurrentSiteUrl('');
      setMessage('');
      setAgreed(false);
    } catch (error) {
      setErrorMessage('送信に失敗しました。お手数ですが、時間をおいて再度お試しいただくか、直接メールにてご連絡ください。');
      console.error('Contact form error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {successMessage && (
        <div className="alert alert-success d-flex align-items-center mb-4 p-3" role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill me-2 flex-shrink-0" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <div>{successMessage}</div>
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-danger d-flex align-items-center mb-4 p-3" role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-exclamation-triangle-fill me-2 flex-shrink-0" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
          <div>{errorMessage}</div>
        </div>
      )}

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <label htmlFor="clientName" className="form-label fw-semibold small text-dark">
            お名前 <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="clientName"
            className="form-control"
            placeholder="山田 太郎"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="clientCompany" className="form-label fw-semibold small text-dark">
            貴社名・屋号 <span className="text-muted fw-normal">（任意）</span>
          </label>
          <input
            type="text"
            id="clientCompany"
            className="form-control"
            placeholder="株式会社サンプル / 屋号"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="clientEmail" className="form-label fw-semibold small text-dark">
            メールアドレス <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            id="clientEmail"
            className="form-control"
            placeholder="example@yourdomain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="currentSiteUrl" className="form-label fw-semibold small text-dark">
            現在のWebサイトURL <span className="text-muted fw-normal">（お持ちの場合）</span>
          </label>
          <input
            type="url"
            id="currentSiteUrl"
            className="form-control"
            placeholder="https://example.com"
            value={currentSiteUrl}
            onChange={(e) => setCurrentSiteUrl(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div className="col-12">
          <label htmlFor="clientPlan" className="form-label fw-semibold small text-dark">
            ご検討中のプラン・ご希望の構成
          </label>
          <select
            id="clientPlan"
            className="form-select"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            disabled={isLoading}
          >
            <option value="【無料】現状サイトの診断・無料デモ作成を希望">【無料】現状サイトの診断・無料デモ作成を希望</option>
            <option value="既存サイトの静的化（基本5万円）">既存サイトの静的化（基本5万円 / 同じ構成・内容で移行）</option>
            <option value="既存サイト静的化 ＋ オリジナルデザイン（計15万円）">既存サイト静的化 ＋ オリジナルデザイン刷新（計15万円）</option>
            <option value="既存サイト静的化 ＋ 問い合わせフォーム設置（計10万円）">既存サイト静的化 ＋ 問い合わせフォーム設置（計10万円 / +500円/月）</option>
            <option value="既存サイト静的化 ＋ お知らせ定期更新CMS（計25万円〜）">既存サイト静的化 ＋ お知らせ・News定期更新CMS（計25万円〜 / フルSSG・検索機能等は要相談）</option>
            <option value="フルセット（デザイン刷新＋フォーム＋お知らせCMS等）">フルセット（デザイン刷新＋フォーム＋お知らせCMS等の相談）</option>
            <option value="月額0円／月額500円の保守運用について相談">月額0円／月額500円の保守運用プランについて相談したい</option>
            <option value="その他・まずは現状サイトの診断や見積もり相談">その他・まずは現状サイトの診断や見積もりを相談したい</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="clientMessage" className="form-label fw-semibold small text-dark">
            ご相談内容・現状のお困りごと <span className="text-danger">*</span>
          </label>
          <textarea
            id="clientMessage"
            className="form-control"
            rows={5}
            placeholder="例：
・何年も前に作ったWordPressを放置していて乗っ取りが怖いので5万円で静的化したい。
・Wixの有料プランを毎月払っているが、維持費を月0円（または月500円）にして安くしたい。
・デザインも古臭いのでオリジナルデザイン刷新も検討している。
など、現状のお悩みやご希望を気兼ねなくご記入ください。"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        <div className="col-12 pt-2">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="privacyAgreed"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              disabled={isLoading}
            />
            <label className="form-check-label small text-secondary" htmlFor="privacyAgreed">
              <a href="/imprint" target="_blank" rel="noopener noreferrer" className="text-decoration-underline link-secondary">利用規約</a> および個人情報の取り扱いに同意します。
            </label>
          </div>
        </div>

        <div className="col-12 pt-3">
          <button
            type="submit"
            className="btn btn-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
            disabled={isLoading}
            style={{ backgroundColor: '#2563eb', borderColor: '#2563eb' }}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                送信中...
              </>
            ) : (
              <>
                <span>無料相談・デモ作成を依頼する</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </>
            )}
          </button>
          <p className="text-center text-muted small mt-2 mb-0">
            ※ご契約前に表示スピードを確認できる「無料デモサイト作成」も承っております。強引な営業は一切いたしませんのでご安心ください。
          </p>
        </div>
      </div>
    </form>
  );
}
