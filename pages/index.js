import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { Itemcard } from "../components/itemcard";
import { Header } from "../components/header";

export default function Home() {
  let itemsInCart = [
    {
      itemId: 1,
      imageUrl: "/images/jwl0546.jpg",
      itemName: "Diamond Cage Ring With Encased Heart Stones",
      itemPrice: "$129.00",
      metal: "Sterling Silver",
      stone1: "Pink Tourmaline (Simulated) / January",
      stone2: "Cubic Zirconias / April",
      engravingFont: "classic",
      engraving1: "Jason",
      engraving2: "Ashley",
      size: "9.00",
    },
    {
      itemId: 2,
      imageUrl: "/images/jwl0018-t2-1024.jpeg",
      itemName: "Double Heart Gemstone Mother's Ring with Accents",
      itemPrice: "$129.00",
      metal: "Sterling Silver",
      stone1: "Pink Tourmaline (Simulated) / January",
      stone2: "Cubic Zirconias / April",
      engravingFont: "classic",
      engraving1: "Jason",
      engraving2: "Ashley",
      size: "9.00",
    },
  ];
  const DISCOUNT_20_OFF = 20;
  const GIFT_WRAP_499 = 4.99;

  const [items, setItems] = useState(itemsInCart);
  const [itemTotal, setItemTotal] = useState(0);
  const [giftWarp, setGiftWarp] = useState(GIFT_WRAP_499);
  const [discount, setDiscount] = useState(DISCOUNT_20_OFF);
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  const [checkoutDisable, setCheckoutDisable] = useState(false);

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += parseFloat(item.itemPrice.substring(1));
    });
    setItemTotal(total.toFixed(2));

    const subTotal = Math.max(total + giftWarp - discount, 0);
    setCheckoutTotal(subTotal.toFixed(2));
    if (items.length == 0) {
      setDiscount(0);
      setGiftWarp(0);
      setCheckoutDisable(true);
    } else {
      setDiscount(DISCOUNT_20_OFF);
      setGiftWarp(GIFT_WRAP_499);
    }
  }, [items]);

  const handleDelete = (item) => {
    const newCartItems = items.filter(
      (cartItem) => cartItem.itemId !== item.itemId
    );
    setItems(newCartItems);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Jewlr</title>
        <meta name="description" content="Jwelr ecommerce shop" />
        <link rel="icon" href="/images/jewlr_logo.png" />
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.cart}>
          {items.map((item) => (
            <Itemcard
              key={item.itemId}
              item={item}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div className={styles.checkout_desktop}>
          <div className={styles.item_checkout_section}>
            <div className={styles.pricedetail_border}>
              <div className={styles.item_pricedetail}>
                <p>
                  <span>ITEM TOTAL:</span>
                  <span>${itemTotal}</span>
                </p>
                <p>
                  <span>GIFT WRAP:</span>
                  <span>${giftWarp}</span>
                </p>
                <p>
                  <span>DISCOUNTS:</span>
                  <span style={{ color: "#2468b2", fontWeight: "bold" }}>
                    -${discount.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.totalprice_section}>
              <p className={styles.totalprice}>
                <span>TOTAL:</span>
                <span>
                  <strong>${checkoutTotal}</strong>
                </span>
              </p>
              <p className={styles.promocode}>PROMO CODE?</p>
            </div>
          </div>
          <div>
            <div className={styles.checkoutbutton_section}>
              <button
                disabled={checkoutDisable}
                style={checkoutDisable ? { backgroundColor: "gray" } : {}}
              >
                <img src="/images/iconmonstr-lock-1-16.png" alt="lock" />
                &nbsp;SECURE CHECKOUT
              </button>
              <p>FREE SHIPPING | 99 DAY RETURNS | 1 YR WARRANTY</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
