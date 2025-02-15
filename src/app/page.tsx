"use client"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, MapPin, Users, Trophy, HelpCircle } from "lucide-react"
import ParallaxBackground from "./components/ParallaxBackground"
import FloatingActionButton from "./components/FloatingActionButton"
import ScrollProgressBar from "./components/ScrollProgressBar"
import { Award, Coins, Cpu, ShieldCheck } from "lucide-react"

const carouselItems = [
  {
    title: "Εξατομικευμένες Εμπειρίες",
    content: (
      <>
        <p className="mb-4 text-white">
          Με τη βοήθεια τεχνητής νοημοσύνης, η πλατφόρμα μας μαθαίνει τα ενδιαφέροντά σας και δημιουργεί μοναδικές
          προτάσεις ταξιδιών, μετατρέποντας κάθε ταξίδι σε μια προσωπική ανακάλυψη.
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
          Δεσμευόμαστε να δημιουργήσουμε μια δυναμική κοινότητα, όπου οι ταξιδιώτες μοιράζονται ιστορίες, εμπειρίες και
          συμβουλές, δημιουργώντας έτσι ένα αίσθημα συνδεσιμότητας και εμπιστοσύνης.
        </p>
      </>
    ),
    icon: <Users className="w-12 h-12 text-explore-accent" />,
  },
  {
    title: "Gamification",
    content: (
      <>
        <p className="mb-4 text-white">
          Με την ενσωμάτωση στοιχείων παιχνιδιού – πόντους, badges, προκλήσεις και πίνακες κατάταξης – μετατρέπουμε την
          εξερεύνηση σε μια διασκεδαστική και ανταγωνιστική εμπειρία, που κερδίζει τους χρήστες και τους κρατάει
          ενεργούς.
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
        className={`fixed top-0 left-0 right-0 ${isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"} text-explore-text p-4 pb-2 md:pb-4 z-20 transition-all duration-300`}
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
              Μία Επαναστατική Πλατφόρμα Ταξιδιών
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ανακαλύψτε, Εξερευνήστε, Βιώστε - Με έναν εντελώς νέο τρόπο
            </motion.p>
            <motion.button
              className="bg-explore-accent text-explore-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-explore-light transition-colors inline-flex items-center hover:scale-105 transform transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ξεκινήστε το Ταξίδι σας
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
              Το ExploreEasy έχει ως αποστολή να μεταμορφώσει τον τρόπο με τον οποίο οι άνθρωποι ανακαλύπτουν και
              βιώνουν ταξιδιωτικές εμπειρίες. Φανταστείτε μια εφαρμογή που δεν απλώς σας δείχνει προορισμούς, αλλά
              κατανοεί τα προσωπικά σας ενδιαφέροντα και προτείνει μοναδικές εμπειρίες, ενώ σας ενώνει με μια κοινότητα
              παθιασμένων εξερευνητών. Το ExploreEasy είναι η γέφυρα ανάμεσα στη σύγχρονη τεχνολογία και την αυθεντική,
              εμπλουτισμένη εμπειρία ταξιδιού.
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
            Η Πρότασή μας
          </motion.h2>
          <Carousel items={carouselItems} />
        </section>

        {/* Crypto Features Section */}
        <section id="crypto-features" className="py-20 bg-[#051105] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Καινοτομία με Κρυπτονομίσματα
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
                  Κρυπτο Badges & Rewards
                </h3>
                <p className="mb-4">
                  Μετατρέπουμε τα badges σε ψηφιακά tokens ή NFTs, αποδεικνύοντας τις επιτεύξεις σας και προσφέροντας
                  ανταμοιβές εντός της πλατφόρμας.
                </p>
                <p>
                  Δημιουργούμε μια εσωτερική οικονομία όπου η συμμετοχή σας μετατρέπεται σε πραγματική αξία και αίσθημα
                  κατοχής.
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
                  Το Δικό μας Κρυπτονόμισμα
                </h3>
                <p className="mb-4">
                  Εισάγουμε το δικό μας κρυπτονόμισμα, δημιουργώντας ένα οικοσύστημα για ανταλλαγές, συναλλαγές και
                  ειδικές δράσεις εντός της πλατφόρμας.
                </p>
                <p>Χρησιμοποιήστε το για premium λειτουργίες ή συνεργασίες με τρίτους παρόχους.</p>
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
                  Δυνατότητα Mining
                </h3>
                <p className="mb-4">
                  Κερδίστε το κρυπτονόμισμά μας μέσω της συμμετοχής σας στην πλατφόρμα με ένα ελαφρύ σύστημα mining ή
                  proof-of-stake.
                </p>
                <p>Σχεδιασμένο για αποδοτικότητα σε mobile συσκευές, χωρίς υπερβολικές ενεργειακές απαιτήσεις.</p>
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
                  Ασφάλεια & Συμμόρφωση
                </h3>
                <p className="mb-4">
                  Συνεργαζόμαστε με κορυφαίους νομικούς συμβούλους και ειδικούς στην κρυπτονομισματική τεχνολογία για να
                  διασφαλίσουμε τη συμμόρφωση με τους κανονισμούς.
                </p>
                <p>Η ασφάλεια των χρηστών και η προστασία των δεδομένων αποτελούν πρωταρχική μας προτεραιότητα.</p>
              </motion.div>
            </div>
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl mb-6">
                Με αυτές τις καινοτόμες λειτουργίες, το ExploreEasy προσφέρει μια μοναδική, διαφοροποιημένη εμπειρία που
                ενισχύει την αίσθηση κοινότητας και ανταμοιβής.
              </p>
              <button className="bg-explore-accent text-explore-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-explore-light transition-colors inline-flex items-center hover:scale-105 transform transition duration-300 ease-in-out">
                Μάθετε περισσότερα για το Crypto Ecosystem
                <ArrowRight className="ml-2" />
              </button>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-[#0A1F0A] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Πώς Λειτουργεί
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Δημιουργήστε το προφίλ σας",
                  description: "Εγγραφείτε και προσθέστε τα ταξιδιωτικά σας ενδιαφέροντα και προτιμήσεις.",
                },
                {
                  title: "Λάβετε εξατομικευμένες προτάσεις",
                  description: "Η AI μας αναλύει τα δεδομένα σας και προτείνει μοναδικές ταξιδιωτικές εμπειρίες.",
                },
                {
                  title: "Εξερευνήστε και μοιραστείτε",
                  description:
                    "Ζήστε νέες εμπειρίες, κερδίστε πόντους και μοιραστείτε τις ιστορίες σας με την κοινότητα.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-[#051105] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-explore-accent text-explore-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-[#0A1F0A]">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Συχνές Ερωτήσεις
            </motion.h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  question: "Πώς λειτουργεί η εξατομίκευση των προτάσεων;",
                  answer:
                    "Χρησιμοποιούμε προηγμένους αλγόριθμους AI που αναλύουν τις προτιμήσεις σας, το ιστορικό ταξιδιών σας και τις αλληλεπιδράσεις σας με την εφαρμογή για να δημιουργήσουμε εξατομικευμένες προτάσεις.",
                },
                {
                  question: "Είναι δωρεάν η χρήση του ExploreEasy;",
                  answer:
                    "Το ExploreEasy προσφέρει μια δωρεάν βασική έκδοση με περιορισμένες λειτουργίες. Για πλήρη πρόσβαση σε όλες τις δυνατότητες, συμπεριλαμβανομένων των εξατομικευμένων προτάσεων AI, διατίθεται μια premium συνδρομή.",
                },
                {
                  question: "Πώς μπορώ να κερδίσω πόντους και badges;",
                  answer:
                    "Μπορείτε να κερδίσετε πόντους και badges ολοκληρώνοντας προκλήσεις, επισκεπτόμενοι νέους προορισμούς, γράφοντας κριτικές και μοιράζοντας τις εμπειρίες σας με την κοινότητα του ExploreEasy.",
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
                    {item.question}
                  </h3>
                  <p>{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section id="strategy" className="py-20 bg-[#051105] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Η Στρατηγική μας
            </motion.h2>
            <div className="text-lg max-w-3xl mx-auto">
              <motion.h3
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Οικονομικές Προβλέψεις και Μελλοντικές Προοπτικές
              </motion.h3>
              <motion.ul
                className="list-disc list-inside mb-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <li>
                  <strong>Βραχυπρόθεσμος Στόχος (Έτος 1):</strong> Επιδίωξη 50.000 ενεργών χρηστών και σταθερή μετατροπή
                  σε premium με μηνιαία έσοδα που εκτιμώνται στα 30.000–40.000 USD.
                </li>
                <li>
                  <strong>Μακροπρόθεσμος Στόχος (Έτος 2):</strong> Επέκταση σε 150.000 ενεργούς χρήστες και αύξηση του
                  ποσοστού μετατροπής, οδηγώντας σε μηνιαία έσοδα που θα φτάνουν τα 80.000–100.000 USD, με το break-even
                  να επιτυγχάνεται εντός 18-24 μηνών.
                </li>
                <li>
                  <strong>Χρηματοδότηση:</strong> Στόχος η συγκέντρωση περίπου 300.000 USD για την ανάπτυξη του MVP και
                  την έναρξη των λειτουργιών, με χρηματοδότηση μέσω angel investors ή venture capital.
                </li>
              </motion.ul>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        </section>

        {/* Brand Section */}
        <section id="brand" className="py-20 bg-[#051105] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Το Brand μας και η Παρουσίασή του στο Web
            </motion.h2>
            <div className="text-lg max-w-3xl mx-auto">
              <motion.p
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Η ιστοσελίδα του ExploreEasy θα φιλοξενείται σε μια πλατφόρμα υψηλής ποιότητας όπως το Vercel και θα
                αποπνέει το όραμά μας μέσα από ένα μοντέρνο, καθαρό και διαδραστικό UI:
              </motion.p>
              <motion.ul
                className="list-disc list-inside mb-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <li>
                  <strong>Interactive Carousel:</strong> Τα βασικά χαρακτηριστικά παρουσιάζονται με ομαλές μεταβάσεις,
                  δημιουργώντας μια ροή πληροφοριών που ενισχύει το μήνυμα της συνεχούς ανακάλυψης.
                </li>
                <li>
                  <strong>Μοντέρνα Χρώματα και Γραμματοσειρές:</strong> Η παλέτα μας συνδυάζει ουδέτερα φόντα με
                  ζωντανές πινελιές από πράσινο και τουρκουάζ, σε συνδυασμό με μοντέρνες sans-serif γραμματοσειρές.
                </li>
                <li>
                  <strong>Responsive Design:</strong> Η ιστοσελίδα είναι πλήρως προσαρμοσμένη σε όλες τις συσκευές,
                  διασφαλίζοντας ότι το όραμά μας μεταδίδεται με συνέπεια, ανεξαρτήτως πλατφόρμας.
                </li>
              </motion.ul>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
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
              Έτοιμοι να Εξερευνήσετε;
            </motion.h2>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Γίνετε μέρος της επανάστασης στον τρόπο που ταξιδεύουμε!
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
              Εγγραφείτε Τώρα
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
              <p>Ανακαλύψτε. Εξερευνήστε. Ζήστε.</p>
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

