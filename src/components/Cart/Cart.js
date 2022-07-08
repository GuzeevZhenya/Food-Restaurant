import React from 'react'
import { Modal } from '../UI/Modal'
import styles from './Cart.module.css'

export const Cart = (props) => {
  const cartItems = [
    { id: 'm1', name: 'sushi', amount: 2, price: 10 },
  ].map((item) => <li>{item.name}</li>)
  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={styles['cart-items']}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Закрыть
        </button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  )
}
