export const seoGuideSlugs = [
  'ibiza-cruise-port',
  'ibiza-ferry-port',
  'ibiza-to-formentera-ferry',
  'ibiza-harbour-map'
] as const;

export type SeoGuideSlug = (typeof seoGuideSlugs)[number];
export const secondarySeoGuideSlugs = [
  'ibiza-port-to-dalt-vila',
  'ibiza-port-to-airport',
  'ibiza-port-parking'
] as const;
export type SecondarySeoGuideSlug = (typeof secondarySeoGuideSlugs)[number];
export const tertiarySeoGuideSlugs = [
  'things-to-do-near-ibiza-port',
  'ibiza-harbour-restaurants',
  'ibiza-port-to-talamanca-beach'
] as const;
export type TertiarySeoGuideSlug = (typeof tertiarySeoGuideSlugs)[number];
export const quaternarySeoGuideSlugs = [
  'ibiza-port-taxi',
  'ibiza-port-walking-route',
  'where-to-stay-near-ibiza-port'
] as const;
export type QuaternarySeoGuideSlug = (typeof quaternarySeoGuideSlugs)[number];
export const quinarySeoGuideSlugs = [
  'ibiza-port-to-old-town',
  'ibiza-port-luggage',
  'best-time-to-visit-ibiza-harbour'
] as const;
export type QuinarySeoGuideSlug = (typeof quinarySeoGuideSlugs)[number];
export const senarySeoGuideSlugs = [
  'ibiza-port-ferry-tickets',
  'ibiza-port-to-formentera-day-trip',
  'ibiza-harbour-sunset'
] as const;
export type SenarySeoGuideSlug = (typeof senarySeoGuideSlugs)[number];
export const septenarySeoGuideSlugs = [
  'ibiza-port-boarding-tips',
  'ibiza-harbour-night-walk',
  'ibiza-port-to-taxis-and-buses'
] as const;
export type SeptenarySeoGuideSlug = (typeof septenarySeoGuideSlugs)[number];
export const octonarySeoGuideSlugs = [
  'ibiza-port-arrival-guide',
  'ibiza-harbour-photo-spots',
  'ibiza-port-to-dalt-vila-walk-time'
] as const;
export type OctonarySeoGuideSlug = (typeof octonarySeoGuideSlugs)[number];
export const allSeoGuideSlugs = [...seoGuideSlugs, ...secondarySeoGuideSlugs, ...tertiarySeoGuideSlugs, ...quaternarySeoGuideSlugs, ...quinarySeoGuideSlugs, ...senarySeoGuideSlugs, ...septenarySeoGuideSlugs, ...octonarySeoGuideSlugs] as const;
export type AnySeoGuideSlug = (typeof allSeoGuideSlugs)[number];
export const homepageSeoGuideSlugs = [
  'ibiza-cruise-port',
  'ibiza-ferry-port',
  'ibiza-to-formentera-ferry',
  'ibiza-harbour-map',
  'ibiza-port-to-dalt-vila',
  'ibiza-port-to-airport',
  'ibiza-port-parking',
  'things-to-do-near-ibiza-port',
  'ibiza-harbour-restaurants',
  'ibiza-port-to-talamanca-beach',
  'ibiza-port-taxi',
  'ibiza-port-walking-route',
  'where-to-stay-near-ibiza-port',
  'ibiza-port-to-old-town',
  'ibiza-port-luggage',
  'best-time-to-visit-ibiza-harbour',
  'ibiza-port-ferry-tickets',
  'ibiza-port-to-formentera-day-trip',
  'ibiza-harbour-sunset',
  'ibiza-port-boarding-tips',
  'ibiza-harbour-night-walk',
  'ibiza-port-to-taxis-and-buses',
  'ibiza-port-arrival-guide',
  'ibiza-harbour-photo-spots',
  'ibiza-port-to-dalt-vila-walk-time'
] as const;
export type SupportedLocale = 'es' | 'en' | 'fr' | 'zh-Hant';

type QuickFact = {
  label: string;
  value: string;
};

type Section = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type Faq = {
  question: string;
  answer: string;
};

type PrimaryLink = {
  label: string;
  href: string;
};

export type SeoGuidePageContent = {
  title: string;
  description: string;
  intro: string;
  quickFacts: QuickFact[];
  sections: Section[];
  faqs: Faq[];
  related: AnySeoGuideSlug[];
  thematicLinks?: AnySeoGuideSlug[];
  primaryLink: PrimaryLink;
  sourceNote: string;
  lastChecked: string;
};

export type SeoGuideLocaleBundle = {
  common: {
    backHome: string;
    quickFactsTitle: string;
    faqsTitle: string;
    relatedTitle: string;
    thematicTitle: string;
    sourceTitle: string;
    updatedLabel: string;
  };
  pages: Record<SeoGuideSlug, SeoGuidePageContent>;
};

const googleMapsHref = 'https://maps.app.goo.gl/3g3UaPpcdnbCeZxX7';

export const seoGuideContent: Record<SupportedLocale, SeoGuideLocaleBundle> = {
  en: {
    common: {
      backHome: 'Back to Ibiza Harbour',
      quickFactsTitle: 'Quick Facts',
      faqsTitle: 'Frequently Asked Questions',
      relatedTitle: 'Related Harbour Guides',
      thematicTitle: 'Planning Cluster',
      sourceTitle: 'Sources and Planning Note',
      updatedLabel: 'Last checked'
    },
    pages: {
      'ibiza-cruise-port': {
        title: 'Ibiza Cruise Port Guide',
        description: 'Practical guide to Ibiza cruise port access, walking routes, taxis and what to do between the harbour and Dalt Vila.',
        intro: 'This page is designed for cruise visitors who want to understand how Ibiza cruise access relates to the wider harbour area. It focuses on orientation, walking distance, transport options and the easiest way to plan a short stop without wasting time once you arrive.',
        quickFacts: [
          {label: 'Best for', value: 'Cruise passengers with half-day or full-day stops'},
          {label: 'Main focus', value: 'Docking orientation, taxis, walking routes and old town access'},
          {label: 'Nearest landmark', value: 'Ibiza Harbour / Port d\'Eivissa waterfront'},
          {label: 'Arrival tip', value: 'Check your ship information before assuming you can walk everywhere'}
        ],
        sections: [
          {
            title: 'How cruise visitors should think about Ibiza port',
            paragraphs: [
              'Cruise passengers often search for Ibiza cruise port as if it were a completely separate destination, but in practice it sits within the wider Port d\'Eivissa area. That matters because once you understand the harbour layout, it becomes much easier to decide whether to walk, take a taxi or head straight toward Dalt Vila.',
              'The key planning question is not only where the ship arrives, but how quickly you want to reach the old town, the marina frontage or a taxi pickup area. Ibiza is manageable, but cruise timing still matters on busy summer days.'
            ],
            bullets: [
              'Treat the cruise stop as part of the larger harbour zone, not as an isolated terminal.',
              'Confirm your ship\'s docking instructions before arrival.',
              'Use Dalt Vila as the easiest sightseeing anchor for a short visit.'
            ]
          },
          {
            title: 'Walking, taxis and short-stop planning',
            paragraphs: [
              'Some cruise visitors are happy to walk into the harbour area, while others will prefer a taxi connection to save energy for the old town climb. The right choice depends on your berth, the weather and how much time you have on shore.',
              'If your stop is short, the most efficient plan is usually harbour orientation first, then Dalt Vila or waterfront dining, and finally a simple return route with plenty of buffer before all-aboard time.'
            ],
            bullets: [
              'Walking works best when you want photos and a slower pace.',
              'Taxis are useful when the weather is hot or mobility is limited.',
              'Leave extra return time during summer afternoons and evenings.'
            ]
          },
          {
            title: 'What to do near Ibiza cruise port',
            paragraphs: [
              'For many first-time visitors, the best-value stop is still the harbour-to-old-town combination. You can enjoy marina views, see the waterfront activity and then move uphill into Dalt Vila for the classic Ibiza viewpoint.',
              'If you are not trying to cover too much, restaurants and bars around the harbour frontage are enough for a relaxed half day. This is usually a better experience than trying to rush across the island during a short call.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Can you walk from Ibiza cruise port to Dalt Vila?',
            answer: 'Often yes, but the exact route depends on where your ship is handled within the wider port area. Always confirm the practical walking route on arrival.'
          },
          {
            question: 'Is a taxi useful from Ibiza cruise port?',
            answer: 'Yes. A taxi is often the easiest option if you want to save time, avoid heat or return comfortably before boarding closes.'
          },
          {
            question: 'What is the best short stop from cruise port?',
            answer: 'For many visitors the simplest high-value plan is harbour views, a walk toward Dalt Vila and time for food or a drink near the waterfront.'
          }
        ],
        related: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        primaryLink: {
          label: 'Open Ibiza Harbour on Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Use this guide together with your cruise line instructions, live port signage and the official Google Maps listing for last-minute orientation.',
        lastChecked: 'October 2026'
      },
      'ibiza-ferry-port': {
        title: 'Ibiza Ferry Port Guide',
        description: 'Guide to Ibiza ferry port orientation, where to arrive, how to find departures and how the harbour connects to Ibiza Town.',
        intro: 'Ibiza ferry port searches usually come from travellers who need quick harbour orientation before boarding or right after arrival. This guide focuses on how the ferry side of Port d\'Eivissa works in practice, including signage, timing and what to expect around the port frontage.',
        quickFacts: [
          {label: 'Best for', value: 'Ferry passengers, day trippers and first-time arrivals'},
          {label: 'Main focus', value: 'Boarding orientation, harbour access and nearby services'},
          {label: 'Nearby area', value: 'Ibiza Town waterfront and Dalt Vila access'},
          {label: 'Most useful habit', value: 'Arrive early enough to confirm the right operator and boarding zone'}
        ],
        sections: [
          {
            title: 'Understanding the ferry side of Port d\'Eivissa',
            paragraphs: [
              'Ibiza ferry port is not just one narrow terminal building. It is part of a working harbour with different traffic flows, boarding areas and traveller needs. That is why it helps to think in terms of operator, departure zone and walking route rather than a single pin on a map.',
              'The harbour can feel easy when you have time, but much more confusing when you are carrying luggage or arriving close to departure.'
            ],
            bullets: [
              'Check the operator name before heading to the waterfront.',
              'Follow current harbour signage, not assumptions from old screenshots.',
              'Build extra time into evening and summer departures.'
            ]
          },
          {
            title: 'What to do before boarding',
            paragraphs: [
              'The best pre-boarding routine is simple: confirm the company, locate the correct zone, then handle tickets or luggage questions before you settle down. Doing this early reduces the chance of last-minute confusion near the departure area.',
              'If you are travelling onward the same day, the harbour itself is also a practical waiting area because you have food, basic services and a direct connection to Ibiza Town.'
            ]
          },
          {
            title: 'How the ferry port connects to the rest of Ibiza Harbour',
            paragraphs: [
              'The ferry port matters for SEO because many travellers actually need broader harbour information, not only a boarding gate. Once you know where the waterfront, taxi access and old town connection sit relative to the ferry area, the whole port becomes easier to use.',
              'That is also why ferry searches and harbour map searches overlap so strongly for Port d\'Eivissa.'
            ]
          }
        ],
        faqs: [
          {
            question: 'How early should you arrive at Ibiza ferry port?',
            answer: 'Give yourself enough time to confirm the correct operator, understand the boarding zone and handle any luggage or ticket checks without rushing.'
          },
          {
            question: 'Is Ibiza ferry port close to Ibiza Town?',
            answer: 'Yes. The ferry side of Port d\'Eivissa connects directly with the wider harbour area and is practical for onward movement into Ibiza Town.'
          },
          {
            question: 'Should you rely only on an old screenshot of the terminal?',
            answer: 'No. Operators and boarding instructions can change, so follow the live port signage once you arrive.'
          }
        ],
        related: ['ibiza-to-formentera-ferry', 'ibiza-port-parking', 'ibiza-harbour-map'],
        thematicLinks: ['ibiza-to-formentera-ferry', 'ibiza-port-parking', 'ibiza-harbour-map'],
        primaryLink: {
          label: 'Check the harbour location on Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Use this page for planning and orientation, then verify operator-specific details directly with the company you are sailing with.',
        lastChecked: 'October 2026'
      },
      'ibiza-to-formentera-ferry': {
        title: 'Ibiza to Formentera Ferry Guide',
        description: 'Practical guide to planning the Ibiza to Formentera ferry, including harbour arrival, boarding mindset and day-trip timing.',
        intro: 'The Ibiza to Formentera ferry is one of the most useful travel searches around Port d\'Eivissa. Most travellers are not looking for harbour history here. They want to know where to go, how early to arrive, how stressful boarding is likely to be and whether the route works for a day trip.',
        quickFacts: [
          {label: 'Best for', value: 'Travellers planning a same-day or overnight trip to Formentera'},
          {label: 'Main focus', value: 'Departure planning, arrival timing and harbour orientation'},
          {label: 'Departure area', value: 'Ferry side of Ibiza Harbour / Port d\'Eivissa'},
          {label: 'Planning tip', value: 'Separate port orientation from operator-specific timetable checks'}
        ],
        sections: [
          {
            title: 'Why this route matters so much',
            paragraphs: [
              'For many visitors, the harbour is not only a place to walk and take photos. It is the departure point for one of the most popular island connections in the area. That makes the Ibiza to Formentera ferry one of the strongest long-tail topics for this site.',
              'The most useful approach is to think in two layers: first find the right harbour area, then confirm your exact operator and sailing time.'
            ]
          },
          {
            title: 'How to make the departure feel easy',
            paragraphs: [
              'The most common mistake is arriving at the harbour without enough buffer. Even when you already have tickets, it still helps to allow time for the walk, the operator check and any line movement near the boarding area.',
              'If you are travelling with bags, children or bikes, that extra buffer matters even more. The goal is to get your orientation done before the boarding rush starts.'
            ],
            bullets: [
              'Know your operator before you reach the port.',
              'Keep the Google Maps harbour pin handy for the wider area, not only one terminal screenshot.',
              'Allow extra time on busy summer mornings and evenings.'
            ]
          },
          {
            title: 'Is it good for a day trip?',
            paragraphs: [
              'Yes, for many travellers the route works very well as a day trip, especially when you start early and avoid overloading the schedule. The return feels much smoother when the Ibiza harbour side is already familiar before you come back.',
              'That is why it helps to understand the port layout on the outbound trip instead of leaving all orientation until the return journey.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Where do you take the Ibiza to Formentera ferry?',
            answer: 'You take it from the ferry side of Ibiza Harbour, within the wider Port d\'Eivissa area. Always verify the exact operator zone before boarding.'
          },
          {
            question: 'Can this route work as a day trip?',
            answer: 'Yes. Many travellers use it for day trips, provided they leave enough time for both harbour orientation and the return journey.'
          },
          {
            question: 'What is the biggest planning mistake?',
            answer: 'Arriving too late to calmly find the correct boarding area. Extra buffer reduces most of the stress.'
          }
        ],
        related: ['ibiza-ferry-port', 'ibiza-harbour-map', 'ibiza-cruise-port'],
        primaryLink: {
          label: 'Open the departure harbour in Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Use this guide for port planning. Timetables, ticket rules and baggage conditions should be checked with the ferry operator you choose.',
        lastChecked: 'October 2026'
      },
      'ibiza-harbour-map': {
        title: 'Ibiza Harbour Map Guide',
        description: 'Map-based guide to understanding Ibiza Harbour, including marina areas, ferry orientation, Dalt Vila access and visitor planning.',
        intro: 'Many people searching for an Ibiza Harbour map are really trying to solve a planning problem: where the ferry area sits, how cruise access relates to the port, and which direction to walk for Dalt Vila, restaurants or taxis. This page explains the harbour in that practical way.',
        quickFacts: [
          {label: 'Best for', value: 'First-time visitors who need fast harbour orientation'},
          {label: 'Main focus', value: 'Layout, walking logic and key visitor zones'},
          {label: 'Most useful anchor', value: 'Ibiza Harbour / Port d\'Eivissa waterfront'},
          {label: 'Map mindset', value: 'Think in zones: marina, ferry, cruise, old town connection'}
        ],
        sections: [
          {
            title: 'How to read the harbour properly',
            paragraphs: [
              'The best Ibiza Harbour map is not only a static image. What matters is understanding the harbour as a set of connected zones. Visitors often need one of four things: marina views, ferry boarding, cruise orientation or the route toward Dalt Vila.',
              'Once you divide the port that way, the map becomes much easier to use because you are matching the waterfront to a real visitor purpose.'
            ],
            bullets: [
              'Marina areas are best for walking, views and dining.',
              'Ferry areas matter for departures and arrivals.',
              'Cruise handling may involve a different approach from the main waterfront.',
              'Dalt Vila sits uphill and is the main sightseeing anchor from the harbour.'
            ]
          },
          {
            title: 'The most important route on the map',
            paragraphs: [
              'For many travellers, the most useful line on the map is the movement between the harbour frontage and Dalt Vila. It gives you the best mix of port atmosphere, photos and classic Ibiza views without adding unnecessary complexity.',
              'That is why so many other search topics, including ferry port and cruise port, eventually overlap with harbour map intent.'
            ]
          },
          {
            title: 'When a map is not enough on its own',
            paragraphs: [
              'A map helps with orientation, but it does not replace live port signage. This is especially important when you are dealing with an operator-specific ferry departure or a cruise arrival procedure.',
              'Use the map to understand the harbour broadly, then switch to live signs and current information for the final approach.'
            ]
          }
        ],
        faqs: [
          {
            question: 'What should you look for first on an Ibiza Harbour map?',
            answer: 'Start by locating the waterfront core of Port d\'Eivissa, then identify which zone matters to you most: ferry, cruise, marina or the route to Dalt Vila.'
          },
          {
            question: 'Is the harbour one simple terminal?',
            answer: 'No. The port works better as a group of related zones, which is why a practical map explanation is more useful than one isolated pin.'
          },
          {
            question: 'Can you use Google Maps alone?',
            answer: 'Google Maps is excellent for the broad harbour location, but final boarding or arrival details should still be checked against live signage and operator instructions.'
          }
        ],
        related: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        primaryLink: {
          label: 'View Ibiza Harbour on Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'This guide explains the harbour layout in visitor terms. For exact departure handling, always defer to operator instructions and on-site port signage.',
        lastChecked: 'October 2026'
      }
    }
  },
  es: {
    common: {
      backHome: 'Volver a Ibiza Harbour',
      quickFactsTitle: 'Datos rápidos',
      faqsTitle: 'Preguntas frecuentes',
      relatedTitle: 'Guías relacionadas del puerto',
      thematicTitle: 'Cluster de planificación',
      sourceTitle: 'Fuentes y nota de planificación',
      updatedLabel: 'Última revisión'
    },
    pages: {
      'ibiza-cruise-port': {
        title: 'Guía del Ibiza Cruise Port',
        description: 'Guía práctica sobre cruceros en Ibiza, acceso al puerto, trayectos a pie, taxis y la conexión entre el muelle y Dalt Vila.',
        intro: 'Esta página está pensada para cruceristas que necesitan entender cómo se relaciona el área de cruceros con el conjunto de Ibiza Harbour. El objetivo es resolver orientación, tiempos, transporte y la forma más sencilla de aprovechar una escala sin perder tiempo al llegar.',
        quickFacts: [
          {label: 'Ideal para', value: 'Pasajeros de crucero con escala de medio día o día completo'},
          {label: 'Enfoque principal', value: 'Orientación del atraque, taxis, rutas a pie y acceso a Dalt Vila'},
          {label: 'Referencia cercana', value: 'Frente marítimo de Ibiza Harbour / Port d\'Eivissa'},
          {label: 'Consejo de llegada', value: 'Confirma la información de tu barco antes de asumir que todo se hace caminando'}
        ],
        sections: [
          {
            title: 'Cómo entender la zona de cruceros en Ibiza',
            paragraphs: [
              'Muchos viajeros buscan Ibiza cruise port como si fuera un lugar totalmente separado, pero en realidad forma parte del conjunto portuario de Port d\'Eivissa. Entender esto ayuda a decidir mucho mejor si conviene caminar, tomar un taxi o ir directamente hacia Dalt Vila.',
              'La pregunta importante no es solo dónde atraca el barco, sino qué tan rápido quieres llegar al casco antiguo, al frente marítimo o a la zona de taxis.'
            ],
            bullets: [
              'Piensa en la escala como parte del puerto completo, no como un terminal aislado.',
              'Verifica las instrucciones de atraque antes de llegar.',
              'Usa Dalt Vila como eje principal si la escala es corta.'
            ]
          },
          {
            title: 'Caminar, tomar taxi y organizar una escala corta',
            paragraphs: [
              'Algunos cruceristas prefieren entrar caminando en la zona del puerto, mientras que otros ganan tiempo usando taxi, sobre todo si hace calor o si quieren reservar energía para subir al casco antiguo.',
              'Cuando la escala es breve, el plan más eficiente suele ser: orientarse primero en el puerto, después ir hacia Dalt Vila o al paseo marítimo, y dejar una vuelta sencilla con margen suficiente antes del embarque.'
            ],
            bullets: [
              'Caminar funciona mejor si quieres fotos y un ritmo tranquilo.',
              'El taxi es útil cuando el calor aprieta o la movilidad es limitada.',
              'Conviene dejar margen extra para volver en tardes de verano.'
            ]
          },
          {
            title: 'Qué hacer cerca del puerto de cruceros de Ibiza',
            paragraphs: [
              'Para muchos visitantes, la combinación puerto y casco antiguo sigue siendo la opción más rentable en una primera visita. Puedes ver las marinas, disfrutar del ambiente del frente marítimo y luego subir a Dalt Vila para conseguir la vista clásica de Ibiza.',
              'Si la escala no es larga, normalmente es mejor quedarse entre el puerto, el casco histórico y la zona de restaurantes que intentar cruzar toda la isla con prisas.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Se puede ir andando desde el puerto de cruceros de Ibiza hasta Dalt Vila?',
            answer: 'A menudo sí, pero depende del punto exacto donde opere tu barco dentro del puerto. Conviene confirmar la ruta práctica al llegar.'
          },
          {
            question: 'Merece la pena tomar taxi desde la zona de cruceros?',
            answer: 'Sí, especialmente si quieres ahorrar tiempo, evitar el calor o volver con más comodidad antes de la hora límite de embarque.'
          },
          {
            question: 'Cuál es el mejor plan para una escala corta?',
            answer: 'Para muchos viajeros, lo más eficaz es combinar vistas del puerto, un recorrido hacia Dalt Vila y algo de tiempo para comer o tomar algo junto al mar.'
          }
        ],
        related: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        primaryLink: {
          label: 'Abrir Ibiza Harbour en Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Usa esta guía junto con las instrucciones de tu naviera, la señalización portuaria y la ficha pública de Google Maps.',
        lastChecked: 'Octubre 2026'
      },
      'ibiza-ferry-port': {
        title: 'Guía del Ibiza Ferry Port',
        description: 'Guía del puerto de ferris de Ibiza con orientación de embarque, acceso al puerto y conexión con la ciudad de Ibiza.',
        intro: 'Las búsquedas sobre Ibiza ferry port suelen venir de viajeros que necesitan ubicarse rápido antes de embarcar o justo después de llegar. Esta guía explica cómo funciona en la práctica la parte de ferris de Port d\'Eivissa, con foco en señalización, tiempos y relación con el resto del puerto.',
        quickFacts: [
          {label: 'Ideal para', value: 'Pasajeros de ferri, excursionistas y primeras llegadas'},
          {label: 'Enfoque principal', value: 'Orientación de embarque, acceso al puerto y servicios cercanos'},
          {label: 'Zona cercana', value: 'Frente marítimo de Ibiza ciudad y acceso a Dalt Vila'},
          {label: 'Hábito más útil', value: 'Llegar con tiempo suficiente para confirmar compañía y zona de embarque'}
        ],
        sections: [
          {
            title: 'Cómo entender la parte de ferris de Port d\'Eivissa',
            paragraphs: [
              'Ibiza ferry port no es un único edificio sencillo. Forma parte de un puerto activo con distintos flujos, zonas de embarque y necesidades de viaje. Por eso conviene pensar en compañía, área de salida y recorrido a pie, no solo en un único punto del mapa.',
              'Con tiempo el puerto resulta fácil, pero con equipaje o con la salida encima puede parecer más confuso.'
            ],
            bullets: [
              'Comprueba el nombre de la compañía antes de dirigirte al puerto.',
              'Sigue la señalización actual, no una captura antigua.',
              'Añade margen extra en salidas de verano y por la tarde.'
            ]
          },
          {
            title: 'Qué hacer antes de embarcar',
            paragraphs: [
              'La rutina más útil es simple: confirmar la compañía, localizar la zona correcta y resolver tickets o equipaje antes de relajarte. Hacer esto pronto evita la mayoría de las prisas de última hora.',
              'Si sigues viaje el mismo día, el propio puerto es una base práctica porque tienes comida, servicios básicos y conexión directa con Ibiza ciudad.'
            ]
          },
          {
            title: 'Cómo conecta el puerto de ferris con el resto de Ibiza Harbour',
            paragraphs: [
              'Muchas veces la búsqueda sobre ferris necesita en realidad información más amplia del puerto. Cuando ubicas el frente marítimo, la zona de taxis y la relación con el casco antiguo, todo el entorno se vuelve más fácil de usar.',
              'Por eso las búsquedas de ferry port y harbour map se pisan tanto en Port d\'Eivissa.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Con cuánto tiempo conviene llegar al puerto de ferris de Ibiza?',
            answer: 'Lo bastante pronto para confirmar compañía, localizar la zona correcta y resolver cualquier control de equipaje o ticket sin prisas.'
          },
          {
            question: 'El puerto de ferris está cerca de Ibiza ciudad?',
            answer: 'Sí. La parte de ferris forma parte del entorno inmediato de Port d\'Eivissa y conecta bien con la ciudad.'
          },
          {
            question: 'Basta con una imagen antigua del terminal?',
            answer: 'No. Las instrucciones de embarque pueden cambiar, así que conviene seguir la señalización real del puerto.'
          }
        ],
        related: ['ibiza-to-formentera-ferry', 'ibiza-port-parking', 'ibiza-harbour-map'],
        thematicLinks: ['ibiza-to-formentera-ferry', 'ibiza-port-parking', 'ibiza-harbour-map'],
        primaryLink: {
          label: 'Ver la ubicación del puerto en Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Usa esta página para orientarte y confirma siempre los detalles específicos con la compañía con la que navegas.',
        lastChecked: 'Octubre 2026'
      },
      'ibiza-to-formentera-ferry': {
        title: 'Guía del ferry de Ibiza a Formentera',
        description: 'Guía práctica para organizar el ferry de Ibiza a Formentera, con foco en llegada al puerto, embarque y excursiones de un día.',
        intro: 'El ferry de Ibiza a Formentera es una de las búsquedas más útiles alrededor de Port d\'Eivissa. La mayoría de viajeros no busca historia del puerto aquí. Lo que quiere saber es dónde ir, con cuánto tiempo llegar, cuán estresante puede ser el embarque y si el trayecto encaja bien en una excursión de un día.',
        quickFacts: [
          {label: 'Ideal para', value: 'Viajeros que planean una escapada de día o una noche en Formentera'},
          {label: 'Enfoque principal', value: 'Salida desde el puerto, tiempos de llegada y orientación práctica'},
          {label: 'Zona de salida', value: 'Área de ferris de Ibiza Harbour / Port d\'Eivissa'},
          {label: 'Consejo de planificación', value: 'Separa la orientación del puerto de la consulta de horarios concretos'}
        ],
        sections: [
          {
            title: 'Por qué esta ruta es tan importante',
            paragraphs: [
              'Para muchos visitantes, el puerto no es solo un lugar para pasear. También es la puerta de salida hacia una de las conexiones insulares más populares de la zona. Por eso Ibiza to Formentera ferry es uno de los temas long tail más potentes para este sitio.',
              'La manera más útil de organizarlo es pensar en dos capas: primero localizar bien la zona del puerto y después verificar compañía y horario concretos.'
            ]
          },
          {
            title: 'Cómo hacer que la salida sea más fácil',
            paragraphs: [
              'El error más habitual es llegar al puerto con muy poco margen. Incluso con billete comprado, conviene reservar tiempo para caminar, identificar la compañía y absorber cualquier cambio en la cola o en la zona de embarque.',
              'Si viajas con maletas, niños o bicicleta, ese margen adicional importa todavía más.'
            ],
            bullets: [
              'Conoce tu compañía antes de llegar al puerto.',
              'Usa Google Maps para ubicar el área general del puerto.',
              'Deja más tiempo en mañanas y tardes concurridas de verano.'
            ]
          },
          {
            title: 'Sirve bien para una excursión de un día?',
            paragraphs: [
              'Sí. Para muchos viajeros es una opción muy buena de excursión de un día, sobre todo si empiezan temprano y no intentan meter demasiadas cosas en el plan.',
              'La vuelta resulta mucho más cómoda cuando ya conoces la disposición del puerto de Ibiza desde el trayecto de ida.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Dónde se toma el ferry de Ibiza a Formentera?',
            answer: 'En la zona de ferris de Ibiza Harbour, dentro del conjunto de Port d\'Eivissa. Conviene verificar la zona exacta del operador antes de embarcar.'
          },
          {
            question: 'Esta ruta funciona bien como excursión de un día?',
            answer: 'Sí, siempre que dejes tiempo suficiente tanto para la orientación en el puerto como para el regreso.'
          },
          {
            question: 'Cuál es el error de planificación más común?',
            answer: 'Llegar demasiado tarde para encontrar con calma la zona correcta de embarque.'
          }
        ],
        related: ['ibiza-ferry-port', 'ibiza-harbour-map', 'ibiza-cruise-port'],
        primaryLink: {
          label: 'Abrir el puerto de salida en Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Usa esta guía para planificar el puerto. Los horarios, reglas de equipaje y condiciones del billete deben confirmarse con el operador.',
        lastChecked: 'Octubre 2026'
      },
      'ibiza-harbour-map': {
        title: 'Guía del mapa de Ibiza Harbour',
        description: 'Guía orientada al mapa de Ibiza Harbour para entender marinas, ferris, acceso a Dalt Vila y planificación del visitante.',
        intro: 'Quien busca un mapa de Ibiza Harbour suele intentar resolver un problema práctico: dónde queda la zona de ferris, cómo se relaciona la llegada de cruceros con el puerto y hacia qué lado conviene caminar para ir a Dalt Vila, restaurantes o taxis. Esta página explica el puerto con esa lógica.',
        quickFacts: [
          {label: 'Ideal para', value: 'Primeros visitantes que necesitan ubicarse rápido'},
          {label: 'Enfoque principal', value: 'Distribución del puerto, recorridos a pie y zonas clave'},
          {label: 'Punto más útil', value: 'Frente marítimo de Ibiza Harbour / Port d\'Eivissa'},
          {label: 'Mentalidad de mapa', value: 'Pensar en zonas: marina, ferri, crucero y conexión con el casco antiguo'}
        ],
        sections: [
          {
            title: 'Cómo leer bien el puerto en el mapa',
            paragraphs: [
              'El mejor mapa de Ibiza Harbour no es solo una imagen fija. Lo importante es entender el puerto como un conjunto de zonas conectadas. Normalmente el visitante necesita una de estas cuatro cosas: vistas de marina, salida en ferri, orientación de crucero o ruta hacia Dalt Vila.',
              'Cuando divides el puerto así, el mapa se vuelve mucho más útil porque cada zona responde a una necesidad real.'
            ],
            bullets: [
              'Las marinas sirven mejor para pasear, comer y hacer fotos.',
              'Las zonas de ferri importan para salidas y llegadas.',
              'Los cruceros pueden requerir una aproximación distinta al paseo principal.',
              'Dalt Vila es la referencia turística principal desde el puerto.'
            ]
          },
          {
            title: 'La ruta más importante del mapa',
            paragraphs: [
              'Para muchos viajeros, la línea más valiosa del mapa es la que une el frente portuario con Dalt Vila. Esa conexión ofrece ambiente de puerto, fotos y la vista clásica de Ibiza sin complicar demasiado el recorrido.',
              'Por eso tantos temas, como ferry port o cruise port, terminan superponiéndose con la intención de buscar el mapa del puerto.'
            ]
          },
          {
            title: 'Cuándo el mapa no basta por sí solo',
            paragraphs: [
              'El mapa orienta, pero no sustituye la señalización real del puerto. Esto es especialmente importante si dependes de una salida concreta de ferri o de un procedimiento de llegada de crucero.',
              'La mejor fórmula es usar el mapa para entender el conjunto y la señalización en directo para el tramo final.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Qué conviene buscar primero en un mapa de Ibiza Harbour?',
            answer: 'Primero ubica el núcleo del frente marítimo de Port d\'Eivissa y después identifica qué zona te importa más: ferri, crucero, marina o acceso a Dalt Vila.'
          },
          {
            question: 'El puerto es un único terminal sencillo?',
            answer: 'No. Funciona mejor como un grupo de zonas relacionadas, por eso una explicación práctica del mapa ayuda más que un único punto aislado.'
          },
          {
            question: 'Basta con usar Google Maps?',
            answer: 'Google Maps es muy útil para la ubicación general, pero la operación final de embarque o llegada debe contrastarse con señalización y avisos actuales.'
          }
        ],
        related: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        primaryLink: {
          label: 'Ver Ibiza Harbour en Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Esta guía explica la distribución del puerto con lógica de visitante. Para salidas concretas, manda siempre la información del operador y la señalización local.',
        lastChecked: 'Octubre 2026'
      }
    }
  },
  fr: {
    common: {
      backHome: 'Retour vers Ibiza Harbour',
      quickFactsTitle: 'Repères rapides',
      faqsTitle: 'Questions frequentes',
      relatedTitle: 'Guides portuaires lies',
      thematicTitle: 'Cluster de preparation',
      sourceTitle: 'Sources et note de preparation',
      updatedLabel: 'Derniere verification'
    },
    pages: {
      'ibiza-cruise-port': {
        title: 'Guide du port de croisiere d Ibiza',
        description: 'Guide pratique sur le port de croisiere d Ibiza, les acces, les trajets a pied, les taxis et le lien avec Dalt Vila.',
        intro: 'Cette page aide les croisiéristes a comprendre comment la zone de croisiere s inscrit dans l ensemble d Ibiza Harbour. Le but est de simplifier l orientation, le temps a quai, les transports et l organisation d une courte escale.',
        quickFacts: [
          {label: 'Ideal pour', value: 'Passagers de croisiere avec escale courte ou complete'},
          {label: 'Sujet principal', value: 'Orientation, taxis, marche et acces a Dalt Vila'},
          {label: 'Repere proche', value: 'Front de mer d Ibiza Harbour / Port d Eivissa'},
          {label: 'Conseil d arrivee', value: 'Verifier les consignes du navire avant de supposer que tout se fait a pied'}
        ],
        sections: [
          {
            title: 'Comment penser la zone croisiere a Ibiza',
            paragraphs: [
              'Beaucoup de voyageurs cherchent Ibiza cruise port comme s il s agissait d un lieu totalement separe, alors qu il fait partie du grand ensemble de Port d Eivissa. Une fois cette logique comprise, il devient plus simple de choisir entre marche, taxi ou acces direct vers Dalt Vila.',
              'La vraie question n est pas seulement l emplacement du navire, mais la rapidite avec laquelle vous voulez rejoindre la vieille ville, le front de mer ou une zone de taxis.'
            ],
            bullets: [
              'Traiter la croisiere comme une partie du port global.',
              'Verifier les instructions d accostage avant l arrivee.',
              'Utiliser Dalt Vila comme point fort d une courte escale.'
            ]
          },
          {
            title: 'Marcher, prendre un taxi et organiser une courte escale',
            paragraphs: [
              'Certains passagers preferent entrer dans le port a pied, d autres gagnent du temps avec un taxi, surtout en cas de chaleur ou si l on veut garder de l energie pour la montee vers la vieille ville.',
              'Sur une courte escale, le plan le plus simple consiste souvent a se reperer d abord dans le port, puis a rejoindre Dalt Vila ou le front de mer avant de revenir avec une marge confortable.'
            ]
          },
          {
            title: 'Que faire pres du port de croisiere d Ibiza',
            paragraphs: [
              'Pour beaucoup de premiers visiteurs, la meilleure combinaison reste port plus vieille ville. On profite des vues sur les marinas, de l ambiance du front de mer puis de la perspective classique depuis Dalt Vila.',
              'Quand le temps est limite, il vaut souvent mieux rester entre le port, le vieux centre et les restaurants du front maritime.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Peut on aller a pied du port de croisiere a Dalt Vila ?',
            answer: 'Souvent oui, mais le trajet exact depend de la zone d arrivee du navire. Il faut verifier le chemin pratique une fois sur place.'
          },
          {
            question: 'Le taxi est il utile depuis le port de croisiere ?',
            answer: 'Oui, surtout pour gagner du temps, eviter la chaleur ou revenir plus facilement avant la fin de l embarquement.'
          },
          {
            question: 'Quel est le meilleur plan pour une courte escale ?',
            answer: 'Le plus efficace pour beaucoup de visiteurs est de combiner vues du port, promenade vers Dalt Vila et pause boisson ou repas au bord de l eau.'
          }
        ],
        related: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        primaryLink: {
          label: 'Ouvrir Ibiza Harbour dans Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Utilisez cette page avec les consignes de la compagnie, la signalisation du port et la fiche publique Google Maps.',
        lastChecked: 'Octobre 2026'
      },
      'ibiza-ferry-port': {
        title: 'Guide du port de ferry d Ibiza',
        description: 'Guide pratique du port de ferry d Ibiza avec orientation d embarquement, acces au port et lien avec la ville d Ibiza.',
        intro: 'Les recherches sur Ibiza ferry port viennent souvent de voyageurs qui doivent se reperer vite avant d embarquer ou juste apres leur arrivee. Cette page explique le fonctionnement concret de la zone ferry de Port d Eivissa.',
        quickFacts: [
          {label: 'Ideal pour', value: 'Passagers de ferry, excursionnistes et premiers arrivants'},
          {label: 'Sujet principal', value: 'Embarquement, acces au port et services proches'},
          {label: 'Secteur voisin', value: 'Front de mer d Ibiza et acces a Dalt Vila'},
          {label: 'Bon reflexe', value: 'Arriver assez tot pour confirmer l operateur et la bonne zone'}
        ],
        sections: [
          {
            title: 'Comprendre la partie ferry de Port d Eivissa',
            paragraphs: [
              'Ibiza ferry port n est pas un seul petit terminal. C est une partie d un port actif avec plusieurs flux et zones de depart. Il est donc plus utile de penser en operateur, zone d embarquement et cheminement qu en un seul point fixe.',
              'Le port parait simple quand on a du temps, mais il peut sembler plus complexe avec des bagages ou un depart proche.'
            ]
          },
          {
            title: 'Que faire avant l embarquement',
            paragraphs: [
              'La meilleure routine est simple : confirmer la compagnie, trouver la bonne zone puis regler les questions de billet ou de bagages avant de patienter tranquillement.',
              'Le port est aussi une base pratique si vous poursuivez ensuite vers la ville, car le front de mer relie facilement les services et le centre.'
            ]
          },
          {
            title: 'Le lien entre ferry port et le reste du harbour',
            paragraphs: [
              'De nombreuses recherches sur le ferry port ont en realite besoin d une vision plus large du harbour. Une fois les taxis, le front de mer et la liaison avec la vieille ville compris, tout le secteur devient plus clair.',
              'C est aussi pour cela que les intentions ferry port et harbour map se recoupent autant.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Combien de temps avant faut il arriver ?',
            answer: 'Assez tot pour confirmer l operateur, trouver la bonne zone et gerer les controles sans stress.'
          },
          {
            question: 'Le port de ferry est il proche de la ville d Ibiza ?',
            answer: 'Oui. La zone ferry fait partie de l environnement immediat de Port d Eivissa et se relie bien a Ibiza Town.'
          },
          {
            question: 'Une vieille capture d ecran suffit elle ?',
            answer: 'Non. Les consignes d embarquement peuvent evoluer, il faut suivre la signalisation en direct.'
          }
        ],
        related: ['ibiza-to-formentera-ferry', 'ibiza-port-parking', 'ibiza-harbour-map'],
        thematicLinks: ['ibiza-to-formentera-ferry', 'ibiza-port-parking', 'ibiza-harbour-map'],
        primaryLink: {
          label: 'Verifier la zone du port dans Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Cette page sert a l orientation generale. Les details d exploitation doivent toujours etre verifies avec la compagnie choisie.',
        lastChecked: 'Octobre 2026'
      },
      'ibiza-to-formentera-ferry': {
        title: 'Guide du ferry Ibiza Formentera',
        description: 'Guide pratique pour organiser le ferry Ibiza Formentera avec depart du port, marges de temps et logique d excursion a la journee.',
        intro: 'Le ferry Ibiza Formentera est l une des recherches les plus utiles autour de Port d Eivissa. Les voyageurs veulent surtout savoir ou aller, combien de temps prevoir et comment rendre le depart moins stressant.',
        quickFacts: [
          {label: 'Ideal pour', value: 'Voyageurs prevoyant Formentera a la journee ou avec une nuit sur place'},
          {label: 'Sujet principal', value: 'Depart, temps d avance et orientation dans le port'},
          {label: 'Zone de depart', value: 'Secteur ferry d Ibiza Harbour / Port d Eivissa'},
          {label: 'Conseil', value: 'Distinguer orientation portuaire et horaires de compagnie'}
        ],
        sections: [
          {
            title: 'Pourquoi cette liaison compte autant',
            paragraphs: [
              'Pour beaucoup de visiteurs, le port n est pas seulement un lieu de promenade. C est aussi le point de depart vers l une des liaisons insulaires les plus populaires de la region.',
              'La meilleure methode consiste a penser en deux etapes : trouver d abord la bonne zone du harbour, puis verifier l operateur et l horaire exacts.'
            ]
          },
          {
            title: 'Comment rendre le depart plus simple',
            paragraphs: [
              'L erreur la plus courante est d arriver trop tard au port. Meme avec un billet deja achete, il faut encore du temps pour marcher, identifier la compagnie et absorber les mouvements de file pres de l embarquement.',
              'Avec des bagages, des enfants ou un velo, cette marge devient encore plus importante.'
            ]
          },
          {
            title: 'Est ce adapte a une excursion a la journee ?',
            paragraphs: [
              'Oui. Pour beaucoup de voyageurs, cette liaison fonctionne tres bien a la journee, surtout si le depart est pris assez tot et si le programme n est pas surcharge.',
              'Le retour est plus fluide quand on a deja compris la logique du harbour a l aller.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Ou prend on le ferry Ibiza Formentera ?',
            answer: 'Dans la zone ferry d Ibiza Harbour, au sein du grand ensemble Port d Eivissa. Il faut verifier l operateur precis avant l embarquement.'
          },
          {
            question: 'La liaison convient elle a une journee ?',
            answer: 'Oui, a condition de prevoir assez de temps pour l orientation dans le port et le retour.'
          },
          {
            question: 'Quelle est l erreur la plus frequente ?',
            answer: 'Arriver trop tard pour trouver calmement la bonne zone d embarquement.'
          }
        ],
        related: ['ibiza-ferry-port', 'ibiza-harbour-map', 'ibiza-cruise-port'],
        primaryLink: {
          label: 'Ouvrir le harbour de depart dans Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Utilisez cette page pour preparer votre passage au port. Les horaires, billets et bagages doivent etre verifies directement aupres de l operateur.',
        lastChecked: 'Octobre 2026'
      },
      'ibiza-harbour-map': {
        title: 'Guide du plan d Ibiza Harbour',
        description: 'Guide oriente carte pour comprendre Ibiza Harbour, les marinas, les ferries, Dalt Vila et les zones utiles aux visiteurs.',
        intro: 'Quand quelqu un cherche une carte d Ibiza Harbour, il essaie souvent de resoudre un probleme concret : trouver la zone ferry, comprendre l acces croisiere ou savoir dans quelle direction marcher vers Dalt Vila, les restaurants ou les taxis.',
        quickFacts: [
          {label: 'Ideal pour', value: 'Premiers visiteurs qui ont besoin de reperes rapides'},
          {label: 'Sujet principal', value: 'Organisation du port, logique a pied et zones importantes'},
          {label: 'Ancrage principal', value: 'Front de mer d Ibiza Harbour / Port d Eivissa'},
          {label: 'Reflexe carte', value: 'Penser en zones : marina, ferry, croisiere, vieille ville'}
        ],
        sections: [
          {
            title: 'Comment lire correctement le harbour',
            paragraphs: [
              'La meilleure carte d Ibiza Harbour n est pas seulement une image statique. Il faut comprendre le port comme un ensemble de zones reliees. En general, les visiteurs cherchent soit les marinas, soit les ferries, soit la croisiere, soit l acces a Dalt Vila.',
              'Une fois cette logique adoptee, la carte devient beaucoup plus utile.'
            ]
          },
          {
            title: 'La liaison la plus importante sur le plan',
            paragraphs: [
              'Pour beaucoup de voyageurs, le trajet essentiel est celui qui relie le front portuaire a Dalt Vila. C est la combinaison la plus efficace entre ambiance du port, photos et vue classique sur Ibiza.',
              'C est pourquoi les recherches ferry port ou cruise port finissent souvent par rejoindre l intention harbour map.'
            ]
          },
          {
            title: 'Quand la carte ne suffit pas',
            paragraphs: [
              'Une carte sert a l orientation generale, mais elle ne remplace pas la signalisation en temps reel. Cela compte surtout pour un depart de ferry precis ou une procedure d arrivee de croisiere.',
              'Utilisez la carte pour comprendre le port dans son ensemble, puis suivez les indications du terrain pour l approche finale.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Que faut il chercher en premier sur la carte ?',
            answer: 'Commencez par localiser le coeur du front de mer de Port d Eivissa, puis la zone qui vous interesse le plus : ferry, croisiere, marina ou acces a Dalt Vila.'
          },
          {
            question: 'Le harbour correspond il a un seul terminal ?',
            answer: 'Non. Il fonctionne comme un ensemble de zones liees, d ou l interet d une explication pratique plutot qu un seul point.'
          },
          {
            question: 'Google Maps suffit il a lui seul ?',
            answer: 'Il est tres utile pour la vue generale, mais les details finaux de depart ou d arrivee doivent toujours etre verifies avec la signalisation et les consignes actuelles.'
          }
        ],
        related: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        primaryLink: {
          label: 'Voir Ibiza Harbour dans Google Maps',
          href: googleMapsHref
        },
        sourceNote: 'Cette page explique le port avec une logique de visiteur. Pour les operations concretes, il faut suivre l operateur et la signalisation du port.',
        lastChecked: 'Octobre 2026'
      }
    }
  },
  'zh-Hant': {
    common: {
      backHome: '返回 Ibiza Harbour',
      quickFactsTitle: '快速重點',
      faqsTitle: '常見問題',
      relatedTitle: '相關港口指南',
      thematicTitle: '專題延伸',
      sourceTitle: '資料來源與規劃說明',
      updatedLabel: '最後核對'
    },
    pages: {
      'ibiza-cruise-port': {
        title: 'Ibiza Cruise Port 指南',
        description: '整理伊維薩郵輪港的到達動線、步行與計程車選擇，以及從港區前往 Dalt Vila 的規劃方式。',
        intro: '這一頁是給郵輪旅客用的，重點不是港口歷史，而是抵達後怎麼快速判斷位置、怎麼前往港邊或 Dalt Vila，以及短暫停靠時如何避免把時間浪費在找路上。',
        quickFacts: [
          {label: '適合誰', value: '半日或一日停靠的郵輪旅客'},
          {label: '主要內容', value: '靠泊方位、步行、計程車與老城動線'},
          {label: '關鍵地標', value: 'Ibiza Harbour / Port d\'Eivissa 港邊區域'},
          {label: '到港提醒', value: '先看船公司資訊，不要直接假設全程步行最方便'}
        ],
        sections: [
          {
            title: '先把郵輪區放回整個港口來理解',
            paragraphs: [
              '很多人搜尋 Ibiza cruise port 時，會把它想成獨立於 Ibiza Harbour 之外的另一個地方，但實際上它仍屬於 Port d\'Eivissa 的整體港區。只要先理解這個前提，後面要決定走路、搭計程車，或直接去 Dalt Vila 都會簡單很多。',
              '真正重要的問題不是只有船停在哪裡，而是你想多快抵達老城、港邊步道或計程車接駁點。'
            ],
            bullets: [
              '把郵輪停靠理解成整個港區的一部分。',
              '抵達前先確認船公司的靠泊與下船資訊。',
              '短停旅客通常可以把 Dalt Vila 當成最核心的觀光目標。'
            ]
          },
          {
            title: '步行、搭車與短停行程安排',
            paragraphs: [
              '如果你想慢慢看港景、順便拍照，步行是很好的選擇；如果天氣炎熱、時間有限，或同行者行動較不方便，計程車通常更省力。',
              '短停時最實用的節奏，往往是先完成港區定位，再前往 Dalt Vila 或港邊餐廳，最後保留足夠回船緩衝。'
            ]
          },
          {
            title: '郵輪旅客在附近最值得做什麼',
            paragraphs: [
              '對第一次來伊維薩的人來說，最穩妥的組合仍然是港邊步道加 Dalt Vila。你可以先感受 marina 與 waterfront 的氛圍，再往老城方向走，拿到最經典的港城同框視角。',
              '如果停靠時間不長，通常待在港邊、老城與餐廳區會比匆忙跨島更值得。'
            ]
          }
        ],
        faqs: [
          {
            question: '從郵輪港可以直接走到 Dalt Vila 嗎？',
            answer: '很多情況下可以，但仍要看你實際下船的區域。建議抵達後先依照現場動線確認最合適的步行路線。'
          },
          {
            question: '郵輪旅客需要搭計程車嗎？',
            answer: '如果你想省時間、避開炎熱天氣，或需要更輕鬆地回到船邊，計程車通常很有幫助。'
          },
          {
            question: '短停時最有效率的安排是什麼？',
            answer: '對多數人來說，港邊散步、接著前往 Dalt Vila，再留點時間吃飯或喝飲料，是最實際也最穩的安排。'
          }
        ],
        related: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        primaryLink: {
          label: '在 Google Maps 打開 Ibiza Harbour',
          href: googleMapsHref
        },
        sourceNote: '這頁適合搭配船公司通知、現場港口標示與 Google Maps 地點資訊一起使用。',
        lastChecked: '2026 年 10 月'
      },
      'ibiza-ferry-port': {
        title: 'Ibiza Ferry Port 指南',
        description: '整理伊維薩渡輪港的登船方位、到港後的實際動線，以及它和 Ibiza Town、Dalt Vila 的關係。',
        intro: '搜尋 Ibiza ferry port 的旅客，大多是想在登船前快速搞懂方位，或剛抵達時想知道接下來怎麼走。這頁的重點就是把 Port d\'Eivissa 的 ferry 區講清楚。',
        quickFacts: [
          {label: '適合誰', value: '渡輪旅客、一日遊旅客與第一次到港的人'},
          {label: '主要內容', value: '登船定位、港區進出與附近服務'},
          {label: '鄰近區域', value: 'Ibiza Town 港邊與 Dalt Vila 動線'},
          {label: '最好習慣', value: '提早抵達，先確認船公司與正確登船區'}
        ],
        sections: [
          {
            title: '先不要把 ferry port 想成單一小碼頭',
            paragraphs: [
              'Ibiza ferry port 並不是一個單純的小建築，而是整個工作港的一部分。旅客真正需要掌握的，不只是地圖上的單一定位，而是船公司、登船區與港邊步行路徑之間的關係。',
              '有時間時會覺得港區很好懂，但如果拖著行李、又接近開船時間，體感上就會複雜得多。'
            ],
            bullets: [
              '出發前先確認船公司名稱。',
              '抵達後以現場標示為準。',
              '夏季傍晚與熱門時段請預留更多時間。'
            ]
          },
          {
            title: '登船前最值得先做的事',
            paragraphs: [
              '最實用的順序通常很簡單：先確認公司，再找到正確區域，然後處理票務或行李問題。這樣可以大幅減少最後一刻的混亂。',
              '如果你登船前還有空檔，港區本身也是很方便的等待區，因為食物、基本服務和 Ibiza Town 連結都很近。'
            ]
          },
          {
            title: '為什麼 ferry port 會和 harbour map 搜尋重疊',
            paragraphs: [
              '很多人以為自己只是在找 ferry port，實際上需要的是更完整的港區理解。只要知道主要 waterfront、計程車點與老城方向，整個港口就會變得很好用。',
              '這也是 ferry port 和 harbour map 兩種搜尋意圖很容易重疊的原因。'
            ]
          }
        ],
        faqs: [
          {
            question: '到 Ibiza ferry port 應該提早多久？',
            answer: '至少要留出足夠時間確認船公司、找到正確登船區，並處理任何票務或行李問題。'
          },
          {
            question: 'Ibiza ferry port 離市區近嗎？',
            answer: '很近。它本來就和 Port d\'Eivissa 的整個港邊區域連在一起，進出 Ibiza Town 很方便。'
          },
          {
            question: '只靠舊截圖找碼頭可以嗎？',
            answer: '不建議。登船安排可能會調整，抵達後還是應該以現場港口標示為主。'
          }
        ],
        related: ['ibiza-to-formentera-ferry', 'ibiza-port-parking', 'ibiza-harbour-map'],
        thematicLinks: ['ibiza-to-formentera-ferry', 'ibiza-port-parking', 'ibiza-harbour-map'],
        primaryLink: {
          label: '在 Google Maps 查看港口位置',
          href: googleMapsHref
        },
        sourceNote: '這頁提供港區定位與規劃邏輯，實際開船、票務與行李規則仍以船公司公告為準。',
        lastChecked: '2026 年 10 月'
      },
      'ibiza-to-formentera-ferry': {
        title: 'Ibiza 到 Formentera 渡輪指南',
        description: '整理從伊維薩前往 Formentera 的渡輪規劃方式，包括到港、登船節奏與一日遊安排。',
        intro: 'Ibiza 到 Formentera 的渡輪，是 Port d\'Eivissa 最值得做的長尾主題之一。多數旅客真正想知道的是：要去哪裡搭、要多早到、會不會很混亂，以及這趟是否適合一日遊。',
        quickFacts: [
          {label: '適合誰', value: '規劃 Formentera 一日遊或過夜行程的旅客'},
          {label: '主要內容', value: '出發規劃、到港時間與登船心法'},
          {label: '出發區域', value: 'Ibiza Harbour / Port d\'Eivissa 的 ferry 區'},
          {label: '規劃提醒', value: '先理解港區，再去看船公司與時間表'}
        ],
        sections: [
          {
            title: '為什麼這條路線對港口網站特別重要',
            paragraphs: [
              '對很多人來說，Ibiza Harbour 不只是散步與看景的地方，也是前往 Formentera 最實用的起點。這讓 Ibiza to Formentera ferry 成為和港口資訊緊密連動的搜尋主題。',
              '最實用的規劃方式，是把問題拆成兩層：先找到正確的港區，再確認船公司與實際航班。'
            ]
          },
          {
            title: '怎麼讓出發過程不那麼緊張',
            paragraphs: [
              '最常見的錯誤是到港時間抓得太緊。即使你已經買好票，仍然需要時間步行、確認船公司與消化現場排隊或動線變化。',
              '如果同行者有小孩、行李或自行車，更應該多留緩衝時間。'
            ],
            bullets: [
              '出發前先記住船公司資訊。',
              'Google Maps 可用來抓港區大方位。',
              '夏季熱門時段建議更早到。'
            ]
          },
          {
            title: '適合做一日遊嗎',
            paragraphs: [
              '很適合，而且對很多旅客來說是最受歡迎的一日遊之一。前提是不要把行程塞太滿，並且把去程與回程都留出足夠港區定位時間。',
              '如果去程時就先熟悉 Ibiza 港區，回來時會輕鬆很多。'
            ]
          }
        ],
        faqs: [
          {
            question: '從哪裡搭 Ibiza 到 Formentera 的渡輪？',
            answer: '從 Ibiza Harbour 內的 ferry 區出發，也就是 Port d\'Eivissa 的一部分。實際登船區仍要依船公司確認。'
          },
          {
            question: '這條路線適合一日遊嗎？',
            answer: '很適合，只要你為出發與回程都預留了足夠的港區緩衝時間。'
          },
          {
            question: '最常見的規劃錯誤是什麼？',
            answer: '太晚到港，導致沒辦法從容找到正確的登船區。'
          }
        ],
        related: ['ibiza-ferry-port', 'ibiza-harbour-map', 'ibiza-cruise-port'],
        primaryLink: {
          label: '在 Google Maps 打開出發港區',
          href: googleMapsHref
        },
        sourceNote: '這頁提供的是港口規劃與動線理解，班次、票務與行李細節請直接向船公司確認。',
        lastChecked: '2026 年 10 月'
      },
      'ibiza-harbour-map': {
        title: 'Ibiza Harbour 地圖指南',
        description: '用地圖角度整理 Ibiza Harbour 的 marina、ferry、Dalt Vila 與港區步行邏輯，幫助第一次到訪者快速定位。',
        intro: '搜尋 Ibiza Harbour map 的人，通常不是只想看一張圖，而是想解決實際問題：渡輪區在哪、郵輪與主港邊的關係是什麼、要往哪個方向走才能到 Dalt Vila、餐廳或計程車區。',
        quickFacts: [
          {label: '適合誰', value: '第一次到港、需要快速抓方位的旅客'},
          {label: '主要內容', value: '港區分布、步行邏輯與關鍵區域'},
          {label: '核心定位', value: 'Ibiza Harbour / Port d\'Eivissa waterfront'},
          {label: '看圖方式', value: '用功能區思考：marina、ferry、cruise、old town'}
        ],
        sections: [
          {
            title: '先把港口看成多個功能區',
            paragraphs: [
              '最有用的 Ibiza Harbour 地圖，不只是靜態圖片，而是能幫你理解整個港區由多個彼此連動的區域組成。大部分旅客真正需要的，不外乎是 marina 景觀、渡輪出發、郵輪動線，或前往 Dalt Vila 的路線。',
              '一旦用這種方式讀圖，就會更快知道自己真正需要走向哪裡。'
            ],
            bullets: [
              'marina 區適合散步、拍照與吃飯。',
              'ferry 區對出發與抵達最重要。',
              'cruise 動線不一定和主港邊完全相同。',
              'Dalt Vila 是港區最重要的觀光延伸方向。'
            ]
          },
          {
            title: '地圖上最值得先掌握的一條線',
            paragraphs: [
              '對很多人來說，最重要的不是整張圖，而是 waterfront 到 Dalt Vila 的連結。這條線幾乎決定了你能不能快速拿到港景、老城與伊維薩經典視角。',
              '所以很多 cruise port 或 ferry port 的搜尋，到最後其實都會回到 harbour map 的需求。'
            ]
          },
          {
            title: '什麼時候地圖本身還不夠',
            paragraphs: [
              '地圖非常適合做整體定位，但它不會取代現場的港口標示。尤其碰到特定渡輪公司、郵輪到港程序或臨時調整時，現場資訊一定更重要。',
              '最好的做法，是先用地圖理解整體，再用現場標示完成最後一段。'
            ]
          }
        ],
        faqs: [
          {
            question: '看 Ibiza Harbour 地圖時，第一步該先找什麼？',
            answer: '先找 Port d\'Eivissa 的核心 waterfront，再判斷你最需要的是 ferry、cruise、marina 還是前往 Dalt Vila 的路線。'
          },
          {
            question: '整個港口只是單一碼頭嗎？',
            answer: '不是。它更像是一組彼此關聯的區域，所以用功能分區來理解會比只看一個點更有效。'
          },
          {
            question: '只靠 Google Maps 夠嗎？',
            answer: 'Google Maps 很適合抓整體位置，但最後的登船或到港細節，仍要以現場標示和即時資訊為主。'
          }
        ],
        related: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-to-airport', 'ibiza-port-parking'],
        primaryLink: {
          label: '在 Google Maps 查看 Ibiza Harbour',
          href: googleMapsHref
        },
        sourceNote: '這頁把港口地圖轉成旅客能直接使用的邏輯。涉及特定船班或到港程序時，仍要優先看現場資訊。',
        lastChecked: '2026 年 10 月'
      }
    }
  }
};

const extraSeoGuideContent: Partial<Record<SupportedLocale, Partial<Record<SecondarySeoGuideSlug, SeoGuidePageContent>>>> = {
  en: {
    'ibiza-port-to-dalt-vila': {
      title: 'Ibiza Port to Dalt Vila Guide',
      description: 'Walking guide from Ibiza Port to Dalt Vila, including the most practical route, timing expectations and why this is the classic first visit.',
      intro: 'This is one of the most natural searches around Ibiza Harbour because many visitors step out of the port area and want to know how quickly they can reach Dalt Vila. The answer is usually simple: the harbour and the old town are closely connected, but the route still deserves a little planning because the final climb changes the pace.',
      quickFacts: [
        {label: 'Best for', value: 'First-time visitors walking from the harbour to the old town'},
        {label: 'Main focus', value: 'Walking logic, route expectations and scenic timing'},
        {label: 'Starting point', value: 'Ibiza Harbour / Port d\'Eivissa waterfront'},
        {label: 'Best mindset', value: 'Treat it as a short city walk followed by an uphill old-town climb'}
      ],
      sections: [
        {
          title: 'Why this is the classic harbour route',
          paragraphs: [
            'For many travellers, the best introduction to Ibiza is not a long transfer or a complicated plan. It is the walk from the port toward Dalt Vila. This route connects the harbour atmosphere with the historic core in a way that feels immediate and memorable.',
            'That is why searches about Ibiza Port to Dalt Vila are so important. They sit right at the overlap between sightseeing, harbour orientation and practical route planning.'
          ]
        },
        {
          title: 'What the walk feels like in practice',
          paragraphs: [
            'The route usually begins as an easy waterfront walk. The part that changes the effort level is the old-town ascent, especially once you move away from the flatter harbour frontage and begin climbing toward the walls and upper viewpoints.',
            'Most visitors find it manageable, but summer heat, luggage or limited mobility can make the route feel harder than it looks on a map.'
          ],
          bullets: [
            'The harbour section is the easiest part of the walk.',
            'The climb becomes more noticeable near the historic core.',
            'A slower pace works best if you want photos and viewpoints along the way.'
          ]
        },
        {
          title: 'How to plan the walk well',
          paragraphs: [
            'The simplest strategy is to enjoy the waterfront first, then move toward the old town gates with enough time to stop whenever the views open up. If you are planning to return to the port for a ferry or cruise connection, leave more margin for the walk back downhill and across the harbour area.',
            'For many visitors, this is the single most useful short route in Ibiza Town.'
          ]
        }
      ],
      faqs: [
        {
          question: 'Can you walk from Ibiza Port to Dalt Vila?',
          answer: 'Yes. For many visitors this is the most natural route from the harbour, although the final old-town section becomes noticeably uphill.'
        },
        {
          question: 'Is the route difficult?',
          answer: 'It is usually manageable, but the climb feels harder in heat, with luggage or if you are trying to move quickly.'
        },
        {
          question: 'Is this a good first activity after arriving at the harbour?',
          answer: 'Yes. It is often the best first walk because it links the port atmosphere directly to Ibiza\'s historic heart.'
        }
      ],
      related: ['ibiza-harbour-map', 'ibiza-cruise-port', 'ibiza-port-to-airport'],
      primaryLink: {
        label: 'Open the harbour starting point in Google Maps',
        href: googleMapsHref
      },
      sourceNote: 'Use this page to understand the walking logic from the harbour to the old town, then follow current city signage once you approach the gates of Dalt Vila.',
      lastChecked: 'October 2026'
    },
    'ibiza-port-to-airport': {
      title: 'Ibiza Port to Airport Guide',
      description: 'Practical guide to getting from Ibiza Port to Ibiza Airport, including taxi expectations, timing and why buffer matters.',
      intro: 'Travellers searching Ibiza Port to Airport usually need a simple answer fast. They want to know how long the transfer takes, whether a taxi is worth it and how much buffer to leave when a ferry, cruise arrival or harbour visit is followed by a flight.',
      quickFacts: [
        {label: 'Best for', value: 'Travellers connecting from the harbour to the airport'},
        {label: 'Main focus', value: 'Transfer time, taxi logic and timing buffer'},
        {label: 'Starting point', value: 'Port d\'Eivissa / Ibiza Harbour waterfront area'},
        {label: 'Planning priority', value: 'Protect the airport connection with realistic margin'}
      ],
      sections: [
        {
          title: 'Why this transfer matters',
          paragraphs: [
            'Ibiza Port to Airport is one of the most practical keyword themes because it captures real travel pressure. People searching it are usually not browsing casually. They are trying to protect a connection after arriving by ferry, cruise or local transport.',
            'That makes clarity more important than long descriptions. The main decision is usually whether to take a taxi immediately or work around public transport timing.'
          ]
        },
        {
          title: 'Taxi versus slower options',
          paragraphs: [
            'For many travellers, the simplest and most reliable option is a taxi, especially if you have luggage or a flight to catch. Public transport can still work, but it demands more tolerance for waiting time, route changes and less direct movement through the city.',
            'The harbour is busy enough in peak season that a realistic buffer matters more than a theoretical best-case transfer time.'
          ],
          bullets: [
            'Taxi is usually the lowest-stress choice for airport transfers.',
            'Public transport can work, but it is less forgiving if timing matters.',
            'Peak season traffic makes buffer more important than averages.'
          ]
        },
        {
          title: 'How much time should you protect',
          paragraphs: [
            'A good planning habit is to think in layers: time to leave the harbour area, time to reach the airport and then the airport buffer itself. Travellers often underestimate the first layer because the port is active, pedestrian-heavy and not always instant to exit at busy times.',
            'If you are protecting a flight, conservative timing is usually the smarter choice.'
          ]
        }
      ],
      faqs: [
        {
          question: 'What is the easiest way from Ibiza Port to the airport?',
          answer: 'For many travellers, a taxi is the easiest and most reliable way, especially when luggage or a flight connection is involved.'
        },
        {
          question: 'Should you leave extra buffer from the port?',
          answer: 'Yes. The harbour itself can take time to exit, so airport planning should include both the transfer and the port-side margin.'
        },
        {
          question: 'Can public transport still work?',
          answer: 'Yes, but it is usually less convenient than a direct taxi if timing is important.'
        }
      ],
      related: ['ibiza-port-parking', 'ibiza-ferry-port', 'ibiza-port-to-dalt-vila'],
      primaryLink: {
        label: 'Open Ibiza Harbour before your airport transfer',
        href: googleMapsHref
      },
      sourceNote: 'Use this page to frame your airport timing from the harbour. Final transfer choices should still be adapted to traffic, luggage and your airline check-in needs.',
      lastChecked: 'October 2026'
    },
    'ibiza-port-parking': {
      title: 'Ibiza Port Parking Guide',
      description: 'Guide to Ibiza Port parking expectations, peak-season pressure and when it is smarter to avoid driving into the harbour area.',
      intro: 'Ibiza Port parking sounds like a simple search, but it usually hides a bigger planning issue: whether it is worth driving directly into the harbour area at all. This guide helps visitors think through parking pressure, timing and the trade-off between convenience and stress.',
      quickFacts: [
        {label: 'Best for', value: 'Drivers planning to reach the harbour by car'},
        {label: 'Main focus', value: 'Parking pressure, timing and realistic expectations'},
        {label: 'Hardest period', value: 'Summer evenings and peak travel days'},
        {label: 'Best planning habit', value: 'Decide early whether driving is still worth it'}
      ],
      sections: [
        {
          title: 'Why parking near the port gets difficult',
          paragraphs: [
            'The harbour is one of the busiest visitor zones in Ibiza Town. That means parking stress is not only about the number of spaces. It is also about timing, circulation, nearby demand and how many people are trying to reach the same area for ferries, dining or evening walks.',
            'As a result, parking can feel manageable one day and frustrating the next, especially in summer.'
          ]
        },
        {
          title: 'When driving still makes sense',
          paragraphs: [
            'Driving can still be practical if your schedule is early, your luggage is heavy or you are coordinating with a specific onward movement. The key is to decide before you are trapped in harbour traffic whether you are committed to parking near the waterfront or willing to switch strategy.',
            'Many visitors are happier when they reduce the pressure and use taxi or public transport once the peak evening window begins.'
          ],
          bullets: [
            'Earlier arrivals usually have a better chance than peak evening arrivals.',
            'Heavy luggage or family logistics can still justify driving.',
            'If the area already feels crowded, changing strategy early often saves time.'
          ]
        },
        {
          title: 'The smarter mindset for parking searches',
          paragraphs: [
            'The best Ibiza Port parking plan is often not about hunting for the perfect spot. It is about deciding how much parking stress you are willing to accept compared with alternate ways of reaching the harbour.',
            'That mindset leads to better decisions than assuming a convenient space will appear at the busiest hour.'
          ]
        }
      ],
      faqs: [
        {
          question: 'Is parking near Ibiza Port easy?',
          answer: 'It can be manageable at quieter times, but summer evenings and peak demand periods often make it much harder.'
        },
        {
          question: 'Should you still drive to the harbour?',
          answer: 'Sometimes yes, especially with luggage or early schedules, but many visitors prefer to avoid the pressure and switch to taxi or public transport at busy times.'
        },
        {
          question: 'What is the biggest parking mistake?',
          answer: 'Assuming the busiest arrival window will still offer easy parking close to the waterfront.'
        }
      ],
      related: ['ibiza-port-to-airport', 'ibiza-ferry-port', 'ibiza-harbour-map'],
      primaryLink: {
        label: 'Use Google Maps to assess the harbour area',
        href: googleMapsHref
      },
      sourceNote: 'This page is designed to set realistic parking expectations around the harbour. Live demand, season and arrival time will still shape the final experience.',
      lastChecked: 'October 2026'
    }
  },
  es: {
    'ibiza-port-to-dalt-vila': {
      title: 'Guía de Ibiza Port a Dalt Vila',
      description: 'Guía para ir caminando desde el puerto de Ibiza a Dalt Vila, con la lógica del recorrido, el desnivel y la mejor forma de organizar la visita.',
      intro: 'Esta es una de las búsquedas más naturales alrededor de Ibiza Harbour porque muchísima gente sale del puerto y quiere saber cuánto tarda en llegar al casco antiguo. La respuesta suele ser sencilla: el puerto y Dalt Vila están muy conectados, pero el tramo final cambia el esfuerzo y conviene entenderlo bien.',
      quickFacts: [
        {label: 'Ideal para', value: 'Primeros visitantes que suben a pie desde el puerto al casco antiguo'},
        {label: 'Enfoque principal', value: 'Lógica del paseo, desnivel y tiempos realistas'},
        {label: 'Punto de salida', value: 'Frente marítimo de Ibiza Harbour / Port d\'Eivissa'},
        {label: 'Mentalidad útil', value: 'Pensarlo como un paseo corto por ciudad seguido de una subida al casco histórico'}
      ],
      sections: [
        {
          title: 'Por qué esta es la ruta clásica desde el puerto',
          paragraphs: [
            'Para muchos viajeros, la mejor primera experiencia de Ibiza no es un traslado largo ni una ruta complicada. Es el paseo desde el puerto hacia Dalt Vila. La conexión entre el ambiente portuario y el núcleo histórico es inmediata y muy fácil de entender.',
            'Por eso Ibiza Port to Dalt Vila es una búsqueda tan importante: une intención turística, orientación práctica y movimiento real por la ciudad.'
          ]
        },
        {
          title: 'Cómo se siente el recorrido en la práctica',
          paragraphs: [
            'El paseo empieza de forma bastante cómoda junto al agua. El tramo que cambia el esfuerzo es la subida final, cuando dejas el frente portuario más llano y entras en la parte alta del casco antiguo.',
            'La mayoría de visitantes lo lleva bien, pero con calor, equipaje o poca movilidad puede sentirse más duro de lo que parece sobre el mapa.'
          ],
          bullets: [
            'La parte del puerto es la más sencilla.',
            'La subida se nota de verdad cerca de la zona histórica.',
            'Conviene ir sin prisas si quieres disfrutar de vistas y fotos.'
          ]
        },
        {
          title: 'La mejor manera de organizar esta caminata',
          paragraphs: [
            'Lo más práctico suele ser disfrutar primero del paseo marítimo y después avanzar hacia las puertas del casco antiguo con tiempo suficiente para pararte cuando se abran las vistas.',
            'Si después tienes que volver al puerto para un ferri o un crucero, deja más margen del que te pide el trayecto de ida.'
          ]
        }
      ],
      faqs: [
        {
          question: 'Se puede ir andando desde el puerto de Ibiza a Dalt Vila?',
          answer: 'Sí. Para muchos visitantes es la ruta más natural, aunque el último tramo hacia el casco antiguo es claramente en subida.'
        },
        {
          question: 'Es un recorrido difícil?',
          answer: 'Normalmente no, pero el calor, el equipaje o las prisas hacen que se note más.'
        },
        {
          question: 'Es buena idea hacerlo nada más llegar al puerto?',
          answer: 'Sí. Para muchos viajeros es la mejor primera actividad porque une el puerto con el corazón histórico de Ibiza.'
        }
      ],
      related: ['ibiza-harbour-map', 'ibiza-cruise-port', 'ibiza-port-to-airport'],
      primaryLink: {
        label: 'Abrir en Google Maps el punto de salida del puerto',
        href: googleMapsHref
      },
      sourceNote: 'Esta guía sirve para entender el paseo desde el puerto hasta el casco antiguo. Al acercarte a Dalt Vila, sigue también la señalización urbana actual.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-port-to-airport': {
      title: 'Guía de Ibiza Port al aeropuerto',
      description: 'Guía práctica para ir del puerto de Ibiza al aeropuerto, con foco en tiempos, taxi y margen recomendado.',
      intro: 'Quien busca Ibiza Port to Airport casi siempre necesita una respuesta rápida. No suele estar comparando opciones por curiosidad, sino intentando proteger una conexión tras llegar en ferri, crucero o después de una visita al puerto.',
      quickFacts: [
        {label: 'Ideal para', value: 'Viajeros que enlazan desde el puerto al aeropuerto'},
        {label: 'Enfoque principal', value: 'Tiempo de traslado, taxi y margen realista'},
        {label: 'Punto de salida', value: 'Zona de Port d\'Eivissa / Ibiza Harbour'},
        {label: 'Prioridad clave', value: 'Proteger la conexión al aeropuerto con margen suficiente'}
      ],
      sections: [
        {
          title: 'Por qué este traslado importa tanto',
          paragraphs: [
            'Ibiza Port to Airport es un tema muy práctico porque refleja una necesidad real de viaje. La mayoría de usuarios está intentando decidir cómo salir del puerto sin comprometer el vuelo.',
            'En este contexto, lo importante no es una explicación larga, sino saber cuándo conviene tomar taxi y cuánto margen dejar.'
          ]
        },
        {
          title: 'Taxi frente a opciones más lentas',
          paragraphs: [
            'Para muchos viajeros, el taxi sigue siendo la opción más sencilla y segura, sobre todo con equipaje. El transporte público puede servir, pero suele requerir más tolerancia a esperas y menos margen para errores.',
            'En temporada alta, la salida misma del puerto ya consume tiempo, así que el mejor caso teórico no siempre es el que debes usar para planificar.'
          ],
          bullets: [
            'El taxi suele ser la opción menos estresante para ir al aeropuerto.',
            'El transporte público es viable, pero menos indulgente si vas ajustado.',
            'En verano conviene planificar con margen adicional.'
          ]
        },
        {
          title: 'Qué margen merece la conexión al aeropuerto',
          paragraphs: [
            'Lo más útil es pensar en capas: tiempo para salir del área del puerto, tiempo de traslado y margen aeroportuario. Mucha gente subestima la primera parte porque el puerto es activo, peatonal y puede ir más lento de lo esperado.',
            'Si hay un vuelo en juego, suele compensar un enfoque conservador.'
          ]
        }
      ],
      faqs: [
        {
          question: 'Cuál es la forma más fácil de ir del puerto al aeropuerto?',
          answer: 'Para muchos viajeros, el taxi es la forma más sencilla y fiable, especialmente con equipaje o un vuelo cercano.'
        },
        {
          question: 'Hay que dejar margen extra saliendo del puerto?',
          answer: 'Sí. No solo cuenta el traslado, también el tiempo real que puedes tardar en salir del entorno portuario.'
        },
        {
          question: 'El transporte público puede servir?',
          answer: 'Sí, pero normalmente resulta menos cómodo que un taxi directo si el tiempo importa.'
        }
      ],
      related: ['ibiza-port-parking', 'ibiza-ferry-port', 'ibiza-port-to-dalt-vila'],
      primaryLink: {
        label: 'Abrir Ibiza Harbour antes de ir al aeropuerto',
        href: googleMapsHref
      },
      sourceNote: 'Esta página ayuda a enmarcar los tiempos de salida desde el puerto. La decisión final debe ajustarse al tráfico, al equipaje y a los requisitos de la aerolínea.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-port-parking': {
      title: 'Guía de aparcamiento en Ibiza Port',
      description: 'Guía para entender el aparcamiento cerca del puerto de Ibiza, la presión de temporada alta y cuándo deja de compensar llegar en coche.',
      intro: 'Ibiza Port parking parece una búsqueda sencilla, pero normalmente esconde una duda mayor: si realmente compensa entrar en coche hasta el puerto. Esta guía intenta resolver esa parte de la decisión antes de que el tráfico y la falta de plazas te obliguen a improvisar.',
      quickFacts: [
        {label: 'Ideal para', value: 'Conductores que planean llegar al puerto en coche'},
        {label: 'Enfoque principal', value: 'Presión de aparcamiento, horarios y expectativas realistas'},
        {label: 'Momento más difícil', value: 'Tardes y noches de verano, y días de alta demanda'},
        {label: 'Mejor hábito', value: 'Decidir pronto si todavía merece la pena conducir hasta el puerto'}
      ],
      sections: [
        {
          title: 'Por qué aparcar cerca del puerto se complica',
          paragraphs: [
            'El puerto es una de las zonas con más movimiento de Ibiza ciudad. Eso significa que el problema no es solo cuántas plazas hay, sino cuánta gente intenta llegar al mismo sitio para ferris, restaurantes o paseos de tarde.',
            'Por eso el aparcamiento puede parecer razonable un día y muy incómodo al siguiente, especialmente en verano.'
          ]
        },
        {
          title: 'Cuándo sí puede seguir teniendo sentido ir en coche',
          paragraphs: [
            'Conducir puede seguir siendo práctico si llegas temprano, llevas equipaje o dependes de un movimiento muy concreto después del puerto. La clave es decidir antes de entrar en tráfico denso si sigues comprometido con aparcar cerca del waterfront o si merece más la pena cambiar de plan.',
            'Muchos visitantes terminan más contentos cuando reducen la presión y optan por taxi o transporte público en el tramo final.'
          ],
          bullets: [
            'Llegar temprano mejora bastante la experiencia.',
            'Con equipaje pesado o familia, el coche puede seguir justificarse.',
            'Si el área ya se siente saturada, cambiar de estrategia a tiempo suele ahorrar más de lo que parece.'
          ]
        },
        {
          title: 'La mentalidad más útil para esta búsqueda',
          paragraphs: [
            'El mejor plan de aparcamiento no suele consistir en encontrar la plaza perfecta, sino en decidir cuánta fricción aceptas a cambio de acercarte en coche al puerto.',
            'Esa forma de pensar suele llevar a mejores decisiones que confiar en que aparecerá una plaza cómoda en la hora punta.'
          ]
        }
      ],
      faqs: [
        {
          question: 'Es fácil aparcar cerca del puerto de Ibiza?',
          answer: 'En momentos tranquilos puede ser razonable, pero en tardes de verano y picos de demanda suele complicarse bastante.'
        },
        {
          question: 'Sigue compensando ir en coche al puerto?',
          answer: 'A veces sí, sobre todo con equipaje o si llegas temprano, pero en horas concurridas mucha gente prefiere taxi o transporte público.'
        },
        {
          question: 'Cuál es el error más común con el aparcamiento?',
          answer: 'Pensar que en la franja más concurrida seguirá siendo fácil aparcar junto al waterfront.'
        }
      ],
      related: ['ibiza-port-to-airport', 'ibiza-ferry-port', 'ibiza-harbour-map'],
      primaryLink: {
        label: 'Usar Google Maps para revisar la zona del puerto',
        href: googleMapsHref
      },
      sourceNote: 'Esta página sirve para ajustar expectativas de aparcamiento en el entorno del puerto. La experiencia final seguirá dependiendo del horario, la temporada y la demanda real.',
      lastChecked: 'Octubre 2026'
    }
  },
  fr: {
    'ibiza-port-to-dalt-vila': {
      title: 'Guide du trajet du port a Dalt Vila',
      description: 'Guide pratique pour aller du port d Ibiza a Dalt Vila a pied, avec logique du parcours, denivele et organisation simple.',
      intro: 'Beaucoup de visiteurs arrivent au port et veulent savoir combien de temps il faut pour rejoindre Dalt Vila. La liaison est naturelle, mais elle devient plus exigeante quand la montee vers la vieille ville commence.',
      quickFacts: [
        {label: 'Ideal pour', value: 'Premiers visiteurs qui vont a pied du port vers la vieille ville'},
        {label: 'Sujet principal', value: 'Parcours, denivele et rythme realiste'},
        {label: 'Point de depart', value: 'Front de mer d Ibiza Harbour / Port d Eivissa'},
        {label: 'Bon reflexe', value: 'Voir la route comme une promenade puis une montee historique'}
      ],
      sections: [
        {title: 'Pourquoi cet itineraire est si populaire', paragraphs: ['Le trajet entre le port et Dalt Vila relie directement l ambiance maritime au coeur historique d Ibiza. C est l une des transitions les plus logiques pour une premiere visite.', 'Cette recherche compte beaucoup car elle melange orientation, tourisme et deplacement concret.']},
        {title: 'Ce que la marche implique vraiment', paragraphs: ['Le debut du trajet est facile le long du front de mer, puis la montee vers la vieille ville change l effort ressenti.', 'La chaleur, les bagages ou un rythme rapide rendent ce dernier segment plus exigeant.']},
        {title: 'Comment bien l organiser', paragraphs: ['Le plus simple est de profiter du harbour, puis de monter vers les portes de Dalt Vila avec assez de temps pour les vues et les pauses.', 'Si vous devez revenir au port ensuite, gardez plus de marge pour le retour.']}
      ],
      faqs: [
        {question: 'Peut on aller du port a Dalt Vila a pied ?', answer: 'Oui. Pour beaucoup de visiteurs, c est meme la liaison la plus naturelle depuis le harbour.'},
        {question: 'La marche est elle difficile ?', answer: 'Elle reste faisable pour beaucoup de gens, mais la montee finale se ressent davantage avec la chaleur ou des bagages.'},
        {question: 'Est ce une bonne premiere activite ?', answer: 'Oui. C est souvent la meilleure premiere promenade pour relier le port au centre historique.'}
      ],
      related: ['ibiza-harbour-map', 'ibiza-cruise-port', 'ibiza-port-to-airport'],
      primaryLink: {label: 'Ouvrir le point de depart du port dans Google Maps', href: googleMapsHref},
      sourceNote: 'Cette page aide a comprendre la liaison entre le port et Dalt Vila. Une fois sur place, suivez aussi la signalisation urbaine actuelle.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-port-to-airport': {
      title: 'Guide du trajet du port a l aeroport',
      description: 'Guide pratique pour aller du port d Ibiza a l aeroport, avec logique de taxi, marge de temps et transfer realiste.',
      intro: 'La recherche Ibiza Port to Airport correspond souvent a un besoin concret et urgent. Il s agit surtout de proteger un vol apres une arrivee ferry, croisiere ou visite du harbour.',
      quickFacts: [
        {label: 'Ideal pour', value: 'Voyageurs reliant le harbour a l aeroport'},
        {label: 'Sujet principal', value: 'Temps de transfer, taxi et marge de securite'},
        {label: 'Point de depart', value: 'Zone de Port d Eivissa / Ibiza Harbour'},
        {label: 'Priorite', value: 'Garder une marge suffisante avant le vol'}
      ],
      sections: [
        {title: 'Pourquoi ce transfer est important', paragraphs: ['Ce sujet compte car il reflète une vraie pression de voyage. Les utilisateurs veulent sortir du port sans mettre leur vol en danger.', 'Dans cette situation, la clarte pratique vaut plus qu une longue description.']},
        {title: 'Taxi ou options plus lentes', paragraphs: ['Pour beaucoup de voyageurs, le taxi reste la solution la plus directe et la moins stressante, surtout avec des bagages.', 'Les autres options peuvent fonctionner, mais elles tolerent moins bien les retards et la charge logistique.']},
        {title: 'Combien de marge faut il garder', paragraphs: ['Il faut penser au temps pour sortir du port, puis au trajet lui-meme, puis a la marge aeroportuaire.', 'Le harbour actif peut ralentir le depart plus qu on ne l imagine.']}
      ],
      faqs: [
        {question: 'Quel est le moyen le plus simple pour aller du port a l aeroport ?', answer: 'Pour beaucoup de voyageurs, le taxi est la solution la plus simple et la plus fiable.'},
        {question: 'Faut il ajouter une marge speciale ?', answer: 'Oui, car la sortie du port prend parfois plus de temps que prevu.'},
        {question: 'Les transports publics peuvent ils suffire ?', answer: 'Oui, mais ils sont en general moins pratiques qu un taxi direct si le temps compte.'}
      ],
      related: ['ibiza-port-parking', 'ibiza-ferry-port', 'ibiza-port-to-dalt-vila'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour avant le trajet aeroport', href: googleMapsHref},
      sourceNote: 'Cette page sert a cadrer le transfer harbour aeroport. Le choix final dependra toujours du trafic, des bagages et de votre vol.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-port-parking': {
      title: 'Guide du parking du port d Ibiza',
      description: 'Guide pour comprendre le stationnement pres du port d Ibiza, la pression en haute saison et les limites de l acces en voiture.',
      intro: 'La recherche Ibiza Port parking cache souvent une question plus large : est ce que venir jusqu au harbour en voiture reste une bonne idee au bon moment de la journee ?',
      quickFacts: [
        {label: 'Ideal pour', value: 'Conducteurs prevoyant d arriver au harbour en voiture'},
        {label: 'Sujet principal', value: 'Pression de stationnement, timing et attentes realistes'},
        {label: 'Periode la plus dure', value: 'Soirees d ete et pics de frequentation'},
        {label: 'Bon reflexe', value: 'Decider tot si la voiture vaut encore la peine'}
      ],
      sections: [
        {title: 'Pourquoi le parking devient vite difficile', paragraphs: ['Le harbour concentre beaucoup de flux a la fois : ferries, promenade, restaurants et arrivées diverses.', 'Le probleme n est donc pas seulement le nombre de places, mais aussi la pression du moment.']},
        {title: 'Quand la voiture peut encore avoir du sens', paragraphs: ['La voiture reste parfois logique avec des bagages, une arrivee tot ou une contrainte precise.', 'Mais quand la zone est deja tres chargee, changer tot de strategie peut etre plus efficace.']},
        {title: 'La bonne maniere de penser le parking', paragraphs: ['Le meilleur plan n est pas toujours de chercher la place parfaite.', 'Il s agit plutot de decider combien de friction vous acceptez pour atteindre le front de mer en voiture.']}
      ],
      faqs: [
        {question: 'Est il facile de se garer pres du port ?', answer: 'Cela peut rester faisable aux heures calmes, mais les soirees d ete sont souvent bien plus compliquees.'},
        {question: 'Faut il encore venir en voiture ?', answer: 'Parfois oui, surtout avec des bagages, mais beaucoup de visiteurs preferent changer de strategie aux heures chargees.'},
        {question: 'Quelle est l erreur la plus courante ?', answer: 'Penser qu il restera facile de trouver une place proche du waterfront pendant le pic d affluence.'}
      ],
      related: ['ibiza-port-to-airport', 'ibiza-ferry-port', 'ibiza-harbour-map'],
      primaryLink: {label: 'Evaluer la zone du harbour dans Google Maps', href: googleMapsHref},
      sourceNote: 'Cette page aide a fixer des attentes realistes sur le stationnement autour du harbour. La saison et l heure d arrivee changeront beaucoup l experience.',
      lastChecked: 'Octobre 2026'
    }
  },
  'zh-Hant': {
    'ibiza-port-to-dalt-vila': {
      title: 'Ibiza Port 到 Dalt Vila 指南',
      description: '整理從伊維薩港走到 Dalt Vila 的步行邏輯、實際感受與行程安排方式。',
      intro: '很多旅客一到港口就會想知道，從 Ibiza Port 到 Dalt Vila 到底要不要走、會不會太累、值不值得當第一個行程。答案通常是值得，而且這條線本身就是 Ibiza Harbour 最經典的城市體驗之一。',
      quickFacts: [
        {label: '適合誰', value: '第一次從港口前往老城的步行旅客'},
        {label: '主要內容', value: '步行邏輯、坡度與實際節奏'},
        {label: '起點', value: 'Ibiza Harbour / Port d\'Eivissa 港邊區域'},
        {label: '最好的理解方式', value: '先把它看成港邊散步，再加上一段老城上坡'}
      ],
      sections: [
        {title: '為什麼這是最經典的港口路線之一', paragraphs: ['對很多人來說，伊維薩最好的第一印象不是搭車衝景點，而是從港口一路走進 Dalt Vila。這條路把港景、城市氣氛與歷史核心自然串在一起。', '也因此，Ibiza Port to Dalt Vila 是非常重要的實際搜尋意圖。']},
        {title: '實際走起來會是什麼感覺', paragraphs: ['一開始沿著 waterfront 走通常很輕鬆，真正改變體感的是接近老城後的上坡。', '如果天氣熱、帶行李，或想走很快，最後那段會比地圖上看起來更累一些。'], bullets: ['港邊平路通常最好走。', '接近老城時坡度感會明顯提高。', '如果想拍照，放慢速度反而更適合。']},
        {title: '這條路怎麼安排最好', paragraphs: ['最穩的方式通常是先享受港邊步道，再往 Dalt Vila 城門前進，沿路看到好視角就停一下。', '如果之後還要回港口搭船，返程時間最好多抓一點。']}
      ],
      faqs: [
        {question: '可以從 Ibiza Port 直接走到 Dalt Vila 嗎？', answer: '可以，而且對很多旅客來說，這就是最自然也最值得的一條步行路線。'},
        {question: '這段路會很累嗎？', answer: '大多數人都能完成，但老城最後的上坡在炎熱天氣或有行李時會更有感。'},
        {question: '適合當作抵達港口後的第一個行程嗎？', answer: '很適合，因為它能最快把港口和伊維薩老城的核心體驗連起來。'}
      ],
      related: ['ibiza-harbour-map', 'ibiza-cruise-port', 'ibiza-port-to-airport'],
      primaryLink: {label: '在 Google Maps 打開港口起點', href: googleMapsHref},
      sourceNote: '這頁幫你理解從港口走到 Dalt Vila 的整體節奏。接近老城入口時，仍建議搭配現場城市標示使用。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-port-to-airport': {
      title: 'Ibiza Port 到機場指南',
      description: '整理從伊維薩港前往機場時最實用的移動思路，包括計程車、時間緩衝與轉乘風險。',
      intro: '搜尋 Ibiza Port to Airport 的人，通常不是在做悠閒研究，而是在保護一段實際轉乘。無論你是剛搭渡輪、剛下郵輪，還是逛完港區準備搭機，這一頁都是為了幫你把時間抓穩。',
      quickFacts: [
        {label: '適合誰', value: '需要從港區接續前往機場的旅客'},
        {label: '主要內容', value: '移動時間、計程車與緩衝規劃'},
        {label: '起點', value: 'Port d\'Eivissa / Ibiza Harbour 區域'},
        {label: '最重要原則', value: '把港區脫離時間也算進機場規劃'}
      ],
      sections: [
        {title: '為什麼這個轉乘主題很重要', paragraphs: ['這類搜尋背後通常有真實壓力，因為旅客不是只想知道路，而是想避免錯過飛機。', '所以這個主題最需要的是清楚、保守且可操作的規劃思路。']},
        {title: '計程車和其他方案怎麼選', paragraphs: ['對很多人來說，計程車仍然是從港口去機場最直接、最省心的方式，特別是有行李的時候。', '其他方案不是不能用，而是對時間誤差的容忍度更低。'], bullets: ['計程車通常是最穩的機場轉乘方式。', '公共交通可行，但不適合太趕的情況。', '旺季時，港區本身就值得多抓緩衝。']},
        {title: '時間應該怎麼抓比較安全', paragraphs: ['最實用的想法是分三層：先離開港區、再完成市內移動、最後保留機場報到與安檢時間。', '很多人低估的其實是第一層，也就是從熱鬧的港邊區域順利離開要花的時間。']}
      ],
      faqs: [
        {question: '從 Ibiza Port 到機場最簡單的方式是什麼？', answer: '對多數旅客來說，計程車通常是最簡單也最穩定的選擇。'},
        {question: '從港口出發需要額外緩衝嗎？', answer: '需要，因為港區本身有時就會消耗比預期更多時間。'},
        {question: '公共交通還值得考慮嗎？', answer: '可以考慮，但若你在保護航班，通常不如直接搭計程車安心。'}
      ],
      related: ['ibiza-port-parking', 'ibiza-ferry-port', 'ibiza-port-to-dalt-vila'],
      primaryLink: {label: '在出發前打開 Ibiza Harbour', href: googleMapsHref},
      sourceNote: '這頁幫你建立從港區前往機場的時間觀念。實際出發前仍應依交通、行李和航空公司要求調整。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-port-parking': {
      title: 'Ibiza Port 停車指南',
      description: '整理伊維薩港周邊停車時最容易遇到的問題，包括旺季壓力、開車值不值得以及更聰明的判斷方式。',
      intro: 'Ibiza Port parking 看起來像是在找停車位，其實多半是在問另一件事：到了某個時段，還值不值得把車直接開進港區。這頁就是幫你提早做這個判斷。',
      quickFacts: [
        {label: '適合誰', value: '打算自行開車前往港區的旅客'},
        {label: '主要內容', value: '停車壓力、時段差異與實際期待值'},
        {label: '最難時段', value: '夏季傍晚、夜間與高需求日'},
        {label: '最好做法', value: '提早決定是否繼續堅持把車開到 waterfront'}
      ],
      sections: [
        {title: '為什麼港邊停車容易變麻煩', paragraphs: ['Ibiza Harbour 本來就是伊維薩城最活躍的區域之一，所以停車問題不只是車位數量，也包括人流、餐飲需求、渡輪出發與傍晚散步人潮。', '也因為如此，同一區域在不同日子與不同時段，難度差異會很大。']},
        {title: '什麼情況下開車仍然合理', paragraphs: ['如果你到得早、行李多，或後面還有明確轉乘安排，開車仍然可能是對的。關鍵是別等到陷進港區車流後，才開始猶豫要不要改變策略。', '很多旅客其實在高峰時段改搭計程車或公共交通，整體體驗反而更好。'], bullets: ['早到通常比晚到更有機會。', '大件行李或家庭同行，開車仍可能值得。', '如果現場已經很擁擠，提早改策略往往更省時間。']},
        {title: '停車搜尋最有用的思考方式', paragraphs: ['最好的停車計畫，往往不是找到完美車位，而是先決定自己願意承受多少停車壓力。', '這種想法通常比在最熱門時段賭一個 waterfront 車位更實際。']}
      ],
      faqs: [
        {question: 'Ibiza Port 附近停車容易嗎？', answer: '安靜時段有機會，但夏季傍晚與熱門時段通常明顯更難。'},
        {question: '還值得直接開車去港口嗎？', answer: '有時值得，尤其是有行李或很早到時；但在高峰時段，很多人會改用其他方式進港區。'},
        {question: '最常見的停車判斷錯誤是什麼？', answer: '以為最擁擠的時段仍然能輕鬆找到靠近 waterfront 的方便車位。'}
      ],
      related: ['ibiza-port-to-airport', 'ibiza-ferry-port', 'ibiza-harbour-map'],
      primaryLink: {label: '用 Google Maps 先查看港區', href: googleMapsHref},
      sourceNote: '這頁的目的是幫你建立對港區停車的合理期待。實際體驗仍會受到時段、季節與當下需求影響。',
      lastChecked: '2026 年 10 月'
    }
  }
};

const tertiarySeoGuideContent: Partial<Record<SupportedLocale, Partial<Record<TertiarySeoGuideSlug, SeoGuidePageContent>>>> = {
  en: {
    'things-to-do-near-ibiza-port': {
      title: 'Things to Do Near Ibiza Port',
      description: 'Practical ideas for what to do near Ibiza Port, from Dalt Vila and harbour walks to easy food and beach add-ons.',
      intro: 'This page is for visitors who arrive at Ibiza Port and immediately want useful nearby ideas rather than generic island lists. The best plan near the harbour usually mixes one historic walk, one waterfront stop and one flexible option depending on time and energy.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors with a few hours near the harbour'},
        {label: 'Main focus', value: 'Walkable plans close to Port d\'Eivissa'},
        {label: 'Top anchor', value: 'Dalt Vila plus the harbour frontage'},
        {label: 'Best habit', value: 'Keep the plan compact instead of trying to cross the whole island'}
      ],
      sections: [
        {title: 'Start with the obvious high-value route', paragraphs: ['The most reliable first plan near Ibiza Port is still the harbour walk into Dalt Vila. It gives you views, atmosphere and the old town without demanding a long transfer.', 'That combination is hard to beat if your time is limited or if you are arriving by ferry or cruise.']},
        {title: 'What else fits well near the port', paragraphs: ['Harbour-front dining, an easy marina stroll and nearby viewpoints are usually the most practical add-ons. If you still have time after that, a short taxi hop to another nearby area can work better than overcommitting to a long island itinerary.', 'The best nearby activities are the ones that stay compatible with your return timing.']},
        {title: 'How to choose between culture, food and beach time', paragraphs: ['If this is your first visit, Dalt Vila usually wins. If you have already seen the old town, restaurants or an easy beach extension like Talamanca often make more sense.', 'The harbour works best when the plan stays realistic and locally focused.']}
      ],
      faqs: [
        {question: 'What is the best thing to do near Ibiza Port first?', answer: 'For many visitors, the best first move is the harbour walk toward Dalt Vila.'},
        {question: 'Can you do enough without leaving the port area?', answer: 'Yes. Harbour views, old-town access and food options already give most travellers a satisfying short visit.'},
        {question: 'Should you rush to a far beach?', answer: 'Usually not, unless you have plenty of time. Near-port plans are often better value when your schedule is limited.'}
      ],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-harbour-restaurants', 'ibiza-port-to-talamanca-beach'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-harbour-restaurants', 'ibiza-port-to-talamanca-beach'],
      primaryLink: {label: 'Open Ibiza Harbour in Google Maps', href: googleMapsHref},
      sourceNote: 'Use this page to build a short and realistic plan around the harbour, then adjust based on arrival time, weather and return transport.',
      lastChecked: 'October 2026'
    },
    'ibiza-harbour-restaurants': {
      title: 'Ibiza Harbour Restaurants Guide',
      description: 'Guide to Ibiza Harbour restaurants, including what the area is best for, when to eat and how to pair dining with a harbour walk.',
      intro: 'People searching for Ibiza Harbour restaurants usually want to know whether the waterfront is actually a good place to eat or just a place to pass through. In practice, it works best when dining is part of a broader harbour plan rather than the only reason you come.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors who want food with harbour atmosphere'},
        {label: 'Main focus', value: 'When to eat and how to combine dining with sightseeing'},
        {label: 'Best time', value: 'Late afternoon and evening for views and atmosphere'},
        {label: 'Planning tip', value: 'Pair dinner with a harbour walk or Dalt Vila visit'}
      ],
      sections: [
        {title: 'Why the harbour works well for dining', paragraphs: ['The harbour is not only practical for transport. It is also one of the easiest places to combine views, movement and food without overplanning.', 'That makes it a natural restaurant zone for visitors who want a simple and scenic stop near Ibiza Town.']},
        {title: 'What to expect from the area', paragraphs: ['The main strength of the harbour dining zone is atmosphere rather than one single must-book venue. Many visitors come for the broader setting: marina views, evening light and the feeling of staying close to the action.', 'It is best treated as a flexible dining district, not a single restaurant destination.']},
        {title: 'How to fit restaurants into a port itinerary', paragraphs: ['A good sequence is often harbour walk first, restaurant second, then an easy return or onward movement. That order reduces stress and lets you choose a place after you already understand the area.', 'If you only arrive for a meal and leave immediately, you miss much of the harbour value.']}
      ],
      faqs: [
        {question: 'Are Ibiza Harbour restaurants worth it?', answer: 'Yes, especially if you want atmosphere, views and an easy meal near the waterfront.'},
        {question: 'When is the best time to eat around the harbour?', answer: 'Late afternoon into evening is usually the most rewarding time for atmosphere and views.'},
        {question: 'Should restaurants be the whole plan?', answer: 'Usually they work best as part of a wider harbour walk or old-town visit.'}
      ],
      related: ['things-to-do-near-ibiza-port', 'ibiza-port-to-dalt-vila', 'ibiza-harbour-map'],
      thematicLinks: ['things-to-do-near-ibiza-port', 'ibiza-port-to-dalt-vila', 'ibiza-harbour-map'],
      primaryLink: {label: 'View the harbour dining area in Google Maps', href: googleMapsHref},
      sourceNote: 'This page helps visitors think about harbour dining as part of a broader route, not as a detached restaurant list.',
      lastChecked: 'October 2026'
    },
    'ibiza-port-to-talamanca-beach': {
      title: 'Ibiza Port to Talamanca Beach Guide',
      description: 'Guide to moving from Ibiza Port to Talamanca Beach, including when the extension makes sense and how it fits a harbour-based visit.',
      intro: 'Talamanca is one of the most natural beach extensions from the harbour side of Ibiza Town. This page helps visitors decide when it is worth adding Talamanca to a port-based plan and when it is smarter to stay closer to Dalt Vila and the waterfront.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors who want a harbour-plus-beach plan'},
        {label: 'Main focus', value: 'Easy extension logic from Port d\'Eivissa'},
        {label: 'Best use case', value: 'When you have time beyond the harbour and old town'},
        {label: 'Planning rule', value: 'Only add the beach if it does not break the rest of your timing'}
      ],
      sections: [
        {title: 'Why Talamanca is a common next step', paragraphs: ['Talamanca makes sense because it is close enough to feel like a practical extension rather than a full transfer. For visitors who have already seen the harbour or old town, it can add a softer beach-side contrast to the day.', 'That makes it one of the most natural third-batch long-tail topics for this site.']},
        {title: 'When it is worth adding to the plan', paragraphs: ['This extension works best when you are not rushing to a ferry, airport or cruise return. If time is tight, the harbour and Dalt Vila usually offer a stronger first visit than trying to fit a beach move on top.', 'Talamanca is best when it stays optional, not mandatory.']},
        {title: 'How it fits with harbour planning', paragraphs: ['A good harbour-based day can move from port orientation to Dalt Vila or food, then outward to Talamanca if energy and timing still allow. That order tends to work better than going to the beach first and leaving the harbour logic until later.', 'The harbour remains the planning anchor even when the beach is the add-on.']}
      ],
      faqs: [
        {question: 'Is Talamanca Beach a good extension from Ibiza Port?', answer: 'Yes, if you have time beyond the basic harbour and old-town plan.'},
        {question: 'Should you choose Talamanca before Dalt Vila?', answer: 'Usually no for a first visit. Dalt Vila and the harbour generally come first.'},
        {question: 'When should you skip the beach extension?', answer: 'Skip it when your return timing is tight or when the harbour itself is already enough for the day.'}
      ],
      related: ['things-to-do-near-ibiza-port', 'ibiza-harbour-map', 'ibiza-port-to-dalt-vila'],
      thematicLinks: ['things-to-do-near-ibiza-port', 'ibiza-harbour-map', 'ibiza-port-to-dalt-vila'],
      primaryLink: {label: 'Use Google Maps for the harbour starting area', href: googleMapsHref},
      sourceNote: 'Use this page to decide whether Talamanca is a realistic extension from the harbour, then confirm the day\'s timing before committing.',
      lastChecked: 'October 2026'
    }
  },
  es: {
    'things-to-do-near-ibiza-port': {
      title: 'Qué hacer cerca del puerto de Ibiza',
      description: 'Ideas prácticas sobre qué hacer cerca del puerto de Ibiza, desde Dalt Vila y el paseo marítimo hasta comida y extensiones sencillas.',
      intro: 'Esta página está pensada para quien llega al puerto y quiere ideas útiles de verdad cerca de Port d\'Eivissa, no una lista genérica de toda la isla. Lo que mejor funciona suele ser combinar un paseo histórico, algo de waterfront y una tercera opción flexible según tiempo y energía.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes con unas pocas horas cerca del puerto'}, {label: 'Enfoque principal', value: 'Planes caminables junto a Port d\'Eivissa'}, {label: 'Ancla principal', value: 'Dalt Vila y el frente portuario'}, {label: 'Mejor hábito', value: 'Mantener el plan compacto en vez de intentar cruzar toda la isla'}],
      sections: [{title: 'Empieza por la ruta con más valor', paragraphs: ['La combinación más segura cerca del puerto sigue siendo paseo portuario y subida a Dalt Vila. Ofrece vistas, ambiente y casco histórico sin exigir un traslado largo.', 'Si el tiempo es limitado, es difícil encontrar una primera actividad más equilibrada.']}, {title: 'Qué más encaja bien cerca del puerto', paragraphs: ['Comer junto al puerto, caminar por la zona de marinas y sumar un punto de vista cercano suelen ser los añadidos más prácticos. Si todavía te sobra tiempo, una extensión corta en taxi puede funcionar mejor que una excursión demasiado ambiciosa.', 'Los mejores planes son los que siguen siendo compatibles con tu horario de vuelta.']}, {title: 'Cómo elegir entre cultura, comida y playa', paragraphs: ['En una primera visita, Dalt Vila suele ganar. Si ya conoces el casco antiguo, entonces restaurantes o una extensión sencilla hacia Talamanca pueden tener más sentido.', 'El puerto funciona mejor cuando el plan sigue siendo realista y local.']}],
      faqs: [{question: 'Cuál es lo mejor que hacer cerca del puerto primero?', answer: 'Para muchos viajeros, lo mejor es empezar con el paseo del puerto hacia Dalt Vila.'}, {question: 'Se puede hacer bastante sin salir del área del puerto?', answer: 'Sí. Entre vistas, casco antiguo y comida, el entorno portuario ya da mucho juego.'}, {question: 'Conviene correr a una playa lejana?', answer: 'Normalmente no, salvo que tengas mucho tiempo. Los planes cercanos al puerto suelen rendir mejor si vas justo.'}],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-harbour-restaurants', 'ibiza-port-to-talamanca-beach'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-harbour-restaurants', 'ibiza-port-to-talamanca-beach'],
      primaryLink: {label: 'Abrir Ibiza Harbour en Google Maps', href: googleMapsHref},
      sourceNote: 'Usa esta página para montar un plan breve y realista alrededor del puerto, y después ajústalo según la hora de llegada, el tiempo y tu transporte de vuelta.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-harbour-restaurants': {
      title: 'Guía de restaurantes en Ibiza Harbour',
      description: 'Guía sobre restaurantes en Ibiza Harbour, qué esperar de la zona y cómo encajar una comida dentro de un plan portuario.',
      intro: 'Quien busca Ibiza Harbour restaurants suele querer saber si merece la pena comer junto al puerto o si es solo una zona de paso. En la práctica funciona mejor cuando la comida forma parte de un recorrido más amplio por el harbour.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes que buscan comer con ambiente portuario'}, {label: 'Enfoque principal', value: 'Cuándo comer y cómo combinar la comida con la visita'}, {label: 'Mejor momento', value: 'Últimas horas de la tarde y la noche por ambiente y vistas'}, {label: 'Consejo', value: 'Combinar la comida con paseo portuario o Dalt Vila'}],
      sections: [{title: 'Por qué el puerto funciona bien para comer', paragraphs: ['El harbour no solo sirve para moverse. También es una de las zonas más fáciles para combinar vistas, paseo y comida sin demasiada complicación.', 'Por eso es una base natural para quien quiere una parada sencilla y con ambiente cerca de Ibiza ciudad.']}, {title: 'Qué esperar realmente de la zona', paragraphs: ['La gran fortaleza del área no suele ser un único restaurante imprescindible, sino el conjunto: marinas, luz de tarde y sensación de seguir cerca de la actividad.', 'Conviene pensarla como un distrito flexible para comer, no como una dirección única.']}, {title: 'Cómo encajar restaurantes dentro del itinerario', paragraphs: ['Muchas veces funciona mejor hacer primero el paseo por el harbour y dejar la comida para después. Así eliges con más criterio y sin presión.', 'Si solo vienes a cenar y te vas enseguida, pierdes bastante del valor del puerto.']}],
      faqs: [{question: 'Merecen la pena los restaurantes del harbour?', answer: 'Sí, sobre todo si buscas ambiente, vistas y una comida cómoda cerca del agua.'}, {question: 'Cuál es el mejor momento para comer por esta zona?', answer: 'Desde el final de la tarde hasta la noche suele ser el tramo más agradecido por ambiente y vistas.'}, {question: 'Deben ser el único plan?', answer: 'Normalmente funcionan mejor como parte de una visita más amplia al puerto o al casco antiguo.'}],
      related: ['things-to-do-near-ibiza-port', 'ibiza-port-to-dalt-vila', 'ibiza-harbour-map'],
      thematicLinks: ['things-to-do-near-ibiza-port', 'ibiza-port-to-dalt-vila', 'ibiza-harbour-map'],
      primaryLink: {label: 'Ver la zona de restaurantes del harbour en Google Maps', href: googleMapsHref},
      sourceNote: 'Esta página ayuda a pensar la comida en el harbour como parte de una ruta más amplia, no como una lista aislada de restaurantes.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-port-to-talamanca-beach': {
      title: 'Guía de Ibiza Port a Talamanca Beach',
      description: 'Guía para entender cuándo merece la pena sumar Talamanca Beach a un plan basado en el puerto de Ibiza.',
      intro: 'Talamanca es una de las extensiones de playa más naturales desde el lado portuario de Ibiza ciudad. Esta página ayuda a decidir cuándo tiene sentido añadirla a un plan desde el harbour y cuándo es mejor quedarse entre Dalt Vila y el waterfront.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes que quieren combinar puerto y playa'}, {label: 'Enfoque principal', value: 'Lógica de extensión fácil desde Port d\'Eivissa'}, {label: 'Mejor uso', value: 'Cuando te sobra tiempo después del puerto y el casco antiguo'}, {label: 'Regla útil', value: 'Solo añadir la playa si no rompe el resto del horario'}],
      sections: [{title: 'Por qué Talamanca aparece tan a menudo', paragraphs: ['Talamanca tiene sentido porque está lo bastante cerca como para sentirse una extensión lógica y no un traslado largo. Para quien ya ha visto el harbour o Dalt Vila, puede aportar un contraste más relajado.', 'Eso la convierte en una de las extensiones de playa más naturales desde el puerto.']}, {title: 'Cuándo merece la pena añadirla', paragraphs: ['Funciona mejor si no vas justo para un ferri, un vuelo o una vuelta al crucero. Si el tiempo aprieta, el harbour y Dalt Vila suelen dar una primera visita más potente.', 'Talamanca funciona mejor como opción añadida, no como obligación.']}, {title: 'Cómo encaja dentro de un día basado en el puerto', paragraphs: ['Un buen día puede empezar con orientación en el puerto, seguir con Dalt Vila o una comida, y solo después abrirse hacia Talamanca si aún hay tiempo y energía.', 'Incluso cuando la playa entra en el plan, el puerto sigue siendo el ancla principal.']}],
      faqs: [{question: 'Es buena idea añadir Talamanca Beach desde el puerto?', answer: 'Sí, siempre que tengas tiempo más allá del plan básico de harbour y casco antiguo.'}, {question: 'Conviene elegir Talamanca antes que Dalt Vila?', answer: 'En una primera visita, normalmente no. El puerto y Dalt Vila suelen ir antes.'}, {question: 'Cuándo mejor no añadir la playa?', answer: 'Cuando tu horario de vuelta es ajustado o cuando el propio puerto ya llena bien el día.'}],
      related: ['things-to-do-near-ibiza-port', 'ibiza-harbour-map', 'ibiza-port-to-dalt-vila'],
      thematicLinks: ['things-to-do-near-ibiza-port', 'ibiza-harbour-map', 'ibiza-port-to-dalt-vila'],
      primaryLink: {label: 'Usar Google Maps para el punto de partida en el puerto', href: googleMapsHref},
      sourceNote: 'Esta página sirve para decidir si Talamanca es una extensión realista desde el harbour antes de comprometer el resto del día.',
      lastChecked: 'Octubre 2026'
    }
  },
  fr: {
    'things-to-do-near-ibiza-port': {
      title: 'Que faire pres du port d Ibiza',
      description: 'Idees pratiques a faire pres du port d Ibiza, entre Dalt Vila, promenade portuaire, repas et extensions simples.',
      intro: 'Cette page aide les visiteurs qui arrivent au port et veulent des idees vraiment utiles a proximite. Le meilleur plan melange souvent vieille ville, front de mer et une troisieme option souple selon le temps disponible.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs avec quelques heures pres du harbour'}, {label: 'Sujet principal', value: 'Plans faciles autour de Port d Eivissa'}, {label: 'Ancrage principal', value: 'Dalt Vila et le front portuaire'}, {label: 'Bon reflexe', value: 'Garder le programme compact plutot que trop ambitieux'}],
      sections: [{title: 'Commencer par la valeur sure', paragraphs: ['La combinaison la plus efficace reste souvent promenade du harbour puis montee vers Dalt Vila.', 'Elle donne vues, ambiance et centre historique sans long transfer.']}, {title: 'Ce qui fonctionne aussi tres bien', paragraphs: ['Manger pres du port, longer les marinas ou ajouter un point de vue proche sont des extensions simples et utiles.', 'Si vous avez encore du temps, une courte extension peut marcher mieux qu un programme trop large.']}, {title: 'Culture, repas ou plage ?', paragraphs: ['Pour une premiere visite, Dalt Vila reste souvent le meilleur choix.', 'Si vous connaissez deja la vieille ville, les restaurants du harbour ou Talamanca peuvent prendre le relais.']}],
      faqs: [{question: 'Quelle est la meilleure premiere activite pres du port ?', answer: 'Pour beaucoup de visiteurs, la meilleure premiere option reste la marche du harbour vers Dalt Vila.'}, {question: 'Peut on faire assez sans quitter le secteur du port ?', answer: 'Oui. Vues, vieille ville et restauration donnent deja une visite tres correcte.'}, {question: 'Faut il viser une plage lointaine tout de suite ?', answer: 'En general non, sauf avec beaucoup de temps. Les plans proches du port ont souvent plus de valeur.'}],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-harbour-restaurants', 'ibiza-port-to-talamanca-beach'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-harbour-restaurants', 'ibiza-port-to-talamanca-beach'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour dans Google Maps', href: googleMapsHref},
      sourceNote: 'Utilisez cette page pour construire un plan court et realiste autour du harbour, puis ajustez selon l heure d arrivee et le retour.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-harbour-restaurants': {
      title: 'Guide des restaurants d Ibiza Harbour',
      description: 'Guide pour comprendre l interet des restaurants du harbour et la meilleure facon de les integrer a une visite du port.',
      intro: 'Les recherches sur les restaurants du harbour demandent souvent si le front de mer vaut le repas ou seulement la promenade. En pratique, la restauration marche mieux comme partie d une visite plus large du port.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs qui veulent manger avec atmosphere portuaire'}, {label: 'Sujet principal', value: 'Quand manger et comment integrer le repas au parcours'}, {label: 'Meilleur moment', value: 'Fin d apres midi et soiree'}, {label: 'Conseil', value: 'Associer le repas a une marche ou a Dalt Vila'}],
      sections: [{title: 'Pourquoi le harbour fonctionne bien pour manger', paragraphs: ['Le harbour ne sert pas seulement au transport. C est aussi un secteur facile pour combiner vues, promenade et repas.', 'Il constitue donc une base naturelle pour une pause simple et agreable pres d Ibiza Town.']}, {title: 'Ce qu il faut attendre de la zone', paragraphs: ['La force principale du secteur n est pas toujours un restaurant unique, mais plutot l ensemble : marinas, lumiere du soir et animation.', 'Il faut le penser comme un quartier de restauration flexible.']}, {title: 'Comment integrer un repas au plan du port', paragraphs: ['Souvent, il vaut mieux marcher d abord puis choisir un restaurant ensuite.', 'Cette logique permet de garder le repas comme prolongement naturel de la visite.']}],
      faqs: [{question: 'Les restaurants du harbour valent ils le coup ?', answer: 'Oui, surtout si vous cherchez ambiance, vues et repas facile pres de l eau.'}, {question: 'Quel est le meilleur moment ?', answer: 'La fin d apres midi et la soiree donnent souvent la meilleure atmosphere.'}, {question: 'Le repas doit il etre le seul plan ?', answer: 'En general non. Il fonctionne mieux avec une promenade du harbour ou une visite de Dalt Vila.'}],
      related: ['things-to-do-near-ibiza-port', 'ibiza-port-to-dalt-vila', 'ibiza-harbour-map'],
      thematicLinks: ['things-to-do-near-ibiza-port', 'ibiza-port-to-dalt-vila', 'ibiza-harbour-map'],
      primaryLink: {label: 'Voir la zone de restauration du harbour dans Google Maps', href: googleMapsHref},
      sourceNote: 'Cette page aide a penser les restaurants du harbour comme une partie d un parcours plus large.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-port-to-talamanca-beach': {
      title: 'Guide du port vers Talamanca Beach',
      description: 'Guide pour savoir quand Talamanca Beach merite d etre ajoutee a une visite basee sur le port d Ibiza.',
      intro: 'Talamanca est l une des extensions de plage les plus naturelles depuis le cote portuaire d Ibiza Town. Cette page aide a savoir quand cela vaut la peine et quand il faut rester centre sur le harbour et Dalt Vila.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs voulant combiner port et plage'}, {label: 'Sujet principal', value: 'Extension simple depuis Port d Eivissa'}, {label: 'Meilleur usage', value: 'Quand il reste du temps apres le harbour et la vieille ville'}, {label: 'Regle utile', value: 'N ajouter la plage que si le reste du planning tient encore'}],
      sections: [{title: 'Pourquoi Talamanca revient souvent', paragraphs: ['Talamanca est assez proche pour ressembler a une vraie extension logique plutot qu a un long deplacement.', 'Pour les visiteurs ayant deja profite du harbour ou de Dalt Vila, cela peut apporter une bonne variation.']}, {title: 'Quand cela vaut vraiment la peine', paragraphs: ['L extension fonctionne mieux si vous n etes pas serre par un ferry, un vol ou un retour de croisiere.', 'Si le temps est limite, le harbour et Dalt Vila restent generalement prioritaires.']}, {title: 'Comment l integrer a une journee du port', paragraphs: ['Une bonne sequence consiste a commencer par le harbour, puis Dalt Vila ou un repas, puis seulement ensuite envisager Talamanca.', 'Le port reste l ancre principale, meme quand la plage entre dans le programme.']}],
      faqs: [{question: 'Talamanca est elle une bonne extension depuis le port ?', answer: 'Oui, si vous avez du temps au-dela du plan de base harbour plus vieille ville.'}, {question: 'Faut il choisir Talamanca avant Dalt Vila ?', answer: 'En general non pour une premiere visite.'}, {question: 'Quand faut il renoncer a la plage ?', answer: 'Quand le retour est serre ou que le port suffit deja a remplir la journee.'}],
      related: ['things-to-do-near-ibiza-port', 'ibiza-harbour-map', 'ibiza-port-to-dalt-vila'],
      thematicLinks: ['things-to-do-near-ibiza-port', 'ibiza-harbour-map', 'ibiza-port-to-dalt-vila'],
      primaryLink: {label: 'Utiliser Google Maps pour le point de depart du port', href: googleMapsHref},
      sourceNote: 'Cette page aide a decider si Talamanca est une extension realiste depuis le harbour avant de reorganiser toute la journee.',
      lastChecked: 'Octobre 2026'
    }
  },
  'zh-Hant': {
    'things-to-do-near-ibiza-port': {
      title: 'Ibiza Port 附近可以做什麼',
      description: '整理伊維薩港附近最值得排進去的活動，包括 Dalt Vila、港邊散步、餐廳與簡單延伸行程。',
      intro: '這頁是給剛到港口、想立刻知道附近能做什麼的人。最好的安排通常不是塞很多點，而是把港邊、老城和一個額外選項自然接起來。',
      quickFacts: [{label: '適合誰', value: '只在港區附近停留幾小時的旅客'}, {label: '主要內容', value: 'Port d\'Eivissa 周邊可步行安排'}, {label: '核心主題', value: 'Dalt Vila 與 harbour waterfront'}, {label: '最好原則', value: '行程保持集中，比跨整座島更有效'}],
      sections: [{title: '先做最穩的高價值路線', paragraphs: ['對多數人來說，最值得先做的還是港邊步道接 Dalt Vila。這條線同時有景、有人氣，也有老城內容。', '如果時間有限，這通常比任何更遠的安排都穩。']}, {title: '還有哪些事適合排在港口附近', paragraphs: ['在港邊吃飯、沿 marina 散步，或補一個附近視角，通常都是最實用的延伸。', '如果還有多餘時間，再考慮短距離外擴會比一開始就排太遠更合理。']}, {title: '文化、吃飯還是海邊怎麼選', paragraphs: ['第一次來多半還是先選 Dalt Vila。若老城已經看過，餐廳或 Talamanca 這種簡單海邊延伸就更有吸引力。', '港區最適合的，是務實而不過度貪心的安排。']}],
      faqs: [{question: 'Ibiza Port 附近第一個最值得做的是什麼？', answer: '對很多旅客來說，最值得先做的是從港口一路走向 Dalt Vila。'}, {question: '不離開港區附近也夠玩嗎？', answer: '夠。港景、老城與餐廳就已經能組成很完整的短行程。'}, {question: '需要馬上衝比較遠的海灘嗎？', answer: '通常不用，除非你真的有很多時間。港口附近的安排往往更划算。'}],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-harbour-restaurants', 'ibiza-port-to-talamanca-beach'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-harbour-restaurants', 'ibiza-port-to-talamanca-beach'],
      primaryLink: {label: '在 Google Maps 打開 Ibiza Harbour', href: googleMapsHref},
      sourceNote: '這頁幫你用最務實的方式安排港區附近行程，再依抵達時間、天氣與回程需求微調。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-harbour-restaurants': {
      title: 'Ibiza Harbour 餐廳指南',
      description: '整理伊維薩港邊餐廳區最值得知道的重點，包括用餐時段、區域特色與如何和港區行程搭配。',
      intro: '搜尋 Ibiza Harbour restaurants 的人，通常想知道港邊到底值不值得特地吃一餐。實際上，這區最適合的方式是把用餐放進整體 harbour 行程，而不是把它當成孤立目的地。',
      quickFacts: [{label: '適合誰', value: '想在港邊找氣氛和景觀的旅客'}, {label: '主要內容', value: '什麼時候吃、怎麼和行程結合'}, {label: '最佳時段', value: '傍晚到晚上，景色和氣氛通常最好'}, {label: '實用建議', value: '把用餐安排在港邊散步或 Dalt Vila 之後'}],
      sections: [{title: '為什麼港邊適合吃飯', paragraphs: ['Ibiza Harbour 不只是交通節點，也是很容易把景色、散步與用餐結合起來的區域。', '對想輕鬆安排一餐的人來說，它是很自然的選項。']}, {title: '這一帶真正的吸引力是什麼', paragraphs: ['港邊餐廳區最大的價值，通常不是單一名店，而是整體氛圍：marina、傍晚光線和 waterfront 的活動感。', '更適合把它看成一個可彈性選擇的用餐區，而不是只衝某一家。']}, {title: '怎麼把餐廳安排進港區路線', paragraphs: ['很多時候先走港邊、再決定去哪裡吃，會比一開始就為了吃飯直衝某一點更從容。', '這樣也更容易讓用餐自然變成港區體驗的一部分。']}],
      faqs: [{question: 'Ibiza Harbour 的餐廳值得吃嗎？', answer: '值得，特別是如果你想結合港景、氣氛和方便性。'}, {question: '什麼時段最適合在港邊吃飯？', answer: '傍晚到晚上通常最有氣氛，也最能感受到 waterfront 的價值。'}, {question: '餐廳應該是唯一的安排嗎？', answer: '通常不建議，和港邊散步或 Dalt Vila 搭在一起會更完整。'}],
      related: ['things-to-do-near-ibiza-port', 'ibiza-port-to-dalt-vila', 'ibiza-harbour-map'],
      thematicLinks: ['things-to-do-near-ibiza-port', 'ibiza-port-to-dalt-vila', 'ibiza-harbour-map'],
      primaryLink: {label: '在 Google Maps 查看港邊用餐區', href: googleMapsHref},
      sourceNote: '這頁的目的，是把港邊吃飯放進更完整的 harbour 使用情境裡，而不是只做餐廳名單。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-port-to-talamanca-beach': {
      title: 'Ibiza Port 到 Talamanca Beach 指南',
      description: '整理何時值得從伊維薩港延伸到 Talamanca Beach，以及它如何融入以港區為核心的一天。',
      intro: 'Talamanca 是從 Ibiza Town 港邊最自然的海灘延伸之一。這頁重點不是單看地圖距離，而是幫你判斷：什麼時候加上這段海邊值得，什麼時候其實港區和 Dalt Vila 就夠了。',
      quickFacts: [{label: '適合誰', value: '想把港口和海灘排在同一天的旅客'}, {label: '主要內容', value: '從 Port d\'Eivissa 延伸到海邊的判斷邏輯'}, {label: '最適合的情況', value: '看完港區和老城後還有餘裕'}, {label: '最好規則', value: '只有在不破壞整體時間安排時才加上 beach'}],
      sections: [{title: '為什麼很多人會想到 Talamanca', paragraphs: ['因為它夠近，近到可以被視為港區的自然延伸，而不是另一趟大型移動。', '對已經看過港邊或 Dalt Vila 的人來說，Talamanca 能帶來更放鬆的海邊對比。']}, {title: '什麼時候值得加進去', paragraphs: ['如果你沒有趕渡輪、趕機場或趕回郵輪，這個延伸通常才會比較舒服。', '若時間很緊，港區和 Dalt Vila 往往還是第一優先。']}, {title: '怎麼放進一天的港口行程', paragraphs: ['比較順的做法，通常是先完成港區定位，再去 Dalt Vila 或用餐，最後才看情況延伸到 Talamanca。', '即使去了海邊，港口仍然是整天的主軸。']}],
      faqs: [{question: '從 Ibiza Port 延伸去 Talamanca Beach 值得嗎？', answer: '如果你在港區和老城之外還有時間，通常值得。'}, {question: '第一次來應該先去 Talamanca 還是先看 Dalt Vila？', answer: '通常還是先看港口和 Dalt Vila，之後再考慮海邊。'}, {question: '什麼情況下不建議加這段海灘？', answer: '當你的回程很趕，或港區本身已經足夠填滿當天行程時。'}],
      related: ['things-to-do-near-ibiza-port', 'ibiza-harbour-map', 'ibiza-port-to-dalt-vila'],
      thematicLinks: ['things-to-do-near-ibiza-port', 'ibiza-harbour-map', 'ibiza-port-to-dalt-vila'],
      primaryLink: {label: '在 Google Maps 查看港口出發點', href: googleMapsHref},
      sourceNote: '這頁幫你判斷 Talamanca 是否真的是從 harbour 出發的合理延伸，再決定要不要加進一天的安排。',
      lastChecked: '2026 年 10 月'
    }
  }
};

const quaternarySeoGuideContent: Partial<Record<SupportedLocale, Partial<Record<QuaternarySeoGuideSlug, SeoGuidePageContent>>>> = {
  en: {
    'ibiza-port-taxi': {
      title: 'Ibiza Port Taxi Guide',
      description: 'Guide to using taxis at Ibiza Port, including when they make the most sense and how they fit ferry, cruise and airport planning.',
      intro: 'Taxi searches around Ibiza Port usually come from travellers who want the lowest-friction option. This page helps you think about when a taxi is actually the smartest move from the harbour, and when a walk or slower plan may still be enough.',
      quickFacts: [
        {label: 'Best for', value: 'Travellers who want the simplest harbour transfer option'},
        {label: 'Main focus', value: 'Taxi use cases, timing and planning logic'},
        {label: 'Works best for', value: 'Airport runs, hot-weather movement and tight schedules'},
        {label: 'Planning habit', value: 'Decide early whether speed matters more than a scenic walk'}
      ],
      sections: [
        {title: 'Why taxis matter so much around the port', paragraphs: ['The harbour is walkable, but not every visitor wants to spend time figuring out the layout or carrying luggage through a busy waterfront area. That is why taxi intent is so strong around Ibiza Port.', 'A taxi often becomes the most practical choice when heat, time pressure or onward travel matter more than the experience of walking.']},
        {title: 'When a taxi is the smart choice', paragraphs: ['Airport connections, late arrivals, heavy bags and short cruise stops are the clearest cases where taxis make sense. In these situations, simplicity usually matters more than trying to optimise every euro or every minute.', 'The value of the taxi is not only speed. It is also reduced decision-making when the port feels busy.']},
        {title: 'When you may not need one', paragraphs: ['If you are only moving between the harbour frontage and Dalt Vila, a walk is often part of the experience and may be more enjoyable than a short ride.', 'Taxis are most useful when they protect time, energy or a connection.']}
      ],
      faqs: [
        {question: 'Are taxis useful at Ibiza Port?', answer: 'Yes, especially for airport transfers, luggage-heavy trips and short schedules.'},
        {question: 'Should you take a taxi to Dalt Vila?', answer: 'Not always. Many visitors prefer to walk when the goal is simply to enjoy the harbour and old town.'},
        {question: 'When is a taxi clearly worth it?', answer: 'It is usually worth it when you are protecting a flight, arriving in high heat or carrying bags through the port.'}
      ],
      related: ['ibiza-port-to-airport', 'ibiza-port-parking', 'where-to-stay-near-ibiza-port'],
      thematicLinks: ['ibiza-port-to-airport', 'ibiza-port-parking', 'where-to-stay-near-ibiza-port'],
      primaryLink: {label: 'Open Ibiza Harbour for taxi planning', href: googleMapsHref},
      sourceNote: 'Use this guide to decide whether a taxi helps your harbour plan, then adapt the final choice to luggage, weather and timing.',
      lastChecked: 'October 2026'
    },
    'ibiza-port-walking-route': {
      title: 'Ibiza Port Walking Route Guide',
      description: 'Practical walking-route guide for Ibiza Port, including the best first walk, old-town direction and how to keep the route simple.',
      intro: 'Many visitors do not need transport at all once they reach the harbour. They just need to know which walking route gives them the highest value without confusion. This page focuses on that first-port walk logic.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors exploring the harbour mostly on foot'},
        {label: 'Main focus', value: 'Simple route logic from the waterfront'},
        {label: 'Best first route', value: 'Harbour frontage into Dalt Vila'},
        {label: 'Best mindset', value: 'Keep the walk scenic and compact'}
      ],
      sections: [
        {title: 'The best first walking route from the port', paragraphs: ['For many first-time visitors, the most valuable walking route is still the movement from the waterfront toward Dalt Vila. It captures the two strongest elements of the area in one line: port atmosphere and historic elevation.', 'That is why walking-route intent overlaps so strongly with harbour map and Dalt Vila searches.']},
        {title: 'How to keep the route from feeling messy', paragraphs: ['The harbour becomes easiest when you stop trying to see everything at once. Pick one clear route, follow it, then allow only one optional extension such as restaurants or Talamanca if time remains.', 'This is usually better than turning the walk into a loop of disconnected stops.']},
        {title: 'When walking is better than taking a taxi', paragraphs: ['Walking usually wins when your time is not too tight and the route itself is part of the visit. The harbour is one of the few places where orientation and sightseeing naturally happen together.', 'Only switch away from walking when heat, luggage or schedule pressure make it less enjoyable.']}
      ],
      faqs: [
        {question: 'What is the best walking route from Ibiza Port?', answer: 'For many visitors, the strongest first route is the harbour frontage leading toward Dalt Vila.'},
        {question: 'Should you try to cover everything on foot?', answer: 'Usually no. A compact route with one optional extension tends to work better.'},
        {question: 'When is walking better than a taxi?', answer: 'Walking is often better when the route itself is part of the experience and your schedule is not under pressure.'}
      ],
      related: ['ibiza-port-to-old-town', 'ibiza-harbour-map', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['ibiza-port-to-old-town', 'ibiza-harbour-map', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: 'View the harbour route start in Google Maps', href: googleMapsHref},
      sourceNote: 'This guide focuses on the most useful harbour walking logic rather than trying to document every possible turn in the area.',
      lastChecked: 'October 2026'
    },
    'where-to-stay-near-ibiza-port': {
      title: 'Where to Stay Near Ibiza Port',
      description: 'Guide to deciding where to stay near Ibiza Port, including who benefits most from the harbour area and when another base may suit better.',
      intro: 'People searching where to stay near Ibiza Port are often deciding between convenience and atmosphere. The harbour area can be an excellent base, but it works best for certain styles of trip more than others.',
      quickFacts: [
        {label: 'Best for', value: 'Travellers who value walkability, ferries and old-town access'},
        {label: 'Main focus', value: 'Base selection around the harbour'},
        {label: 'Strongest advantage', value: 'Transport convenience plus nightlife-adjacent atmosphere'},
        {label: 'Best question', value: 'Do you want the harbour to be your daily anchor?'}
      ],
      sections: [
        {title: 'Who should stay near the port', paragraphs: ['The harbour area works especially well for visitors who want to move on foot, catch ferries, eat by the waterfront and keep Dalt Vila close. It is one of the easiest bases if the trip revolves around Ibiza Town and practical movement.', 'That makes it a strong choice for short stays and first visits.']},
        {title: 'When another area may fit better', paragraphs: ['If the trip is built around quieter beach time, resort life or staying away from the busiest evening atmosphere, a different base may feel more comfortable.', 'The harbour is attractive because it is active, but that same energy is not ideal for every traveller.']},
        {title: 'How to think about the harbour as a base', paragraphs: ['The best way to evaluate the area is to ask whether you want the port to be your daily starting point. If the answer is yes, the convenience can outweigh a lot of trade-offs.', 'If not, the harbour may be better as a visit than as your overnight base.']}
      ],
      faqs: [
        {question: 'Is Ibiza Port a good area to stay?', answer: 'Yes, especially for visitors who want walkability, ferries, dining and quick old-town access.'},
        {question: 'Who benefits most from staying near the harbour?', answer: 'Short-stay visitors and first-time travellers often benefit the most.'},
        {question: 'When should you pick somewhere else?', answer: 'Choose another area if you want a quieter stay centred more on beaches or resort-style relaxation.'}
      ],
      related: ['ibiza-harbour-restaurants', 'ibiza-ferry-port', 'ibiza-port-taxi'],
      thematicLinks: ['ibiza-harbour-restaurants', 'ibiza-ferry-port', 'ibiza-port-taxi'],
      primaryLink: {label: 'Check Ibiza Harbour as a trip base on Google Maps', href: googleMapsHref},
      sourceNote: 'Use this page to decide if the harbour matches your trip style, then compare it with the mood and logistics you want each day.',
      lastChecked: 'October 2026'
    }
  },
  es: {
    'ibiza-port-taxi': {
      title: 'Guía de taxi en Ibiza Port',
      description: 'Guía para entender cuándo conviene usar taxi en el puerto de Ibiza y cómo encaja con ferris, aeropuerto y escalas cortas.',
      intro: 'Las búsquedas sobre taxi en Ibiza Port suelen venir de viajeros que quieren la opción con menos fricción. Esta página ayuda a pensar cuándo un taxi es realmente la mejor decisión desde el puerto y cuándo sigue compensando caminar.',
      quickFacts: [{label: 'Ideal para', value: 'Viajeros que quieren la salida más simple desde el puerto'}, {label: 'Enfoque principal', value: 'Casos de uso, tiempos y lógica práctica del taxi'}, {label: 'Mejor encaje', value: 'Aeropuerto, calor, equipaje y horarios apretados'}, {label: 'Hábito útil', value: 'Decidir pronto si pesa más la rapidez que el paseo'}],
      sections: [{title: 'Por qué el taxi importa tanto en el puerto', paragraphs: ['El harbour se puede caminar, pero no todo el mundo quiere orientarse con maletas o moverse por un frente marítimo activo cuando llega con prisa. Por eso la intención taxi es tan fuerte alrededor de Ibiza Port.', 'Muchas veces el taxi no solo ahorra tiempo: también reduce decisiones cuando el puerto se siente lleno.']}, {title: 'Cuándo sí es la mejor opción', paragraphs: ['Aeropuerto, llegadas tardías, equipaje pesado y escalas cortas son los casos más claros en los que el taxi compensa.', 'En esas situaciones, la simplicidad suele importar más que apurar cada euro o intentar optimizar todo a pie.']}, {title: 'Cuándo quizá no te hace falta', paragraphs: ['Si solo quieres moverte entre el waterfront y Dalt Vila, caminar suele formar parte de la experiencia.', 'El taxi es más útil cuando protege energía, tiempo o una conexión.']}],
      faqs: [{question: 'Vale la pena usar taxi en Ibiza Port?', answer: 'Sí, sobre todo para aeropuerto, equipaje pesado y horarios cortos.'}, {question: 'Conviene tomar taxi para ir a Dalt Vila?', answer: 'No siempre. Mucha gente prefiere caminar cuando el objetivo es disfrutar del puerto y el casco antiguo.'}, {question: 'Cuándo está claramente justificado?', answer: 'Cuando proteges un vuelo, llegas con mucho calor o llevas equipaje por el puerto.'}],
      related: ['ibiza-port-to-airport', 'ibiza-port-parking', 'where-to-stay-near-ibiza-port'],
      thematicLinks: ['ibiza-port-to-airport', 'ibiza-port-parking', 'where-to-stay-near-ibiza-port'],
      primaryLink: {label: 'Abrir Ibiza Harbour para planificar taxi', href: googleMapsHref},
      sourceNote: 'Usa esta guía para decidir si un taxi mejora tu plan de puerto y ajusta la decisión final según calor, equipaje y tiempo.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-port-walking-route': {
      title: 'Guía de ruta a pie en Ibiza Port',
      description: 'Guía práctica sobre la mejor ruta a pie desde el puerto de Ibiza, con foco en Dalt Vila, waterfront y cómo no complicar el recorrido.',
      intro: 'Muchos visitantes no necesitan transporte al llegar al puerto. Solo necesitan saber qué paseo ofrece más valor sin volverse confuso. Esta página está centrada en esa lógica de primer recorrido.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes que van a explorar el harbour caminando'}, {label: 'Enfoque principal', value: 'Ruta simple desde el waterfront'}, {label: 'Mejor primer recorrido', value: 'Frente portuario hacia Dalt Vila'}, {label: 'Mentalidad útil', value: 'Mantener el paseo escénico y compacto'}],
      sections: [{title: 'La mejor primera ruta a pie desde el puerto', paragraphs: ['Para muchos viajeros, la ruta a pie con más valor sigue siendo la que une el waterfront con Dalt Vila. En una sola línea junta puerto, vistas e historia.', 'Por eso esta búsqueda se solapa tanto con harbour map y con la subida al casco antiguo.']}, {title: 'Cómo evitar que el paseo se vuelva caótico', paragraphs: ['El puerto se entiende mejor cuando no intentas abarcarlo todo a la vez. Elige una ruta clara y como mucho una extensión opcional, por ejemplo restaurantes o Talamanca si sobra tiempo.', 'Eso suele funcionar mejor que convertir el paseo en una suma de paradas desconectadas.']}, {title: 'Cuándo caminar es mejor que tomar taxi', paragraphs: ['Caminar suele ganar cuando no vas justo y cuando el recorrido en sí forma parte de la visita.', 'Solo deja de compensar cuando el calor, el equipaje o la presión de tiempo te quitan disfrute.']}],
      faqs: [{question: 'Cuál es la mejor ruta a pie desde Ibiza Port?', answer: 'Para mucha gente, la ruta más fuerte es el frente portuario hacia Dalt Vila.'}, {question: 'Conviene intentar verlo todo andando?', answer: 'Normalmente no. Una ruta compacta con una sola extensión opcional suele funcionar mejor.'}, {question: 'Cuándo caminar gana frente al taxi?', answer: 'Cuando el propio recorrido forma parte de la experiencia y no vas con el tiempo encima.'}],
      related: ['ibiza-port-to-old-town', 'ibiza-harbour-map', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['ibiza-port-to-old-town', 'ibiza-harbour-map', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: 'Ver el inicio de la ruta del puerto en Google Maps', href: googleMapsHref},
      sourceNote: 'Esta guía se centra en la lógica de paseo más útil dentro del harbour, no en documentar cada giro posible.',
      lastChecked: 'Octubre 2026'
    },
    'where-to-stay-near-ibiza-port': {
      title: 'Dónde alojarse cerca de Ibiza Port',
      description: 'Guía para decidir dónde alojarse cerca del puerto de Ibiza y para qué tipo de viaje realmente encaja esta zona.',
      intro: 'Quien busca dónde alojarse cerca de Ibiza Port suele estar eligiendo entre comodidad y ambiente. El área del harbour puede ser una base muy buena, pero no encaja igual de bien con todos los estilos de viaje.',
      quickFacts: [{label: 'Ideal para', value: 'Viajeros que valoran ir andando, ferris y acceso rápido al casco antiguo'}, {label: 'Enfoque principal', value: 'Elegir base alrededor del harbour'}, {label: 'Gran ventaja', value: 'Comodidad de transporte con ambiente cercano a la vida del puerto'}, {label: 'Pregunta clave', value: 'Si quieres que el puerto sea tu ancla diaria'}],
      sections: [{title: 'Quién debería alojarse cerca del puerto', paragraphs: ['La zona del harbour funciona muy bien para quien quiere moverse a pie, usar ferris, comer junto al agua y tener Dalt Vila cerca.', 'Por eso suele ser una base especialmente buena para primeras visitas y estancias cortas.']}, {title: 'Cuándo puede encajar mejor otra zona', paragraphs: ['Si el viaje gira más en torno a playa tranquila, resort o alejarse del ambiente de la tarde-noche, otra base puede resultar más cómoda.', 'El puerto es atractivo precisamente porque es activo, y eso no siempre es lo ideal para todo el mundo.']}, {title: 'Cómo pensar el harbour como base real', paragraphs: ['La mejor forma de evaluarlo es preguntar si quieres que el puerto sea tu punto de partida diario. Si la respuesta es sí, la comodidad compensa mucho.', 'Si no, quizá el harbour funcione mejor como visita que como lugar para dormir.']}],
      faqs: [{question: 'Es buena zona para alojarse?', answer: 'Sí, especialmente si valoras caminar, ferris, restaurantes y acceso rápido al casco antiguo.'}, {question: 'Quién aprovecha más esta base?', answer: 'Normalmente las primeras visitas y las estancias cortas.'}, {question: 'Cuándo conviene elegir otra zona?', answer: 'Cuando buscas una estancia más tranquila o más centrada en playa y descanso.'}],
      related: ['ibiza-harbour-restaurants', 'ibiza-ferry-port', 'ibiza-port-taxi'],
      thematicLinks: ['ibiza-harbour-restaurants', 'ibiza-ferry-port', 'ibiza-port-taxi'],
      primaryLink: {label: 'Comprobar Ibiza Harbour como base en Google Maps', href: googleMapsHref},
      sourceNote: 'Esta página te ayuda a decidir si el harbour encaja con tu estilo de viaje, antes de compararlo con otras bases posibles.',
      lastChecked: 'Octubre 2026'
    }
  },
  fr: {
    'ibiza-port-taxi': {
      title: 'Guide du taxi au port d Ibiza',
      description: 'Guide pratique pour savoir quand un taxi est utile au port d Ibiza et comment il s integre aux ferries, a l aeroport et aux escales courtes.',
      intro: 'Les recherches taxi autour du port viennent souvent de voyageurs qui veulent la solution la plus simple. Cette page aide a voir quand le taxi est vraiment le meilleur choix depuis le harbour.',
      quickFacts: [{label: 'Ideal pour', value: 'Voyageurs cherchant la solution de transfer la plus simple'}, {label: 'Sujet principal', value: 'Usages du taxi, timing et logique pratique'}, {label: 'Meilleur contexte', value: 'Aeroport, chaleur, bagages et horaires serres'}, {label: 'Bon reflexe', value: 'Decider vite si la rapidite compte plus que la marche'}],
      sections: [{title: 'Pourquoi le taxi compte autant au port', paragraphs: ['Le harbour se parcourt a pied, mais tout le monde ne veut pas porter des bagages ou se reperer dans une zone active apres son arrivee.', 'Le taxi devient donc une reponse naturelle quand la simplicite prime.']}, {title: 'Quand le taxi est le meilleur choix', paragraphs: ['L aeroport, les arrivees tardives, les bagages et les escales courtes sont les cas les plus clairs.', 'Dans ces moments, la valeur du taxi est autant dans la fluidite que dans la vitesse.']}, {title: 'Quand vous pouvez vous en passer', paragraphs: ['Si vous restez entre le harbour et Dalt Vila, marcher fait souvent partie de l experience.', 'Le taxi est surtout utile quand il protege du temps, de l energie ou une correspondance.']}],
      faqs: [{question: 'Le taxi est il utile au port d Ibiza ?', answer: 'Oui, surtout pour l aeroport, les bagages ou les horaires courts.'}, {question: 'Faut il prendre un taxi pour Dalt Vila ?', answer: 'Pas toujours. Beaucoup de visiteurs preferent marcher entre le harbour et la vieille ville.'}, {question: 'Quand est il clairement justifie ?', answer: 'Lorsqu il faut proteger un vol, faire face a la chaleur ou porter des bagages.'}],
      related: ['ibiza-port-to-airport', 'ibiza-port-parking', 'where-to-stay-near-ibiza-port'],
      thematicLinks: ['ibiza-port-to-airport', 'ibiza-port-parking', 'where-to-stay-near-ibiza-port'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour pour preparer un taxi', href: googleMapsHref},
      sourceNote: 'Utilisez cette page pour juger si le taxi ameliore votre plan de harbour selon le temps, les bagages et la meteo.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-port-walking-route': {
      title: 'Guide de marche depuis Ibiza Port',
      description: 'Guide pratique sur le meilleur itineraire a pied depuis le port d Ibiza, avec logique de parcours, Dalt Vila et marche utile.',
      intro: 'Beaucoup de visiteurs n ont pas besoin de transport en arrivant au harbour. Ils ont surtout besoin d une route simple et efficace pour profiter du secteur a pied.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs qui explorent surtout le harbour a pied'}, {label: 'Sujet principal', value: 'Logique de parcours simple depuis le waterfront'}, {label: 'Meilleure premiere marche', value: 'Front portuaire vers Dalt Vila'}, {label: 'Bonne approche', value: 'Garder la promenade compacte et scenique'}],
      sections: [{title: 'La meilleure premiere marche depuis le port', paragraphs: ['Pour beaucoup de visiteurs, l itineraire le plus fort reste le front portuaire vers Dalt Vila.', 'Il reunit en une seule ligne ambiance du port et coeur historique.']}, {title: 'Comment eviter de compliquer le parcours', paragraphs: ['Le harbour devient plus clair quand on n essaie pas tout voir a la fois. Une route nette avec une seule extension optionnelle marche souvent mieux.', 'C est plus utile qu une boucle de detours sans vraie logique.']}, {title: 'Quand marcher vaut mieux qu un taxi', paragraphs: ['La marche gagne souvent quand le trajet lui-meme fait partie de la visite.', 'On change surtout de logique si la chaleur, les bagages ou le temps rendent la marche moins agreable.']}],
      faqs: [{question: 'Quel est le meilleur itineraire a pied depuis Ibiza Port ?', answer: 'Pour beaucoup de visiteurs, le meilleur premier itineraire va du harbour vers Dalt Vila.'}, {question: 'Faut il tout faire a pied ?', answer: 'En general non. Un parcours compact avec une seule extension optionnelle suffit largement.'}, {question: 'Quand la marche vaut elle mieux qu un taxi ?', answer: 'Quand le trajet lui-meme fait partie de l experience et que le timing reste confortable.'}],
      related: ['ibiza-port-to-old-town', 'ibiza-harbour-map', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['ibiza-port-to-old-town', 'ibiza-harbour-map', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: 'Voir le point de depart du parcours dans Google Maps', href: googleMapsHref},
      sourceNote: 'Cette page se concentre sur la logique de marche la plus utile autour du harbour, pas sur tous les detours possibles.',
      lastChecked: 'Octobre 2026'
    },
    'where-to-stay-near-ibiza-port': {
      title: 'Ou loger pres du port d Ibiza',
      description: 'Guide pour savoir si loger pres du port d Ibiza est une bonne idee selon votre style de voyage et vos priorites.',
      intro: 'Les recherches sur l hebergement pres du port opposent souvent praticite et ambiance. Le harbour peut etre une excellente base, mais il convient mieux a certains types de sejours qu a d autres.',
      quickFacts: [{label: 'Ideal pour', value: 'Voyageurs qui valorisent marche, ferries et acces a Dalt Vila'}, {label: 'Sujet principal', value: 'Choix de base autour du harbour'}, {label: 'Atout principal', value: 'Commodite de transport et ambiance active'}, {label: 'Bonne question', value: 'Voulez-vous que le port soit votre point de depart quotidien ?'}],
      sections: [{title: 'Qui devrait loger pres du port', paragraphs: ['Le harbour convient tres bien aux voyageurs qui veulent marcher, prendre des ferries, manger au bord de l eau et garder Dalt Vila proche.', 'C est donc une base tres logique pour les courts sejours et les premieres visites.']}, {title: 'Quand un autre secteur convient mieux', paragraphs: ['Si le voyage vise surtout le calme, la plage ou une ambiance plus resort, une autre base peut etre plus confortable.', 'Le port est attractif parce qu il est vivant, mais cette energie ne plait pas a tout le monde.']}, {title: 'Comment penser le harbour comme base', paragraphs: ['Le meilleur test consiste a demander si vous voulez que le port soit votre ancre quotidienne.', 'Si oui, la commodite compense beaucoup. Sinon, le harbour vaut peut-etre mieux comme visite que comme lieu ou dormir.']}],
      faqs: [{question: 'Le port d Ibiza est il un bon secteur pour loger ?', answer: 'Oui, surtout pour ceux qui veulent marche, ferries, restaurants et acces rapide a la vieille ville.'}, {question: 'Qui en profite le plus ?', answer: 'Les courts sejours et les premieres visites en profitent souvent le plus.'}, {question: 'Quand faut il choisir un autre secteur ?', answer: 'Quand on cherche un sejour plus calme ou davantage centre sur la plage et le repos.'}],
      related: ['ibiza-harbour-restaurants', 'ibiza-ferry-port', 'ibiza-port-taxi'],
      thematicLinks: ['ibiza-harbour-restaurants', 'ibiza-ferry-port', 'ibiza-port-taxi'],
      primaryLink: {label: 'Evaluer Ibiza Harbour comme base dans Google Maps', href: googleMapsHref},
      sourceNote: 'Cette page aide a juger si le harbour correspond vraiment au style de sejour voulu avant de choisir son hebergement.',
      lastChecked: 'Octobre 2026'
    }
  },
  'zh-Hant': {
    'ibiza-port-taxi': {
      title: 'Ibiza Port 計程車指南',
      description: '整理在伊維薩港使用計程車最有價值的情境，以及它和機場、渡輪、短停行程的關係。',
      intro: '搜尋 Ibiza Port taxi 的旅客，多半是想要最省事的方案。這頁的重點是幫你判斷，什麼時候從港口搭計程車真的最合理，什麼時候其實步行就夠了。',
      quickFacts: [{label: '適合誰', value: '想用最簡單方式離開港區的旅客'}, {label: '主要內容', value: '計程車使用情境、時間與規劃邏輯'}, {label: '最適合', value: '機場、炎熱天氣、行李多或時間緊'}, {label: '實用習慣', value: '先判斷你要的是速度還是步行體驗'}],
      sections: [{title: '為什麼港口計程車主題很重要', paragraphs: ['港區雖然能走，但不是每個人都想在炎熱、拖行李或趕時間時還要先理解整個 waterfront。', '這也是為什麼 taxi 會是 Ibiza Port 很強的實際需求之一。']}, {title: '什麼情況下計程車最值得', paragraphs: ['趕機場、晚到、行李多或郵輪短停，都是最典型的情況。', '這時候計程車的價值不只在速度，也在於少做判斷、少消耗精力。']}, {title: '什麼情況下可能不需要', paragraphs: ['如果你的移動只是港邊到 Dalt Vila，步行本身常常就是體驗的一部分。', '計程車最適合用來保護時間、體力或下一段轉乘。']}],
      faqs: [{question: 'Ibiza Port 搭計程車有必要嗎？', answer: '有時非常有必要，特別是機場、重行李或短時間行程。'}, {question: '去 Dalt Vila 也需要搭計程車嗎？', answer: '不一定。很多旅客反而更喜歡從港口直接走過去。'}, {question: '什麼時候最值得搭？', answer: '當你在保護航班、遇到高溫，或不想拖著行李穿過港區時。'}],
      related: ['ibiza-port-to-airport', 'ibiza-port-parking', 'where-to-stay-near-ibiza-port'],
      thematicLinks: ['ibiza-port-to-airport', 'ibiza-port-parking', 'where-to-stay-near-ibiza-port'],
      primaryLink: {label: '在 Google Maps 打開 Ibiza Harbour 規劃計程車', href: googleMapsHref},
      sourceNote: '這頁幫你判斷 taxi 是否真的能讓港區行程更順，再依時間、行李與天氣做最後決定。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-port-walking-route': {
      title: 'Ibiza Port 步行路線指南',
      description: '整理伊維薩港最值得走的步行路線，包括第一條該走哪裡、怎麼接 Dalt Vila，以及如何保持路線簡單。',
      intro: '很多旅客抵達港口後根本不需要交通工具，只需要知道哪一條步行路線最值得。這頁就是把那條最實用的港區步行邏輯整理出來。',
      quickFacts: [{label: '適合誰', value: '想主要靠步行探索 harbour 的旅客'}, {label: '主要內容', value: '從 waterfront 出發的簡單路線邏輯'}, {label: '第一條最值得走的線', value: '港邊步道接 Dalt Vila'}, {label: '最好原則', value: '保持有景、集中、不貪多'}],
      sections: [{title: '從港口出發最值得的第一條步行線', paragraphs: ['對很多第一次來的人來說，最值得的步行路線仍然是從 harbour waterfront 一路走向 Dalt Vila。', '這條線同時把港口氣氛和老城核心串起來，所以價值非常高。']}, {title: '怎麼避免把路線走亂', paragraphs: ['港區最怕的是一開始就想什麼都看。通常選一條清楚主線，再加一個可選延伸就夠了。', '這比把路線拆成很多沒有主軸的小停點更有效。']}, {title: '什麼時候步行比計程車更好', paragraphs: ['當路線本身就是體驗的一部分，而且你沒有時間壓力時，步行通常更好。', '只有在高溫、行李或時程壓力太大時，才比較適合改成搭車。']}],
      faqs: [{question: 'Ibiza Port 最值得走的步行路線是哪一條？', answer: '對多數旅客來說，港邊一路走向 Dalt Vila 仍然是最強的第一條路線。'}, {question: '適合一次全部用走的嗎？', answer: '通常不需要。集中走一條主線，再視情況加一個延伸最實用。'}, {question: '什麼時候步行會比 taxi 更值得？', answer: '當你不趕時間，而且把路線本身也視為旅遊體驗的一部分時。'}],
      related: ['ibiza-port-to-old-town', 'ibiza-harbour-map', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['ibiza-port-to-old-town', 'ibiza-harbour-map', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: '在 Google Maps 查看港口步行起點', href: googleMapsHref},
      sourceNote: '這頁專注在港區最有價值的步行邏輯，而不是把所有可能路線都攤開。',
      lastChecked: '2026 年 10 月'
    },
    'where-to-stay-near-ibiza-port': {
      title: 'Ibiza Port 附近住哪裡',
      description: '整理伊維薩港附近是否適合住宿、適合哪些旅客，以及什麼情況下應該考慮其他區域。',
      intro: '搜尋 where to stay near Ibiza Port 的人，通常是在比較便利性和氛圍。港區可以是很好的住宿基地，但它不是對每一種旅程都同樣合適。',
      quickFacts: [{label: '適合誰', value: '重視步行、渡輪與老城便利性的旅客'}, {label: '主要內容', value: '港區周邊住宿定位'}, {label: '最大優勢', value: '交通便利加上港邊生活感'}, {label: '最重要問題', value: '你是否希望每天都以港口為起點'}],
      sections: [{title: '哪些旅客最適合住在港口附近', paragraphs: ['如果你希望能步行移動、搭渡輪方便、港邊吃飯方便，而且想把 Dalt Vila 放在很近的位置，港區附近通常很適合。', '因此它對短住和第一次來的旅客特別有吸引力。']}, {title: '什麼情況下其他區域更合適', paragraphs: ['如果你想要的是更安靜的海灘感、度假村感，或不想靠近傍晚最熱鬧的區域，那其他住宿基地可能更舒服。', '港區的魅力正來自它的活躍，但這不一定適合每個人。']}, {title: '怎麼判斷港區該不該當住宿基地', paragraphs: ['最實用的判斷方式，是先問自己：我想不想讓港口成為每天的出發點？', '如果答案是想，那它的便利性通常很有說服力；如果不是，港口可能更適合作為白天拜訪的地方。']}],
      faqs: [{question: 'Ibiza Port 附近適合住宿嗎？', answer: '很適合某些旅客，尤其是重視步行、餐廳、渡輪和老城便利性的人。'}, {question: '哪些人最能受益？', answer: '通常是第一次來伊維薩、停留天數不長的旅客。'}, {question: '什麼情況下該選別區？', answer: '如果你想要更安靜、更偏海灘度假的住宿氛圍，就可以考慮其他區域。'}],
      related: ['ibiza-harbour-restaurants', 'ibiza-ferry-port', 'ibiza-port-taxi'],
      thematicLinks: ['ibiza-harbour-restaurants', 'ibiza-ferry-port', 'ibiza-port-taxi'],
      primaryLink: {label: '在 Google Maps 檢查 Ibiza Harbour 作為住宿基地', href: googleMapsHref},
      sourceNote: '這頁幫你先判斷 harbour 是否符合你的旅程風格，再去比較其他住宿區域。',
      lastChecked: '2026 年 10 月'
    }
  }
};

const quinarySeoGuideContent: Partial<Record<SupportedLocale, Partial<Record<QuinarySeoGuideSlug, SeoGuidePageContent>>>> = {
  en: {
    'ibiza-port-to-old-town': {
      title: 'Ibiza Port to Old Town Guide',
      description: 'Guide to reaching Ibiza Old Town from the port, including the best route logic and how this differs from broader Dalt Vila intent.',
      intro: 'Many visitors search for Ibiza Port to Old Town rather than Dalt Vila because they are thinking in practical city terms. This page helps connect that intent to the actual route from the harbour into the historic core.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors walking from the harbour to the historic centre'},
        {label: 'Main focus', value: 'Old-town access and route expectations'},
        {label: 'Natural start', value: 'Ibiza Harbour waterfront'},
        {label: 'Best framing', value: 'Think of it as harbour to historic core, then uphill if you continue deeper'}
      ],
      sections: [
        {title: 'Old Town and Dalt Vila are related but not identical search intents', paragraphs: ['People often use old town as the practical version of what others call Dalt Vila. The user intent is usually simpler: how do I move from the port into the historic part of Ibiza Town?', 'That makes this keyword worth treating directly, even though it overlaps strongly with Dalt Vila content.']},
        {title: 'What the route feels like from the port', paragraphs: ['The harbour-to-old-town route begins as an easy urban waterfront movement. Once you move into the historic area and continue upward, the effort increases.', 'This means some visitors will be satisfied with reaching the old-town edge, while others will want to continue toward the upper Dalt Vila viewpoints.']},
        {title: 'How to use this page well', paragraphs: ['Use this page when your main question is how to reach the old town from the port without overcomplicating the walk.', 'If you want a deeper sightseeing version of the same route, the Dalt Vila and walking-route pages are the right next step.']}
      ],
      faqs: [
        {question: 'Can you walk from Ibiza Port to the old town?', answer: 'Yes. For many visitors this is the most natural first urban walk after arriving at the harbour.'},
        {question: 'Is old town the same as Dalt Vila?', answer: 'They overlap, but old town is often the broader practical term while Dalt Vila points more specifically to the fortified historic core.'},
        {question: 'Is this a good first route from the port?', answer: 'Yes. It is one of the most useful first movements for visitors who want history without leaving the harbour area.'}
      ],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      primaryLink: {label: 'Open the harbour starting point in Google Maps', href: googleMapsHref},
      sourceNote: 'This page treats old-town access as a practical route question so visitors can choose the right level of walk before continuing uphill.',
      lastChecked: 'October 2026'
    },
    'ibiza-port-luggage': {
      title: 'Ibiza Port Luggage Guide',
      description: 'Practical guide to handling luggage around Ibiza Port, including when bags change your route, taxi choice and transfer planning.',
      intro: 'Luggage changes how visitors experience Ibiza Port. A route that feels easy without bags can feel much less pleasant with suitcases, children or a tight connection. This page focuses on those practical differences.',
      quickFacts: [
        {label: 'Best for', value: 'Travellers moving through the harbour with bags'},
        {label: 'Main focus', value: 'Luggage impact on route and transfer choices'},
        {label: 'Most affected plans', value: 'Airport runs, ferry boarding and uphill walks'},
        {label: 'Best mindset', value: 'Treat luggage as a route-planning factor, not just an inconvenience'}
      ],
      sections: [
        {title: 'Why luggage changes the port experience', paragraphs: ['Without luggage, the harbour often feels manageable and even enjoyable on foot. With bags, the same area can become much more tiring, especially if you still need to orient yourself or catch a connection.', 'That is why luggage deserves its own planning page rather than being treated as a small footnote.']},
        {title: 'When bags should change your decision', paragraphs: ['Heavy luggage often makes taxis more appealing, even for movements that look short on a map. It can also turn a scenic harbour walk into a poor choice if you still need to manage an airport transfer, ferry departure or old-town climb.', 'In other words, bags change both comfort and timing.']},
        {title: 'The best way to use this topic', paragraphs: ['The most useful question is not only where to put your bags, but how your bags should change the whole plan. Sometimes that means simplifying the route. Sometimes it means skipping a walk and protecting the connection instead.', 'Thinking this way leads to better choices than treating luggage as an afterthought.']}
      ],
      faqs: [
        {question: 'Does luggage change the best way to use Ibiza Port?', answer: 'Yes. Bags can make walking, boarding and onward transfers feel much more demanding than they seem without luggage.'},
        {question: 'Should luggage push you toward a taxi?', answer: 'Often yes, especially when you are linking the port to the airport or protecting a tight schedule.'},
        {question: 'Is luggage a problem for old-town walking?', answer: 'It can be. Even a good port walk becomes less appealing when bags are part of the climb.'}
      ],
      related: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-ferry-tickets'],
      thematicLinks: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-ferry-tickets'],
      primaryLink: {label: 'Check the harbour area in Google Maps before moving with bags', href: googleMapsHref},
      sourceNote: 'Use this guide to decide how much luggage should change your harbour plan before you commit to walking or transferring.',
      lastChecked: 'October 2026'
    },
    'best-time-to-visit-ibiza-harbour': {
      title: 'Best Time to Visit Ibiza Harbour',
      description: 'Guide to choosing the best time to visit Ibiza Harbour depending on atmosphere, heat, walking comfort and evening activity.',
      intro: 'The best time to visit Ibiza Harbour depends on what you want from the area. Some visitors care about easier walking and softer light, while others want the livelier evening atmosphere. This page helps separate those goals.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors deciding when the harbour will suit them best'},
        {label: 'Main focus', value: 'Timing, atmosphere and practical comfort'},
        {label: 'Best for photos', value: 'Later afternoon and early evening light'},
        {label: 'Best for comfort', value: 'Avoid the hottest and busiest windows when possible'}
      ],
      sections: [
        {title: 'Why timing matters more than it first seems', paragraphs: ['Ibiza Harbour changes character across the day. The same waterfront can feel calm and practical at one hour, then crowded, hotter and much more energetic later.', 'That means the best time to visit is not a single universal answer. It depends on what kind of visit you want.']},
        {title: 'Best time for atmosphere versus ease', paragraphs: ['If you want atmosphere, evening tends to deliver the strongest harbour feeling, especially when restaurants, marina views and the fading light come together.', 'If you care more about comfortable walking and cleaner orientation, quieter and less intense hours can be a better match.']},
        {title: 'How to use timing as a planning tool', paragraphs: ['The smartest approach is to match your timing to your main goal: walking, eating, ferry use, photos or simply avoiding stress.', 'This is often more useful than asking for one single best hour that supposedly fits every traveller.']}
      ],
      faqs: [
        {question: 'What is the best time to visit Ibiza Harbour for atmosphere?', answer: 'For many visitors, later afternoon into evening offers the best combination of light, energy and waterfront activity.'},
        {question: 'What if you want an easier visit?', answer: 'Choosing a less intense time can make walking, orientation and overall comfort much easier.'},
        {question: 'Is there one perfect time for everyone?', answer: 'No. The best time depends on whether you want photos, dining, walking ease or transport efficiency.'}
      ],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: 'Use Google Maps to place the harbour in your day plan', href: googleMapsHref},
      sourceNote: 'This page helps visitors use timing as part of route planning rather than treating the harbour as the same experience at every hour.',
      lastChecked: 'October 2026'
    }
  },
  es: {
    'ibiza-port-to-old-town': {
      title: 'Guía de Ibiza Port al casco antiguo',
      description: 'Guía para llegar desde el puerto de Ibiza al casco antiguo, con foco en la lógica del recorrido y su relación con Dalt Vila.',
      intro: 'Muchos viajeros buscan Ibiza Port to Old Town en vez de Dalt Vila porque están pensando en una ruta urbana práctica. Esta página conecta esa intención con el recorrido real entre el harbour y el centro histórico.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes que van del puerto al centro histórico caminando'}, {label: 'Enfoque principal', value: 'Acceso al casco antiguo y expectativas del recorrido'}, {label: 'Salida natural', value: 'Waterfront de Ibiza Harbour'}, {label: 'Mejor enfoque', value: 'Pensarlo como puerto a casco histórico, y luego subida si sigues más arriba'}],
      sections: [{title: 'Casco antiguo y Dalt Vila se pisan, pero no significan exactamente lo mismo', paragraphs: ['Mucha gente usa casco antiguo como versión práctica de lo que otros llaman Dalt Vila. La intención suele ser simple: cómo pasar del puerto a la parte histórica de Ibiza ciudad.', 'Por eso merece una página propia aunque se solape bastante con Dalt Vila.']}, {title: 'Cómo se siente el recorrido desde el puerto', paragraphs: ['La ruta empieza como un paseo urbano bastante cómodo junto al agua. Cuando entras más en la parte histórica y sigues subiendo, el esfuerzo aumenta.', 'Eso hace que algunos viajeros se queden en el borde del casco antiguo y otros continúen hacia la parte alta.']}, {title: 'Cómo aprovechar bien esta página', paragraphs: ['Úsala si lo que buscas es llegar al casco antiguo desde el puerto sin complicarte demasiado.', 'Si quieres la versión más turística y más alta del mismo recorrido, las páginas de Dalt Vila y walking route son el siguiente paso natural.']}],
      faqs: [{question: 'Se puede ir andando del puerto al casco antiguo?', answer: 'Sí. Para muchos visitantes es la primera caminata más natural al llegar al harbour.'}, {question: 'Es lo mismo old town que Dalt Vila?', answer: 'Se solapan, pero old town suele funcionar como término más práctico y Dalt Vila apunta más al núcleo histórico fortificado.'}, {question: 'Es una buena primera ruta desde el puerto?', answer: 'Sí. Es uno de los movimientos más útiles para entrar en la parte histórica sin salir del entorno portuario.'}],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      primaryLink: {label: 'Abrir en Google Maps el punto de salida del puerto', href: googleMapsHref},
      sourceNote: 'Esta página trata el acceso al casco antiguo como una pregunta práctica de recorrido para que cada visitante elija el nivel de paseo que le conviene.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-port-luggage': {
      title: 'Guía de equipaje en Ibiza Port',
      description: 'Guía práctica sobre cómo cambia el equipaje la experiencia del puerto de Ibiza, los traslados y la elección entre caminar o tomar taxi.',
      intro: 'El equipaje cambia mucho la forma en que se vive Ibiza Port. Una ruta que parece fácil sin maletas puede sentirse mucho más pesada con equipaje, niños o una conexión ajustada. Esta página se centra en esas diferencias reales.',
      quickFacts: [{label: 'Ideal para', value: 'Viajeros que se mueven por el harbour con maletas'}, {label: 'Enfoque principal', value: 'Impacto del equipaje en rutas y traslados'}, {label: 'Planes más afectados', value: 'Aeropuerto, embarque en ferri y caminatas con desnivel'}, {label: 'Mentalidad útil', value: 'Tratar el equipaje como factor de ruta, no como simple molestia'}],
      sections: [{title: 'Por qué el equipaje cambia la experiencia del puerto', paragraphs: ['Sin equipaje, el harbour suele sentirse manejable e incluso agradable a pie. Con maletas, el mismo entorno puede hacerse mucho más cansado, sobre todo si además debes orientarte o enlazar con otro transporte.', 'Por eso el tema equipaje merece una página propia.']}, {title: 'Cuándo las maletas deberían cambiar tu decisión', paragraphs: ['El equipaje pesado suele empujar hacia el taxi incluso en movimientos que parecen cortos sobre el mapa. También puede convertir un paseo escénico en una mala idea si después tienes aeropuerto, ferri o subida al casco antiguo.', 'En otras palabras, las maletas cambian tanto la comodidad como el tiempo.']}, {title: 'Cómo usar mejor este tema', paragraphs: ['La pregunta útil no es solo dónde poner las maletas, sino cómo deben cambiar el plan entero. A veces eso significa simplificar la ruta. A veces significa saltarte la caminata y proteger la conexión.', 'Pensarlo así suele dar mejores decisiones que tratar el equipaje como un detalle menor.']}],
      faqs: [{question: 'El equipaje cambia la mejor forma de usar Ibiza Port?', answer: 'Sí. Las maletas hacen que caminar, embarcar o enlazar con otro transporte se sienta mucho más exigente.'}, {question: 'Conviene más el taxi si llevas equipaje?', answer: 'A menudo sí, sobre todo si enlazas el puerto con el aeropuerto o con un horario ajustado.'}, {question: 'Es mala combinación con el paseo al casco antiguo?', answer: 'Puede serlo. Incluso un buen paseo se vuelve mucho menos atractivo cuando las maletas entran en juego.'}],
      related: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-ferry-tickets'],
      thematicLinks: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-ferry-tickets'],
      primaryLink: {label: 'Revisar la zona del harbour en Google Maps antes de moverte con equipaje', href: googleMapsHref},
      sourceNote: 'Usa esta guía para decidir cuánto debe cambiar tu plan portuario por el simple hecho de llevar maletas.',
      lastChecked: 'Octubre 2026'
    },
    'best-time-to-visit-ibiza-harbour': {
      title: 'Mejor momento para visitar Ibiza Harbour',
      description: 'Guía para elegir el mejor momento para visitar Ibiza Harbour según ambiente, calor, comodidad al caminar y actividad de tarde-noche.',
      intro: 'El mejor momento para visitar Ibiza Harbour depende mucho de lo que busques. Hay quien prioriza caminar con más comodidad y quien prefiere el ambiente del atardecer y la noche. Esta página separa esas prioridades.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes que aún están decidiendo a qué hora encaja mejor el harbour'}, {label: 'Enfoque principal', value: 'Horario, ambiente y comodidad práctica'}, {label: 'Mejor para fotos', value: 'Última tarde y primeras horas de la noche'}, {label: 'Mejor para comodidad', value: 'Evitar las franjas más calurosas y cargadas'}],
      sections: [{title: 'Por qué la hora importa más de lo que parece', paragraphs: ['Ibiza Harbour cambia bastante según la hora del día. El mismo waterfront puede sentirse tranquilo y práctico en un momento, y más denso, caluroso o activo en otro.', 'Por eso no existe una única respuesta perfecta para todo el mundo.']}, {title: 'Mejor hora para ambiente frente a facilidad', paragraphs: ['Si buscas ambiente, la tarde avanzada y la noche suelen dar la versión más viva del harbour, sobre todo cuando coinciden restaurantes, marinas y luz suave.', 'Si priorizas caminar mejor y orientarte sin tanta presión, las horas menos intensas suelen encajar más.']}, {title: 'Cómo usar la hora como herramienta de planificación', paragraphs: ['La forma más útil de pensarlo es unir la hora a tu objetivo principal: caminar, comer, hacer fotos, usar ferris o simplemente evitar estrés.', 'Eso suele ser más práctico que buscar una hora mágica que sirva para todo el mundo.']}],
      faqs: [{question: 'Cuál es el mejor momento para visitar Ibiza Harbour por ambiente?', answer: 'Para mucha gente, desde el final de la tarde hasta el principio de la noche es el tramo más agradecido.'}, {question: 'Y si buscas una visita más fácil?', answer: 'Elegir una franja menos intensa suele mejorar bastante la comodidad y la orientación.'}, {question: 'Existe una hora perfecta para todos?', answer: 'No. Depende de si priorizas fotos, comida, paseo o eficiencia de transporte.'}],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: 'Usar Google Maps para colocar el harbour dentro de tu día', href: googleMapsHref},
      sourceNote: 'Esta página ayuda a usar el horario como parte de la planificación del puerto en vez de pensar que el harbour se siente igual a cualquier hora.',
      lastChecked: 'Octubre 2026'
    }
  },
  fr: {
    'ibiza-port-to-old-town': {
      title: 'Guide du port vers la vieille ville',
      description: 'Guide pour aller du port d Ibiza vers la vieille ville, avec logique de parcours et lien avec Dalt Vila.',
      intro: 'Beaucoup de visiteurs cherchent port vers vieille ville plutot que Dalt Vila parce qu ils pensent en termes de trajet urbain simple. Cette page relie cette intention a la vraie logique du parcours depuis le harbour.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs allant du harbour vers le centre historique a pied'}, {label: 'Sujet principal', value: 'Acces a la vieille ville et logique de route'}, {label: 'Depart naturel', value: 'Front de mer du harbour'}, {label: 'Bonne approche', value: 'Voir cela comme port vers centre historique puis montee si l on continue'}],
      sections: [{title: 'Vieille ville et Dalt Vila se recoupent sans etre identiques', paragraphs: ['Beaucoup de voyageurs utilisent vieille ville comme terme pratique la ou d autres parlent de Dalt Vila.', 'L intention est souvent simple : comment rejoindre la partie historique depuis le port ?']}, {title: 'Ce que le trajet implique vraiment', paragraphs: ['Le parcours commence comme une marche urbaine facile le long du waterfront.', 'Quand on entre davantage dans le coeur historique et que l on monte, l effort augmente.']}, {title: 'Comment bien utiliser cette page', paragraphs: ['Cette page convient si votre vraie question est l acces simple a la vieille ville depuis le harbour.', 'Pour une version plus panoramique ou plus haute, les pages Dalt Vila et walking route prolongent bien le sujet.']}],
      faqs: [{question: 'Peut on aller du port a la vieille ville a pied ?', answer: 'Oui. Pour beaucoup de visiteurs, c est la marche urbaine la plus naturelle depuis le harbour.'}, {question: 'Vieille ville et Dalt Vila sont ils identiques ?', answer: 'Ils se recoupent, mais vieille ville reste souvent le terme pratique plus large.'}, {question: 'Est ce une bonne premiere route ?', answer: 'Oui. C est une tres bonne premiere liaison historique sans quitter l environnement du port.'}],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      primaryLink: {label: 'Ouvrir le point de depart du port dans Google Maps', href: googleMapsHref},
      sourceNote: 'Cette page traite la vieille ville comme une question d acces pratique depuis le harbour avant de prolonger la visite.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-port-luggage': {
      title: 'Guide des bagages au port d Ibiza',
      description: 'Guide pratique sur l impact des bagages au port d Ibiza, avec effet sur la marche, le taxi et les correspondances.',
      intro: 'Les bagages changent beaucoup la maniere de vivre Ibiza Port. Un trajet simple sans valises peut devenir bien moins agreable avec des sacs, des enfants ou une correspondance courte.',
      quickFacts: [{label: 'Ideal pour', value: 'Voyageurs traversant le harbour avec des bagages'}, {label: 'Sujet principal', value: 'Impact des bagages sur les routes et transferts'}, {label: 'Plans les plus touches', value: 'Aeroport, ferry et marche en pente'}, {label: 'Bonne approche', value: 'Traiter les bagages comme un vrai facteur de plan'}],
      sections: [{title: 'Pourquoi les bagages changent l experience', paragraphs: ['Sans bagages, le harbour peut sembler simple et agreable a pied. Avec des valises, la meme zone devient plus lourde a gerer, surtout s il faut encore s orienter ou attraper une correspondance.', 'C est pour cela que ce sujet merite une page a part.']}, {title: 'Quand les bagages doivent changer votre choix', paragraphs: ['Des bagages lourds rendent souvent le taxi plus logique meme pour des mouvements apparemment courts.', 'Ils peuvent aussi transformer une belle promenade en mauvais choix si un vol, un ferry ou une montee attend encore derriere.']}, {title: 'Comment utiliser ce sujet intelligemment', paragraphs: ['La bonne question n est pas seulement ou poser les bagages, mais comment les bagages doivent changer tout le plan.', 'Parfois cela signifie simplifier. Parfois cela signifie proteger la correspondance plutot que la promenade.']}],
      faqs: [{question: 'Les bagages changent ils la meilleure maniere d utiliser Ibiza Port ?', answer: 'Oui. Les valises rendent la marche, l embarquement et les correspondances bien plus exigeants.'}, {question: 'Les bagages poussent ils vers le taxi ?', answer: 'Souvent oui, surtout avec un aeroport ou un horaire serre.'}, {question: 'Les bagages sont ils un probleme pour la marche vers la vieille ville ?', answer: 'Ils peuvent l etre. Une bonne promenade devient moins agreable quand les bagages font partie de la montee.'}],
      related: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-ferry-tickets'],
      thematicLinks: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-ferry-tickets'],
      primaryLink: {label: 'Verifier la zone du harbour dans Google Maps avant de bouger avec bagages', href: googleMapsHref},
      sourceNote: 'Utilisez cette page pour juger a quel point les bagages doivent modifier votre plan portuaire avant de marcher ou de transferer.',
      lastChecked: 'Octobre 2026'
    },
    'best-time-to-visit-ibiza-harbour': {
      title: 'Meilleur moment pour visiter Ibiza Harbour',
      description: 'Guide pour choisir le meilleur moment selon l ambiance, la chaleur, la marche et la vie du waterfront.',
      intro: 'Le meilleur moment pour visiter Ibiza Harbour depend de ce que vous cherchez. Certains veulent surtout une marche plus confortable, d autres recherchent l ambiance du soir.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs qui choisissent encore le bon moment de passage'}, {label: 'Sujet principal', value: 'Timing, ambiance et confort pratique'}, {label: 'Meilleur pour les photos', value: 'Fin d apres midi et debut de soiree'}, {label: 'Meilleur pour le confort', value: 'Eviter les heures les plus chaudes et les plus chargees'}],
      sections: [{title: 'Pourquoi le timing compte tant', paragraphs: ['Ibiza Harbour change beaucoup selon l heure. Un meme waterfront peut sembler fluide a un moment puis chaud, dense et tres vivant plus tard.', 'Il n y a donc pas une seule bonne reponse valable pour tout le monde.']}, {title: 'Ambiance ou facilite', paragraphs: ['Si vous cherchez l ambiance, la fin d apres midi et la soiree offrent souvent la version la plus forte du harbour.', 'Si vous voulez surtout marcher facilement et vous orienter sans pression, des heures moins intenses conviennent mieux.']}, {title: 'Comment utiliser l heure comme outil', paragraphs: ['La meilleure methode est d adapter l heure a votre objectif : marcher, manger, faire des photos, prendre un ferry ou eviter le stress.', 'C est souvent plus utile que de chercher une heure parfaite universelle.']}],
      faqs: [{question: 'Quel est le meilleur moment pour l ambiance ?', answer: 'Pour beaucoup de visiteurs, la fin d apres midi puis le debut de soiree offrent le meilleur melange de lumiere et d activite.'}, {question: 'Et pour une visite plus facile ?', answer: 'Une plage horaire moins intense rend souvent la marche et l orientation plus confortables.'}, {question: 'Existe t il une heure parfaite pour tout le monde ?', answer: 'Non. Cela depend de votre priorite entre photos, repas, marche ou efficacite.'}],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: 'Utiliser Google Maps pour placer le harbour dans votre journee', href: googleMapsHref},
      sourceNote: 'Cette page aide a utiliser le timing comme partie du plan plutot qu a imaginer le harbour identique a toute heure.',
      lastChecked: 'Octobre 2026'
    }
  },
  'zh-Hant': {
    'ibiza-port-to-old-town': {
      title: 'Ibiza Port 到舊城指南',
      description: '整理從伊維薩港前往舊城的實際路線邏輯，以及它和 Dalt Vila 搜尋意圖的差別。',
      intro: '很多旅客會搜尋 Ibiza Port to Old Town，而不是直接搜尋 Dalt Vila，因為他們想的是更實際的城市移動問題。這頁就是用那個角度來整理港口到歷史核心的路線。',
      quickFacts: [{label: '適合誰', value: '想從 harbour 步行進入歷史城區的旅客'}, {label: '主要內容', value: '舊城入口與步行感受'}, {label: '自然起點', value: 'Ibiza Harbour waterfront'}, {label: '最好理解方式', value: '先到舊城，再決定是否繼續往更高的 Dalt Vila'}],
      sections: [{title: '舊城和 Dalt Vila 很接近，但不是完全同一種問法', paragraphs: ['很多人用 old town 這個詞，其實是在問從港口怎麼走進伊維薩歷史區。', '這和更偏觀光視角的 Dalt Vila 搜尋有重疊，但仍值得單獨整理。']}, {title: '從港口走過去會是什麼感覺', paragraphs: ['一開始仍然是相對輕鬆的 waterfront 城市步行。進到歷史區並繼續往上時，體感才會慢慢變得更費力。', '所以有些旅客走到舊城入口就滿足了，有些則會繼續上到更高的觀景點。']}, {title: '這頁最適合怎麼用', paragraphs: ['如果你主要想知道怎麼從港口進舊城，這頁就很適合。', '如果你想看的是更完整、更高階的 Dalt Vila 步行體驗，接著看 walking route 和 Dalt Vila 相關頁最順。']}],
      faqs: [{question: '可以從 Ibiza Port 走到舊城嗎？', answer: '可以，而且對很多旅客來說這就是最自然的第一段城市步行。'}, {question: 'Old town 和 Dalt Vila 是一樣的嗎？', answer: '有重疊，但 old town 常是更實際、更寬的說法，而 Dalt Vila 更指向堡壘式歷史核心。'}, {question: '這適合當作抵達港口後的第一段路線嗎？', answer: '很適合，因為它能最快把港口和歷史城區接起來。'}],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      primaryLink: {label: '在 Google Maps 打開港口起點', href: googleMapsHref},
      sourceNote: '這頁把舊城視為一個實際抵達問題，幫你先選擇合適的步行層級，再決定是否往更高處走。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-port-luggage': {
      title: 'Ibiza Port 行李指南',
      description: '整理在伊維薩港帶著行李時，步行、計程車、渡輪與機場轉乘會怎麼改變你的規劃。',
      intro: '行李會直接改變你對 Ibiza Port 的體感。原本覺得好走的路線，帶著行李、孩子或趕轉乘時，可能完全不是同一回事。這頁就是專門處理這個現實差異。',
      quickFacts: [{label: '適合誰', value: '需要帶著行李穿越 harbour 的旅客'}, {label: '主要內容', value: '行李對路線與轉乘判斷的影響'}, {label: '最受影響的安排', value: '機場、渡輪與上坡步行'}, {label: '最好思路', value: '把行李當成路線規劃因素，而不是次要細節'}],
      sections: [{title: '為什麼行李會明顯改變港口體驗', paragraphs: ['沒有行李時，港區常常感覺還算輕鬆，也很適合散步。帶著行李後，同樣的區域就可能變得更累、更慢，尤其還要辨識方向或趕下一段交通時。', '所以行李不該只是附註，而是值得單獨處理的主題。']}, {title: '什麼時候行李應該改變你的決策', paragraphs: ['重行李常常會讓 taxi 比地圖上看起來更值得，哪怕距離不算很長。它也可能讓本來很美的港邊步行，變成不適合的選擇，尤其後面還有機場、渡輪或老城上坡。', '行李改變的不只是舒適度，也改變節奏和容錯。']}, {title: '這個主題最實用的用法', paragraphs: ['最好的問題不是只問行李該放哪，而是行李應不應該改變整個港區安排。', '有時候答案是簡化路線，有時候則是直接放棄步行，把重點放在保護下一段轉乘。']}],
      faqs: [{question: '帶行李會改變使用 Ibiza Port 的最佳方式嗎？', answer: '會。行李會讓步行、登船與轉乘都變得明顯更吃力。'}, {question: '有行李時是不是更該搭 taxi？', answer: '很多情況下是，特別是如果你還要趕機場或時間本來就很緊。'}, {question: '行李會讓走老城變得不值得嗎？', answer: '很可能。原本值得的港口步行，在有行李時常常會失去吸引力。'}],
      related: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-ferry-tickets'],
      thematicLinks: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-ferry-tickets'],
      primaryLink: {label: '帶行李前先在 Google Maps 查看 harbour 區域', href: googleMapsHref},
      sourceNote: '這頁幫你在真正拖著行李移動前，先判斷它應該如何改變你的港區計畫。',
      lastChecked: '2026 年 10 月'
    },
    'best-time-to-visit-ibiza-harbour': {
      title: 'Ibiza Harbour 最佳到訪時間',
      description: '整理什麼時間最適合到訪伊維薩港，依照氣氛、光線、步行舒適度與熱鬧程度來判斷。',
      intro: 'Ibiza Harbour 最適合什麼時候去，答案並不只有一個。有人想要更舒服地走，有人想要更好的傍晚光線，也有人就是想感受最熱鬧的港口氣氛。這頁把這些目標分開來看。',
      quickFacts: [{label: '適合誰', value: '還在決定什麼時段最適合自己到訪的旅客'}, {label: '主要內容', value: '時間、氣氛與實際舒適度'}, {label: '最適合拍照', value: '傍晚到入夜前的光線'}, {label: '最適合舒服走', value: '避開最熱、最擁擠的時段'}],
      sections: [{title: '為什麼時間比想像中更重要', paragraphs: ['Ibiza Harbour 在一天裡的性格會變很多。同一段 waterfront，在不同時間可能感覺安靜、容易定位，也可能更熱、更擁擠、更有夜生活氣息。', '所以最佳時間並不是單一答案，而是跟你的目的綁在一起。']}, {title: '想要氣氛還是想要輕鬆', paragraphs: ['如果你想要最有氣氛的版本，傍晚到晚上通常最能感受到 marina、餐廳與港口活動感一起出現。', '如果你想要的是更舒服的步行和較低壓力的定位，較不尖峰的時段通常更合適。']}, {title: '怎麼把時間變成規劃工具', paragraphs: ['最聰明的方式，是先決定你在港口最想做什麼，再反推時間。', '這比直接問一個對所有人都通用的完美時段更有用。']}],
      faqs: [{question: '想感受氣氛的話，什麼時候最好？', answer: '對很多人來說，傍晚到剛入夜是光線和 waterfront 氛圍最好的時段。'}, {question: '如果我想要比較輕鬆的到訪呢？', answer: '選擇較不尖峰、較不炎熱的時段，通常會明顯更舒服。'}, {question: '有沒有適合所有人的唯一最佳時間？', answer: '沒有，還是要看你更在意拍照、吃飯、步行還是交通效率。'}],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: '用 Google Maps 把 harbour 放進你的一天安排裡', href: googleMapsHref},
      sourceNote: '這頁幫你把時間當成港區規劃的一部分，而不是假設港口在每個時段都一樣。',
      lastChecked: '2026 年 10 月'
    }
  }
};

const senarySeoGuideContent: Partial<Record<SupportedLocale, Partial<Record<SenarySeoGuideSlug, SeoGuidePageContent>>>> = {
  en: {
    'ibiza-port-ferry-tickets': {
      title: 'Ibiza Port Ferry Tickets Guide',
      description: 'Guide to thinking about ferry tickets at Ibiza Port, including when to check operator details and how ticket planning fits harbour orientation.',
      intro: 'People searching for ferry tickets at Ibiza Port usually need clarity, not a long theory lesson. They want to know how ticket planning fits the real harbour experience and when they should focus on the operator versus the wider port layout.',
      quickFacts: [
        {label: 'Best for', value: 'Travellers planning or checking ferry departures from the harbour'},
        {label: 'Main focus', value: 'Ticket mindset, operator logic and departure planning'},
        {label: 'Most useful split', value: 'Separate ticket checks from physical port orientation'},
        {label: 'Best habit', value: 'Know the operator before arrival, then use the harbour to verify movement'}
      ],
      sections: [
        {title: 'Why ticket searches and harbour searches overlap', paragraphs: ['Many visitors search ferry tickets when what they really need is a mix of two things: ticket confidence and port confidence. The ticket belongs to the operator, but the stress usually happens in the harbour.', 'That is why this topic sits naturally between ferry-port content and Formentera day-trip planning.']},
        {title: 'How to think about ferry tickets properly', paragraphs: ['The smartest approach is to handle ticket questions first, then use the harbour only for physical orientation and live signage. Mixing those two steps too late often creates unnecessary stress near departure time.', 'In practice, tickets and harbour movement are related but should not be treated as the same problem.']},
        {title: 'When ticket planning matters most', paragraphs: ['Ticket details matter even more when you are aiming for a day trip, carrying luggage or trying to protect a same-day connection. In those cases, clarity before arrival is more valuable than trying to solve everything on the waterfront.', 'Good ticket planning makes the harbour feel simpler.']}
      ],
      faqs: [
        {question: 'Should you solve ferry tickets before arriving at Ibiza Port?', answer: 'Yes. It is usually easier to separate operator and ticket questions from the physical harbour orientation.'},
        {question: 'Do ferry tickets and ferry-port planning overlap?', answer: 'Yes, but they are not identical. Ticket planning is usually best handled before arrival, while the harbour is for final physical orientation.'},
        {question: 'Who benefits most from careful ticket planning?', answer: 'Day-trippers, luggage-carrying travellers and anyone protecting a same-day schedule benefit the most.'}
      ],
      related: ['ibiza-ferry-port', 'ibiza-to-formentera-ferry', 'ibiza-port-to-formentera-day-trip'],
      thematicLinks: ['ibiza-ferry-port', 'ibiza-to-formentera-ferry', 'ibiza-port-to-formentera-day-trip'],
      primaryLink: {label: 'Open Ibiza Harbour for ferry departure orientation', href: googleMapsHref},
      sourceNote: 'Use this page to separate operator ticket planning from the harbour-side movement you will handle on the day.',
      lastChecked: 'October 2026'
    },
    'ibiza-port-to-formentera-day-trip': {
      title: 'Ibiza Port to Formentera Day Trip Guide',
      description: 'Guide to planning a Formentera day trip from Ibiza Port, including timing mindset, ferry logic and how to keep the day realistic.',
      intro: 'A Formentera day trip is one of the strongest practical extensions from Ibiza Port. The best day-trip planning is not only about the ferry itself. It is about understanding how the harbour, ticket timing and return logic all fit into one manageable day.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors trying to turn the harbour into a practical Formentera launch point'},
        {label: 'Main focus', value: 'Day-trip logic, ferry timing and return comfort'},
        {label: 'Strongest planning rule', value: 'Keep the day simple enough that the return still feels easy'},
        {label: 'Best starting point', value: 'Treat Ibiza Harbour as the day-trip anchor, not just the departure point'}
      ],
      sections: [
        {title: 'Why this is a different question from just the ferry route', paragraphs: ['The Ibiza to Formentera ferry page answers the basic route question. This page goes one step further and treats the harbour as the start of a full day-trip plan.', 'That shift matters because good day trips are really about timing, return energy and how much complexity you add on either side of the ferry.']},
        {title: 'How to keep the day trip realistic', paragraphs: ['The biggest mistake is treating the harbour departure as a tiny detail and overloading the rest of the day. A smoother plan respects the time needed for tickets, boarding, the crossing and the return back through Ibiza Port.', 'When the harbour is used well, it reduces friction at both ends of the trip.']},
        {title: 'What makes the best version of this day', paragraphs: ['The best version is usually the one where the departure feels calm, the island plan stays focused and the return to Ibiza still has enough margin to avoid stress.', 'A practical day trip almost always beats an overpacked one.']}
      ],
      faqs: [
        {question: 'Is Ibiza Port a good base for a Formentera day trip?', answer: 'Yes. It is the natural launch point for the trip, but the whole day works best when the port planning is treated seriously.'},
        {question: 'How is this different from the ferry page?', answer: 'This page is about the full day-trip structure, not only the crossing itself.'},
        {question: 'What is the biggest day-trip mistake?', answer: 'Overloading the island plan and underestimating how much the harbour still matters on the way back.'}
      ],
      related: ['ibiza-to-formentera-ferry', 'ibiza-port-ferry-tickets', 'ibiza-ferry-port'],
      thematicLinks: ['ibiza-to-formentera-ferry', 'ibiza-port-ferry-tickets', 'ibiza-ferry-port'],
      primaryLink: {label: 'Use Google Maps to anchor your Formentera day-trip start', href: googleMapsHref},
      sourceNote: 'Use this guide when you want to treat the harbour as the real beginning and end of the day trip rather than only the boarding point.',
      lastChecked: 'October 2026'
    },
    'ibiza-harbour-sunset': {
      title: 'Ibiza Harbour Sunset Guide',
      description: 'Guide to experiencing sunset at Ibiza Harbour, including why the harbour works so well in evening light and how to combine it with walking or dining.',
      intro: 'Sunset is one of the easiest ways to understand why people like Ibiza Harbour so much. The light, marina views and movement between waterfront and old town all come together at that hour in a way that is hard to replicate earlier in the day.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors timing the harbour for atmosphere and photos'},
        {label: 'Main focus', value: 'Evening light, harbour mood and practical timing'},
        {label: 'Best pairing', value: 'Sunset plus a harbour walk or dinner'},
        {label: 'Best caution', value: 'Expect more activity and less calm than quieter daytime visits'}
      ],
      sections: [
        {title: 'Why sunset works so well at the harbour', paragraphs: ['The harbour concentrates several things sunset lovers care about at once: reflective water, marina structure, old-town silhouettes and a steady sense of motion around the waterfront.', 'That combination gives Ibiza Harbour a very different identity in the evening compared with daytime planning content.']},
        {title: 'How to build a sunset plan around it', paragraphs: ['The strongest sunset plan often combines an easy walk with either a meal or a continued evening in Ibiza Town. This keeps the harbour from being only a quick photo stop and turns it into the centre of the evening.', 'That is why sunset intent overlaps naturally with dining and best-time-to-visit content.']},
        {title: 'What to expect from the atmosphere', paragraphs: ['Sunset usually brings more people, more movement and a more social mood than quieter hours. Some visitors will love that energy, while others may prefer the harbour earlier in the day.', 'Knowing that difference is part of using the harbour well.']}
      ],
      faqs: [
        {question: 'Is Ibiza Harbour good for sunset?', answer: 'Yes. For many visitors, the combination of marina views, light and old-town backdrop makes it one of the harbour\'s best times.'},
        {question: 'What works best with a sunset visit?', answer: 'A harbour walk or dinner nearby usually pairs very well with the timing.'},
        {question: 'Is sunset the calmest time to visit?', answer: 'Not usually. It often brings more energy and activity than quieter daytime hours.'}
      ],
      related: ['best-time-to-visit-ibiza-harbour', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['best-time-to-visit-ibiza-harbour', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: 'Open Ibiza Harbour to plan a sunset visit', href: googleMapsHref},
      sourceNote: 'Use this page to decide whether you want the harbour as a calm walk, a sunset photo stop or the base for your evening.',
      lastChecked: 'October 2026'
    }
  },
  es: {
    'ibiza-port-ferry-tickets': {
      title: 'Guía de billetes de ferri en Ibiza Port',
      description: 'Guía para pensar mejor los billetes de ferri en el puerto de Ibiza y su relación con la orientación real dentro del harbour.',
      intro: 'Quien busca ferry tickets en Ibiza Port suele necesitar claridad más que teoría. Lo importante es separar la parte de operador y billete de la parte física del puerto para no resolverlo todo a última hora.',
      quickFacts: [{label: 'Ideal para', value: 'Viajeros que planifican o revisan salidas de ferri desde el harbour'}, {label: 'Enfoque principal', value: 'Billetes, operador y lógica de salida'}, {label: 'Separación útil', value: 'Resolver billetes antes y usar el puerto para orientarse después'}, {label: 'Mejor hábito', value: 'Llegar sabiendo la compañía y usar el harbour solo para la parte física'}],
      sections: [{title: 'Por qué se mezclan tanto los billetes y el puerto', paragraphs: ['Mucha gente busca billetes cuando en realidad necesita dos cosas a la vez: seguridad sobre la reserva y seguridad dentro del puerto.', 'El billete depende del operador, pero el estrés casi siempre aparece en el harbour.']}, {title: 'Cómo pensar bien el tema billetes', paragraphs: ['Lo más inteligente suele ser resolver primero todo lo del billete y dejar el puerto para orientación y señalización en directo.', 'Si mezclas ambas cosas demasiado tarde, el embarque suele sentirse más caótico.']}, {title: 'Cuándo importa más esta planificación', paragraphs: ['Importa todavía más si haces una excursión de un día, si llevas equipaje o si proteges una conexión el mismo día.', 'Cuanto mejor cierras la parte del billete, más sencillo se siente el puerto.']}],
      faqs: [{question: 'Conviene resolver los billetes antes de llegar a Ibiza Port?', answer: 'Sí. Normalmente es mejor separar la parte del operador de la orientación física del harbour.'}, {question: 'Billetes y ferry port son el mismo problema?', answer: 'No exactamente. Están relacionados, pero lo ideal es resolver el billete antes y usar el puerto para el último tramo práctico.'}, {question: 'Quién se beneficia más de planificar bien los billetes?', answer: 'Sobre todo quien hace excursión de un día, viaja con equipaje o tiene horarios ajustados.'}],
      related: ['ibiza-ferry-port', 'ibiza-to-formentera-ferry', 'ibiza-port-to-formentera-day-trip'],
      thematicLinks: ['ibiza-ferry-port', 'ibiza-to-formentera-ferry', 'ibiza-port-to-formentera-day-trip'],
      primaryLink: {label: 'Abrir Ibiza Harbour para orientarte antes de la salida', href: googleMapsHref},
      sourceNote: 'Usa esta guía para separar la parte de billete y operador de la parte física del puerto que resolverás el día del viaje.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-port-to-formentera-day-trip': {
      title: 'Guía de excursión de un día a Formentera desde Ibiza Port',
      description: 'Guía para planificar una excursión de un día a Formentera saliendo desde el puerto de Ibiza, con foco en tiempos, ferri y vuelta sin estrés.',
      intro: 'La excursión de un día a Formentera es una de las extensiones más naturales desde Ibiza Port. Pero lo más importante no es solo el ferri: es entender cómo el puerto, los billetes y la vuelta encajan dentro de un mismo día que siga siendo razonable.',
      quickFacts: [{label: 'Ideal para', value: 'Viajeros que quieren usar el harbour como punto real de salida a Formentera'}, {label: 'Enfoque principal', value: 'Lógica de excursión, tiempos y vuelta cómoda'}, {label: 'Regla más útil', value: 'Mantener el día lo bastante simple para que el regreso siga siendo llevadero'}, {label: 'Punto clave', value: 'Pensar el harbour como ancla del día, no solo como muelle'}],
      sections: [{title: 'Por qué esta pregunta no es solo el ferry', paragraphs: ['La página del ferry Ibiza Formentera resuelve la duda básica de la ruta. Esta va un paso más allá y trata el harbour como inicio y final de una excursión completa.', 'Eso cambia mucho porque una buena excursión depende de tiempos, energía y margen para volver bien.']}, {title: 'Cómo mantener el día realista', paragraphs: ['El error más típico es pensar que la salida desde el harbour es un detalle pequeño y cargar demasiado el resto del día.', 'Un plan más suave respeta el tiempo de billete, embarque, trayecto y vuelta por el puerto de Ibiza.']}, {title: 'Qué hace que esta excursión funcione bien', paragraphs: ['La mejor versión suele ser aquella en la que la salida es tranquila, la isla no se sobrecarga y la vuelta a Ibiza aún tiene margen suficiente.', 'Una excursión práctica casi siempre gana a una demasiado ambiciosa.']}],
      faqs: [{question: 'Es Ibiza Port una buena base para una excursión de un día a Formentera?', answer: 'Sí. Es el punto natural de salida, pero la excursión funciona mucho mejor si tratas el puerto como parte importante del plan.'}, {question: 'En qué se diferencia esta página de la del ferry?', answer: 'Esta página se centra en toda la estructura del día, no solo en el trayecto marítimo.'}, {question: 'Cuál es el error más común?', answer: 'Cargar demasiado la excursión y subestimar lo importante que sigue siendo el harbour en la vuelta.'}],
      related: ['ibiza-to-formentera-ferry', 'ibiza-port-ferry-tickets', 'ibiza-ferry-port'],
      thematicLinks: ['ibiza-to-formentera-ferry', 'ibiza-port-ferry-tickets', 'ibiza-ferry-port'],
      primaryLink: {label: 'Usar Google Maps para fijar el inicio de tu excursión a Formentera', href: googleMapsHref},
      sourceNote: 'Usa esta guía cuando quieras tratar el harbour como principio y final real de la excursión, no solo como punto de embarque.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-harbour-sunset': {
      title: 'Guía del atardecer en Ibiza Harbour',
      description: 'Guía para disfrutar el atardecer en Ibiza Harbour y entender por qué la zona funciona tan bien con la luz de la tarde y primera noche.',
      intro: 'El atardecer es una de las formas más fáciles de entender por qué Ibiza Harbour gusta tanto. La luz, las marinas y el movimiento entre el waterfront y el casco histórico se juntan de una forma muy distinta a la del resto del día.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes que quieren priorizar ambiente y fotos'}, {label: 'Enfoque principal', value: 'Luz de tarde, ambiente y tiempo práctico'}, {label: 'Mejor combinación', value: 'Atardecer más paseo o cena en el harbour'}, {label: 'Matiz importante', value: 'Suele haber más gente y más actividad que en horas tranquilas'}],
      sections: [{title: 'Por qué el atardecer funciona tan bien aquí', paragraphs: ['El harbour concentra varias cosas que favorecen el atardecer: agua reflectante, líneas de marina, siluetas del casco antiguo y movimiento constante en el waterfront.', 'Todo eso da al puerto una identidad muy distinta a la de las visitas diurnas.']}, {title: 'Cómo montar un buen plan de atardecer', paragraphs: ['Lo más sólido suele ser combinar el atardecer con un paseo sencillo o con una cena cerca. Así el harbour deja de ser solo un punto para fotos y se convierte en el centro de la tarde-noche.', 'Por eso el atardecer se cruza tan bien con restaurantes y best-time-to-visit.']}, {title: 'Qué ambiente puedes esperar', paragraphs: ['A esa hora suele haber más gente, más movimiento y un ambiente más social que en otras franjas.', 'A algunos les encanta esa energía; otros prefieren el harbour en horas más calmadas.']}],
      faqs: [{question: 'Es Ibiza Harbour un buen lugar para ver el atardecer?', answer: 'Sí. Para mucha gente, es uno de los mejores momentos del puerto por luz, marinas y fondo de casco antiguo.'}, {question: 'Qué encaja mejor con una visita al atardecer?', answer: 'Suele combinar muy bien con paseo portuario o cena cercana.'}, {question: 'Es la hora más tranquila?', answer: 'No normalmente. Suele traer más actividad que otros momentos del día.'}],
      related: ['best-time-to-visit-ibiza-harbour', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['best-time-to-visit-ibiza-harbour', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: 'Abrir Ibiza Harbour para planificar una visita al atardecer', href: googleMapsHref},
      sourceNote: 'Esta página te ayuda a decidir si quieres usar el harbour como paseo tranquilo, punto fotográfico o centro de tu tarde-noche.',
      lastChecked: 'Octubre 2026'
    }
  },
  fr: {
    'ibiza-port-ferry-tickets': {
      title: 'Guide des billets de ferry au port d Ibiza',
      description: 'Guide pratique pour penser les billets de ferry au port d Ibiza et leur lien avec l orientation reelle dans le harbour.',
      intro: 'Les recherches sur les billets de ferry demandent surtout de la clarte. Il faut separer la question de l operateur et du billet de la question physique du port pour eviter le stress de derniere minute.',
      quickFacts: [{label: 'Ideal pour', value: 'Voyageurs preparant ou verifiant des departs de ferry'}, {label: 'Sujet principal', value: 'Billets, operateur et logique de depart'}, {label: 'Separation utile', value: 'Regler le billet avant et utiliser le harbour ensuite pour s orienter'}, {label: 'Bon reflexe', value: 'Connaitre l operateur avant l arrivee'}],
      sections: [{title: 'Pourquoi billets et harbour se melangent autant', paragraphs: ['Beaucoup de visiteurs cherchent des billets alors qu ils ont besoin en realite de deux assurances : la reservation et le mouvement dans le port.', 'Le billet appartient a l operateur, mais le stress se produit souvent sur le waterfront.']}, {title: 'Comment bien penser les billets', paragraphs: ['Le plus simple est de regler le sujet billet d abord puis de laisser au harbour la seule orientation physique finale.', 'Quand on melange les deux trop tard, le depart se complique inutilement.']}, {title: 'Quand cette preparation compte le plus', paragraphs: ['Elle compte encore plus pour une journee a Formentera, avec bagages ou avec un planning serre.', 'Mieux les billets sont regles, plus le harbour parait simple.']}],
      faqs: [{question: 'Faut il regler les billets avant d arriver au port ?', answer: 'Oui. Il vaut mieux separer la logique de l operateur de l orientation physique du harbour.'}, {question: 'Billets et ferry port sont ils le meme sujet ?', answer: 'Ils se recoupent, mais ne sont pas identiques. Les billets se traitent mieux avant, le harbour sert ensuite a l approche finale.'}, {question: 'Qui profite le plus d une bonne preparation billet ?', answer: 'Les excursionnistes a la journee, les voyageurs avec bagages et ceux qui protegent un horaire serre.'}],
      related: ['ibiza-ferry-port', 'ibiza-to-formentera-ferry', 'ibiza-port-to-formentera-day-trip'],
      thematicLinks: ['ibiza-ferry-port', 'ibiza-to-formentera-ferry', 'ibiza-port-to-formentera-day-trip'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour pour l orientation de depart', href: googleMapsHref},
      sourceNote: 'Utilisez cette page pour separer la preparation du billet de la navigation physique dans le port le jour du depart.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-port-to-formentera-day-trip': {
      title: 'Guide d excursion a Formentera depuis le port',
      description: 'Guide pour organiser une excursion a la journee vers Formentera depuis le port d Ibiza, avec logique de ferry et retour serein.',
      intro: 'Formentera est l une des extensions les plus naturelles depuis Ibiza Port. Mais la vraie question n est pas seulement le ferry : c est la maniere dont le harbour, les billets et le retour forment une journee cohérente.',
      quickFacts: [{label: 'Ideal pour', value: 'Voyageurs voulant utiliser le harbour comme vrai point de depart vers Formentera'}, {label: 'Sujet principal', value: 'Logique d excursion a la journee et retour confortable'}, {label: 'Regle principale', value: 'Garder une journee assez simple pour que le retour reste facile'}, {label: 'Point cle', value: 'Voir le harbour comme l ancre du jour'}],
      sections: [{title: 'Pourquoi ce sujet depasse le simple ferry', paragraphs: ['La page ferry repond a la question de base de la traversée. Cette page traite le harbour comme debut et fin d une vraie excursion.', 'Cela change tout parce qu une bonne excursion depend aussi du retour et de l energie restante.']}, {title: 'Comment garder la journee realiste', paragraphs: ['L erreur typique consiste a minimiser l importance du depart depuis le harbour puis a surcharger le reste de la journee.', 'Un plan plus calme respecte billet, embarquement, traversée et retour au port.']}, {title: 'Ce qui rend cette excursion vraiment bonne', paragraphs: ['La meilleure version est souvent celle ou le depart est calme, le programme reste concentre et le retour a Ibiza conserve une vraie marge.', 'Une excursion pratique gagne presque toujours sur une journee trop chargee.']}],
      faqs: [{question: 'Le port d Ibiza est il une bonne base pour une excursion a Formentera ?', answer: 'Oui. C est le point naturel de depart, a condition de traiter le harbour comme une vraie partie du plan.'}, {question: 'En quoi cette page differe t elle de la page ferry ?', answer: 'Elle se concentre sur la structure complete de la journee et pas seulement sur la traversée.'}, {question: 'Quelle est l erreur la plus courante ?', answer: 'Surcharger la journee et sous-estimer l importance du harbour au retour.'}],
      related: ['ibiza-to-formentera-ferry', 'ibiza-port-ferry-tickets', 'ibiza-ferry-port'],
      thematicLinks: ['ibiza-to-formentera-ferry', 'ibiza-port-ferry-tickets', 'ibiza-ferry-port'],
      primaryLink: {label: 'Utiliser Google Maps pour ancrer votre depart vers Formentera', href: googleMapsHref},
      sourceNote: 'Utilisez cette page lorsque vous voulez traiter le harbour comme vrai debut et vraie fin de l excursion.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-harbour-sunset': {
      title: 'Guide du coucher de soleil a Ibiza Harbour',
      description: 'Guide pour profiter du coucher de soleil au harbour et comprendre pourquoi ce moment change vraiment l experience du port.',
      intro: 'Le coucher de soleil est l une des manieres les plus simples de comprendre l attrait d Ibiza Harbour. La lumiere, les marinas et la liaison avec la vieille ville changent completement l ambiance du secteur.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs qui priorisent l atmosphere et les photos'}, {label: 'Sujet principal', value: 'Lumiere du soir, ambiance et timing pratique'}, {label: 'Meilleur duo', value: 'Coucher de soleil avec marche ou repas'}, {label: 'A savoir', value: 'L ambiance est souvent plus vive que dans les heures calmes'}],
      sections: [{title: 'Pourquoi le coucher de soleil fonctionne si bien ici', paragraphs: ['Le harbour reunit plusieurs qualites qui magnifient le soir : eau, marinas, silhouettes de la vieille ville et mouvement du waterfront.', 'Tout cela donne au port une identite differente de celle des visites diurnes.']}, {title: 'Comment construire un bon plan de coucher de soleil', paragraphs: ['Le plan le plus solide combine souvent coucher de soleil, marche simple et repas ou suite de soiree.', 'Ainsi, le harbour devient le centre du moment et pas seulement un point photo rapide.']}, {title: 'Quelle ambiance attendre', paragraphs: ['Le soir amene en general plus de monde, plus de mouvement et une ambiance plus sociale.', 'Certains visiteurs adorent cette energie ; d autres preferent les heures plus calmes.']}],
      faqs: [{question: 'Ibiza Harbour est il un bon endroit pour le coucher de soleil ?', answer: 'Oui. Pour beaucoup de visiteurs, c est l un des meilleurs moments du harbour grace a la lumiere et au decor.'}, {question: 'Que faut il associer a une visite au coucher du soleil ?', answer: 'Une marche portuaire ou un repas a proximite fonctionnent tres bien.'}, {question: 'Est ce le moment le plus calme ?', answer: 'Pas vraiment. Le coucher de soleil apporte souvent plus d activite que les heures plus tranquilles.'}],
      related: ['best-time-to-visit-ibiza-harbour', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['best-time-to-visit-ibiza-harbour', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour pour preparer une visite au coucher du soleil', href: googleMapsHref},
      sourceNote: 'Cette page aide a choisir entre une promenade calme, une parenthese photo ou un vrai debut de soiree au harbour.',
      lastChecked: 'Octobre 2026'
    }
  },
  'zh-Hant': {
    'ibiza-port-ferry-tickets': {
      title: 'Ibiza Port 渡輪票務指南',
      description: '整理伊維薩港渡輪票務該怎麼思考，以及票務規劃和實際港區動線之間的關係。',
      intro: '搜尋 ferry tickets 的人，真正需要的通常不是長篇解釋，而是把「票務問題」和「港區定位問題」分開。這樣才不會在臨近出發時把兩件事一起塞到現場處理。',
      quickFacts: [{label: '適合誰', value: '正在規劃或確認港口渡輪出發的旅客'}, {label: '主要內容', value: '票務、船公司與出發規劃邏輯'}, {label: '最好拆法', value: '先處理票務，再用 harbour 處理現場定位'}, {label: '實用習慣', value: '抵達前先知道船公司，現場只專心看動線'}],
      sections: [{title: '為什麼票務搜尋和港口搜尋會重疊', paragraphs: ['很多人表面上在找票，其實同時想解決兩件事：票務是否穩妥，以及到了港口後會不會手忙腳亂。', '票的問題屬於船公司，但壓力通常發生在 harbour 現場。']}, {title: '票務應該怎麼思考才對', paragraphs: ['最穩的做法通常是先把票和船公司問題處理好，再把 harbour 留給最後的現場定位與標示判讀。', '如果兩者都拖到很晚才解決，出發體感通常會明顯更亂。']}, {title: '什麼時候票務規劃特別重要', paragraphs: ['如果你是一日遊、有行李，或還要保護同一天其他轉乘，票務規劃的重要性會更高。', '票務越清楚，港口越容易。']}],
      faqs: [{question: '是不是最好在到港前就把票務問題處理好？', answer: '通常是。把船公司與票務先弄清楚，現場就能專心處理港區動線。'}, {question: '票務和 ferry port 規劃是同一件事嗎？', answer: '不是完全一樣。票務最好先處理，harbour 則負責最後的現場定位。'}, {question: '哪些人最需要先把票務想清楚？', answer: '一日遊旅客、有行李的人，以及當天時間比較緊的人。'}],
      related: ['ibiza-ferry-port', 'ibiza-to-formentera-ferry', 'ibiza-port-to-formentera-day-trip'],
      thematicLinks: ['ibiza-ferry-port', 'ibiza-to-formentera-ferry', 'ibiza-port-to-formentera-day-trip'],
      primaryLink: {label: '在 Google Maps 打開 Ibiza Harbour 做出發定位', href: googleMapsHref},
      sourceNote: '這頁幫你把票務和現場港口定位拆開處理，減少臨出發前的混亂。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-port-to-formentera-day-trip': {
      title: '從 Ibiza Port 去 Formentera 一日遊指南',
      description: '整理從伊維薩港出發去 Formentera 一日遊時，最實用的規劃思路，包括票務、出發、回程與整體節奏。',
      intro: 'Formentera 一日遊是 Ibiza Port 最自然也最強的延伸之一。但真正決定體驗好不好，不只是 ferry 本身，而是整個 harbour、票務與回程節奏能不能被當成一個完整的一天來安排。',
      quickFacts: [{label: '適合誰', value: '想把 harbour 當成 Formentera 一日遊起點的旅客'}, {label: '主要內容', value: '一日遊節奏、渡輪邏輯與回程舒適度'}, {label: '最好原則', value: '把一天控制在回程仍然很順的程度'}, {label: '核心思路', value: '把 harbour 當成整天的起點與終點，而不只是碼頭'}],
      sections: [{title: '為什麼這不只是 ferry 問題', paragraphs: ['Ibiza 到 Formentera 的 ferry 頁面回答的是基本路線問題。這一頁往前再走一步，直接把 harbour 當作整趟一日遊的開頭和結尾。', '這會改變規劃方式，因為真正的一日遊要看整體節奏，而不只是船班。']}, {title: '怎麼讓這趟一日遊保持合理', paragraphs: ['最常見的錯誤，是把 harbour 出發當成很小的細節，反而把島上行程排得太滿。', '比較順的版本會尊重票務、登船、航程和回到 Ibiza Port 後還需要的時間。']}, {title: '最好的版本通常長什麼樣', paragraphs: ['通常最好的版本，是去程平穩、島上安排集中，回到 Ibiza 時還保有足夠餘裕。', '務實的一日遊幾乎總是比過度塞滿的版本更好。']}],
      faqs: [{question: 'Ibiza Port 適合當 Formentera 一日遊出發點嗎？', answer: '很適合，它本來就是最自然的出發點，但要把 harbour 本身也當成整個計畫的一部分。'}, {question: '這頁和 ferry 那頁有什麼不同？', answer: '這頁講的是整個一日遊結構，不只是渡輪航程本身。'}, {question: '最常見的錯誤是什麼？', answer: '把島上行程排太滿，低估回到 harbour 後還需要處理的節奏。'}],
      related: ['ibiza-to-formentera-ferry', 'ibiza-port-ferry-tickets', 'ibiza-ferry-port'],
      thematicLinks: ['ibiza-to-formentera-ferry', 'ibiza-port-ferry-tickets', 'ibiza-ferry-port'],
      primaryLink: {label: '用 Google Maps 錨定你的 Formentera 一日遊起點', href: googleMapsHref},
      sourceNote: '這頁適合在你想把 harbour 當成整天行程核心，而不是只看單趟船班時使用。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-harbour-sunset': {
      title: 'Ibiza Harbour 日落指南',
      description: '整理為什麼伊維薩港特別適合看日落，以及日落時段最適合怎麼和散步、晚餐與港區氛圍結合。',
      intro: '日落是最容易理解 Ibiza Harbour 魅力的時刻之一。當光線、marina、水面反射和老城輪廓一起出現時，港口會呈現出跟白天完全不同的感覺。',
      quickFacts: [{label: '適合誰', value: '想把氣氛和拍照放在前面的旅客'}, {label: '主要內容', value: '傍晚光線、港區氛圍與實際安排'}, {label: '最適合搭配', value: '日落加港邊散步或晚餐'}, {label: '需要注意', value: '通常比白天更熱鬧，不一定最安靜'}],
      sections: [{title: '為什麼日落時分特別適合港口', paragraphs: ['港區在日落時同時具備幾個很強的條件：水面反光、marina 線條、老城輪廓和 waterfront 活動感。', '這些元素讓 Ibiza Harbour 在傍晚有一種白天沒有的身份感。']}, {title: '怎麼把日落安排得更完整', paragraphs: ['最好的日落安排通常不是只停下來拍照，而是把它和港邊散步或晚餐接在一起。', '這樣 harbour 就不只是拍照點，而是整個傍晚的核心。']}, {title: '這個時段的氛圍會是什麼樣', paragraphs: ['日落通常意味著更多人、更強的活動感和更社交的氣氛。', '有些人會很愛這種能量，也有人會更喜歡早一點的平靜版本。']}],
      faqs: [{question: 'Ibiza Harbour 適合看日落嗎？', answer: '很適合。對很多旅客來說，這是港口最迷人的時段之一。'}, {question: '日落時最適合搭配什麼安排？', answer: '通常和港邊散步或附近晚餐最搭。'}, {question: '這是最安靜的到訪時段嗎？', answer: '通常不是，它往往比白天的安靜時段更熱鬧。'}],
      related: ['best-time-to-visit-ibiza-harbour', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      thematicLinks: ['best-time-to-visit-ibiza-harbour', 'ibiza-harbour-restaurants', 'things-to-do-near-ibiza-port'],
      primaryLink: {label: '在 Google Maps 打開 Ibiza Harbour 規劃日落時段', href: googleMapsHref},
      sourceNote: '這頁幫你決定是把 harbour 當成安靜散步點、日落拍照點，還是整個傍晚的起點。',
      lastChecked: '2026 年 10 月'
    }
  }
};

const septenarySeoGuideContent: Partial<Record<SupportedLocale, Partial<Record<SeptenarySeoGuideSlug, SeoGuidePageContent>>>> = {
  en: {
    'ibiza-port-boarding-tips': {
      title: 'Ibiza Port Boarding Tips Guide',
      description: 'Practical boarding tips for Ibiza Port, including how to reduce last-minute stress and what to handle before reaching the harbour.',
      intro: 'Boarding stress at Ibiza Port usually comes from timing, orientation and trying to solve too many things at once. This page is for travellers who want a cleaner boarding routine rather than vague port advice.',
      quickFacts: [
        {label: 'Best for', value: 'Travellers preparing to board ferries or similar departures from the harbour'},
        {label: 'Main focus', value: 'Boarding routine, timing and stress reduction'},
        {label: 'Best principle', value: 'Handle ticket logic early and harbour movement separately'},
        {label: 'Best outcome', value: 'Arrive calm enough that boarding feels procedural, not chaotic'}
      ],
      sections: [
        {title: 'Why boarding feels harder than it should', paragraphs: ['Many travellers do not struggle with the actual act of boarding. They struggle with the chain of decisions right before it: tickets, signs, where to wait and whether they are in the right place.', 'That is why boarding tips deserve a dedicated page even when ferry pages already exist.']},
        {title: 'What to do before you reach the port', paragraphs: ['The most useful boarding tip is to separate anything operator-related from the physical port experience. Confirm the ticket and core departure details before arrival, then use the harbour only for orientation and final movement.', 'This split makes boarding feel much more manageable.']},
        {title: 'How to make the last stretch feel easier', paragraphs: ['Give yourself enough margin to read signs, absorb the layout and move without rushing. The goal is not simply to arrive early. It is to arrive with enough attention left to handle the harbour calmly.', 'Good boarding is mostly good preparation plus unhurried movement.']}
      ],
      faqs: [
        {question: 'What is the best boarding tip for Ibiza Port?', answer: 'Handle ticket details before arrival and leave the harbour for final physical orientation only.'},
        {question: 'Why does boarding sometimes feel stressful?', answer: 'Because travellers often try to solve tickets, timing and physical orientation all at the same moment.'},
        {question: 'Should you build time into the last part of the journey?', answer: 'Yes. A calmer final approach usually makes the whole boarding process easier.'}
      ],
      related: ['ibiza-port-ferry-tickets', 'ibiza-ferry-port', 'ibiza-port-to-taxis-and-buses'],
      thematicLinks: ['ibiza-port-ferry-tickets', 'ibiza-ferry-port', 'ibiza-port-to-taxis-and-buses'],
      primaryLink: {label: 'Open Ibiza Harbour for boarding orientation', href: googleMapsHref},
      sourceNote: 'Use this guide when you want to make boarding feel simpler by separating operator checks, timing and the final port approach.',
      lastChecked: 'October 2026'
    },
    'ibiza-harbour-night-walk': {
      title: 'Ibiza Harbour Night Walk Guide',
      description: 'Guide to enjoying a night walk at Ibiza Harbour, including atmosphere, pacing and how it differs from daytime harbour visits.',
      intro: 'A night walk around Ibiza Harbour is not just a darker version of the daytime route. The mood, pace and reasons for walking change once the harbour shifts into evening and nightlife-adjacent energy.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors who want evening atmosphere more than daytime logistics'},
        {label: 'Main focus', value: 'Night-walk mood, route logic and harbour feel'},
        {label: 'Best pairing', value: 'Night walk plus dinner, sunset or an old-town stroll'},
        {label: 'Best mindset', value: 'Treat the walk as an atmosphere-first experience'}
      ],
      sections: [
        {title: 'Why a night walk deserves its own page', paragraphs: ['The harbour changes after dark. What matters less at night is pure orientation, and what matters more is atmosphere, rhythm and how the waterfront feels with lights, people and evening movement.', 'That makes a night walk different from the more practical daytime walking-route pages.']},
        {title: 'How to think about the best night walk', paragraphs: ['The strongest version is usually not an ambitious route. It is a simple and enjoyable one that lets the harbour atmosphere do the work.', 'That often means combining the waterfront with a nearby meal, a sunset transition or a short continuation toward the old town.']},
        {title: 'What to expect from the harbour after dark', paragraphs: ['Night brings a more social, active and visually textured version of the harbour. For some visitors, this is the best way to experience the area. For others, it can feel busier than they want.', 'The key is to choose the night walk for mood, not because it is the only time available.']}
      ],
      faqs: [
        {question: 'Is Ibiza Harbour good for a night walk?', answer: 'Yes. For many visitors, the harbour feels especially atmospheric after dark.'},
        {question: 'How is a night walk different from a daytime route?', answer: 'It is usually less about practical orientation and more about mood, light and evening energy.'},
        {question: 'What pairs best with a harbour night walk?', answer: 'Sunset, dinner or a short old-town extension often fit very well.'}
      ],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'ibiza-port-walking-route'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'ibiza-port-walking-route'],
      primaryLink: {label: 'Open Ibiza Harbour to plan an evening walk', href: googleMapsHref},
      sourceNote: 'Use this page to decide whether you want a simple atmospheric walk, a sunset-to-night transition or a broader evening harbour plan.',
      lastChecked: 'October 2026'
    },
    'ibiza-port-to-taxis-and-buses': {
      title: 'Ibiza Port to Taxis and Buses Guide',
      description: 'Guide to understanding taxi and bus connections from Ibiza Port, including when each option makes more sense after arrival.',
      intro: 'Some visitors do not want a specific destination yet. They just want to know how to move onward from Ibiza Port using taxis or buses. This page is for that decision stage.',
      quickFacts: [
        {label: 'Best for', value: 'Travellers choosing their first onward transport from the harbour'},
        {label: 'Main focus', value: 'Taxi-versus-bus logic from Ibiza Port'},
        {label: 'Best question', value: 'Are you optimising speed, ease or cost?'},
        {label: 'Best habit', value: 'Choose the mode that fits the rest of the day, not only the first transfer'}
      ],
      sections: [
        {title: 'Why this topic matters as its own search intent', paragraphs: ['Not everyone arrives at the port already committed to a single destination. Many travellers first need to understand their transport choices before deciding what comes next.', 'That makes taxis-and-buses intent broader than pages focused only on airport or old-town movement.']},
        {title: 'When taxis usually win', paragraphs: ['Taxis usually make the most sense when you value speed, comfort, luggage handling or reduced decision-making. They are especially attractive when the port feels hot, busy or unfamiliar.', 'The taxi choice is often about preserving energy as much as saving time.']},
        {title: 'When buses may fit better', paragraphs: ['Buses become more attractive when your schedule has more flexibility and you are comfortable trading immediacy for a more budget-oriented decision. The best choice depends on the whole plan, not only the first few minutes after arrival.', 'Thinking in those wider terms leads to better transport decisions.']}
      ],
      faqs: [
        {question: 'Should you choose a taxi or a bus from Ibiza Port?', answer: 'It depends on whether you value speed and ease more than flexibility and budget.'},
        {question: 'Who tends to benefit more from taxis?', answer: 'Travellers with luggage, time pressure or less desire to navigate the port slowly usually benefit more from taxis.'},
        {question: 'When are buses more appealing?', answer: 'They can fit better when the schedule is flexible and the onward plan is less time-sensitive.'}
      ],
      related: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-boarding-tips'],
      thematicLinks: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-boarding-tips'],
      primaryLink: {label: 'Open Ibiza Harbour to orient onward transport', href: googleMapsHref},
      sourceNote: 'Use this guide when your first real question is not the destination itself but which transport style fits the rest of your day.',
      lastChecked: 'October 2026'
    }
  },
  es: {
    'ibiza-port-boarding-tips': {
      title: 'Guía de consejos de embarque en Ibiza Port',
      description: 'Consejos prácticos para embarcar en el puerto de Ibiza con menos estrés y con una rutina más clara antes de llegar al harbour.',
      intro: 'El estrés de embarque en Ibiza Port suele venir de tiempos, orientación y de intentar resolver demasiadas cosas a la vez. Esta página busca precisamente simplificar esa última fase.',
      quickFacts: [{label: 'Ideal para', value: 'Viajeros que van a embarcar en ferri u otras salidas desde el harbour'}, {label: 'Enfoque principal', value: 'Rutina de embarque, tiempos y reducción de estrés'}, {label: 'Mejor principio', value: 'Separar billetes y operador de la parte física del puerto'}, {label: 'Objetivo final', value: 'Que el embarque se sienta ordenado y no caótico'}],
      sections: [{title: 'Por qué embarcar se siente más difícil de lo que debería', paragraphs: ['Muchas veces el problema no es embarcar en sí, sino la cadena de dudas justo antes: billete, carteles, dónde esperar o si estás bien ubicado.', 'Por eso los boarding tips merecen una página aparte aunque ya existan páginas de ferry.']}, {title: 'Qué conviene resolver antes de llegar al puerto', paragraphs: ['El mejor consejo suele ser separar lo relacionado con operador y billete de la experiencia física del harbour. Llega con esa parte resuelta y deja el puerto solo para la orientación final.', 'Esa separación hace que el embarque se vuelva mucho más manejable.']}, {title: 'Cómo hacer más fácil el último tramo', paragraphs: ['Conviene darte margen suficiente para leer señales, entender la disposición y moverte sin correr. El objetivo no es solo llegar antes, sino llegar con atención suficiente para actuar con calma.', 'Casi siempre, un buen embarque es preparación más movimiento sin prisa.']}],
      faqs: [{question: 'Cuál es el mejor consejo para embarcar en Ibiza Port?', answer: 'Llevar resuelta la parte de billete antes de llegar y usar el harbour solo para la orientación final.'}, {question: 'Por qué a veces embarcar se siente tan estresante?', answer: 'Porque mucha gente intenta resolver billetes, tiempos y orientación física justo al mismo tiempo.'}, {question: 'Conviene dejar margen en el último tramo?', answer: 'Sí. Un acercamiento final más calmado suele hacer mucho más fácil todo el embarque.'}],
      related: ['ibiza-port-ferry-tickets', 'ibiza-ferry-port', 'ibiza-port-to-taxis-and-buses'],
      thematicLinks: ['ibiza-port-ferry-tickets', 'ibiza-ferry-port', 'ibiza-port-to-taxis-and-buses'],
      primaryLink: {label: 'Abrir Ibiza Harbour para orientarte antes de embarcar', href: googleMapsHref},
      sourceNote: 'Usa esta guía cuando quieras separar billetes, tiempos y aproximación final al puerto para que embarcar resulte más simple.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-harbour-night-walk': {
      title: 'Guía de paseo nocturno en Ibiza Harbour',
      description: 'Guía para disfrutar un paseo nocturno en Ibiza Harbour y entender cómo cambia la zona cuando entra en modo tarde-noche.',
      intro: 'Un paseo nocturno por Ibiza Harbour no es simplemente la misma ruta de día con menos luz. Cambian el ritmo, el motivo de caminar y el tipo de ambiente que domina el waterfront.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes que priorizan ambiente de noche más que logística diurna'}, {label: 'Enfoque principal', value: 'Atmósfera, ruta y sensación nocturna del harbour'}, {label: 'Mejor combinación', value: 'Paseo más cena, sunset o una extensión al casco antiguo'}, {label: 'Mejor enfoque', value: 'Pensar el paseo como experiencia de ambiente'}],
      sections: [{title: 'Por qué el paseo nocturno merece su propia página', paragraphs: ['El harbour cambia al anochecer. Importa menos la pura orientación y mucho más el ambiente, las luces y el movimiento del waterfront.', 'Por eso tiene sentido separarlo de las páginas de walking route más prácticas.']}, {title: 'Cómo pensar el mejor paseo nocturno', paragraphs: ['La mejor versión suele ser una ruta sencilla, no una demasiado ambiciosa. Lo que hace fuerte al paseo es el ambiente.', 'A menudo funciona mejor combinado con cena, transición desde el sunset o una pequeña prolongación hacia el casco antiguo.']}, {title: 'Qué puedes esperar del puerto de noche', paragraphs: ['De noche el harbour suele sentirse más social, más activo y más visual. Para algunas personas, esa es la mejor cara del puerto; para otras, puede resultar más intensa de lo deseado.', 'La clave es elegirlo por ambiente, no por obligación.']}],
      faqs: [{question: 'Merece la pena un paseo nocturno en Ibiza Harbour?', answer: 'Sí. Para mucha gente, el harbour gana mucha atmósfera cuando cae la noche.'}, {question: 'En qué cambia frente a un paseo de día?', answer: 'Pasa de ser una cuestión más práctica a una experiencia más centrada en luz, ambiente y energía.'}, {question: 'Qué combina mejor con este paseo?', answer: 'Sunset, cena o una pequeña extensión hacia el casco antiguo suelen encajar muy bien.'}],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'ibiza-port-walking-route'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'ibiza-port-walking-route'],
      primaryLink: {label: 'Abrir Ibiza Harbour para planificar un paseo de noche', href: googleMapsHref},
      sourceNote: 'Usa esta guía para decidir si quieres un paseo atmosférico sencillo o un plan de tarde-noche más completo en el harbour.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-port-to-taxis-and-buses': {
      title: 'Guía de Ibiza Port a taxis y buses',
      description: 'Guía para entender las conexiones de taxi y bus desde Ibiza Port y decidir cuándo conviene más cada opción.',
      intro: 'Hay viajeros que al llegar al puerto todavía no tienen claro el destino exacto. Primero quieren entender cómo seguir desde Ibiza Port en taxi o en bus. Esta página responde a ese momento de decisión.',
      quickFacts: [{label: 'Ideal para', value: 'Viajeros que eligen su primer transporte al salir del harbour'}, {label: 'Enfoque principal', value: 'Lógica taxi frente a bus desde el puerto'}, {label: 'Pregunta clave', value: 'Si estás optimizando velocidad, facilidad o coste'}, {label: 'Mejor hábito', value: 'Elegir el modo que encaja con el resto del día'}],
      sections: [{title: 'Por qué esta búsqueda tiene sentido por sí sola', paragraphs: ['No todo el mundo llega al puerto con un destino ya cerrado. Muchos primero necesitan entender las opciones de transporte antes de decidir el siguiente paso.', 'Por eso esta intención es más amplia que páginas centradas solo en aeropuerto o casco antiguo.']}, {title: 'Cuándo suele ganar el taxi', paragraphs: ['El taxi suele tener más sentido cuando priorizas rapidez, comodidad, manejo de equipaje o menos toma de decisiones.', 'Muchas veces no solo ahorra tiempo; también preserva energía.']}, {title: 'Cuándo puede encajar mejor el bus', paragraphs: ['El bus gana atractivo cuando tu horario tiene más margen y aceptas cambiar inmediatez por una decisión más orientada al presupuesto.', 'La mejor elección depende del plan completo, no solo de los primeros minutos al llegar.']}],
      faqs: [{question: 'Qué conviene más desde Ibiza Port: taxi o bus?', answer: 'Depende de si priorizas rapidez y facilidad o si tienes más flexibilidad y cuidas más el presupuesto.'}, {question: 'Quién suele beneficiarse más del taxi?', answer: 'Normalmente quien lleva equipaje, va con más prisa o no quiere navegar despacio por el puerto.'}, {question: 'Cuándo puede resultar más atractivo el bus?', answer: 'Cuando el horario es flexible y el siguiente tramo no es tan sensible al tiempo.'}],
      related: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-boarding-tips'],
      thematicLinks: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-boarding-tips'],
      primaryLink: {label: 'Abrir Ibiza Harbour para orientarte con el transporte de salida', href: googleMapsHref},
      sourceNote: 'Usa esta guía cuando tu primera duda real no sea todavía el destino, sino qué estilo de transporte encaja mejor con el resto del día.',
      lastChecked: 'Octubre 2026'
    }
  },
  fr: {
    'ibiza-port-boarding-tips': {
      title: 'Guide des conseils d embarquement au port',
      description: 'Conseils pratiques pour embarquer au port d Ibiza avec moins de stress et une approche plus claire.',
      intro: 'Le stress d embarquement vient souvent du timing, de l orientation et du fait de vouloir tout resoudre en meme temps. Cette page sert a simplifier cette phase finale.',
      quickFacts: [{label: 'Ideal pour', value: 'Voyageurs preparant un embarquement depuis le harbour'}, {label: 'Sujet principal', value: 'Routine d embarquement et reduction du stress'}, {label: 'Meilleur principe', value: 'Separer billets et operateur de la partie physique du port'}, {label: 'Objectif', value: 'Rendre l embarquement plus procedural que chaotique'}],
      sections: [{title: 'Pourquoi embarquer semble plus dur que prevu', paragraphs: ['Souvent, la difficulte ne vient pas de l embarquement lui-meme mais de tout ce qui le precede : billet, panneaux, attente et bon emplacement.', 'C est pour cela que les conseils d embarquement meritent une page propre.']}, {title: 'Ce qu il faut regler avant d arriver', paragraphs: ['Le meilleur conseil consiste generalement a regler les questions d operateur et de billet avant l arrivee, puis a utiliser le harbour uniquement pour l orientation finale.', 'Cette separation rend le tout beaucoup plus gerable.']}, {title: 'Comment faciliter la derniere phase', paragraphs: ['Laissez-vous assez de marge pour lire, observer et bouger sans vous precipiter.', 'Un bon embarquement est souvent le resultat d une bonne preparation plus un dernier mouvement sans stress.']}],
      faqs: [{question: 'Quel est le meilleur conseil d embarquement au port d Ibiza ?', answer: 'Regler la partie billet avant l arrivee puis garder le harbour pour l orientation finale.'}, {question: 'Pourquoi l embarquement peut il sembler stressant ?', answer: 'Parce que beaucoup de voyageurs tentent de gerer billets, timing et orientation au meme moment.'}, {question: 'Faut il garder de la marge avant la derniere phase ?', answer: 'Oui. Une approche finale plus calme facilite tout le reste.'}],
      related: ['ibiza-port-ferry-tickets', 'ibiza-ferry-port', 'ibiza-port-to-taxis-and-buses'],
      thematicLinks: ['ibiza-port-ferry-tickets', 'ibiza-ferry-port', 'ibiza-port-to-taxis-and-buses'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour pour l orientation avant embarquement', href: googleMapsHref},
      sourceNote: 'Utilisez cette page pour separer billets, timing et approche finale du port afin de rendre l embarquement plus simple.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-harbour-night-walk': {
      title: 'Guide de promenade nocturne a Ibiza Harbour',
      description: 'Guide pour profiter d une promenade nocturne au harbour et comprendre ce qui change vraiment apres la tombee de la nuit.',
      intro: 'Une promenade nocturne au harbour n est pas juste une version sombre de la balade de jour. Le rythme, l ambiance et l interet du waterfront changent nettement apres la nuit tombee.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs cherchant surtout l ambiance du soir'}, {label: 'Sujet principal', value: 'Ambiance nocturne, logique de route et ressenti'}, {label: 'Meilleur duo', value: 'Promenade avec repas, sunset ou vieille ville'}, {label: 'Bonne approche', value: 'Voir la marche comme une experience d ambiance'}],
      sections: [{title: 'Pourquoi la promenade nocturne merite sa propre page', paragraphs: ['Le harbour change une fois la nuit tombee. L orientation pratique compte un peu moins, tandis que l ambiance, les lumieres et le mouvement prennent le dessus.', 'Cela la distingue des pages de marche plus utilitaires.']}, {title: 'Comment penser la meilleure promenade de nuit', paragraphs: ['La version la plus forte est souvent simple plutot qu ambitieuse. L ambiance fait l essentiel du travail.', 'Cela se combine tres bien avec un repas, une transition depuis le sunset ou une courte extension vers la vieille ville.']}, {title: 'Que faut il attendre du harbour la nuit', paragraphs: ['La nuit apporte souvent plus de vie, plus de mouvement et une ambiance plus sociale.', 'Pour certains c est la meilleure facon de vivre le harbour, pour d autres c est plus intense qu ils ne le souhaitent.']}],
      faqs: [{question: 'Ibiza Harbour convient il a une promenade nocturne ?', answer: 'Oui. Pour beaucoup de visiteurs, le harbour devient encore plus atmospherique la nuit.'}, {question: 'En quoi differe t elle d une balade de jour ?', answer: 'Elle est moins centree sur l orientation pratique et davantage sur l ambiance et la lumiere.'}, {question: 'Que faut il combiner avec cette promenade ?', answer: 'Un coucher de soleil, un repas ou une petite extension vers la vieille ville fonctionnent tres bien.'}],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'ibiza-port-walking-route'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'ibiza-port-walking-route'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour pour preparer une promenade du soir', href: googleMapsHref},
      sourceNote: 'Utilisez cette page pour choisir entre une simple marche d ambiance et un plan de soiree plus complet au harbour.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-port-to-taxis-and-buses': {
      title: 'Guide du port vers taxis et bus',
      description: 'Guide pour comprendre les options taxi et bus depuis le port d Ibiza et savoir quand chacune a plus de sens.',
      intro: 'Certains voyageurs n ont pas encore de destination precise en arrivant. Leur vraie question est d abord de savoir comment continuer depuis Ibiza Port en taxi ou en bus.',
      quickFacts: [{label: 'Ideal pour', value: 'Voyageurs choisissant leur premier transport depuis le harbour'}, {label: 'Sujet principal', value: 'Logique taxi contre bus depuis le port'}, {label: 'Bonne question', value: 'Cherchez-vous vitesse, simplicite ou budget ?'}, {label: 'Bon reflexe', value: 'Choisir le mode selon toute la journee et pas seulement le premier trajet'}],
      sections: [{title: 'Pourquoi cette recherche a sa propre utilite', paragraphs: ['Tout le monde n arrive pas avec une destination deja fixee. Beaucoup ont d abord besoin de comprendre les options de transport avant de choisir la suite.', 'Cette intention est donc plus large qu une simple page aeroport ou vieille ville.']}, {title: 'Quand les taxis gagnent le plus souvent', paragraphs: ['Les taxis gagnent souvent quand la vitesse, le confort, les bagages ou la simplicite priment.', 'Le vrai avantage du taxi tient souvent autant a l energie preservee qu au temps gagne.']}, {title: 'Quand les bus peuvent mieux convenir', paragraphs: ['Les bus deviennent plus attractifs quand le planning est plus souple et que vous acceptez un choix moins immediat mais plus budgetaire.', 'Le meilleur choix depend du plan complet de la journee.']}],
      faqs: [{question: 'Faut il choisir taxi ou bus depuis Ibiza Port ?', answer: 'Cela depend de l importance que vous accordez a la rapidite, a la simplicite ou au budget.'}, {question: 'Qui profite le plus des taxis ?', answer: 'Souvent les voyageurs avec bagages, pression horaire ou peu d envie de naviguer lentement dans le port.'}, {question: 'Quand les bus paraissent ils plus utiles ?', answer: 'Quand le planning est plus flexible et que le trajet suivant est moins sensible au temps.'}],
      related: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-boarding-tips'],
      thematicLinks: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-boarding-tips'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour pour orienter votre transport de sortie', href: googleMapsHref},
      sourceNote: 'Utilisez cette page lorsque votre premiere vraie question n est pas encore la destination mais le style de transport adapte au reste du jour.',
      lastChecked: 'Octobre 2026'
    }
  },
  'zh-Hant': {
    'ibiza-port-boarding-tips': {
      title: 'Ibiza Port 登船建議指南',
      description: '整理在伊維薩港登船前最實用的建議，幫你把最後一段流程變得更穩、更少壓力。',
      intro: 'Ibiza Port 的登船壓力，通常不是來自登船本身，而是來自最後一段同時要處理時間、票務、標示和定位。這頁就是專門把那段流程理順。',
      quickFacts: [{label: '適合誰', value: '準備從 harbour 登船的旅客'}, {label: '主要內容', value: '登船節奏、最後一段流程與減壓思路'}, {label: '最好原則', value: '票務先處理，港口現場只處理定位'}, {label: '最佳結果', value: '讓登船變成流程，而不是臨場混亂'}],
      sections: [{title: '為什麼登船常常比想像中更有壓力', paragraphs: ['很多人真正卡住的不是走上船，而是登船前那一連串的小判斷：票對不對、在哪裡等、標示是不是看懂了。', '所以 boarding tips 很值得獨立成頁，而不是只放在 ferry 頁面裡。']}, {title: '什麼事情應該在到港前先處理好', paragraphs: ['最穩的做法通常是把船公司和票務先確認好，等到了 harbour 再專心處理現場動線和標示。', '這個拆分會讓登船體感平靜很多。']}, {title: '怎麼讓最後一段更順', paragraphs: ['重點不是單純提早，而是提早到還有心力看懂標示、理解配置並且不需要趕著做決定。', '好的登船，通常就是前置清楚加上最後一段不急躁。']}],
      faqs: [{question: 'Ibiza Port 最好的登船建議是什麼？', answer: '先把票務和船公司資訊確認好，到港後只專心處理最後定位。'}, {question: '為什麼登船有時候會特別有壓力？', answer: '因為很多旅客把票務、時間和現場方向都放到同一時間點才一起處理。'}, {question: '最後一段應該多留一些時間嗎？', answer: '應該。更從容的最後接近過程，通常會讓整個登船明顯更順。'}],
      related: ['ibiza-port-ferry-tickets', 'ibiza-ferry-port', 'ibiza-port-to-taxis-and-buses'],
      thematicLinks: ['ibiza-port-ferry-tickets', 'ibiza-ferry-port', 'ibiza-port-to-taxis-and-buses'],
      primaryLink: {label: '在 Google Maps 打開 Ibiza Harbour 做登船前定位', href: googleMapsHref},
      sourceNote: '這頁幫你把票務、時間和最後進港動線拆開處理，讓登船更像固定流程而不是臨場應變。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-harbour-night-walk': {
      title: 'Ibiza Harbour 夜間散步指南',
      description: '整理夜晚在伊維薩港散步最值得知道的重點，包括氛圍、節奏，以及它和白天步行路線的差異。',
      intro: 'Ibiza Harbour 的夜間散步，不是白天路線的低亮度版本而已。到了晚上，港區更像是一種氛圍體驗，節奏和重點都會改變。',
      quickFacts: [{label: '適合誰', value: '想優先感受夜晚氣氛的旅客'}, {label: '主要內容', value: '夜間步行氛圍、路線感與港區感受'}, {label: '最適合搭配', value: '日落、晚餐或老城短延伸'}, {label: '最好思路', value: '把夜走當成氛圍優先的體驗'}],
      sections: [{title: '為什麼夜間散步值得獨立成頁', paragraphs: ['港區入夜後，純定位的重要性下降，燈光、人氣、waterfront 的節奏感反而變成主角。', '所以它和白天更偏實用的 walking route 頁面，確實是兩種不同意圖。']}, {title: '怎麼安排最好的夜間散步', paragraphs: ['最好的版本通常不是走得很多，而是走得剛好，讓港區的燈光和氣氛自己發揮。', '這種安排常常很適合和晚餐、日落銜接，或再順勢往老城多走一小段。']}, {title: '晚上大概會是什麼感覺', paragraphs: ['晚上通常更社交、更熱鬧，也更有視覺層次。對有些人來說，這正是 harbour 最迷人的版本；但也有人會覺得比白天更強烈。', '關鍵是要為了氣氛而選夜走，而不是只是因為時間剛好。']}],
      faqs: [{question: 'Ibiza Harbour 適合夜間散步嗎？', answer: '很適合。對很多旅客來說，harbour 入夜後反而更有魅力。'}, {question: '它和白天步行最大的差別是什麼？', answer: '白天更偏實用和定位，晚上則更偏燈光、氣氛和整體感受。'}, {question: '最適合搭配什麼安排？', answer: '通常和日落、晚餐，或往老城延伸一小段最搭。'}],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'ibiza-port-walking-route'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-restaurants', 'ibiza-port-walking-route'],
      primaryLink: {label: '在 Google Maps 打開 Ibiza Harbour 規劃夜間散步', href: googleMapsHref},
      sourceNote: '這頁幫你判斷要把 harbour 夜走當成單純散步、日落後延續，還是整個晚上的起點。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-port-to-taxis-and-buses': {
      title: 'Ibiza Port 到計程車與巴士指南',
      description: '整理從伊維薩港離開時，計程車和巴士該怎麼選，以及兩者分別適合什麼情境。',
      intro: '有些旅客抵達港口後，第一個問題還不是要去哪，而是要用什麼方式繼續移動。這頁就是回答從 Ibiza Port 接 taxi 或 bus 時最常見的決策問題。',
      quickFacts: [{label: '適合誰', value: '正在決定離開 harbour 第一段交通方式的旅客'}, {label: '主要內容', value: '從港口接 taxi 或 bus 的判斷邏輯'}, {label: '最重要問題', value: '你要優先速度、便利還是成本？'}, {label: '實用習慣', value: '交通方式要跟整天安排一起看，不只看眼前一段'}],
      sections: [{title: '為什麼這個搜尋意圖值得獨立處理', paragraphs: ['不是每個人一到港口就已經決定好目的地。很多人其實先要弄清楚 taxi 和 bus 哪個更適合自己，再決定下一步。', '所以這個意圖比單純 airport 或 old town 的頁面更寬。']}, {title: '什麼時候 taxi 比較有優勢', paragraphs: ['當你優先在乎的是速度、舒適、行李處理或減少判斷時，taxi 通常更有優勢。', '很多時候它真正保護的不是幾分鐘，而是體力和心力。']}, {title: '什麼時候 bus 可能更適合', paragraphs: ['如果你的時程比較有彈性，也願意用更低成本換取較低的即時性，bus 就可能更適合。', '最好把選擇放進整天安排裡一起看，而不是只看港口出來那幾分鐘。']}],
      faqs: [{question: '從 Ibiza Port 出來該選 taxi 還是 bus？', answer: '要看你更重視速度和便利，還是更能接受彈性與成本取向的選擇。'}, {question: '哪些人通常更適合 taxi？', answer: '通常是有行李、時間壓力較大，或不想慢慢摸索港區的人。'}, {question: '什麼情況下 bus 會更有吸引力？', answer: '當你的時間較鬆，而且下一段行程沒有那麼趕時，bus 往往更合理。'}],
      related: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-boarding-tips'],
      thematicLinks: ['ibiza-port-taxi', 'ibiza-port-to-airport', 'ibiza-port-boarding-tips'],
      primaryLink: {label: '在 Google Maps 打開 Ibiza Harbour 做離港交通判斷', href: googleMapsHref},
      sourceNote: '這頁適合在你真正還沒決定去哪裡，只是先想弄清楚從 harbour 該怎麼離開時使用。',
      lastChecked: '2026 年 10 月'
    }
  }
};

const octonarySeoGuideContent: Partial<Record<SupportedLocale, Partial<Record<OctonarySeoGuideSlug, SeoGuidePageContent>>>> = {
  en: {
    'ibiza-port-arrival-guide': {
      title: 'Ibiza Port Arrival Guide',
      description: 'Practical arrival guide for Ibiza Port, including what to prioritise first, how to orient quickly and how to choose the right next move.',
      intro: 'Arrival is often the most overloaded moment at Ibiza Port. Visitors are processing signs, transport, timing, luggage and next steps all at once. This page is designed to make that first phase feel clearer.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors arriving at the harbour and needing an immediate plan'},
        {label: 'Main focus', value: 'First decisions, orientation and next-step logic'},
        {label: 'Best first move', value: 'Decide whether you need transfer, walking or ferry focus first'},
        {label: 'Best outcome', value: 'Turn arrival into a sequence instead of a pile of decisions'}
      ],
      sections: [
        {title: 'Why arrival deserves its own guide', paragraphs: ['Arriving at Ibiza Port is not just about showing up. It is the moment when transport, luggage, timing and local orientation all collide.', 'That makes arrival intent broader than pages focused only on ferries, taxis or old-town walking.']},
        {title: 'What to prioritise first after arrival', paragraphs: ['The strongest first step is to decide what kind of arrival this is: a transfer-heavy one, a sightseeing-first one or a ferry-focused one. Once that is clear, the harbour becomes easier to read.', 'Trying to decide everything at once is what usually makes arrival feel messy.']},
        {title: 'How to make arrival feel easier', paragraphs: ['A good arrival guide is really a sequencing guide. Confirm what matters most first, then handle the next layer only after that.', 'When used this way, Ibiza Harbour feels much more manageable even on a busy day.']}
      ],
      faqs: [
        {question: 'What should you do first on arrival at Ibiza Port?', answer: 'First decide whether your priority is onward transport, ferry procedures or beginning a harbour walk.'},
        {question: 'Why can Ibiza Port arrivals feel confusing?', answer: 'Because several decisions often compete at once, especially around timing, orientation and onward movement.'},
        {question: 'Is arrival planning different from transfer planning?', answer: 'Yes. Arrival planning is broader because it includes orientation and deciding what matters next.'}
      ],
      related: ['ibiza-port-to-taxis-and-buses', 'ibiza-port-taxi', 'ibiza-port-boarding-tips'],
      thematicLinks: ['ibiza-port-to-taxis-and-buses', 'ibiza-port-taxi', 'ibiza-port-boarding-tips'],
      primaryLink: {label: 'Open Ibiza Harbour to plan your arrival', href: googleMapsHref},
      sourceNote: 'Use this page when arrival itself feels like the main planning challenge and you need a clean first sequence for the harbour.',
      lastChecked: 'October 2026'
    },
    'ibiza-harbour-photo-spots': {
      title: 'Ibiza Harbour Photo Spots Guide',
      description: 'Guide to the best Ibiza Harbour photo spots, including what makes the harbour photogenic and how light changes the experience.',
      intro: 'Photo intent around Ibiza Harbour is different from general sightseeing intent. People want to know where the views, marina lines, waterfront reflections and old-town backdrops come together most effectively.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors prioritising views, framing and atmosphere'},
        {label: 'Main focus', value: 'Photo-friendly harbour positions and timing logic'},
        {label: 'Best pairing', value: 'Photo walk plus sunset or an evening harbour route'},
        {label: 'Best question', value: 'Are you shooting for daylight clarity or evening mood?'}
      ],
      sections: [
        {title: 'Why the harbour works so well for photos', paragraphs: ['Ibiza Harbour has multiple visual layers that make it unusually rewarding for photography: boats, water, historic silhouettes and changing light.', 'That mix creates photo spots that feel more dimensional than a simple waterfront walk.']},
        {title: 'What makes a strong photo spot here', paragraphs: ['The best spots are usually not isolated landmarks. They are places where harbour structure, water reflections and the old-town backdrop work together.', 'This means timing matters almost as much as position.']},
        {title: 'How to use this page well', paragraphs: ['Use this guide when you are choosing the harbour for image-making rather than only movement. It works especially well alongside sunset and night-walk planning.', 'Thinking in terms of light and atmosphere usually leads to better harbour photos than thinking only in terms of location pins.']}
      ],
      faqs: [
        {question: 'Is Ibiza Harbour good for photography?', answer: 'Yes. The combination of marina lines, reflections and old-town backdrop makes it very photo-friendly.'},
        {question: 'What makes a good harbour photo spot?', answer: 'The strongest spots usually combine water, structure, light and a layered background rather than only one isolated subject.'},
        {question: 'Does timing matter for harbour photos?', answer: 'Very much. Light changes the whole character of the harbour and can matter as much as the location itself.'}
      ],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-night-walk', 'best-time-to-visit-ibiza-harbour'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-night-walk', 'best-time-to-visit-ibiza-harbour'],
      primaryLink: {label: 'Open Ibiza Harbour to plan photo stops', href: googleMapsHref},
      sourceNote: 'Use this page when your harbour visit is partly about photos, atmosphere and choosing the right time for the strongest frames.',
      lastChecked: 'October 2026'
    },
    'ibiza-port-to-dalt-vila-walk-time': {
      title: 'Ibiza Port to Dalt Vila Walk Time Guide',
      description: 'Guide to thinking about walk time from Ibiza Port to Dalt Vila, including what changes the feel of the route beyond simple distance.',
      intro: 'Walk-time searches are often more practical than route searches. Visitors want to know not only whether they can walk from Ibiza Port to Dalt Vila, but how the route will actually feel in terms of time, effort and pace.',
      quickFacts: [
        {label: 'Best for', value: 'Visitors judging whether the harbour-to-Dalt Vila walk fits their day'},
        {label: 'Main focus', value: 'Walk-time mindset, route feel and effort'},
        {label: 'Most useful framing', value: 'Think in terms of pace and climb, not only map distance'},
        {label: 'Best next step', value: 'Pair timing questions with map and walking-route pages'}
      ],
      sections: [
        {title: 'Why walk time is its own search intent', paragraphs: ['Some visitors are not asking where to go. They are asking whether the walk is realistic for their schedule, energy and conditions.', 'That makes walk-time intent different from broader route or old-town pages.']},
        {title: 'What changes the feel of the walk time', paragraphs: ['The route does not feel the same for everyone. Time on foot depends on pace, heat, pauses, luggage and how far into Dalt Vila you want to continue.', 'That is why walk time should be treated as a planning range rather than a rigid number.']},
        {title: 'How to use this page intelligently', paragraphs: ['Use this page when deciding whether the walk belongs in your day at all. If the answer is yes, then the route, map and old-town pages can refine the experience.', 'Walk-time planning works best when it stays connected to real conditions rather than only map estimates.']}
      ],
      faqs: [
        {question: 'Can you walk from Ibiza Port to Dalt Vila?', answer: 'Yes. For many visitors, it is one of the most natural and rewarding walks from the harbour.'},
        {question: 'Why is walk time hard to reduce to one number?', answer: 'Because pace, pauses, climb, weather and how deep you go into Dalt Vila all change the feel of the route.'},
        {question: 'Who should think carefully about walk time?', answer: 'Travellers with luggage, heat sensitivity or tight schedules usually benefit most from thinking about walk time in advance.'}
      ],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      primaryLink: {label: 'Open Ibiza Harbour to assess the Dalt Vila walk start', href: googleMapsHref},
      sourceNote: 'Use this page when timing and effort matter more than general sightseeing intent and you need to decide if the walk fits the day.',
      lastChecked: 'October 2026'
    }
  },
  es: {
    'ibiza-port-arrival-guide': {
      title: 'Guía de llegada a Ibiza Port',
      description: 'Guía práctica para llegar al puerto de Ibiza, orientarte rápido y decidir bien cuál debe ser tu siguiente paso.',
      intro: 'La llegada suele ser uno de los momentos más cargados en Ibiza Port. Transporte, equipaje, tiempos y orientación aparecen a la vez. Esta página intenta convertir esa llegada en algo más legible.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes que acaban de llegar al harbour y necesitan un plan inmediato'}, {label: 'Enfoque principal', value: 'Primeras decisiones, orientación y siguiente paso'}, {label: 'Primer movimiento útil', value: 'Decidir si primero necesitas traslado, ferri o paseo'}, {label: 'Resultado buscado', value: 'Convertir la llegada en una secuencia y no en un caos'}],
      sections: [{title: 'Por qué la llegada merece una página propia', paragraphs: ['Llegar a Ibiza Port no es solo aparecer. Es el momento en el que transporte, equipaje, tiempo y orientación local chocan al mismo tiempo.', 'Por eso la intención llegada es más amplia que páginas solo sobre ferris, taxis o paseo al casco antiguo.']}, {title: 'Qué conviene priorizar al llegar', paragraphs: ['Lo más útil suele ser definir qué tipo de llegada tienes: una centrada en traslado, una centrada en sightseeing o una centrada en embarque.', 'Cuando eso queda claro, el harbour se vuelve mucho más fácil de leer.']}, {title: 'Cómo hacer que la llegada resulte más sencilla', paragraphs: ['Una buena guía de llegada es, en el fondo, una guía de secuencia. Primero lo principal, después la siguiente capa.', 'Usado así, Ibiza Harbour se siente mucho más manejable incluso en un día con bastante movimiento.']}],
      faqs: [{question: 'Qué deberías hacer primero al llegar a Ibiza Port?', answer: 'Lo primero es decidir si tu prioridad es seguir en transporte, embarcar o empezar a moverte por el harbour.'}, {question: 'Por qué puede sentirse confuso llegar a Ibiza Port?', answer: 'Porque varias decisiones compiten a la vez, sobre todo alrededor del tiempo, la orientación y el siguiente movimiento.'}, {question: 'Es lo mismo llegada que traslado?', answer: 'No. Llegada es más amplio porque incluye orientarte y decidir qué importa después.'}],
      related: ['ibiza-port-to-taxis-and-buses', 'ibiza-port-taxi', 'ibiza-port-boarding-tips'],
      thematicLinks: ['ibiza-port-to-taxis-and-buses', 'ibiza-port-taxi', 'ibiza-port-boarding-tips'],
      primaryLink: {label: 'Abrir Ibiza Harbour para planificar tu llegada', href: googleMapsHref},
      sourceNote: 'Usa esta guía cuando el reto principal sea la llegada en sí y necesites una secuencia clara para empezar bien en el harbour.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-harbour-photo-spots': {
      title: 'Guía de photo spots en Ibiza Harbour',
      description: 'Guía para entender los mejores puntos fotográficos en Ibiza Harbour y cómo cambian según luz, agua y fondo del casco antiguo.',
      intro: 'La intención fotográfica en Ibiza Harbour no es lo mismo que hacer sightseeing general. Aquí lo importante es dónde coinciden bien marina, reflejos, waterfront y silueta histórica.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes que priorizan vistas, encuadre y ambiente'}, {label: 'Enfoque principal', value: 'Puntos fotográficos y lógica de luz'}, {label: 'Mejor combinación', value: 'Photo walk más sunset o ruta nocturna'}, {label: 'Pregunta clave', value: 'Si buscas claridad de día o atmósfera de tarde-noche'}],
      sections: [{title: 'Por qué el harbour funciona tan bien para fotos', paragraphs: ['Ibiza Harbour tiene varias capas visuales que lo hacen muy agradecido para fotografía: barcos, agua, siluetas históricas y luz cambiante.', 'Esa mezcla crea puntos con más profundidad que un simple paseo junto al agua.']}, {title: 'Qué hace fuerte a un buen photo spot aquí', paragraphs: ['Los mejores puntos no suelen ser hitos aislados, sino lugares donde estructura portuaria, reflejos y fondo del casco antiguo se alinean.', 'Por eso el momento del día importa casi tanto como la posición.']}, {title: 'Cómo aprovechar bien esta página', paragraphs: ['Úsala si eliges el harbour pensando en imagen y atmósfera, no solo en desplazarte.', 'Pensar en luz y ambiente suele dar mejores fotos que pensar solo en pines del mapa.']}],
      faqs: [{question: 'Es Ibiza Harbour bueno para hacer fotos?', answer: 'Sí. La combinación de marinas, reflejos y fondo histórico lo hace muy fotogénico.'}, {question: 'Qué hace bueno a un photo spot del harbour?', answer: 'Suele ser la combinación de agua, estructura, luz y fondo en capas, no solo un único objeto.'}, {question: 'Importa la hora del día para las fotos?', answer: 'Muchísimo. La luz cambia por completo el carácter visual del harbour.'}],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-night-walk', 'best-time-to-visit-ibiza-harbour'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-night-walk', 'best-time-to-visit-ibiza-harbour'],
      primaryLink: {label: 'Abrir Ibiza Harbour para planificar paradas fotográficas', href: googleMapsHref},
      sourceNote: 'Usa esta guía cuando tu visita al harbour también esté pensada como salida de fotos y quieras elegir mejor luz y ambiente.',
      lastChecked: 'Octubre 2026'
    },
    'ibiza-port-to-dalt-vila-walk-time': {
      title: 'Guía del tiempo caminando de Ibiza Port a Dalt Vila',
      description: 'Guía para pensar cuánto se tarda realmente en ir andando desde Ibiza Port a Dalt Vila y qué cambia la sensación del recorrido.',
      intro: 'Las búsquedas de walk time suelen ser más prácticas que las de ruta. La gente quiere saber no solo si se puede ir andando, sino cómo se siente de verdad en tiempo, esfuerzo y ritmo.',
      quickFacts: [{label: 'Ideal para', value: 'Visitantes que evalúan si el paseo encaja en su día'}, {label: 'Enfoque principal', value: 'Tiempo a pie, sensación del recorrido y esfuerzo'}, {label: 'Marco útil', value: 'Pensar en ritmo y subida, no solo en distancia'}, {label: 'Siguiente paso', value: 'Combinar esta duda con mapa y walking route'}],
      sections: [{title: 'Por qué el walk time merece una página aparte', paragraphs: ['Algunos visitantes no preguntan tanto por la ruta como por si el paseo es realista para su horario, energía y condiciones.', 'Por eso esta intención es distinta a las páginas más amplias sobre ruta u old town.']}, {title: 'Qué cambia la sensación del tiempo caminando', paragraphs: ['El recorrido no se siente igual para todo el mundo. Influyen ritmo, pausas, calor, equipaje y hasta dónde piensas seguir dentro de Dalt Vila.', 'Por eso el tiempo a pie conviene verlo como un rango y no como una cifra rígida.']}, {title: 'Cómo usar esta página con más inteligencia', paragraphs: ['Úsala para decidir si el paseo cabe de verdad en tu día. Si la respuesta es sí, entonces las páginas de mapa, walking route y Dalt Vila te ayudan a afinar el resto.', 'Planificar tiempo de caminata funciona mejor cuando se conecta con condiciones reales y no solo con estimaciones del mapa.']}],
      faqs: [{question: 'Se puede ir andando de Ibiza Port a Dalt Vila?', answer: 'Sí. Para mucha gente, es uno de los paseos más naturales y agradecidos desde el harbour.'}, {question: 'Por qué es difícil reducir el walk time a un único número?', answer: 'Porque ritmo, pausas, subida, clima y profundidad de la visita cambian bastante la sensación del recorrido.'}, {question: 'Quién debería pensar este tiempo con más cuidado?', answer: 'Especialmente quien lleva equipaje, sufre más el calor o va con un horario ajustado.'}],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      primaryLink: {label: 'Abrir Ibiza Harbour para evaluar el inicio del paseo a Dalt Vila', href: googleMapsHref},
      sourceNote: 'Usa esta guía cuando lo decisivo sea el tiempo y el esfuerzo del paseo, más que la intención turística general.',
      lastChecked: 'Octubre 2026'
    }
  },
  fr: {
    'ibiza-port-arrival-guide': {
      title: 'Guide d arrivee au port d Ibiza',
      description: 'Guide pratique pour arriver au port d Ibiza, s orienter vite et choisir le bon prochain mouvement.',
      intro: 'L arrivee est souvent le moment le plus charge au port. Transport, bagages, timing et orientation arrivent d un coup. Cette page aide a remettre de l ordre dans cette premiere phase.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs venant d arriver au harbour et ayant besoin d un plan clair'}, {label: 'Sujet principal', value: 'Premieres decisions, orientation et prochaine etape'}, {label: 'Premier bon reflexe', value: 'Choisir entre transfer, ferry ou marche comme priorite'}, {label: 'Resultat vise', value: 'Transformer l arrivee en sequence plutot qu en surcharge'}],
      sections: [{title: 'Pourquoi l arrivee merite son propre guide', paragraphs: ['Arriver au port ne signifie pas seulement etre la. C est le moment ou transport, bagages, timing et orientation se superposent.', 'Cette intention est donc plus large qu une page uniquement sur taxis, ferries ou vieille ville.']}, {title: 'Que faut il prioriser en arrivant', paragraphs: ['Le plus utile consiste souvent a definir la nature de votre arrivee : transfert, embarquement ou visite a pied.', 'Une fois cette priorite claire, le harbour devient beaucoup plus lisible.']}, {title: 'Comment rendre l arrivee plus facile', paragraphs: ['Un bon guide d arrivee est en realite un guide de sequence. On traite d abord la couche la plus importante, puis seulement la suivante.', 'De cette facon, Ibiza Harbour devient plus gerable meme quand le port est actif.']}],
      faqs: [{question: 'Que faut il faire d abord en arrivant au port d Ibiza ?', answer: 'Il faut d abord savoir si votre priorite est le transport, l embarquement ou le debut d une visite a pied.'}, {question: 'Pourquoi l arrivee peut elle sembler confuse ?', answer: 'Parce que plusieurs decisions entrent en concurrence en meme temps, surtout autour du timing et du mouvement suivant.'}, {question: 'L arrivee est elle la meme chose qu un transfert ?', answer: 'Non. L arrivee est plus large car elle inclut l orientation et la priorite immediate a definir.'}],
      related: ['ibiza-port-to-taxis-and-buses', 'ibiza-port-taxi', 'ibiza-port-boarding-tips'],
      thematicLinks: ['ibiza-port-to-taxis-and-buses', 'ibiza-port-taxi', 'ibiza-port-boarding-tips'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour pour planifier votre arrivee', href: googleMapsHref},
      sourceNote: 'Utilisez cette page quand l arrivee elle-meme est le vrai sujet et qu il faut une premiere sequence claire dans le harbour.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-harbour-photo-spots': {
      title: 'Guide des spots photo a Ibiza Harbour',
      description: 'Guide pour comprendre les meilleurs spots photo du harbour selon la lumiere, l eau, les marinas et le fond historique.',
      intro: 'L intention photo autour d Ibiza Harbour differe d une simple visite. Ce qui compte ici, c est l endroit ou se combinent le mieux lignes du port, eau, lumiere et silhouette de la vieille ville.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs qui privilegient vues, cadrage et atmosphere'}, {label: 'Sujet principal', value: 'Spots photo et logique de lumiere'}, {label: 'Meilleur duo', value: 'Photo walk avec sunset ou balade du soir'}, {label: 'Bonne question', value: 'Cherchez-vous la clarte du jour ou l humeur du soir ?'}],
      sections: [{title: 'Pourquoi le harbour fonctionne si bien en photo', paragraphs: ['Ibiza Harbour reunit plusieurs couches visuelles fortes : bateaux, eau, reflets, silhouettes historiques et lumiere changeante.', 'Cette richesse donne des spots plus interessants qu un simple bord de mer lineaire.']}, {title: 'Ce qui fait un bon spot photo ici', paragraphs: ['Les meilleurs spots ne sont pas toujours des points isoles, mais des endroits ou structure portuaire, reflets et fond historique travaillent ensemble.', 'C est pourquoi le moment compte presque autant que l emplacement.']}, {title: 'Comment bien utiliser cette page', paragraphs: ['Utilisez-la si votre visite du harbour sert aussi a faire des images, pas seulement a vous deplacer.', 'Penser en lumiere et atmosphere donne souvent de meilleurs resultats que penser en simples points de carte.']}],
      faqs: [{question: 'Ibiza Harbour est il bon pour la photo ?', answer: 'Oui. La combinaison des marinas, de l eau et du decor historique le rend tres photogenique.'}, {question: 'Qu est ce qui fait un bon spot photo ?', answer: 'Souvent une combinaison de lumiere, reflets, structure et arriere-plan plutot qu un seul sujet isole.'}, {question: 'Le moment de la journee compte t il ?', answer: 'Beaucoup. La lumiere change tout le caractere visuel du harbour.'}],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-night-walk', 'best-time-to-visit-ibiza-harbour'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-night-walk', 'best-time-to-visit-ibiza-harbour'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour pour preparer des arrets photo', href: googleMapsHref},
      sourceNote: 'Utilisez cette page quand votre visite du harbour sert aussi a choisir la meilleure lumiere et les bons points de vue.',
      lastChecked: 'Octobre 2026'
    },
    'ibiza-port-to-dalt-vila-walk-time': {
      title: 'Guide du temps de marche vers Dalt Vila',
      description: 'Guide pour penser le temps de marche du port vers Dalt Vila et ce qui change la sensation du parcours.',
      intro: 'Les recherches sur le temps de marche sont plus pratiques que les recherches d itineraire. Les visiteurs veulent savoir non seulement si la marche est possible, mais comment elle se vit en temps, rythme et effort.',
      quickFacts: [{label: 'Ideal pour', value: 'Visiteurs evaluant si la marche rentre dans leur journee'}, {label: 'Sujet principal', value: 'Temps de marche, ressenti du parcours et effort'}, {label: 'Cadre utile', value: 'Penser en rythme et montee plutot qu en simple distance'}, {label: 'Suite utile', value: 'Associer cette question aux pages map et walking route'}],
      sections: [{title: 'Pourquoi le temps de marche est une intention propre', paragraphs: ['Certains visiteurs ne demandent pas simplement ou aller, mais si la marche est realiste pour leur rythme et leurs contraintes.', 'Cela la distingue des pages route ou vieille ville plus larges.']}, {title: 'Ce qui change la sensation du temps de marche', paragraphs: ['Le parcours ne se vit pas de la meme facon pour tout le monde. Le rythme, les pauses, la chaleur, les bagages et la profondeur de la visite changent beaucoup la sensation.', 'Il vaut donc mieux penser en plage de temps qu en chiffre unique.']}, {title: 'Comment bien utiliser cette page', paragraphs: ['Utilisez-la pour savoir si la marche a vraiment sa place dans votre journee. Si oui, les pages Dalt Vila, map et walking route peuvent ensuite affiner le detail.', 'Le bon calcul du temps reste toujours lie aux conditions reelles et pas seulement a la carte.']}],
      faqs: [{question: 'Peut on aller du port a Dalt Vila a pied ?', answer: 'Oui. Pour beaucoup de visiteurs, c est l une des marches les plus naturelles et les plus gratifiantes depuis le harbour.'}, {question: 'Pourquoi est il difficile de reduire le temps de marche a un seul chiffre ?', answer: 'Parce que rythme, pauses, chaleur, montee et profondeur de visite changent fortement l experience.'}, {question: 'Qui devrait y penser avec plus de soin ?', answer: 'Les voyageurs avec bagages, sensibilite a la chaleur ou planning serre y gagnent souvent le plus.'}],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      primaryLink: {label: 'Ouvrir Ibiza Harbour pour evaluer le debut de la marche vers Dalt Vila', href: googleMapsHref},
      sourceNote: 'Utilisez cette page lorsque le vrai sujet est le temps et l effort de la marche plus que la simple curiosite touristique.',
      lastChecked: 'Octobre 2026'
    }
  },
  'zh-Hant': {
    'ibiza-port-arrival-guide': {
      title: 'Ibiza Port 抵達指南',
      description: '整理抵達伊維薩港後最實用的第一步，幫你更快定位並決定接下來該怎麼走。',
      intro: '抵達常常是 Ibiza Port 最容易同時混在一起的時刻。交通、行李、時間和方向感會一起湧上來。這頁就是把那個第一段流程整理清楚。',
      quickFacts: [{label: '適合誰', value: '剛抵達 harbour 並需要立即決策的旅客'}, {label: '主要內容', value: '第一步判斷、定位與下一步邏輯'}, {label: '最好的第一步', value: '先判斷你更需要轉運、登船還是開始步行'}, {label: '最佳結果', value: '把抵達變成有順序的流程'}],
      sections: [{title: '為什麼抵達值得獨立成頁', paragraphs: ['抵達 Ibiza Port 不只是站到港口裡而已，而是交通、行李、時間和現場定位同時出現的時刻。', '因此 arrival intent 比單看 taxi、ferry 或老城步行都更大。']}, {title: '抵達後最該先處理什麼', paragraphs: ['最有用的第一步，通常是先判斷這次抵達屬於哪一種：以轉運為主、以觀光為主，還是以登船為主。', '一旦這點清楚，整個 harbour 就會變得容易理解很多。']}, {title: '怎麼讓抵達感覺更輕鬆', paragraphs: ['好的 arrival guide 本質上就是一份順序指南。先處理最重要的一層，再處理下一層。', '這樣做時，Ibiza Harbour 即使在忙碌時段也會好應付很多。']}],
      faqs: [{question: '抵達 Ibiza Port 後第一步該做什麼？', answer: '先判斷你眼前最重要的是轉運、登船，還是直接開始港區步行。'}, {question: '為什麼抵達 Ibiza Port 容易讓人混亂？', answer: '因為時間、方向和下一段移動常常同時需要決策。'}, {question: '抵達規劃和轉運規劃是一樣的嗎？', answer: '不完全一樣。抵達規劃更大，還包含現場定位和優先順序判斷。'}],
      related: ['ibiza-port-to-taxis-and-buses', 'ibiza-port-taxi', 'ibiza-port-boarding-tips'],
      thematicLinks: ['ibiza-port-to-taxis-and-buses', 'ibiza-port-taxi', 'ibiza-port-boarding-tips'],
      primaryLink: {label: '在 Google Maps 打開 Ibiza Harbour 規劃抵達動線', href: googleMapsHref},
      sourceNote: '這頁適合在你覺得「抵達本身」就是主要挑戰時使用，幫你先把第一段港區流程排順。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-harbour-photo-spots': {
      title: 'Ibiza Harbour 拍照點指南',
      description: '整理伊維薩港最值得留意的拍照點，以及光線、水面與老城背景如何一起影響畫面。',
      intro: 'Ibiza Harbour 的拍照需求，和一般 sightseeing 不太一樣。這裡最重要的是找出 marina、水面反光、港邊線條和歷史背景最能一起成立的地方。',
      quickFacts: [{label: '適合誰', value: '把景觀、取景和氣氛擺在前面的旅客'}, {label: '主要內容', value: '拍照點與光線邏輯'}, {label: '最適合搭配', value: '拍照散步加日落或夜間港區路線'}, {label: '最重要問題', value: '你要的是白天清晰還是傍晚氛圍？'}],
      sections: [{title: '為什麼 harbour 特別適合拍照', paragraphs: ['Ibiza Harbour 之所以好拍，是因為它有多層視覺元素同時存在：船、 水面、歷史輪廓和變化中的光。', '這種層次感比單純的海邊步道更容易出現有記憶點的畫面。']}, {title: '什麼樣的拍照點在這裡最強', paragraphs: ['最好的點通常不是單一地標，而是能同時把港口結構、水面反射和老城背景一起放進畫面的位置。', '因此時間點往往和位置一樣重要。']}, {title: '這頁最適合怎麼用', paragraphs: ['如果你來 harbour 其中一個目的就是拍照，這頁就很適合。它尤其適合和 sunset、night walk 一起看。', '用光線和氛圍來思考，通常會比只看地圖點位更有幫助。']}],
      faqs: [{question: 'Ibiza Harbour 適合拍照嗎？', answer: '很適合。marina、水面反光和老城背景一起出現時，畫面非常有層次。'}, {question: '好的港區拍照點通常長什麼樣？', answer: '通常是水面、結構、光線與背景同時成立，而不是只拍單一物件。'}, {question: '拍照時段重要嗎？', answer: '非常重要。不同時段的光線會直接改變整個 harbour 的畫面性格。'}],
      related: ['ibiza-harbour-sunset', 'ibiza-harbour-night-walk', 'best-time-to-visit-ibiza-harbour'],
      thematicLinks: ['ibiza-harbour-sunset', 'ibiza-harbour-night-walk', 'best-time-to-visit-ibiza-harbour'],
      primaryLink: {label: '在 Google Maps 打開 Ibiza Harbour 規劃拍照停點', href: googleMapsHref},
      sourceNote: '這頁適合在你把 harbour 視為拍照與氣氛場域，而不只是一般移動路線時使用。',
      lastChecked: '2026 年 10 月'
    },
    'ibiza-port-to-dalt-vila-walk-time': {
      title: 'Ibiza Port 到 Dalt Vila 步行時間指南',
      description: '整理從伊維薩港步行到 Dalt Vila 時，時間體感會受哪些因素影響，以及怎麼判斷這段路是否適合你。',
      intro: '搜尋 walk time 的旅客，通常比搜尋 route 的旅客更務實。他們不只想知道能不能走，而是想知道這一段實際上會花多少感受上的時間和力氣。',
      quickFacts: [{label: '適合誰', value: '正在判斷這段步行是否適合排進一天的旅客'}, {label: '主要內容', value: '步行時間思路、體感與努力程度'}, {label: '最好框架', value: '把重點放在節奏和上坡，而不只是地圖距離'}, {label: '最佳下一步', value: '再搭配 map 和 walking route 一起判斷'}],
      sections: [{title: '為什麼步行時間值得獨立成頁', paragraphs: ['有些旅客不是在問路線去哪裡，而是在問這段路對自己的時間和體力來說是否合理。', '因此步行時間的搜尋意圖，和一般 route 或 old town 頁面其實不太一樣。']}, {title: '哪些因素會改變步行時間的體感', paragraphs: ['這段路對每個人的感受不會一樣。節奏、停留、天氣、行李，以及你打算深入 Dalt Vila 到什麼程度，都會改變體感。', '所以步行時間比較適合被理解成一個範圍，而不是一個固定數字。']}, {title: '怎麼聰明地使用這頁', paragraphs: ['如果你最在意的是這段路到底適不適合今天，那這頁就很有用。確定適合之後，再接著看 map、walking route 和 Dalt Vila 頁面會最順。', '步行時間判斷最有效的做法，是把它放回真實條件裡，而不是只看地圖估算。']}],
      faqs: [{question: '可以從 Ibiza Port 走到 Dalt Vila 嗎？', answer: '可以，而且對很多旅客來說，這是從 harbour 出發最自然也最值得的一條線。'}, {question: '為什麼步行時間很難只用一個數字回答？', answer: '因為節奏、停留、上坡、天氣和走多深都會明顯改變這段路的感受。'}, {question: '哪些人特別應該先想清楚步行時間？', answer: '通常是有行李、怕熱，或行程本來就比較緊的旅客。'}],
      related: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      thematicLinks: ['ibiza-port-to-dalt-vila', 'ibiza-port-walking-route', 'ibiza-harbour-map'],
      primaryLink: {label: '在 Google Maps 打開 Ibiza Harbour 評估 Dalt Vila 步行起點', href: googleMapsHref},
      sourceNote: '這頁適合在你最在意的是時間和體感，而不只是一般觀光路線時使用。',
      lastChecked: '2026 年 10 月'
    }
  }
};

export function getSeoGuidePage(locale: SupportedLocale, slug: AnySeoGuideSlug): SeoGuidePageContent | undefined {
  return (
    (seoGuideContent[locale].pages as Partial<Record<AnySeoGuideSlug, SeoGuidePageContent>>)[slug] ??
    extraSeoGuideContent[locale]?.[slug as SecondarySeoGuideSlug] ??
    tertiarySeoGuideContent[locale]?.[slug as TertiarySeoGuideSlug] ??
    quaternarySeoGuideContent[locale]?.[slug as QuaternarySeoGuideSlug] ??
    quinarySeoGuideContent[locale]?.[slug as QuinarySeoGuideSlug] ??
    senarySeoGuideContent[locale]?.[slug as SenarySeoGuideSlug] ??
    septenarySeoGuideContent[locale]?.[slug as SeptenarySeoGuideSlug] ??
    octonarySeoGuideContent[locale]?.[slug as OctonarySeoGuideSlug] ??
    (seoGuideContent.en.pages as Partial<Record<AnySeoGuideSlug, SeoGuidePageContent>>)[slug] ??
    extraSeoGuideContent.en?.[slug as SecondarySeoGuideSlug] ??
    tertiarySeoGuideContent.en?.[slug as TertiarySeoGuideSlug] ??
    quaternarySeoGuideContent.en?.[slug as QuaternarySeoGuideSlug] ??
    quinarySeoGuideContent.en?.[slug as QuinarySeoGuideSlug] ??
    senarySeoGuideContent.en?.[slug as SenarySeoGuideSlug] ??
    septenarySeoGuideContent.en?.[slug as SeptenarySeoGuideSlug] ??
    octonarySeoGuideContent.en?.[slug as OctonarySeoGuideSlug]
  );
}

export function getSeoGuideTitleMap(locale: SupportedLocale, slugs: readonly AnySeoGuideSlug[]) {
  return Object.fromEntries(
    slugs.map((slug) => [slug, getSeoGuidePage(locale, slug)?.title ?? slug])
  ) as Record<AnySeoGuideSlug, string>;
}

export function isSeoGuideSlug(value: string): value is AnySeoGuideSlug {
  return allSeoGuideSlugs.includes(value as AnySeoGuideSlug);
}

export function isSupportedLocale(value: string): value is SupportedLocale {
  return value === 'es' || value === 'en' || value === 'fr' || value === 'zh-Hant';
}
