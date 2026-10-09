import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'

const focus = [
  {
    title: 'Analytics, delivered as products',
    description:
      'We convert data into decision-grade intelligence — proprietary metrics, reporting, and workflow tools engineered for the professionals who rely on them daily.',
  },
  {
    title: 'Data analysis',
    description:
      'Rigorous statistical methodologies and performance benchmarks, developed by our analysts and embedded directly into the product — so insight is delivered alongside the data, not after it.',
  },
  {
    title: 'Mobile applications',
    description:
      'Elegantly designed, enterprise-grade applications for data capture and analysis at the point of activity, delivering real-time insight the moment information is entered.',
  },
  {
    title: 'Web software',
    description:
      'Scalable, browser-based platforms with refined, intuitive interfaces that bring reporting, dashboards, and workflow management to every stakeholder across the value chain.',
  },
  {
    title: 'Advisory',
    description:
      'Independent methodology review and analytical consulting for clients advancing their own data and intelligence capabilities.',
  },
]

export function FocusSection() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="WHAT WE BUILD"
        title="Small details."
        accent="A better experience."
      >
        <p>
          We unite product design and software engineering to turn complex
          processes into intuitive, decision-ready tools.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4 [&_li>div>div]:before:bg-brand-red">
            {focus.map(({ title, description }) => (
              <ListItem key={title} title={title}>
                {description}
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
    </section>
  )
}
