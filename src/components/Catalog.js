import CatalogProduct from "./CatalogProduct";
import './Catalog.css';

function Catalog() {
    const domyosDescription = ["Pantalón jogger fitness recto algodón Mujer Domyos negro"];
    const adiddasDescription = ["Zapatillas tenis con tira autoadherente Niños Ts100 blanco"];
    const forclazDescription = ["Mochila montaña y trekking 40 L Forclaz Travel 500 Organizer. Equipaje de Mano"];
    const rockriderDescription = ["Bicicleta de montaña 27,5' aluminio Rockrider ST 100 gris"];
    
    return (
        <section>
            <div>
                <h2>Catálogo</h2>
                <div className="CatalogProducts">
                    <CatalogProduct imageProduct="https://contents.mediadecathlon.com/p2510036/k$eaea8fe2b697bf8551f1cbf556490cd5/sq/8759127.jpg?format=auto&f=180x180" price="13.99" titleProducts="Domyos" description="Pantalón jogger fitness recto algodón Mujer Domyos negro" />
                    <CatalogProduct imageProduct="https://contents.mediadecathlon.com/p2412936/k$db9a92cef469b2144e323417a6409eb3/sq/8814855.jpg?format=auto&f=180x180" price="16.99" titleProducts="Addidas" description="Zapatillas tenis con tira autoadherente Niños Ts100 blanco" />
                    <CatalogProduct imageProduct="https://contents.mediadecathlon.com/p2437312/k$9177212698b00a452013fb41014e9716/sq/8735937.jpg?format=auto&f=180x180" price="69.90" titleProducts="Forclaz" description="Mochila montaña y trekking 40 L Forclaz Travel 500 Organizer. Equipaje de Mano"  />
                    <CatalogProduct imageProduct="https://contents.mediadecathlon.com/p2168130/k$938dff071a70f28441ba731b644ac002/sq/8400335.jpg?format=auto&f=180x180" price="259.90" titleProducts="Rockrider" description="Bicicleta de montaña 27,5' aluminio Rockrider ST 100 gris"/>
                </div>
            </div>
        </section>
    )
}


export default Catalog;