const albumArt = require( 'album-art' )
const getPic = async () => {
  await  albumArt( 'Rush' ).then( (data)=>{
  return data
  })

}
//albumArt( 'Rush' ).then( console.log )


const ChartData = [
    {
      pos: 1,
      lw: "NEW",
      albumPhoto: await albumArt( 'Rush' ),
      title: "Shape of You - Ed Sheeran",
      dus: "18,923",
      physical: "3,445",
      download: "21,345",
      streams: "34,675",
    },
    {
      pos: 2,
      lw: 3,
      albumPhoto: "/musical-note.jpg",
      title: "Uptown Funk - Mark Ronson ft. Bruno Mars",
      dus: "15,678",
      physical: "2,890",
      download: "19,234",
      streams: "28,765",
    },
    {
      pos: 3,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_3",
      title: "Someone Like You - Adele",
      dus: "20,456",
      physical: "4,321",
      download: "23,567",
      streams: "36,789",
    },
    {
      pos: 4,
      lw: 6,
      albumPhoto: "url_to_album_photo_4",
      title: "Roar - Katy Perry",
      dus: "16,789",
      physical: "3,567",
      download: "18,234",
      streams: "29,876",
    },
    {
      pos: 5,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_5",
      title: "Shape of My Heart - Sting",
      dus: "22,345",
      physical: "4,567",
      download: "26,789",
      streams: "39,012",
    },
    {
      pos: 6,
      lw: 2,
      albumPhoto: "url_to_album_photo_6",
      title: "Smooth - Santana ft. Rob Thomas",
      dus: "14,567",
      physical: "2,345",
      download: "17,890",
      streams: "27,543",
    },
    {
      pos: 7,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_7",
      title: "I Want to Hold Your Hand - The Beatles",
      dus: "21,234",
      physical: "3,678",
      download: "25,456",
      streams: "37,890",
    },
    {
      pos: 8,
      lw: 9,
      albumPhoto: "url_to_album_photo_8",
      title: "Hallelujah - Leonard Cohen",
      dus: "13,890",
      physical: "2,012",
      download: "16,234",
      streams: "25,678",
    },
    {
      pos: 9,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_9",
      title: "Billie Jean - Michael Jackson",
      dus: "23,456",
      physical: "5,678",
      download: "27,890",
      streams: "42,567",
    },
    {
      pos: 10,
      lw: 7,
      albumPhoto: "url_to_album_photo_10",
      title: "Bohemian Rhapsody - Queen",
      dus: "17,890",
      physical: "3,456",
      download: "20,345",
      streams: "31,789",
    },
    {
      pos: 11,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_11",
      title: "Wonderwall - Oasis",
      dus: "19,234",
      physical: "4,567",
      download: "22,345",
      streams: "35,678",
    },
    {
      pos: 12,
      lw: 8,
      albumPhoto: "url_to_album_photo_12",
      title: "Hotel California - Eagles",
      dus: "16,789",
      physical: "3,234",
      download: "18,678",
      streams: "28,901",
    },
    {
      pos: 13,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_13",
      title: "Livin' on a Prayer - Bon Jovi",
      dus: "18,901",
      physical: "3,567",
      download: "21,234",
      streams: "32,456",
    },
    {
      pos: 14,
      lw: 5,
      albumPhoto: "url_to_album_photo_14",
      title: "Let It Be - The Beatles",
      dus: "14,567",
      physical: "2,123",
      download: "16,890",
      streams: "24,567",
    },
    {
      pos: 15,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_15",
      title: "Billie Jean - Michael Jackson",
      dus: "22,345",
      physical: "4,678",
      download: "26,789",
      streams: "38,901",
    },
    {
      pos: 16,
      lw: 4,
      albumPhoto: "url_to_album_photo_16",
      title: "Every Breath You Take - The Police",
      dus: "12,890",
      physical: "1,567",
      download: "15,234",
      streams: "22,456",
    },
    {
      pos: 17,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_17",
      title: "Stairway to Heaven - Led Zeppelin",
      dus: "20,123",
      physical: "3,678",
      download: "23,901",
      streams: "34,567",
    },
    {
      pos: 18,
      lw: 10,
      albumPhoto: "url_to_album_photo_18",
      title: "Hey Jude - The Beatles",
      dus: "13,567",
      physical: "2,345",
      download: "15,678",
      streams: "26,901",
    },
    {
      pos: 19,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_19",
      title: "I Can't Get No Satisfaction - The Rolling Stones",
      dus: "19,890",
      physical: "3,901",
      download: "22,456",
      streams: "33,678",
    },
    {
      pos: 20,
      lw: 12,
      albumPhoto: "url_to_album_photo_20",
      title: "Like a Rolling Stone - Bob Dylan",
      dus: "11,234",
      physical: "1,890",
      download: "13,567",
      streams: "20,123",
    },
    {
      pos: 21,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_21",
      title: "Bohemian Rhapsody - Queen",
      dus: "21,567",
      physical: "4,123",
      download: "24,678",
      streams: "36,901",
    },
    {
      pos: 22,
      lw: 11,
      albumPhoto: "url_to_album_photo_22",
      title: "Yesterday - The Beatles",
      dus: "14,901",
      physical: "2,234",
      download: "16,567",
      streams: "25,678",
    },
    {
      pos: 23,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_23",
      title: "Purple Haze - Jimi Hendrix",
      dus: "22,345",
      physical: "4,567",
      download: "26,789",
      streams: "39,012",
    },
    {
      pos: 24,
      lw: 13,
      albumPhoto: "url_to_album_photo_24",
      title: "Wonderwall - Oasis",
      dus: "10,678",
      physical: "1,234",
      download: "12,567",
      streams: "18,901",
    },
    {
      pos: 25,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_25",
      title: "Billie Jean - Michael Jackson",
      dus: "23,456",
      physical: "4,789",
      download: "27,890",
      streams: "41,567",
    },
    {
      pos: 26,
      lw: 14,
      albumPhoto: "url_to_album_photo_26",
      title: "No Woman, No Cry - Bob Marley",
      dus: "9,890",
      physical: "1,123",
      download: "11,567",
      streams: "17,901",
    },
    {
      pos: 27,
      lw: "NEW",
      albumPhoto: "url_to_album_photo_27",
      title: "Let It Be - The Beatles",
      dus: "20,567",
      physical: "3,234",
      download: "23,678",
      streams: "35,901",
    },
    {
      pos: 28,
      lw: 15,
      albumPhoto: "url_to_album_photo_28",
      title: "What's Going On - Marvin Gaye",
      dus: "8,901",
      physical: "1,567",
      download: "10,234",
      streams: "16,567",
    },
    {
      pos: 29,
      lw: "NEW",
      albumPhoto: "public/musical-note.jpg",
      title: "Sympathy for the Devil - The Rolling Stones",
      dus: "19,234",
      physical: "3,901",
      download: "22,567",
      streams: "32,901",
    },
    {
      pos: 30,
      lw: 16,
      albumPhoto: "url_to_album_photo_30",
      title: "Piano Man - Billy Joel",
      dus: "7,567",
      physical: "1,012",
      download: "9,345",
      streams: "14,678",
    },
  ];
  const getPics = async (title) => {
    for (let i=0; i<ChartData.length ; i++) {
        console.log(ChartData[i].title)
        await albumArt(ChartData[i].title).then((url)=>{
          console.log(url)
          ChartData[i].albumPhoto = url
        })
        .catch(async ()=>{
          ChartData[i].albumPhoto = await getPic()
        })
      }
    }
  await getPics()

  export default ChartData;
  