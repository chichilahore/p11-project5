import mainImage from '../assets/mainImage.jpg';
import Catalog from './Catalog';

function Main () {
    return (
<div>
    <img src={mainImage} className="mainImage" alt="Elemento central" />
    <Catalog />
</div>
)}



export default Main;