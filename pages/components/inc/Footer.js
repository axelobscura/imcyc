import styles from '../../../styles/Home.module.css'

export default function Footer () {
  return(
    <footer className={styles.footer}>
      <div className="asociados">
        <img src="/images/logo-cemex.png" alt="WEBINARS EN CONCRETO INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C." className="asociado" style={{ width: '90px'}} />
        <img src="/images/logo-cementos-moctezuma-blue.png" alt="WEBINARS EN CONCRETO INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C." className="asociado" style={{ width: '140px'}} />
        <img src="/images/logo-fortaleza.png" alt="WEBINARS EN CONCRETO INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C." className="asociado" style={{ width: '50px'}} />
        <img src="/images/logo-gcc.png" alt="WEBINARS EN CONCRETO INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C." className="asociado" style={{ width: '80px'}} />
        <img src="/images/logo-holcim.png" alt="WEBINARS EN CONCRETO INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C." className="asociado" style={{ width: '70px'}} />
        <img src="/images/logo-cruzazul.png" alt="WEBINARS EN CONCRETO INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C." className="asociado" style={{ width: '80px'}} />
      </div>
      <p>© 1959 - 2021 Instituto Mexicano del Cemento y del Concreto A.C.</p>
      <style jsx>{`
        .asociados {
          padding: 5px;
        }
        .asociado {
          margin: 0px 15px;
        }
      `}</style>
    </footer>
  );
};
