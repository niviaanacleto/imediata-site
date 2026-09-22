
(() => {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle && nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('#catalog-grid .product-card').forEach(card=>card.classList.toggle('hidden',f!=='Todos'&&card.dataset.category!==f));}));
  const cfg=window.IMEDIATA_CONFIG||{};
  document.querySelectorAll('.js-whatsapp').forEach(a=>{if(cfg.whatsapp){a.href=`https://wa.me/${cfg.whatsapp}`;a.target='_blank';a.rel='noopener';}});
  const form=document.getElementById('quote-form');
  if(form){
    const params=new URLSearchParams(location.search); const p=params.get('produto'); if(p && form.elements.produto) form.elements.produto.value=p;
    let lastMessage='';
    const names={
      'sacos-sacolas':'Sacos & Sacolas','delivery':'Caixas para Delivery','oriental':'Delivery Oriental','caixa-gaveta':'Caixa Gaveta (Barca)','caixa-piramide':'Caixa Pirâmide (Temaki)','multiuso-alca-respiro':'Multiuso com Alça e Respiro','hot-sashimi':'Caixa para Hot & Sashimi','yakisoba':'Caixa para Yakisoba','combinado':'Caixas para Combinado','harumaki':'Caixa para Harumaki','outro':'Outro / projeto personalizado'
    };
    form.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(form).entries());lastMessage=`Olá, Imediata Embalagem! Gostaria de solicitar um orçamento.\n\nNome: ${d.nome||'-'}\nEmpresa: ${d.empresa||'-'}\nWhatsApp: ${d.telefone||'-'}\nE-mail: ${d.email||'-'}\nEmbalagem: ${names[d.produto]||d.produto||'Ainda não definida'}\nConteúdo: ${d.conteudo||'-'}\nMedidas: ${d.medidas||'-'}\nQuantidade: ${d.quantidade||'-'}\nIdentidade visual: ${d.identidade||'-'}\n\nDetalhes: ${d.mensagem||'-'}`;const box=document.getElementById('quote-result');const wa=document.getElementById('quote-whatsapp');const status=document.getElementById('quote-status');box.hidden=false;if(cfg.whatsapp){wa.href=`https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(lastMessage)}`;wa.hidden=false;status.textContent='Sua mensagem está pronta para ser enviada pelo WhatsApp.';}else{wa.hidden=true;status.textContent='O número do WhatsApp ainda não foi configurado. Você pode copiar a mensagem abaixo e enviar pelo canal de atendimento da empresa.';}box.scrollIntoView({behavior:'smooth',block:'center'});});
    const copy=document.getElementById('quote-copy'); if(copy) copy.addEventListener('click',async()=>{if(!lastMessage)return;try{await navigator.clipboard.writeText(lastMessage);copy.textContent='Mensagem copiada ✓';setTimeout(()=>copy.textContent='Copiar mensagem',2200);}catch{alert(lastMessage);}});
  }
})();
