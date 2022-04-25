import Image from "next/image";
import styles from "./itemcard.module.css";

export const Itemcard = ({ item, handleDelete }) => (
  <div className={styles.item_card}>
    <div className={styles.delete} onClick={() => handleDelete(item)} />
    <div className={styles.item_title}>
      <p className={styles.personalize}>YOUR PERSONALIZED</p>
      <p className={styles.item_name}>{item.itemName}</p>
    </div>
    <div>
      <div className={styles.item_image}>
        <Image
          src={item.imageUrl}
          alt="ring_image"
          width="260px"
          height="250px"
        />
      </div>
      <div className={styles.item_price_box}>
        <p className={styles.item_price}>{item.itemPrice}</p>
        <div className={styles.item_retailprice}>
          <span>Retail: $189.00 |</span>{" "}
          <span className={styles.item_save}>SAVE $60</span>
        </div>
      </div>
      <div className={styles.item_description}>
        <div className={styles.item_description_key}>
          <ul>
            <li>
              <div className={styles.decription_label}>Material:</div>
              <div>
                {item.metal} <strong>({item.itemPrice})</strong>
              </div>
            </li>
            <li>
              <div className={styles.decription_label}>Stone 1:</div>
              <div>{item.stone1}</div>
            </li>
            <li>
              <div className={styles.decription_label}>Stone 2:</div>
              <div>{item.stone2}</div>
            </li>
            <li>
              <div className={styles.decription_label}>Engraving Font:</div>
              <div>{item.engravingFont}</div>
            </li>
            <li>
              <div className={styles.decription_label}>Engraving 1:</div>
              <div>{item.engraving1}</div>
            </li>

            <li>
              <div className={styles.decription_label}>Engraving 2:</div>
              <div>{item.engraving2}</div>
            </li>
            <li>
              <div className={styles.decription_label}>Ring Size:</div>
              <div>{item.size}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
