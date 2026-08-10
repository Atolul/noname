import CharDimg1 from '/src/assets/CharD1_1.png'
import CharDimg2 from '/src/assets/CharD1_2.png'
import CharDimg3 from '/src/assets/CharD1_3.png'

export function CharD1() {
    return(
        <>
        <main>
        <div>
            <a target='blank' href={CharDimg2}>
                <img className='CharD1' src={CharDimg2} alt='image1'></img>
            </a>
            <a target='blank' href={CharDimg3}>
                <img className='CharD1' src={CharDimg3} alt='image2'></img>
            </a>
            <a target='blank' href={CharDimg1}>
                 <img className='CharD1' src={CharDimg1} alt='image3'></img>
            </a>
               
            </div>
  
        </main>
        </>
    )
}