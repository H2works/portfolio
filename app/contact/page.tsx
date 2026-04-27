import MainLayout from '@/components/MainLayout';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <MainLayout bgimg="bck6" darkMode={false} colorModifier="black">
      <h1 data-aos="fade-left" data-aos-delay="0">お問い合わせ</h1>
      <ContactForm colorModifier="black" />
    </MainLayout>
  );
}
