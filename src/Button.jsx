function Button({children}){
    /*
        children -> pega o valor filho do elemento
        o que esta entre <Button> "esse valor" </Button>

        Sempre com a mesma nomenclatura
    */ 
    return (
        <button>{children}</button>
    )
}

export default Button;