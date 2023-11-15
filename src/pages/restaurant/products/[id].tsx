import Card from "@/components/Card";
import ShowCategory from "@/components/ShowCategory";
import { Category, Product } from "@/types/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
  produtos: [];
}> = async (context) => {
  const { id } = context.query;
  const res = await fetch(
    `https://raw.githubusercontent.com/EdPPF/dados-listaNext/blob/main/produtos/${id}.json`
  );
  const produtos = await res.json();
  return { props: { produtos } };
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

export default function CategoryPage({
  produtos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <>
      <div className="menu">
        
        <h1>Categoria: {router.query.id}</h1>
        {produtos.map((produto: Product) => (
          <Card produto={produto} />
        ))}
      </div>
    </>
  );
}
