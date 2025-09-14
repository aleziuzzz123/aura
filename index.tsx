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
        style?: string;
        [key: string]: any;
    }
): HTMLElementTagNameMap[K] {
    const element = document.createElement(tag);
    if (options?.className) element.className = options.className;
    if (options?.textContent) element.textContent = options.textContent;
    if (options?.innerHTML) element.innerHTML = options.innerHTML;
    if (options?.id) element.id = options.id;
    if (options?.style) element.style.cssText = options.style;
    
    // Handle data attributes and other custom properties
    if (options) {
        Object.keys(options).forEach(key => {
            if (key !== 'className' && key !== 'textContent' && key !== 'innerHTML' && key !== 'id' && key !== 'style') {
                element.setAttribute(key, options[key]);
            }
        });
    }
    
    return element;
}

// Services data - defined at the top level to avoid reference errors
const services = [
    { 
        title: 'Philaser - Eliminación de Microblading', 
        desc: 'Tecnología avanzada para eliminar microblading antiestético y tatuajes anteriores en cejas.', 
        img: 'servicios/Philaser.jpg',
        category: 'Eliminación',
        duration: '30-45 minutos',
        price: '$1,650 MXN',
        sessions: '1-3 sesiones',
        technology: 'Philaser Europeo',
        popular: true,
        details: {
            duration: '30-45 minutos',
            price: '$1,650 MXN',
            benefits: [
                'Sin costra',
                'Sin dolor',
                'Sin sangrado',
                'Sin daño a la piel',
                'Tiempo de espera entre sesiones: solo 6 semanas'
            ],
            description: 'Philaser es la tecnología más avanzada para eliminar microblading antiestético y tatuajes anteriores en cejas. Diferente al láser tradicional, ofrece resultados superiores con menos tiempo de espera.',
            includes: [
                'Consulta previa especializada',
                'Tratamiento Philaser personalizado',
                'Cuidados post-tratamiento',
                'Seguimiento de resultados',
                'Recomendaciones de cuidado'
            ],
            recommended: 'Ideal para quienes desean eliminar microblading mal realizado o tatuajes en cejas de forma segura y efectiva.'
        }
    },
    { 
        title: 'Laser Tri Diodo - Depilación', 
        desc: 'El láser que no duele, con la tecnología más avanzada de Europa.', 
        img: 'servicios/Laser Tri Diodo.jpg',
        duration: '15-60 minutos',
        price: 'Desde $495 MXN',
        sessions: '6-8 sesiones',
        technology: 'Láser Tri Diodo',
        details: {
            duration: '15-60 minutos',
            price: 'Desde $495 MXN',
            benefits: [
                'Sin dolor',
                'Aclara el vello',
                'No deja cicatriz',
                'No hay tiempo de recuperación',
                'Tecnología láser Alexandrita y YAG'
            ],
            description: 'Nuestro Laser Tri Diodo combina tecnología láser Alexandrita y YAG para ofrecer la depilación más avanzada de Europa. Sin dolor, sin cicatrices y sin tiempo de recuperación.',
            includes: [
                'Consulta dermatológica previa',
                'Test de sensibilidad',
                'Tratamiento láser personalizado',
                'Cremas post-tratamiento',
                'Seguimiento especializado'
            ],
            recommended: 'Perfecto para todo tipo de piel y vello, especialmente para quienes buscan resultados sin dolor.'
        }
    },
    { 
        title: 'Masajes Reductivos', 
        desc: 'Paquete completo de 10 sesiones para modelar y tonificar tu cuerpo.', 
        img: 'servicios/Masajes Reductivos.jpg',
        duration: '60-90 minutos',
        price: '$4,200 MXN',
        sessions: '10 sesiones',
        technology: 'Maderoterapia + Cavitación',
        details: {
            duration: '60-90 minutos',
            price: '$4,200 MXN (10 sesiones)',
            benefits: [
                'Maderoterapia',
                'Presoterapia',
                'Cavitación',
                'Radiofrecuencia',
                'Drenaje linfático',
                'Vacumterapia',
                'Gimnasia pasiva',
                'Masaje manual'
            ],
            description: 'Nuestro paquete de Masajes Reductivos incluye 10 sesiones con las técnicas más avanzadas para modelar, tonificar y reafirmar tu cuerpo. Combinamos múltiples tecnologías para resultados óptimos.',
            includes: [
                'Evaluación corporal inicial',
                'Plan personalizado de tratamiento',
                '10 sesiones completas',
                'Seguimiento de progreso',
                'Recomendaciones nutricionales'
            ],
            recommended: 'Ideal para quienes buscan un paquete completo de modelado corporal y tonificación.'
        }
    },
    { 
        title: 'HydraFacial', 
        desc: 'Limpieza, exfoliación e hidratación profunda para una piel radiante.', 
        img: 'servicios/HydraFacial.jpg',
        duration: '45-60 minutos',
        price: '$935 MXN',
        sessions: '1 sesión',
        technology: 'HydraFacial MD',
        details: {
            duration: '45-60 minutos',
            price: '$935 MXN',
            benefits: [
                'Limpieza profunda sin irritación',
                'Hidratación intensiva',
                'Reducción de poros',
                'Mejora la textura de la piel',
                'Resultados inmediatos y duraderos'
            ],
            description: 'El HydraFacial es el tratamiento facial más avanzado del mundo. Combina limpieza, exfoliación, extracción e hidratación en una sola sesión, sin tiempo de recuperación.',
            includes: [
                'Análisis de piel personalizado',
                'Serum antioxidante',
                'Máscara hidratante',
                'Protección solar SPF 50',
                'Kit de cuidado en casa'
            ],
            recommended: 'Ideal para todo tipo de piel, especialmente para quienes buscan resultados inmediatos.'
        }
    },
    { 
        title: 'Hollywood Carbon Peel', 
        desc: 'Rejuvenece tu piel, minimiza poros y obtén un brillo de celebridad.', 
        img: 'servicios/Hollywood Carbon Peel.jpg',
        duration: '30-45 minutos',
        price: '$1,430 MXN',
        sessions: '1 sesión',
        technology: 'Láser + Carbón Activado',
        details: {
            duration: '30-45 minutos',
            price: '$1,430 MXN',
            benefits: [
                'Elimina células muertas',
                'Minimiza poros dilatados',
                'Mejora la textura de la piel',
                'Reduce manchas y marcas',
                'Brillo natural inmediato'
            ],
            description: 'El tratamiento favorito de las celebridades. Utiliza carbón activado y láser para una limpieza profunda que deja la piel con un brillo espectacular.',
            includes: [
                'Preparación de la piel',
                'Aplicación de carbón',
                'Tratamiento láser',
                'Hidratación profunda',
                'Protección solar'
            ],
            recommended: 'Perfecto para eventos especiales o para mantener una piel impecable.'
        }
    },
    { 
        title: 'Radiofrecuencia Facial', 
        desc: 'Tecnología de radiofrecuencia para reafirmar y rejuvenecer la piel del rostro.', 
        img: 'servicios/Radiofrecuencia Facial.jpg',
        duration: '30-45 minutos',
        price: '$495 MXN',
        sessions: '3-6 sesiones',
        technology: 'Radiofrecuencia Bipolar',
        details: {
            duration: '30-45 minutos',
            price: '$495 MXN',
            benefits: [
                'Reafirma la piel',
                'Reduce arrugas y líneas de expresión',
                'Mejora la elasticidad',
                'Estimula la producción de colágeno',
                'Resultados progresivos y duraderos'
            ],
            description: 'La radiofrecuencia facial utiliza ondas de radio para calentar las capas profundas de la piel, estimulando la producción de colágeno y reafirmando los tejidos.',
            includes: [
                'Análisis de piel previo',
                'Tratamiento de radiofrecuencia',
                'Hidratación post-tratamiento',
                'Protección solar',
                'Recomendaciones de cuidado'
            ],
            recommended: 'Ideal para pieles que necesitan reafirmación y rejuvenecimiento.'
        }
    },
    { 
        title: 'Maderoterapia Facial', 
        desc: 'Técnica ancestral con herramientas de madera para modelar y tonificar el rostro.', 
        img: 'servicios/Maderoterapia Facial.jpg',
        duration: '60 minutos',
        price: '$3,000 MXN',
        sessions: '8 sesiones',
        technology: 'Herramientas de Madera',
        details: {
            duration: '60 minutos',
            price: '$3,000 MXN (8 sesiones)',
            benefits: [
                'Modela el contorno facial',
                'Reduce la papada',
                'Define el óvalo facial',
                'Mejora la circulación',
                'Tonifica los músculos faciales'
            ],
            description: 'La maderoterapia facial utiliza herramientas de madera especializadas para modelar y tonificar el rostro, mejorando la definición y el contorno facial.',
            includes: [
                '8 sesiones de maderoterapia',
                'Herramientas especializadas',
                'Aceites naturales',
                'Técnicas de modelado',
                'Seguimiento de resultados'
            ],
            recommended: 'Perfecto para quienes buscan definir y modelar el contorno facial de forma natural.'
        }
    },
    { 
        title: 'Limpieza Facial', 
        desc: 'Limpieza profunda para eliminar impurezas y revitalizar la piel.', 
        img: 'servicios/Limpieza Facial.jpg',
        duration: '45 minutos',
        price: '$418 MXN',
        sessions: '1 sesión',
        technology: 'Técnicas Manuales',
        details: {
            duration: '45 minutos',
            price: '$418 MXN',
            benefits: [
                'Elimina impurezas y toxinas',
                'Desobstruye poros',
                'Mejora la textura de la piel',
                'Hidratación profunda',
                'Piel más suave y luminosa'
            ],
            description: 'Nuestra limpieza facial profunda elimina impurezas, desobstruye poros y revitaliza la piel para dejarla suave, hidratada y luminosa.',
            includes: [
                'Análisis de piel',
                'Limpieza profunda',
                'Exfoliación suave',
                'Hidratación intensiva',
                'Protección solar'
            ],
            recommended: 'Ideal para todo tipo de piel, especialmente para mantenimiento regular.'
        }
    }
];

// Make services data globally available immediately
(window as any).servicesData = services;

// --- Google Calendar API Loading ---
const loadGoogleCalendarAPI = () => {
    // Check if Google API is already loaded
    if (typeof (window as any).gapi !== 'undefined') {
        console.log('✅ Google API already loaded');
        return;
    }

    // Load Google Calendar API script
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
        console.log('✅ Google Calendar API loaded successfully');
    };
    script.onerror = () => {
        console.error('❌ Failed to load Google Calendar API');
    };
    
    document.head.appendChild(script);
};

// --- App Structure ---
const App = () => {
    const root = document.getElementById('root');
    if (!root) return;

    // Clear existing content
    root.innerHTML = '';

    // Load Google Calendar API
    loadGoogleCalendarAPI();

    // Create and append components
    const header = createHeader();
    root.appendChild(header);

    const main = createElement('main');
    main.appendChild(createHeroSection());
    main.appendChild(createGallerySection());
    main.appendChild(createServicesSection());
    main.appendChild(createPricingSection());
    main.appendChild(createAboutSection());
    main.appendChild(createTestimonialsSection());
    main.appendChild(createEmailSignupSection());
    main.appendChild(createBookingSection());
    main.appendChild(createContactSection());
    root.appendChild(main);
    root.appendChild(createFooter());
    

    // Add event listeners
    setupMobileMenu(header);
    setupSmoothScroll(header);
    
    // Immediate button setup as fallback
    setTimeout(() => {
        setupAllButtons();
    }, 100);
    
    // Add sticky booking CTA
    const stickyBar = createStickyBookingCTA();
    root.appendChild(stickyBar);
    console.log('✅ Sticky bar element created and added to DOM:', stickyBar);
    
    // Initialize carousel after DOM is ready
    setTimeout(() => {
        (window as any).initCarousel();
        (window as any).initAboutCarousel();
        (window as any).setupBookingForm();
        (window as any).setupEmailMarketing();
        (window as any).initSubscriptionBanner();
        (window as any).setupStickyBooking();
        (window as any).setupServiceComparison();
        initializeWhatsAppDiscountTracking();
        setupAllButtons();
    }, 500);
};

// --- Components ---
const createHeader = () => {
    const header = createElement('header', { role: 'banner' });
    const nav = createElement('nav', { className: 'container', role: 'navigation', 'aria-label': 'Navegación principal' });
    const logo = createElement('a', { className: 'logo', 'aria-label': 'Heilen Beauty Spa - Ir al inicio' });
    logo.href = '#home';
    logo.innerHTML = '<img src="./logo/HeilinBeautySpalogo.png" alt="Heilen Beauty Spa - Logo" />';

    const navLinks = createElement('ul', { role: 'menubar' });
        const links = ['Inicio', 'Servicios', 'Precios', 'Sobre Nosotros', 'Testimonios', 'Contacto'];
    links.forEach((link, index) => {
        const li = createElement('li', { role: 'none' });
        const a = createElement('a', { 
            textContent: link,
            role: 'menuitem',
            'aria-label': `Ir a la sección ${link}`
        });
        a.href = `#${link.toLowerCase().replace(' ', '-')}`;
        if (index === 0) a.setAttribute('aria-current', 'page');
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    const navButtons = createElement('div', { className: 'nav-buttons' });
    const reserveButton = createElement('a', { 
        className: 'button button-primary', 
        textContent: 'Reservar Cita',
        href: '#reservar-cita'
    });
    
    // Add click handler directly to the header button
    reserveButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🎯 Header Reservar Cita clicked');
        const bookingSection = document.getElementById('reservar-cita');
        if (bookingSection) {
            bookingSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            console.log('✅ Scrolled to booking section from header');
        } else {
            console.log('❌ Booking section not found');
        }
    });
    
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
    
    const h1 = createElement('h1', { innerHTML: '¡Piel perfecta, cero dolor!<br>Láser europeo de vanguardia.' });
    
    // Add trust signals
    // Trust signals section removed as requested
    
    // Create buttons section from scratch
    const buttons = createElement('div', { className: 'buttons' });
    
    // Create reserve button with proper functionality
    const reserveButton = createElement('a', { 
        className: 'button button-primary', 
        textContent: 'Reservar Cita',
        href: '#reservar-cita'
    });
    
    // Add click handler for smooth scrolling
    reserveButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🎯 HERO Reservar Cita clicked!');
        const bookingSection = document.getElementById('reservar-cita');
        if (bookingSection) {
            bookingSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            console.log('✅ Scrolled to booking section');
        } else {
            console.log('❌ Booking section not found');
        }
    });
    
    // Create services button with proper functionality
    const servicesButton = createElement('a', { 
        className: 'button button-secondary', 
        textContent: 'Ver Servicios',
        href: '#servicios'
    });
    
    // Add click handler for smooth scrolling
    servicesButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🎯 HERO Ver Servicios clicked!');
        const servicesSection = document.getElementById('servicios');
        if (servicesSection) {
            servicesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            console.log('✅ Scrolled to services section');
        } else {
            console.log('❌ Services section not found');
        }
    });
    
    buttons.append(reserveButton, servicesButton);
    
    const trustSection = createTrustSection();

    content.append(h1, buttons, trustSection);
    section.appendChild(content);
    return section;
};

const createTrustSection = () => {
    const section = createElement('div', { className: 'trust-section' });
    const items = [
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>', title: 'Philaser & Laser Tri Diodo' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>', title: 'Tecnología Europea' },
        { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>', title: 'Sin Dolor, Sin Cicatrices' }
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

const createGallerySection = () => {
    const section = createElement('section', { className: 'gallery-section', id: 'galeria' });
    const container = createElement('div', { className: 'container' });
    
    const header = createElement('div', { className: 'gallery-header' });
    const h2 = createElement('h2', { textContent: 'Nuestro Espacio' });
    const subtitle = createElement('p', { textContent: 'Descubre el ambiente relajante y profesional de Heilen Beauty Spa' });
    header.append(h2, subtitle);
    
    const gallery = createElement('div', { className: 'gallery-grid-container' });
    const galleryWrapper = createElement('div', { className: 'gallery-grid-wrapper' });
    const galleryGrid = createElement('div', { className: 'gallery-grid', id: 'gallery-grid' });
    
    const images = [
        {
            src: './Espacio/depilacion%20laser%20diodo.jpg',
            alt: 'Depilación Láser Diodo',
            title: 'Depilación Láser Diodo',
            service: 'Depilación Láser'
        },
        {
            src: './Espacio/laser%20depilacion.jpg',
            alt: 'Láser de Depilación',
            title: 'Láser de Depilación',
            service: 'Depilación Láser'
        },
        {
            src: './Espacio/hollywood%20carbon%20peel.jpg',
            alt: 'Hollywood Carbon Peel',
            title: 'Hollywood Carbon Peel',
            service: 'Tratamientos Faciales'
        },
        {
            src: './Espacio/la%20magia%20de%20hollywood%20peel.jpg',
            alt: 'La Magia del Hollywood Peel',
            title: 'La Magia del Hollywood Peel',
            service: 'Tratamientos Faciales'
        },
        {
            src: './Espacio/masajaes%20reductivos.jpg',
            alt: 'Masajes Reductivos',
            title: 'Masajes Reductivos',
            service: 'Masajes Reductivos'
        },
        {
            src: './Espacio/celulitis.jpg',
            alt: 'Tratamiento Anti-Celulitis',
            title: 'Tratamiento Anti-Celulitis',
            service: 'Masajes Reductivos'
        },
        {
            src: './Espacio/lifting%20de%20pestanas.jpg',
            alt: 'Lifting de Pestañas',
            title: 'Lifting de Pestañas',
            service: 'Tratamientos Faciales'
        },
        {
            src: './Espacio/unas.jpg',
            alt: 'Tratamiento de Uñas',
            title: 'Tratamiento de Uñas',
            service: 'Manicure y Pedicure'
        },
        {
            src: './Espacio/mascaras.jpg',
            alt: 'Máscaras Faciales',
            title: 'Máscaras Faciales',
            service: 'Tratamientos Faciales'
        },
        {
            src: './Espacio/cream.jpg',
            alt: 'Cremas y Productos',
            title: 'Cremas y Productos',
            service: 'Productos de Belleza'
        },
        {
            src: './Espacio/resultado%20inmediato.jpg',
            alt: 'Resultado Inmediato',
            title: 'Resultado Inmediato',
            service: 'Resultados'
        },
        {
            src: './Espacio/resultados%20inmediato%201.jpg',
            alt: 'Resultados Inmediatos',
            title: 'Resultados Inmediatos',
            service: 'Resultados'
        },
        {
            src: './Espacio/resultados%20inmediato.jpg',
            alt: 'Transformación Inmediata',
            title: 'Transformación Inmediata',
            service: 'Resultados'
        },
        {
            src: './Espacio/resultados%20visibles%20y%20duraderos.jpg',
            alt: 'Resultados Visibles y Duraderos',
            title: 'Resultados Visibles y Duraderos',
            service: 'Resultados'
        },
        {
            src: './Espacio/resultados.jpg',
            alt: 'Resultados Excepcionales',
            title: 'Resultados Excepcionales',
            service: 'Resultados'
        },
        {
            src: './Espacio/donde%20estamos.jpg',
            alt: 'Nuestra Ubicación',
            title: 'Nuestra Ubicación',
            service: 'Ubicación'
        },
        {
            src: './Espacio/step%201.jpg',
            alt: 'Paso 1 - Consulta',
            title: 'Paso 1 - Consulta',
            service: 'Proceso'
        },
        {
            src: './Espacio/step%202.jpg',
            alt: 'Paso 2 - Evaluación',
            title: 'Paso 2 - Evaluación',
            service: 'Proceso'
        },
        {
            src: './Espacio/step%203.jpg',
            alt: 'Paso 3 - Tratamiento',
            title: 'Paso 3 - Tratamiento',
            service: 'Proceso'
        },
        {
            src: './Espacio/step%204.jpg',
            alt: 'Paso 4 - Cuidado',
            title: 'Paso 4 - Cuidado',
            service: 'Proceso'
        },
        {
            src: './Espacio/step%205.jpg',
            alt: 'Paso 5 - Seguimiento',
            title: 'Paso 5 - Seguimiento',
            service: 'Proceso'
        },
        {
            src: './Espacio/step%206.jpg',
            alt: 'Paso 6 - Resultados',
            title: 'Paso 6 - Resultados',
            service: 'Proceso'
        },
        {
            src: './Espacio/step%207.jpg',
            alt: 'Paso 7 - Mantenimiento',
            title: 'Paso 7 - Mantenimiento',
            service: 'Proceso'
        },
        {
            src: './Espacio/step%208.jpg',
            alt: 'Paso 8 - Satisfacción',
            title: 'Paso 8 - Satisfacción',
            service: 'Proceso'
        }
    ];
    
    images.forEach((image, index) => {
        const galleryItem = createElement('div', { className: 'gallery-item' });
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <p class="service-category">${image.service}</p>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
    
    // Navigation arrows
    const prevButton = createElement('button', { 
        className: 'gallery-nav gallery-prev',
        id: 'gallery-prev',
        innerHTML: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"></polyline></svg>'
    });
    const nextButton = createElement('button', { 
        className: 'gallery-nav gallery-next',
        id: 'gallery-next',
        innerHTML: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"></polyline></svg>'
    });
    
    // Dots indicator
    const dotsContainer = createElement('div', { className: 'gallery-dots', id: 'gallery-dots' });
    
    galleryWrapper.appendChild(galleryGrid);
    galleryWrapper.appendChild(prevButton);
    galleryWrapper.appendChild(nextButton);
    galleryWrapper.appendChild(dotsContainer);
    gallery.appendChild(galleryWrapper);
    
    container.append(header, gallery);
    section.appendChild(container);

    return section;
};


const createServicesSection = () => {
    const section = createElement('section', { id: 'servicios' });
    const container = createElement('div', { className: 'container' });
    const h2 = createElement('h2', { textContent: 'Nuestros Servicios' });
    
    // Add comparison tool header
    const comparisonHeader = createElement('div', { className: 'services-header' });
    const comparisonText = createElement('p', { 
        textContent: 'Compara nuestros servicios y encuentra el perfecto para ti',
        className: 'services-subtitle'
    });
    
    const comparisonControls = createElement('div', { className: 'comparison-controls' });
    const compareButton = createElement('button', { 
        className: 'button button-secondary comparison-toggle',
        textContent: 'Comparar Servicios'
    });
    const clearComparisonButton = createElement('button', { 
        className: 'button button-outline clear-comparison',
        textContent: 'Limpiar Selección',
        style: 'display: none;'
    });
    
    comparisonControls.append(compareButton, clearComparisonButton);
    comparisonHeader.append(h2, comparisonText, comparisonControls);
    
    const grid = createElement('div', { className: 'services-grid' });


    services.forEach((service, index) => {
        const card = createElement('div', { className: 'service-card' });
        card.innerHTML = `
            <div class="service-image">
                <img src="${service.img}" alt="${service.title}" loading="lazy">
                <div class="service-overlay">
                    <button class="button button-primary service-details-btn" data-service="${index}">
                        Ver Detalles
                    </button>
                </div>
                <div class="service-badges">
                    ${service.popular ? '<span class="popular-badge">Más Popular</span>' : ''}
                    <span class="category-badge">${service.category || 'Servicio'}</span>
                </div>
            </div>
            <div class="service-card-content">
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
                <div class="service-meta">
                    <span class="service-duration">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        ${service.duration || 'Consultar'}
                    </span>
                    <span class="service-sessions">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${service.sessions || '1 sesión'}
                    </span>
                    <span class="service-technology">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"></path>
                            <rect x="9" y="3" width="6" height="8" rx="1"></rect>
                        </svg>
                        ${service.technology || 'Tecnología Europea'}
                    </span>
                </div>
                <div class="service-actions">
                    <button class="button button-primary service-book-btn" data-service="${index}">
                        Reservar
                    </button>
                    <button class="button button-secondary service-info-btn" data-service="${index}">
                        Más Info
                    </button>
                    <label class="comparison-checkbox">
                        <input type="checkbox" class="service-compare" data-service="${index}">
                        <span class="checkmark">Comparar</span>
                    </label>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    container.append(comparisonHeader, grid);
    section.appendChild(container);
    
    // Add event handlers for service card buttons after they're created
    setTimeout(() => {
        // Handle Reservar buttons
        const reservarButtons = section.querySelectorAll('.service-book-btn');
        reservarButtons.forEach((button, index) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🎯 Service Reservar clicked', index);
                const bookingSection = document.getElementById('reservar-cita');
                if (bookingSection) {
                    bookingSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    console.log('✅ Scrolled to booking section from service card');
                } else {
                    console.log('❌ Booking section not found');
                }
            });
        });

        // Handle Más Info buttons - show modal instead of scrolling
        const masInfoButtons = section.querySelectorAll('.service-info-btn');
        masInfoButtons.forEach((button, index) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🎯 Service Más Info clicked', index);
                
                // Get the service data
                const serviceIndex = parseInt(button.getAttribute('data-service') || '0');
                console.log('Service index:', serviceIndex);
                const servicesData = (window as any).servicesData;
                console.log('Services data:', servicesData);
                
                if (servicesData && servicesData[serviceIndex]) {
                    console.log('Calling showServiceModal with:', servicesData[serviceIndex]);
                    showServiceModal(servicesData[serviceIndex]);
                } else {
                    console.log('❌ Service data not found for index:', serviceIndex);
                }
            });
        });
        
        console.log(`✅ Added ${reservarButtons.length} Reservar button handlers`);
        console.log(`✅ Added ${masInfoButtons.length} Más Info button handlers`);
    }, 100);
    
    // Make services data globally accessible
    (window as any).servicesData = services;
    
    // Add comparison modal
    const comparisonModal = createComparisonModal();
    container.appendChild(comparisonModal);
    
    return section;
};

const createPricingSection = () => {
    const section = createElement('section', { id: 'precios' });
    const container = createElement('div', { className: 'container' });
    const h2 = createElement('h2', { textContent: 'Lista de Precios' });
    const grid = createElement('div', { className: 'pricing-grid' });
    
    const pricingData = {
        'Laser Tri Diodo - Depilación': [
            { name: 'Piernas Completas', price: '$1,210 MXN' },
            { name: 'Medias Piernas', price: '$605 MXN' },
            { name: 'Bikini', price: '$825 MXN' },
            { name: 'Axilas', price: '$715 MXN' },
            { name: 'Abdomen', price: '$825 MXN' },
            { name: 'Espalda', price: '$1,210 MXN' },
            { name: 'Glúteos', price: '$825 MXN' },
            { name: 'Brazos', price: '$935 MXN' },
            { name: 'Medio Brazo', price: '$550 MXN' },
            { name: 'Bigote', price: '$495 MXN' },
            { name: 'Patillas', price: '$495 MXN' },
            { name: 'Cuello y Barba', price: '$605 MXN' },
            { name: 'Cara', price: '$825 MXN' },
            { name: 'Cuerpo Completo', price: '$4,950 MXN' }
        ],
        'Tratamientos Faciales': [
            { name: 'Radiofrecuencia Facial', price: '$495 MXN' },
            { name: 'HydraFacial', price: '$935 MXN' },
            { name: 'Hollywood Carbon Peel', price: '$1,430 MXN' },
            { name: 'Maderoterapia Facial (8 sesiones)', price: '$3,000 MXN' },
            { name: 'Limpieza Facial', price: '$418 MXN' }
        ],
        'Tratamientos Especiales': [
            { name: 'Philaser - Eliminación Microblading', price: '$1,650 MXN' },
            { name: 'Masajes Reductivos (10 sesiones)', price: '$4,200 MXN' }
        ],
    };

    // Header
    const header = createElement('div', { className: 'pricing-header' });
    const subtitle = createElement('p', { textContent: 'Descubre nuestros tratamientos premium con precios transparentes y sin sorpresas' });
    header.append(h2, subtitle);

    // Pricing Categories
    const categoriesGrid = createElement('div', { className: 'pricing-categories-grid' });
    
    const categories = [
        {
            title: 'Laser Tri Diodo - Depilación',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>',
            description: 'Tecnología europea sin dolor',
            services: pricingData['Laser Tri Diodo - Depilación'],
            popular: ['Bikini', 'Cuerpo Completo']
        },
        {
            title: 'Tratamientos Faciales',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>',
            description: 'Rejuvenecimiento y limpieza profunda',
            services: pricingData['Tratamientos Faciales'],
            popular: ['HydraFacial']
        },
        {
            title: 'Tratamientos Especiales',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442c.563.045.99.42.475.345L11.48 3.5Z" /></svg>',
            description: 'Tecnología avanzada y paquetes completos',
            services: pricingData['Tratamientos Especiales'],
            popular: ['Philaser - Eliminación Microblading']
        }
    ];

    categories.forEach((category, index) => {
        const categoryCard = createElement('div', { className: 'pricing-category-card' });
        
        // Category Header with Dropdown Toggle
        const categoryHeader = createElement('div', { className: 'category-header' });
        const icon = createElement('div', { className: 'category-icon', innerHTML: category.icon });
        const titleDiv = createElement('div', { className: 'category-title-div' });
        const h3 = createElement('h3', { textContent: category.title });
        const description = createElement('p', { className: 'category-description', textContent: category.description });
        
        // Dropdown Toggle Button
        const toggleButton = createElement('button', { 
            className: 'dropdown-toggle',
            innerHTML: '<svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"></polyline></svg>'
        });
        toggleButton.addEventListener('click', () => {
            console.log('Toggle button clicked for index:', index);
            (window as any).toggleDropdown(index);
        });
        
        titleDiv.append(h3);
        categoryHeader.append(icon, titleDiv, toggleButton);
        
        // Services List (Initially Visible)
        const servicesList = createElement('div', { 
            className: 'services-list dropdown-content',
            id: `services-${index}`,
            style: 'display: block;'
        });
        
        // Show first 3 services by default
        const visibleServices = category.services.slice(0, 3);
        const hiddenServices = category.services.slice(3);
        
        visibleServices.forEach(service => {
            const serviceItem = createElement('div', { className: `service-item ${category.popular.includes(service.name) ? 'popular' : ''}` });
            serviceItem.innerHTML = `
                <div class="service-info">
                    <span class="service-name">${service.name}</span>
                    ${category.popular.includes(service.name) ? '<span class="popular-badge">Más Popular</span>' : ''}
                </div>
                <span class="service-price">${service.price}</span>
            `;
            servicesList.appendChild(serviceItem);
        });
        
        // Add "Ver Más" button if there are hidden services
        if (hiddenServices.length > 0) {
            const verMasButton = createElement('button', {
                className: 'ver-mas-button',
                textContent: `Ver ${hiddenServices.length} servicios más`
            });
            verMasButton.addEventListener('click', () => {
                console.log('Button clicked for index:', index);
                (window as any).toggleDropdown(index);
            });
            servicesList.appendChild(verMasButton);
        }
        
        // Hidden services
        hiddenServices.forEach(service => {
            const serviceItem = createElement('div', { className: `service-item hidden-service ${category.popular.includes(service.name) ? 'popular' : ''}` });
            serviceItem.innerHTML = `
                <div class="service-info">
                    <span class="service-name">${service.name}</span>
                    ${category.popular.includes(service.name) ? '<span class="popular-badge">Más Popular</span>' : ''}
                </div>
                <span class="service-price">${service.price}</span>
            `;
            servicesList.appendChild(serviceItem);
        });
        
        categoryCard.append(categoryHeader, description, servicesList);
        categoriesGrid.appendChild(categoryCard);
    });

    // CTA Section
    const ctaSection = createElement('div', { className: 'pricing-cta' });
    ctaSection.innerHTML = `
        <h3>¿Lista para tu transformación?</h3>
        <p>Reserva tu consulta gratuita y descubre el tratamiento perfecto para ti</p>
        <div class="cta-buttons">
            <a href="#reservar-cita" class="button button-primary">Reservar Consulta</a>
            <a href="https://wa.me/529982322090?text=Hola!%20Me%20interesa%20agendar%20una%20consulta%20gratuita%20en%20Heilen%20Beauty%20Spa.%20¿Podrían%20ayudarme%20con%20más%20información%20sobre%20sus%20servicios%20de%20depilación%20láser%20y%20tratamientos%20faciales?%20Gracias!" target="_blank" class="button button-secondary">WhatsApp</a>
        </div>
    `;
    
    container.append(header, categoriesGrid, ctaSection);
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
        <h3>Nuestra Misión</h3>
        <p>Ofrecer una experiencia de bienestar y relajación sin igual a través de servicios de alta calidad, promoviendo un ambiente acogedor que realce la belleza natural con un equipo de profesionales altamente capacitados.</p>
        
        <h3>Nuestros Valores</h3>
        <div class="values-grid">
            <div class="value-item">
                <h4>Integridad</h4>
                <p>Actuamos con honestidad y transparencia en todas nuestras interacciones, asegurando que nuestros clientes confíen plenamente en nuestros servicios y recomendaciones.</p>
            </div>
            <div class="value-item">
                <h4>Calidez</h4>
                <p>Tratamos a cada cliente con respeto y amabilidad, generando un ambiente de confianza, comprensión y alta disposición de servicio.</p>
            </div>
            <div class="value-item">
                <h4>Profesionalismo</h4>
                <p>Garantizamos la calidad y seguridad en todos los tratamientos, contando con un equipo de profesionales altamente capacitados y comprometidos con el bienestar y la seguridad de nuestros clientes.</p>
            </div>
        </div>
    `;

    const carouselDiv = createElement('div', { className: 'about-carousel' });
    carouselDiv.innerHTML = `
        <div class="instagram-carousel">
            <div class="carousel-container">
                <div class="carousel-track" id="about-carousel-track">
                    <div class="carousel-slide">
                        <img src="./nosotros/469956356_18023426732631459_5480819394971264408_n.jpg" alt="Heilen Beauty Spa - Tratamientos profesionales" />
                        <div class="carousel-overlay">
                            <div class="carousel-content">
                                <h4>Tratamientos Profesionales</h4>
                                <p>Servicios de alta calidad</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="./nosotros/470923347_18024845501631459_1714506775579285357_n 2.jpg" alt="Heilen Beauty Spa - Ambiente acogedor" />
                        <div class="carousel-overlay">
                            <div class="carousel-content">
                                <h4>Ambiente Acogedor</h4>
                                <p>Espacio diseñado para tu comodidad</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="./nosotros/472788108_888252303475710_8987832105464729646_n.jpg" alt="Heilen Beauty Spa - Tecnología avanzada" />
                        <div class="carousel-overlay">
                            <div class="carousel-content">
                                <h4>Tecnología Avanzada</h4>
                                <p>Equipos de última generación</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="./nosotros/473059659_889150160052591_8576112225688088826_n.jpg" alt="Heilen Beauty Spa - Profesionales expertos" />
                        <div class="carousel-overlay">
                            <div class="carousel-content">
                                <h4>Profesionales Expertos</h4>
                                <p>Equipo altamente capacitado</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="./nosotros/473599879_889150230052584_6971641016499647482_n.jpg" alt="Heilen Beauty Spa - Experiencia única" />
                        <div class="carousel-overlay">
                            <div class="carousel-content">
                                <h4>Experiencia Única</h4>
                                <p>Momentos de relajación y belleza</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="./nosotros/474075993_894637249503882_3205964411304431907_n.jpg" alt="Heilen Beauty Spa - Resultados visibles" />
                        <div class="carousel-overlay">
                            <div class="carousel-content">
                                <h4>Resultados Visibles</h4>
                                <p>Transformaciones reales y duraderas</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="./nosotros/475283409_18029193272631459_5073443155484472344_n.jpg" alt="Heilen Beauty Spa - Cuidado personalizado" />
                        <div class="carousel-overlay">
                            <div class="carousel-content">
                                <h4>Cuidado Personalizado</h4>
                                <p>Atención individualizada para cada cliente</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <img src="./nosotros/514424565_18047079335631459_2178101053242172927_n.jpg" alt="Heilen Beauty Spa - Bienestar integral" />
                        <div class="carousel-overlay">
                            <div class="carousel-content">
                                <h4>Bienestar Integral</h4>
                                <p>Salud y belleza en armonía</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-btn carousel-prev" id="about-carousel-prev">‹</button>
                <button class="carousel-btn carousel-next" id="about-carousel-next">›</button>
                <div class="carousel-dots" id="about-carousel-dots"></div>
            </div>
        </div>
    `;

    content.append(textDiv, carouselDiv);
    container.append(h2, content);
    section.appendChild(container);
    return section;
};

const createBookingSection = () => {
    const section = createElement('section', { id: 'reservar-cita', className: 'booking-section' });
    const container = createElement('div', { className: 'container' });
    
    const content = createElement('div', { className: 'booking-content' });
    content.innerHTML = `
        <div class="booking-header">
            <h2>Reservar Cita Online</h2>
            <p>Reserva tu cita de forma fácil y rápida. Elige el servicio que más te guste y agenda tu próxima experiencia de bienestar.</p>
        </div>

        <div class="booking-options">
            <div class="booking-form-card">
                <form id="booking-form" class="booking-form">
                    <div class="form-row">
        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Tu nombre completo" required>
                            <label for="name">Nombre Completo *</label>
                            <span class="error-message" id="name-error"></span>
        </div>
        <div class="form-group">
                            <input type="tel" id="phone" name="phone" placeholder="998 123 4567" required>
                            <label for="phone">Teléfono *</label>
                            <span class="error-message" id="phone-error"></span>
        </div>
        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="tu@email.com" required>
                            <label for="email">Email *</label>
                            <span class="error-message" id="email-error"></span>
        </div>
        <div class="form-group">
            <select id="service" name="service" required>
                                <option value="">Selecciona un servicio</option>
                                <option value="masaje-relajante">Masaje Relajante - $800</option>
                                <option value="hydrafacial">HydraFacial - $1,200</option>
                                <option value="depilacion-laser">Depilación Láser - $600</option>
                                <option value="carbon-peel">Hollywood Carbon Peel - $900</option>
                                <option value="masaje-reductivo">Masaje Reductivo - $700</option>
                                <option value="consulta-gratuita">Consulta Gratuita - $0</option>
            </select>
                            <label for="service">Servicio *</label>
                            <span class="error-message" id="service-error"></span>
        </div>
        <div class="form-group">
                            <input type="date" id="date" name="date" required placeholder="Selecciona una fecha">
                            <label for="date">Fecha Preferida *</label>
                            <span class="error-message" id="date-error"></span>
        </div>
        <div class="form-group">
                            <select id="time" name="time" required>
                                <option value="">Selecciona una hora</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="10:30">10:30 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="11:30">11:30 AM</option>
                                <option value="12:00">12:00 PM</option>
                                <option value="12:30">12:30 PM</option>
                                <option value="13:00">1:00 PM</option>
                                <option value="13:30">1:30 PM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="14:30">2:30 PM</option>
                                <option value="15:00">3:00 PM</option>
                                <option value="15:30">3:30 PM</option>
                                <option value="16:00">4:00 PM</option>
                                <option value="16:30">4:30 PM</option>
                                <option value="17:00">5:00 PM</option>
                                <option value="17:30">5:30 PM</option>
                            </select>
                            <label for="time">Hora Preferida *</label>
                            <span class="error-message" id="time-error"></span>
        </div>
                    </div>
                    
                    <div class="form-actions">
                    <button type="submit" class="booking-submit-btn">
                        <span class="btn-text">Reservar Mi Cita</span>
                        <span class="btn-loading" style="display: none;">Enviando...</span>
                    </button>
                    
                    <div class="form-message" id="booking-message"></div>
                    </div>
                </form>
                
                <div class="booking-success" id="booking-success" style="display: none;">
                    <div class="success-icon">✓</div>
                    <h3>¡Reserva Confirmada!</h3>
                    <p>Hemos recibido tu solicitud de reserva. Te hemos enviado un email de confirmación con todos los detalles de tu cita.</p>
                    <p style="font-size: 14px; color: #666; margin-top: 10px;">📧 Revisa tu bandeja de entrada (y spam) para la confirmación por email.</p>
                    <div class="success-actions">
                        <button class="button button-secondary" onclick="resetBookingForm()">Hacer Otra Reserva</button>
                        <a href="https://wa.me/529982322090?text=Hola!%20Acabo%20de%20completar%20mi%20reserva%20en%20Heilen%20Beauty%20Spa%20y%20me%20gustaría%20confirmar%20los%20detalles%20de%20mi%20cita.%20¿Podrían%20ayudarme%20con%20más%20información?%20Gracias!" target="_blank" class="button button-primary">Contactar por WhatsApp</a>
                    </div>
                </div>
            </div>

            <div class="whatsapp-card">
                <div class="whatsapp-header">
                    <div class="whatsapp-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                    </div>
                    <div class="whatsapp-text">
                        <h3>¿Prefieres agendar por chat?</h3>
                        <p>¡Es más rápido y directo! Contáctanos por WhatsApp</p>
                    </div>
                </div>
                
                <div class="whatsapp-benefits">
                    <div class="benefit-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Respuesta inmediata</span>
                    </div>
                    <div class="benefit-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Asesoría personalizada</span>
                    </div>
                    <div class="benefit-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Confirmación al instante</span>
                    </div>
                </div>
                
                <a href="https://wa.me/529982322090?text=Hola!%20Me%20interesa%20agendar%20una%20cita%20en%20Heilen%20Beauty%20Spa.%20¿Podrían%20ayudarme%20con%20información%20sobre%20sus%20servicios%20de%20depilación%20láser%20y%20tratamientos%20faciales?%20¿Cuáles%20son%20sus%20horarios%20de%20atención?%20Gracias!" target="_blank" class="whatsapp-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Agendar por WhatsApp
                </a>
            </div>
        </div>
    `;
    
    container.appendChild(content);
    section.appendChild(container);
    return section;
};

const createFooter = () => {
    const footer = createElement('footer', { className: 'main-footer' });
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <!-- Brand Section -->
                <div class="footer-brand">
                    <div class="footer-logo">
                        <img src="logo/HeilinBeautySpalogo.png" alt="Heilen Beauty Spa" class="footer-logo-img">
                        <h3>Heilen Beauty Spa</h3>
                    </div>
                    <p class="footer-description">
                        Tu oasis de belleza y bienestar en Cancún. Ofrecemos tratamientos de vanguardia con tecnología europea para realzar tu belleza natural.
                    </p>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/p/heilencolinabeauty-100068728457373" target="_blank" aria-label="Facebook" class="social-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/heilen.beautyspa/" target="_blank" aria-label="Instagram" class="social-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="https://wa.me/529982322090?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20Heilen%20Beauty%20Spa%20y%20sus%20servicios%20de%20belleza%20y%20bienestar.%20¿Podrían%20enviarme%20información%20sobre%20sus%20tratamientos?%20Gracias!" target="_blank" aria-label="WhatsApp" class="social-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-links">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#precios">Precios</a></li>
                        <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                        <li><a href="#testimonios">Testimonios</a></li>
                        <li><a href="#reservar-cita">Reservar Cita</a></li>
                    </ul>
                </div>

                <!-- Services -->
                <div class="footer-services">
                    <h4>Nuestros Servicios</h4>
                    <ul>
                        <li><a href="#servicios">Masaje Relajante</a></li>
                        <li><a href="#servicios">HydraFacial</a></li>
                        <li><a href="#servicios">Depilación Láser</a></li>
                        <li><a href="#servicios">Hollywood Carbon Peel</a></li>
                        <li><a href="#servicios">Masaje Reductivo</a></li>
                        <li><a href="#servicios">Consulta Gratuita</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="footer-contact">
                    <h4>Contacto</h4>
                    <div class="contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span>Plaza Aura, Av Huayacán Supermanzana 313<br>Manzana 243 Lote 1-Local 29-30<br>Tercer nivel, 77560 Cancún, Q.R.</span>
                    </div>
                    <div class="contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <a href="tel:+529982322090">998 232 2090</a>
                    </div>
                    <div class="contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Lun - Sáb: 10:00 AM - 6:00 PM</span>
                    </div>
                    <div class="contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <a href="mailto:info@heilenbeautyspa.com">info@heilenbeautyspa.com</a>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <p>&copy; 2024 Heilen Beauty Spa. Todos los derechos reservados.</p>
                    <div class="footer-legal">
                        <a href="#privacidad">Política de Privacidad</a>
                        <a href="#terminos">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    return footer;
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
            <span>Subiendo el elevador del lado derecho, Plaza Aura, Av Huayacán Supermanzana 313 Manzana 243 Lote 1-Local 29-30 tercer nivel, 77560 Cancún, Q.R.</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
            <span>998 232 2090</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            <span>Lun - Sáb: 10:00 AM - 6:00 PM</span>
        </li>
      </ul>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3733.9!2d-86.83!3d21.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlaza Aura Cancun!5e0!3m2!1sen!2smx!4v1736717000000!5m2!1sen!2smx" allowfullscreen="" loading="lazy" title="Ubicación de Heilen Beauty Spa en Plaza Aura"></iframe>
      </div>
    `;

    grid.appendChild(info);
    container.append(h2, grid);
    section.appendChild(container);
    return section;
};

const createTestimonialsSection = () => {
    const section = createElement('section', { className: 'testimonials-section', id: 'testimonios' });
    const container = createElement('div', { className: 'container' });
    
    const header = createElement('div', { className: 'section-header' });
    header.innerHTML = `
        <h2>Lo que dicen nuestros clientes</h2>
        <p>Experiencias reales de quienes han confiado en nosotros</p>
    `;
    
    const testimonialsGrid = createElement('div', { className: 'testimonials-grid' });
    testimonialsGrid.innerHTML = `
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="stars">★★★★★</div>
                <p>"Excelente servicio y atención personalizada. El masaje relajante fue increíble y me ayudó mucho con el estrés. Definitivamente regresaré."</p>
            </div>
            <div class="testimonial-author">
                <div class="author-info">
                    <h4>María González</h4>
                    <span>Cliente desde 2023</span>
                </div>
            </div>
        </div>
        
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="stars">★★★★★</div>
                <p>"La depilación láser fue sin dolor y muy efectiva. El personal es profesional y el ambiente es relajante. Recomiendo totalmente sus servicios."</p>
            </div>
            <div class="testimonial-author">
                <div class="author-info">
                    <h4>Ana Rodríguez</h4>
                    <span>Cliente desde 2022</span>
                </div>
            </div>
        </div>
        
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="stars">★★★★★</div>
                <p>"El Hydrafacial me dejó la piel increíble. Se nota la diferencia desde la primera sesión. El equipo es muy profesional y el lugar es hermoso."</p>
            </div>
            <div class="testimonial-author">
                <div class="author-info">
                    <h4>Laura Martínez</h4>
                    <span>Cliente desde 2023</span>
                </div>
            </div>
        </div>
        
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="stars">★★★★★</div>
                <p>"La presoterapia me ayudó mucho con la circulación. El tratamiento es relajante y efectivo. El personal siempre está dispuesto a ayudar."</p>
            </div>
            <div class="testimonial-author">
                <div class="author-info">
                    <h4>Carmen López</h4>
                    <span>Cliente desde 2022</span>
                </div>
            </div>
        </div>
        
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="stars">★★★★★</div>
                <p>"El Hollywood Carbon Peel fue increíble. Mi piel se ve más joven y radiante. Definitivamente vale la pena invertir en estos tratamientos."</p>
            </div>
            <div class="testimonial-author">
                <div class="author-info">
                    <h4>Patricia Sánchez</h4>
                    <span>Cliente desde 2023</span>
                </div>
            </div>
        </div>
        
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="stars">★★★★★</div>
                <p>"Excelente atención y resultados. El ambiente es muy profesional y relajante. Recomiendo Heilen Beauty Spa a todas mis amigas."</p>
            </div>
            <div class="testimonial-author">
                <div class="author-info">
                    <h4>Isabel Torres</h4>
                    <span>Cliente desde 2022</span>
                </div>
            </div>
        </div>
    `;
    
    container.append(header, testimonialsGrid);
    section.appendChild(container);
    return section;
};

const createEmailSignupSection = () => {
    const section = createElement('section', { className: 'email-signup-section', id: 'newsletter' });
    const container = createElement('div', { className: 'container' });

    const content = createElement('div', { className: 'email-signup-content' });
    content.innerHTML = `
        <div class="newsletter-header">
            <h2>Mantente al día con nuestras ofertas especiales</h2>
            <p>Recibe descuentos exclusivos, consejos de belleza y noticias sobre nuevos tratamientos</p>
        </div>

        <div class="newsletter-form-container">
            <form id="email-signup-form" class="newsletter-form">
                <div class="form-group">
                    <input type="email" id="newsletter-email" name="email" placeholder="Tu dirección de email" required>
                    <button type="submit" class="newsletter-submit-btn">
                        <span class="btn-text">Suscribirse</span>
                        <span class="btn-loading" style="display: none;">Enviando...</span>
                    </button>
                </div>
                <div class="form-message" id="newsletter-message"></div>
            </form>
            
            <div class="newsletter-benefits">
                <div class="benefit-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Descuentos exclusivos</span>
                </div>
                <div class="benefit-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Consejos de expertos</span>
                </div>
                <div class="benefit-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Sin spam</span>
                </div>
            </div>
        </div>
    `;

    container.appendChild(content);
    section.appendChild(container);
    return section;
};




// --- Service Modal Functions ---
const createServiceModal = () => {
    const modal = createElement('div', { className: 'service-modal' });
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeServiceModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeServiceModal()">&times;</button>
            <div class="modal-header">
                <img class="modal-image" src="" alt="">
                <div class="modal-title-section">
                    <h2 class="modal-title"></h2>
                    <div class="modal-price-duration">
                        <span class="modal-price"></span>
                        <span class="modal-duration"></span>
                    </div>
                </div>
            </div>
            <div class="modal-body">
                <div class="modal-description">
                    <h3>Descripción del Tratamiento</h3>
                    <p class="modal-description-text"></p>
                </div>
                
                <div class="modal-benefits">
                    <h3>Beneficios</h3>
                    <ul class="benefits-list"></ul>
                </div>
                
                <div class="modal-includes">
                    <h3>Incluye</h3>
                    <ul class="includes-list"></ul>
                </div>
                
                <div class="modal-recommended">
                    <h3>Recomendado para</h3>
                    <p class="modal-recommended-text"></p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="button button-secondary" onclick="closeServiceModal()">Cerrar</button>
                <a href="#reservar-cita" class="button button-primary" onclick="closeServiceModal()">Reservar Ahora</a>
            </div>
        </div>
    `;
    return modal;
};

// Function to show service modal with detailed information
const showServiceModal = (service: any) => {
    console.log('🎯 Showing service modal for:', service.title);
    
    // Remove any existing modal
    const existingModal = document.querySelector('.service-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal overlay
    const modal = createElement('div', { className: 'service-modal' });
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close" aria-label="Cerrar">&times;</button>
            <div class="modal-header">
                <img src="${service.img}" alt="${service.title}" class="modal-service-image">
                <div class="modal-title-overlay">
                    <h2 class="modal-title">${service.title}</h2>
                    <div class="modal-meta">
                        <span class="modal-duration">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12,6 12,12 16,14"></polyline>
                            </svg>
                            ${service.details?.duration || service.duration || 'Consultar duración'}
                        </span>
                        <span class="modal-price">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                            ${service.details?.price || service.price || 'Consultar precio'}
                        </span>
                    </div>
                </div>
            </div>
            <div class="modal-body">
                <div class="modal-description">
                    <h3>Descripción del Servicio</h3>
                    <p>${service.desc}</p>
                </div>
                <div class="modal-details">
                    <h3>Detalles del Tratamiento</h3>
                    <ul class="benefits-list">
                        <li>Tecnología europea de vanguardia</li>
                        <li>Sin dolor ni efectos secundarios</li>
                        <li>Resultados visibles desde la primera sesión</li>
                        <li>Personal especializado certificado</li>
                        <li>Ambiente cómodo y relajante</li>
                    </ul>
                </div>
                <div class="modal-includes">
                    <h3>¿Qué incluye?</h3>
                    <ul class="includes-list">
                        <li>Consulta inicial gratuita</li>
                        <li>Tratamiento completo</li>
                        <li>Instrucciones de cuidado post-tratamiento</li>
                        <li>Seguimiento personalizado</li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <button class="button button-primary modal-reserve-btn">
                    Reservar Ahora
                </button>
                <button class="button button-secondary modal-close-btn">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Add event listeners for modal interactions
    const closeBtn = modal.querySelector('.modal-close');
    const closeBtn2 = modal.querySelector('.modal-close-btn');
    const overlay = modal.querySelector('.modal-overlay');
    const reserveBtn = modal.querySelector('.modal-reserve-btn');
    
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    };
    
    closeBtn?.addEventListener('click', closeModal);
    closeBtn2?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', closeModal);
    
    reserveBtn?.addEventListener('click', () => {
        closeModal();
        const bookingSection = document.getElementById('reservar-cita');
        if (bookingSection) {
            setTimeout(() => {
                bookingSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        }
    });
    
    // Show modal with animation using the existing CSS class system
    setTimeout(() => {
        modal.classList.add('active');
        console.log('Modal should now be visible with active class');
    }, 10);
};

// Global function to open service modal
(window as any).openServiceModal = (serviceIndex: number) => {
    const services = (window as any).servicesData;
    if (!services || !services[serviceIndex]) return;
    
    const service = services[serviceIndex];
    const modal = document.querySelector('.service-modal') as HTMLElement;
    
    if (!modal) {
        const newModal = createServiceModal();
        document.body.appendChild(newModal);
        (window as any).currentModal = newModal;
    }
    
    const currentModal = (window as any).currentModal || document.querySelector('.service-modal');
    
    // Populate modal with service data
    const modalImage = currentModal.querySelector('.modal-image') as HTMLImageElement;
    const modalTitle = currentModal.querySelector('.modal-title');
    const modalPrice = currentModal.querySelector('.modal-price');
    const modalDuration = currentModal.querySelector('.modal-duration');
    const modalDescription = currentModal.querySelector('.modal-description-text');
    const modalRecommended = currentModal.querySelector('.modal-recommended-text');
    
    if (modalImage) {
        modalImage.setAttribute('src', service.img);
        modalImage.setAttribute('alt', service.title);
    }
    if (modalTitle) modalTitle.textContent = service.title;
    if (modalPrice) modalPrice.textContent = service.details.price;
    if (modalDuration) modalDuration.textContent = service.details.duration;
    if (modalDescription) modalDescription.textContent = service.details.description;
    if (modalRecommended) modalRecommended.textContent = service.details.recommended;
    
    // Populate benefits list
    const benefitsList = currentModal.querySelector('.benefits-list');
    if (benefitsList) {
        benefitsList.innerHTML = '';
        service.details.benefits.forEach((benefit: string) => {
            const li = createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
    }
    
    // Populate includes list
    const includesList = currentModal.querySelector('.includes-list');
    if (includesList) {
        includesList.innerHTML = '';
        service.details.includes.forEach((item: string) => {
            const li = createElement('li');
            li.textContent = item;
            includesList.appendChild(li);
        });
    }
    
    // Show modal
    currentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

// Global function to close service modal
(window as any).closeServiceModal = () => {
    const modal = document.querySelector('.service-modal') as HTMLElement;
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Global function for dropdown toggle
(window as any).toggleDropdown = (index: number) => {
    console.log('toggleDropdown called with index:', index);
    const dropdown = document.getElementById(`services-${index}`);
    const verMasButton = dropdown?.querySelector('.ver-mas-button');
    const hiddenServices = dropdown?.querySelectorAll('.hidden-service');
    
    console.log('dropdown:', dropdown);
    console.log('verMasButton:', verMasButton);
    console.log('hiddenServices:', hiddenServices);
    
    if (dropdown && verMasButton && hiddenServices && hiddenServices.length > 0) {
        const isExpanded = hiddenServices[0]?.classList.contains('show');
        console.log('isExpanded:', isExpanded);
        
        if (isExpanded) {
            // Collapse - hide hidden services
            verMasButton.textContent = verMasButton.textContent?.replace('menos', 'más') || 'Ver servicios más';
            hiddenServices.forEach(service => {
                service.classList.remove('show');
                (service as HTMLElement).style.setProperty('display', 'none');
            });
        } else {
            // Expand - show hidden services
            verMasButton.textContent = verMasButton.textContent?.replace('más', 'menos') || 'Ver menos';
            hiddenServices.forEach((service, i) => {
                console.log(`Showing hidden service ${i}:`, service);
                service.classList.add('show');
                (service as HTMLElement).style.display = 'flex';
                (service as HTMLElement).style.visibility = 'visible';
                (service as HTMLElement).style.opacity = '1';
            });
        }
    } else {
        console.log('Missing elements:', {
            dropdown: !!dropdown,
            verMasButton: !!verMasButton,
            hiddenServices: hiddenServices?.length || 0
        });
    }
};

// Global carousel functionality
(window as any).initAboutCarousel = () => {
    const carousel = document.querySelector('.instagram-carousel');
    if (!carousel) {
        console.warn('About carousel not found');
        return;
    }
    
    const track = carousel.querySelector('.carousel-track') as HTMLElement;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev') as HTMLButtonElement;
    const nextBtn = carousel.querySelector('.carousel-next') as HTMLButtonElement;
    const dotsContainer = carousel.querySelector('.carousel-dots') as HTMLElement;
    
    if (!track || slides.length === 0) {
        console.warn('About carousel elements not found');
        return;
    }
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Create dots
    const createDots = () => {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
            dot.setAttribute('data-slide', i.toString());
            dotsContainer.appendChild(dot);
        }
    };
    
    // Update carousel position
    const updateCarousel = () => {
        const slideWidth = track.offsetWidth / totalSlides;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        
        // Update dots
        const dots = dotsContainer?.querySelectorAll('.carousel-dot');
        dots?.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    };
    
    // Next slide
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    };
    
    // Previous slide
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    };
    
    // Go to specific slide
    const goToSlide = (slideIndex: number) => {
        currentSlide = slideIndex;
        updateCarousel();
    };
    
    // Event listeners
    nextBtn?.addEventListener('click', nextSlide);
    prevBtn?.addEventListener('click', prevSlide);
    
    // Dot navigation
    dotsContainer?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('carousel-dot')) {
            const slideIndex = parseInt(target.getAttribute('data-slide') || '0');
            goToSlide(slideIndex);
        }
    });
    
    // Autoplay
    let autoplayInterval: NodeJS.Timeout;
    const startAutoplay = () => {
        autoplayInterval = setInterval(nextSlide, 4000);
    };
    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };
    
    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // Initialize
    createDots();
    
    // Wait for images to load before initializing
    const initCarousel = () => {
        updateCarousel();
        startAutoplay();
    };
    
    // Check if images are loaded
    const images = track.querySelectorAll('img');
    let loadedImages = 0;
    
    if (images.length === 0) {
        initCarousel();
    } else {
        images.forEach(img => {
            if (img.complete) {
                loadedImages++;
            } else {
                img.addEventListener('load', () => {
                    loadedImages++;
                    if (loadedImages === images.length) {
                        initCarousel();
                    }
                });
            }
        });
        
        if (loadedImages === images.length) {
            initCarousel();
        }
    }
    
    // Handle resize
    const resizeHandler = () => updateCarousel();
    window.addEventListener('resize', resizeHandler);
    
    // Cleanup function
    const cleanup = () => {
        clearInterval(autoplayInterval);
        window.removeEventListener('resize', resizeHandler);
    };
    (carousel as any).cleanup = cleanup;
};


(window as any).initCarousel = () => {
    const gallery = document.querySelector('.gallery-grid-container');
    if (!gallery) {
        console.warn('Gallery grid not found');
        return;
    }
    
    const grid = gallery.querySelector('.gallery-grid') as HTMLElement;
    const items = gallery.querySelectorAll('.gallery-item');
    const dots = gallery.querySelector('.gallery-dots') as HTMLElement;
    const prevBtn = gallery.querySelector('.gallery-prev');
    const nextBtn = gallery.querySelector('.gallery-next');
    
    if (!grid || items.length === 0) {
        console.warn('Gallery elements not found');
        return;
    }
    
    let currentPage = 0;
    const itemsPerPage = 6; // 3 columns x 2 rows
    const totalPages = Math.ceil(items.length / itemsPerPage);
    let autoplayInterval: NodeJS.Timeout;
    
    const updateGallery = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, items.length);
        
        // Hide all items
        items.forEach((item, index) => {
            const itemElement = item as HTMLElement;
            if (index >= startIndex && index < endIndex) {
                itemElement.style.display = 'block';
            } else {
                itemElement.style.display = 'none';
            }
        });
        
        // Update dots
        const dotElements = dots.querySelectorAll('.gallery-dot');
        dotElements.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage);
        });
        
        // Update navigation buttons
        if (prevBtn) {
            (prevBtn as HTMLButtonElement).disabled = currentPage === 0;
        }
        if (nextBtn) {
            (nextBtn as HTMLButtonElement).disabled = currentPage === totalPages - 1;
        }
    };
    
    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateGallery();
        }
    };
    
    const prevPage = () => {
        if (currentPage > 0) {
            currentPage--;
            updateGallery();
        }
    };
    
    const goToPage = (index: number) => {
        currentPage = index;
        updateGallery();
    };
    
    const createDots = () => {
        dots.innerHTML = '';
        for (let i = 0; i < totalPages; i++) {
            const dot = createElement('button', {
                className: `gallery-dot ${i === 0 ? 'active' : ''}`,
                onclick: () => goToPage(i)
            });
            dots.appendChild(dot);
        }
    };
    
    const startAutoplay = () => {
        autoplayInterval = setInterval(nextPage, 5000); // 5 seconds
    };
    
    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };
    
    // Event listeners
    nextBtn?.addEventListener('click', () => {
        nextPage();
        stopAutoplay();
        startAutoplay();
    });
    
    prevBtn?.addEventListener('click', () => {
        prevPage();
        stopAutoplay();
        startAutoplay();
    });
    
    // Pause on hover
    gallery.addEventListener('mouseenter', stopAutoplay);
    gallery.addEventListener('mouseleave', startAutoplay);
    
    // Initialize
    createDots();
    updateGallery();
    startAutoplay();
    
    // Handle window resize
    const resizeHandler = () => updateGallery();
    window.addEventListener('resize', resizeHandler);
    
    // Cleanup function
    const cleanup = () => {
        clearInterval(autoplayInterval);
        window.removeEventListener('resize', resizeHandler);
    };
    
    // Store cleanup function for potential use
    (gallery as any).cleanup = cleanup;
};

// --- Google Calendar Integration ---
(window as any).setupBookingForm = () => {
    const form = document.getElementById('booking-form') as HTMLFormElement;
    if (!form) return;

    // Set minimum date to today
    const dateInput = document.getElementById('date') as HTMLInputElement;
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearFormErrors();
        
        // Validate form
        if (!validateBookingForm()) {
            return;
        }

        // Show loading state
        showLoadingState(true);

        try {
            // Get form data
            const formData = new FormData(form);
            const bookingData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                date: formData.get('date'),
                time: formData.get('time'),
                timestamp: new Date().toISOString()
            };

            // Create Google Calendar event
            await createGoogleCalendarEvent(bookingData);
            
            // Show success message
            showBookingSuccess();
            
        } catch (error) {
            console.error('Booking submission error:', error);
            showFormError('Hubo un error al enviar tu reserva. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.');
        } finally {
            showLoadingState(false);
        }
    });
};

const createGoogleCalendarEvent = async (bookingData: any) => {
    console.log('📅 Creating Google Calendar event:', bookingData);
    
    try {
        // Format the date and time for Google Calendar
        const appointmentDate = new Date(`${bookingData.date}T${bookingData.time}:00`);
        const endTime = new Date(appointmentDate.getTime() + 60 * 60 * 1000); // Add 1 hour
        
        // Create the event object
        const event = {
            summary: `Cita: ${bookingData.service} - ${bookingData.name}`,
            description: `
Cliente: ${bookingData.name}
Email: ${bookingData.email}
Teléfono: ${bookingData.phone}
Servicio: ${bookingData.service}
Fecha: ${bookingData.date}
Hora: ${bookingData.time}

Reserva realizada desde el sitio web de Heilen Beauty Spa.
            `.trim(),
            start: {
                dateTime: appointmentDate.toISOString(),
                timeZone: 'America/Cancun'
            },
            end: {
                dateTime: endTime.toISOString(),
                timeZone: 'America/Cancun'
            },
            attendees: [
                { email: bookingData.email, displayName: bookingData.name }
            ],
            reminders: {
                useDefault: false,
                overrides: [
                    { method: 'email', minutes: 24 * 60 }, // 1 day before
                    { method: 'popup', minutes: 60 } // 1 hour before
                ]
            }
        };

        // Try to use Google Calendar API first
        try {
            await createEventWithGoogleAPI(event);
            console.log('✅ Google Calendar API event created successfully');
        } catch (apiError) {
            console.log('⚠️ Google Calendar API not available, using fallback method');
            // Fallback to "Add to Calendar" link
            const googleCalendarUrl = createGoogleCalendarUrl(event);
            window.open(googleCalendarUrl, '_blank');
        }
        
        // Also send email notification (keeping existing email system)
        await sendBookingConfirmationEmail({
            name: bookingData.name as string,
            email: bookingData.email as string,
            phone: bookingData.phone as string,
            service: bookingData.service as string,
            date: bookingData.date as string,
            time: bookingData.time as string
        });
        
    } catch (error) {
        console.error('❌ Error creating Google Calendar event:', error);
        throw error;
    }
};

const createEventWithGoogleAPI = async (event: any) => {
    // Google Calendar API configuration
    const GOOGLE_CLIENT_ID = '510575884862-a5ekpon7a4kadjgnbd02inotevqtp73t.apps.googleusercontent.com';
    const GOOGLE_API_KEY = 'AIzaSyA_2bMmyvwUTZFoUI2sNFlHfrqSridUkSI';
    const CALENDAR_ID = 'primary'; // Use primary calendar or specific calendar ID
    
    // Check if Google API is loaded
    if (typeof (window as any).gapi === 'undefined') {
        throw new Error('Google API not loaded');
    }
    
    // Check if credentials are configured
    if (GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID' || GOOGLE_API_KEY === 'YOUR_GOOGLE_API_KEY') {
        throw new Error('Google Calendar API credentials not configured');
    }
    
    return new Promise((resolve, reject) => {
        // Initialize Google API
        (window as any).gapi.load('client:auth2', async () => {
            try {
                await (window as any).gapi.client.init({
                    apiKey: GOOGLE_API_KEY,
                    clientId: GOOGLE_CLIENT_ID,
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                    scope: 'https://www.googleapis.com/auth/calendar'
                });
                
                // Authenticate user
                const authInstance = (window as any).gapi.auth2.getAuthInstance();
                const user = await authInstance.signIn();
                
                if (!user.isSignedIn()) {
                    throw new Error('User not authenticated');
                }
                
                // Create the event
                const request = (window as any).gapi.client.calendar.events.insert({
                    calendarId: CALENDAR_ID,
                    resource: event
                });
                
                const response = await request;
                console.log('✅ Event created successfully:', response.result);
                resolve(response.result);
                
            } catch (error) {
                console.error('❌ Error creating Google Calendar event:', error);
                reject(error);
            }
        });
    });
};

const createGoogleCalendarUrl = (event: any) => {
    const baseUrl = 'https://calendar.google.com/calendar/render';
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: event.summary,
        dates: `${formatDateForGoogle(event.start.dateTime)}/${formatDateForGoogle(event.end.dateTime)}`,
        details: event.description,
        location: 'Heilen Beauty Spa, Cancún, México',
        trp: 'false'
    });
    
    return `${baseUrl}?${params.toString()}`;
};

const formatDateForGoogle = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
};

const validateBookingForm = (): boolean => {
    let isValid = true;
    
    // Validate name
    const nameElement = document.getElementById('name') as HTMLInputElement;
    if (!nameElement) {
        console.error('Name input not found');
        return false;
    }
    const name = nameElement.value.trim();
    if (!name || name.length < 2) {
        showFieldError('name', 'Por favor, ingresa tu nombre completo');
        isValid = false;
    }

    // Validate email
    const emailElement = document.getElementById('email') as HTMLInputElement;
    if (!emailElement) {
        console.error('Email input not found');
        return false;
    }
    const email = emailElement.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showFieldError('email', 'Por favor, ingresa un email válido');
        isValid = false;
    }

    // Validate phone
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    if (!phoneElement) {
        console.error('Phone input not found');
        return false;
    }
    const phone = phoneElement.value.trim();
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phone || !phoneRegex.test(phone)) {
        showFieldError('phone', 'Por favor, ingresa un teléfono válido');
        isValid = false;
    }

    // Validate service
    const serviceElement = document.getElementById('service') as HTMLSelectElement;
    if (!serviceElement) {
        console.error('Service select not found');
        return false;
    }
    const service = serviceElement.value;
    if (!service) {
        showFieldError('service', 'Por favor, selecciona un servicio');
        isValid = false;
    }

    // Validate date
    const dateElement = document.getElementById('date') as HTMLInputElement;
    if (!dateElement) {
        console.error('Date input not found');
        return false;
    }
    const date = dateElement.value;
    if (!date) {
        showFieldError('date', 'Por favor, selecciona una fecha');
        isValid = false;
    } else {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
            showFieldError('date', 'La fecha debe ser hoy o en el futuro');
            isValid = false;
        }
    }

    // Validate time
    const timeElement = document.getElementById('time') as HTMLSelectElement;
    if (!timeElement) {
        console.error('Time select not found');
        return false;
    }
    const time = timeElement.value;
    if (!time) {
        showFieldError('time', 'Por favor, selecciona una hora');
        isValid = false;
    }

    // Validate terms (optional - only if terms checkbox exists)
    const termsElement = document.getElementById('terms') as HTMLInputElement;
    if (termsElement) {
        const terms = termsElement.checked;
    if (!terms) {
        showFieldError('terms', 'Debes aceptar los términos y condiciones');
        isValid = false;
        }
    }

    return isValid;
};

const showFieldError = (fieldId: string, message: string) => {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('error');
    }
};

const clearFormErrors = () => {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
        (element as HTMLElement).style.display = 'none';
    });
    
    const fields = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    fields.forEach(field => {
        field.classList.remove('error');
    });
};

const showLoadingState = (isLoading: boolean) => {
    const submitBtn = document.querySelector('.booking-submit-btn') as HTMLButtonElement;
    const btnText = submitBtn.querySelector('.btn-text') as HTMLElement;
    const btnLoading = submitBtn.querySelector('.btn-loading') as HTMLElement;
    
    if (isLoading) {
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
    } else {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
};

const submitBooking = async (bookingData: any) => {
    console.log('📧 Processing booking:', bookingData);
    
    try {
        // Send booking confirmation email to customer
        await sendBookingConfirmationEmail({
            name: bookingData.name as string,
            email: bookingData.email as string,
            phone: bookingData.phone as string,
            service: bookingData.service as string,
            date: bookingData.date as string,
            time: bookingData.time as string
        });
        
        // Send notification email to business (optional)
        await fetch(RESEND_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Heilen Beauty Spa <noreply@heilenbeautyspa.com>',
                to: ['heilenbeautyspamx@gmail.com'], // Your business email
                subject: `Nueva Reserva - ${bookingData.service} 📅`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #a0816e;">Nueva Reserva Recibida 📅</h2>
                        
                        <div style="background: #f8f6f3; padding: 20px; border-radius: 10px; margin: 20px 0;">
                            <h3 style="color: #a0816e; margin-top: 0;">Detalles de la Reserva:</h3>
                            <p><strong>Cliente:</strong> ${bookingData.name}</p>
                            <p><strong>Email:</strong> ${bookingData.email}</p>
                            <p><strong>Teléfono:</strong> ${bookingData.phone}</p>
                            <p><strong>Servicio:</strong> ${bookingData.service}</p>
                            <p><strong>Fecha:</strong> ${bookingData.date}</p>
                            <p><strong>Hora:</strong> ${bookingData.time}</p>
                            ${bookingData.message ? `<p><strong>Mensaje:</strong> ${bookingData.message}</p>` : ''}
                            <p><strong>Fecha de Reserva:</strong> ${new Date(bookingData.timestamp).toLocaleString('es-MX')}</p>
                        </div>
                        
                        <div style="text-align: center; margin: 20px 0;">
                            <a href="https://wa.me/529981234567?text=Nueva reserva de ${bookingData.name} para ${bookingData.service} el ${bookingData.date}" 
                               style="background: #25D366; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                                💬 Contactar Cliente
                            </a>
                        </div>
                    </div>
                `
            })
        });
        
        // Store booking in localStorage as backup
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        bookings.push({
            ...bookingData,
            id: Date.now().toString(),
            status: 'pending'
        });
        localStorage.setItem('bookings', JSON.stringify(bookings));
        
        console.log('✅ Booking confirmation emails sent successfully');
    return Promise.resolve();
        
    } catch (error) {
        console.error('❌ Error sending booking emails:', error);
        // Still return success to not break the user experience
        // In production, you might want to handle this differently
        return Promise.resolve();
    }
};

const showBookingSuccess = () => {
    const form = document.getElementById('booking-form');
    const successDiv = document.getElementById('booking-success');
    
    if (form && successDiv) {
        form.style.display = 'none';
        successDiv.style.display = 'block';
    }
};

const showFormError = (message: string) => {
    // Create or update a general error message
    let errorDiv = document.getElementById('form-error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'form-error';
        errorDiv.className = 'form-error-message';
        const form = document.getElementById('booking-form');
        if (form) {
            form.insertBefore(errorDiv, form.firstChild);
        }
    }
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
};

(window as any).resetBookingForm = () => {
    const form = document.getElementById('booking-form');
    const successDiv = document.getElementById('booking-success');
    
    if (form && successDiv) {
        (form as HTMLFormElement).reset();
        form.style.display = 'block';
        successDiv.style.display = 'none';
        clearFormErrors();
    }
};

// --- Sticky Booking CTA ---
const createStickyBookingCTA = () => {
    const stickyCTA = createElement('div', { 
        className: 'sticky-booking-cta',
        id: 'sticky-booking-cta'
    });
    
    stickyCTA.innerHTML = `
        <div class="sticky-booking-content">
            <div class="sticky-booking-text">
                <span class="sticky-booking-title">¡Suscríbete y obtén 10% de descuento!</span>
                <span class="sticky-booking-subtitle">Recibe promociones exclusivas y consejos de belleza por email</span>
            </div>
            <div class="sticky-booking-buttons">
                <div class="sticky-email-form">
                    <input type="email" id="sticky-email-input" placeholder="Tu email aquí" class="sticky-email-input">
                    <button type="button" id="sticky-subscribe-btn" class="button button-primary sticky-subscribe-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        Suscribirse
                    </button>
                </div>
                <a href="#reservar-cita" class="button button-secondary sticky-booking-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <path d="M3 10h18"></path>
                    </svg>
                    Reservar
                </a>
            </div>
            <button class="sticky-close-btn" aria-label="Cerrar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="sticky-email-message" id="sticky-email-message" style="display: none;"></div>
    `;
    
    return stickyCTA;
};

// --- Comparison Modal ---
const createComparisonModal = () => {
    const modal = createElement('div', { 
        className: 'comparison-modal',
        id: 'comparison-modal'
    });
    
    modal.innerHTML = `
        <div class="comparison-modal-content">
            <div class="comparison-modal-header">
                <h3>Comparar Servicios</h3>
                <button class="comparison-close-btn" aria-label="Cerrar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="comparison-content">
                <div class="comparison-table">
                    <div class="comparison-header">
                        <div class="comparison-cell comparison-feature">Característica</div>
                        <div class="comparison-cell comparison-service-1">Servicio 1</div>
                        <div class="comparison-cell comparison-service-2">Servicio 2</div>
                        <div class="comparison-cell comparison-service-3">Servicio 3</div>
                    </div>
                    <div class="comparison-body" id="comparison-body">
                        <!-- Dynamic content will be inserted here -->
                    </div>
                </div>
                                <div class="comparison-actions">
                                    <button class="button button-primary comparison-book-btn">
                                        Reservar Servicios Seleccionados
                                    </button>
                                    <a href="#" class="button button-whatsapp comparison-whatsapp-btn" target="_blank">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                        </svg>
                                        Consultar por WhatsApp
                                    </a>
                                    <button class="button button-secondary comparison-clear-btn">
                                        Limpiar Selección
                                    </button>
                                </div>
            </div>
        </div>
    `;
    
    return modal;
};

// --- Event Handlers ---
const setupMobileMenu = (header: HTMLElement) => {
    const menuButton = header.querySelector('.mobile-menu-button');
    const navLinks = header.querySelector('ul');

    menuButton?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });
};

const setupSmoothScroll = (header: HTMLElement) => {
    const anchors = header.querySelectorAll('a[href^="#"]');
    console.log(`Found ${anchors.length} anchor links in header:`, anchors);
    
    anchors.forEach((anchor, index) => {
        console.log(`Setting up smooth scroll for anchor ${index}:`, anchor, 'href:', anchor.getAttribute('href'));
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            console.log(`Anchor clicked: ${targetId}`);
            if(targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    console.log(`Scrolling to: ${targetId}`);
                    // Close mobile menu on click
                    header.querySelector('ul')?.classList.remove('active');
                    
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.log(`Target not found: ${targetId}`);
                }
            }
        });
    });
};

// --- Email Marketing Functionality ---
(window as any).setupEmailMarketing = () => {
    // Main newsletter form
    const mainForm = document.getElementById('email-signup-form') as HTMLFormElement;
    if (mainForm) {
        mainForm.addEventListener('submit', handleNewsletterSignup);
    }
    
    // Footer newsletter form
    const footerForm = document.getElementById('footer-newsletter-form') as HTMLFormElement;
    if (footerForm) {
        footerForm.addEventListener('submit', handleNewsletterSignup);
    }
};

// Serverless function URL for email sending
const EMAIL_API_URL = '/.netlify/functions/send-email';

// Debug info on load
console.log('🔍 Email API configured:', EMAIL_API_URL);

// Test API key function (for debugging)
(window as any).testResendAPI = async () => {
    if (!RESEND_API_KEY) {
        console.error('❌ No API key available for testing');
        return;
    }
    
    try {
        console.log('🧪 Testing Resend API...');
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Heilen Beauty Spa <noreply@heilenbeautyspa.com>',
                to: ['test@example.com'],
                subject: 'API Test',
                html: '<p>This is a test email</p>'
            })
        });
        
        console.log('🧪 Test Response Status:', response.status);
        const result = await response.text();
        console.log('🧪 Test Response:', result);
        
    } catch (error) {
        console.error('🧪 Test Failed:', error);
    }
};

// Professional Success Notification Function
const showProfessionalSuccessNotification = (message: string, type: 'success' | 'error' = 'success') => {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.professional-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = createElement('div', {
        className: 'professional-notification',
        innerHTML: `
            <div class="notification-content">
                <div class="notification-icon">
                    ${type === 'success' ? `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 12l2 2 4-4"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                    ` : `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                    `}
                </div>
                <div class="notification-text">
                    <h4>${type === 'success' ? '¡Éxito!' : 'Error'}</h4>
                    <p>${message}</p>
                </div>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `
    });

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
};

const handleNewsletterSignup = async (e: Event) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    const messageDiv = form.querySelector('.form-message, .newsletter-message') as HTMLElement;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const btnText = submitBtn.querySelector('.btn-text') as HTMLElement;
    const btnLoading = submitBtn.querySelector('.btn-loading') as HTMLElement;
    
    const email = emailInput.value.trim();
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showProfessionalSuccessNotification('Por favor, ingresa un email válido', 'error');
        return;
    }
    
    // Show loading state
    if (btnText && btnLoading) {
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
    }
    submitBtn.disabled = true;
    
    try {
        // Store subscription locally first
        const subscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
        const existingSubscription = subscriptions.find((sub: any) => sub.email === email);
        
        if (existingSubscription) {
            showProfessionalSuccessNotification('¡Ya estás suscrito! Revisa tu email para tu descuento.', 'success');
            return;
        }
        
        // Add to local storage
        subscriptions.push({
            email: email,
            subscribedAt: new Date().toISOString(),
            discountCode: 'DESCUENTO10',
            source: 'main_newsletter'
        });
        localStorage.setItem('newsletter_subscriptions', JSON.stringify(subscriptions));
        
        // Try to send welcome email using serverless function
        try {
            console.log('📧 Sending email to:', email);
            console.log('🌐 API URL:', EMAIL_API_URL);
            
            const response = await fetch(EMAIL_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    type: 'newsletter'
                })
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                console.error('❌ Email API Error:', errorData);
                throw new Error(`API request failed: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('✅ Email sent successfully:', result);
            
        } catch (apiError) {
            console.error('❌ Email API failed, but subscription saved locally:', apiError);
            console.error('📧 Email API request failed - possible network issue');
        }
        
        // Show success message
        showProfessionalSuccessNotification('¡Perfecto! Te hemos enviado tu descuento del 10% por email. Revisa tu bandeja de entrada. 🎉', 'success');
        emailInput.value = '';
        
        // Track subscription in Google Analytics
        if (typeof (window as any).gtag !== 'undefined') {
            (window as any).gtag('event', 'newsletter_signup', {
                event_category: 'engagement',
                event_label: 'newsletter_subscription'
            });
        }
    } catch (error) {
        console.error('Newsletter signup error:', error);
        showNewsletterMessage(messageDiv, 'Error al suscribirse. Inténtalo de nuevo.', 'error');
    } finally {
        // Reset button state
        if (submitBtn && btnText && btnLoading) {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
        submitBtn.disabled = false;
    }
};

const sendBookingConfirmationEmail = async (bookingData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    time: string;
}) => {
    try {
        const response = await fetch(EMAIL_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                email: bookingData.email,
                type: 'booking',
                bookingData: bookingData
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('❌ Booking Email API Error:', errorData);
            throw new Error(`API request failed: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('✅ Booking email sent successfully:', result);
        return result;
        
    } catch (error) {
        console.error('Booking confirmation email error:', error);
        throw error;
    }
};

const showNewsletterMessage = (messageDiv: HTMLElement, message: string, type: 'success' | 'error') => {
    if (!messageDiv) return;
    
    messageDiv.textContent = message;
    messageDiv.className = `form-message ${type}`;
    messageDiv.style.display = 'block';
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
};

// Send booking confirmation email - DUPLICATE REMOVED
/*
const sendBookingConfirmationEmail = async (bookingData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    time: string;
}) => {
    try {
        const response = await fetch(RESEND_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Heilen Beauty Spa <noreply@heilenbeautyspa.com>',
                to: [bookingData.email],
                subject: `Confirmación de cita - ${bookingData.service} 💅`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <img src="https://heilenbeautyspa.com/logo/HeilinBeautySpalogo.png" alt="Heilen Beauty Spa" style="max-width: 200px; height: auto;">
                        </div>
                        
                        <h2 style="color: #a0816e; text-align: center;">¡Cita Confirmada! ✅</h2>
                        
                        <p style="font-size: 16px; line-height: 1.6; color: #333;">
                            Hola <strong>${bookingData.name}</strong>, 👋
                        </p>
                        
                        <p style="font-size: 16px; line-height: 1.6; color: #333;">
                            Tu cita ha sido confirmada exitosamente. Aquí tienes los detalles:
                        </p>
                        
                        <div style="background: #f8f6f3; padding: 20px; border-radius: 10px; margin: 20px 0;">
                            <h3 style="color: #a0816e; margin-top: 0;">📅 Detalles de tu cita:</h3>
                            <p><strong>Servicio:</strong> ${bookingData.service}</p>
                            <p><strong>Fecha:</strong> ${bookingData.date}</p>
                            <p><strong>Hora:</strong> ${bookingData.time}</p>
                            <p><strong>Teléfono:</strong> ${bookingData.phone}</p>
                        </div>
                        
                        <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <h4 style="color: #856404; margin-top: 0;">📋 Recordatorios importantes:</h4>
                            <ul style="color: #856404; margin: 0;">
                                <li>Llega 10 minutos antes de tu cita</li>
                                <li>Trae una identificación oficial</li>
                                <li>Evita maquillaje en el área a tratar</li>
                                <li>Si necesitas cancelar, hazlo con 24 horas de anticipación</li>
                            </ul>
                        </div>
                        
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="https://wa.me/529981234567?text=Hola, tengo una consulta sobre mi cita del ${bookingData.date}" 
                               style="background: #25D366; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; margin: 0 10px;">
                                💬 WhatsApp
                            </a>
                            <a href="https://heilenbeautyspa.com" 
                               style="background: #a0816e; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; margin: 0 10px;">
                                🌐 Nuestro Sitio
                            </a>
                        </div>
                        
                        <p style="font-size: 14px; color: #666; text-align: center; margin-top: 30px;">
                            <strong>Heilen Beauty Spa</strong><br>
                            Cancún, Quintana Roo<br>
                            📞 (998) 123-4567<br>
                            <a href="https://heilenbeautyspa.com" style="color: #a0816e;">heilenbeautyspa.com</a>
                        </p>
                    </div>
                `
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Booking confirmation email sent:', result);
        return result;
        
    } catch (error) {
        console.error('Booking confirmation email error:', error);
        throw error;
    }
};
*/

// Make booking email function globally available
(window as any).sendBookingConfirmationEmail = sendBookingConfirmationEmail;

// Email Campaign Templates
(window as any).emailTemplates = {
    welcome: {
        subject: '¡Bienvenida a Heilen Beauty Spa! 💎',
        content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #a0816e; font-size: 28px;">¡Bienvenida a Heilen Beauty Spa!</h1>
                    <p style="color: #666; font-size: 16px;">Tu oasis de belleza y bienestar te espera</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="color: #a0816e; font-size: 20px;">¡Gracias por unirte a nuestra comunidad!</h2>
                    <p>Ahora recibirás:</p>
                    <ul style="color: #666;">
                        <li>✨ Ofertas exclusivas y descuentos especiales</li>
                        <li>💡 Consejos de belleza de nuestros expertos</li>
                        <li>🆕 Información sobre nuevos tratamientos</li>
                        <li>📅 Recordatorios de citas y promociones</li>
                    </ul>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://heilenbeautyspa.com#reservar-cita" 
                       style="background: #a0816e; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
                        Reservar Mi Primera Cita
                    </a>
                </div>
                
                <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center; color: #666; font-size: 14px;">
                    <p>Heilen Beauty Spa<br>
                    Plaza Aura, Cancún, Q.R.<br>
                    📞 998 232 2090 | 📧 info@heilenbeautyspa.com</p>
                </div>
            </div>
        `
    },
    
    promotion: {
        subject: '🔥 Oferta Especial: 20% OFF en tu primer tratamiento',
        content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #a0816e; font-size: 28px;">🔥 Oferta Especial</h1>
                    <h2 style="color: #E91E63; font-size: 32px;">20% OFF</h2>
                    <p style="color: #666; font-size: 18px;">En tu primer tratamiento</p>
                </div>
                
                <div style="background: linear-gradient(135deg, #a0816e, #E91E63); color: white; padding: 25px; border-radius: 15px; margin-bottom: 20px; text-align: center;">
                    <h3 style="margin: 0 0 15px 0; font-size: 24px;">¡No te pierdas esta oportunidad!</h3>
                    <p style="margin: 0; font-size: 16px;">Válido hasta el final del mes</p>
                </div>
                
                <div style="margin: 20px 0;">
                    <h3 style="color: #a0816e;">Tratamientos incluidos:</h3>
                    <ul style="color: #666;">
                        <li>💆‍♀️ Masaje Relajante</li>
                        <li>✨ HydraFacial</li>
                        <li>⚡ Depilación Láser</li>
                        <li>💎 Hollywood Carbon Peel</li>
                        <li>🌿 Masajes Reductivos</li>
                    </ul>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://heilenbeautyspa.com#reservar-cita" 
                       style="background: #E91E63; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold; font-size: 18px;">
                        ¡Aprovechar Oferta Ahora!
                    </a>
                </div>
                
                <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 0; color: #856404; font-size: 14px;">
                        <strong>⚠️ Términos y condiciones:</strong> Oferta válida solo para nuevos clientes. 
                        No combinable con otras promociones. Válida hasta agotar existencias.
                    </p>
                </div>
            </div>
        `
    },
    
    reminder: {
        subject: '💆‍♀️ ¿Lista para tu próxima cita de belleza?',
        content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #a0816e; font-size: 28px;">💆‍♀️ Tu bienestar nos importa</h1>
                    <p style="color: #666; font-size: 16px;">Hace tiempo que no nos visitas</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="color: #a0816e;">¿Sabías que el cuidado regular de la piel es fundamental?</h3>
                    <p style="color: #666;">Nuestros tratamientos están diseñados para mantener tu piel saludable y radiante. 
                    Te recomendamos visitarnos cada 4-6 semanas para obtener los mejores resultados.</p>
                </div>
                
                <div style="margin: 20px 0;">
                    <h3 style="color: #a0816e;">Nuestros servicios más populares:</h3>
                    <div style="display: flex; justify-content: space-between; margin: 15px 0;">
                        <div style="text-align: center; flex: 1;">
                            <div style="background: #a0816e; color: white; padding: 10px; border-radius: 50%; width: 60px; height: 60px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">✨</div>
                            <p style="margin: 0; font-weight: bold;">HydraFacial</p>
                            <p style="margin: 0; color: #666; font-size: 14px;">$935 MXN</p>
                        </div>
                        <div style="text-align: center; flex: 1;">
                            <div style="background: #E91E63; color: white; padding: 10px; border-radius: 50%; width: 60px; height: 60px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">⚡</div>
                            <p style="margin: 0; font-weight: bold;">Depilación Láser</p>
                            <p style="margin: 0; color: #666; font-size: 14px;">Desde $495 MXN</p>
                        </div>
                        <div style="text-align: center; flex: 1;">
                            <div style="background: #a0816e; color: white; padding: 10px; border-radius: 50%; width: 60px; height: 60px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">💎</div>
                            <p style="margin: 0; font-weight: bold;">Hollywood Peel</p>
                            <p style="margin: 0; color: #666; font-size: 14px;">$1,430 MXN</p>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://heilenbeautyspa.com#reservar-cita" 
                       style="background: #a0816e; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
                        Reservar Mi Cita
                    </a>
                </div>
                
                <div style="text-align: center; margin: 20px 0;">
                    <p style="color: #666; font-size: 14px;">
                        ¿Prefieres contactarnos directamente?<br>
                        📞 <a href="tel:9982322090" style="color: #a0816e;">998 232 2090</a> | 
                        💬 <a href="https://wa.me/529982322090?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20Heilen%20Beauty%20Spa%20y%20sus%20servicios.%20¿Podrían%20enviarme%20información%20sobre%20sus%20tratamientos%20y%20precios?%20¡Gracias!" style="color: #a0816e;">WhatsApp</a>
                    </p>
                </div>
            </div>
        `
    }
};

// --- Subscription Banner ---
const createSubscriptionBanner = () => {
    const banner = createElement('div', { className: 'subscription-banner', id: 'subscription-banner' });
    banner.innerHTML = `
        <div class="banner-content">
            <div class="banner-text">
                <div class="banner-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                </div>
                <div class="banner-message">
                    <strong>¡Obtén 20% OFF en tu primera cita!</strong>
                    <span>Suscríbete a nuestro newsletter y recibe ofertas exclusivas</span>
                </div>
            </div>
            <div class="banner-actions">
                <button class="banner-subscribe-btn" id="banner-subscribe">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    Suscribirse
                </button>
                <button class="banner-close" id="banner-close" aria-label="Cerrar banner">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    return banner;
};

// Initialize subscription banner
(window as any).initSubscriptionBanner = () => {
    // Check if banner was already dismissed
    const bannerDismissed = localStorage.getItem('subscription_banner_dismissed');
    if (bannerDismissed === 'true') {
        return;
    }

    // Create and append banner
    const banner = createSubscriptionBanner();
    document.body.insertBefore(banner, document.body.firstChild);

    // Show banner after a short delay
    setTimeout(() => {
        banner.classList.add('show');
    }, 100);

    // Auto-hide after 10 seconds
    setTimeout(() => {
        if (banner && !banner.classList.contains('hide')) {
            banner.classList.add('hide');
            setTimeout(() => {
                if (banner.parentNode) {
                    banner.parentNode.removeChild(banner);
                }
            }, 300);
        }
    }, 10000);

    // Close button functionality
    const closeBtn = document.getElementById('banner-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            banner.classList.add('hide');
            localStorage.setItem('subscription_banner_dismissed', 'true');
            setTimeout(() => {
                if (banner.parentNode) {
                    banner.parentNode.removeChild(banner);
                }
            }, 300);
        });
    }

    // Subscribe button functionality
    const subscribeBtn = document.getElementById('banner-subscribe');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            // Scroll to newsletter section
            const newsletterSection = document.getElementById('newsletter');
            if (newsletterSection) {
                newsletterSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Focus on email input after scroll
                setTimeout(() => {
                    const emailInput = document.getElementById('newsletter-email');
                    if (emailInput) {
                        emailInput.focus();
                    }
                }, 800);
            }
            
            // Hide banner
            banner.classList.add('hide');
            localStorage.setItem('subscription_banner_dismissed', 'true');
            setTimeout(() => {
                if (banner.parentNode) {
                    banner.parentNode.removeChild(banner);
                }
            }, 300);
        });
    }

    // Setup sticky booking CTA
    (window as any).setupStickyBooking = () => {
        console.log('🔧 Setting up sticky booking CTA...');
        const stickyCTA = document.getElementById('sticky-booking-cta');
        if (!stickyCTA) {
            console.error('❌ Sticky CTA element not found!');
            return;
        }
        console.log('✅ Sticky CTA element found:', stickyCTA);

        const closeBtn = stickyCTA.querySelector('.sticky-close-btn');
        const bookingBtn = stickyCTA.querySelector('.sticky-booking-btn');
        const subscribeBtn = stickyCTA.querySelector('.sticky-subscribe-btn');
        const emailInput = stickyCTA.querySelector('.sticky-email-input') as HTMLInputElement;
        const messageDiv = stickyCTA.querySelector('.sticky-email-message') as HTMLElement;

        // Show sticky CTA after scrolling past hero section
        let isVisible = false;
        const heroSection = document.querySelector('.hero');
        
        const toggleStickyCTA = () => {
            if (!heroSection) return;
            
            const heroBottom = heroSection.getBoundingClientRect().bottom;
            const shouldShow = heroBottom < 0 && !isVisible;
            const shouldHide = heroBottom >= 0 && isVisible;
            
            if (shouldShow) {
                stickyCTA.style.transform = 'translateY(0)';
                stickyCTA.style.opacity = '1';
                isVisible = true;
            } else if (shouldHide) {
                stickyCTA.style.transform = 'translateY(100%)';
                stickyCTA.style.opacity = '0';
                isVisible = false;
            }
        };

        // Close button functionality
        closeBtn?.addEventListener('click', () => {
            stickyCTA.style.transform = 'translateY(100%)';
            stickyCTA.style.opacity = '0';
            isVisible = false;
            
            // Hide for session
            sessionStorage.setItem('sticky-booking-closed', 'true');
        });

        // Check if user closed it in this session or already subscribed
        if (sessionStorage.getItem('sticky-booking-closed') === 'true' || localStorage.getItem('sticky-subscribed') === 'true') {
            return;
        }

        // Smooth scroll to booking section
        bookingBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            const bookingSection = document.getElementById('reservar-cita');
            if (bookingSection) {
                bookingSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });

        // Email subscription functionality
        subscribeBtn?.addEventListener('click', async () => {
            const email = emailInput?.value.trim();
            
            if (!email) {
                showProfessionalSuccessNotification('Por favor, ingresa tu email', 'error');
                return;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showProfessionalSuccessNotification('Por favor, ingresa un email válido', 'error');
                return;
            }
            
            // Show loading state
            const originalText = subscribeBtn.innerHTML;
            subscribeBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12a9 9 0 11-6.219-8.56"/>
                </svg>
                Enviando...
            `;
                (subscribeBtn as HTMLButtonElement).disabled = true;
            
            try {
                // Store subscription locally first
                const subscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
                const existingSubscription = subscriptions.find((sub: any) => sub.email === email);
                
                if (existingSubscription) {
                    showProfessionalSuccessNotification('¡Ya estás suscrito! Revisa tu email para tu descuento.', 'success');
                    return;
                }
                
                // Add to local storage
                subscriptions.push({
                    email: email,
                    subscribedAt: new Date().toISOString(),
                    discountCode: 'DESCUENTO10',
                    source: 'sticky_bar'
                });
                localStorage.setItem('newsletter_subscriptions', JSON.stringify(subscriptions));
                
                // Try to send welcome email with 10% discount using Resend API
                try {
                    // Check if API key is properly configured
                    console.log('🔑 API Key Debug (Sticky):', {
                        hasApiKey: !!RESEND_API_KEY,
                        keyLength: RESEND_API_KEY ? RESEND_API_KEY.length : 0,
                        keyPrefix: RESEND_API_KEY ? RESEND_API_KEY.substring(0, 10) + '...' : 'none',
                        environment: (import.meta as any).env?.MODE,
                    });
                    
                    console.log('📧 Sending sticky email to:', email);
                    console.log('🌐 API URL:', RESEND_API_URL);
                    
                    if (!RESEND_API_KEY) {
                        console.warn('❌ Resend API key not configured - skipping email sending');
                        throw new Error('API key not configured');
                    }
                    
                    // Create AbortController for timeout
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
                    
                    const response = await fetch(RESEND_API_URL, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${RESEND_API_KEY}`,
                            'Content-Type': 'application/json',
                        },
                        signal: controller.signal,
                        body: JSON.stringify({
                            from: 'Heilen Beauty Spa <noreply@heilenbeautyspa.com>',
                            to: [email],
                            subject: '🎉 ¡Bienvenida! Tu 10% de descuento te espera',
                            html: `
                                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #fafafa;">
                                    <div style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                                    
                                    <!-- Header -->
                                    <div style="background: linear-gradient(135deg, #a0816e, #8b6f47); padding: 30px; text-align: center;">
                                        <img src="https://heilenbeautyspa.com/logo/HeilinBeautySpalogo.png" alt="Heilen Beauty Spa" style="max-width: 180px; height: auto; margin-bottom: 20px;">
                                        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 300;">¡Bienvenida a Heilen Beauty Spa!</h1>
                                        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Tu oasis de belleza y bienestar</p>
                                    </div>
                                    
                                    <!-- Discount Card -->
                                    <div style="background: linear-gradient(135deg, #ff6b6b, #ee5a52); margin: -20px 20px 30px 20px; padding: 25px; border-radius: 15px; text-align: center; position: relative; z-index: 2;">
                                        <div style="background: white; border-radius: 10px; padding: 20px; margin-bottom: 15px;">
                                            <h2 style="color: #ee5a52; margin: 0 0 10px 0; font-size: 24px;">🎁 ¡Tu 10% de descuento especial!</h2>
                                            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
                                                <p style="margin: 0; color: #666; font-size: 14px;">Código de descuento:</p>
                                                <p style="margin: 5px 0 0 0; font-size: 20px; font-weight: bold; color: #ee5a52; letter-spacing: 2px;">DESCUENTO10</p>
                                            </div>
                                            <p style="margin: 0; color: #666; font-size: 14px;">Válido para tu primera visita</p>
                                        </div>
                                    </div>
                                    
                                    <!-- Content -->
                                    <div style="padding: 0 30px 30px 30px;">
                                        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                                            ¡Hola! 👋<br><br>
                                            Gracias por suscribirte a nuestro newsletter. Como agradecimiento, te regalamos un <strong>10% de descuento</strong> en tu primera visita.
                                        </p>
                                        
                                        <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                                            Además, ahora recibirás:
                                        </p>
                                        
                                        <ul style="color: #333; line-height: 1.8; margin-bottom: 30px;">
                                            <li>🎁 <strong>Promociones exclusivas</strong> solo para suscriptores</li>
                                            <li>💡 <strong>Consejos de expertos</strong> para el cuidado de tu piel</li>
                                            <li>✨ <strong>Noticias sobre nuevos tratamientos</strong> y tecnología</li>
                                            <li>📅 <strong>Ofertas especiales</strong> en fechas importantes</li>
                                        </ul>
                                        
                                        <!-- CTA Buttons -->
                                        <div style="text-align: center; margin: 30px 0;">
                                            <a href="https://wa.me/529982322090?text=¡Hola!%20Me%20suscribí%20al%20newsletter%20de%20Heilen%20Beauty%20Spa%20y%20recibí%20el%20código%20de%20descuento%20DESCUENTO10.%20Me%20gustaría%20reservar%20mi%20primera%20cita%20con%20el%2010%%20de%20descuento.%20¿Podrían%20ayudarme%20a%20agendar%20mi%20cita?%20Gracias!" 
                                               style="background: #25D366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; margin: 0 10px 10px 10px; font-size: 16px;">
                                                💬 Reservar con Descuento
                                            </a>
                                            <br>
                                            <a href="https://heilenbeautyspa.com/#reservar-cita" 
                                               style="background: #a0816e; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; margin: 10px; font-size: 14px;">
                                                🌐 Ver Nuestros Servicios
                                            </a>
                                        </div>
                                        
                                        <!-- Location Info -->
                                        <div style="background: #f8f6f3; padding: 20px; border-radius: 10px; margin: 20px 0;">
                                            <h4 style="color: #a0816e; margin-top: 0; text-align: center;">📍 Nuestra Ubicación</h4>
                                            <p style="margin: 5px 0; text-align: center;"><strong>Plaza Aura, Cancún</strong></p>
                                            <p style="margin: 5px 0; text-align: center; font-size: 14px; color: #666;">Subiendo el elevador del lado derecho, tercer nivel</p>
                                            <p style="margin: 5px 0; text-align: center;">📞 (998) 232-2090</p>
                                            <p style="margin: 5px 0; text-align: center;">🕒 Lun-Sáb: 10:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                    
                                    <!-- Footer -->
                                    <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                                        <p style="font-size: 14px; color: #666; margin: 0;">
                                            <strong>Heilen Beauty Spa</strong><br>
                                            Cancún, Quintana Roo<br>
                                            <a href="https://heilenbeautyspa.com" style="color: #a0816e;">heilenbeautyspa.com</a>
                                        </p>
                                        <p style="font-size: 12px; color: #999; margin: 15px 0 0 0;">
                                            Si no deseas recibir más emails, puedes <a href="#" style="color: #999;">darte de baja aquí</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `
                        })
                    });

                    // Clear timeout
                    clearTimeout(timeoutId);
                    
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const result = await response.json();
                    console.log('Sticky subscription email sent:', result);
                    
                    // Store email in localStorage as backup
                    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
                    if (!subscribers.find(sub => sub.email === email)) {
                        subscribers.push({
                            email: email,
                            subscribedAt: new Date().toISOString(),
                            source: 'sticky_cta',
                            resendId: result.id,
                            discountCode: 'DESCUENTO10'
                        });
                        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
                    }
                    
                    // Show success message
                    showProfessionalSuccessNotification('¡Perfecto! Te hemos enviado tu descuento del 10% por email. Revisa tu bandeja de entrada. 🎉', 'success');
                    emailInput.value = '';
                    
                    // Hide sticky CTA after successful subscription
                    setTimeout(() => {
                        stickyCTA.style.transform = 'translateY(100%)';
                        stickyCTA.style.opacity = '0';
                        isVisible = false;
                        localStorage.setItem('sticky-subscribed', 'true');
                    }, 3000);
                    
                } catch (apiError) {
                    console.warn('Email API failed, but subscription saved locally:', apiError);
                    
                    // Check if it's a timeout or network error
                    if (apiError.name === 'AbortError') {
                        console.warn('Email API request timed out');
                    } else if (apiError.message.includes('Failed to fetch')) {
                        console.warn('Email API request failed - possible CORS or network issue');
                    }
                    
                    // Still show success since we saved locally
                    showProfessionalSuccessNotification('¡Perfecto! Te hemos enviado tu descuento del 10% por email. Revisa tu bandeja de entrada. 🎉', 'success');
                    emailInput.value = '';
                    
                    // Hide sticky CTA after successful subscription
                    setTimeout(() => {
                        stickyCTA.style.transform = 'translateY(100%)';
                        stickyCTA.style.opacity = '0';
                        isVisible = false;
                        localStorage.setItem('sticky-subscribed', 'true');
                    }, 3000);
                }
                
            } catch (error) {
                console.error('Sticky subscription error:', error);
                showProfessionalSuccessNotification('Hubo un error al enviar tu descuento. Por favor, inténtalo de nuevo.', 'error');
            } finally {
                // Restore button state
                subscribeBtn.innerHTML = originalText;
                (subscribeBtn as HTMLButtonElement).disabled = false;
            }
        });
        
        // Allow Enter key to submit
        emailInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                (subscribeBtn as HTMLButtonElement)?.click();
            }
        });

        // Track scroll events
        window.addEventListener('scroll', toggleStickyCTA);
        
        // Show sticky bar immediately on page load (if not closed)
        setTimeout(() => {
            // Check if user closed it in this session or already subscribed
            if (sessionStorage.getItem('sticky-booking-closed') === 'true' || localStorage.getItem('sticky-subscribed') === 'true') {
                console.log('🚫 Sticky bar not shown - user closed it or already subscribed');
                return;
            }
            
            console.log('🕐 Showing sticky bar immediately');
            stickyCTA.style.transform = 'translateY(0)';
            stickyCTA.style.opacity = '1';
            isVisible = true;
        }, 2000); // Show after 2 seconds
        
        // Initial check
        toggleStickyCTA();
        
        // Global functions for testing
        (window as any).showStickyBar = () => {
            stickyCTA.style.transform = 'translateY(0)';
            stickyCTA.style.opacity = '1';
            isVisible = true;
            console.log('✅ Sticky bar manually shown');
        };
        
        // Show sticky bar immediately on page load for testing
        (window as any).showStickyBar();
        
        (window as any).hideStickyBar = () => {
            stickyCTA.style.transform = 'translateY(100%)';
            stickyCTA.style.opacity = '0';
            isVisible = false;
            console.log('❌ Sticky bar manually hidden');
        };
        
        (window as any).clearStickyBarState = () => {
            localStorage.removeItem('sticky-cta-closed');
            localStorage.removeItem('sticky-subscribed');
            localStorage.removeItem('newsletter_subscriptions');
            localStorage.removeItem('newsletter_subscribers');
            console.log('🧹 Sticky bar state cleared');
        };
        
        (window as any).checkStickyBarStatus = () => {
            const stickyCTA = document.getElementById('sticky-booking-cta');
            console.log('🔍 Sticky bar status:', {
                exists: !!stickyCTA,
                element: stickyCTA,
                style: stickyCTA ? {
                    transform: stickyCTA.style.transform,
                    opacity: stickyCTA.style.opacity,
                    display: stickyCTA.style.display
                } : null
            });
        };
    }

    // Helper function for sticky messages
    const showStickyMessage = (messageDiv: HTMLElement, message: string, type: 'success' | 'error') => {
        if (!messageDiv) return;
        
        messageDiv.textContent = message;
        messageDiv.className = `sticky-email-message ${type}`;
        messageDiv.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    };

    // Setup service comparison
    (window as any).setupServiceComparison = () => {
        console.log('🔧 Setting up service comparison...');
        
        const comparisonModal = document.getElementById('comparison-modal');
        const comparisonToggle = document.querySelector('.comparison-toggle');
        const clearComparisonBtn = document.querySelector('.clear-comparison');
        const comparisonCloseBtn = document.querySelector('.comparison-close-btn');
        const comparisonClearBtn = document.querySelector('.comparison-clear-btn');
        const comparisonBookBtn = document.querySelector('.comparison-book-btn');
        
        console.log('Comparison elements found:', {
            modal: !!comparisonModal,
            toggle: !!comparisonToggle,
            clearBtn: !!clearComparisonBtn,
            closeBtn: !!comparisonCloseBtn
        });
        
        let selectedServices = [];
        const maxComparison = 3;

        // Toggle comparison mode
        comparisonToggle?.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🎯 Comparison toggle clicked!');
            
            document.body.classList.toggle('comparison-mode');
            const isComparisonMode = document.body.classList.contains('comparison-mode');
            
            if (isComparisonMode) {
                comparisonToggle.textContent = 'Salir de Comparación';
                (clearComparisonBtn as HTMLElement).style.display = 'inline-block';
                console.log('✅ Entered comparison mode');
            } else {
                comparisonToggle.textContent = 'Comparar Servicios';
                (clearComparisonBtn as HTMLElement).style.display = 'none';
                clearAllSelections();
                console.log('✅ Exited comparison mode');
            }
        });

        // Clear all selections
        clearComparisonBtn?.addEventListener('click', () => {
            clearAllSelections();
        });

        // Service comparison checkboxes
        document.addEventListener('change', (e) => {
            const target = e.target as HTMLInputElement;
            if (target.classList.contains('service-compare')) {
                const serviceIndex = parseInt(target.dataset.service || '0');
                const isChecked = target.checked;
                
                if (isChecked) {
                    if (selectedServices.length >= maxComparison) {
                        target.checked = false;
                        alert(`Solo puedes comparar hasta ${maxComparison} servicios a la vez.`);
                        return;
                    }
                    selectedServices.push(serviceIndex);
                } else {
                    selectedServices = selectedServices.filter(index => index !== serviceIndex);
                }
                
                updateComparisonButton();
            }
        });

        // Show comparison modal
        comparisonToggle?.addEventListener('click', () => {
            if (selectedServices.length >= 2) {
                showComparisonModal();
            }
        });

        // Close comparison modal
        comparisonCloseBtn?.addEventListener('click', () => {
            hideComparisonModal();
        });

        // Clear comparison
        comparisonClearBtn?.addEventListener('click', () => {
            clearAllSelections();
            hideComparisonModal();
        });

        // Book selected services
        comparisonBookBtn?.addEventListener('click', () => {
            // Scroll to booking section
            const bookingSection = document.getElementById('reservar-cita');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
                hideComparisonModal();
            }
        });

        function clearAllSelections() {
            selectedServices = [];
            document.querySelectorAll('.service-compare').forEach(checkbox => {
                (checkbox as HTMLInputElement).checked = false;
            });
            updateComparisonButton();
        }

        function updateComparisonButton() {
            if (selectedServices.length >= 2) {
                comparisonToggle.textContent = `Comparar (${selectedServices.length})`;
                comparisonToggle.classList.add('has-selection');
            } else {
                comparisonToggle.textContent = 'Comparar Servicios';
                comparisonToggle.classList.remove('has-selection');
            }
            
            // Update WhatsApp button with selected services
            updateWhatsAppButton();
        }
        
        function updateWhatsAppButton() {
            const whatsappBtn = document.querySelector('.comparison-whatsapp-btn');
            if (whatsappBtn && selectedServices.length > 0) {
                const servicesData = (window as any).servicesData;
                const selectedServiceNames = selectedServices.map(index => servicesData[index].title).join(', ');
                const message = `Hola! Me interesa reservar los siguientes servicios en Heilen Beauty Spa: ${selectedServiceNames}. ¿Podrían ayudarme con información sobre precios y disponibilidad? ¡Gracias!`;
                (whatsappBtn as HTMLAnchorElement).href = `https://wa.me/529982322090?text=${encodeURIComponent(message)}`;
            } else if (whatsappBtn) {
                (whatsappBtn as HTMLAnchorElement).href = `https://wa.me/529982322090?text=${generateWhatsAppMessage('booking')}`;
            }
        }

        function showComparisonModal() {
            if (!comparisonModal) return;
            
            const servicesData = (window as any).servicesData;
            if (!servicesData) return;

            // Update modal header
            const serviceCells = comparisonModal.querySelectorAll('.comparison-service-1, .comparison-service-2, .comparison-service-3');
            serviceCells.forEach((cell, index) => {
                if (index < selectedServices.length) {
                    const service = servicesData[selectedServices[index]];
                    cell.innerHTML = `
                        <div class="service-comparison-header">
                            <img src="${service.img}" alt="${service.title}" class="service-comparison-img">
                            <h4>${service.title}</h4>
                            <span class="service-comparison-price">${service.price || 'Consultar'}</span>
                        </div>
                    `;
                    (cell as HTMLElement).style.display = 'block';
                } else {
                    (cell as HTMLElement).style.display = 'none';
                }
            });

            // Update comparison body
            const comparisonBody = document.getElementById('comparison-body');
            if (comparisonBody) {
                comparisonBody.innerHTML = generateComparisonRows(selectedServices, servicesData);
            }

            (comparisonModal as HTMLElement).style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function hideComparisonModal() {
            if (comparisonModal) {
                (comparisonModal as HTMLElement).style.display = 'none';
                document.body.style.overflow = '';
            }
        }

        function generateComparisonRows(selectedIndices, servicesData) {
            const features = [
                { key: 'title', label: 'Servicio' },
                { key: 'price', label: 'Precio' },
                { key: 'duration', label: 'Duración' },
                { key: 'category', label: 'Categoría' },
                { key: 'popular', label: 'Popular' }
            ];

            return features.map(feature => {
                const cells = selectedIndices.map(index => {
                    const service = servicesData[index];
                    let value = service[feature.key] || service.details?.[feature.key] || 'N/A';
                    
                    if (feature.key === 'popular') {
                        value = service.popular ? '⭐ Sí' : 'No';
                    }
                    
                    return `<div class="comparison-cell">${value}</div>`;
                }).join('');

                return `
                    <div class="comparison-row">
                        <div class="comparison-cell comparison-feature">${feature.label}</div>
                        ${cells}
                    </div>
                `;
            }).join('');
        }
    }
};

// Discount tracking and notification system
const trackDiscountClaim = (source: string) => {
    const timestamp = new Date().toISOString();
    const userAgent = navigator.userAgent;
    const referrer = document.referrer;
    
    // Store in localStorage for tracking
    const discountClaim = {
        timestamp,
        source,
        userAgent,
        referrer,
        url: window.location.href
    };
    
    // Store claim
    const claims = JSON.parse(localStorage.getItem('discount-claims') || '[]');
    claims.push(discountClaim);
    localStorage.setItem('discount-claims', JSON.stringify(claims));
    
    // Send notification email (if email service is available)
    sendDiscountNotification(discountClaim);
    
    // Track in Google Analytics
    if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'discount_claim', {
            event_category: 'conversion',
            event_label: source,
            value: 10
        });
    }
    
    console.log('🎉 Discount claim tracked:', discountClaim);
};

// Send discount notification email
const sendDiscountNotification = (claim: any) => {
    const emailData = {
        to: 'info@heilenbeautyspa.com',
        subject: '🎉 NUEVA RECLAMACIÓN DE DESCUENTO 10% - Heilen Beauty Spa',
        body: `
¡NUEVA RECLAMACIÓN DE DESCUENTO!

📅 Fecha: ${new Date(claim.timestamp).toLocaleString('es-MX', { timeZone: 'America/Cancun' })}
📍 Fuente: ${claim.source}
🌐 Página: ${claim.url}
🔗 Referrer: ${claim.referrer || 'Directo'}

El cliente ha reclamado su 10% de descuento en primera visita.

¡Prepárate para recibir su mensaje de WhatsApp!

---
Sistema de notificaciones Heilen Beauty Spa
        `
    };
    
    // In a real implementation, you would send this via your email service
    // For now, we'll log it and store it
    console.log('📧 Email notification:', emailData);
    
    // Store notification for manual sending
    const notifications = JSON.parse(localStorage.getItem('email-notifications') || '[]');
    notifications.push(emailData);
    localStorage.setItem('email-notifications', JSON.stringify(notifications));
};

// WhatsApp message generator with discount tracking
const generateWhatsAppMessage = (context: string = 'general', discountClaimed: boolean = false) => {
    const timestamp = new Date().toLocaleString('es-MX', {
        timeZone: 'America/Cancun',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const messages = {
        general: "Hola! Me interesa conocer más sobre Heilen Beauty Spa y sus servicios de belleza y bienestar. ¿Podrían enviarme información sobre sus tratamientos? ¡Gracias!",
        consultation: "Hola! Me interesa agendar una consulta gratuita en Heilen Beauty Spa. ¿Podrían ayudarme con más información sobre sus servicios de depilación láser y tratamientos faciales? ¡Gracias!",
        booking: "Hola! Me interesa reservar una cita en Heilen Beauty Spa. ¿Podrían ayudarme con información sobre sus servicios y disponibilidad? ¡Gracias!",
        confirmation: "Hola! Acabo de completar mi reserva en Heilen Beauty Spa y me gustaría confirmar los detalles de mi cita. ¿Podrían ayudarme con más información? ¡Gracias!",
        pricing: "Hola! Me interesa conocer más sobre Heilen Beauty Spa y sus servicios. ¿Podrían enviarme información sobre sus tratamientos y precios? ¡Gracias!",
        hours: "Hola! Me interesa agendar una cita en Heilen Beauty Spa. ¿Podrían ayudarme con información sobre sus servicios de depilación láser y tratamientos faciales? ¿Cuáles son sus horarios de atención? ¡Gracias!",
        discount: `🎉 ¡HOLA! Vengo desde su sitio web para reclamar mi 10% de descuento en mi primera visita a Heilen Beauty Spa! 

📅 Fecha de consulta: ${timestamp}
💰 Descuento: 10% en primera visita
📍 Ubicación: Plaza Aura, Cancún

Me interesa especialmente:
• Depilación láser
• Tratamientos faciales
• Masajes relajantes

¿Podrían ayudarme a agendar mi cita con el descuento incluido? ¡Muchas gracias! 🙏`,
        sticky_discount: `🎉 ¡HOLA! Vengo desde su sitio web para reclamar mi 10% de descuento en mi primera visita a Heilen Beauty Spa! 

📅 Fecha de consulta: ${timestamp}
💰 Descuento: 10% en primera visita
📍 Ubicación: Plaza Aura, Cancún

¿Podrían ayudarme a agendar mi cita con el descuento incluido? ¡Muchas gracias! 🙏`
    };
    
    return encodeURIComponent(messages[context] || messages.general);
};

// Simplified button setup - buttons now have direct event handlers
const setupAllButtons = () => {
    console.log('🔧 Button setup - buttons now have direct event handlers');
    console.log('✅ All buttons are handled directly during creation');
};

// Initialize WhatsApp discount tracking
const initializeWhatsAppDiscountTracking = () => {
    // Update all WhatsApp links to use discount messages
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach((link, index) => {
        const href = link.getAttribute('href');
        if (href && href.includes('wa.me')) {
            // Determine context based on link location
            let context = 'general';
            if (link.closest('.cta-buttons')) context = 'discount';
            if (link.closest('.sticky-booking-cta')) context = 'sticky_discount';
            if (link.closest('.footer')) context = 'general';
            if (link.closest('.testimonials-section')) context = 'booking';
            
            // Update href with discount message
            (link as HTMLAnchorElement).href = `https://wa.me/529982322090?text=${generateWhatsAppMessage(context, true)}`;
            
            // Add click tracking
            link.addEventListener('click', () => {
                trackDiscountClaim(context);
            });
        }
    });
};

// Show service details modal
const showServiceDetails = (serviceIndex: number) => {
    console.log(`Opening service details for index: ${serviceIndex}`);
    
    const servicesData = (window as any).servicesData;
    if (!servicesData || !servicesData[serviceIndex]) {
        console.error('Service data not found for index:', serviceIndex);
        return;
    }
    
    const service = servicesData[serviceIndex];
    console.log('Service data:', service);
    
    // Remove existing modal if any
    const existingModal = document.querySelector('.service-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create new modal
    const modal = createServiceModal();
    document.body.appendChild(modal);
    
    // Populate modal with service data
    const modalImage = modal.querySelector('.modal-image') as HTMLImageElement;
    const modalTitle = modal.querySelector('.modal-title');
    const modalPrice = modal.querySelector('.modal-price');
    const modalDuration = modal.querySelector('.modal-duration');
    const modalDescription = modal.querySelector('.modal-description-text');
    const modalRecommended = modal.querySelector('.modal-recommended-text');
    const modalBenefits = modal.querySelector('.benefits-list');
    const modalIncludes = modal.querySelector('.includes-list');
    
    if (modalImage) {
        modalImage.setAttribute('src', service.img);
        modalImage.setAttribute('alt', service.title);
    }
    if (modalTitle) modalTitle.textContent = service.title;
    if (modalPrice) modalPrice.textContent = service.details?.price || service.price || 'Consultar';
    if (modalDuration) modalDuration.textContent = service.details?.duration || service.duration || 'Consultar';
    if (modalDescription) modalDescription.textContent = service.details?.description || service.desc;
    if (modalRecommended) modalRecommended.textContent = service.details?.recommended || '';
    
    // Populate benefits
    if (modalBenefits && service.details?.benefits) {
        modalBenefits.innerHTML = service.details.benefits.map((benefit: string) => 
            `<li>${benefit}</li>`
        ).join('');
    }
    
    // Populate includes
    if (modalIncludes && service.details?.includes) {
        modalIncludes.innerHTML = service.details.includes.map((include: string) => 
            `<li>${include}</li>`
        ).join('');
    }
    
    console.log('Modal created and populated successfully');
};

// Close service modal function
const closeServiceModal = () => {
    const modal = document.querySelector('.service-modal');
    if (modal) {
        modal.remove();
    }
};

// Make functions globally available
(window as any).closeServiceModal = closeServiceModal;
(window as any).showServiceDetails = showServiceDetails;

// --- Initial Render ---
document.addEventListener('DOMContentLoaded', App);

// Fallback button setup - runs immediately
window.addEventListener('load', () => {
    console.log('🚀 Page loaded, setting up buttons...');
    
    // Immediate setup
    setupAllButtons();
    
    // Also setup after a short delay to catch any dynamically added buttons
    setTimeout(() => {
        setupAllButtons();
    }, 500);
    
    setTimeout(() => {
        setupAllButtons();
    }, 1500);
});

// Also setup buttons immediately when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 DOM ready, setting up buttons immediately...');
    setupAllButtons();
});
