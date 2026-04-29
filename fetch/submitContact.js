/**
 * コンタクトフォームを送信
 * @param {Object} params
 * @param {string} params.name - 名前
 * @param {string} params.email - メールアドレス
 * @param {string} params.message - メッセージ内容
 * @returns {Promise<Object>}
 */
export default async function submitContact({ name, email, message } = {}) {
  const response = await fetch('/api/contact', {  // ← Workersでプロキシするため同一オリジンのパス指定でOK
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}