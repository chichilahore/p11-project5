import Logo from "../components/Logo.js";
import Link from "../components/Link.js";     

function Header () {
    return (
        <div>
            <header>
                <Logo />
                <nav>
                    <Link name={"Deportes"}/>
                    <Link name={"Mujer"}/>
                    <Link name={"Hombre"}/>
                    <Link name={"Infantil"}/>
                    <Link name={"Equipamiento"}/>
                    <Link name={"Nutrición y salud"}/>
                    <Link name={"Descuentos"}/>
                </nav>
            </header>
        </div>
    )
}

export default Header;