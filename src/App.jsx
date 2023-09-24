import Nav from "./components/Nav";
import {Footer,
  Hero,
  PopularProduct,
  SuperQuality,
  CoustomerReviews,
  Subscribe,
  SpecialOffer,
  Services} from "./sections/index"

const App = () => (
  <main className="relative">
<Nav/>
<section className="xl:padding-1 wide:padding-r padding-b">
<Hero/>
</section>
<section className="padding">
<PopularProduct/>
</section>
<section className="padding">
  <SuperQuality/>
</section>
<section className="padding-x py-10">
  <Services/>
</section>
<section className="padding">
  <SpecialOffer/>
</section>
<section className="bg-pale-blue padding">
  <CoustomerReviews/>
</section>
<section className="padding-x sm:py-32 py-16 w-full">
  <Subscribe/>
</section>
<section className="bg-black padding-x padding-t pb-8">
  <Footer/>
</section>
  </main>
)
export default App;