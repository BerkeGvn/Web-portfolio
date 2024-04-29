import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      works: 'Works',
      contact: 'Contact',
      lang: 'EN'
    },
    header: {
      main: 'Hey,',
      mainSub: 'I am',
      span: 'Berke',
      sub: 'Frontend Developer & UI/UX Designer.'
    },
    contact: {
      header: 'Contact Me',
      job: 'Currently looking for a job.',
      contact: 'Feel free to contact me!',
      city: 'Tokyo'
    }
  },
  ja: {
    nav: {
      about: '私について',
      skills: 'テックスタック',
      works: '作品',
      contact: '問い合わせ',
      lang: '日本語'
    },
    header: {
      main: 'こんにちは！',
      mainSub: '私は',
      span: 'Berke',
      sub: 'Web開発者 & デザイナー'
    },
    contact: {
      header: 'お問い合わせ',
      job: '現在仕事を探しています。',
      contact: 'お気軽にご連絡ください！',
      city: '東京'
    }
  }
}

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  messages
})


