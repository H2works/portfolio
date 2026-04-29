'use client';

import { useState } from 'react';
import submitContact from '@/fetch/submitContact';

interface ContactFormProps {
  colorModifier?: string;
}

export default function ContactForm({ colorModifier = 'black' }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset messages
    setSuccessMessage('');
    setErrorMessage('');

    // Validation
    if (!name.trim()) {
      setErrorMessage('お名前を入力してください');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('内容を入力してください');
      return;
    }
    if (!agreed) {
      setErrorMessage('利用規約に同意してください');
      return;
    }

    setIsLoading(true);

    try {
      await submitContact({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      // Success
      setSuccessMessage('お問い合わせありがとうございます。送信されました。');
      setName('');
      setEmail('');
      setMessage('');
      setAgreed(false);
    } catch (error) {
      setErrorMessage('送信に失敗しました。もう一度お試しください。');
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="row" data-aos="fade-up" onSubmit={handleSubmit}>
      <div className="col-12">
        {successMessage && (
          <div className="alert alert-success mb-3" role="alert" data-aos="fade-left">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger mb-3" role="alert" data-aos="fade-left">
            {errorMessage}
          </div>
        )}
        
        <div className="mb-3" data-aos="fade-left" data-aos-delay="100">
          <label htmlFor="InputName" className="form-label">お名前</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="InputName"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className="mb-3" data-aos="fade-left" data-aos-delay="300">
          <label htmlFor="InputEmail" className="form-label">メールアドレス</label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="InputEmail"
            aria-describedby="emailHelp"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <div id="emailHelp" className="form-text small text-secondary"><strong>任意</strong> 返信が必要な場合はご記入ください。</div>
        </div>
        <div className="mb-3" data-aos="fade-left" data-aos-delay="500">
          <label htmlFor="InputMessage" className="form-label">内容</label>
          <textarea
            className="form-control rounded-1"
            aria-label="お問い合わせ内容"
            rows={5}
            id="InputMessage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
          ></textarea>
        </div>
        <div className="mb-3 form-check py-3" data-aos="fade-left" data-aos-delay="700">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            disabled={isLoading}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">返信のために入力内容を利用することに同意します</label>
        </div>
        <button
          type="submit"
          className={`btn btn-${colorModifier} btn-xl shadow me-1 mb-5`}
          data-aos="fade-left"
          data-aos-delay="900"
          disabled={isLoading}
        >
          {isLoading ? '送信中...' : '送信'}
          {!isLoading && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
