import StarRating from "../../StarRating";

interface BooksDetailsProps {
  thumbnail: string;
  title: string;
  categories: string;
  description: string;
  log: (value: string) => void;
}

const View = ({
  thumbnail,
  title,
  categories,
  description,
  log,
}: BooksDetailsProps) => {
  return (
    <article>
      <img src={thumbnail} alt="Book Thumbnail" className="article-image" />
      <h3 className="title">{title}</h3>
      <p className="category">{categories}</p>
      <StarRating onChange={log} />
      <p>{description}</p>
    </article>
  );
};

export default View;
