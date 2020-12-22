import '#template/js/checkout'
import './custom-js/checkout'
import ecomCart from '@ecomplus/shopping-cart'
const conta = document.getElementById('account') || false
const pedido = document.getElementById('order') || false
const acompanhar = document.getElementById('containerAcompanhar')
ecomCart.on('change', ({ data }) => {
  if (conta.length || pedido.length) {
    acompanhar.style.display = 'block'
  } else {
    acompanhar.style.display = 'none'
  }
})
