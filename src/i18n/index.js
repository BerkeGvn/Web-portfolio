import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      works: 'Works',
      contact: 'Contact',
    },
    header: {
      main: 'Hey,',
      mainSub: 'I am',
      span: 'Berke',
      sub: 'Frontend Developer & UI/UX Designer.'
    },
    profile: {
      header: 'Crafting Digital Experiences and Fostering Creativity',
      text: `
Hey there, I'm Berke, a frontend developer and designer based in Tokyo.
I can speak Turkish, English, and Japanese, I thrive on creating digital 
 experiences that resonate across cultures. Over the past three years,
  I've been immersing myself in web development, 
  continuously learning and refining my skills. I craft sleek designs and seamless
   functionality to provide intuitive user experiences. 
   Contact me if you want to collaborate and bring your 
   digital vision to life!`
    },
    skills: {
      header: 'Frontend Expertise: Powering Digital Innovation',
      text: `My frontend arsenal revolves around Vue.js as the cornerstone, augmented by TypeScript for
          building resilient and scalable solutions. I specialize in breathing life into websites by
          seamlessly integrating modern, animated elements.`
    },
    works: {
      header: 'My Works'
    },
    contact: {
      header: 'Contact Me',
      job: 'Currently looking for a job.',
      contact: 'Feel free to contact me!',
      city: 'Tokyo'
    },

  },
  ja: {
    nav: {
      about: '私について',
      skills: 'テックスタック',
      works: '作品',
      contact: '問い合わせ',
    },
    header: {
      main: 'こんにちは！',
      mainSub: '私は',
      span: 'Berke',
      sub: 'Web開発者 & デザイナー'
    },
    profile: {
      header: 'デジタル体験を創造するWeb開発者',
      text: `こんにちは、Berkeと申します。現在は東京在住です。異なる文化の方々にも、楽しんでいただけるデジタル体験を創造することを目指しています。
      正式な実務経験はまだそれほど多くはありませんが、4年間はWeb開発の世界に没頭し、
      経験を積んできました。見た目だけでなく、
      使いやすいウェブサイトを制作することを目標にしています。
      デジタルなアイデアを具現化するお手伝いができれば幸いです。お気軽にご連絡くださいませ。`,

    },
    skills: {
      header: 'テックスタックと特長',
      text: `Web開発では、主にVue.jsを中心に、 JavaScript(TypeScript)、Sassを使用しています。
      さらに、モダンでアニメーションを取り入れたウェブサイトの構築も得意としています。
      常に新たな技術の習得に努めております。`
    },
    works: {
      header: '作品'
    },
    contact: {
      header: 'お問い合わせ',
      job: '現在仕事を探しています。',
      contact: 'お気軽にご連絡ください！',
      city: '東京'
    },
  }
}

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  messages
})


