import { Div } from '@/wrappers/HTMLWrappers';
import { Boxes } from './ui/shadcn-io/background-boxes';
import { FlickeringGrid } from './ui/shadcn-io/flickering-grid';
import { RetroGrid } from './ui/shadcn-io/retro-grid';
import { WarpBackground } from './ui/shadcn-io/warp-background';
import { WavyBackground } from './ui/shadcn-io/wavy-background';
interface Props {
  children?: React.ReactNode;
  background?: Background | null;
}
export enum Background {
  FLICKERING = 'FLICKERING',
  RETRO = 'RETRO',
  WARP = 'WARP',
  BOX = 'BOX'
}

export const ApplyShadCnBackground: React.FC<Props> = ({ children, background }) => {
  switch (background) {
    case Background.FLICKERING:
      return (
        <Div className="relative h-[calc(100vh-68px)] w-full overflow-hidden">
          <FlickeringGrid
            className="absolute inset-0"
            squareSize={4}
            gridGap={6}
            flickerChance={0.3}
            color="rgb(100, 100, 100)"
            maxOpacity={0.2}
          />
          <Div className="z-10">{children}</Div>
        </Div>
      );
    case Background.RETRO:
      return (
        <Div className="relative h-[calc(100vh-68px)] w-full overflow-hidden">
          <Div className="z-10">{children}</Div>
          <RetroGrid angle={65} cellSize={60} opacity={0.5} lightLineColor="#00ff41" darkLineColor="#00ff41" />
        </Div>
      );
    case Background.WARP:
      return (
        <Div className="relative h-[calc(100vh-68px)] w-full overflow-hidden">
          <WarpBackground
            perspective={100}
            beamsPerSide={4}
            beamSize={6}
            beamDuration={2.5}
            className="flex items-center justify-center h-[calc(100vh-68px)]"
          >
            <Div className="z-10">{children}</Div>
          </WarpBackground>
        </Div>
      );
    case Background.BOX:
      return (
        <Div className="relative h-[calc(100vh-68px)] w-full overflow-hidden">
          <Boxes className="absolute inset-0" />
          <Div className="z-10">{children}</Div>
        </Div>
      );
    default:
      return (
        <Div className="relative h-[calc(100vh-68px)] w-full overflow-hidden">
          <WavyBackground
            backgroundFill="#fff"
            colors={['#38bdf8', '#818cf8', '#c084fc', '#e879f9']}
            waveWidth={50}
            blur={10}
            speed="fast"
            waveOpacity={0.5}
            containerClassName="h-full w-full"
            className="flex items-center justify-center"
          >
            <Div className="z-10">{children}</Div>
          </WavyBackground>
        </Div>
      );
  }
};
