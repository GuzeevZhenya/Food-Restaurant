import React from 'react'
import styles from './MealItemForm.module.css'
import { Input } from '../../UI/Input'

export const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Кол-во"
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Добавить</button>
    </form>
  )
}
