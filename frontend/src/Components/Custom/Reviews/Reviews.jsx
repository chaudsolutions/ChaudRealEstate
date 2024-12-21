import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ReactStarsRating from "react-awesome-stars-rating";

const Reviews = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const reviewsData = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam ut enim scelerisque tincidunt.",
    },
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam ut enim scelerisque tincidunt.",
    },
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam ut enim scelerisque tincidunt.",
    },
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam ut enim scelerisque tincidunt.",
    },
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam ut enim scelerisque tincidunt.",
    },
  ];

  const reviewsList = reviewsData?.map((review, i) => (
    <li key={i}>
      <img src={review.image} alt="review" height={100} width={300} />
      <div>
        <ReactStarsRating
          value={review.rating}
          count={5}
          size={20}
          isEdit={false}
          primaryColor="yellow"
        />
        <p>{review.comment}</p>
        <h4>{review.name}</h4>
      </div>
    </li>
  ));

  return (
    <section className="section-four">
      <h2>What Our Customer Says</h2>

      <div className="embla" ref={emblaRef}>
        <ul className="embla__container">{reviewsList}</ul>
      </div>
    </section>
  );
};

export default Reviews;
