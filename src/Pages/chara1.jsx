import CharAimg1 from '/src/assets/CharA1_1.png'
import CharAimg2 from '/src/assets/CharA1_2.png'


export function CharA1() {
    return(
        <>
        <main>
        <div>
            <a target='blank' href={CharAimg1}>
                <img className='CharA1' src={CharAimg1} alt='image1'></img>
            </a>
            <a target='blank' href={CharAimg2}>
                <img className='CharA1' src={CharAimg2} alt='image2'></img>
            </a>
          
            </div>
  
        </main>
        </>
    )
}