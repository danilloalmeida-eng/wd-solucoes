import styles from './WhatsAppFab.module.css';

export default function WhatsAppFab() {
  return <a className={styles.fab} href="https://wa.me/5511981527208?text=Olá!%20Vi%20o%20site%20da%20W%26D%20e%20quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noreferrer" aria-label="Falar com a W&D pelo WhatsApp"><span aria-hidden="true">◔</span><b>WhatsApp</b></a>;
}
