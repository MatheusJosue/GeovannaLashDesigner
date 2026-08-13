import Image from "next/image";

const whatsappLink =
  "https://wa.me/5511992124482?text=Ol%C3%A1%2C%20Geovanna!%20Gostaria%20de%20agendar%20meu%20hor%C3%A1rio%20para%20extens%C3%A3o%20de%20c%C3%ADlios.";

const instagramLink =
  "https://www.instagram.com/geovannanog.lash?igsh=cms5bzdpa2Z4bnpn";

const services = [
  {
    name: "Fio a fio",
    price: "R$ 100",
    image: "/images/modelo3-atual.jpeg",
    description: "Naturalidade e elegância para realçar o seu olhar.",
  },
  {
    name: "Volume brasileiro",
    price: "R$ 110",
    image: "/images/modelo2-atual.jpeg",
    description: "Leveza, definição e um efeito marcante na medida certa.",
  },
  {
    name: "Volume egípcio",
    price: "R$ 120",
    image: "/images/modelo1-atual.jpeg",
    description: "Volume sofisticado, intenso e perfeitamente alinhado.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 1c1.4 13.6 9.4 21.6 23 23-13.6 1.4-21.6 9.4-23 23C22.6 33.4 14.6 25.4 1 24 14.6 22.6 22.6 14.6 24 1Z" />
    </svg>
  );
}

function ContactIcon({ type }: { type: "whatsapp" | "instagram" | "location" }) {
  if (type === "whatsapp") return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8.2 7.6c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.5l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.2.4 0 .7.7 1.3 1.8 2.3 3.2 2.9.3.1.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l1.9.9c.3.2.5.3.5.5 0 .2-.1 1.3-.8 1.9-.6.6-1.5.9-2.4.7-1-.2-2.5-.7-4.3-2.3-1.5-1.3-2.5-3-2.8-4-.3-1-.1-2.3.5-3.3Z"/></svg>
  );
  if (type === "instagram") return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>
  );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.7"/></svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Geovanna Lash Designer — início">
          <Image className="brand-logo" src="/images/logocerta.jpeg" alt="Geovanna Nogueira Lash Design" width={76} height={76} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Procedimentos</a>
          <a href="#experiencia">Experiência</a>
        </nav>
        <a className="header-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Agendar horário <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Seu olhar, sua essência</p>
          <h1>Beleza que se<br />revela no <em>olhar.</em></h1>
          <p className="hero-text">
            Técnicas modernas, seguras e personalizadas para valorizar a sua beleza natural e transformar sua autoestima.
          </p>
          <div className="hero-actions">
            <a className="button button-pink" href={whatsappLink} target="_blank" rel="noreferrer">
              Quero agendar <ArrowIcon />
            </a>
            <a className="text-link" href="#servicos">Conheça as técnicas <ArrowIcon /></a>
          </div>
          <div className="hero-detail">
            <span>01</span><i /><p>Realce o que<br />já é único em você</p>
          </div>
        </div>
        <div className="hero-image-wrap">
          <Image src="/images/dona_foto_2.jpeg" alt="Geovanna, lash designer" fill priority sizes="(max-width: 800px) 100vw, 52vw" className="hero-image" />
          <div className="image-badge"><Sparkle /><span>Atendimento<br /><strong>personalizado</strong></span></div>
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> Técnicas & valores</p>
            <h2>Escolha o efeito que <em>combina com você.</em></h2>
          </div>
          <p>Do natural ao marcante, cada técnica é escolhida respeitando o formato dos seus olhos e o resultado que você deseja.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.name}>
              <span className="service-number">0{index + 1}</span>
              <div className="service-title">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-photo">
                <div className="service-photo-inner">
                  <Image src={service.image} alt={`Resultado da técnica ${service.name}, com foco em um olho`} fill sizes="(max-width: 700px) 72vw, 25vw" />
                </div>
              </div>
              <div className="service-info">
                <small>Aplicação</small>
                <strong>{service.price}</strong>
                <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label={`Agendar ${service.name}`}>Agendar técnica <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-photo">
          <Image src="/images/dona_foto_1.jpeg" alt="Geovanna em seu espaço de atendimento" fill sizes="(max-width: 800px) 100vw, 46vw" />
          <div className="about-stamp"><Image src="/images/logocerta.jpeg" alt="Geovanna Nogueira Lash Design" fill sizes="120px" /></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Muito prazer</p>
          <h2>Eu sou a<br /><em>Geovanna.</em></h2>
          <p>Tenho 24 anos e sou apaixonada pelo universo da beleza e do autocuidado. Desde cedo, descobri que minha missão vai muito além de técnicas: ela transforma autoestima.</p>
          <p>Hoje, minha profissão é realçar a beleza única de cada cliente que passa por minhas mãos, com carinho, sensibilidade e um olhar atento aos detalhes que fazem toda diferença.</p>
          <blockquote>“Beleza é confiança, é brilho nos olhos, é cuidado.”</blockquote>
          <a className="button button-outline" href={whatsappLink} target="_blank" rel="noreferrer">Agende sua experiência <ArrowIcon /></a>
        </div>
      </section>

      <section className="experience" id="experiencia">
        <div className="experience-intro">
          <p className="eyebrow dark"><span /> Mais que cílios</p>
          <h2>Uma experiência feita<br />para você se sentir <em>única.</em></h2>
          <p>Cada etapa é conduzida com atenção, técnica e cuidado — do primeiro olhar ao resultado final.</p>
        </div>
        <div className="experience-list">
          <article><span>01</span><div><h3>Design personalizado</h3><p>Mapeamento pensado para o formato dos seus olhos e para o efeito que você deseja.</p></div></article>
          <article><span>02</span><div><h3>Técnica segura</h3><p>Aplicação cuidadosa, materiais selecionados e total atenção à saúde dos fios naturais.</p></div></article>
          <article><span>03</span><div><h3>Acabamento impecável</h3><p>Leveza, conforto e cada fio posicionado com precisão para um resultado elegante.</p></div></article>
        </div>
      </section>

      <section className="booking" id="agendamento">
        <div className="booking-photo">
          <Image src="/images/dona_foto_3.jpeg" alt="Geovanna com materiais de extensão de cílios" fill sizes="(max-width: 800px) 100vw, 42vw" />
        </div>
        <div className="booking-content">
          <Sparkle className="booking-sparkle" />
          <p className="eyebrow"><span /> Seu momento de se cuidar</p>
          <h2>Pronta para transformar<br />o seu <em>olhar?</em></h2>
          <p>Reserve seu horário e viva uma experiência pensada especialmente para você.</p>
          <a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowIcon /></a>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-copy">
          <p className="eyebrow dark"><span /> Onde me encontrar</p>
          <h2>Vamos cuidar do<br />seu <em>olhar?</em></h2>
          <div className="contact-links">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <div className="contact-icon"><ContactIcon type="whatsapp" /></div><div><small>WhatsApp</small><strong>+55 11 99212-4482</strong></div><ArrowIcon />
            </a>
            <a href={instagramLink} target="_blank" rel="noreferrer">
              <div className="contact-icon"><ContactIcon type="instagram" /></div><div><small>Instagram</small><strong>@geovannanog.lash</strong></div><ArrowIcon />
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Rua%20Francisco%20Rouco%20Vidal%2C%2047%20-%20Vila%20Viotto%2C%20Jundia%C3%AD%20-%20SP" target="_blank" rel="noreferrer">
              <div className="contact-icon"><ContactIcon type="location" /></div><div><small>Localização</small><strong>Rua Francisco Rouco Vidal, 47<br />Vila Viotto — Jundiaí, SP</strong></div><ArrowIcon />
            </a>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            title="Mapa de Jundiaí, São Paulo"
            src="https://www.google.com/maps?q=Rua%20Francisco%20Rouco%20Vidal%2C%2047%20-%20Vila%20Viotto%2C%20Jundia%C3%AD%20-%20SP&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-pin" aria-hidden="true"><i /><b>47</b></div>
          <span>Vila Viotto — Jundiaí</span>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><Image className="brand-logo" src="/images/logocerta.jpeg" alt="Geovanna Nogueira Lash Design" width={84} height={84} /></a>
        <p>Beleza, confiança e cuidado em cada detalhe.</p>
        <div className="footer-end">
          <a href="#inicio" className="back-top">Voltar ao topo ↑</a>
          <small>Feito por MJXC Soluções em TI</small>
        </div>
      </footer>
    </main>
  );
}
