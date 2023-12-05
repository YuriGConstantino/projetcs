import Image from "next/image"
import styles from "./CardCoffee.module.scss"
import starFill from "@/assets/Star_fill.svg"
import starEmpty from "@/assets/Star.svg"
import ICard from "@/interface/ICard"
import { useState } from "react"

interface CardsProps {
    cards: ICard
}

export default function CardCoffee({ cards }: CardsProps){

    const [votes] = useState(() => cards.votes > 0)
    const [popular] = useState(() => cards.popular === true)
    const [available] = useState(() => cards.available === true)


    return (

        <div className={styles.card}>

            <div className={styles.card__containerImg}>
                {popular ?
                    <span className={styles.card__popular}>Popular</span> :
                    null
                }
                <img className={styles.card__img} src={cards.image} alt="" width={260} height={160} />

            </div>

            <div className={styles.card__text}>
                <span className={styles.card__name}>{cards.name}</span>
                <span className={styles.card__price}>{cards.price}</span>
            </div>

            <div className={styles.card__rateContainer}>

                <div className={styles.card__rate}>
                    <Image
                        className={styles.card__star}
                        src={votes ? starFill : starEmpty}
                        alt="star"
                    />

                    <span className={styles.card__numberRate}>{cards.rating}</span>
                    {votes ?
                        <span className={styles.card__votes}>({cards.votes} votes)</span> :
                        <span className={styles.card__votes}>No ratings</span>
                    }

                </div>

                <div>
                    {available ?
                        null :
                        <span className={styles.card__available}>Sold out</span>
                    }
                </div>

            </div>

        </div>


    )
}