import './App.css'
import Button from './Button'
import ButtonProps from './ButtonProps'
import Unipar from './Unipar'

function App() {

  return (
    <>
      <Unipar/>
      <p>Ele tem 190 anos e ainda esta na flor da idade</p>
    
      <Button>
        Cleiton
      </Button>
      <Button>Taffe</Button>
      <Button>Rodrigo</Button>

      <ButtonProps idButton="1" valorButton="Teste 1" 
        funcaoClick={() => alert("Teste 1")}
        classeBotao="classeSucesso"
      ></ButtonProps>
      
      <ButtonProps idButton="2" valorButton="Teste 2"
       funcaoClick={() =>  console.log("Cliquei no 2")}
        classeBotao="classeErro"
      ></ButtonProps>

      <ButtonProps idButton="3" valorButton="Teste 3"
        funcaoClick={() => prompt() }
        classeBotao="classeAlerta"
      ></ButtonProps>
   
    
    </>
  )
}

export default App
