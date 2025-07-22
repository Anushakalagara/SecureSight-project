interface Props {
  url: string;
}

export default function IncidentPlayer({ url }: Props) {
  return (
    <video controls width="100%">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}