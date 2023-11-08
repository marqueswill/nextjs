import styles from "@/styles/Card.module.css";

type Product = {
  image: string;
  id: number;
  name: string;
  ingredients: string;
  price: number;
  discount: number;
};

// 
export default function Card({ image, id, name, ingredients, price, discount }: Product) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.img} />
      <div className={styles.info}>
        <h1 className={styles.nome}>{name}</h1>
        <p className={styles.descricao}>{ingredients}</p>
      </div>
      <h2 className={styles.preco}>R$ {price}</h2>
    </div>
  );
}