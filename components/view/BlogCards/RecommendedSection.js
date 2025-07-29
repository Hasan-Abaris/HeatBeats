import CarouselWrapper from './CarouselWrapper';
import VideoCard from './VideoCard';
import BlogCard from './BlogCard';

export default function RecommendedSection({
  recommendedVideos,
  recommendedBlogs,
}) {
  return (
    <section className="mt-12 space-y-10">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recommended videos for you
        </h2>
        <CarouselWrapper>
          {recommendedVideos.map((video, idx) => (
            <VideoCard key={idx} video={video} />
          ))}
        </CarouselWrapper>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recommended blogs for you
        </h2>
        <CarouselWrapper>
          {recommendedBlogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </CarouselWrapper>
      </div>
    </section>
  );
}
