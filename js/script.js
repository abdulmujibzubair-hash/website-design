alert("Hello lovelies, Welcome to University of Ilorin Student Marketplace, where we sell quality, affordable and trusted products.")

function searchPartners(){

  let input = document.getElementById('searchInput');
  let filter = input.value.toLowerCase();
  let cards = document.querySelectorAll('.card');

  cards.forEach(card => {

    let text = card.innerText.toLowerCase();
    let category = card.dataset.category.toLowerCase();

    if(text.includes(filter) || category.includes(filter)){
      card.classList.remove('hide');
    } else {
      card.classList.add('hide');
    } 

  });

}

/* FILTER */
function filter(category){

  let cards = document.querySelectorAll('.card');

  cards.forEach(card => {

    if(category === 'all' || card.dataset.category === category){
      card.classList.remove('hide');
    }else{
      card.classList.add('hide');
    }

  });

}

/* OPEN DETAILS */
function openDetails(type){

  let details = document.getElementById('details');
  details.classList.add('active');

  let title = document.getElementById('title');
  let desc = document.getElementById('desc');
  let products = document.getElementById('products');

  products.innerHTML = '';

  if(type === 'fashion'){

    title.innerText = "WELCOME TO EVERYTHING BY LEEMARH'S STORE";
    desc.innerText = "We sell quality fashion items, jewelries, bags, unisex clothing, perfumes, shoes and lot more at affordable prices.";

    products.innerHTML = `
      <div class="products">
        <img src="images/IMG-20260517-WA0215.jpg">
        <p>50ml Yara and Asad Perfumes</p>
        <p>₦7,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260517-WA0216.jpg">
        <p>Customised Hoodies Available</p>
        <p>₦12,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260518-WA0001.jpg">
        <p>Classic Urban Knitted Polo</p>
        <p>₦19,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260518-WA0003(1).jpg">
        <p>Quality Handbags</p>
        <p>₦25,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260518-WA0004.jpg">
        <p>Quality Handbags</p>
        <p>₦6,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260518-WA0002.jpg">
        <p>Heels <br>(Size run: 37-42)</p>
        <p>₦26,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260518-WA0090.jpg">
        <p>Nike Shoe <br>(Size run: 41-47)</p>
        <p>₦25,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260518-WA0091.jpg">
        <p>Nike Shoe <br>(Size run: 38-42)</p>
        <p>₦24,000</p>
      </div>
    `;

  }


  if(type === 'fashion1'){

    title.innerText = "WELCOME TO AUZELLE'S STORE";
    desc.innerText = "We enhance the elegance of our Estrellas by offering stylish, high-qaulity accessories designed to elevate your everyday look-while keeping luxury within reach";

    products.innerHTML = `
      <div class="products">
        <img src="images/IMG-20260512-WA0077.jpg">
        <p>Jingle Bracelet or Anklet</p>
        <p>₦2,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260512-WA0079.jpg">
        <p></p>
        <p>₦</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260512-WA0080.jpg">
        <p></p>
        <p>₦</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260512-WA0081.jpg">
        <p></p>
        <p>₦</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260512-WA0082.jpg">
        <p></p>
        <p>₦</p>
      </div>
   
      <div class="products">
        <img src="images/IMG-20260512-WA0085.jpg">
        <p>Leather Handbag</p>
        <p>₦</p>
      </div>

       <div class="products">
        <img src="images/IMG-20260512-WA0093.jpg">
        <p>Quality Handbag</p>
        <p>₦9.000 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260523-WA0064.jpg">
        <p>Quality Handbag</p>
        <p>₦10,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260523-WA0066.jpg">
        <p>Summer Vibes Totes</p>
        <p>₦10,000 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260512-WA0086.jpg">
        <p></p>
        <p>₦</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260512-WA0090.jpg">
        <p>Customized Cap</p>
        <p>Price varies based on preference</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260523-WA0069.jpg">
        <p>Size run(38-42) <br> Not boxed</p>
        <p>₦19,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260523-WA0071.jpg">
        <p>Size run(40-45) <br> Not boxed</p>
        <p>₦23,000</p>
      </div>
    `;
  
  }


  if(type === 'fashion2'){

    title.innerText = "WELCOME TO G FASHI'S STORE";
    desc.innerText = "I offer different designs of jewelries to match your style with room decor flowers, card and vase, making you and your home looking aesthetically pleasing";

    products.innerHTML = `
      <div class="products">
        <img src="images/IMG-20260514-WA0135(1).jpg">
        <p>Owambe Jewelry Set</p>
        <p>₦17,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260514-WA0169.jpg">
        <p>Jewelry Set</p>
        <p>₦17,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260514-WA0170.jpg">
        <p>Jewelry Set</p>
        <p>₦19,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260514-WA0148.jpg">
        <p>Tribal Muse earrings</p>
        <p>₦1,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260514-WA0152.jpg">
        <p>Bracelet with ring</p>
        <p>₦3,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260514-WA0153.jpg">
        <p>Bracelet with ring</p>
        <p>₦3,500</p>
      </div>

      
      <div class="products">
        <img src="images/IMG-20260522-WA0093.jpg">
        <p>Chunky Bangles</p>
        <p>₦4,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260514-WA0147.jpg">
        <p>Gucci Wristwatch</p>
        <p>₦17,000 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260514-WA0167.jpg">
        <p>Prada Shade</p>
        <p>₦8,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260514-WA0171.jpg">
        <p>Flower Vase</p>
        <p>₦5,000 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260514-WA0172.jpg">
        <p>Wall Collage</p>
        <p>₦4,000 for pack</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260514-WA0173.jpg">
        <p>Vine Leaf</p>
        <p>₦1,200</p>
      </div>
    `;

  }

  if(type === 'fashion3'){

    title.innerText = "WELCOME TO ANNIE'S BLISS STORE";
    desc.innerText = "Annie's Bliss is a fashion and lifestyle brand that offers a curated collection of skincare essentials and accessories.";

    products.innerHTML = `
      <div class="products">
        <img src="images/IMG-20260520-WA0091.jpg">
        <p>Face Masks</p>
        <p>₦500 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260520-WA0092.jpg">
        <p>Eye Masks</p>
        <p>₦500 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260520-WA0093.jpg">
        <p>Black head mask for nose</p>
        <p>₦500 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260520-WA0096.jpg">
        <p>Pimples Patch</p>
        <p>₦1,000 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260520-WA0102.jpg">
        <p>Foot Mask</p>
        <p>₦2,300 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260520-WA0098.jpg">
        <p>Mud Mask</p>
        <p>₦500 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260520-WA0101.jpg">
        <p>Hand Cream</p>
        <p>₦800 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260520-WA0094.jpg">
        <p>Fave Shave</p>
        <p>₦1,000 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260520-WA0095.jpg">
        <p>Lip Brush</p>
        <p>₦500 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260520-WA0100.jpg">
        <p>Tongue Scraper</p>
        <p>₦1,000 each</p>
      </div>

       <div class="products">
        <img src="images/IMG-20260520-WA0099.jpg">
        <p>Skincare products basket</p>
        <p>₦2,500 each</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260520-WA0097.jpg">
        <p>Packaging Nylons</p>
        <p>₦2,500 per dozen</p>
      </div>
    `;

  }


  if(type === 'food'){

    title.innerText = "WELCOME TO TEEFAH BAKES STORE";
    desc.innerText = "Teefah Bakes is an Ilorin-based artisanal bakery dedicated to the art of premium confectionary. From elegant layered cakes to our signature cupcakes, we blend professional hospitality expertise with a passion for flavor to create treats that are as beautiful as they are delicious.";

    products.innerHTML = `
      <div class="products">
        <img src="images/IMG-20260513-WA0245.jpg">
        <p>Box of 6 Cupcakes</p>
        <p>₦6,000</p>
      </div>

       <div class="products">
        <img src="images/IMG-20260513-WA0244.jpg">
        <p>Box of 12 Cupcakes</p>
        <p>₦11,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260513-WA0242.jpg">
        <p>Foil Cakes</p>
        <p>₦2,000</p>
      </div>

       <div class="products">
        <img src="images/IMG-20260513-WA0243.jpg">
        <p>Frosted Foil cakes</p>
        <p>₦3,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260513-WA0238.jpg">
        <p>Mini Bento Cakes</p>
        <p>₦9,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260513-WA0239.jpg">
        <p>8 inches 4 layered cakes</p>
        <p>₦65,000</p>
      </div>
    `;
  }
    
    if(type === 'food1'){

    title.innerText = "WELCOME TO CAKES N' TREATS BY OYIN STORE";
    desc.innerText = "At Cakes n Treats by Oyin, we believe every celebration deserves something made with care, not mass-produced. We’re a small-batch bakery specializing in custom cakes, cupcakes, cookies, and pastries. We take your ideas and turn them into treats that taste as good as they look. From rich chocolate birthday cakes to buttery cookies and flaky pastries, everything is made with quality ingredients and zero shortcuts. No preservatives, no shortcuts just delicious, handcrafted treats for your special moments.";

    products.innerHTML = `
      <div class="products">
        <img src="images/IMG-20260523-WA0042.jpg">
        <p>Size 5 Vanilla Cake</p>
        <p>₦10,000</p>
      </div>

       <div class="products">
        <img src="images/IMG-20260523-WA0044.jpg">
        <p>Mini Foil Cake</p>
        <p>₦1,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260523-WA0046.jpg">
        <p>Frosted Foil cakes</p>
        <p>₦2,500</p>
      </div>

       <div class="products">
        <img src="images/IMG-20260523-WA0050.jpg">
        <p>Exclusive Package </p>
        <p>₦35,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260522-WA0081.jpg">
        <p>Mini Package</p>
        <p>₦25,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260522-WA0084.jpg">
        <p>Custom Birthday Package</p>
        <p>₦20,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260523-WA0052.jpg">
        <p>Custom Package</p>
        <p>₦7,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260523-WA0054.jpg">
        <p>Birthday Cake</p>
        <p>₦7,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260522-WA0083.jpg">
        <p>Birthday Cake</p>
        <p>₦8,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260522-WA0085.jpg">
        <p>Birthday Cake</p>
        <p>₦6,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260522-WA0086.jpg">
        <p>Medium Jar of chin chin</p>
        <p>₦3,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260522-WA0087.jpg">
        <p>Box of 12 Cupcakes</p>
        <p>₦3,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260522-WA0088.jpg">
        <p>Cake</p>
        <p>₦12,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260522-WA0089.jpg">
        <p>Cake Parfait</p>
        <p>₦3,000</p>
      </div>
    `;
    }

    
  if(type === 'food2'){

    title.innerText = "WELCOME TO MIDATE'S TREAT STORE";
    desc.innerText = "Midate's Treats is a brand dedicated to expressing love through thoughtfully curated cakes, pastries and gifts. MT delivers experiences of bliss and beyond through its range of services.";

    products.innerHTML = `
       <div class="products">
        <img src="images/IMG-20260601-WA0121.jpg">
        <p>Cake</p>
        <p>₦30,000</p>
      </div>

       <div class="products">
        <img src="images/IMG-20260601-WA0125.jpg">
        <p>Cake</p>
        <p>₦13,000</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260601-WA0129.jpg">
        <p>Cake slice</p>
        <p>₦1,200</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260601-WA0122.jpg">
        <p>Fruity Cake</p>
        <p>₦4,000</p>
      </div>

       <div class="products">
        <img src="images/IMG-20260601-WA0123.jpg">
        <p>Big Foil cake</p>
        <p>₦3,500</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260601-WA0124.jpg">
        <p>Small and medium foil cakes</p>
        <p>₦1,400/₦1,700</p>
      </div>

     
      <div class="products">
        <img src="images/IMG-20260601-WA0148.jpg">
        <p>Small chop plate</p>
        <p>₦1,500 upward</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260601-WA0120.jpg">
        <p>Egg roll</p>
        <p>₦600</p>
      </div>

    `;
  }


  details.scrollIntoView({ behavior:'smooth' });

}

/* CLOSE */
function closeDetails(){
  document.getElementById('details').classList.remove('active');
}

function toggleMenu(){

  document
    .getElementById('navLinks')
    .classList.toggle('active');

}

const faqModal = document.getElementById("faqModal");
const openFaqBtn = document.getElementById("openFaqBtn");
const closeFaq = document.getElementById("closeFaq");

openFaqBtn.onclick = function () {
  faqModal.style.display = "flex";
};

closeFaq.onclick = function () {
  faqModal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target === faqModal) {
    faqModal.style.display = "none";
  }
};




function openProfile(sellerId){

    const seller = sellers[sellerId];

    document.getElementById("sellerImage").src =
        seller.image;

    document.getElementById("sellerName").textContent =
        seller.name;

    document.getElementById("sellerDepartment").textContent =
        " Department: " + seller.department;

    document.getElementById("sellerFaculty").textContent =
        " Faculty: " + seller.faculty;

    document.getElementById("sellerJoined").textContent =
        " Joined: " + seller.joined;

    document.getElementById("sellerListings").textContent =
        " Listings: " + seller.listings;
    document.getElementById("sellerStatus").textContent =
        " Status: " + seller.status;

    document.getElementById("sellerBadge").textContent =
        " Badge: " + seller.badge;

    document.getElementById("profileModal").style.display =
        "block";
}


const sellers = {
  seller1: {
    image: "images/IMG-20260604-WA0059.jpg",
    name: "ABDULLAHI OJOTU HALIMAH",
    department: "Chemistry",
    faculty: "Physical Science",
    joined: "Member since May, 2026",
    listings: 8,
    status: "👑 Founding Seller",
    badge: "🏆 Top Rated"
  },

  seller2: {
    image: "images/IMG-20260513-WA0246(1).jpg",
    name: "BELLO LATEEFAT AYOMIDE",
    department: "Geography and Environmental Management",
    faculty: "Social Sciences",
    joined: "Member since May, 2026",
    listings: 6,
    status: "👑 Founding Seller",
    badge: "🏆 Top Rated"
  },

  seller3: {
    image: "images/IMG-20260604-WA0054.jpg",
    name: "DORIS DAMOLA OLALEYE",
    department: "Geography and Environmental Management",
    faculty: "Social Sciences",
    joined: "Member since May, 2026",
    listings: 13,
    status: "👑 Founding Seller",
    badge: "✅ Verified Seller"
  },

  seller4: {
    image: "",
    name: "OYEDEJI GANIYAT WURAOLA",
    department: "Geography and Environmental Management",
    faculty: "Social Sciences",
    joined: "Member since May, 2026",
    listings: 12,
    status: "👑 Founding Seller",
    badge: "✅ Verified Seller"
  },

  seller5: {
    image: "images/IMG-20260520-WA0089.jpg",
    name: "AKINYEMI STEPHANIE",
    department: "Linguistics and Nigerian Languages",
    faculty: "Arts",
    joined: "Member since May, 2026",
    listings: 12,
    status: "👑 Founding Seller",
    badge: "✅ Verified Seller"
  },

  seller6: {
    image: "images/IMG-20260518-WA0211.jpg",
    name: "BANJO GOODNESS OYINDAMOLA",
    department: "Accounting",
    faculty: "Management Sciences",
    joined: "Member since May, 2026",
    listings: 14,
    status: "👑 Founding Seller",
    badge: "✅ Verified Seller"
  },

  seller7: {
    image: "images/IMG-20260601-WA0118.jpg",
    name: "ABODUNRIN ADEDOLAPO DEBORAH",
    department: "Geography and Environmental Management",
    faculty: "Social Sciences",
    joined: "Member since May, 2026",
    listings: 8,
    status: "👑 Founding Seller",
    badge: "✅ Verified Seller"
  }
};


function closeProfile(){

    document.getElementById("profileModal").style.display =
        "none";
}