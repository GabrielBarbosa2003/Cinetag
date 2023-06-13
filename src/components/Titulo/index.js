import React from 'react'
import styles from './Titulo.module.css'
//children pode ser um html e nao somente um texto

export default function Titulo({children}) {
  return (
    <div className={styles.texto}>
      {children}
    </div>
  )
}
