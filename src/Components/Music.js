import React,  { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image} from 'react-bootstrap';

const apiLink = 'https://api.spotify.com/v1/me/player/recently-played';
const apiKey = 'BQBLDVfQ9_HOKHdoDQqQLh-3HAe7PB3eNmkqs9uVrYNQFHXRSw1adJDK9ksNQRp1kO69-QAxn9LOFQjWByLYEEf2Ol42534cDlIvVaoS5siHYJu2EChGw0Xa88_45duGwqIRQhDDhZsokCx_ao4';

function MostPlayedRecentTrack(props) {
    const styles = {
        subheading: {
            fontFamily: 'Opensans-light',
            fontWeight: '400',
            fontSize: 24,
            color: '#838383',
            marginBottom: 3,
          },
          recentSong: {
            display: 'flex',
          },
          artist: {
            fontFamily: 'Lato',
            fontWeight: '900',
            fontSize: 36,
            margin: '10px 20px',
            color: '#5A5A5A',
            '@media (max-width: 768px)': {
              fontSize: 24,
            },
          },
          title: {
            fontFamily: 'Lato',
            fontWeight: '500',
            fontSize: 24,
            margin: '10px 20px',
            maxWidth: '20vw',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: '#838383',
            '@media (max-width: 768px)': {
              maxWidth: '50vw',
            },
          },
          recentSongLink: {
            textDecoration: 'none',
            color: 'black',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
          albumArt: {
            width: 100,
            height: 100,
          },
          smallText: {
            fontFamily: 'Lato',
            fontWeight: '400',
            fontSize: 18,
            color: '#838383',
            marginTop: 3,
          }

    }

    const [track, setTrack] = useState(null);
    useEffect(() => {
      axios({
        method: 'GET',
        url: apiLink,
        params: {
          method: 'user.gettoptracks',
          user: 'seyon1997',
          limit: '1',
          api_key: apiKey,
          period: '7day',
          format: 'json'
        },
      })
        .then((res) => {
          const trackInfo = res.data.toptracks.track[0];
          var topTrack = {
            name: trackInfo.name,
            artwork: trackInfo.image[0]['#text'],
            artist: trackInfo.artist.name,
            playCount: trackInfo.playcount,
          }
          axios({
            method: 'GET',
            url: apiLink,
            params: {
              method: 'track.getInfo',
              track: topTrack.name,
              artist: topTrack.artist,
              api_key: apiKey,
              format: 'json',
            },
          })
            .then((res) => {
              topTrack.artwork = res.data.track.album.image[2]['#text'];
              setTrack(topTrack); 
            })
            .catch(err => {
              console.log(err);
            })
        })
        .catch(err => {
          console.log(err);
        }) 
    }, []);
  
    if (!track) {
      return null;
    }
    return (
      <Container style={styles.main}>
        <h2 style={styles.title}>My most recently played song on Spotify is:</h2>
        <Row >
          <Col style={{padding: '2rem 2rem 0 2rem'}} md={3}><Image src={track.artwork} fluid/></Col>
          <Col style={styles.colCenter} md={9}><h2 style={styles.name}>{track.name}</h2><h3 style={styles.title}>{track.artist}</h3><h3 style={styles.title}>Play Count: {track.playCount}</h3></Col>
        </Row>
      </Container>
    );
  }
  
  export default  MostPlayedRecentTrack;