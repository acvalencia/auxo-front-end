import styles from '../styles/styles.module.css'

export const ButtonAuxo = ({onClick, children}) => {

  return (
    <div className={ styles.buttonsContainer } >
      <button
        className={ styles.buttonMinus }
        onClick={ onClick }
      >
        {children}
      </button>
    </div>
  )
}
