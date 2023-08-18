import { TDataFinalResult } from "@/services/vendorList/TVendorList";
import styles from "./cardItem.module.scss";
import Image from "next/image";
import {RateIcon} from "@/assets/icon";

const CardItem = ({ data }: TDataFinalResult) => {
    const joinedString = data.data.cuisinesArray.map(item => item.title).join(', ');

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
      </div>
      <div className={styles["cardItem__parentInfo"]}>
        <div>{data.data.title}</div>
        <div className={styles["cardItem__parentInfo__rate"]}>
          <div>({data.data.voteCount})</div>
            <div className={styles['cardItem__parentInfo__rate__greenBox']}>
                <div className='color-success'>{data.data.rate}</div>
                <RateIcon  style={{transform: 'scale(.7)'}}/>
            </div>
        </div>

      </div>
        <div>{ joinedString.length >40 ? joinedString.substring(0, 40) + '...' : joinedString}</div>
        <div className={styles['cardItem__card__parentInfo']}>
            <div className={styles['cardItem__parentInfo__deliver']}>
                <div>{data.data.deliver ? "ارسال اکسپرس": "پیک فروشنده"}</div>
                <div className={styles['cardItem__card__price']}>{data.data.deliveryFee.toLocaleString()} تومان</div>
            </div>
        </div>
    </div>
  );
};

export default CardItem;
