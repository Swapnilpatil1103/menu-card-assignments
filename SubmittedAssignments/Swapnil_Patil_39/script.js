class MenuComponent extends HTMLElement {
    // Default configuration and data
    defaultConfig = {
      wrapperClass: "menu-wrapper",
      myBox1 : "box-1",
      myBox2 : "box-2",
      myBox3: "box-3",
      titleClass : "header-name",
      menuClass : "menu-name",
      discriptionClass: 'restaurant-description',
      cataName: 'cataName',
      categoryClass: 'category-name',
      subcategoryClass: 'subcategory-name',
      specialitemClass: 'special-item',
      cocktailitemsClass: 'cocktail-item'
    };
    defaultData = {
      images: [
        { src: 'IMG/glass1.png', class: 'img1', alt: 'img1' },
        { src: 'IMG/glass2.png', class: 'img2', alt: 'img2' },
        { src: 'IMG/leafcut1.png', class: 'img3', alt: 'img3' },
        { src: 'IMG/leafcut2.png', class: 'img4', alt: 'img4' },
        { src: 'IMG/sparkle.png', class: 'img5', alt: 'img5' },
        { src: 'IMG/sparkle.png', class: 'img6', alt: 'img6' },
      ],
      header : "PIZZA",
      menuTitle : "Menu",
      category: "CLASSIC PIZZA",
      subcategory: "ORIGINAL PIZZA",
      order :"ORDER NOW",
      number:"+91 9856478655",
      email:"foody25@gmail.com",
      specialitems: [
        { "name": "Margherita Pizza", "price": "$8.99" },
        { "name": "Pepperoni Pizza", "price": "$13.99" },
        { "name": "Vegetarian Pizza", "price": "$9.50" },
        { "name": "BBQ Chicken Pizza ", "price": "$16.00" }
        
      ],
      cocktailitems: [
        { "name": "Hawaiian Pizza", "price": "$3.99" },
        { "name": "Seafood Pizza", "price": "$3.99" },
        { "name": "Meat Lovers Pizza", "price": "$4.50" },
        { "name": "Four Cheese Pizza", "price": "$6.00" }
        
      ]
    };
  
    constructor() {
      super();
      this.config = this.defaultConfig;
      this.data = this.defaultData;
  
      // Attach a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Load external CSS file
      const linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('href', 'style.css');
      shadow.appendChild(linkElement);
  
      // wrapper div created  for the menu card
      this.wrapper = document.createElement('div');
      shadow.appendChild(this.wrapper); 
    }
  
    static get observedAttributes() {
      return ['config', 'data'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        try {
          if (name === 'config') {
            this.config = { ...this.defaultConfig, ...JSON.parse(newValue) };
          }
          if (name === 'data') {
            this.data = { ...this.defaultData, ...JSON.parse(newValue) };
          }
        } catch (e) {
          console.error(`Invalid JSON for ${name}:`, e);
        }
        this.render();
      }
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.wrapper.innerHTML = ''; // Clear previous content
      const config = this.config || this.defaultConfig;
      const data = this.data || this.defaultData;
  
      // Apply wrapper class
    //   this.wrapper.classList.add(config.wrapperClass);  // class define in config
  
      // Background
      let background = document.createElement('div');
      background.classList.add(config.wrapperClass);
      this.wrapper.appendChild(background);
  
      let box1 = document.createElement('div');
      box1.classList.add(config.myBox1);
      background.appendChild(box1);

      let box2 = document.createElement('div');
      box2.classList.add(config.myBox2);
      background.appendChild(box2);

      let box3 = document.createElement('div');
      box3.classList.add(config.myBox3);
      background.appendChild(box3);


      const imageContainer = document.createElement('div');
      data.images.forEach((img) => {
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.alt;
        imgElement.classList.add(img.class);
        imageContainer.appendChild(imgElement);
    });
    background.appendChild(imageContainer);
      
      const title = document.createElement('h1');
      title.textContent = (data.header);
      title.classList.add(config.titleClass);
      background.appendChild(title);
      
      const menu = document.createElement('h3');
      menu.textContent = (data.menuTitle);
      menu.classList.add(config.menuClass);
      background.appendChild(menu);
  
      // Categories
    const cataName = document.createElement('div');
    cataName.classList.add(config.cataName);
    

    const category = document.createElement('div');
    category.classList.add(config.categoryClass);
    category.textContent = data.category;
    cataName.appendChild(category);

    

    background.appendChild(cataName);
    

    // Special items
    const specialContainer = document.createElement('div');
    specialContainer.classList.add(config.specialitemClass);
    data.specialitems.forEach((item) => {
        const itemWrapper = document.createElement('div');
        itemWrapper.classList.add('special-item-wrapper');

        const itemName = document.createElement('div');
        itemName.classList.add('special-item-name');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('special-item-price');
        itemPrice.textContent = item.price;

        itemWrapper.appendChild(itemName);
        itemWrapper.appendChild(itemPrice);
        specialContainer.appendChild(itemWrapper);
    });
    cataName.appendChild(specialContainer);

    // Cocktail items

    const subcategory = document.createElement('div');
    subcategory.classList.add(config.subcategoryClass);
    subcategory.textContent = data.subcategory;
    background.appendChild(subcategory);

    const cocktailContainer = document.createElement('div');
    cocktailContainer.classList.add(config.cocktailitemsClass);
    data.cocktailitems.forEach((item) => {
        const itemWrapper = document.createElement('div');
        itemWrapper.classList.add('cocktail-item-wrapper');

        const itemName = document.createElement('div');
        itemName.classList.add('cocktail-item-name');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('cocktail-item-price');
        itemPrice.textContent = item.price;

        itemWrapper.appendChild(itemName);
        itemWrapper.appendChild(itemPrice);
        cocktailContainer.appendChild(itemWrapper);
    });
    subcategory.appendChild(cocktailContainer);

    const footer = document.createElement('div');
    footer.classList.add(config.footerClass);
    background.appendChild(footer);

    const order = document.createElement('h1');
    order.classList.add(config.orderClass);
    order.textContent = (data.order);
    footer.appendChild(order);

    const number = document.createElement('p');
    number.classList.add(config.numberClass);
    number.textContent = (data.number);
    footer.appendChild(number);

    const email = document.createElement('p');
    email.classList.add(config.emailClass);
    email.textContent = (data.email);
    footer.appendChild(email);
      
  }
}
  customElements.define('menu-component', MenuComponent);