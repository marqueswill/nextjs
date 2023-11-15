import ShowCategory from "@/components/ShowCategory";
import { Category, Product } from "@/types/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
  categorias: Category;
}> = async (context) => {
  const { id } = context.query;
  const res = await fetch(
    `https://raw.githubusercontent.com/EdPPF/dados-listaNext/main/categorias.json`
  );
  const categorias = await res.json();
  return { props: { categorias } };
};

// async function getCategoryProducts(categoria: Category):Promise<Product[]> {
//   const res = await fetch(
//     `https://raw.githubusercontent.com/EdPPF/dados-listaNext/main/produtos/${categoria.id}.json`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const produtos:Product[] = await res.json();
//   return produtos
// }

export default function MenuPage({
  categorias,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <>
      <div className="menu">
        <h1>Cardápio</h1>
      </div>
      <div>
        <h1>Restaurante: {router.query.id}</h1>
        {categorias.map((categoria: Category) => (
          <p>
            <Link href={`/restaurant/products/${categoria.id}`}>
              Categoria: {categoria.id}
            </Link>
          </p>
        ))}
      </div>
    </>
  );
}
