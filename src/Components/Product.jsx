

function Product({name, description, price}) {
  return (
    <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <small>${price}</small>
    </div>
  )
}

export default Product