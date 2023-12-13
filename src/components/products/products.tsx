import { NavLink } from 'react-router-dom'

const Products = () => <section className='content'>
    <h2 className='subtitle'>Products Index Page</h2>
    <p>More products will be added soon, but for now here are some links to the first few:</p>
    <ul>
        <li><NavLink to ="1"> 1 </NavLink></li>
        <li><NavLink to ="2"> 2 </NavLink></li>
        <li><NavLink to ="3"> 3 </NavLink></li>
        <li><NavLink to ="4"> 4 </NavLink></li>
    </ul>
</section>;

export default Products;