import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Slider from 'react-slick';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from './CustomArrow';
import Promotions from './Promotions';
import Checkout from './Checkout';
import SignUp from './SignUp';
import Login from './Login';
import UserGuide from './UserGuide';
import FAQ from './FAQ';

// Initialize i18n
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to GameSlot",
          currentPromotions: "Current Promotions",
          searchPlaceholder: "What are you looking for?",
          allCategories: "All categories",
          categories: "Categories",
          gaming: "Gaming",
          software: "Software",
          giftCards: "Gift cards",
          subscriptions: "Subscriptions",
          elearning: "E-Learning",
          charity: "Charity",
          cart: "Cart",
          addToCart: "Add to Cart",
          proceedToCheckout: "Proceed to Checkout",
          checkout: "Checkout",
          creditCard: "Credit Card",
          enterCardDetails: "Enter your credit card details:",
          cardNumber: "Card Number",
          nameOnCard: "Name on Card",
          expiryDate: "Expiry Date",
          cvv: "CVV",
          back: "Back",
          next: "Next",
          confirm: "Confirm",
          reviewDetails: "Review your details and confirm your purchase.",
          errorMessage: "An error occurred. Please try again.",
          imageError: "Image not available.",
          signUp: "Sign Up",
          logIn: "Log In",
          email: "Email",
          password: "Password",
          userGuide: "User Guide",
          faq: "FAQ",
          userGuideTitle: "User Guide",
          userGuideIntro: "This page explains the concept of the website, its objectives, and how users can make the most out of it.",
          objectivesTitle: "Objectives",
          objectivesContent: "Our goal is to provide a seamless experience for finding and purchasing your favorite games.",
          howToUseTitle: "How to Use",
          howToUseContent: "Browse through our categories, add items to your cart, and proceed to checkout when ready.",
          faqTitle: "Frequently Asked Questions",
          faqQuestion1: "How do I purchase a game?",
          faqAnswer1: "To purchase a game, add it to your cart and proceed to checkout.",
          faqQuestion2: "Can I return a game?",
          faqAnswer2: "Please check our return policy for more details."
        }
      },
      fr: {
        translation: {
          welcome: "Bienvenue à GameSlot",
          currentPromotions: "Promotions en cours",
          searchPlaceholder: "Que cherchez-vous?",
          allCategories: "Toutes les catégories",
          categories: "Catégories",
          gaming: "Jeux",
          software: "Logiciels",
          giftCards: "Cartes cadeaux",
          subscriptions: "Abonnements",
          elearning: "E-Learning",
          charity: "Charité",
          cart: "Panier",
          addToCart: "Ajouter au panier",
          proceedToCheckout: "Passer à la caisse",
          checkout: "Paiement",
          creditCard: "Carte de crédit",
          enterCardDetails: "Entrez les détails de votre carte de crédit:",
          cardNumber: "Numéro de carte",
          nameOnCard: "Nom sur la carte",
          expiryDate: "Date d'expiration",
          cvv: "CVV",
          back: "Retour",
          next: "Suivant",
          confirm: "Confirmer",
          reviewDetails: "Vérifiez vos détails et confirmez votre achat.",
          errorMessage: "Une erreur est survenue. Veuillez réessayer.",
          imageError: "Image non disponible.",
          signUp: "S'inscrire",
          logIn: "Se connecter",
          email: "Email",
          password: "Mot de passe",
          userGuide: "Guide de l'utilisateur",
          faq: "FAQ",
          userGuideTitle: "Guide de l'utilisateur",
          userGuideIntro: "Cette page explique le concept du site Web, ses objectifs et comment les utilisateurs peuvent en tirer le meilleur parti.",
          objectivesTitle: "Objectifs",
          objectivesContent: "Notre objectif est de fournir une expérience transparente pour trouver et acheter vos jeux préférés.",
          howToUseTitle: "Comment utiliser",
          howToUseContent: "Parcourez nos catégories, ajoutez des articles à votre panier et passez à la caisse lorsque vous êtes prêt.",
          faqTitle: "Questions fréquemment posées",
          faqQuestion1: "Comment acheter un jeu?",
          faqAnswer1: "Pour acheter un jeu, ajoutez-le à votre panier et passez à la caisse.",
          faqQuestion2: "Puis-je retourner un jeu?",
          faqAnswer2: "Veuillez consulter notre politique de retour pour plus de détails."
        }
      }
    }
  });

const items = [
  { id: 1, title: 'Microsoft Office 365', price: '$99.99', description: 'Get the latest Office applications and features.', category: 'software', image: '/office-365.jpg' },
  { id: 2, title: 'Adobe Photoshop', price: '$20.99/month', description: 'Edit photos and create graphics with industry-leading software.', category: 'subscriptions', image: '/photoshop.jpg' },
  { id: 3, title: 'Amazon Gift Card', price: '$50.00', description: 'Gift card for Amazon purchases.', category: 'gift-cards', image: '/amazon-gift-card.jpg' },
  { id: 4, title: 'Elden Ring', price: '$59.99', description: 'Explore a vast world of adventure.', category: 'gaming', image: '/elden.jpg' },
  { id: 5, title: 'Call of Duty: Modern Warfare', price: '$39.99', description: 'Experience the thrill of battle.', category: 'gaming', image: '/cod-modern-warfare.jpg' },
  { id: 6, title: 'FIFA 23', price: '$49.99', description: 'Join the world of football.', category: 'gaming', image: '/fifa-23.jpg' },
  { id: 7, title: 'Cyberpunk 2077', price: '$29.99', description: 'An open-world, action-adventure story set in Night City.', category: 'gaming', image: '/cyberpunk-2077.jpg' },
  { id: 8, title: 'Assassin’s Creed Valhalla', price: '$39.99', description: 'Become Eivor, a legendary Viking warrior.', category: 'gaming', image: '/ac-valhalla.jpg' },
  { id: 9, title: 'Fortnite', price: 'Free', description: 'Join the battle and build your way to victory.', category: 'gaming', image: '/fortnite.jpg' }
];

const categories = [
  { id: 'all', name: i18n.t('allCategories') },
  { id: 'gaming', name: i18n.t('gaming') },
  { id: 'software', name: i18n.t('software') },
  { id: 'gift-cards', name: i18n.t('giftCards') },
  { id: 'subscriptions', name: i18n.t('subscriptions') },
  { id: 'elearning', name: i18n.t('elearning') },
  { id: 'charity', name: i18n.t('charity') }
];

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

const Navbar = ({ cartCount }) => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="logo">GameSlot</div>
      <nav>
        <div className="header-left">
          <ul>
            <li><Link to="/">{t('welcome')}</Link></li>
            <li><Link to="/promotions">{t('currentPromotions')}</Link></li>
            <li><Link to="/cart">{t('cart')} ({cartCount})</Link></li>
            <li><Link to="/user-guide">{t('userGuide')}</Link></li>
            <li><Link to="/faq">{t('faq')}</Link></li>
          </ul>
        </div>
        <div className="header-right">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('fr')}>FR</button>
          <Link to="/signup">{t('signUp')}</Link>
          <Link to="/login">{t('logIn')}</Link>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <h1>GameSlot</h1>
      <p>Find your favorite games and more</p>
    </div>
  );
};

const SearchBar = ({ addToCart }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = items.filter(item => {
    const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <Slider dots={true} infinite={false} speed={500} slidesToShow={3} slidesToScroll={3}>
        {filteredItems.map(item => (
          <div key={item.id} className="game-card">
            <img src={item.image} alt={item.title} onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/300x400?text=Image+not+available";}} />
            <div>
              <h2><Link to={`/item/${item.id}`}>{item.title}</Link></h2>
              <p className="price">{item.price}</p>
              <p>{item.description}</p>
              <button onClick={() => addToCart(item)}>{t('addToCart')}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Cart = ({ cart }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '').replace('/month', '')), 0).toFixed(2);
  return (
    <div className="container">
      <h1>{t('cart')}</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.title} - {item.price}</li>
            ))}
          </ul>
          <h2>Total: ${total}</h2>
          <button className="proceed-to-checkout" onClick={() => navigate('/checkout')}>{t('proceedToCheckout')}</button>
        </div>
      )}
    </div>
  );
};

const ItemDetails = () => {
  const { id } = useParams();
  const item = items.find(i => i.id === parseInt(id));
  
  if (!item) {
    return <div className="container">Item not found</div>;
  }
  
  return (
    <div className="container">
      <div className="game-card">
        <img src={item.image} alt={item.title} style={{ width: '200px' }} onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/300x400?text=Image+not+available";}} />
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p className="price">{item.price}</p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 GameSlot. All rights reserved.</p>
    </footer>
  );
};

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/promotions" element={<Promotions addToCart={addToCart} />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-guide" element={<UserGuide />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const Home = ({ addToCart }) => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <Hero />
      <h1>{t('welcome')}</h1>
      <SearchBar addToCart={addToCart} />
    </div>
  );
};

export default App;
