// server.js

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Public directory to serve static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  if (req.headers.host === 'burkepfp.ie'){
    return res.redirect(301, 'www.burkepfp.ie' + req.url);
  }

  next();
})

// Routes
app.get('/', (req, res) => {

  res.render("index", {
    pageTitle: "Burke Passive Fire Protection",
    pageDesc: "Ireland's Leading Fire Protection Specialists",
    canonicalPath: "/"
  })

});

app.get('/services', (req, res) => {

  res.render("services", {
    pageTitle: "Burke Passive Fire Protection | Services",
    pageDesc: "Our services consist of passive fire protection, penetration seals, intumescent paint, fire curtain barriers, steel encasements and fire stopping surveys.",
    canonicalPath: "/services"
  })

})

app.get('/about-us', (req, res) => {
  
  res.render("aboutUs", {
    pageTitle: "Burke Passive Fire Protection | About Us",
    pageDesc: "Learn about Burke PFP, Ireland's leading fire protection specialists",
    canonicalPath: "/about-us"
  })

})

app.get('/contact-us', (req, res) => {

  res.render("contactUs", {
    pageTitle: "Burke Passive Fire Protection | Contact Us",
    pageDesc: "Get in touch with Burke Passive Fire Protection. Based in Rathbourne, Dublin 15. Call (01) 899 6210 or email info@burkepfp.com",
    canonicalPath: "/contact-us"
  })

})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});