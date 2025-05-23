import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  if (isLoading) {
    return <p>Loading</p>;
  }

  if (!food?.extendedIngredients || food.extendedIngredients.length === 0) {
    return <p>No ingredients found</p>;
  }

  return (
    <div>
      {food.extendedIngredients.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}
