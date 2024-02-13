import React from "react"
import Layout from "../components/Layout"
import { FaCircleQuestion } from "react-icons/fa6"

const Faq = () => {
  /** Automatisch zum Seitenanfang scrollen wenn die Seite geladen wird */
  window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <Layout>
      <div className='text-black mt-[120px]'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <h2 className='mb-8 text-4xl tracking-tight font-extrabold text-center text-orange-900 '>
            Häufig gestellte Fragen
          </h2>
          <div className='grid pt-8 text-left border-t-2  md:gap-16 border-black md:grid-cols-2'>
            <div>
              <div className='mb-10 border-b border-black pb-5'>
                <h3 className='flex items-center mb-4 text-lg font-medium  '>
                  <span className='pr-2'>
                    <FaCircleQuestion size={18} />
                  </span>
                  Welche Arten von Kleiderspenden werden akzeptiert?
                </h3>
                <p className=' '>
                  Wir freuen uns über eine Vielzahl von Kleiderspenden, die dazu
                  beitragen können, die Bedürfnisse unterschiedlicher Menschen
                  in Krisengebieten zu erfüllen. Wir akzeptieren sowohl neue als
                  auch gebrauchte Kleidung, einschließlich Oberbekleidung,
                  Unterwäsche, Schuhe, Decken und Winterbekleidung. Es ist
                  wichtig, dass die Kleidung in gutem Zustand ist, um
                  sicherzustellen, dass sie den Bedürftigen einen wirklichen
                  Nutzen bringt.
                </p>
              </div>
              <div className='mb-10 border-b border-black pb-5'>
                <h3 className='flex items-center mb-4 text-lg font-medium '>
                  <span className='pr-2'>
                    <FaCircleQuestion size={18} />
                  </span>
                  Wie kann ich meine Kleiderspende abgeben?
                </h3>
                <p className=''>
                  Sie haben mehrere Möglichkeiten, Ihre Kleiderspenden bei uns
                  abzugeben. Wir haben festgelegte Sammelpunkte, an denen Sie
                  Ihre Spenden persönlich vorbeibringen können. Alternativ
                  bieten wir auch einen Abholservice an, bei dem wir Ihre
                  Spenden an einem von Ihnen gewünschten Ort abholen. Um eine
                  Abholung zu vereinbaren oder den nächstgelegenen Sammelpunkt
                  zu erfahren, kontaktieren Sie uns einfach telefonisch oder per
                  E-Mail.
                </p>
              </div>
              <div className='mb-10 border-b border-black pb-5'>
                <h3 className='flex items-center mb-4 text-lg font-medium '>
                  <span className='pr-2'>
                    <FaCircleQuestion size={18} />
                  </span>
                  Wo werden meine Kleiderspenden hingehen?
                </h3>
                <p className=' '>
                  Ihre Kleiderspenden werden in Regionen verteilt, die von
                  Konflikten, Naturkatastrophen oder anderen Krisen betroffen
                  sind. Wir arbeiten eng mit lokalen und internationalen
                  Partnern zusammen, um sicherzustellen, dass die Spenden dort
                  ankommen, wo sie am dringendsten benötigt werden. Unsere
                  Partnerorganisationen vor Ort unterstützen uns bei der
                  Identifizierung von Bedürfnissen und der gerechten Verteilung
                  der Spenden.
                </p>
              </div>
              <div className='mb-10 border-b border-black pb-5'>
                <h3 className='flex items-center mb-4 text-lg font-medium  '>
                  <span className='pr-2'>
                    <FaCircleQuestion size={18} />
                  </span>
                  Kann ich meine Kleiderspende steuerlich absetzen?
                </h3>
                <p className=' '>
                  Ja, wir stellen Ihnen gerne eine Spendenquittung aus, die Sie
                  für steuerliche Zwecke verwenden können. Ihre Spende hilft
                  nicht nur denen, die sie am dringendsten benötigen, sondern
                  kann auch Ihre Steuerlast reduzieren. Bitte kontaktieren Sie
                  uns für weitere Informationen zur Spendenquittung und den
                  steuerlichen Vorteilen Ihrer Spende.
                </p>
              </div>
            </div>
            <div>
              <div className='mb-10 border-b border-black pb-5'>
                <h3 className='flex items-center mb-4 text-lg font-medium  '>
                  <span className='pr-2'>
                    <FaCircleQuestion size={18} />
                  </span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </h3>
                <p className=' '>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
              </div>
              <div className='mb-10 border-b border-black pb-5'>
                <h3 className='flex items-center mb-4 text-lg font-medium  '>
                  <span className='pr-2'>
                    <FaCircleQuestion size={18} />
                  </span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </h3>

                <p className=' '>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
              </div>
              <div className='mb-10 border-b border-black pb-5'>
                <h3 className='flex items-center mb-4 text-lg font-medium  '>
                  <span className='pr-2'>
                    <FaCircleQuestion size={18} />
                  </span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </h3>
                <p className=' '>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
              </div>
              <div className='mb-10 border-b border-black pb-5'>
                <h3 className='flex items-center mb-4 text-lg font-medium  '>
                  <span className=' pr-2'>
                    <FaCircleQuestion size={18} />
                  </span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </h3>
                <p className=' '>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Faq
