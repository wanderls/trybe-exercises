const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const namePedido = order.name;
  const telefonePedido = order.phoneNumber;
  const endereco = order.address.street;
  const enderecoNum = order.address.number;
  const enderecoAP = order.address.apartment;

  console.log(`"Olá ${deliveryPerson}, entrega para: ${namePedido}, Telefone: ${telefonePedido}, R. ${endereco}, N: ${enderecoNum}, AP: ${enderecoAP}".`)
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const namePedido = order.name = 'Luiz Silva';
  const pedidoPizza = Object.keys(order.order.pizza);
  const pedidoBebida = order.order.drinks.coke.type;
  const valorTotal = order.payment.total = 50;

  console.log(`"Olá ${namePedido}, o total do seu pedido de ${pedidoPizza} e ${pedidoBebida} é R$ ${valorTotal}.`)
}

orderModifier(order);
