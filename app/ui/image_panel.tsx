import Image from "next/image";
import { assetPath } from "../lib/config";


const imageWidth = 1024;
const imageheight = 559;
const cropWidth = 526;
const cropHeight = 192;

const panels = {
  residence: { x: 10, y: 8 },
  remote: {x: 520, y: 8},
  industrial: { x: 10, y: 287 },
  portable: { x: 520, y: 287 }
};

type ImagePanelProps = {
  namepage: string;
  quadrant: keyof typeof panels;
  alt: string;
};

export function ImagePanel({ namepage, quadrant, alt }: ImagePanelProps) {
  const {x, y} = panels[quadrant];
  const imagePath = assetPath('hydrocell_' + namepage + '.webp');

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: `${cropWidth} / ${cropHeight}`,
        overflow: "hidden",
        borderRadius: 8,
      }}
    >
      <Image
        src={imagePath}
        alt={alt}
        width={imageWidth}
        height={imageheight}
        style={{
          position: "absolute",
          width: `${(-x / cropWidth) * 100}%`,
          maxWidth: "none",
          height: "auto",
          left: `${(-x / cropWidth) * 100}%`,
          top: `${(-y / cropHeight) * 100}%`,
        }}
      />
    </div>
  )
};
