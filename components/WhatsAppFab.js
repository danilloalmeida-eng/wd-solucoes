import styles from './WhatsAppFab.module.css';
import { createDirectWhatsAppUrl } from '@/lib/site-config';

export default function WhatsAppFab() {
  return <a className={styles.fab} href={createDirectWhatsAppUrl('Olá! Vi o site da W&D e quero conversar sobre um projeto.')} target="_blank" rel="noreferrer" aria-label="Falar com a W&D pelo WhatsApp" data-placement="whatsapp_fab"><span aria-hidden="true">◔</span><b>WhatsApp</b></a>;
}
