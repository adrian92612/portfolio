import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

type PreviewVideoProps = {
  videoId: string;
  closeVideoPlayer: () => void;
};

export default function PreviewVideo({
  videoId,
  closeVideoPlayer,
}: PreviewVideoProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideoPlayer();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeVideoPlayer]);
  return (
    <>
      <button
        className="fixed inset-0 bg-black/95 z-[4]"
        onClick={closeVideoPlayer}
        aria-label="Close video player"
        tabIndex={0}
      ></button>
      <div className="fixed z-[5] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[1000px] aspect-[16/9] overflow-hidden rounded-sm">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          style={{ border: "none" }}
          title="Youtube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
        <button
          onClick={closeVideoPlayer}
          className="absolute text-bgColor bg-black/90 top-1/2 translate-y-[-50%] right-5 h-8 w-8 border border-bgColor rounded-full text-3xl opacity-70 hover:opacity-100 z-[5] flex items-center justify-center gap-1"
          aria-label="Close video player"
        >
          <IoMdClose />
        </button>
      </div>
    </>
  );
}
