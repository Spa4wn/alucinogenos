
var cart = [];


function addToCart(productName, price) {
    
    const product = { name: productName, price: price };

    
    cart.push(product);

    
    showMessage(`${productName} foi adicionado ao carrinho! Preço: R$ ${price.toFixed(2)}`);
}


function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';

    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}


document.querySelectorAll('.addToCartButton').forEach(button => {
    button.addEventListener('click', function() {
        const productName = e.target.previousElementSibling.previousElementSibling.textContent;
    const priceText = e.target.previousElementSibling.textContent; 
    const price = parseFloat(priceText.replace('Preço: R$', '').replace(',', '.').trim());

    if (isNaN(price)) {
        console.error("Preço inválido:", priceText);
        alert("Erro ao adicionar produto. Preço inválido.");
        return;
    }
        addToCart(productName, price);
    });
});

var cart = [];


function addToCart(productName, productPrice) {
    
    const product = {
        name: productName,
        price: parseFloat(productPrice)
    };

    
    cart.push(product);

    
    alert(`Você adicionou ${productName} ao carrinho. Preço: R$ ${productPrice}`);

    
    updateCart();
}


function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');
    cartItemsContainer.innerHTML = ''; 

    var total = 0;

    
    cart.forEach((item, index) => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);


        total += item.price;
    });

    
    totalAmountElement.textContent = total.toFixed(2);
}


function checkout() {
 if(cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    
    const checkoutMessage = document.getElementById('checkoutMessage');
    checkoutMessage.textContent = 'Compra finalizada com sucesso! Obrigado por comprar na Farmácia Alucinógenos.';

    
    cart = [];
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addToCartButton');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.previousElementSibling.previousElementSibling.textContent;
            const productPrice = e.target.previousElementSibling.textContent.replace('Preço: R$', '').trim();

            addToCart(productName, productPrice);
        });
    });
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    const correctUsername = "usuario123";
    const correctPassword = "senha123";

    
    if (username === correctUsername && password === correctPassword) {
        
        document.getElementById('loginMessage').textContent = "Login bem-sucedido! Redirecionando...";
        document.getElementById('loginMessage').style.color = "green";

        
        setTimeout(() => {
            window.location.href = "index2.html";
        }, 2000); 

    } else {
        
        document.getElementById('loginMessage').textContent = "Usuário ou senha incorretos. Tente novamente.";
        document.getElementById('loginMessage').style.color = "red";
    }
});

