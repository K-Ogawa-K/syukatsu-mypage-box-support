// 公開URLはGitHub Pagesの想定値です。問い合わせ先だけ未確定です。
window.SYUKATSU_SITE_CONFIG = {
  publicBaseUrl: 'https://k-ogawa-k.github.io/syukatsu-mypage-box-support/',
  contactEmail: 'PLACEHOLDER_CONTACT_EMAIL',
  siteName: '就活マイページ箱',
};

document.addEventListener('DOMContentLoaded', () => {
  const config = window.SYUKATSU_SITE_CONFIG;
  const contact = config.contactEmail.startsWith('PLACEHOLDER')
    ? 'お問い合わせ先は準備中です'
    : config.contactEmail;
  document.querySelectorAll('[data-contact-email]').forEach((element) => {
    element.textContent = contact;
  });
  document.querySelectorAll('[data-site-name]').forEach((element) => {
    element.textContent = config.siteName;
  });
});
