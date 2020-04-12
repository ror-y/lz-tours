import React from "react";
import _ from "lodash";
import "./App.css";
import tours from "./data";

const uniqSongs = _.uniq(
  _.flatMap(tours, (tour) => tour.songs.map((song) => song.name))
);
console.log(uniqSongs);
const getCellWidth = (number_shows) => {
  return number_shows;
};

const getCellClassname = (tourSongs, song) => {
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

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          {uniqSongs.map((song) => (
            <tr key={song}>
              <td className="song-name">{song}</td>
              {_.map(tours, (tour, idx) => (
                <td
                  key={tour.id}
                  style={{
                    width: `${getCellWidth(tour.number_shows || 100)}px`,
                  }}
                  className={`timeline-cell ${
                    idx % 2 === 0 ? "zebra-dark" : "zebra-light"
                  } ${getCellClassname(tour.songs, song)} `}
                ></td>
              ))}
            </tr>
          ))}
          <tr className="tours">
            <td>{/* Empty */}</td>
            {_.map(tours, (tour, idx, collection) => (
              <td
                key={`${tour} ${idx}`}
                style={{ width: getCellWidth(tour.number_shows || 100) }}
                className="tour-name"
              >
                <div>{tour.flag}</div>
                {idx === 0 && <div className="tours__year">{tour.year}</div>}
                {idx !== 0 && collection[idx - 1].year !== tour.year && (
                  <div className="tours__year">{tour.year}</div>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
