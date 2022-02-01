import { ProductInterface } from "../../pages";

const Products = (props:{products:[ProductInterface]}) => {
    return (
        <div>
            <select>

            </select>
            <h1>
                TECH PRODUCTS	
            </h1>
            <ul>
                {props.products.map(product => (
                    <li key={product._id}>
                        <img src={product.img.url} alt={product.name}/>
                        <h2>{product.name}</h2>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Products;