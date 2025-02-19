"use client"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, MapPin, Users, Trophy, HelpCircle, Award, Coins, Cpu, ShieldCheck } from "lucide-react"
import ParallaxBackground from "./components/ParallaxBackground"
import FloatingActionButton from "./components/FloatingActionButton"
import ScrollProgressBar from "./components/ScrollProgressBar"
import FinancialChart from "./components/FinancialChart"

const carouselItems = [
  {
    title: "Εξατομίκευση μέσω AI",
    content: (
      <>
        <p className="mb-4 text-white">
          Συλλογή δεδομένων κατά την εγγραφή και παρακολούθηση συμπεριφοράς. Χρήση αλγορίθμων μηχανικής μάθησης για
          προτάσεις προσαρμοσμένες στις προτιμήσεις κάθε χρήστη.
        </p>
      </>
    ),
    icon: <MapPin className="w-12 h-12 text-explore-accent" />,
  },
  {
    title: "Κοινωνική Δικτύωση",
    content: (
      <>
        <p className="mb-4 text-white">
          Δημιουργία προσωπικών προφίλ και δυνατότητα κοινοποίησης ταξιδιωτικών εμπειριών. Οργάνωση ομάδων, forums και
          live chats που ενισχύουν την αλληλεπίδραση.
        </p>
      </>
    ),
    icon: <Users className="w-12 h-12 text-explore-accent" />,
  },
  {
    title: "Reward System - Bucket List",
    content: (
      <>
        <p className="mb-4 text-white">
          Καταγραφή ταξιδιωτικών εμπειριών με ετικέτες (@tags), σχόλια και ratings. Κέρδη πόντων και badges για κάθε
          καταχώρηση, εξαργυρώσιμα για premium λειτουργίες ή ειδικές προσφορές.
        </p>
      </>
    ),
    icon: <Trophy className="w-12 h-12 text-explore-accent" />,
  },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#051105] text-explore-text">
      <ScrollProgressBar />
      <nav
        className={`fixed top-0 left-0 right-0 ${
          isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
        } text-explore-text p-4 pb-2 md:pb-4 z-20 transition-all duration-300`}
      >
        <Navbar />
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
          <ParallaxBackground />
          <motion.div className="relative z-10 max-w-4xl mx-auto" style={{ opacity }}>
            <motion.h1
              className="text-5xl sm:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ExploreEasy: Μεταμορφώνοντας τις Ταξιδιωτικές Εμπειρίες
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ανακαλύψτε, Εξερευνήστε, Συνδεθείτε
            </motion.p>
            <motion.button
              className="bg-explore-accent text-explore-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-explore-light transition-colors inline-flex items-center hover:scale-105 transform transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ανακαλύψτε το ExploreEasy
              <ArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-20 bg-[#051105] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Το Όραμά μας
            </motion.h2>
            <motion.p
              className="text-lg text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Το ExploreEasy στοχεύει να μεταμορφώσει την ταξιδιωτική εμπειρία, προσφέροντας μια πλατφόρμα που συνδυάζει
              εξατομίκευση μέσω τεχνητής νοημοσύνης, κοινωνική δικτύωση και ένα σύστημα ανταμοιβής, ενσωματώνοντας το
              "Bucket List". Η αποστολή μας είναι να ενθαρρύνουμε τους χρήστες να ανακαλύπτουν προσωπικά ταξιδιωτικά
              προγράμματα και να συνδέονται με μια κοινότητα παθιασμένων εξερευνητών, μετατρέποντας κάθε ταξίδι σε μια
              ολοκληρωμένη εμπειρία.
            </motion.p>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-[#0A1F0A]">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Βασικές Λειτουργίες & Υπηρεσίες
          </motion.h2>
          <Carousel items={carouselItems} />
        </section>

        {/* Product Description Section */}
        <section id="product" className="py-20 bg-[#051105] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Η Εφαρμογή ExploreEasy
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-[#0A1F0A] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Award className="mr-2 text-explore-accent" />
                  Daily Home Screen
                </h3>
                <p className="mb-4">
                  Μια κύρια οθόνη σε στυλ Tinder όπου οι χρήστες βλέπουν διαδραστικές κάρτες με δραστηριότητες και
                  προορισμούς κοντά τους. Κάθε κάρτα επιτρέπει swipe ενέργειες για αποδοχή ή απόρριψη.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#0A1F0A] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Coins className="mr-2 text-explore-accent" />
                  Travel Planning Section
                </h3>
                <p className="mb-4">
                  Ένα ξεχωριστό section για οργάνωση ταξιδιών, συμπεριλαμβανομένου του Bucket List και εργαλείων
                  προγραμματισμού για τη δημιουργία πλήρων ταξιδιωτικών προγραμμάτων.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        </section>

        {/* Market Analysis Section */}
        <section id="market" className="py-20 bg-[#0A1F0A]">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ανάλυση Αγοράς
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-[#051105] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">Στόχος Κοινού</h3>
                <p>
                  Νέοι ενήλικες (18-35 ετών) με ενδιαφέρον για ταξίδια, αναζητώντας εξατομικευμένες εμπειρίες και
                  δυναμική κοινωνική αλληλεπίδραση.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#051105] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">Μέγεθος και Τάσεις Αγοράς</h3>
                <p>
                  Η αγορά των ταξιδιωτικών εφαρμογών είναι δυναμική, με αυξημένη ζήτηση για εξατομικευμένες και
                  διαδραστικές εμπειρίες.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#051105] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">Ανταγωνισμός & Διαφοροποίηση</h3>
                <p>
                  Κύριοι ανταγωνιστές: TripAdvisor, Couchsurfing, Travello. Το ExploreEasy διαφοροποιείται με την
                  προσωπική εξατομίκευση μέσω AI, το διαδραστικό home screen, και το ξεχωριστό Bucket List system.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Revenue Streams Section */}
        <section id="revenue" className="py-20 bg-[#051105] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Επιχειρηματικές Ροές Εσόδων
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-[#0A1F0A] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Award className="mr-2 text-explore-accent" />
                  Premium Συνδρομές
                </h3>
                <p className="mb-4">
                  Πρόσβαση σε αποκλειστικές λειτουργίες με τιμολόγηση ~6 EUR/μήνα. Στόχος μετατροπής 5% των χρηστών το
                  πρώτο έτος και 7% το δεύτερο έτος.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#0A1F0A] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Coins className="mr-2 text-explore-accent" />
                  In-App Διαφημίσεις
                </h3>
                <p className="mb-4">
                  Διαφημίσεις που εμφανίζονται στους δωρεάν χρήστες, με έσοδα βασισμένα σε CPM και CTR.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#0A1F0A] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Cpu className="mr-2 text-explore-accent" />
                  Affiliate Partnerships
                </h3>
                <p className="mb-4">
                  Συνεργασία με τουριστικούς παρόχους, ξενοδοχεία και υπηρεσίες μεταφοράς, με προμήθειες για κρατήσεις ή
                  πωλήσεις.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#0A1F0A] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <ShieldCheck className="mr-2 text-explore-accent" />
                  Reward System μέσω Bucket List
                </h3>
                <p className="mb-4">
                  Οι χρήστες κερδίζουν πόντους και badges για κάθε καταχώρηση στο Bucket List, ενθαρρύνοντας τη
                  συμμετοχή και δημιουργώντας ένα ενεργό οικοσύστημα ανταμοιβής.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        </section>

        {/* Financial Projections Section */}
        <section id="financials" className="py-20 bg-[#0A1F0A]">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Οικονομικές Προβλέψεις
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-[#051105] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">Έτος 1</h3>
                <ul className="list-disc list-inside">
                  <li>Χρήστες: 50.000 ενεργοί χρήστες</li>
                  <li>Premium Συνδρομές: 5% μετατροπή (2.500 χρήστες)</li>
                  <li>Συνολικά μηνιαία έσοδα: 30.000–40.000 EUR</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-[#051105] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">Έτος 2</h3>
                <ul className="list-disc list-inside">
                  <li>Χρήστες: 150.000 ενεργοί χρήστες</li>
                  <li>Premium Συνδρομές: 7% μετατροπή (10.500 χρήστες)</li>
                  <li>Συνολικά μηνιαία έσοδα: 80.000–100.000 EUR</li>
                </ul>
              </motion.div>
            </div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FinancialChart />
            </motion.div>
          </div>
        </section>

        {/* Marketing Strategy Section */}
        <section id="marketing" className="py-20 bg-[#051105] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Στρατηγική Μάρκετινγκ και Επέκτασης
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-[#0A1F0A] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
                <p>
                  Στοχευμένες καμπάνιες στα social media, συνεργασίες με travel influencers, SEO και περιεχόμενο για
                  αύξηση της οργανικής επισκεψιμότητας.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#0A1F0A] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">Launch Strategy</h3>
                <p>
                  Διεξαγωγή beta testing για συλλογή feedback, ακολουθούμενο από επίσημη κυκλοφορία μέσω press releases
                  και online διαφημιστικών καμπανιών.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        </section>

        {/* Next Steps Section */}
        <section id="next-steps" className="py-20 bg-[#0A1F0A]">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Επόμενα Βήματα
            </motion.h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  step: "Ανάπτυξη του MVP",
                  description: "Οριστικοποίηση και υλοποίηση των βασικών λειτουργιών.",
                },
                {
                  step: "Beta Testing",
                  description: "Συλλογή feedback από επιλεγμένους χρήστες και βελτιστοποίηση της εμπειρίας.",
                },
                {
                  step: "Digital Marketing & Launch",
                  description: "Ενεργοποίηση στρατηγικών marketing και επίσημη παρουσίαση της πλατφόρμας.",
                },
                {
                  step: "Συνεχής Βελτίωση",
                  description:
                    "Παρακολούθηση των KPIs και προσαρμογή της στρατηγικής με βάση το feedback και τα δεδομένα χρήσης.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#051105] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <HelpCircle className="mr-2 text-explore-accent" />
                    {item.step}
                  </h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center bg-[#051105] relative overflow-hidden">
          <div className="relative z-10">
            <motion.h2
              className="text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Έτοιμοι να Επενδύσετε στο Μέλλον των Ταξιδιών;
            </motion.h2>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Γίνετε μέρος της επανάστασης στον τρόπο που ταξιδεύουμε με το ExploreEasy!
            </motion.p>
            <motion.button
              className="bg-explore-accent text-explore-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-explore-light transition-colors inline-flex items-center hover:scale-105 transform transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Επικοινωνήστε Μαζί μας
              <ArrowRight className="ml-2" />
            </motion.button>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        </section>
      </main>

      <footer className="bg-[#051105] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">ExploreEasy</h3>
              <p>Ανακαλύψτε. Εξερευνήστε. Συνδεθείτε.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">Επικοινωνία</h4>
              <p>Email: info@exploreeasy.com</p>
              <p>Τηλέφωνο: +30 210 1234567</p>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-4">Ακολουθήστε μας</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-explore-light transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-explore-light transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-explore-light transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 ExploreEasy. Όλα τα δικαιώματα διατηρούνται.</p>
          </div>
        </div>
      </footer>

      <FloatingActionButton />
    </div>
  )
}

