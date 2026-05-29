import { useState } from 'react'
import logo from '../image/logo.png'
import heroBg from './assets/hero-bg.svg'
import productShowcaseImage from '../image/image-1.png'
import launchImage from '../image/image-2.png'

const features = [
  { icon: '✦', title: 'Precision Spray', text: 'Fine mist control for even cooking and less waste.' },
  { icon: '🛡', title: 'Food Safe', text: 'Carefully packed and designed for everyday kitchen use.' },
  { icon: '💧', title: 'Less Oil Usage', text: 'Use just the right amount without compromising flavour.' },
  { icon: '⚡', title: 'Easy to Use', text: 'Simple spray bottle with a smooth, reliable finish.' },
  { icon: '📦', title: 'Compact Design', text: 'Portable bottle that fits beautifully in any kitchen.' },
  { icon: '🌿', title: 'Flavour Variety', text: 'Choose from classic and crafted flavour options.' },
]

const galleryCards = [
  { icon: '🧴', title: 'Product Bottle', tag: 'Main Variant', accent: 'warm' },
  { icon: '🧄', title: 'Flavour Variants', tag: 'Garlic / Chilli / Herb', accent: 'cool' },
  { icon: '📦', title: 'Packaging', tag: 'Retail Friendly', accent: 'gold' },
  { icon: '🍳', title: 'Usage Shots', tag: 'Cooking Moments', accent: 'green' },
]

const buyNowUrl = 'https://www.amazon.in/s?k=spray+lite&crid=3KFXHXFPR625T&sprefix=spray+lite%2Caps%2C353&ref=nb_sb_noss_1'

const reviews = [
  {
    name: 'Asha Mehta',
    quote: 'No more messy oil splashes. The spray feels premium and easy to control.',
    rating: '★★★★★',
  },
  {
    name: 'Rohit Verma',
    quote: 'Perfect for tawa cooking and air fryer snacks. The flavours are a great addition.',
    rating: '★★★★★',
  },
  {
    name: 'Nina Kapoor',
    quote: 'Cleaner kitchen, smarter cooking, and less oil. We use it every day.',
    rating: '★★★★★',
  },
]

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', address: '', product: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-block">
          <img className="brand-logo" src={logo} alt="Spray Lite logo" />
          <div>
            <div className="brand-name">Spray Lite</div>
            <div className="brand-tag">Smart spray. Lighter cooking.</div>
          </div>
        </div>

        <nav className="top-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="page-content">

        {/* ✅ Hero Section with Background Image */}
        <section
          className="hero-section"
          id="home"
          style={{
            backgroundImage: `linear-gradient(145deg, rgba(11,11,11,0.55), rgba(19,19,20,0.45)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="hero-copy">
            <p className="eyebrow">Launching Soon</p>
            <h1>Spray Smart. Cook Lite.</h1>
            <p className="hero-subtext">
              Precision oil sprays with crafted flavours for healthier, tastier cooking.
            </p>
            <p className="hero-text">
              Designed for Indian kitchens, Spray Lite gives better control, healthier cooking,
              and an easy everyday spray experience.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={buyNowUrl} target="_blank" rel="noreferrer">Buy Now</a>
              <a className="secondary-button" href="#features">Explore Products</a>
            </div>
            <div className="mini-stats">
              <span>Less Oil</span>
              <span>Premium Spray</span>
              <span>Flavour Variants</span>
            </div>
          </div>

          <div className="hero-product" aria-label="Product showcase">
            <div className="product-stage">
              <img className="hero-product-image" src={launchImage} alt="Spray Lite spray bottle launching soon" />
            </div>
            <div className="product-meta">
              <div className="meta-tag">Food Safe</div>
              <div className="meta-tag">Compact</div>
              <div className="meta-tag">Easy Spray</div>
            </div>
          </div>
        </section>

        <section className="section-block" id="features">
          <div className="section-heading">
            <p className="eyebrow">Features</p>
            <h2>Why customers love Spray Lite.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="gallery">
          <div className="section-heading">
            <p className="eyebrow">Product Showcase</p>
            <h2>Product images, variants, and usage moments.</h2>
          </div>

          <div className="product-showcase-image">
            <img src={productShowcaseImage} alt="Spray Lite product variants" />
          </div>

          <div className="gallery-grid">
            {galleryCards.map((card) => (
              <article className={`gallery-card ${card.accent}`} key={card.title}>
                <div className="gallery-image"></div>
                <div className="gallery-copy">
                  <div className="gallery-card-header">
                    <span className="gallery-icon" aria-hidden="true">{card.icon}</span>
                    <h3>{card.title}</h3>
                  </div>
                  <p className="gallery-tag">{card.tag}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="reviews">
          <div className="section-heading">
            <p className="eyebrow">Reviews</p>
            <h2>What home cooks are saying.</h2>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-stars">{review.rating}</div>
                <p className="review-quote">"{review.quote}"</p>
                <p className="review-name">{review.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div>
            <p className="eyebrow">Strong CTA</p>
            <h2>Start Cooking Smarter Today.</h2>
            <p className="cta-text">
              Bring precision, light cooking, and wholesome flavour to your kitchen.
            </p>
          </div>

          <div className="cta-actions">
            <a className="primary-button" href={buyNowUrl} target="_blank" rel="noreferrer">Buy Now</a>
            <a className="secondary-button" href="mailto:hello@spray-lite.in">Get Quote</a>
            <a className="secondary-button" href="mailto:hello@spray-lite.in">Contact Us</a>
          </div>
        </section>
      </main>

      {/* ✅ Footer with Contact Form */}
      <footer className="site-footer">
        <div className="footer-info">
          <div className="footer-brand-block">
            <div className="footer-brand">Spray Lite</div>
            <p>Smart spray solutions for cleaner, lighter cooking.</p>
          </div>

          <div className="footer-group">
            <h3>Social Media</h3>
            <div className="footer-links">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>

          <div className="footer-group">
            <h3>Contact Us</h3>
            <div className="footer-links">
              <a href="tel:+919999999999">+91 99999 99999</a>
              <a href="mailto:hello@spray-lite.in">hello@spray-lite.in</a>
            </div>
          </div>

          <div className="footer-policy">
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <span>© 2026 Spray Lite. All rights reserved.</span>
          </div>
        </div>

        <div className="footer-form-wrapper">
          {submitted ? (
            <div className="thank-you-msg" role="status">
              Thank you for connecting with us.
            </div>
          ) : (
            <form className="footer-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Get in Touch</h3>

              <label className="form-field">
                <span>Name</span>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label className="form-field">
                <span>Email</span>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label className="form-field">
                <span>Mobile Number</span>
                <input
                  className="form-input"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label className="form-field">
                <span>Address (optional)</span>
                <input
                  className="form-input"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </label>

              <label className="form-field">
                <span>Which Product You Have</span>
                <select
                  className="form-input"
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a product</option>
                  <option value="Classic Spray">Classic Spray</option>
                  <option value="Garlic Flavour">Garlic Flavour</option>
                  <option value="Chilli Flavour">Chilli Flavour</option>
                  <option value="Herb Flavour">Herb Flavour</option>
                </select>
              </label>

              <button
                className="primary-button form-submit"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </footer>
    </div>
  )
}

export default App
