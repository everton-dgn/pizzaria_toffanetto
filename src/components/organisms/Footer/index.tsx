import S from './styles.module.scss'

export const Footer = () => (
  <footer className={S.footer}>
    <div className={S.containerFooter}>
      Desenvolvido por
      <a
        href="https://www.linkedin.com/in/everton-toffanetto/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <em>Éverton Toffanetto</em>
      </a>
    </div>
  </footer>
)
