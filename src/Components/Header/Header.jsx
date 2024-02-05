import headerImg from "../../assets/react-core-concepts.png"
import "./Header.css"

const randomWords = ["Fundamantals", "Curcial", "Core"]

function genRandom(max){
  return Math.floor(Math.random() * (max + 1))
}

function Header (){
  const description = randomWords[genRandom(2)]
  return(
    <>
      <header>
        <img src={headerImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>{description} React concepts you will need for almost any app you are going to build!</p>
      </header>
    </>
  )
}

export default Header