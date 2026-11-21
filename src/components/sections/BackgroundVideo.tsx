export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/images/hero-poster.jpg"
      src="/video/hero-video1.mp4"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
