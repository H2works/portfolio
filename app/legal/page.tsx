import type { Metadata } from 'next';
import MainLayout from '@/components/MainLayout';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | H2works',
  robots: {
    index: false,
    follow: true,
  },
};

export default function Legal() {
  return (
    <MainLayout bgimg="bck8" darkMode={false} colorModifier="black">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-xl-10 col-xxl-8 mt-3" data-aos="fade-left" data-aos-delay="100">
          <h1 className="mb-5">特定商取引法に基づく表記</h1>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="bg-light w-25">項目</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-light">販売業社の名称</td>
                  <td>H2works</td>
                </tr>
                <tr>
                  <td className="bg-light">販売業者の氏名（名称）、住所、電話番号</td>
                  <td>*請求があったら遅滞なく開示します。</td>
                </tr>
                <tr>
                  <td className="bg-light">メールアドレス</td>
                  <td>info@h2works.xyz</td>
                </tr>
                <tr>
                  <td className="bg-light">追加手数料等の追加料金</td>
                  <td>該当しない</td>
                </tr>
                <tr>
                  <td className="bg-light">交換および返品（返金ポリシー）</td>
                  <td>商品の性質上、返品は承っておりません。</td>
                </tr>
                <tr>
                  <td className="bg-light">引渡時期</td>
                  <td>お客様とのご相談により決定します。</td>
                </tr>
                <tr>
                  <td className="bg-light">受け付け可能な決済手段</td>
                  <td>クレジットカード</td>
                </tr>
                <tr>
                  <td className="bg-light">決済期間</td>
                  <td>ただちに処理されます。</td>
                </tr>
                <tr>
                  <td className="bg-light">販売価格</td>
                  <td>お客様とのご相談により決定します。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
