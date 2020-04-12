import styled, { css } from "styled-components";

const didPlay = "mediumseagreen";
const didPlayException = "mediumaquamarine";
const didPlayEncore = "goldenrod";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.h1``;
export const SubHeading = styled.p``;

export const Table = styled.table`
  table-layout: fixed;
  border-spacing: 0 0;
  text-align: left;
  padding: 20px 0;

  tr {
    position: relative;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Td = styled.td`
  &.did-play,
  &.did-play--exception,
  &.did-play--encore {
    position: relative;
  }
  &.did-play:after,
  &.did-play--exception:after,
  &.did-play--encore:after {
    content: "";
    height: 8px;
    top: 3px;
    right: 0;
    left: 0;
    position: absolute;
  }

  &.did-play:after {
    background-color: ${didPlay};
  }

  &.did-play--exception:after {
    background-color: ${didPlayException};
  }

  &.did-play--encore:after {
    background-color: ${didPlayEncore};
  }

  &.zebra-dark {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const SongName = styled.td`
  white-space: nowrap;
`;

export const TourFlag = styled.td`
  vertical-align: top;
  font-size: 10px;
`;

export const ToursYear = styled.div`
  font-size: 12px;
`;

const keyShared = css`
  height: 10px;
  width: 10px;
  margin-right: 5px;
`;

export const Key = styled.div`
  width: 200px;
  border: 1px solid black;
  padding: 10px;
  box-sizing: border-box;
  font-size: 10px;
  margin-top: 20px;
`;

export const KeyItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const KeyDidPlay = styled.span`
${keyShared}
    background: ${didPlay};
`;

export const KeyDidPlayException = styled.span`
${keyShared}
    background: ${didPlayException};
`;

export const KeyDidPlayEncore = styled.span`
${keyShared}
    background: ${didPlayEncore};
`;
