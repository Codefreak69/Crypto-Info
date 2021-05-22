import styles from "./Footer.module.css"

const Footer = () => {
    const style = useStyle();
    const year = new Date().getFullYear();
    return (
      <>
        <footer className={style.footer}>
          <p className={style.para}>copyright © {year} Crypto Info.All Right Reserved | Terms & condition applied </p>
        </footer>
      </>
    );
  };
  
  export default Footer;
  