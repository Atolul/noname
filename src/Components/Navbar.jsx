import { Link } from "react-router-dom"

export function Navbar(){
    return(
        <>
        <main><Link to="/">No_Name</Link></main>
        <nav id="navbar" className="navbar">
            <div>
                <input id="01" type="checkbox" name="menu" />
                <label for="01">2D</label>
                <ul class="submenu">
                    <div>
                        <input id="01_1" type="checkbox" name="menu" />
                        <label for="01_1">Character Design</label>
                        <ul class="submenu01_1">
                            <Link to="/chard1">(1)</Link>
                        </ul>
                    </div>

                    <div>
                        <input id="01_2" type="checkbox" name="menu" />
                        <label for="01_2">Environment Design</label>
                        <ul class="submenu01_2">
                            
                        </ul>
                    </div>

                    <div>
                        <input id="01_3" type="checkbox" name="menu" />
                        <label for="01_3">Illustration</label>
                        <ul class="submenu01_3">
                           
                        </ul>
                    </div>

                    <div>
                        <input id="01_4" type="checkbox" name="menu" />
                        <label for="01_4">World Building</label>
                        <ul class="submenu01_4">
                       
                        </ul>
                    </div>


                </ul>
            </div>

            <div>
                <input id="02" type="checkbox" name="menu" />
                <label for="02">3D</label>
                <ul class="submenu">
                    <div>
                        <input id="02_1" type="checkbox" name="menu" />
                        <label for="02_1">Modeling</label>
                        <ul class="submenu02_1">
                            <Link to="/mod1">(1)</Link>
                        </ul>
                    </div>

                    <div>
                        <input id="02_2" type="checkbox" name="menu" />
                        <label for="02_2">Character Art</label>
                        <ul class="submenu02_2">
                            <Link to="/chara1">(1)</Link>
                        </ul>
                    </div>

                    <div>
                        <input id="02_3" type="checkbox" name="menu" />
                        <label for="02_3">Environment Art</label>
                        <ul class="submenu02_3">

                        </ul>
                    </div>

                    <div>
                        <input id="02_4" type="checkbox" name="menu" />
                        <label for="02_4">Animation</label>
                        <ul class="submenu02_4">
                   
                        </ul>
                    </div>
                </ul>
            </div>
            <div>
                <input id="03" type="checkbox" name="menu" />
                <label for="03">CODE</label>
                <ul class="submenu">
                   <div>
                        <input id="03_1" type="checkbox" name="menu" />
                        <label for="03_1">Game</label>
                        <ul class="submenu03_1">
                            
                        </ul>
                    </div>

                    <div>
                        <input id="03_2" type="checkbox" name="menu" />
                        <label for="03_2">Web</label>
                        <ul class="submenu03_2">
                            
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>
        </>
    )
}