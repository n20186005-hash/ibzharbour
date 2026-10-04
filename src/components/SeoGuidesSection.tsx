'use client';

import {useLocale} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {
  getSeoGuidePage,
  isSupportedLocale,
  type AnySeoGuideSlug,
  type SupportedLocale
} from '@/content/seo-guides';

type GuideGroup = {
  key: string;
  slugs: readonly AnySeoGuideSlug[];
};

const guideGroups: readonly GuideGroup[] = [
  {
    key: 'arrivals',
    slugs: ['ibiza-cruise-port', 'ibiza-port-arrival-guide', 'ibiza-ferry-port', 'ibiza-to-formentera-ferry', 'ibiza-port-ferry-tickets', 'ibiza-port-boarding-tips', 'ibiza-port-to-formentera-day-trip', 'ibiza-port-to-airport', 'ibiza-port-taxi', 'ibiza-port-to-taxis-and-buses', 'ibiza-port-parking', 'ibiza-port-luggage']
  },
  {
    key: 'walking',
    slugs: ['ibiza-harbour-map', 'ibiza-port-to-dalt-vila', 'ibiza-port-to-dalt-vila-walk-time', 'ibiza-port-to-old-town', 'ibiza-port-walking-route']
  },
  {
    key: 'explore',
    slugs: ['things-to-do-near-ibiza-port', 'ibiza-harbour-photo-spots', 'ibiza-port-to-talamanca-beach', 'best-time-to-visit-ibiza-harbour', 'ibiza-harbour-sunset', 'ibiza-harbour-night-walk']
  },
  {
    key: 'stay_eat',
    slugs: ['ibiza-harbour-restaurants', 'where-to-stay-near-ibiza-port']
  }
] as const;

const sectionCopy: Record<SupportedLocale, {
  title: string;
  intro: string;
  cta: string;
  groups: Record<string, {title: string; intro: string;}>;
}> = {
  en: {
    title: 'Popular Harbour Guides',
    intro: 'These practical pages answer the most common planning questions around Ibiza Harbour, ferries, transport and old-town access.',
    cta: 'Open guide',
    groups: {
      arrivals: {
        title: 'Arrivals, Ferries and Transfers',
        intro: 'Use these guides when your first question is how to arrive, board, transfer or leave the harbour efficiently.'
      },
      walking: {
        title: 'Walking, Maps and Orientation',
        intro: 'These pages help visitors understand the harbour layout and choose the best on-foot route through Ibiza Town.'
      },
      explore: {
        title: 'Nearby Plans and Easy Extensions',
        intro: 'These are the most useful nearby ideas when you want to build a short plan around the port without overloading the day.'
      },
      stay_eat: {
        title: 'Where to Eat and Where to Stay',
        intro: 'These pages help you decide whether the harbour works best as a meal stop, a nightly base or both.'
      }
    }
  },
  es: {
    title: 'Guías populares del puerto',
    intro: 'Estas páginas prácticas responden a las preguntas más comunes sobre Ibiza Harbour, ferris, transporte y acceso a Dalt Vila.',
    cta: 'Abrir guía',
    groups: {
      arrivals: {
        title: 'Llegadas, ferris y traslados',
        intro: 'Usa estas guías cuando la primera duda es cómo llegar, embarcar, enlazar o salir del puerto con claridad.'
      },
      walking: {
        title: 'Rutas a pie, mapas y orientación',
        intro: 'Estas páginas ayudan a entender la distribución del harbour y a elegir el mejor recorrido caminando.'
      },
      explore: {
        title: 'Planes cercanos y extensiones fáciles',
        intro: 'Aquí están las ideas más útiles para construir un plan corto alrededor del puerto sin cargar demasiado el día.'
      },
      stay_eat: {
        title: 'Dónde comer y dónde alojarse',
        intro: 'Estas páginas sirven para decidir si el harbour encaja mejor como comida, como base de viaje o como ambas cosas.'
      }
    }
  },
  fr: {
    title: 'Guides utiles du harbour',
    intro: 'Ces pages pratiques repondent aux questions les plus frequentes sur Ibiza Harbour, les ferries, les transferts et l acces a Dalt Vila.',
    cta: 'Ouvrir le guide',
    groups: {
      arrivals: {
        title: 'Arrivees, ferries et transferts',
        intro: 'Ces guides servent quand la premiere question concerne l arrivee, l embarquement ou la sortie efficace du harbour.'
      },
      walking: {
        title: 'Marche, plans et orientation',
        intro: 'Ces pages aident a comprendre la logique du harbour et a choisir le meilleur parcours a pied.'
      },
      explore: {
        title: 'Idees proches et extensions faciles',
        intro: 'On y trouve les options les plus utiles pour construire un petit programme autour du port sans trop charger la journee.'
      },
      stay_eat: {
        title: 'Ou manger et ou loger',
        intro: 'Ces guides aident a savoir si le harbour convient mieux pour un repas, comme base de sejour ou pour les deux.'
      }
    }
  },
  'zh-Hant': {
    title: '熱門港口指南',
    intro: '這些實用頁面集中回答 Ibiza Harbour 周邊最常見的規劃問題，包括渡輪、交通、停車與前往 Dalt Vila 的方式。',
    cta: '查看指南',
    groups: {
      arrivals: {
        title: '到港、渡輪與轉運',
        intro: '如果你的第一個問題是怎麼抵達、怎麼登船、怎麼轉去機場或離開港區，先看這一組。'
      },
      walking: {
        title: '步行、地圖與定位',
        intro: '這一組專門幫你理解 harbour 分布、步行主線與前往 Dalt Vila 的最佳路徑。'
      },
      explore: {
        title: '附近玩法與輕量延伸',
        intro: '這裡整理的是最適合從港區直接銜接的短行程，不需要把一天排得太滿。'
      },
      stay_eat: {
        title: '住宿與用餐決策',
        intro: '這組頁面幫你判斷港區是否適合住宿、是否適合用餐，以及兩者怎麼搭配最好。'
      }
    }
  }
};

export default function SeoGuidesSection() {
  const rawLocale = useLocale();
  const locale: SupportedLocale = isSupportedLocale(rawLocale) ? rawLocale : 'en';
  const copy = sectionCopy[locale];

  return (
    <div style={{backgroundColor: 'var(--bg-secondary)'}}>
      <section className="section">
        <div className="max-w-4xl mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
            {copy.title}
          </h2>
          <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            {copy.intro}
          </p>
        </div>

        <div className="space-y-12">
          {guideGroups.map((group) => (
            <div key={group.key}>
              <div className="max-w-4xl mb-6">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3" style={{color: 'var(--text-primary)'}}>
                  {copy.groups[group.key].title}
                </h3>
                <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  {copy.groups[group.key].intro}
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {group.slugs.map((slug) => {
                  const page = getSeoGuidePage(locale, slug);
                  if (!page) return null;

                  return (
                    <Link
                      key={slug}
                      href={`/${slug}`}
                      className="review-card block hover:no-underline"
                      style={{textDecoration: 'none'}}
                    >
                      <div className="text-xs uppercase tracking-[0.2em] mb-2" style={{color: 'var(--text-muted)'}}>
                        {slug}
                      </div>
                      <h3 className="font-serif text-2xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                        {page.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{color: 'var(--text-secondary)'}}>
                        {page.description}
                      </p>
                      <span className="text-sm font-medium" style={{color: 'var(--accent)'}}>
                        {copy.cta}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
