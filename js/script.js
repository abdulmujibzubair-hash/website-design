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
        <img src="images/IMG-20260518-WA0003.jpg">
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
        <p></p>
        <p>₦</p>
      </div>

      <div class="products">
        <img src="images/IMG-20260512-WA0078.jpg">
        <p></p>
        <p>₦</p>
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
    `;

  }


  if(type === 'fashion2'){

    title.innerText = "WELCOME TO G FASHI'S STORE";
    desc.innerText = "I offer different designs of jewelries to match your style with room decor flowers, card and vase, making you and your home looking aesthetically pleasing";

    products.innerHTML = `
      <div class="products">
        <img src="images/IMG-20260514-WA0135.jpg">
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

