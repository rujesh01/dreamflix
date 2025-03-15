// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Calendar, Star, ThumbsUp } from "lucide-react";

// type Movie = {
//   backdrop_path: string;
//   id: number;
//   title: string;
//   original_title: string;
//   overview: string;
//   poster_path: string;
//   media_type: "movie";
//   adult: boolean;
//   original_language: string;
//   genre_ids: number[]; 
//   // Assuming genre_ids is an array of numbers
//   popularity: number;
//   release_date: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// };

// export const MovieCardWrapper = ({ movie }: { movie: Movie }) => {
//   const formattedDate = new Date(movie.release_date).toLocaleDateString(
//     "en-US",
//     {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     }
//   );

//   return (
//     <div className="max-w-2xs">
//       <Card className="relative overflow-hidden group">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//             className="w-full h-full object-cover"
//           />
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
//         </div>

//         {/* Content */}
//         <div className="relative aspect-[2/3] p-6 flex flex-col justify-between">
//           {/* Top Section */}
//           <div className="flex justify-between items-start">
//             <Badge
//               variant="secondary"
//               className="flex items-center gap-1 bg-black/50 text-white backdrop-blur-sm"
//             >
//               <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
//               <span className="font-medium">
//                 {movie.vote_average.toFixed(1)}
//               </span>
//             </Badge>
//           </div>

//           {/* Bottom Section */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold text-white">{movie.title}</h2>

//             <div className="flex items-center gap-4 text-sm text-gray-200">
//               <div className="flex items-center gap-1">
//                 <Calendar className="h-4 w-4" />
//                 <span>{formattedDate}</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <ThumbsUp className="h-4 w-4" />
//                 <span>{movie.vote_count.toLocaleString()}</span>
//               </div>
//             </div>

//             <p className="text-sm text-gray-300 line-clamp-4">
//               {movie.overview}
//             </p>

//             <div className="flex gap-3">
//               <Button className="flex-1 bg-primary hover:bg-primary/90">
//                 Watch Now
//               </Button>
//               <Button
//                 variant="secondary"
//                 className="flex-1 bg-white/10 hover:bg-white/20 text-white"
//               >
//                 Details
//               </Button>
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };
