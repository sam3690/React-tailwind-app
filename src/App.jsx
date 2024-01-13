import styles from './style';
import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero } from './components';



const App = () => (
<<<<<<< HEAD
          <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <NavBar />
              </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
              <h1 className='text-3x1'>Hello there</h1>
              <Navbar />
              <Billing />
              <CardDeal />
              <Business />
              <Clients />
              <CTA />
              <Stats />
              <Footer />
              <Testimonials />
              <Hero />
              </div>
            </div>
        </div>    
=======
  <div className="bg-primary w-full overflow-hidden bg-fuchsia-200">

    <h1 className="text-3xl font-bold underline bg-sky-300">
      Hello world!
    </h1>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <NavBar /> */}
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Billing />
        <CardDeal />
        <Business />
        <Clients />
        <CTA />
        <Stats />
        <Footer />
        <Testimonials />
        <Hero />
      </div>
    </div>
  </div>
>>>>>>> 803dc54f0623bff1e62ccabcd9475952547876e1
);

export default App