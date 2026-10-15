import assert from 'node:assert/strict';
import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  createContactHref,
  resolveIntent,
} from '../lib/conversion.mjs';

assert.equal(resolveIntent('gerar-demanda')?.value, 'gerar-demanda');
assert.equal(resolveIntent('Presença & aquisição')?.value, 'gerar-demanda');
assert.equal(resolveIntent('CRM e automação comercial')?.value, 'crm-automacao');
assert.equal(resolveIntent('Agentes de IA & atendimento')?.value, 'agente-ia');
assert.equal(resolveIntent('valor-inexistente'), null);

assert.equal(
  createContactHref('automatizar', { cta: 'home hero', caseSlug: 'autogestao-oficina' }),
  '/contato/?interesse=automatizar&cta=home+hero&case=autogestao-oficina',
);

const message = buildWhatsAppMessage({
  name: 'Danilo',
  company: 'W&D',
  intent: 'organizar-vendas',
  message: 'Quero organizar os leads.',
  leadId: 'lead-123',
  sourcePage: '/contato/',
  utmSource: 'google',
  utmMedium: 'cpc',
  utmCampaign: 'crm-pme',
});

assert.match(message, /Organizar vendas e atendimento/);
assert.match(message, /lead-123/);
assert.match(message, /google \/ cpc \/ crm-pme/);
assert.ok(!message.includes('undefined'));

const whatsappUrl = buildWhatsAppUrl('+55 (11) 98152-7208', message);
assert.ok(whatsappUrl.startsWith('https://wa.me/5511981527208?text='));

console.log('Conversion helpers: all assertions passed.');
