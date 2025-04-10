import Product from "./Product"
import Counter from "./Counter"
function Home() {

  return (
    <>
        
        <Counter/>
        <Product
         name="Laptop"
         description="Macbook Pro M1"
         price={99.99}
        />
        <Product
         name="Mobile"
         description="iPhone 13"
         price={799.99}
        />

    </>
  )
}

export default Home