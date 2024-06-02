import { useState } from "react";
import { Container, VStack, Text, IconButton, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const songs = [
  {
    title: "Song One",
    artist: "Artist One",
    albumArt: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGFydCUyMG9uZXxlbnwwfHx8fDE3MTczNjc3OTV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Song Two",
    artist: "Artist Two",
    albumArt: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGFydCUyMHR3b3xlbnwwfHx8fDE3MTczNjc3OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    albumArt: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGFydCUyMHRocmVlfGVufDB8fHx8MTcxNzM2Nzc5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    setProgress(0);
  };

  const playPrevious = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
    setProgress(0);
  };

  const handleSliderChange = (value) => {
    setProgress(value);
  };

  const currentSong = songs[currentSongIndex];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src={currentSong.albumArt} boxSize="200px" borderRadius="md" />
        <Text fontSize="2xl">{currentSong.title}</Text>
        <Text fontSize="lg">{currentSong.artist}</Text>
        <Box width="100%">
          <Slider aria-label="slider-ex-1" value={progress} onChange={handleSliderChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Box>
          <IconButton aria-label="Previous song" icon={<FaBackward />} onClick={playPrevious} />
          <IconButton aria-label="Play/Pause" icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={togglePlayPause} mx={4} />
          <IconButton aria-label="Next song" icon={<FaForward />} onClick={playNext} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
