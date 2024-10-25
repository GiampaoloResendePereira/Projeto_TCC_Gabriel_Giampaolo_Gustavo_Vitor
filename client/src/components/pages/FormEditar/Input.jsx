import styles from './Input.module.css'
//arquivo para criar propriedade dinâmica
    function Input({type, text,name,date,placeholder, handleOnChanger, value}){
return(
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <input type={type} 
        name={name} 
        id= {name} 
        placeholder={placeholder} 
        onChange={handleOnChanger}
        value={value}
        />
        
    </div>
)
    }
    export default Input