/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Helper function to create DOM elements
function createElement<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    options?: {
        className?: string;
        textContent?: string;
        innerHTML?: string;
        id?: string;
    }
): HTMLElementTagNameMap[K] {
    const element = document.createElement(tag);
    if (options?.className) element.className = options.className;
    if (options?.textContent) element.textContent = options.textContent;
    if (options?.innerHTML) element.innerHTML = options.innerHTML;
    if (options?.id) element.id = options.id;
    return element;
}

// --- App Structure ---
const App = () => {
    const root = document.getElementById('root');
    if (!root) return;

    // Clear existing content
    root.innerHTML = '';

    // Create and append components
    const header = createHeader();
    root.appendChild(header);

    const main = createElement('main');
    main.appendChild(createHeroSection());
    main.appendChild(createServicesSection());
    main.appendChild(createPricingSection());
    main.appendChild(createAboutSection());
    main.appendChild(createBookingSection());
    main.appendChild(createContactSection());
    root.appendChild(main);
    
    root.appendChild(createFooter());

    // Add event listeners
    setupMobileMenu(header);
    setupSmoothScroll(header);
};

// --- Components ---
const createHeader = () => {
    const header = createElement('header');
    const nav = createElement('nav', { className: 'container' });
    const logo = createElement('a', { className: 'logo', textContent: 'Aura Cancún' });
    logo.href = '#home';

    const navLinks = createElement('ul');
    const links = ['Inicio', 'Servicios', 'Precios', 'Sobre Nosotros', 'Contacto'];
    links.forEach(link => {
        const li = createElement('li');
        // FIX: Object literal may only specify known properties, and 'href' does not exist in type '{ className?: string; textContent?: string; innerHTML?: string; id?: string; }'.
        const a = createElement('a', { 
            textContent: link,
        });
        a.href = `#${link.toLowerCase().replace(' ', '-')}`;
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    const navButtons = createElement('div', { className: 'nav-buttons' });
    // FIX: Object literal may only specify known properties, and 'href' does not exist in type '{ className?: string; textContent?: string; innerHTML?: string; id?: string; }'.
    const reserveButton = createElement('a', { 
        className: 'button button-primary', 
        textContent: 'Reservar Cita',
    });
    reserveButton.href = '#reservar-cita';
    navButtons.appendChild(reserveButton);
    
    const mobileMenuButton = createElement('button', { 
        className: 'mobile-menu-button', 
        innerHTML: '&#9776;'
    });

    nav.append(logo, navLinks, navButtons, mobileMenuButton);
    header.appendChild(nav);
    return header;
};

const createHeroSection = () => {
    const section = createElement('section', { className: 'hero', id: 'inicio' });
    const content = createElement('div', { className: 'hero-content container' });
    
    const h1 = createElement('h1', { textContent: 'Tu belleza y bienestar en manos expertas, en el corazón de Cancún.' });
    const buttons = createElement('div', { className: 'buttons' });
    // FIX: Object literal may only specify known properties, and 'href' does not exist in type '{ className?: string; textContent?: string; innerHTML?: string; id?: string; }'.
    const reserveButton = createElement('a', { className: 'button button-primary', textContent: 'Reservar Cita' });
    reserveButton.href = '#reservar-cita';
    // FIX: Object literal may only specify known properties, and 'href' does not exist in type '{ className?: string; textContent?: string; innerHTML?: string; id?: string; }'.
    const servicesButton = createElement('a', { className: 'button button-secondary', textContent: 'Ver Servicios' });
    servicesButton.href = '#servicios';
    buttons.append(reserveButton, servicesButton);
    
    const trustSection = createTrustSection();

    content.append(h1, buttons, trustSection);
    section.appendChild(content);
    return section;
};

const createTrustSection = () => {
    const section = createElement('div', { className: 'trust-section' });
    const items = [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>', title: 'Atención Personalizada' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>', title: 'Tecnología de Vanguardia' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>', title: 'Experiencia Certificada' }
    ];

    items.forEach(itemData => {
        const item = createElement('div', { className: 'trust-item' });
        item.innerHTML = `
            ${itemData.icon}
            <h3>${itemData.title}</h3>
        `;
        section.appendChild(item);
    });

    return section;
};

const createServicesSection = () => {
    const section = createElement('section', { id: 'servicios' });
    const container = createElement('div', { className: 'container' });
    const h2 = createElement('h2', { textContent: 'Nuestros Servicios' });
    const grid = createElement('div', { className: 'services-grid' });

    const services = [
        { title: 'Masajes Relajantes', desc: 'Libera tensiones y encuentra la calma con nuestras técnicas expertas.', img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=3087&auto=format&fit=crop' },
        { title: 'Depilación Láser Diodo', desc: 'Resultados duraderos y una piel suave con la tecnología más avanzada.', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop' },
        { title: 'Hydrafacial Premium', desc: 'Limpieza, exfoliación e hidratación profunda para una piel radiante.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2940&auto=format&fit=crop' },
        { title: 'Hollywood Carbon Peel', desc: 'Rejuvenece tu piel, minimiza poros y obtén un brillo de celebridad.', img: 'https://images.unsplash.com/photo-1600965933348-10b86a1bb342?q=80&w=2940&auto=format&fit=crop' },
        { title: 'Presoterapia', desc: 'Mejora la circulación y reduce la retención de líquidos para unas piernas ligeras.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=3020&auto=format&fit=crop' },
        { title: 'Eliminación de Tatuajes', desc: 'Tecnología láser de precisión para remover tatuajes de forma segura.', img: 'https://images.unsplash.com/photo-1621611814342-320a2e342888?q=80&w=2940&auto=format&fit=crop' },
    ];

    services.forEach(service => {
        const card = createElement('div', { className: 'service-card' });
        card.innerHTML = `
            <img src="${service.img}" alt="${service.title}">
            <div class="service-card-content">
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
                <a href="#reservar-cita" class="button button-secondary">Reservar</a>
            </div>
        `;
        grid.appendChild(card);
    });

    container.append(h2, grid);
    section.appendChild(container);
    return section;
};

const createPricingSection = () => {
    const section = createElement('section', { id: 'precios' });
    const container = createElement('div', { className: 'container' });
    const h2 = createElement('h2', { textContent: 'Lista de Precios' });
    const grid = createElement('div', { className: 'pricing-grid' });
    
    const pricingData = {
        'Masajes': [
            { name: 'Masaje Relajante (60 min)', price: '$1,200 MXN' },
            { name: 'Masaje Descontracturante (60 min)', price: '$1,400 MXN' },
            { name: 'Maderoterapia (Sesión)', price: '$900 MXN' }
        ],
        'Faciales': [
            { name: 'Hydrafacial', price: '$2,500 MXN' },
            { name: 'Hollywood Carbon Peel', price: '$2,800 MXN' },
            { name: 'Limpieza Profunda', price: '$1,500 MXN' }
        ],
        'Aparatología': [
            { name: 'Depilación Láser (Piernas)', price: 'Desde $1,800 MXN' },
            { name: 'Radiofrecuencia Facial', price: '$1,600 MXN' },
            { name: 'Presoterapia', price: '$800 MXN' }
        ],
    };

    for (const category in pricingData) {
        const categoryDiv = createElement('div', { className: 'pricing-category' });
        const h3 = createElement('h3', { textContent: category });
        const ul = createElement('ul');
        pricingData[category].forEach(item => {
            const li = createElement('li');
            li.innerHTML = `<span>${item.name}</span> <span class="price">${item.price}</span>`;
            ul.appendChild(li);
        });
        categoryDiv.append(h3, ul);
        grid.appendChild(categoryDiv);
    }
    
    container.append(h2, grid);
    section.appendChild(container);
    return section;
};

const createAboutSection = () => {
    const section = createElement('section', { id: 'sobre-nosotros' });
    const container = createElement('div', { className: 'container' });
    const h2 = createElement('h2', { textContent: 'Sobre Nosotros' });
    const content = createElement('div', { className: 'about-content' });
    
    const textDiv = createElement('div', { className: 'about-text' });
    textDiv.innerHTML = `
        <h3>Nuestra Filosofía</h3>
        <p>En Aura Salón de Belleza, creemos en un enfoque holístico de la belleza. Nacimos en el corazón de Cancún con la misión de crear un oasis de paz donde la tecnología de vanguardia y el cuidado personalizado se unen para realzar tu belleza natural y promover tu bienestar.</p>
        <br>
        <p>Nuestro equipo está formado por profesionales certificados y apasionados por su trabajo, comprometidos con ofrecerte una experiencia de lujo y resultados excepcionales en cada visita.</p>
    `;

    const img = createElement('img', { className: 'about-image' });
    img.src = 'https://images.unsplash.com/photo-1556760544-74068565f24c?q=80&w=2942&auto=format&fit=crop';
    img.alt = 'Interior del Salón de Belleza Aura Cancún';

    content.append(textDiv, img);
    container.append(h2, content);
    section.appendChild(container);
    return section;
};

const createBookingSection = () => {
    const section = createElement('section', { id: 'reservar-cita' });
    const container = createElement('div', { className: 'container' });
    const h2 = createElement('h2', { textContent: 'Reservar Cita Online' });
    
    const formContainer = createElement('div', { className: 'booking-form-container' });
    formContainer.innerHTML = `
        <div class="form-group">
            <label for="name">Nombre Completo</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="service">Selecciona un Servicio</label>
            <select id="service" name="service" required>
                <option value="">-- Elige un servicio --</option>
                <option value="masaje">Masaje Relajante</option>
                <option value="hydrafacial">Hydrafacial</option>
                <option value="laser">Depilación Láser</option>
            </select>
        </div>
        <div class="form-group">
            <label for="date">Fecha Deseada</label>
            <input type="date" id="date" name="date" required>
        </div>
        <button class="button button-primary">Confirmar Reserva</button>
        <div class="whatsapp-booking">
          <p>¿Prefieres agendar por chat? ¡Es más rápido!</p>
          <a href="https://wa.me/5219980000000" target="_blank" class="button button-secondary">Agendar por WhatsApp</a>
        </div>
    `;
    // Note: Add form submission logic here
    
    container.append(h2, formContainer);
    section.appendChild(container);
    return section;
};

const createContactSection = () => {
    const section = createElement('section', { id: 'contacto' });
    const container = createElement('div', { className: 'container' });
    const h2 = createElement('h2', { textContent: 'Contacto' });
    const grid = createElement('div', { className: 'contact-grid' });
    
    const info = createElement('div', { className: 'contact-info' });
    info.innerHTML = `
      <h3>Ponte en contacto</h3>
      <p>Estamos aquí para resolver tus dudas y ayudarte a agendar tu próxima experiencia de bienestar.</p>
      <ul>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
            <span>Av. Bonampak, SM 8, Cancún, Q.R., México</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
            <span>+52 1 998 000 0000</span>
        </li>
      </ul>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.918663842609!2d-86.8290356850729!3d21.15263388599419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c295b2a4c1f5b%3A0x9f5a4a52e1f5b7e8!2sCanc%C3%BAn%2C%20Quintana%20Roo!5e0!3m2!1ses!2smx!4v1625869335445!5m2!1ses!2smx" allowfullscreen="" loading="lazy"></iframe>
      </div>
    `;

    grid.appendChild(info);
    container.append(h2, grid);
    section.appendChild(container);
    return section;
};

const createFooter = () => {
    const footer = createElement('footer');
    footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} Aura Salón de Belleza Cancún. Todos los derechos reservados.</p>`;
    return footer;
}


// --- Event Handlers ---
const setupMobileMenu = (header: HTMLElement) => {
    const menuButton = header.querySelector('.mobile-menu-button');
    const navLinks = header.querySelector('ul');

    menuButton?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });
};

const setupSmoothScroll = (header: HTMLElement) => {
    header.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu on click
                    header.querySelector('ul')?.classList.remove('active');
                    
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
};

// --- Initial Render ---
document.addEventListener('DOMContentLoaded', App);
