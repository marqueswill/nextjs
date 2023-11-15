import Card from "@/components/Card";
import { Category, Product } from "@/types/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
  produtos: Product;
}> = async (context) => {
  const { id } = context.query;
  const res = await fetch(
    `https://raw.githubusercontent.com/EdPPF/dados-listaNext/main/produtos/${id}.json`
  );
  const produtos = await res.json();
  return { props: { produtos } };
};

export default function CategoryPage({
  produtos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <div>
      <h1>Categoria: {router.query.id}</h1>
      {produtos.map((produto: Product) => (
        <Card produto={produto} />
      ))}
    </div>
  );
}
