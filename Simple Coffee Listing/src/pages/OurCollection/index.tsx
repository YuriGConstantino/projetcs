import classNames from "classnames"
import styles from "./OurCollection.module.scss"
import { useEffect, useState } from "react"
import ICard from "@/interface/ICard"
import axios from "axios"
import CardCoffee from "@/components/CardCoffee"


export default function OurCollection() {
    const [coffeeCard, setCoffeeCard] = useState<ICard[]>([])
    const [selectedBtn, setSelectedBtn] = useState("all")
    const [available, setAvailable] = useState(false)


    useEffect(() => {
        // axios.get("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
        //     .then(response => {
        //         setCoffeeCard(response.data)

        //     })

        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .then(response => response.json())
            .then(data => {
                setCoffeeCard(data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    const handleAvailable = () => {
        setAvailable(true)
        setSelectedBtn("available")

    }

    const handleShowAll = () => {
        setAvailable(false)
        setSelectedBtn("all")
    }


    return (

        <section>
            <div className={styles.collection}>
                <div className={styles.collection__conteiner}>
                    <h1 className={styles.collection__title}>
                        Our Collection
                    </h1>
                    <p className={styles.collection__text}>
                        Introducing our Coffee Collection,
                        a selection of unique coffees from different
                        roast types and origins, expertly roasted in small batches
                        and shipped fresh weekly.
                    </p>

                    <button
                        className={
                            classNames({
                                [styles.collection__btnActiva]: selectedBtn === "all",
                                [styles['collection__btn']]: selectedBtn === "available"
                            })}
                        onClick={handleShowAll}>
                        All Products
                    </button>
                    <button className={
                        classNames({
                            [styles.collection__btn]: selectedBtn === "all",
                            [styles['collection__btnActiva']]: selectedBtn === "available"
                        })} onClick={handleAvailable}>
                        Available Now
                    </button>
                </div>

                <div className={styles.card__container}>
                    {coffeeCard.map((item) => (available ? item.available : true) && (
                        <CardCoffee cards={item} key={item.id} />
                    ))}
                </div>



            </div>
        </section >


    )
}

