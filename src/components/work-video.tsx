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
      <div className="fixed inset-0 bg-black/95 z-[4]"></div>
      <div className="fixed z-[5] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[700px] aspect-[16/9] overflow-hidden rounded-sm">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
        <button
          onClick={closeVideoPlayer}
          className="absolute text-bgColor bg-black/90 top-2 right-2 h-8 w-8 border border-bgColor rounded-full text-3xl z-[5] flex items-center justify-center gap-1"
        >
          <IoMdClose />
        </button>
      </div>
    </>
  );
}
