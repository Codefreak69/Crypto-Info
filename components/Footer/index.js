import styles from "./Footer.module.css"

const Footer = () => {
    
    const year = new Date().getFullYear();
    return (
      <>
        <footer className={styles.footer}>
          <p className={styles.para}>copyright © {year} Crypto Info.All Right Reserved | Terms & condition applied </p>
        </footer>
      </>
    );
  };
  
  export default Footer;
  