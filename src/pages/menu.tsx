import Card from "@/components/Card";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

type Product = {
  id: number;
  name: string;
  ingredients: string;
  price: number;
  discount: number;
  image: string;
};

type Category = {
  id: number;
  name: string;
};

type Menu = {
  id: number;
  data: Map<Category, Product[]>;
};

// export const getServerSideProps: GetServerSideProps<{
//   restaurantMenu: Menu;
// }> = async (context) => {
//   const { restaurant_id } = context.query;
//   const res = await fetch(``);
//   const restaurantMenu = await res.json();
//   return { props: { restaurantMenu } };
// };

export function showMenu(restaurantMenu: Menu) {
  let categories = Array.from(restaurantMenu.data.keys());
  let menuDiv = [];
  let categoryDiv = [];

  for (let i = 0; i < categories.length; i++) {
    // categoryElements.push(<h2 key={i}>{categories[i].name}</h2>);
    let products = restaurantMenu.data.get(categories[i]);
    if (products) {
      for (let p of products) {
        categoryDiv.push(
          <Card
            image={p.image}
            id={p.id}
            name={p.name}
            ingredients={p.ingredients}
            price={p.price}
            discount={p.discount}
          />
        );
      }
    }
    menuDiv.push(
      <div>
        <h2>categories[i]</h2>
        categoryDiv
      </div>
    );
    categoryDiv = [];
  }

  return menuDiv;
}

// export default function MenuPage({
//   restaurantMenu,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   const router = useRouter();

//   return (
//     <div className="menu">
//       <h1>Cardápio</h1>
//       showMenu()
//     </div>
//   );
// }

export default function MenuPage() {
  let burger: Product = {
    id: 1,
    name: "Burger",
    ingredients: "Bun, Patty, Lettuce, Tomato",
    price: 5.99,
    discount: 0.1,
    image: "images/burger.jpg",
  };

  let fries: Product = {
    id: 2,
    name: "Fries",
    ingredients: "Potatoes, Salt",
    price: 2.99,
    discount: 0,
    image: "images/fries.jpg",
  };

  // Create a category
  let fastFood: Category = {
    id: 1,
    name: "Fast Food",
  };

  // Create a menu
  let menu: Menu = {
    id: 1,
    data: new Map<Category, Product[]>(),
  };

  // Add the products to the category in the menu
  menu.data.set(fastFood, [burger, fries]);

  return (
    <div className="menu">
      <h1>Cardápio</h1>
      {showMenu(menu)}
    </div>
  );
}
