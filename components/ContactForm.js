'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name');
    const company = form.get('company');
    const type = form.get('projectType');
    const message = form.get('message');
    const text = `Olá, sou ${name}${company ? `, da ${company}` : ''}. Quero solicitar um diagnóstico sobre ${type || 'um projeto'}${message ? `\n\n${message}` : ''}`;
    window.open(`https://wa.me/5511981527208?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setStatus('Abrimos o WhatsApp para você continuar a conversa.');
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Nome<input name="name" required autoComplete="name" /></label>
      <label>Empresa<input name="company" autoComplete="organization" /></label>
      <label>O que você quer destravar?<select name="projectType" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Site premium</option><option>Google Ads, Meta Ads ou tráfego pago</option><option>CRM e automação comercial</option><option>Agente de IA ou agente SDR</option><option>Dashboard e inteligência de dados</option><option>E-commerce e integrações</option><option>Conteúdo para redes sociais</option><option>Solução completa: site + tráfego + CRM + automação</option><option>Outro desafio digital</option></select></label>
      <label>O que você precisa?<textarea name="message" rows="5" placeholder="Conte um pouco sobre o negócio, o problema ou a ideia." /></label>
      <button className="button button--primary" type="submit">Solicitar diagnóstico <span aria-hidden="true">↗</span></button>
      <p className="form-status" role="status">{status}</p>
    </form>
  );
}
