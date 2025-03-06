import { GetTrendingMovies } from "@/actions/GetMovies";
import { CarouselItem } from "../ui/carousel";

const ItemsCarousel = async () => {

  return (
    <div>
      <CarouselItem className="relative max-h-[50vh] md:px-30 md:max-h-[700px] ">
        <img
          src={`https://image.tmdb.org/t/p/w500/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg`}
          alt={"one"}
          className="w-full h-full object-fill "
        />
      </CarouselItem>
      
    </div>
  );
};

export default ItemsCarousel;
