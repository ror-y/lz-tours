import React from "react";
import * as _ from "lodash";
import {
  Top,
  Heading,
  SubHeading,
  Table,
  Td,
  SongName,
  TourFlag,
  ToursYear,
  Key,
  KeyItem,
  KeyDidPlay,
  KeyDidPlayException,
  KeyDidPlayEncore,
} from "./styles";
import "./App.css";
import tours, { ISong, SONGS } from "./data";

const uniqSongs = _.uniq(
  _.flatMap(tours, (tour) => tour.songs.map((song) => song.name))
);

const getCellWidth = (shows: number) => {
  return shows * 2;
};

const getCellClassname = (tourSongs: ISong[], song: SONGS) => {
  const found = tourSongs.find((tourSong) => tourSong.name === song);

  if (found) {
    if (found.isException) {
      return "did-play--exception";
    }
    if (found.isEncore) {
      return "did-play--encore";
    }
  }
  if (tourSongs.map((tourSong) => tourSong.name).includes(song)) {
    return "did-play";
  }
  return "didnt-play";
};

const MainContent = () => (
  <>
    <XAxis />
    {uniqSongs.map((song) => (
      <tr key={song}>
        <SongName>{song}</SongName>
        {_.map(tours, (tour, idx) => (
          <Td
            key={tour.id}
            style={{
              width: `${getCellWidth(tour.shows || 100)}px`,
            }}
            className={`timeline-cell ${
              idx % 2 === 0 ? "zebra-dark" : "zebra-light"
            } ${getCellClassname(tour.songs, song)} `}
          ></Td>
        ))}
      </tr>
    ))}
    <XAxis />
  </>
);

const XAxis = () => (
  <tr>
    <Td>{/* Empty */}</Td>
    {_.map(tours, (tour, idx, collection) => (
      <TourFlag
        key={`${tour} ${idx}`}
        style={{ width: getCellWidth(tour.shows || 100) }}
      >
        <div>{tour.flag}</div>
        {idx === 0 && (
          <ToursYear>{tour.year.toString().substring(2)}</ToursYear>
        )}
        {idx !== 0 && collection[idx - 1].year !== tour.year && (
          <ToursYear>{tour.year.toString().substring(2)}</ToursYear>
        )}
      </TourFlag>
    ))}
  </tr>
);

const Legend = () => (
  <Key>
    <h3>Key:</h3>
    <KeyItem>
      <KeyDidPlay />
      <span> = Played</span>
    </KeyItem>
    <KeyItem>
      <KeyDidPlayException />
      <span> = Played sometimes</span>
    </KeyItem>
    <KeyItem>
      <KeyDidPlayEncore />
      <span> = Played as an Encore</span>
    </KeyItem>
  </Key>
);

function App() {
  return (
    <>
      <Top>
        <div>
          <Heading>Led Zeppelin Tours</Heading>
          <SubHeading>What did they play where, and when?</SubHeading>
        </div>
        <Legend />
      </Top>
      <Table>
        <tbody>
          <MainContent />
        </tbody>
      </Table>
    </>
  );
}

export default App;
