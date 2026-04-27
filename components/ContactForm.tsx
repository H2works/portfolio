'use client';

interface ContactFormProps {
  colorModifier?: string;
}

export default function ContactForm({ colorModifier = 'black' }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="row" data-aos="fade-up" onSubmit={handleSubmit}>
      <div className="col-12">
        <div className="mb-3" data-aos="fade-left" data-aos-delay="100">
          <label htmlFor="InputName" className="form-label">お名前</label>
          <input type="text" className="form-control form-control-lg" id="InputName" autoComplete="name" />
        </div>
        <div className="mb-3" data-aos="fade-left" data-aos-delay="300">
          <label htmlFor="InputEmail" className="form-label">メールアドレス</label>
          <input type="email" className="form-control form-control-lg" id="InputEmail" aria-describedby="emailHelp" autoComplete="email" />
          <div id="emailHelp" className="form-text small text-secondary"><strong>任意</strong> 返信が必要な場合はご記入ください。</div>
        </div>
        <div className="mb-3" data-aos="fade-left" data-aos-delay="500">
          <label htmlFor="InputMessage" className="form-label">内容</label>
          <textarea className="form-control rounded-1" aria-label="お問い合わせ内容" rows={5} id="InputMessage"></textarea>
        </div>
        <div className="mb-3 form-check py-3" data-aos="fade-left" data-aos-delay="700">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">返信のために入力内容を利用することに同意します</label>
        </div>
        <button type="submit" className={`btn btn-${colorModifier} btn-xl shadow me-1 mb-5`} data-aos="fade-left" data-aos-delay="900">
          送信
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </button>
      </div>
    </form>
  );
}
