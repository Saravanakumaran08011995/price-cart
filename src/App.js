
import './App.css';


function App() {
  return (
    <div className='app'>
      <Pricing_cart user="Single User" storage="5 GB storage" subscription="FREE" price="$0"/>
      <Pricing_cart user="5 Users" storage="50 GB storage" subscription="PLUS" price="$9"/>
      <Pricing_cart user="Unlimited Users" storage="150 GB storage" subscription="PRO" price="$49"/>
    </div>
  );
}

export default App;




const Pricing_cart = (props) => {
  return (
    <section className='container'>
    <div className='card'>
      <h3 className='heading'>{props.subscription}</h3>
      <h1 className='price'>{props.price}</h1>
      <hr></hr>
      <div className='desc'>
        <ul>
          <li>{props.user}</li>
          <li>{props.storage}</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Project</li>
          <li>Dedicated Phone Support</li>
          <li>Free Subdomain</li>
          <li>Monthly Status report</li>
        </ul>
      </div>
      <button type="button" className='button'>Add to cart</button>
    </div>
    </section>
  )
}


