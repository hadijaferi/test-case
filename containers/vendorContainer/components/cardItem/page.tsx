import { TDataFinalResult } from "@/services/vendorList/TVendorList";
import styles from "./cardItem.module.scss";
import Image from "next/image";
import { RateIcon } from "@/assets/icon";

const CardItem = ({ data }: TDataFinalResult) => {
  const joinedString = data.data.cuisinesArray
    .map((item) => item.title)
    .join(", ");

  return (
    <div className={styles["cardItem__card"]}>
      <div className={styles["cardItem__imageContainer"]}>
        <Image
          className={styles["cardItem__imageContainer__image"]}
          src={data.data.backgroundImage}
          alt="Image"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles["cardItem__imageContainer__logo"]}>
          <Image
            className={styles["cardItem__imageContainer__logo__image"]}
            src={data.data.defLogo}
            alt="Image"
            width={75}
            height={75}
          />
        </div>

        {data.data.best_coupon.trim() !== "" && (
          <div className={styles["cardItem__imageContainer__coupon"]}>{data.data.best_coupon}</div>
        )}
      </div>
      <div className={styles["cardItem__wrapper"]}>
        <div className={styles["cardItem__parentInfo"]}>
          <div className={styles['cardItem__parentInfo__title']}>{data.data.title}</div>
          <div className={styles["cardItem__parentInfo__rate"]}>
            <div>({data.data.voteCount})</div>
            <div className={styles["cardItem__parentInfo__rate__greenBox"]}>
              <div className="color-success">{data.data.rate}</div>
              <RateIcon style={{ transform: "scale(.7)" }} />
            </div>
          </div>
        </div>
        <div className={styles['cardItem__parentInfo__cuisines']}>
          {joinedString.length > 50
            ? joinedString.substring(0, 50) + "..."
            : joinedString}
        </div>
        <div className={styles["cardItem__card__parentInfo"]}>
          <div className={styles["cardItem__parentInfo__deliver"]}>
            <div className={styles['cardItem__parentInfo__deliver__deliverPost']} >{data.data.deliver ? "ارسال اکسپرس" : "پیک فروشنده"}</div>
            <div className={styles["cardItem__card__price"]}>
              {data.data.deliveryFee.toLocaleString()} تومان
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
