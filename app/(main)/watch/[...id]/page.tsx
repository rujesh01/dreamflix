import clsx from "clsx";

type props = {
  params: Promise<{ id: string }>;
};

const PlayerPage = async ({ params }: props) => {
  const { id } = await params;
  return (
    <>
      <iframe
        src={`https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=false`}
        className="w-screen min-h-[500px] border-0"
        allowFullScreen
      ></iframe>

      <h1>this is watch page</h1>
    </>
  );
};

export default PlayerPage;
