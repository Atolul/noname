import Donut from '/src/assets/donut.png'
import Donut2 from '/src/assets/donut2.png'


export function Mod1() {
    return(
        <>
        <main>
        <div>
            <a target='blank' href={Donut}>
                <img className='CharA1' src={Donut} alt='donut 1'></img>
            </a>
            <a target='blank' href={Donut2}>
                <img className='CharA1' src={Donut2} alt='donut 2'></img>
            </a>
          
            </div>
  
        </main>
        </>
    )
}