import { Paragraph } from "@/components";
import { Technologies } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

export async function getStaticProps(context: any) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`@/messages/${context.locale}.json`)).default
    }
  };
}

export default function Home() {
  const tr = useTranslations("home");

  return (
    <>
      <section className="w-full h-fit flex items-center flex-col text-center py-10">
        <h1 className="heading__title">
          {tr.rich('mainHeading', {
            special: (chunks) => <strong className="text-primary">{chunks}</strong>
          })}
        </h1>

        <div className="w-full max-w-4xl h-fit relative my-10">
          <div className="w-full h-[580px] absolute" aria-hidden="true">
            <div className="w-full h-fit flex relative">
              <div className="size-96 max-sm:left-2/4 max-sm:translate-x-[-50%] max-sm:top-1 max-sm:size-48 rounded-full bg-sky-600 absolute left-1"></div>
            </div>
          </div>
          <div className="w-full max-w-4xl h-[580px] max-sm:h-fit rounded-xl grid grid-cols-2 md:grid-rows-3 max-sm:grid-cols-1  gap-4 p-4 bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-3xl">
            <div className="w-full h-full p-4 row-span-2 relative max-sm:h-[300px]">
              <Image
                src="/assets/me-medal-top2.jpg"
                fill
                className="object-contain"
                alt="Me"
              />
            </div>
            <div className="w-full h-full p-4 row-span-3 text-left">
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                dolorum, unde vel perspiciatis ipsum debitis, id saepe itaque
                inventore similique voluptas, sint ea hic quaerat necessitatibus
                perferendis totam nihil eos accusantium dolor voluptatibus
                cumque consectetur libero distinctio. Eum magni quisquam
                doloribus molestiae! Totam debitis cupiditate nulla natus quis
                architecto consequatur?
              </Paragraph>
            </div>
            <div className="w-full h-full p-4">
              <ul className="w-full h-fit flex items-center justify-start max-sm:justify-center gap-5 flex-wrap">
                {
                  Technologies.map(tech => (
                    <li key={tech.name}>
                      <div className="size-12 max-sm:size-10 relative hover:scale-105">
                        <Image src={`/icons/${tech.img}`} fill alt={`${tech.name}`} title={tech.name.toUpperCase()}/>
                      </div>
                    </li>
                  ))
                }
                <li>
                  <div className="size-12 max-sm:size-10 relative hover:scale-105">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      // fill="#ffffff"
                      className="fill-slate-950 dark:fill-slate-50"
                    >
                      <title>Next.js</title>
                      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
                    </svg>
                  </div>
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
