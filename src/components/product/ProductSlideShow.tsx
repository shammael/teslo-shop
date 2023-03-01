import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import styles from './styles/product-slideshow.module.css';

interface Props {
  images: string[];
}

const ProductSlideShow = ({ images }: Props) => (
  <Slide easing="ease" duration={7000} indicators>
    {images.map((image) => {
      const url = `/products/${image}`;

      return (
        <div className={styles['each-slide']} key={url}>
          <div
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
        </div>
      );
    })}
  </Slide>
);

export default ProductSlideShow;
